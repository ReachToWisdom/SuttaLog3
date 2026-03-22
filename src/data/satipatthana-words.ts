// 사념처경(Mahāsatipaṭṭhāna Sutta, DN 22) — 전문 통합
// 신념처(kaya) + 수/심/법념처(dhamma) 두 파일 통합
import type { VerseWord } from './types'
import { KAYA_VERSES, ALL_KAYA_WORDS } from './satipatthana-kaya'
import { DHAMMA_VERSES, ALL_DHAMMA_WORDS } from './satipatthana-dhamma'

// 전체 게송 (신념처 16 + 수/심/법/결론 23 = 39단락)
export const ALL_VERSES = [...KAYA_VERSES, ...DHAMMA_VERSES]

// 전체 단어 (중복 제거)
export const ALL_SATIPATTHANA_WORDS: VerseWord[] = (() => {
  const seen = new Set<string>()
  const unique: VerseWord[] = []
  for (const word of [...ALL_KAYA_WORDS, ...ALL_DHAMMA_WORDS]) {
    if (!seen.has(word.pali)) {
      seen.add(word.pali)
      unique.push(word)
    }
  }
  return unique
})()
