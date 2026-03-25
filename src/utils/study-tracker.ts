// 공부 시간 기록 시스템 — 날짜별 학습 시간 추적
import { STORAGE_PREFIX } from '../config'

const STUDY_LOG_KEY = `${STORAGE_PREFIX}study-log`

export interface DailyLog {
  date: string       // YYYY-MM-DD
  minutes: number    // 학습 분
  sessions: number   // 학습 세션 수
}

/** 전체 학습 로그 조회 */
export function getStudyLog(): Record<string, DailyLog> {
  try {
    const raw = localStorage.getItem(STUDY_LOG_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

/** 오늘 날짜 (YYYY-MM-DD) */
function today(): string {
  return new Date().toISOString().slice(0, 10)
}

/** 학습 시간 기록 (분 단위) */
export function recordStudyTime(minutes: number) {
  const log = getStudyLog()
  const d = today()
  if (!log[d]) log[d] = { date: d, minutes: 0, sessions: 0 }
  log[d].minutes += minutes
  log[d].sessions += 1
  localStorage.setItem(STUDY_LOG_KEY, JSON.stringify(log))
}

/** 최근 N일 학습 데이터 */
export function getRecentDays(n: number): DailyLog[] {
  const log = getStudyLog()
  const result: DailyLog[] = []
  const now = new Date()
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    const key = d.toISOString().slice(0, 10)
    result.push(log[key] ?? { date: key, minutes: 0, sessions: 0 })
  }
  return result
}

/** 일평균 학습 시간 (분) */
export function getDailyAverage(days = 30): number {
  const recent = getRecentDays(days)
  const activeDays = recent.filter(d => d.minutes > 0)
  if (activeDays.length === 0) return 0
  const total = activeDays.reduce((sum, d) => sum + d.minutes, 0)
  return Math.round(total / activeDays.length)
}

/** 주평균 학습 시간 (분) */
export function getWeeklyAverage(): number {
  const recent = getRecentDays(28) // 4주
  const weeklyTotals: number[] = []
  for (let w = 0; w < 4; w++) {
    const weekSlice = recent.slice(w * 7, (w + 1) * 7)
    weeklyTotals.push(weekSlice.reduce((sum, d) => sum + d.minutes, 0))
  }
  const activeWeeks = weeklyTotals.filter(t => t > 0)
  if (activeWeeks.length === 0) return 0
  return Math.round(activeWeeks.reduce((a, b) => a + b, 0) / activeWeeks.length)
}

/** 총 학습 시간 (분) */
export function getTotalMinutes(): number {
  const log = getStudyLog()
  return Object.values(log).reduce((sum, d) => sum + d.minutes, 0)
}

/** 총 학습 일수 */
export function getTotalDays(): number {
  const log = getStudyLog()
  return Object.values(log).filter(d => d.minutes > 0).length
}

/** 특정 월의 학습 날짜 (캘린더용) */
export function getMonthStudyDates(year: number, month: number): Set<string> {
  const log = getStudyLog()
  const prefix = `${year}-${String(month + 1).padStart(2, '0')}`
  const dates = new Set<string>()
  for (const date of Object.keys(log)) {
    if (date.startsWith(prefix) && log[date].minutes > 0) dates.add(date)
  }
  return dates
}

/** 특정 날짜 로그 조회 */
export function getDayLog(date: string): DailyLog | null {
  const log = getStudyLog()
  return log[date] ?? null
}
