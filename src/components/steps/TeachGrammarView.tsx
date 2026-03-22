// 문법 설명 스텝 — 단어 터치 시 발음 재생
import type { TeachGrammarStep } from '../../data/types'
import { speakPali } from '../../utils/pali-tts'

interface Props {
  step: TeachGrammarStep
  onNext: () => void
  onBack?: () => void
}

/** 빠알리 텍스트를 터치하면 발음 재생 */
function PaliTap({ text, className, style }: {
  text: string
  className?: string
  style?: React.CSSProperties
}) {
  const handleTap = () => {
    const soundOn = localStorage.getItem('suttalog3-sound') !== 'off'
    if (soundOn) speakPali(text)
  }

  return (
    <span
      onClick={handleTap}
      className={`cursor-pointer active:opacity-60 transition-opacity ${className ?? ''}`}
      style={style}
    >
      {text}
      <span className="text-xs ml-1 opacity-40">🔊</span>
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

      {/* 격변화 테이블 — 가로 스크롤 + 터치 시 발음 */}
      {step.table && (
        <div className="intro-fade-up-delay2">
          <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--color-text-secondary)' }}>
            {step.table.label}
          </h3>
          <div
            className="rounded-xl overflow-x-auto border"
            style={{ borderColor: 'var(--color-border-light)', WebkitOverflowScrolling: 'touch' }}
          >
            <table className="w-full text-sm" style={{ minWidth: '320px' }}>
              <thead>
                <tr style={{ background: 'var(--color-surface-elevated)' }}>
                  <th className="text-left px-3 py-2 font-semibold" style={{ color: 'var(--color-text-secondary)' }}>격</th>
                  <th className="text-left px-3 py-2 font-semibold" style={{ color: 'var(--color-text-secondary)' }}>어미</th>
                  <th className="text-left px-3 py-2 font-semibold pali-text" style={{ color: 'var(--color-text-secondary)' }}>예</th>
                  <th className="text-left px-3 py-2 font-semibold" style={{ color: 'var(--color-text-secondary)' }}>뜻</th>
                </tr>
              </thead>
              <tbody>
                {step.table.rows.map((row, i) => (
                  <tr key={i} style={{
                    background: i % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-elevated)',
                  }}>
                    <td className="px-3 py-2 font-medium" style={{ color: 'var(--color-text)' }}>{row.case}</td>
                    <td className="px-3 py-2" style={{ color: '#5B21B6' }}>{row.ending}</td>
                    <td className="px-3 py-2">
                      <PaliTap
                        text={row.example}
                        className="pali-text"
                        style={{ color: 'var(--color-text)' }}
                      />
                    </td>
                    <td className="px-3 py-2" style={{ color: 'var(--color-text-secondary)' }}>{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
