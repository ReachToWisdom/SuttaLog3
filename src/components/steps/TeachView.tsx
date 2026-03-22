// 단어/발음 카드 학습 — 프리미엄 UI
import type { TeachStep } from '../../data/types'
import { speakPali } from '../../utils/pali-tts'
import { formatPron } from '../../utils/pron-display'

interface Props {
  step: TeachStep
  onNext: () => void
  onBack?: () => void
}

export default function TeachView({ step, onNext, onBack }: Props) {
  const handleSpeak = () => {
    const soundOn = localStorage.getItem('suttalog3-sound') !== 'off'
    if (soundOn) speakPali(step.word)
  }

  return (
    <div className="step-enter px-4 py-6 flex flex-col items-center gap-5">
      {/* 카테고리 뱃지 */}
      <div className="intro-fade-up">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
          style={{
            background: 'var(--color-primary-glow)',
            color: 'var(--color-primary)',
            border: '1px solid var(--color-primary-light)',
          }}
        >
          {step.icon && <span className="text-sm">{step.icon}</span>}
          단어 학습
        </span>
      </div>

      {/* 메인 단어 카드 — glass 효과 */}
      <div
        className="glass w-full max-w-sm rounded-2xl p-8 text-center intro-fade-up"
        style={{
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--color-border-light)',
        }}
      >
        <h2
          className="pali-text text-4xl font-bold mb-1 tracking-wide"
          style={{ color: 'var(--color-text)' }}
        >
          {step.word}
        </h2>
        {step.root && (
          <p className="text-xs mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
            어근: {step.root}
          </p>
        )}
      </div>

      {/* 뜻 + 문법 분리 영역 */}
      <div className="w-full max-w-sm intro-fade-up-delay flex flex-col gap-3">
        {/* 뜻 카드 */}
        <div
          className="p-4 rounded-xl text-center card-shadow"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border-light)',
          }}
        >
          <span className="text-xs font-medium tracking-wide uppercase"
            style={{ color: 'var(--color-text-tertiary)' }}>
            의미
          </span>
          <p className="text-xl font-bold mt-1" style={{ color: 'var(--color-text)' }}>
            {step.meaning}
          </p>
        </div>

        {/* 문법 뱃지 (별도 영역) */}
        {step.grammar && (
          <div className="flex justify-center">
            <span className="badge badge-primary text-xs px-3 py-1">
              {step.grammar}
            </span>
          </div>
        )}
      </div>

      {/* 경전 구절 인용 — 좌측 수직 라인 */}
      {step.verseLine && (
        <div className="w-full max-w-sm intro-fade-up-delay2">
          <div
            className="pl-4 py-3 rounded-r-xl"
            style={{
              borderLeft: '3px solid var(--color-primary)',
              background: 'var(--color-primary-glow)',
            }}
          >
            <p className="pali-text text-sm leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}>
              {step.verseLine}
            </p>
            {step.verseLineKo && (
              <p className="text-xs mt-1.5 italic"
                style={{ color: 'var(--color-text-tertiary)' }}>
                {step.verseLineKo}
              </p>
            )}
          </div>
        </div>
      )}

      {/* 발음 영역 — 배경 카드 + 스피커 버튼 우측 */}
      <div className="w-full max-w-sm intro-fade-up-delay2">
        <div
          className="p-4 rounded-2xl flex items-center justify-between card-shadow"
          style={{
            background: 'linear-gradient(135deg, var(--color-surface-elevated) 0%, var(--color-surface) 100%)',
            border: '1px solid var(--color-border-light)',
          }}
        >
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-text-tertiary)' }}>
              발음 · Pronunciation
            </span>
            <p className="text-lg font-semibold mt-0.5" style={{ color: 'var(--color-text)' }}>
              {formatPron(step.pronKo, step.pronEn)}
            </p>
          </div>
          <button
            onClick={handleSpeak}
            className="w-11 h-11 flex items-center justify-center rounded-full audio-ripple transition-transform active:scale-90"
            style={{
              background: 'var(--color-primary-glow)',
              color: 'var(--color-primary)',
              border: '1px solid var(--color-primary-light)',
            }}
          >
            <span className="text-xl">🔊</span>
          </button>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="flex gap-3 w-full max-w-sm mt-1">
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
