// 복습 화면 — 3가지 모드: 오답 복습 / 단어 복습 / 약한 단어
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { STORAGE_PREFIX } from '../../config'
import { LESSONS } from '../../data/lessons-index'
import { getWrongAnswers, getWeakWords, clearWrongAnswers } from '../../utils/wrong-tracker'
import { ALL_MANGALA_WORDS } from '../../data/mangala-words'
import { ALL_LETTERS } from '../../data/alphabet'
import { generateMixedQuizzes } from '../../data/quiz-generator'
import type { Step } from '../../data/types'
import type { VerseWord } from '../../data/types'

type ReviewMode = 'menu' | 'wrong' | 'words' | 'weak'

function getProgress(lessonId: string): number {
  const val = localStorage.getItem(`${STORAGE_PREFIX}lesson-${lessonId}`)
  return parseFloat(val ?? '0') || 0
}

export default function Review() {
  const navigate = useNavigate()
  const [mode, setMode] = useState<ReviewMode>('menu')

  const wrongAnswers = getWrongAnswers()
  const weakWords = getWeakWords(15)
  const hasLearned = getProgress('alphabet') > 0 || getProgress('mangala') > 0

  // 메뉴 화면
  if (mode === 'menu') {
    return (
      <div className="pb-20 px-4 pt-6 max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
          복습
        </h1>
        <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          배운 내용을 다양한 방식으로 복습합니다
        </p>

        <div className="flex flex-col gap-4">
          {/* 오답 복습 */}
          <ReviewCard
            icon="❌"
            title="오답 복습"
            description={wrongAnswers.length > 0
              ? `틀린 문제 ${wrongAnswers.length}개를 다시 풀어봅니다`
              : '아직 틀린 문제가 없습니다'}
            count={wrongAnswers.length}
            disabled={wrongAnswers.length === 0}
            onClick={() => setMode('wrong')}
            color="var(--color-error)"
          />

          {/* 단어 퀴즈 */}
          <ReviewCard
            icon="🔀"
            title="단어 랜덤 퀴즈"
            description="배운 모든 단어를 무작위로 복습합니다"
            disabled={!hasLearned}
            onClick={() => setMode('words')}
            color="var(--color-primary)"
          />

          {/* 약한 단어 */}
          <ReviewCard
            icon="💪"
            title="약한 단어 집중"
            description={weakWords.length > 0
              ? `자주 틀리는 단어 ${weakWords.length}개를 집중 복습합니다`
              : '아직 약한 단어 데이터가 없습니다'}
            count={weakWords.length}
            disabled={weakWords.length === 0}
            onClick={() => setMode('weak')}
            color="var(--color-accent)"
          />
        </div>

        {/* 단원 리뷰 — 아무 단원이나 열어보기 (진도 영향 없음) */}
        <div className="mt-6">
          <h2 className="text-sm font-bold mb-3 px-1" style={{ color: 'var(--color-text-secondary)' }}>
            단원 열어보기 (진도 영향 없음)
          </h2>
          <div className="flex flex-col gap-2">
            {LESSONS.map(lesson => (
              <button
                key={lesson.id}
                onClick={() => navigate(`/review-learn/${lesson.id}`)}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all active:scale-[0.98]"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-light)' }}
              >
                <span className="text-2xl">{lesson.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="pali-text text-sm font-bold truncate" style={{ color: 'var(--color-text)' }}>
                    {lesson.title}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>{lesson.subtitle}</p>
                </div>
                <span className="text-xs" style={{ color: 'var(--color-primary)' }}>리뷰 →</span>
              </button>
            ))}
          </div>
        </div>

        {/* 오답 초기화 */}
        {wrongAnswers.length > 0 && (
          <button
            onClick={() => {
              if (confirm('오답 기록을 초기화하시겠습니까?')) {
                clearWrongAnswers()
                location.reload()
              }
            }}
            className="w-full mt-8 py-3 text-sm font-medium rounded-xl"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            오답 기록 초기화
          </button>
        )}
      </div>
    )
  }

  // 복습 모드별 퀴즈 생성 후 학습 화면으로 이동
  // (ReviewQuizEngine 사용)
  return (
    <ReviewQuizEngine
      mode={mode}
      wrongAnswers={wrongAnswers}
      weakWords={weakWords}
      onBack={() => setMode('menu')}
    />
  )
}

/** 복습 카드 컴포넌트 */
function ReviewCard({ icon, title, description, count, disabled, onClick, color }: {
  icon: string
  title: string
  description: string
  count?: number
  disabled: boolean
  onClick: () => void
  color: string
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full flex items-center gap-4 p-5 rounded-2xl text-left transition-all card-shadow active:scale-[0.98]"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-light)',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {/* 아이콘 */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
        style={{ background: `color-mix(in srgb, ${color} 12%, transparent)` }}
      >
        <span className="text-2xl">{icon}</span>
      </div>

      {/* 정보 */}
      <div className="flex-1 min-w-0">
        <p className="font-bold text-[15px]" style={{ color: 'var(--color-text)' }}>
          {title}
        </p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-tertiary)' }}>
          {description}
        </p>
      </div>

      {/* 카운트 뱃지 */}
      {count !== undefined && count > 0 && (
        <span
          className="px-2.5 py-1 rounded-full text-xs font-bold shrink-0"
          style={{ background: `color-mix(in srgb, ${color} 15%, transparent)`, color }}
        >
          {count}
        </span>
      )}
    </button>
  )
}

// ── 복습 퀴즈 엔진 (간이) ──

import ProgressBar from '../../components/ProgressBar'
import QuizView from '../../components/steps/QuizView'
import MatchReverseView from '../../components/steps/MatchReverseView'
import type { WrongAnswer } from '../../utils/wrong-tracker'
import type { WordStat } from '../../utils/wrong-tracker'
import { genMeaningQuiz, genReverseQuiz } from '../../data/quiz-generator'

function shuffle<T>(arr: T[]): T[] {
  const r = [...arr]
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[r[i], r[j]] = [r[j], r[i]]
  }
  return r
}

/** 모든 학습된 단어 (자모 + 행복경) */
function getAllLearnedWords(): VerseWord[] {
  const words: VerseWord[] = []
  // 자모를 VerseWord로 변환
  for (const letter of ALL_LETTERS) {
    words.push({
      pali: letter.roman,
      pronKo: letter.pronKo,
      meaning: letter.pronDesc ?? letter.pronKo,
    })
  }
  // 행복경 단어
  words.push(...ALL_MANGALA_WORDS)
  return words
}

function ReviewQuizEngine({ mode, wrongAnswers, weakWords, onBack }: {
  mode: ReviewMode
  wrongAnswers: WrongAnswer[]
  weakWords: WordStat[]
  onBack: () => void
}) {
  const allWords = getAllLearnedWords()

  // 모드별 퀴즈 생성
  const steps: Step[] = (() => {
    switch (mode) {
      case 'wrong': {
        // 오답에서 퀴즈 재생성 (최대 20개)
        const recent = wrongAnswers.slice(-20).reverse()
        const quizzes: Step[] = []
        for (const wrong of recent) {
          // 오답 단어 찾기
          const word = allWords.find(w =>
            wrong.question.includes(w.pali) || wrong.question.includes(w.meaning)
          )
          if (word) {
            quizzes.push(genMeaningQuiz(word, allWords))
            quizzes.push(genReverseQuiz(word, allWords))
          }
        }
        return shuffle(quizzes).slice(0, 20)
      }

      case 'words': {
        // 배운 모든 단어에서 랜덤 퀴즈 (20개)
        return shuffle(generateMixedQuizzes(allWords)).slice(0, 20)
      }

      case 'weak': {
        // 약한 단어에서 집중 퀴즈
        const quizzes: Step[] = []
        for (const stat of weakWords) {
          const word = allWords.find(w => w.pali === stat.pali)
          if (word) {
            quizzes.push(genMeaningQuiz(word, allWords))
            quizzes.push(genReverseQuiz(word, allWords))
          }
        }
        return shuffle(quizzes).slice(0, 20)
      }

      default:
        return []
    }
  })()

  const [currentStep, setCurrentStep] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [stepKey, setStepKey] = useState(0)

  const total = steps.length

  if (total === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <span className="text-5xl mb-4">📭</span>
        <p className="text-base mb-4" style={{ color: 'var(--color-text-secondary)' }}>
          복습할 문제가 없습니다
        </p>
        <button onClick={onBack} className="btn-primary">돌아가기</button>
      </div>
    )
  }

  // 완료
  if (currentStep >= total) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4"
        style={{ background: 'var(--color-bg)' }}>
        <span className="text-6xl mb-4 bounce-in">🎉</span>
        <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
          복습 완료!
        </h1>
        <p className="text-base mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          {correctCount}/{total} 정답
        </p>
        <div className="flex gap-3">
          <button onClick={onBack} className="btn-secondary px-6 py-3">
            돌아가기
          </button>
          <button
            onClick={() => { setCurrentStep(0); setCorrectCount(0); setStepKey(prev => prev + 1) }}
            className="btn-primary px-6 py-3"
          >
            다시 풀기
          </button>
        </div>
      </div>
    )
  }

  const step = steps[currentStep]

  const advance = () => {
    setCurrentStep(prev => prev + 1)
    setStepKey(prev => prev + 1)
  }

  const handleCorrect = () => {
    setCorrectCount(prev => prev + 1)
    advance()
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
      setStepKey(prev => prev + 1)
    }
  }

  const modeLabel = mode === 'wrong' ? '오답 복습' : mode === 'weak' ? '약한 단어' : '단어 퀴즈'

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg)' }}>
      <ProgressBar
        current={currentStep}
        total={total}
        hearts={3}
        onClose={onBack}
        onBack={currentStep > 0 ? handleBack : undefined}
      />

      {/* 모드 표시 */}
      <div className="px-4 pb-1">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
          style={{
            background: 'var(--color-primary-glow)',
            color: 'var(--color-primary)',
          }}
        >
          {modeLabel}
        </span>
      </div>

      <div className="flex-1 max-w-lg mx-auto w-full overflow-y-auto" key={stepKey}>
        {step.type === 'quiz' && (
          <QuizView
            step={step}
            onCorrect={handleCorrect}
            onWrong={advance}
            onBack={currentStep > 0 ? handleBack : undefined}
            onSkip={advance}
          />
        )}
        {step.type === 'match-reverse' && (
          <MatchReverseView
            step={step}
            onCorrect={handleCorrect}
            onWrong={advance}
            onBack={currentStep > 0 ? handleBack : undefined}
            onSkip={advance}
          />
        )}
      </div>
    </div>
  )
}
