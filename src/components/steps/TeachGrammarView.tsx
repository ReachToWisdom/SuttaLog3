// 문법 설명 스텝 — 단어 터치 시 발음 재생 + 한글 발음 자동 표시
import type { TeachGrammarStep } from '../../data/types'
import { speakPali } from '../../utils/pali-tts'
import { autoPronoKo } from '../../utils/auto-pronko'
import { isPronVisible } from '../../utils/pron-display'

interface Props {
  step: TeachGrammarStep
  onNext: () => void
  onBack?: () => void
}

/** 빠알리 텍스트 + 한글 발음 + 터치 재생 */
function PaliTap({ text, className, style }: {
  text: string
  className?: string
  style?: React.CSSProperties
}) {
  const showPron = isPronVisible()

  const handleTap = () => {
    const soundOn = localStorage.getItem('suttalog3-sound') !== 'off'
    if (soundOn) speakPali(text)
  }

  return (
    <span
      onClick={handleTap}
      className={`cursor-pointer active:opacity-60 transition-opacity inline-flex flex-col items-start ${className ?? ''}`}
      style={style}
    >
      <span className="flex items-center gap-1">
        {text}
        <span className="text-xs opacity-40">🔊</span>
      </span>
      {showPron && (
        <span className="text-xs" style={{ color: 'var(--color-primary)' }}>
          {autoPronoKo(text)}
        </span>
      )}
    </span>
  )
}

export default function TeachGrammarView({ step, onNext, onBack }: Props) {
  return (
    <div className="step-enter px-4 py-6 flex flex-col gap-5">
      {/* 카테고리 뱃지 */}
      <div className="intro-fade-up">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
          style={{
            background: 'rgba(91, 33, 182, 0.1)',
            color: '#5B21B6',
            border: '1px solid rgba(91, 33, 182, 0.2)',
          }}
        >
          📐 문법 포인트
        </span>
      </div>

      {/* 제목 */}
      <h2 className="text-xl font-bold intro-fade-up" style={{ color: 'var(--color-text)' }}>
        {step.title}
      </h2>

      {/* 설명 */}
      <div
        className="p-4 rounded-xl intro-fade-up-delay"
        style={{
          background: 'var(--color-surface-elevated)',
          border: '1px solid var(--color-border-light)',
        }}
      >
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {step.description}
        </p>
      </div>

      {/* 예문들 — 터치 시 발음 재생 */}
      <div className="flex flex-col gap-3 intro-fade-up-delay">
        {step.examples.map((ex, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border-l-4"
            style={{
              borderColor: '#5B21B6',
              background: 'var(--color-surface)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {/* 빠알리 원문 — 터치하면 발음 */}
            <PaliTap
              text={ex.pali}
              className="pali-text text-base font-semibold block mb-1"
              style={{ color: 'var(--color-text)' }}
            />
            {/* 분해 */}
            <p className="text-sm mb-1" style={{ color: '#5B21B6' }}>
              → {ex.breakdown}
            </p>
            {/* 뜻 */}
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {ex.meaning}
            </p>
          </div>
        ))}
      </div>

      {/* 격변화 — 카드 리스트 (모바일 최적화) */}
      {step.table && (
        <div className="intro-fade-up-delay2">
          <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            {step.table.label}
          </h3>
          <div className="flex flex-col gap-2">
            {step.table.rows.map((row, i) => (
              <div
                key={i}
                className="p-3 rounded-xl flex flex-col gap-1"
                style={{
                  background: i % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-elevated)',
                  border: '1px solid var(--color-border-light)',
                }}
              >
                {/* 상단: 격 이름 + 어미 */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                    {row.case}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(91, 33, 182, 0.1)', color: '#5B21B6' }}>
                    {row.ending}
                  </span>
                </div>
                {/* 하단: 예시 + 뜻 */}
                <div className="flex items-center justify-between">
                  <PaliTap
                    text={row.example}
                    className="pali-text text-base font-medium"
                    style={{ color: 'var(--color-text)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {row.meaning}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 이전 단원 연결 */}
      {step.relatedLesson && (
        <div
          className="p-3 rounded-xl flex items-start gap-2 text-sm intro-fade-up-delay2"
          style={{
            background: 'var(--color-primary-glow)',
            border: '1px solid var(--color-primary-light)',
            color: 'var(--color-primary)',
          }}
        >
          <span className="text-base leading-none mt-0.5">🔗</span>
          <span className="leading-relaxed">{step.relatedLesson}</span>
        </div>
      )}

      {/* 팁 */}
      {step.tip && (
        <div
          className="p-3 rounded-xl flex items-start gap-2 text-sm"
          style={{
            background: 'rgba(192, 107, 10, 0.06)',
            border: '1px solid rgba(192, 107, 10, 0.15)',
            color: 'var(--color-primary)',
          }}
        >
          <span className="text-base leading-none mt-0.5">💡</span>
          <span className="leading-relaxed">{step.tip}</span>
        </div>
      )}

      {/* 하단 버튼 */}
      <div className="flex gap-3 w-full mt-2">
        {onBack && (
          <button onClick={onBack} className="btn-secondary flex-1 py-3.5 text-base">
            ← 이전
          </button>
        )}
        <button onClick={onNext} className="btn-primary flex-1 py-3.5 text-base">
          다음 →
        </button>
      </div>
    </div>
  )
}
