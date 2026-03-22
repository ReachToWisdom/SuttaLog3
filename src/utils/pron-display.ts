// 발음 표시 유틸 — 한글 발음 + (영어 발음 옵션) + 발음 ON/OFF
import { STORAGE_PREFIX } from '../config'

/** 영어 발음 병기 설정 확인 */
export function isPronEnEnabled(): boolean {
  return localStorage.getItem(`${STORAGE_PREFIX}pron-en`) === 'on'
}

/** 영어 발음 병기 토글 */
export function togglePronEn(): boolean {
  const next = !isPronEnEnabled()
  localStorage.setItem(`${STORAGE_PREFIX}pron-en`, next ? 'on' : 'off')
  return next
}

/** 발음 표시 ON/OFF 확인 (기본: ON) */
export function isPronVisible(): boolean {
  return localStorage.getItem(`${STORAGE_PREFIX}pronunciation`) !== 'off'
}

/** 발음 표시 토글 */
export function togglePronVisible(): boolean {
  const next = !isPronVisible()
  localStorage.setItem(`${STORAGE_PREFIX}pronunciation`, next ? 'on' : 'off')
  return next
}

/** 발음 텍스트 조합: "에왕" 또는 "에왕 (eh-wang)" */
export function formatPron(pronKo: string, pronEn?: string): string {
  if (pronEn && isPronEnEnabled()) {
    return `${pronKo} (${pronEn})`
  }
  return pronKo
}
