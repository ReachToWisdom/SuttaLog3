// 공부 기록 + 통계 화면 — 차트 + 평균 + 기록
import {
  getRecentDays,
  getDailyAverage,
  getWeeklyAverage,
  getTotalMinutes,
  getTotalDays,
} from '../../utils/study-tracker'
import { getWeakWords, getWordStats } from '../../utils/wrong-tracker'

/** 분 → "X시간 Y분" 형식 */
function formatMin(m: number): string {
  if (m < 60) return `${m}분`
  return `${Math.floor(m / 60)}시간 ${m % 60}분`
}

export default function Stats() {
  const recent7 = getRecentDays(7)
  const recent30 = getRecentDays(30)
  const dailyAvg = getDailyAverage()
  const weeklyAvg = getWeeklyAverage()
  const totalMin = getTotalMinutes()
  const totalDays = getTotalDays()
  const weakWords = getWeakWords(10)
  const wordStats = getWordStats()
  const totalWords = Object.keys(wordStats).length
  const masteredWords = Object.values(wordStats).filter(s => s.correct >= 3 && s.wrong === 0).length

  // 7일 차트 최대값
  const max7 = Math.max(...recent7.map(d => d.minutes), 1)

  return (
    <div className="pb-20 px-4 pt-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
        공부 기록
      </h1>

      {/* 주간 차트 (최근 7일) */}
      <div
        className="p-5 rounded-2xl mb-5 card-shadow"
        style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-light)' }}
      >
        <h2 className="text-sm font-bold mb-4" style={{ color: 'var(--color-text-secondary)' }}>
          최근 7일
        </h2>
        <div className="flex items-end justify-between gap-2 h-28">
          {recent7.map((day, i) => {
            const h = day.minutes > 0 ? Math.max((day.minutes / max7) * 100, 8) : 4
            const dayLabel = new Date(day.date).toLocaleDateString('ko', { weekday: 'short' })
            const isToday = i === recent7.length - 1
            return (
              <div key={day.date} className="flex-1 flex flex-col items-center gap-1">
                {/* 시간 라벨 */}
                {day.minutes > 0 && (
                  <span className="text-[10px] font-semibold" style={{ color: 'var(--color-primary)' }}>
                    {day.minutes}분
                  </span>
                )}
                {/* 바 */}
                <div
                  className="w-full rounded-t-lg transition-all"
                  style={{
                    height: `${h}%`,
                    background: day.minutes > 0
                      ? (isToday ? 'var(--color-primary-gradient)' : 'var(--color-primary-light)')
                      : 'var(--color-border-light)',
                    minHeight: '4px',
                  }}
                />
                {/* 요일 */}
                <span
                  className="text-[10px] font-medium"
                  style={{ color: isToday ? 'var(--color-primary)' : 'var(--color-text-tertiary)' }}
                >
                  {dayLabel}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* 평균 통계 */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <StatBox icon="📅" label="일평균" value={formatMin(dailyAvg)} />
        <StatBox icon="📊" label="주평균" value={formatMin(weeklyAvg)} />
        <StatBox icon="⏱" label="총 학습" value={formatMin(totalMin)} />
        <StatBox icon="🔥" label="학습 일수" value={`${totalDays}일`} />
      </div>

      {/* 단어 숙달 현황 */}
      <div
        className="p-5 rounded-2xl mb-5 card-shadow"
        style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-light)' }}
      >
        <h2 className="text-sm font-bold mb-3" style={{ color: 'var(--color-text-secondary)' }}>
          단어 숙달 현황
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            {/* 진도 바 */}
            <div className="h-3 rounded-full overflow-hidden mb-2"
              style={{ background: 'var(--color-border-light)' }}>
              <div
                className="h-full rounded-full progress-bar-gradient"
                style={{ width: totalWords > 0 ? `${(masteredWords / totalWords) * 100}%` : '0%' }}
              />
            </div>
            <div className="flex justify-between text-xs">
              <span style={{ color: 'var(--color-text-tertiary)' }}>학습: {totalWords}개</span>
              <span style={{ color: 'var(--color-accent)' }}>숙달: {masteredWords}개</span>
            </div>
          </div>
        </div>
      </div>

      {/* 약한 단어 TOP 10 */}
      {weakWords.length > 0 && (
        <div
          className="p-5 rounded-2xl mb-5 card-shadow"
          style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-light)' }}
        >
          <h2 className="text-sm font-bold mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            약한 단어 TOP {weakWords.length}
          </h2>
          <div className="flex flex-col gap-2">
            {weakWords.map((w, i) => {
              const rate = Math.round((w.wrong / (w.correct + w.wrong)) * 100)
              return (
                <div key={w.pali} className="flex items-center gap-3">
                  <span className="text-xs font-bold w-5 text-center"
                    style={{ color: 'var(--color-text-tertiary)' }}>{i + 1}</span>
                  <span className="pali-text text-sm font-semibold flex-1"
                    style={{ color: 'var(--color-text)' }}>{w.pali}</span>
                  <span className="text-xs" style={{ color: 'var(--color-accent)' }}>
                    ✓{w.correct}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--color-error)' }}>
                    ✗{w.wrong}
                  </span>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: rate > 50 ? 'rgba(198,40,40,0.1)' : 'rgba(192,107,10,0.1)',
                      color: rate > 50 ? 'var(--color-error)' : 'var(--color-primary)',
                    }}
                  >
                    {rate}%오답
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* 월간 캘린더 (최근 30일) */}
      <div
        className="p-5 rounded-2xl card-shadow"
        style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-light)' }}
      >
        <h2 className="text-sm font-bold mb-3" style={{ color: 'var(--color-text-secondary)' }}>
          최근 30일 학습 현황
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {recent30.map(day => (
            <div
              key={day.date}
              className="w-5 h-5 rounded-sm"
              title={`${day.date}: ${day.minutes}분`}
              style={{
                background: day.minutes === 0
                  ? 'var(--color-border-light)'
                  : day.minutes < 10
                    ? 'rgba(192, 107, 10, 0.3)'
                    : day.minutes < 30
                      ? 'rgba(192, 107, 10, 0.6)'
                      : 'var(--color-primary)',
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mt-2 text-[10px]"
          style={{ color: 'var(--color-text-tertiary)' }}>
          <span>없음</span>
          <div className="w-3 h-3 rounded-sm" style={{ background: 'var(--color-border-light)' }} />
          <div className="w-3 h-3 rounded-sm" style={{ background: 'rgba(192, 107, 10, 0.3)' }} />
          <div className="w-3 h-3 rounded-sm" style={{ background: 'rgba(192, 107, 10, 0.6)' }} />
          <div className="w-3 h-3 rounded-sm" style={{ background: 'var(--color-primary)' }} />
          <span>많음</span>
        </div>
      </div>
    </div>
  )
}

function StatBox({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div
      className="p-4 rounded-xl text-center card-shadow"
      style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-light)' }}
    >
      <span className="text-xl">{icon}</span>
      <p className="text-lg font-bold mt-1" style={{ color: 'var(--color-text)' }}>{value}</p>
      <p className="text-[10px] font-medium" style={{ color: 'var(--color-text-tertiary)' }}>{label}</p>
    </div>
  )
}
