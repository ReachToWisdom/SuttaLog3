// 4지선다 퀴즈 (발음/단어 뜻) — 프리미엄 UI
import { useState } from 'react'
import type { QuizStep } from '../../data/types'
import ExplanationBox from '../ExplanationBox'

interface Props {
  step: QuizStep
  onCorrect: () => void
  onWrong: () => void
  onBack?: () => void
  onSkip?: () => void
}

/** A/B/C/D 라벨 */
const LABELS = ['A', 'B', 'C', 'D']

export default function QuizView({ step, onCorrect, onWrong, onBack, onSkip }: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const isCorrect = selected === step.answer

  const handleSelect = (idx: number) => {
    if (showResult) return
    setSelected(idx)
    setShowResult(true)
  }

  const handleNext = () => {
    if (isCorrect) onCorrect()
    else onWrong()
  }

  return (
    <div className="step-enter px-4 py-6">
      {/* 질문 카드: glass 효과 */}
      <div
        className="glass rounded-2xl p-5 mb-5"
        style={{
          background: 'var(--color-primary-gradient)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <h2
          className="text-lg font-bold leading-snug"
          style={{ color: '#fff' }}
        >
          {step.question}
        </h2>

        {/* 힌트 */}
        {step.hint && (
          <div
            className="mt-3 px-3 py-2 rounded-xl flex items-center gap-2 text-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.18)',
              color: 'rgba(255, 255, 255, 0.92)',
            }}
          >
            <span className="text-base">💡</span>
            <span>{step.hint}</span>
          </div>
        )}
      </div>

      {/* 선택지 */}
      <div className="flex flex-col gap-3">
        {step.options.map((opt, idx) => {
          // 상태별 스타일 계산
          const isAnswer = idx === step.answer
          const isSelectedWrong = idx === selected && !isCorrect
          let borderColor = 'var(--color-border)'
          let bg = 'var(--color-surface)'
          let labelBg = 'var(--color-border-light)'
          let labelColor = 'var(--color-text-secondary)'
          let anim = ''
          let icon = ''

          if (showResult) {
            if (isAnswer) {
              borderColor = 'var(--color-accent)'
              bg = 'rgba(46, 125, 50, 0.08)'
              labelBg = 'var(--color-accent)'
              labelColor = '#fff'
              anim = 'option-correct'
              icon = '✓'
            } else if (isSelectedWrong) {
              borderColor = 'var(--color-error)'
              bg = 'rgba(198, 40, 40, 0.06)'
              labelBg = 'var(--color-error)'
              labelColor = '#fff'
              anim = 'option-wrong'
              icon = '✗'
            }
          }

          const dimmed = showResult && !isAnswer && !isSelectedWrong

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={showResult}
              className={`w-full text-left flex items-center gap-3 p-4 rounded-xl border-2
                         transition-all duration-200 ${anim}
                         ${!showResult ? 'hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]' : ''}`}
              style={{
                borderColor,
                background: bg,
                opacity: dimmed ? 0.45 : 1,
              }}
            >
              {/* A/B/C/D 원형 뱃지 */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0
                           transition-colors duration-200"
                style={{
                  background: labelBg,
                  color: labelColor,
                  boxShadow: showResult && (isAnswer || isSelectedWrong)
                    ? `0 2px 8px ${isAnswer ? 'rgba(46,125,50,0.3)' : 'rgba(198,40,40,0.3)'}`
                    : 'none',
                }}
              >
                {icon || LABELS[idx]}
              </div>

              {/* 선택지 텍스트 */}
              <span className="pali-text text-base flex-1">{opt}</span>
            </button>
          )
        })}
      </div>

      {/* 건너뛰기 (답 선택 전에만) */}
      {!showResult && onSkip && (
        <button
          onClick={onSkip}
          className="w-full mt-4 py-3 text-sm font-medium rounded-xl transition-all active:scale-[0.98]"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          건너뛰기 →
        </button>
      )}

      {/* 해설 */}
      {showResult && (
        <ExplanationBox
          isCorrect={isCorrect}
          explanation={step.explanation}
          onNext={handleNext}
          onBack={onBack}
        />
      )}
    </div>
  )
}
