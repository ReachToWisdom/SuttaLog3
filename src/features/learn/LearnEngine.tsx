// 학습 엔진 — 스텝 순회 + 하트 + 진도 저장 + 이어하기 + 건너뛰기
import { useState, useCallback, useMemo, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { HEARTS_MAX, STORAGE_PREFIX } from '../../config'
import { getLessonById } from '../../data/lessons-index'
import type { Step } from '../../data/types'
import { addWrongAnswer, recordCorrect, recordWrong } from '../../utils/wrong-tracker'
import { recordStudyTime } from '../../utils/study-tracker'
import ProgressBar from '../../components/ProgressBar'
import IntroView from '../../components/steps/IntroView'
import TeachGrammarView from '../../components/steps/TeachGrammarView'
import TeachView from '../../components/steps/TeachView'
import QuizView from '../../components/steps/QuizView'
import MatchReverseView from '../../components/steps/MatchReverseView'
import ArrangeView from '../../components/steps/ArrangeView'
import FillBlankView from '../../components/steps/FillBlankView'
import VerseView from '../../components/steps/VerseView'
import VocabListView from '../../components/steps/VocabListView'
import CompletionView from './CompletionView'
import { debouncedPush } from '../../utils/sync'

interface LearnEngineProps {
  reviewMode?: boolean
}

/** 이어하기 진도 키 */
function resumeKey(lessonId: string) {
  return `${STORAGE_PREFIX}resume-${lessonId}`
}

/** 저장된 이어하기 스텝 조회 */
function getSavedStep(lessonId: string): number {
  const val = localStorage.getItem(resumeKey(lessonId))
  return parseInt(val ?? '0', 10) || 0
}

export default function LearnEngine({ reviewMode = false }: LearnEngineProps) {
  const { lessonId } = useParams<{ lessonId: string }>()
  const navigate = useNavigate()

  const lesson = useMemo(() => getLessonById(lessonId ?? ''), [lessonId])

  // 이어하기: 리뷰 모드에서는 항상 처음부터
  const savedStep = useMemo(() => reviewMode ? 0 : getSavedStep(lessonId ?? ''), [lessonId, reviewMode])

  const [currentStep, setCurrentStep] = useState(savedStep)
  const [hearts, setHearts] = useState(HEARTS_MAX)
  const [correctCount, setCorrectCount] = useState(0)
  const [startTime] = useState(Date.now())
  const [isComplete, setIsComplete] = useState(false)
  const [stepKey, setStepKey] = useState(0)

  // 스텝 변경 시 진도 자동 저장 (이어하기용, 리뷰 모드 제외)
  useEffect(() => {
    if (lessonId && !isComplete && !reviewMode) {
      localStorage.setItem(resumeKey(lessonId), String(currentStep))
    }
  }, [currentStep, lessonId, isComplete, reviewMode])

  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <p className="text-lg mb-4">단원을 찾을 수 없습니다</p>
        <button onClick={() => navigate('/courses')} className="btn-primary">
          과목 목록으로
        </button>
      </div>
    )
  }

  const steps = lesson.steps
  const total = steps.length

  const handleClose = () => navigate(-1)

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
      setStepKey(prev => prev + 1)
    }
  }, [currentStep])

  const advance = useCallback(() => {
    if (currentStep + 1 >= total) {
      setIsComplete(true)
      if (!reviewMode) {
        // 진도 저장 + 이어하기 초기화 + 학습 시간 기록 (리뷰 모드 제외)
        const key = `${STORAGE_PREFIX}lesson-${lessonId}`
        localStorage.setItem(key, '100')
        localStorage.removeItem(resumeKey(lessonId ?? ''))
        const elapsed = Math.floor((Date.now() - startTime) / 60000)
        recordStudyTime(Math.max(1, elapsed))
        debouncedPush()
      }
    } else {
      setCurrentStep(prev => prev + 1)
      setStepKey(prev => prev + 1)
    }
  }, [currentStep, total, lessonId])

  // 건너뛰기: 하트 감소 없이 다음으로
  const handleSkip = useCallback(() => {
    advance()
  }, [advance])

  const handleCorrect = useCallback(() => {
    setCorrectCount(prev => prev + 1)
    // 단어 통계 기록
    const s = steps[currentStep]
    if (s && 'question' in s) {
      const word = extractWordFromQuestion(s.question)
      if (word) recordCorrect(word)
    }
    advance()
  }, [advance, steps, currentStep])

  const handleWrong = useCallback(() => {
    // 오답 기록
    const s = steps[currentStep]
    if (s && 'question' in s && 'options' in s && 'answer' in s) {
      const q = s as { question: string; options: string[]; answer: number }
      addWrongAnswer({
        question: q.question,
        correctAnswer: q.options[q.answer],
        userAnswer: '(오답)',
        lessonId: lessonId ?? '',
      })
      const word = extractWordFromQuestion(q.question)
      if (word) recordWrong(word)
    }

    const newHearts = hearts - 1
    setHearts(newHearts)
    if (newHearts <= 0) {
      setCurrentStep(0)
      setHearts(HEARTS_MAX)
      setCorrectCount(0)
      setStepKey(prev => prev + 1)
    } else {
      advance()
    }
  }, [hearts, advance, steps, currentStep, lessonId])

  if (isComplete) {
    return (
      <CompletionView
        correctCount={correctCount}
        totalQuizzes={steps.filter(s =>
          s.type === 'quiz' || s.type === 'match-reverse' ||
          s.type === 'arrange-reading' || s.type === 'arrange-writing' ||
          s.type === 'fill-blank' || s.type === 'match-listen'
        ).length}
        hearts={hearts}
        elapsed={Math.floor((Date.now() - startTime) / 1000)}
        onHome={() => navigate('/')}
        onNext={() => navigate('/courses')}
      />
    )
  }

  const step: Step = steps[currentStep]

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg)' }}>
      <ProgressBar
        current={currentStep}
        total={total}
        hearts={hearts}
        onClose={handleClose}
        onBack={currentStep > 0 ? handleBack : undefined}
      />

      <div className="flex-1 max-w-lg mx-auto w-full overflow-y-auto" key={stepKey}>
        {renderStep(step, advance, handleCorrect, handleWrong, currentStep > 0 ? handleBack : undefined, handleSkip)}
      </div>
    </div>
  )
}

/** 퀴즈 질문에서 단어 추출: "xxx"의 발음은? → xxx */
function extractWordFromQuestion(question: string): string | null {
  const match = question.match(/"([^"]+)"/)
  return match ? match[1] : null
}

/** 스텝 타입별 렌더링 분기 */
function renderStep(
  step: Step,
  onNext: () => void,
  onCorrect: () => void,
  onWrong: () => void,
  onBack?: () => void,
  onSkip?: () => void,
) {
  switch (step.type) {
    case 'intro':
      return <IntroView step={step} onNext={onNext} onBack={onBack} />
    case 'teach':
      return <TeachView step={step} onNext={onNext} onBack={onBack} />
    case 'teach-grammar':
      return <TeachGrammarView step={step} onNext={onNext} onBack={onBack} />
    case 'quiz':
      return <QuizView step={step} onCorrect={onCorrect} onWrong={onWrong} onBack={onBack} onSkip={onSkip} />
    case 'match-reverse':
      return <MatchReverseView step={step} onCorrect={onCorrect} onWrong={onWrong} onBack={onBack} onSkip={onSkip} />
    case 'arrange-reading':
    case 'arrange-writing':
      return <ArrangeView step={step} onCorrect={onCorrect} onWrong={onWrong} onBack={onBack} onSkip={onSkip} />
    case 'fill-blank':
      return <FillBlankView step={step} onCorrect={onCorrect} onWrong={onWrong} onBack={onBack} onSkip={onSkip} />
    case 'verse':
      return <VerseView step={step} onNext={onNext} onBack={onBack} />
    case 'vocab-list':
      return <VocabListView step={step} onNext={onNext} onBack={onBack} />
    case 'match-listen':
      return <QuizView step={step as any} onCorrect={onCorrect} onWrong={onWrong} onBack={onBack} onSkip={onSkip} />
    default:
      return <div className="p-4">알 수 없는 스텝 유형</div>
  }
}
