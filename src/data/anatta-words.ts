// 무아경(Anattalakkhaṇa Sutta, SN 22.59) — 본문 핵심 단어 데이터
// 출처: Saṃyutta Nikāya 22.59

import type { VerseWord } from './types'

// ── 무아경 원문 (단락별) ──

/** 제1단락: 서문 */
export const VERSE_1 = {
  pali: 'Ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati isipatane migadāye. Tatra kho bhagavā pañcavaggiye bhikkhū āmantesi.',
  pronKo: '에깡 사마양 바가와- 바-라-나시양 위하라띠 이시빠따네 미가다-예. 따뜨라 코 바가와- 빤짜왁기예 빅쿠- 아-만떼시.',
  translation: '한 때 세존께서 바라나시의 이시빠따나 녹야원에 머무셨다. 거기서 세존께서 다섯 비구에게 말씀하셨다.',
}

export const VERSE_1_WORDS: VerseWord[] = [
  { pali: 'Ekaṃ', pronKo: '에깡', meaning: '하나의/한', grammar: '수사 중성 단수 대격' },
  { pali: 'samayaṃ', pronKo: '사마양', meaning: '때/시기', grammar: '남성 단수 대격' },
  { pali: 'bhagavā', pronKo: '바가와-', meaning: '세존(부처님)', grammar: '남성 단수 주격' },
  { pali: 'bārāṇasiyaṃ', pronKo: '바-라-나시양', meaning: '바라나시에서', grammar: '여성 단수 처격 (지명)' },
  { pali: 'viharati', pronKo: '위하라띠', meaning: '머무시다', grammar: '현재 3인칭 단수 (vi + harati)' },
  { pali: 'isipatane', pronKo: '이시빠따네', meaning: '이시빠따나에서', grammar: '중성 단수 처격 (지명, 선인들이 떨어진 곳)' },
  { pali: 'migadāye', pronKo: '미가다-예', meaning: '녹야원에서', grammar: '남성 단수 처격 (miga + dāya, 사슴동산)' },
  { pali: 'Tatra', pronKo: '따뜨라', meaning: '거기서', grammar: '불변어(부사)' },
  { pali: 'kho', pronKo: '코', meaning: '참으로/실로', grammar: '불변어(강조사)' },
  { pali: 'pañcavaggiye', pronKo: '빤짜왁기예', meaning: '다섯 무리의', grammar: '형용사 남성 복수 대격 (pañca + vaggiya)' },
  { pali: 'bhikkhū', pronKo: '빅쿠-', meaning: '비구들을', grammar: '남성 복수 대격' },
  { pali: 'āmantesi', pronKo: '아-만떼시', meaning: '말씀하셨다', grammar: '과거 3인칭 단수 (āmanteti)' },
]

/** 제2단락: 색온 무아 */
export const VERSE_2 = {
  pali: 'Rūpaṃ bhikkhave anattā. Rūpañca hidaṃ bhikkhave attā abhavissa, nayidaṃ rūpaṃ ābādhāya saṃvatteyya, labbhetha ca rūpe — evaṃ me rūpaṃ hotu, evaṃ me rūpaṃ mā ahosīti.',
  pronKo: '루-빵 빅카웨 아낫따-. 루-빤짜 히당 빅카웨 앗따- 아바윗사, 나이당 루-빵 아-바-다-야 상왓떼이야, 랍베타 짜 루-뻬 — 에왕 메 루-빵 호뚜, 에왕 메 루-빵 마- 아호시-띠.',
  translation: '비구들이여, 물질은 자아가 아니다. 만약 물질이 자아라면 물질이 병들지 않아야 할 것이며, 물질에 대해 "나의 물질이 이렇게 되어라, 이렇게 되지 말라"고 할 수 있어야 한다.',
}

export const VERSE_2_WORDS: VerseWord[] = [
  { pali: 'Rūpaṃ', pronKo: '루-빵', meaning: '물질/색(色)', grammar: '중성 단수 주격', important: true },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격', important: true },
  { pali: 'anattā', pronKo: '아낫따-', meaning: '자아가 아닌/무아', grammar: '남성 단수 주격 (an + attā)', important: true },
  { pali: 'Rūpañca', pronKo: '루-빤짜', meaning: '물질이 + 만약', grammar: '중성 단수 주격 + ca (연성)' },
  { pali: 'hidaṃ', pronKo: '히당', meaning: '만약 이것이', grammar: 'hi(만약) + idaṃ(이것)' },
  { pali: 'attā', pronKo: '앗따-', meaning: '자아/나', grammar: '남성 단수 주격', important: true },
  { pali: 'abhavissa', pronKo: '아바윗사', meaning: '~이었다면', grammar: '가정법 과거 3인칭 단수 (bhavati)' },
  { pali: 'nayidaṃ', pronKo: '나이당', meaning: '이것은 ~않을 것이다', grammar: 'na(부정) + ayidaṃ(이것)' },
  { pali: 'ābādhāya', pronKo: '아-바-다-야', meaning: '병들기 위해/병듦에', grammar: '남성 단수 여격 (ābādha)' },
  { pali: 'saṃvatteyya', pronKo: '상왓떼이야', meaning: '이끌 것이다/되어야 할 것이다', grammar: '가정법 3인칭 단수 (saṃvattati)' },
  { pali: 'labbhetha', pronKo: '랍베타', meaning: '얻어질 수 있어야 한다', grammar: '가정법 수동 3인칭 단수 (labhati)' },
  { pali: 'ca', pronKo: '짜', meaning: '~과/그리고', grammar: '불변어(접속사)' },
  { pali: 'rūpe', pronKo: '루-뻬', meaning: '물질에 대해', grammar: '중성 단수 처격' },
  { pali: 'evaṃ', pronKo: '에왕', meaning: '이와 같이', grammar: '불변어(부사)' },
  { pali: 'me', pronKo: '메', meaning: '나의', grammar: '1인칭 단수 속격' },
  { pali: 'hotu', pronKo: '호뚜', meaning: '~이 되어라', grammar: '명령법 3인칭 단수 (bhavati)' },
  { pali: 'mā', pronKo: '마-', meaning: '~하지 말라', grammar: '불변어(금지사)' },
  { pali: 'ahosīti', pronKo: '아호시-띠', meaning: '되었다 + 라고', grammar: '과거 3인칭 단수 + iti (ahosi + iti)' },
]

/** 제3단락: 오온 무아 반복 */
export const VERSE_3 = {
  pali: 'Vedanā anattā... saññā anattā... saṅkhārā anattā... viññāṇaṃ anattā.',
  pronKo: '웨다나- 아낫따-... 산냐- 아낫따-... 상카-라- 아낫따-... 윈냐-낭 아낫따-.',
  translation: '느낌도 자아가 아니고... 인식도... 형성도... 의식도 자아가 아니다.',
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'Vedanā', pronKo: '웨다나-', meaning: '느낌/수(受)', grammar: '여성 단수 주격', important: true },
  { pali: 'saññā', pronKo: '산냐-', meaning: '인식/상(想)', grammar: '여성 단수 주격', important: true },
  { pali: 'saṅkhārā', pronKo: '상카-라-', meaning: '형성/행(行)', grammar: '남성 복수 주격', important: true },
  { pali: 'viññāṇaṃ', pronKo: '윈냐-낭', meaning: '의식/식(識)', grammar: '중성 단수 주격', important: true },
]

/** 제4단락: 질문 — 무상·고·무아의 논리 */
export const VERSE_4 = {
  pali: 'Taṃ kiṃ maññatha bhikkhave, rūpaṃ niccaṃ vā aniccaṃ vā ti? Aniccaṃ bhante. Yaṃ panāniccaṃ dukkhaṃ vā taṃ sukhaṃ vā ti? Dukkhaṃ bhante. Yaṃ panāniccaṃ dukkhaṃ vipariṇāmadhammaṃ, kallaṃ nu taṃ samanupassituṃ — etaṃ mama, esohamasmi, eso me attāti?',
  pronKo: '땅 낑 만냐타 빅카웨, 루-빵 닛짱 와- 아닛짱 와- 띠? 아닛짱 반떼. 양 빠나닛짱 둑캉 와- 땅 수캉 와- 띠? 둑캉 반떼. 양 빠나닛짱 둑캉 위빠리나-마담망, 깔랑 누 땅 사마누빳시뚱 — 에땅 마마, 에소하맛미, 에소 메 앗따-띠?',
  translation: '비구들이여, 어떻게 생각하느냐, 물질은 영원하냐 무상하냐? 무상합니다. 무상한 것은 괴로운가 즐거운가? 괴로움입니다. 무상하고 괴롭고 변하는 것을 "이것은 나의 것, 이것은 나, 이것은 나의 자아"라고 보는 것이 합당하냐?',
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'Taṃ', pronKo: '땅', meaning: '그것을', grammar: '지시대명사 중성 단수 대격' },
  { pali: 'kiṃ', pronKo: '낑', meaning: '무엇을/어떻게', grammar: '의문대명사 중성 단수 대격' },
  { pali: 'maññatha', pronKo: '만냐타', meaning: '생각하느냐', grammar: '현재 2인칭 복수 (maññati)' },
  { pali: 'niccaṃ', pronKo: '닛짱', meaning: '영원한/상(常)', grammar: '형용사 중성 단수 주격', important: true },
  { pali: 'vā', pronKo: '와-', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'aniccaṃ', pronKo: '아닛짱', meaning: '무상한', grammar: '형용사 중성 단수 주격 (an + nicca)', important: true },
  { pali: 'ti', pronKo: '띠', meaning: '~라고 (인용)', grammar: '불변어(인용사, iti의 줄임)' },
  { pali: 'bhante', pronKo: '반떼', meaning: '존자시여', grammar: '호격 (공경어)' },
  { pali: 'Yaṃ', pronKo: '양', meaning: '~하는 것은', grammar: '관계대명사 중성 단수 주격' },
  { pali: 'panāniccaṃ', pronKo: '빠나닛짱', meaning: '그런데 무상한 것은', grammar: 'pana(그런데) + aniccaṃ (연성)' },
  { pali: 'dukkhaṃ', pronKo: '둑캉', meaning: '괴로움/고(苦)', grammar: '중성 단수 주격', important: true },
  { pali: 'sukhaṃ', pronKo: '수캉', meaning: '즐거움/행복', grammar: '중성 단수 주격' },
  { pali: 'vipariṇāmadhammaṃ', pronKo: '위빠리나-마담망', meaning: '변하는 성질의', grammar: '형용사 중성 단수 주격 (vipariṇāma + dhamma)' },
  { pali: 'kallaṃ', pronKo: '깔랑', meaning: '합당한/적절한', grammar: '형용사 중성 단수 주격' },
  { pali: 'nu', pronKo: '누', meaning: '과연 ~인가', grammar: '불변어(의문사)' },
  { pali: 'samanupassituṃ', pronKo: '사마누빳시뚱', meaning: '~라고 보기에', grammar: '부정사 (sam + anu + passati)' },
  { pali: 'etaṃ', pronKo: '에땅', meaning: '이것은', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'mama', pronKo: '마마', meaning: '나의 것', grammar: '1인칭 단수 속격', important: true },
  { pali: 'esohamasmi', pronKo: '에소하맛미', meaning: '이것은 나이다', grammar: 'eso(이것) + aham(나) + asmi(이다) 연성', important: true },
  { pali: 'eso', pronKo: '에소', meaning: '이것은', grammar: '지시대명사 남성 단수 주격' },
  { pali: 'attāti', pronKo: '앗따-띠', meaning: '자아이다 + 라고', grammar: 'attā + iti (연성)' },
]

/** 제5단락: 결론 — 염오·이욕·해탈 */
export const VERSE_5 = {
  pali: 'Evaṃ passaṃ bhikkhave sutavā ariyasāvako rūpasmimpi nibbindati, vedanāyapi nibbindati, saññāyapi nibbindati, saṅkhāresupi nibbindati, viññāṇasmimpi nibbindati. Nibbindaṃ virajjati; virāgā vimuccati.',
  pronKo: '에왕 빳상 빅카웨 수따와- 아리야사-와꼬 루-빠스밈삐 닙빈다띠, 웨다나-야삐 닙빈다띠, 산냐-야삐 닙빈다띠, 상카-레수삐 닙빈다띠, 윈냐-나스밈삐 닙빈다띠. 닙빈당 위랏자띠; 위라-가- 위뭇짜띠.',
  translation: '이와 같이 보는 비구들이여, 배운 성스러운 제자는 물질에도 염오하고, 느낌에도, 인식에도, 형성에도, 의식에도 염오한다. 염오하여 이욕하고, 이욕으로 해탈한다.',
}

export const VERSE_5_WORDS: VerseWord[] = [
  { pali: 'passaṃ', pronKo: '빳상', meaning: '보면서/관찰하면서', grammar: '현재분사 남성 단수 주격 (passati)' },
  { pali: 'sutavā', pronKo: '수따와-', meaning: '(법을) 들은/배운', grammar: '형용사 남성 단수 주격 (suta + vant)' },
  { pali: 'ariyasāvako', pronKo: '아리야사-와꼬', meaning: '성스러운 제자', grammar: '남성 단수 주격 (ariya + sāvaka)', important: true },
  { pali: 'rūpasmimpi', pronKo: '루-빠스밈삐', meaning: '물질에서도', grammar: '중성 단수 처격 + api (rūpa + smim + pi)' },
  { pali: 'nibbindati', pronKo: '닙빈다띠', meaning: '염오하다/싫어하다', grammar: '현재 3인칭 단수 (nis + vindati)', important: true },
  { pali: 'vedanāyapi', pronKo: '웨다나-야삐', meaning: '느낌에서도', grammar: '여성 단수 처격 + api' },
  { pali: 'saññāyapi', pronKo: '산냐-야삐', meaning: '인식에서도', grammar: '여성 단수 처격 + api' },
  { pali: 'saṅkhāresupi', pronKo: '상카-레수삐', meaning: '형성들에서도', grammar: '남성 복수 처격 + api' },
  { pali: 'viññāṇasmimpi', pronKo: '윈냐-나스밈삐', meaning: '의식에서도', grammar: '중성 단수 처격 + api' },
  { pali: 'Nibbindaṃ', pronKo: '닙빈당', meaning: '염오하여', grammar: '현재분사 남성 단수 주격 (nibbindati)' },
  { pali: 'virajjati', pronKo: '위랏자띠', meaning: '이욕하다/탐욕에서 벗어나다', grammar: '현재 3인칭 단수 (vi + rajjati)', important: true },
  { pali: 'virāgā', pronKo: '위라-가-', meaning: '이욕으로/탐욕 여읨으로', grammar: '남성 단수 탈격 (vi + rāga)', important: true },
  { pali: 'vimuccati', pronKo: '위뭇짜띠', meaning: '해탈하다/풀려나다', grammar: '현재 3인칭 단수 (vi + muccati)', important: true },
]

// ── 전체 단락 배열 ──
export const ALL_VERSES = [
  { id: 'v1', ...VERSE_1, words: VERSE_1_WORDS },
  { id: 'v2', ...VERSE_2, words: VERSE_2_WORDS },
  { id: 'v3', ...VERSE_3, words: VERSE_3_WORDS },
  { id: 'v4', ...VERSE_4, words: VERSE_4_WORDS },
  { id: 'v5', ...VERSE_5, words: VERSE_5_WORDS },
]

// ── 전체 단어 (중복 제거) ──
export const ALL_ANATTA_WORDS: VerseWord[] = (() => {
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
