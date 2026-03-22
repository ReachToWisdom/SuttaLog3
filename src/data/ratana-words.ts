// 보배경(Ratana Sutta) — 본문 모든 단어 데이터
// 출처: Suttanipāta 2.1

import type { VerseWord } from './types'

// ── 보배경 원문 (게송별) ──

/** 서문: 모든 존재에 대한 권유 */
export const VERSE_0 = {
  pali: 'Yānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe;\nsabbe va bhūtā sumanā bhavantu, athopi sakkacca suṇantu bhāsitaṃ.',
  pronKo: '야-니-다 부-따-니 사마-가따-니, 붐마-니 와- 야-니 와 안딸릭케;\n삽베 와 부-따- 수마나- 바완뚜, 아토삐 삭깟짜 수난뚜 바-시땅.',
  translation: '이 자리에 모인 존재들이여, 땅 위든 하늘이든,\n모든 존재가 행복하기를, 그리고 정성껏 말씀을 들으시라.',
}

export const VERSE_0_WORDS: VerseWord[] = [
  { pali: 'Yānīdha', pronKo: '야-니-다', meaning: '여기에 ~한 것들이', grammar: '관계대명사 중성 복수 주격 + idha (연성)' },
  { pali: 'bhūtāni', pronKo: '부-따-니', meaning: '존재들이', grammar: '중성 복수 주격' },
  { pali: 'samāgatāni', pronKo: '사마-가따-니', meaning: '모인', grammar: '과거분사 중성 복수 주격 (saṃ + āgata)' },
  { pali: 'bhummāni', pronKo: '붐마-니', meaning: '땅의/지상의', grammar: '형용사 중성 복수 주격' },
  { pali: 'vā', pronKo: '와-', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'yāni', pronKo: '야-니', meaning: '~한 것들이', grammar: '관계대명사 중성 복수 주격' },
  { pali: 'va', pronKo: '와', meaning: '또는/혹은', grammar: '불변어(접속사)' },
  { pali: 'antalikkhe', pronKo: '안딸릭케', meaning: '허공에/하늘에', grammar: '중성 단수 처격' },
  { pali: 'sabbe', pronKo: '삽베', meaning: '모든', grammar: '형용사 남성 복수 주격' },
  { pali: 'bhūtā', pronKo: '부-따-', meaning: '존재들이', grammar: '남성 복수 주격' },
  { pali: 'sumanā', pronKo: '수마나-', meaning: '행복한 마음의', grammar: '형용사 남성 복수 주격 (su + mana)' },
  { pali: 'bhavantu', pronKo: '바완뚜', meaning: '~이기를/되기를', grammar: '명령형 3인칭 복수 (bhavati)' },
  { pali: 'athopi', pronKo: '아토삐', meaning: '그리고 또한', grammar: '불변어 (atha + api, 연성)' },
  { pali: 'sakkacca', pronKo: '삭깟짜', meaning: '정성껏/공경히', grammar: '절대분사 (sakkāroti)' },
  { pali: 'suṇantu', pronKo: '수난뚜', meaning: '들으시라', grammar: '명령형 3인칭 복수 (suṇāti)' },
  { pali: 'bhāsitaṃ', pronKo: '바-시땅', meaning: '말씀을/설법을', grammar: '과거분사 중성 단수 대격 (bhāsati)' },
]

/** 제1게송: 부처님의 보배 */
export const VERSE_1 = {
  pali: 'Yaṃ kiñci vittaṃ idha vā huraṃ vā, saggesu vā yaṃ ratanaṃ paṇītaṃ;\nna no samaṃ atthi tathāgatena, idampi buddhe ratanaṃ paṇītaṃ;\netena saccena suvatthi hotu.',
  pronKo: '양 낀찌 윗땅 이다 와- 후랑 와-, 삭게수 와- 양 라따낭 빠니-땅;\n나 노 사망 앗티 따타-가떼나, 이담삐 붓데 라따낭 빠니-땅;\n에떼나 삿쩨나 수왓티 호뚜.',
  translation: '이 세상이든 저 세상이든, 하늘에든, 어떤 보배가 있더라도\n여래와 같은 것은 없으니, 이것이 부처님 안의 뛰어난 보배이니라.\n이 진실로 인해 행복하기를.',
}

export const VERSE_1_WORDS: VerseWord[] = [
  { pali: 'Yaṃ', pronKo: '양', meaning: '어떤 ~이든', grammar: '관계대명사 중성 단수 주격' },
  { pali: 'kiñci', pronKo: '낀찌', meaning: '무엇이든/어떤', grammar: '부정대명사 중성 단수 주격 (kiṃ + ci)' },
  { pali: 'vittaṃ', pronKo: '윗땅', meaning: '재물/보물', grammar: '중성 단수 주격' },
  { pali: 'idha', pronKo: '이다', meaning: '여기에/이 세상에', grammar: '불변어(부사)' },
  { pali: 'vā', pronKo: '와-', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'huraṃ', pronKo: '후랑', meaning: '저 세상에/저편에', grammar: '불변어(부사)' },
  { pali: 'saggesu', pronKo: '삭게수', meaning: '하늘들에/천상에', grammar: '남성 복수 처격' },
  { pali: 'yaṃ', pronKo: '양', meaning: '어떤 ~이든', grammar: '관계대명사 중성 단수 주격' },
  { pali: 'ratanaṃ', pronKo: '라따낭', meaning: '보배/보석', grammar: '중성 단수 주격' },
  { pali: 'paṇītaṃ', pronKo: '빠니-땅', meaning: '뛰어난/수승한', grammar: '형용사 중성 단수 주격' },
  { pali: 'na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'no', pronKo: '노', meaning: '실로/확실히', grammar: '불변어(강조사)' },
  { pali: 'samaṃ', pronKo: '사망', meaning: '같은 것이', grammar: '형용사 중성 단수 주격' },
  { pali: 'atthi', pronKo: '앗티', meaning: '있다/존재하다', grammar: '현재 3인칭 단수 (atthi)' },
  { pali: 'tathāgatena', pronKo: '따타-가떼나', meaning: '여래에 의해/여래와', grammar: '남성 단수 구격' },
  { pali: 'idampi', pronKo: '이담삐', meaning: '이것도/이것이', grammar: '지시대명사 중성 단수 주격 + api' },
  { pali: 'buddhe', pronKo: '붓데', meaning: '부처님 안에/에 대해', grammar: '남성 단수 처격' },
  { pali: 'etena', pronKo: '에떼나', meaning: '이것에 의해', grammar: '지시대명사 중성 단수 구격' },
  { pali: 'saccena', pronKo: '삿쩨나', meaning: '진실에 의해', grammar: '중성 단수 구격' },
  { pali: 'suvatthi', pronKo: '수왓티', meaning: '행복/안녕', grammar: '여성 단수 주격 (su + atthi)' },
  { pali: 'hotu', pronKo: '호뚜', meaning: '~이기를/되기를', grammar: '명령형 3인칭 단수 (bhavati)' },
]

/** 제2게송: 법의 보배 */
export const VERSE_2 = {
  pali: 'Khayaṃ virāgaṃ amataṃ paṇītaṃ, yadajjhagā sakyamunī samāhito;\nna tena dhammena samatthi kiñci, idampi dhamme ratanaṃ paṇītaṃ;\netena saccena suvatthi hotu.',
  pronKo: '카양 위라-강 아마땅 빠니-땅, 야닷자가- 사꺄무니- 사마-히또;\n나 떼나 담메나 사맛티 낀찌, 이담삐 담메 라따낭 빠니-땅;\n에떼나 삿쩨나 수왓티 호뚜.',
  translation: '소멸과 이욕과 불사의 뛰어난 것을 석가모니께서 삼매에서 깨달으셨으니,\n그 법과 같은 것은 없으니, 이것이 법 안의 뛰어난 보배이니라.\n이 진실로 인해 행복하기를.',
}

export const VERSE_2_WORDS: VerseWord[] = [
  { pali: 'Khayaṃ', pronKo: '카양', meaning: '소멸/다함', grammar: '남성 단수 대격' },
  { pali: 'virāgaṃ', pronKo: '위라-강', meaning: '이욕/탐욕의 떠남', grammar: '남성 단수 대격 (vi + rāga)' },
  { pali: 'amataṃ', pronKo: '아마땅', meaning: '불사의/죽지 않는', grammar: '형용사 중성 단수 대격 (a + mata)' },
  { pali: 'paṇītaṃ', pronKo: '빠니-땅', meaning: '뛰어난/수승한', grammar: '형용사 중성 단수 대격' },
  { pali: 'yadajjhagā', pronKo: '야닷자가-', meaning: '~것을 깨달으셨다', grammar: 'yaṃ + ajjhagā (연성), 과거 3인칭 단수 (adhigacchati)' },
  { pali: 'sakyamunī', pronKo: '사꺄무니-', meaning: '석가모니(석가족의 성자)', grammar: '남성 단수 주격 (고유명사)' },
  { pali: 'samāhito', pronKo: '사마-히또', meaning: '삼매에 든/집중한', grammar: '과거분사 남성 단수 주격 (samādahati)' },
  { pali: 'tena', pronKo: '떼나', meaning: '그것에 의해/그와', grammar: '지시대명사 남성 단수 구격' },
  { pali: 'dhammena', pronKo: '담메나', meaning: '법에 의해/법과', grammar: '남성 단수 구격' },
  { pali: 'samatthi', pronKo: '사맛티', meaning: '같은 것이 있다', grammar: 'samaṃ + atthi (연성)' },
  { pali: 'kiñci', pronKo: '낀찌', meaning: '무엇이든/어떤 것이', grammar: '부정대명사 중성 단수 주격' },
  { pali: 'dhamme', pronKo: '담메', meaning: '법 안에/법에 대해', grammar: '남성 단수 처격' },
]

/** 제3게송: 삼매의 보배 */
export const VERSE_3 = {
  pali: 'Yaṃ buddhaseṭṭho parivaṇṇayī suciṃ, samādhimānantarikaññamāhu;\nsamādhinā tena samo na vijjati, idampi dhamme ratanaṃ paṇītaṃ;\netena saccena suvatthi hotu.',
  pronKo: '양 붓다셋토 빠리완나이- 수찡, 사마-디마-난따리깐냐마-후;\n사마-디나- 떼나 사모 나 윗자띠, 이담삐 담메 라따낭 빠니-땅;\n에떼나 삿쩨나 수왓티 호뚜.',
  translation: '최상의 부처님이 찬탄하신 청정한 삼매를 간격 없는 것이라 하니,\n그 삼매와 같은 것은 없으니, 이것이 법 안의 뛰어난 보배이니라.\n이 진실로 인해 행복하기를.',
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'Yaṃ', pronKo: '양', meaning: '~것을', grammar: '관계대명사 남성 단수 대격' },
  { pali: 'buddhaseṭṭho', pronKo: '붓다셋토', meaning: '최상의 부처님', grammar: '남성 단수 주격 (buddha + seṭṭha)' },
  { pali: 'parivaṇṇayī', pronKo: '빠리완나이-', meaning: '찬탄하셨다', grammar: '과거 3인칭 단수 (parivaṇṇeti)' },
  { pali: 'suciṃ', pronKo: '수찡', meaning: '청정한', grammar: '형용사 남성 단수 대격' },
  { pali: 'samādhimānantarikaññamāhu', pronKo: '사마-디마-난따리깐냐마-후', meaning: '삼매를 간격 없는 것이라 말했다', grammar: 'samādhiṃ + ānantarikaṃ + āhu (연성)' },
  { pali: 'samādhinā', pronKo: '사마-디나-', meaning: '삼매에 의해/삼매와', grammar: '남성 단수 구격' },
  { pali: 'tena', pronKo: '떼나', meaning: '그것에 의해/그와', grammar: '지시대명사 남성 단수 구격' },
  { pali: 'samo', pronKo: '사모', meaning: '같은 것이', grammar: '형용사 남성 단수 주격' },
  { pali: 'na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'vijjati', pronKo: '윗자띠', meaning: '발견되다/있다', grammar: '수동 현재 3인칭 단수 (vindati)' },
]

/** 제4게송: 승가의 보배 — 여덟 성인 */
export const VERSE_4 = {
  pali: 'Ye puggalā aṭṭha sataṃ pasatthā, cattāri etāni yugāni honti;\nte dakkhiṇeyyā sugatassa sāvakā, etesu dinnāni mahapphalāni;\nidampi saṅghe ratanaṃ paṇītaṃ;\netena saccena suvatthi hotu.',
  pronKo: '예 뿍갈라- 앗타 사땅 빠삿타-, 짯따-리 에따-니 유가-니 혼띠;\n떼 닥키네이야- 수가땃사 사-와까-, 에떼수 딘나-니 마합팔라-니;\n이담삐 상게 라따낭 빠니-땅;\n에떼나 삿쩨나 수왓티 호뚜.',
  translation: '선인들이 찬탄한 여덟 성인, 네 쌍이 되니,\n그들은 선서의 제자로서 공양 받을 만하니, 그들에게 보시하면 큰 과보가 있나니.\n이것이 승가 안의 뛰어난 보배이니라. 이 진실로 인해 행복하기를.',
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'Ye', pronKo: '예', meaning: '~한 그들이', grammar: '관계대명사 남성 복수 주격' },
  { pali: 'puggalā', pronKo: '뿍갈라-', meaning: '사람들/인물들', grammar: '남성 복수 주격' },
  { pali: 'aṭṭha', pronKo: '앗타', meaning: '여덟', grammar: '수사' },
  { pali: 'sataṃ', pronKo: '사땅', meaning: '선인들에 의해', grammar: '남성 복수 속격 (sant, 선한 자)' },
  { pali: 'pasatthā', pronKo: '빠삿타-', meaning: '찬탄된/칭찬받은', grammar: '과거분사 남성 복수 주격 (pasaṃsati)' },
  { pali: 'cattāri', pronKo: '짯따-리', meaning: '넷', grammar: '수사 중성 복수 주격' },
  { pali: 'etāni', pronKo: '에따-니', meaning: '이것들은', grammar: '지시대명사 중성 복수 주격' },
  { pali: 'yugāni', pronKo: '유가-니', meaning: '쌍들', grammar: '중성 복수 주격' },
  { pali: 'honti', pronKo: '혼띠', meaning: '~이다/된다', grammar: '현재 3인칭 복수 (bhavati)' },
  { pali: 'te', pronKo: '떼', meaning: '그들은', grammar: '지시대명사 남성 복수 주격' },
  { pali: 'dakkhiṇeyyā', pronKo: '닥키네이야-', meaning: '공양 받을 만한', grammar: '의무분사 남성 복수 주격 (dakkhiṇā + eyya)' },
  { pali: 'sugatassa', pronKo: '수가땃사', meaning: '선서(부처님)의', grammar: '남성 단수 속격 (su + gata)' },
  { pali: 'sāvakā', pronKo: '사-와까-', meaning: '제자들', grammar: '남성 복수 주격' },
  { pali: 'etesu', pronKo: '에떼수', meaning: '이들에게', grammar: '지시대명사 남성 복수 처격' },
  { pali: 'dinnāni', pronKo: '딘나-니', meaning: '보시된/주어진 것들이', grammar: '과거분사 중성 복수 주격 (deti)' },
  { pali: 'mahapphalāni', pronKo: '마합팔라-니', meaning: '큰 과보의', grammar: '형용사 중성 복수 주격 (mahā + phala)' },
  { pali: 'saṅghe', pronKo: '상게', meaning: '승가 안에/승가에 대해', grammar: '남성 단수 처격' },
]

/** 제5게송: 승가의 보배 — 정진하는 이들 */
export const VERSE_5 = {
  pali: 'Ye suppayuttā manasā daḷhena, nikkāmino gotamasāsanamhi;\nte pattipattā amataṃ vigayha, laddhā mudhā nibbutiṃ bhuñjamānā;\nidampi saṅghe ratanaṃ paṇītaṃ;\netena saccena suvatthi hotu.',
  pronKo: '예 숩빠윳따- 마나사- 달헤나, 닉까-미노 고따마사-사남히;\n떼 빳띠빳따- 아마땅 위가이하, 랃다- 무다- 닙부띵 분자마-나-;\n이담삐 상게 라따낭 빠니-땅;\n에떼나 삿쩨나 수왓티 호뚜.',
  translation: '굳건한 마음으로 잘 정진하여, 고따마 가르침에서 떠남이 없는 이들,\n불사에 들어가 도달하여 얻은 적멸의 즐거움을 누리니.\n이것이 승가 안의 뛰어난 보배이니라. 이 진실로 인해 행복하기를.',
}

export const VERSE_5_WORDS: VerseWord[] = [
  { pali: 'Ye', pronKo: '예', meaning: '~한 그들이', grammar: '관계대명사 남성 복수 주격' },
  { pali: 'suppayuttā', pronKo: '숩빠윳따-', meaning: '잘 정진한', grammar: '과거분사 남성 복수 주격 (su + payutta)' },
  { pali: 'manasā', pronKo: '마나사-', meaning: '마음으로', grammar: '중성 단수 구격' },
  { pali: 'daḷhena', pronKo: '달헤나', meaning: '굳건한', grammar: '형용사 중성 단수 구격' },
  { pali: 'nikkāmino', pronKo: '닉까-미노', meaning: '떠남이 없는/욕망 없는', grammar: '형용사 남성 복수 주격 (nikkāmin)' },
  { pali: 'gotamasāsanamhi', pronKo: '고따마사-사남히', meaning: '고따마의 가르침에서', grammar: '중성 단수 처격 (gotama + sāsana)' },
  { pali: 'te', pronKo: '떼', meaning: '그들은', grammar: '지시대명사 남성 복수 주격' },
  { pali: 'pattipattā', pronKo: '빳띠빳따-', meaning: '도달한/성취한', grammar: '과거분사 남성 복수 주격 (paṭipajjati)' },
  { pali: 'amataṃ', pronKo: '아마땅', meaning: '불사(열반)를', grammar: '중성 단수 대격' },
  { pali: 'vigayha', pronKo: '위가이하', meaning: '들어가서/잠겨서', grammar: '절대분사 (vigāhati)' },
  { pali: 'laddhā', pronKo: '랃다-', meaning: '얻어서', grammar: '절대분사 (labhati)' },
  { pali: 'mudhā', pronKo: '무다-', meaning: '값없이/공짜로', grammar: '불변어(부사)' },
  { pali: 'nibbutiṃ', pronKo: '닙부띵', meaning: '적멸/열반의 즐거움', grammar: '여성 단수 대격' },
  { pali: 'bhuñjamānā', pronKo: '분자마-나-', meaning: '누리면서/향유하면서', grammar: '현재분사 남성 복수 주격 (bhuñjati)' },
]

// ── 전체 게송 배열 ──
export const ALL_VERSES = [
  { id: 'v0', ...VERSE_0, words: VERSE_0_WORDS },
  { id: 'v1', ...VERSE_1, words: VERSE_1_WORDS },
  { id: 'v2', ...VERSE_2, words: VERSE_2_WORDS },
  { id: 'v3', ...VERSE_3, words: VERSE_3_WORDS },
  { id: 'v4', ...VERSE_4, words: VERSE_4_WORDS },
  { id: 'v5', ...VERSE_5, words: VERSE_5_WORDS },
]

// ── 전체 단어 (중복 제거) ──
export const ALL_RATANA_WORDS: VerseWord[] = (() => {
  const seen = new Set<string>()
  const unique: VerseWord[] = []
  for (const verse of ALL_VERSES) {
    for (const word of verse.words) {
      if (!seen.has(word.pali)) {
        seen.add(word.pali)
        unique.push(word)
      }
    }
  }
  return unique
})()
