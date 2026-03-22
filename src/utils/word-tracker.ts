// 단어 열람 추적 — 사용자가 탭한 단어를 카운팅하여 복습용으로 활용
import { STORAGE_PREFIX } from '../config'

const KEY = `${STORAGE_PREFIX}word-views`

interface WordViewData {
  [pali: string]: {
    count: number      // 열람 횟수
    lastSeen: number   // 마지막 열람 시각 (ms)
  }
}

/** 저장된 단어 열람 데이터 로드 */
function loadData(): WordViewData {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

/** 단어 열람 기록 */
export function trackWordView(pali: string): void {
  const data = loadData()
  const key = pali.toLowerCase()
  const prev = data[key]
  data[key] = {
    count: (prev?.count ?? 0) + 1,
    lastSeen: Date.now(),
  }
  localStorage.setItem(KEY, JSON.stringify(data))
}

/** 단어 열람 횟수 조회 */
export function getWordViewCount(pali: string): number {
  const data = loadData()
  return data[pali.toLowerCase()]?.count ?? 0
}

/** 복습 대상 단어 조회: 열람한 적 있는 단어 (최근 열람순 정렬) */
export function getViewedWords(): { pali: string; count: number; lastSeen: number }[] {
  const data = loadData()
  return Object.entries(data)
    .map(([pali, info]) => ({ pali, ...info }))
    .sort((a, b) => b.lastSeen - a.lastSeen)
}
