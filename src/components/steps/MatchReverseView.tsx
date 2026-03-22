// 뜻 보고 빠알리어 맞추기 (격변화 함정 포함) — 프리미엄 UI
import { useState } from 'react'
import type { MatchReverseStep } from '../../data/types'
import ExplanationBox from '../ExplanationBox'

interface Props {
  step: MatchReverseStep
  onCorrect: () => void
  onWrong: () => void
  onBack?: () => void
  onSkip?: () => void
}

/** A/B/C/D 라벨 */
const LABELS = ['A', 'B', 'C', 'D']

export default function MatchReverseView({ step, onCorrect, onWrong, onBack, onSkip }: Props) {
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
      {/* 방향 표시 뱃지 */}
      <div className="mb-3">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide"
          style={{
            background: 'var(--color-primary-glow)',
            color: 'var(--color-primary)',
            border: '1px solid var(--color-primary-light)',
          }}
        >
          <span>🔄</span>
          뜻 → 빠알리
        </span>
      </div>

      {/* 뜻 제시 카드: 큰따옴표 장식 + 세리프 */}
      <div
        className="rounded-2xl p-6 mb-5 relative overflow-hidden"
        style={{
          background: 'var(--color-surface-elevated)',
          border: '1px solid var(--color-border-light)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        {/* 장식 큰따옴표 (배경) */}
        <span
          className="absolute top-2 left-3 text-6xl leading-none select-none pointer-events-none"
          style={{
            color: 'var(--color-primary-light)',
            opacity: 0.15,
            fontFamily: 'Georgia, serif',
          }}
          aria-hidden
        >
          "
        </span>

        <p
          className="text-lg font-bold text-center relative z-10 leading-relaxed"
          style={{
            color: 'var(--color-primary)',
            fontFamily: "'Noto Serif', 'Georgia', serif",
          }}
        >
          {step.meaning}
        </p>

        {/* 하단 질문 텍스트 */}
        <p
          className="text-xs text-center mt-3 relative z-10"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          다음 뜻에 해당하는 빠알리어는?
        </p>
      </div>

      {/* 선택지 */}
      <div className="flex flex-col gap-3">
        {step.options.map((opt, idx) => {
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

      {/* 건너뛰기 */}
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
