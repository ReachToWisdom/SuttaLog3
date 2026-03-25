// 하단 4탭 네비게이션
import { useLocation, useNavigate } from 'react-router-dom'

const TABS = [
  { path: '/', label: '홈', icon: '🏠' },
  { path: '/courses', label: '과목', icon: '📚' },
  { path: '/review', label: '복습', icon: '🔄' },
  { path: '/profile', label: '프로필', icon: '👤' },
] as const

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  // 학습 중일 때 숨김
  if (location.pathname.startsWith('/learn') || location.pathname.startsWith('/review-learn')) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 bottom-bar-frost z-50 border-t"
      style={{ borderColor: 'var(--color-border-light)' }}>
      <div className="flex justify-around items-center max-w-lg mx-auto py-1">
        {TABS.map(tab => {
          const active = location.pathname === tab.path
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center gap-0.5 py-1 px-4 rounded-lg transition-all"
              style={{
                color: active ? 'var(--color-primary)' : 'var(--color-text-tertiary)',
                background: active ? 'var(--color-primary-glow)' : 'transparent',
              }}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
