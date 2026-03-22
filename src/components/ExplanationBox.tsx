// 정답/오답 후 해설 표시 + 하단 고정 "계속하기" 버튼
import { useRef, useEffect } from 'react'
import type { Explanation } from '../data/types'

interface Props {
  isCorrect: boolean
  explanation: Explanation
  onNext: () => void
  onBack?: () => void
}

export default function ExplanationBox({ isCorrect, explanation, onNext, onBack }: Props) {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      boxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 100)
  }, [])

  return (
    <>
      {/* 해설 카드 */}
      <div
        ref={boxRef}
        className="reveal-down mt-6 rounded-2xl overflow-hidden mb-24"
        style={{
          background: isCorrect
            ? 'rgba(46, 125, 50, 0.06)'
            : 'rgba(198, 40, 40, 0.06)',
          border: `1px solid ${isCorrect ? 'rgba(46, 125, 50, 0.15)' : 'rgba(198, 40, 40, 0.15)'}`,
        }}
      >
        <div className="flex">
          {/* 수직 액센트 바 */}
          <div
            className="w-1 shrink-0"
            style={{
              background: isCorrect ? 'var(--color-accent)' : 'var(--color-error)',
            }}
          />

          <div className="flex-1 p-4">
            {/* 헤더 */}
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{
                  background: isCorrect ? 'var(--color-accent)' : 'var(--color-error)',
                  boxShadow: isCorrect
                    ? '0 2px 8px rgba(46, 125, 50, 0.3)'
                    : '0 2px 8px rgba(198, 40, 40, 0.3)',
                }}
              >
                {isCorrect ? '✓' : '✗'}
              </div>
              <span className="text-lg font-bold" style={{
                color: isCorrect ? 'var(--color-accent)' : 'var(--color-error)',
              }}>
                {isCorrect ? '정답입니다!' : '틀렸습니다'}
              </span>
            </div>

            {/* 정답 해설 */}
            <p className="text-sm leading-relaxed mb-1" style={{ color: 'var(--color-text)' }}>
              {explanation.correct}
            </p>

            {/* 상세 설명 */}
            {explanation.detail && (
              <div
                className="mt-3 p-3 rounded-xl text-sm leading-relaxed whitespace-pre-line"
                style={{
                  background: 'var(--color-surface)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border-light)',
                }}
              >
                {explanation.detail}
              </div>
            )}

            {/* 팁 */}
            {explanation.tip && (
              <div
                className="mt-3 p-3 rounded-xl flex items-start gap-2 text-sm"
                style={{
                  background: 'rgba(192, 107, 10, 0.06)',
                  border: '1px solid rgba(192, 107, 10, 0.15)',
                  color: 'var(--color-primary)',
                }}
              >
                <span className="text-base leading-none mt-0.5">💡</span>
                <span className="leading-relaxed">{explanation.tip}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 하단 고정 버튼 영역 */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 pb-safe"
        style={{
          background: 'linear-gradient(0deg, var(--color-bg) 70%, transparent 100%)',
        }}
      >
        <div className="flex gap-3 max-w-lg mx-auto">
          {/* 이전 버튼 */}
          {onBack && (
            <button
              onClick={onBack}
              className="py-4 px-5 rounded-xl font-bold text-base tracking-wide
                         active:scale-[0.98] transition-transform"
              style={{
                background: 'var(--color-surface)',
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border)',
              }}
            >
              ← 이전
            </button>
          )}
          {/* 계속하기 버튼 */}
          <button
            onClick={onNext}
            className="flex-1 py-4 rounded-xl text-white font-bold text-base tracking-wide
                       active:scale-[0.98] transition-transform"
            style={{
              background: 'var(--color-primary-gradient)',
              boxShadow: '0 4px 14px rgba(192, 107, 10, 0.3)',
            }}
          >
            계속하기 →
          </button>
        </div>
      </div>
    </>
  )
}
