// 조립 퀴즈 (독해/작문) — 조각을 탭하여 문장 조립, 프리미엄 UI
import { useState, useCallback } from 'react'
import type { ArrangeReadingStep, ArrangeWritingStep } from '../../data/types'
import ExplanationBox from '../ExplanationBox'

type ArrangeStep = ArrangeReadingStep | ArrangeWritingStep

interface Props {
  step: ArrangeStep
  onCorrect: () => void
  onWrong: () => void
  onBack?: () => void
  onSkip?: () => void
}

/** 배열 셔플 */
function shuffle<T>(arr: T[]): T[] {
  const r = [...arr]
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[r[i], r[j]] = [r[j], r[i]]
  }
  return r
}

export default function ArrangeView({ step, onCorrect, onWrong, onBack, onSkip }: Props) {
  const isReading = step.type === 'arrange-reading'
  const correctPieces = step.pieces
  const allDistractorTexts = step.distractors.map(d => d.text)

  // 정답 조각 + 함정 조각 셔플
  const [available] = useState(() =>
    shuffle([...correctPieces, ...allDistractorTexts])
  )

  const [placed, setPlaced] = useState<string[]>([])
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set())
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  // 조각 탭 → 답안에 추가
  const handlePick = useCallback((piece: string, idx: number) => {
    if (showResult || usedIndices.has(idx)) return
    const newPlaced = [...placed, piece]
    setPlaced(newPlaced)
    setUsedIndices(prev => new Set(prev).add(idx))

    // 정답 개수만큼 채웠으면 자동 채점
    if (newPlaced.length === correctPieces.length) {
      const correct = newPlaced.every((p, i) => p === correctPieces[i])
      setIsCorrect(correct)
      setShowResult(true)
    }
  }, [placed, usedIndices, showResult, correctPieces])

  // 답안에서 조각 제거 (되돌리기)
  const handleRemove = useCallback((idx: number) => {
    if (showResult) return
    const piece = placed[idx]
    const origIdx = available.findIndex((p, i) => p === piece && usedIndices.has(i))
    setPlaced(prev => prev.filter((_, i) => i !== idx))
    if (origIdx >= 0) {
      setUsedIndices(prev => {
        const next = new Set(prev)
        next.delete(origIdx)
        return next
      })
    }
  }, [placed, available, usedIndices, showResult])

  const handleNext = () => {
    if (isCorrect) onCorrect()
    else onWrong()
  }

  return (
    <div className="step-enter px-4 py-6">
      {/* 상단 뱃지 */}
      <div className="mb-3">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide"
          style={{
            background: 'var(--color-primary-glow)',
            color: 'var(--color-primary)',
            border: '1px solid var(--color-primary-light)',
          }}
        >
          <span>{isReading ? '📖' : '✍️'}</span>
          {isReading ? '독해' : '작문'}
        </span>
      </div>

      {/* 제시문 카드: 세리프 느낌 큰 텍스트 */}
      <div
        className="rounded-2xl p-5 mb-5"
        style={{
          background: 'var(--color-surface-elevated)',
          border: '1px solid var(--color-border-light)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <p
          className={`text-xl font-semibold leading-relaxed text-center ${isReading ? 'pali-text' : ''}`}
          style={{
            color: 'var(--color-text)',
            fontFamily: isReading
              ? "'Noto Serif', 'Georgia', serif"
              : 'inherit',
          }}
        >
          {isReading
            ? (step as ArrangeReadingStep).pali
            : (step as ArrangeWritingStep).korean}
        </p>
      </div>

      {/* 답안 영역: 배경 + 최소 높이 + placeholder */}
      <div
        className="min-h-[64px] p-3.5 rounded-2xl mb-5 flex flex-wrap gap-2 items-start
                   transition-all duration-300"
        style={{
          background: showResult
            ? (isCorrect ? 'rgba(46, 125, 50, 0.05)' : 'rgba(198, 40, 40, 0.05)')
            : 'var(--color-surface)',
          border: `2px solid ${
            showResult
              ? (isCorrect ? 'var(--color-accent)' : 'var(--color-error)')
              : 'var(--color-border-light)'
          }`,
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.03)',
        }}
      >
        {placed.length === 0 && (
          <span
            className="text-sm py-1.5 select-none"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            ↓ 아래 조각을 탭하여 문장을 조립하세요
          </span>
        )}
        {placed.map((piece, idx) => (
          <button
            key={`placed-${idx}`}
            onClick={() => handleRemove(idx)}
            className={`px-3.5 py-2 rounded-full text-sm font-semibold
                       transition-all duration-200 active:scale-95
                       ${isReading ? '' : 'pali-text'}`}
            style={{
              background: 'var(--color-primary-glow)',
              border: '1.5px solid var(--color-primary-light)',
              color: 'var(--color-primary)',
              boxShadow: '0 1px 3px rgba(192, 107, 10, 0.15)',
            }}
          >
            {piece}
            {!showResult && (
              <span className="ml-1.5 opacity-50 text-xs">✕</span>
            )}
          </button>
        ))}
      </div>

      {/* 선택 가능한 조각들: 필 형태 */}
      <div className="flex flex-wrap gap-2.5">
        {available.map((piece, idx) => {
          const used = usedIndices.has(idx)
          return (
            <button
              key={`avail-${idx}`}
              onClick={() => handlePick(piece, idx)}
              disabled={used || showResult}
              className={`px-3.5 py-2 rounded-full text-sm font-medium
                         transition-all duration-200
                         ${!used && !showResult ? 'hover:shadow-md hover:-translate-y-0.5 active:scale-95' : ''}
                         ${isReading ? '' : 'pali-text'}`}
              style={{
                background: used ? 'var(--color-border-light)' : 'var(--color-surface)',
                border: `1.5px solid ${used ? 'transparent' : 'var(--color-border)'}`,
                color: used ? 'var(--color-text-tertiary)' : 'var(--color-text)',
                opacity: used ? 0.35 : 1,
                textDecoration: used ? 'line-through' : 'none',
              }}
            >
              {piece}
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
