// 단원 시작 소개 화면 — 프리미엄 UI
import type { IntroStep } from '../../data/types'

interface Props {
  step: IntroStep
  onNext: () => void
  onBack?: () => void
}

export default function IntroView({ step, onNext, onBack }: Props) {
  return (
    <div className="step-enter px-4 py-12 flex flex-col items-center justify-center min-h-[60vh]">
      {/* 큰 원형 아이콘 배경 */}
      <div
        className="w-28 h-28 rounded-full flex items-center justify-center mb-8 intro-fade-up"
        style={{
          background: 'var(--color-primary-glow)',
          border: '2px solid var(--color-primary-light)',
          boxShadow: '0 0 40px var(--color-primary-glow), var(--shadow-lg)',
        }}
      >
        <span className="text-5xl">{step.icon}</span>
      </div>

      {/* 제목 — 큰 세리프 */}
      <h1
        className="pali-text text-3xl font-bold text-center mb-3 intro-fade-up-delay tracking-wide"
        style={{ color: 'var(--color-text)' }}
      >
        {step.title}
      </h1>

      {/* 부제 — primary 뱃지 */}
      <div className="intro-fade-up-delay mb-5">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold"
          style={{
            background: 'var(--color-primary-glow)',
            color: 'var(--color-primary)',
            border: '1px solid var(--color-primary-light)',
          }}
        >
          {step.subtitle}
        </span>
      </div>

      {/* 설명 — 카드에 감싸기 */}
      <div
        className="w-full max-w-xs p-5 rounded-2xl text-center mb-10 intro-fade-up-delay2 card-shadow"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border-light)',
        }}
      >
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {step.description}
        </p>
      </div>

      {/* 하단 버튼 */}
      <div className="flex gap-3 intro-fade-up-delay2">
        {onBack && (
          <button onClick={onBack} className="btn-secondary px-6 py-4 rounded-2xl text-lg font-bold">
            ←
          </button>
        )}
        <button
          onClick={onNext}
          className="px-10 py-4 rounded-2xl text-lg font-bold text-white transition-all duration-300 active:scale-95"
          style={{
            background: 'var(--color-primary-gradient)',
            boxShadow: '0 4px 20px rgba(192, 107, 10, 0.35), 0 2px 8px rgba(192, 107, 10, 0.2)',
          }}
        >
          학습 시작
        </button>
      </div>
    </div>
  )
}
