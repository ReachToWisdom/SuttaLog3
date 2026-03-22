// 오답 기록 시스템 — 오답 저장 + 약한 단어 추적
import { STORAGE_PREFIX } from '../config'

const WRONG_KEY = `${STORAGE_PREFIX}wrong-answers`
const WORD_STATS_KEY = `${STORAGE_PREFIX}word-stats`

// ── 오답 기록 ──

export interface WrongAnswer {
  question: string       // 퀴즈 질문
  correctAnswer: string  // 정답
  userAnswer: string     // 사용자 답
  lessonId: string       // 단원 ID
  timestamp: number      // 시간
}

/** 오답 목록 조회 */
export function getWrongAnswers(): WrongAnswer[] {
  try {
    const raw = localStorage.getItem(WRONG_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

/** 오답 저장 (최대 200개 유지) */
export function addWrongAnswer(wrong: Omit<WrongAnswer, 'timestamp'>) {
  const list = getWrongAnswers()
  list.push({ ...wrong, timestamp: Date.now() })
  // 최대 200개
  if (list.length > 200) list.splice(0, list.length - 200)
  localStorage.setItem(WRONG_KEY, JSON.stringify(list))
}

/** 오답 초기화 */
export function clearWrongAnswers() {
  localStorage.removeItem(WRONG_KEY)
}

// ── 단어별 통계 (정답/오답 횟수) ──

export interface WordStat {
  pali: string
  correct: number
  wrong: number
  lastSeen: number
}

/** 단어 통계 전체 조회 */
export function getWordStats(): Record<string, WordStat> {
  try {
    const raw = localStorage.getItem(WORD_STATS_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

/** 단어 정답 기록 */
export function recordCorrect(pali: string) {
  const stats = getWordStats()
  if (!stats[pali]) stats[pali] = { pali, correct: 0, wrong: 0, lastSeen: 0 }
  stats[pali].correct++
  stats[pali].lastSeen = Date.now()
  localStorage.setItem(WORD_STATS_KEY, JSON.stringify(stats))
}

/** 단어 오답 기록 */
export function recordWrong(pali: string) {
  const stats = getWordStats()
  if (!stats[pali]) stats[pali] = { pali, correct: 0, wrong: 0, lastSeen: 0 }
  stats[pali].wrong++
  stats[pali].lastSeen = Date.now()
  localStorage.setItem(WORD_STATS_KEY, JSON.stringify(stats))
}

/** 약한 단어 목록 (오답률 높은 순) */
export function getWeakWords(limit = 20): WordStat[] {
  const stats = getWordStats()
  return Object.values(stats)
    .filter(s => s.wrong > 0)
    .sort((a, b) => {
      // 오답률 높은 순 → 최근 본 순
      const rateA = a.wrong / (a.correct + a.wrong)
      const rateB = b.wrong / (b.correct + b.wrong)
      if (rateB !== rateA) return rateB - rateA
      return b.lastSeen - a.lastSeen
    })
    .slice(0, limit)
}

/** 통계 초기화 */
export function clearWordStats() {
  localStorage.removeItem(WORD_STATS_KEY)
}
