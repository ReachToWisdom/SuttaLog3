// 단원 완료 화면 — 축하 프리미엄 UI + 에빙하우스 반복 현황
import { LESSONS } from '../../data/lessons-index'

/** 반복 현황 아이템 타입 */
interface RepeatItem {
  lessonId: string
  count: number
  max: number
  done: boolean
}

interface Props {
  correctCount: number
  totalQuizzes: number
  hearts: number
  elapsed: number
  repeatStatus?: RepeatItem[]
  onHome: () => void
  onNext: () => void
}

/** 단원 ID → 짧은 제목 */
function getLessonTitle(lessonId: string): string {
  const lesson = LESSONS.find(l => l.id === lessonId)
  return lesson?.subtitle ?? lesson?.title ?? lessonId
}

export default function CompletionView({
  correctCount, totalQuizzes, hearts, elapsed, repeatStatus, onHome, onNext,
}: Props) {
  const mins = Math.floor(elapsed / 60)
  const secs = elapsed % 60
  const accuracy = totalQuizzes > 0 ? Math.round((correctCount / totalQuizzes) * 100) : 100

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--color-surface-elevated) 0%, var(--color-bg) 40%, var(--color-bg) 100%)',
      }}
    >
      {/* 배경 장식 원들 */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full opacity-20 glow-pulse"
        style={{ background: 'var(--color-primary-glow)', filter: 'blur(60px)' }} />

      {/* 축하 아이콘 — 큰 원형 배경 + confetti 느낌 */}
      <div
        className="relative w-32 h-32 rounded-full flex items-center justify-center mb-6 bounce-in"
        style={{
          background: 'var(--color-primary-glow)',
          border: '3px solid var(--color-primary-light)',
          boxShadow: '0 0 60px var(--color-primary-glow), var(--shadow-xl)',
        }}
      >
        <span className="text-6xl">🪷</span>
        {/* 장식 별 */}
        <span className="absolute -top-2 -right-1 text-2xl confetti" style={{ animationDelay: '0.2s' }}>✨</span>
        <span className="absolute -top-1 -left-2 text-xl confetti" style={{ animationDelay: '0.5s' }}>⭐</span>
        <span className="absolute -bottom-1 -right-2 text-lg confetti" style={{ animationDelay: '0.8s' }}>🌟</span>
      </div>

      {/* 타이틀 */}
      <h1
        className="text-3xl font-bold mb-2 intro-fade-up"
        style={{ color: 'var(--color-text)' }}
      >
        단원 완료!
      </h1>

      <p className="text-base mb-8 intro-fade-up-delay"
        style={{ color: 'var(--color-text-secondary)' }}>
        훌륭합니다, 수고하셨습니다 🙏
      </p>

      {/* 통계 카드 — 3열 그리드 */}
      <div className="w-full max-w-sm grid grid-cols-3 gap-3 mb-6 intro-fade-up-delay2">
        <StatCard
          icon="✅"
          value={`${correctCount}/${totalQuizzes}`}
          label="정답"
          sub={`${accuracy}%`}
          color="var(--color-accent)"
        />
        <StatCard
          icon="🪷"
          value={`${hearts}`}
          label="남은 연꽃"
          color="var(--color-primary)"
        />
        <StatCard
          icon="⏱"
          value={`${mins}:${String(secs).padStart(2, '0')}`}
          label="소요 시간"
          color="var(--color-text-secondary)"
        />
      </div>

      {/* 에빙하우스 반복 현황 */}
      {repeatStatus && repeatStatus.length > 0 && (
        <div className="w-full max-w-sm mb-8 intro-fade-up-delay2">
          <p className="text-xs font-semibold mb-2 px-1"
            style={{ color: 'var(--color-text-secondary)' }}>
            이전 단원 반복 현황
          </p>
          <div
            className="rounded-xl p-3 space-y-2"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border-light)',
            }}
          >
            {repeatStatus.map(item => (
              <div key={item.lessonId} className="flex items-center justify-between">
                <span className="text-xs truncate flex-1 mr-2"
                  style={{ color: item.done ? 'var(--color-accent)' : 'var(--color-text)' }}>
                  {item.done ? '✓ ' : ''}{getLessonTitle(item.lessonId)}
                </span>
                <div className="flex items-center gap-1">
                  {/* 반복 횟수 도트 표시 */}
                  {Array.from({ length: item.max }, (_, i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        background: i < item.count
                          ? 'var(--color-primary)'
                          : 'var(--color-border-light)',
                      }}
                    />
                  ))}
                  <span className="text-[10px] ml-1 tabular-nums"
                    style={{ color: 'var(--color-text-tertiary)' }}>
                    {item.count}/{item.max}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 버튼 영역 */}
      <div className="flex gap-3 w-full max-w-sm intro-fade-up-delay2">
        <button onClick={onHome} className="btn-secondary flex-1 py-3.5">
          홈으로
        </button>
        <button
          onClick={onNext}
          className="flex-1 py-3.5 rounded-xl text-white font-bold text-base transition-all active:scale-95"
          style={{
            background: 'var(--color-primary-gradient)',
            boxShadow: '0 4px 20px rgba(192, 107, 10, 0.35), 0 2px 8px rgba(192, 107, 10, 0.2)',
          }}
        >
          다음 단원
        </button>
      </div>
    </div>
  )
}

/** 통계 카드 컴포넌트 */
function StatCard({ icon, value, label, sub, color }: {
  icon: string
  value: string
  label: string
  sub?: string
  color?: string
}) {
  return (
    <div
      className="flex flex-col items-center p-4 rounded-2xl card-shadow"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-light)',
      }}
    >
      {/* 아이콘 원형 배경 */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
        style={{ background: 'var(--color-primary-glow)' }}
      >
        <span className="text-lg">{icon}</span>
      </div>
      {/* 큰 숫자 */}
      <span className="text-xl font-bold tabular-nums" style={{ color: color ?? 'var(--color-text)' }}>
        {value}
      </span>
      {/* 라벨 */}
      <span className="text-[10px] font-medium mt-0.5 tracking-wide"
        style={{ color: 'var(--color-text-tertiary)' }}>
        {label}
      </span>
      {/* 부가 정보 */}
      {sub && (
        <span className="text-[10px] font-semibold mt-0.5"
          style={{ color }}>
          {sub}
        </span>
      )}
    </div>
  )
}
