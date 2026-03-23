// 에빙하우스 반복 추적 — 단원별 반복 횟수 관리 + 복습 대상 조회
import { STORAGE_PREFIX, EBBINGHAUS_REPEAT_COUNT } from '../config'

// ── 단원 순서 (SSOT: lessons-index.ts LESSON_META 순서) ──
const LESSON_ORDER = [
  'primer-01',
  'primer-02-08',
  'primer-09',
  'primer-10',
  'primer-11',
  'primer-12',
  'primer-13',
  'mangala',
  'primer-14',
  'primer-15',
  'primer-16',
  'primer-17',
  'primer-18',
  'ratana',
  'metta',
  'primer-19',
  'primer-20',
  'primer-21',
  'primer-22',
  'dhammacakka',
  'primer-23',
  'primer-24',
  'primer-25',
  'primer-26',
  'primer-27',
  'primer-28',
  'primer-29',
  'anatta',
  'primer-30',
  'primer-31',
  'primer-32',
  'primer-extra',
  'satipatthana-1',
  'satipatthana-2',
] as const

/** localStorage 키 생성 */
function repeatKey(lessonId: string): string {
  return `${STORAGE_PREFIX}repeat-${lessonId}`
}

/** 반복 횟수 조회 */
export function getRepeatCount(lessonId: string): number {
  try {
    const val = localStorage.getItem(repeatKey(lessonId))
    return parseInt(val ?? '0', 10) || 0
  } catch {
    return 0
  }
}

/** 반복 횟수 증가 (단원 완료 시 호출) — 현재 횟수 반환 */
export function incrementRepeat(lessonId: string): number {
  const current = getRepeatCount(lessonId)
  const next = current + 1
  localStorage.setItem(repeatKey(lessonId), String(next))
  return next
}

/** 3회 반복 완료 여부 */
export function isRepeatDone(lessonId: string): boolean {
  return getRepeatCount(lessonId) >= EBBINGHAUS_REPEAT_COUNT
}

/**
 * 복습 대상 단원 목록 반환
 * 현재 단원보다 앞에 있고, 완료(진도 100%)했지만 3회 반복 미달인 단원
 */
export function getReviewTargets(currentLessonId: string): string[] {
  const currentIdx = LESSON_ORDER.indexOf(currentLessonId as any)
  if (currentIdx <= 0) return [] // 첫 단원이면 복습 없음

  const targets: string[] = []
  for (let i = 0; i < currentIdx; i++) {
    const id = LESSON_ORDER[i]
    // 완료된 단원만 (진도 100%)
    const progress = localStorage.getItem(`${STORAGE_PREFIX}lesson-${id}`)
    if (progress !== '100') continue
    // 3회 미만만
    if (!isRepeatDone(id)) {
      targets.push(id)
    }
  }
  return targets
}

/** 모든 단원의 반복 현황 (CompletionView에서 표시용) */
export function getRepeatStatus(currentLessonId: string): Array<{
  lessonId: string
  count: number
  max: number
  done: boolean
}> {
  const currentIdx = LESSON_ORDER.indexOf(currentLessonId as any)
  if (currentIdx <= 0) return []

  const result: Array<{ lessonId: string; count: number; max: number; done: boolean }> = []
  for (let i = 0; i < currentIdx; i++) {
    const id = LESSON_ORDER[i]
    const progress = localStorage.getItem(`${STORAGE_PREFIX}lesson-${id}`)
    if (progress !== '100') continue
    const count = getRepeatCount(id)
    result.push({
      lessonId: id,
      count,
      max: EBBINGHAUS_REPEAT_COUNT,
      done: count >= EBBINGHAUS_REPEAT_COUNT,
    })
  }
  return result
}
