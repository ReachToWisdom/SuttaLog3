// 상단 진도 바 + 하트 + 닫기/되돌아가기 + 발음 토글 + 스텝 번호
import { useState } from 'react'
import { HEARTS_MAX } from '../config'
import { isPronVisible, togglePronVisible, isPronEnEnabled, togglePronEn } from '../utils/pron-display'

interface Props {
  current: number
  total: number
  hearts: number
  onClose: () => void
  onBack?: () => void
}

export default function ProgressBar({ current, total, hearts, onClose, onBack }: Props) {
  const pct = total > 0 ? (current / total) * 100 : 0
  const [showPron, setShowPron] = useState(isPronVisible())
  const [showPronEn, setShowPronEn] = useState(isPronEnEnabled())
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className="flex items-center gap-2.5 px-4 py-3 relative"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* 닫기 — 원형 아이콘 */}
      <button
        onClick={onClose}
        className="w-8 h-8 flex items-center justify-center rounded-full shrink-0 transition-colors active:scale-90"
        style={{
          background: 'var(--color-border-light)',
          color: 'var(--color-text-tertiary)',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="2" y1="2" x2="12" y2="12" />
          <line x1="12" y1="2" x2="2" y2="12" />
        </svg>
      </button>

      {/* 되돌아가기 — 원형 아이콘 */}
      <button
        onClick={onBack}
        disabled={!onBack || current <= 0}
        className="w-8 h-8 flex items-center justify-center rounded-full shrink-0 transition-all active:scale-90"
        style={{
          background: current > 0 ? 'var(--color-border-light)' : 'transparent',
          color: 'var(--color-text-tertiary)',
          opacity: current > 0 ? 1 : 0.3,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9,2 4,7 9,12" />
        </svg>
      </button>

      {/* 진도 바 — 두껍게 + 그라디언트 */}
      <div
        className="flex-1 h-3.5 rounded-full overflow-hidden relative"
        style={{ background: 'var(--color-border-light)' }}
      >
        <div
          className="h-full rounded-full progress-bar-gradient"
          style={{
            width: `${pct}%`,
            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: pct > 0 ? '0 1px 4px rgba(192, 107, 10, 0.3)' : 'none',
          }}
        />
      </div>

      {/* 스텝 번호 */}
      <span
        className="text-xs font-semibold shrink-0 tabular-nums min-w-[36px] text-center"
        style={{ color: 'var(--color-text-tertiary)' }}
      >
        {current}/{total}
      </span>

      {/* 하트 — 약간 크게 + shake 애니메이션 */}
      <div className="flex gap-0.5 shrink-0">
        {Array.from({ length: HEARTS_MAX }, (_, i) => {
          const isAlive = i < hearts
          return (
            <span
              key={i}
              className={`text-xl transition-all duration-300 ${
                isAlive ? 'heart-pulse' : 'opacity-20 grayscale heart-shake'
              }`}
              style={{
                animationDelay: isAlive ? `${i * 200}ms` : '0ms',
                transform: isAlive ? 'scale(1)' : 'scale(0.85)',
              }}
            >
              🪷
            </span>
          )
        })}
      </div>

      {/* 발음 설정 토글 버튼 */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-8 h-8 flex items-center justify-center rounded-full shrink-0 transition-all active:scale-90"
        style={{
          background: menuOpen ? 'var(--color-primary-glow)' : 'var(--color-border-light)',
          color: menuOpen ? 'var(--color-primary)' : 'var(--color-text-tertiary)',
        }}
        title="발음 설정"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06c.5.5 1.21.71 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.2.63.32 1.06.33 1.82V11a2 2 0 0 1 0 4h-.09" />
        </svg>
      </button>

      {/* 발음 설정 드롭다운 */}
      {menuOpen && (
        <>
          {/* 배경 클릭으로 닫기 */}
          <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
          <div
            className="absolute right-4 top-14 z-50 rounded-xl p-3 flex flex-col gap-2 min-w-[180px]"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border-light)',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            {/* 발음 표시 ON/OFF */}
            <button
              onClick={() => { setShowPron(togglePronVisible()); }}
              className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm transition-colors"
              style={{ background: showPron ? 'var(--color-primary-glow)' : 'transparent' }}
            >
              <span style={{ color: 'var(--color-text)' }}>한글 발음</span>
              <span className="text-xs font-bold" style={{ color: showPron ? 'var(--color-primary)' : 'var(--color-text-tertiary)' }}>
                {showPron ? 'ON' : 'OFF'}
              </span>
            </button>
            {/* 영어 발음 ON/OFF */}
            <button
              onClick={() => { setShowPronEn(togglePronEn()); }}
              className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm transition-colors"
              style={{ background: showPronEn ? 'var(--color-primary-glow)' : 'transparent' }}
            >
              <span style={{ color: 'var(--color-text)' }}>영어 발음</span>
              <span className="text-xs font-bold" style={{ color: showPronEn ? 'var(--color-primary)' : 'var(--color-text-tertiary)' }}>
                {showPronEn ? 'ON' : 'OFF'}
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
