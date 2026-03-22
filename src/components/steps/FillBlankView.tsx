// 빈칸 채우기 퀴즈 — 문장에서 빈칸에 알맞은 격 형태 선택
import { useState } from 'react'
import type { FillBlankStep } from '../../data/types'
import ExplanationBox from '../ExplanationBox'

interface Props {
  step: FillBlankStep
  onCorrect: () => void
  onWrong: () => void
  onBack?: () => void
  onSkip?: () => void
}

const LABELS = ['A', 'B', 'C', 'D']

/** 문장에서 ___ 부분을 하이라이트하여 렌더링 */
function renderSentence(sentence: string, showAnswer: boolean, blank: string) {
  const parts = sentence.split('___')
  if (parts.length < 2) return <span className="pali-text">{sentence}</span>

  return (
    <span className="pali-text">
      {parts[0]}
      <span
        className="inline-block px-2 py-0.5 mx-1 rounded-lg font-bold"
        style={{
          background: showAnswer ? 'rgba(46, 125, 50, 0.15)' : 'rgba(192, 107, 10, 0.15)',
          color: showAnswer ? 'var(--color-accent)' : 'var(--color-primary)',
          borderBottom: showAnswer ? 'none' : '2px dashed var(--color-primary)',
          minWidth: '4rem',
          textAlign: 'center',
        }}
      >
        {showAnswer ? blank : '______'}
      </span>
      {parts[1]}
    </span>
  )
}

export default function FillBlankView({ step, onCorrect, onWrong, onBack, onSkip }: Props) {
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
      {/* 문장 카드 */}
      <div
        className="glass rounded-2xl p-5 mb-3"
        style={{
          background: 'var(--color-primary-gradient)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base">📝</span>
          <span className="text-sm font-bold" style={{ color: 'rgba(255,255,255,0.85)' }}>
            빈칸 채우기
          </span>
        </div>
        <p className="text-base leading-relaxed" style={{ color: '#fff' }}>
          {renderSentence(step.sentence, showResult && isCorrect, step.blank)}
        </p>
      </div>

      {/* 한글 번역 (맥락 제공) */}
      <div
        className="rounded-xl px-4 py-3 mb-5 text-sm leading-relaxed"
        style={{
          background: 'var(--color-surface)',
          color: 'var(--color-text-secondary)',
          border: '1px solid var(--color-border-light)',
        }}
      >
        {step.translation}
      </div>

      {/* 질문 */}
      <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>
        빈칸에 들어갈 알맞은 형태는?
      </p>

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
