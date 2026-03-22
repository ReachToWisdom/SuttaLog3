// 학습 엔진 — 스텝 순회 + 하트 + 진도 저장 + 이어하기 + 건너뛰기 + 에빙하우스 복습
import { useState, useCallback, useMemo, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { HEARTS_MAX, STORAGE_PREFIX } from '../../config'
import { getLessonById } from '../../data/lessons-index'
import type { Step, VerseWord } from '../../data/types'
import { addWrongAnswer, recordCorrect, recordWrong } from '../../utils/wrong-tracker'
import { recordStudyTime } from '../../utils/study-tracker'
import { incrementRepeat, getReviewTargets, getRepeatStatus } from '../../utils/ebbinghaus'
import { genMeaningQuiz, genReverseQuiz } from '../../data/quiz-generator'
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

  // 에빙하우스 복습 퀴즈를 현재 단원 스텝에 삽입
  const stepsWithReview = useMemo(() => {
    if (!lesson || reviewMode) return lesson?.steps ?? []
    return insertReviewQuizzes(lesson.steps, lessonId ?? '')
  }, [lesson, lessonId, reviewMode])

  // 이어하기: 리뷰 모드에서는 항상 처음부터
  // 저장된 스텝이 현재 스텝 수를 초과하면 0으로 리셋 (버전 업데이트 대비)
  const savedStep = useMemo(() => {
    if (reviewMode) return 0
    const saved = getSavedStep(lessonId ?? '')
    const total = stepsWithReview.length
    return (total > 0 && saved >= total) ? 0 : saved
  }, [lessonId, reviewMode, stepsWithReview])

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

  const steps = stepsWithReview
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
        // 에빙하우스 반복 횟수 증가
        incrementRepeat(lessonId ?? '')
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
        repeatStatus={getRepeatStatus(lessonId ?? '')}
        onHome={() => navigate('/')}
        onNext={() => navigate('/courses')}
      />
    )
  }

  const step: Step | undefined = steps[currentStep]

  // 스텝이 없으면 처음으로 리셋
  if (!step) {
    if (currentStep !== 0) {
      setCurrentStep(0)
      setStepKey(prev => prev + 1)
      localStorage.removeItem(resumeKey(lessonId ?? ''))
    }
    return null
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg)' }}>
      <ProgressBar
        current={currentStep}
        total={total}
        hearts={hearts}
        onClose={handleClose}
        onBack={currentStep > 0 ? handleBack : undefined}
      />

      {/* 상단 머릿말: 지금 뭐 배우고 있는지 */}
      <div className="px-4 py-1.5 max-w-lg mx-auto w-full">
        <span className="text-xs font-medium" style={{ color: 'var(--color-text-tertiary)' }}>
          {lesson.icon} {lesson.title} · {lesson.subtitle}
        </span>
      </div>

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

/** 배열 셔플 (Fisher-Yates) */
function shuffle<T>(arr: T[]): T[] {
  const r = [...arr]
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[r[i], r[j]] = [r[j], r[i]]
  }
  return r
}

/**
 * 이전 단원의 important 단어로 복습 퀴즈 생성 후
 * 현재 단원 스텝 사이사이에 삽입 (10스텝마다 1개)
 */
function insertReviewQuizzes(originalSteps: Step[], currentLessonId: string): Step[] {
  const reviewTargets = getReviewTargets(currentLessonId)
  if (reviewTargets.length === 0) return originalSteps

  // 복습 대상 단원들의 important 단어 수집
  const reviewWords: VerseWord[] = []
  for (const targetId of reviewTargets) {
    const targetLesson = getLessonById(targetId)
    if (!targetLesson) continue
    for (const step of targetLesson.steps) {
      if (step.type === 'verse' && step.words) {
        for (const w of step.words) {
          if (w.important) reviewWords.push(w)
        }
      }
    }
  }

  if (reviewWords.length === 0) return originalSteps

  // 복습 퀴즈 생성 (뜻 퀴즈 + 역방향 퀴즈 혼합, 최대 10개)
  const reviewQuizzes: Step[] = []
  const shuffled = shuffle(reviewWords)
  const maxReview = Math.min(shuffled.length, 10)
  for (let i = 0; i < maxReview; i++) {
    const word = shuffled[i]
    // 뜻 퀴즈와 역방향 퀴즈를 번갈아 생성
    if (i % 2 === 0) {
      reviewQuizzes.push(genMeaningQuiz(word, reviewWords))
    } else {
      reviewQuizzes.push(genReverseQuiz(word, reviewWords))
    }
  }

  // 10스텝마다 복습 퀴즈 1개 삽입
  const REVIEW_INTERVAL = 10
  const result: Step[] = []
  let reviewIdx = 0
  for (let i = 0; i < originalSteps.length; i++) {
    result.push(originalSteps[i])
    // 10스텝마다 + 아직 복습 퀴즈 남아있으면 삽입
    if ((i + 1) % REVIEW_INTERVAL === 0 && reviewIdx < reviewQuizzes.length) {
      result.push(reviewQuizzes[reviewIdx])
      reviewIdx++
    }
  }

  return result
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
