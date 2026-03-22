// 법구경(Dhammapada) — 핵심 게송 10선 단어 데이터
// 출처: Khuddaka Nikāya, Dhammapada

import type { VerseWord } from './types'

// ── Dhp 1: 쌍 품 (Yamakavagga) ──

export const VERSE_1 = {
  pali: 'Manopubbaṅgamā dhammā, manoseṭṭhā manomayā;\nmanasā ce paduṭṭhena, bhāsati vā karoti vā;\ntato naṃ dukkhamanveti, cakkaṃva vahato padaṃ.',
  pronKo: '마노뿝방가마- 담마-, 마노셋타- 마노마야-;\n마나사- 쩨 빠둣테나, 바-사띠 와- 까로띠 와-;\n따또 낭 둑카만웨띠, 짝깡와 와하또 빠당.',
  translation: '마음이 모든 법의 선두이니, 마음이 으뜸이고 마음이 만드나니.\n더러운 마음으로 말하거나 행하면,\n괴로움이 그를 따르나니, 수레바퀴가 소의 발을 따르듯이.',
  grammarNotes: [
    '문장 구조: 1행은 주어(dhammā)+서술어(manopubbaṅgamā/manoseṭṭhā/manomayā) 명사문, 2행은 조건절(ce)+동사(bhāsati/karoti), 3행은 주절(dukkham anveti)+비유(cakkaṃ iva)',
    '복합어 3종: mano+pubbaṅgama(마음이 앞서가는), mano+seṭṭha(마음이 최상인), mano+maya(마음으로 만들어진) — 모두 Bahubbīhi(소유복합어)로 dhammā를 수식',
    '연성(sandhi): dukkham+anveti → dukkhamanveti, cakkaṃ+iva → cakkaṃva — 모음 앞 niggahīta(ṃ)가 m으로 변환',
    '구격(tatiyadivibhatti) 용법: manasā paduṭṭhena — "더러운 마음으로(수단)" 구격이 행위의 수단/도구를 나타냄',
  ],
}

export const VERSE_1_WORDS: VerseWord[] = [
  { pali: 'Manopubbaṅgamā', pronKo: '마노뿝방가마-', meaning: '마음이 선두인', grammar: '형용사 남성 복수 주격 (mano + pubbaṅgama)' },
  { pali: 'dhammā', pronKo: '담마-', meaning: '법들은', grammar: '남성 복수 주격' },
  { pali: 'manoseṭṭhā', pronKo: '마노셋타-', meaning: '마음이 으뜸인', grammar: '형용사 남성 복수 주격 (mano + seṭṭha)' },
  { pali: 'manomayā', pronKo: '마노마야-', meaning: '마음으로 만들어진', grammar: '형용사 남성 복수 주격 (mano + maya)' },
  { pali: 'manasā', pronKo: '마나사-', meaning: '마음으로', grammar: '중성 단수 구격 (manas)' },
  { pali: 'ce', pronKo: '쩨', meaning: '만약', grammar: '불변어(접속사)' },
  { pali: 'paduṭṭhena', pronKo: '빠둣테나', meaning: '더러운/오염된', grammar: '과거분사 중성 단수 구격 (pa + dussati)' },
  { pali: 'bhāsati', pronKo: '바-사띠', meaning: '말하다', grammar: '현재 3인칭 단수' },
  { pali: 'vā', pronKo: '와-', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'karoti', pronKo: '까로띠', meaning: '행하다', grammar: '현재 3인칭 단수' },
  { pali: 'tato', pronKo: '따또', meaning: '그로부터/그래서', grammar: '불변어(부사)' },
  { pali: 'naṃ', pronKo: '낭', meaning: '그를', grammar: '3인칭 단수 대격' },
  { pali: 'dukkhamanveti', pronKo: '둑카만웨띠', meaning: '괴로움이 따르다', grammar: '현재 3인칭 단수 (dukkha + anveti, 연성)' },
  { pali: 'cakkaṃva', pronKo: '짝깡와', meaning: '수레바퀴처럼', grammar: '중성 단수 주격 + iva (연성)' },
  { pali: 'vahato', pronKo: '와하또', meaning: '끄는 자의', grammar: '현재분사 남성 단수 속격 (vahati)' },
  { pali: 'padaṃ', pronKo: '빠당', meaning: '발(자국)을', grammar: '중성 단수 대격' },
]

// ── Dhp 2: 쌍 품 ──

export const VERSE_2 = {
  pali: 'Manopubbaṅgamā dhammā, manoseṭṭhā manomayā;\nmanasā ce pasannena, bhāsati vā karoti vā;\ntato naṃ sukhamanveti, chāyāva anapāyinī.',
  pronKo: '마노뿝방가마- 담마-, 마노셋타- 마노마야-;\n마나사- 쩨 빠산네나, 바-사띠 와- 까로띠 와-;\n따또 낭 수카만웨띠, 차-야-와 아나빠-이니-.',
  translation: '마음이 모든 법의 선두이니, 마음이 으뜸이고 마음이 만드나니.\n맑은 마음으로 말하거나 행하면,\n행복이 그를 따르나니, 그림자가 떠나지 않듯이.',
  grammarNotes: [
    '1행은 Dhp 1과 동일 구조. 핵심 차이: 2행 paduṭṭhena(오염된) → pasannena(맑은), 3행 dukkham → sukham — 대구법(antithesis)으로 인과 대비',
    'pasannena: pa+sīdati(가라앉다→맑아지다)의 과거분사 pasanna의 구격. manasā와 성·수·격 일치(중성 단수 구격)',
    'chāyāva anapāyinī: chāyā(그림자, 여성)+iva(~처럼) — 비유의 주어가 여성이므로 anapāyinī도 여성 단수 주격(-ī 어미)',
    '연성: sukham+anveti → sukhamanveti, chāyā+iva → chāyāva — Dhp 1의 dukkhamanveti/cakkaṃva와 동일 패턴',
  ],
}

export const VERSE_2_WORDS: VerseWord[] = [
  { pali: 'pasannena', pronKo: '빠산네나', meaning: '맑은/청정한', grammar: '과거분사 중성 단수 구격 (pa + sīdati)' },
  { pali: 'sukhamanveti', pronKo: '수카만웨띠', meaning: '행복이 따르다', grammar: '현재 3인칭 단수 (sukha + anveti, 연성)' },
  { pali: 'chāyāva', pronKo: '차-야-와', meaning: '그림자처럼', grammar: '여성 단수 주격 + iva (연성)' },
  { pali: 'anapāyinī', pronKo: '아나빠-이니-', meaning: '떠나지 않는', grammar: '형용사 여성 단수 주격 (a + apāyin + ī)' },
]

// ── Dhp 5: 쌍 품 ──

export const VERSE_3 = {
  pali: 'Na hi verena verāni, sammantīdha kudācanaṃ;\naverena ca sammanti, esa dhammo sanantano.',
  pronKo: '나 히 웨레나 웨라-니, 삼만띠-다 꾸다-짜낭;\n아웨레나 짜 삼만띠, 에사 담모 사난따노.',
  translation: '원한으로는 원한이 결코 풀리지 않고,\n원한 없음으로 풀리나니, 이것이 영원한 법이니라.',
  grammarNotes: [
    '문장 구조: 1행은 부정(na)+구격(verena)+주어(verāni)+동사(sammanti) — "수단의 구격"으로 원한이라는 수단을 표현',
    '연성: sammanti+idha → sammantīdha — 동사 어미 -i와 idha의 i-가 합쳐 장모음 -ī. na...kudācanaṃ 이중부정으로 "결코~않다" 강조',
    '대구법: 1행 verena(구격) ↔ 2행 averena(구격) — 접두사 a-(부정)만 추가하여 의미를 완전히 반전. 동사 sammanti 동일',
    '2행 esa dhammo sanantano: 명사문(동사 없음). esa(지시대명사)=주어, dhammo=서술명사, sanantano=형용사 — "이것이 영원한 법이다"',
  ],
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'Na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'hi', pronKo: '히', meaning: '실로/왜냐하면', grammar: '불변어(강조 접속사)' },
  { pali: 'verena', pronKo: '웨레나', meaning: '원한으로', grammar: '중성 단수 구격 (vera)' },
  { pali: 'verāni', pronKo: '웨라-니', meaning: '원한들이', grammar: '중성 복수 주격' },
  { pali: 'sammantīdha', pronKo: '삼만띠-다', meaning: '풀리다 + 여기서', grammar: '현재 3인칭 복수 + idha (연성, sammati)' },
  { pali: 'kudācanaṃ', pronKo: '꾸다-짜낭', meaning: '결코 (~않다)', grammar: '불변어(부사)' },
  { pali: 'averena', pronKo: '아웨레나', meaning: '원한 없음으로', grammar: '중성 단수 구격 (a + vera)' },
  { pali: 'ca', pronKo: '짜', meaning: '그리고', grammar: '불변어(접속사)' },
  { pali: 'sammanti', pronKo: '삼만띠', meaning: '풀리다/가라앉다', grammar: '현재 3인칭 복수 (sammati)' },
  { pali: 'esa', pronKo: '에사', meaning: '이것이', grammar: '지시대명사 남성 단수 주격' },
  { pali: 'dhammo', pronKo: '담모', meaning: '법', grammar: '남성 단수 주격' },
  { pali: 'sanantano', pronKo: '사난따노', meaning: '영원한/오래된', grammar: '형용사 남성 단수 주격' },
]

// ── Dhp 21: 방일하지 않음 품 (Appamādavagga) ──

export const VERSE_4 = {
  pali: 'Appamādo amatapadaṃ, pamādo maccuno padaṃ;\nappamattā na mīyanti, ye pamattā yathā matā.',
  pronKo: '앞빠마-도 아마따빠당, 빠마-도 맛쭈노 빠당;\n앞빠맛따- 나 미-얀띠, 예 빠맛따- 야타- 마따-.',
  translation: '방일하지 않음은 불사의 길이요, 방일함은 죽음의 길이니.\n방일하지 않는 자는 죽지 않고, 방일한 자는 이미 죽은 것과 같다.',
  grammarNotes: [
    '1행은 대구 명사문: appamādo(주어)=amatapadaṃ(서술어) ↔ pamādo(주어)=maccuno padaṃ(서술어). 동사 없이 "A는 B이다" 구조',
    '복합어: amata+pada(불사의 경지) — Tappurisa(의존복합어, "불사에 대한 경지"). maccuno padaṃ은 복합어가 아닌 속격+명사 구조로 같은 의미를 표현',
    '접두사 a-(부정) 활용: appamādo(a+pamāda, 방일하지 않음), appamattā(a+pamatta, 방일하지 않는). pamādo/pamattā와 대비하여 쌍(yamaka) 구조 형성',
    '2행 ye pamattā yathā matā: 관계절(ye...pamattā)+비교(yathā matā) — "방일한 자들은 죽은 자와 같다". matā는 marati의 과거분사 남성 복수 주격',
  ],
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'Appamādo', pronKo: '앞빠마-도', meaning: '방일하지 않음', grammar: '남성 단수 주격 (a + pamāda)' },
  { pali: 'amatapadaṃ', pronKo: '아마따빠당', meaning: '불사의 길/경지', grammar: '중성 단수 주격 (amata + pada)' },
  { pali: 'pamādo', pronKo: '빠마-도', meaning: '방일함', grammar: '남성 단수 주격' },
  { pali: 'maccuno', pronKo: '맛쭈노', meaning: '죽음의', grammar: '남성 단수 속격 (maccu)' },
  { pali: 'padaṃ', pronKo: '빠당', meaning: '길/경지', grammar: '중성 단수 주격' },
  { pali: 'appamattā', pronKo: '앞빠맛따-', meaning: '방일하지 않는 자들', grammar: '형용사 남성 복수 주격 (a + pamatta)' },
  { pali: 'na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'mīyanti', pronKo: '미-얀띠', meaning: '죽다', grammar: '현재 3인칭 복수 (miyyati)' },
  { pali: 'ye', pronKo: '예', meaning: '~하는 자들은', grammar: '관계대명사 남성 복수 주격' },
  { pali: 'pamattā', pronKo: '빠맛따-', meaning: '방일한 자들', grammar: '형용사 남성 복수 주격' },
  { pali: 'yathā', pronKo: '야타-', meaning: '~처럼/~과 같이', grammar: '불변어(부사)' },
  { pali: 'matā', pronKo: '마따-', meaning: '죽은 자들', grammar: '과거분사 남성 복수 주격 (marati)' },
]

// ── Dhp 100: 천 품 (Sahassavagga) ──

export const VERSE_5 = {
  pali: 'Sahassamapi ce vācā, anatthapadasaṃhitā;\nekaṃ atthapadaṃ seyyo, yaṃ sutvā upasammati.',
  pronKo: '사핫사마삐 쩨 와-짜-, 아낫타빠다상히따-;\n에깡 앗타빠당 셋요, 양 숫와- 우빠삼마띠.',
  translation: '무익한 말이 천 마디보다,\n듣고 고요해지는 한 마디가 낫다.',
  grammarNotes: [
    '비교 구문: 1행(열등한 것)+2행(우월한 것, seyyo=비교급). "천 마디 무익한 말보다 한 마디 유익한 말이 낫다" — seyyo가 비교급 서술어',
    '복합어: an+attha+pada+saṃhita(무익한 말로 이루어진) — 4부분 복합어, attha+pada(유익한 말) — Tappurisa. sahasam+api → sahassamapi(천이라도)',
    '절대분사(tvā 구문): sutvā(suṇāti의 절대분사, "듣고 나서") — 주절 동사 upasammati보다 시간적으로 앞선 행위를 표현',
    '관계절: yaṃ sutvā upasammati — yaṃ(관계대명사 중성 단수 대격)이 atthapadaṃ을 받아 "그것을 듣고 고요해지는"이라는 관계절 형성',
  ],
}

export const VERSE_5_WORDS: VerseWord[] = [
  { pali: 'Sahassamapi', pronKo: '사핫사마삐', meaning: '천이라도', grammar: '중성 단수 주격 + api (sahassa + api)' },
  { pali: 'ce', pronKo: '쩨', meaning: '만약', grammar: '불변어(접속사)' },
  { pali: 'vācā', pronKo: '와-짜-', meaning: '말/언어', grammar: '여성 단수 주격' },
  { pali: 'anatthapadasaṃhitā', pronKo: '아낫타빠다상히따-', meaning: '무익한 말로 이루어진', grammar: '형용사 여성 단수 주격 (an + attha + pada + saṃhita)' },
  { pali: 'ekaṃ', pronKo: '에깡', meaning: '하나의', grammar: '수사 중성 단수 주격' },
  { pali: 'atthapadaṃ', pronKo: '앗타빠당', meaning: '유익한 말', grammar: '중성 단수 주격 (attha + pada)' },
  { pali: 'seyyo', pronKo: '셋요', meaning: '더 나은', grammar: '비교급 형용사 중성 단수 주격' },
  { pali: 'yaṃ', pronKo: '양', meaning: '그것을', grammar: '관계대명사 중성 단수 대격' },
  { pali: 'sutvā', pronKo: '숫와-', meaning: '듣고서', grammar: '절대분사 (suṇāti)' },
  { pali: 'upasammati', pronKo: '우빠삼마띠', meaning: '고요해지다/평정해지다', grammar: '현재 3인칭 단수 (upa + sammati)' },
]

// ── Dhp 160: 자기 품 (Attavagga) ──

export const VERSE_6 = {
  pali: 'Attā hi attano nātho, ko hi nātho paro siyā;\nattanā hi sudantena, nāthaṃ labhati dullabhaṃ.',
  pronKo: '앗따- 히 앗따노 나-토, 꼬 히 나-토 빠로 시야-;\n앗따나- 히 수단떼나, 나-탕 라바띠 둘라방.',
  translation: '자기 자신이 자기의 의지처이니, 남이 어찌 의지처가 되리오.\n자신을 잘 다스리면 얻기 어려운 의지처를 얻으리라.',
  grammarNotes: [
    '1행 명사문+의문문: attā(주어)=nātho(서술어) "자신이 의지처이다" → ko paro nātho siyā "누가 타인이 의지처이겠는가?" siyā는 atthi의 가능법(optative)으로 수사의문',
    '재귀대명사 attan: attā(주격), attano(속격), attanā(구격) — 한 게송 안에 3가지 격변화가 모두 등장하여 attan 변화 학습에 유용',
    '복합어: su+danta(잘+길들여진) — 접두사 su-(좋은/잘)와 과거분사 danta(dameti에서)의 결합. du+labha(어렵게+얻는) — 접두사 du-(어려운)와 labha의 결합',
    '구격의 조건적 용법: attanā sudantena "잘 다스려진 자신으로써" — 구격이 조건("~하면")의 의미로 사용됨. 주어가 생략되어 있음(자기 자신이)',
  ],
}

export const VERSE_6_WORDS: VerseWord[] = [
  { pali: 'Attā', pronKo: '앗따-', meaning: '자기 자신', grammar: '남성 단수 주격' },
  { pali: 'hi', pronKo: '히', meaning: '실로', grammar: '불변어(강조 접속사)' },
  { pali: 'attano', pronKo: '앗따노', meaning: '자기의', grammar: '재귀대명사 단수 속격' },
  { pali: 'nātho', pronKo: '나-토', meaning: '의지처/보호자', grammar: '남성 단수 주격' },
  { pali: 'ko', pronKo: '꼬', meaning: '누가', grammar: '의문대명사 남성 단수 주격' },
  { pali: 'paro', pronKo: '빠로', meaning: '남/타인', grammar: '남성 단수 주격' },
  { pali: 'siyā', pronKo: '시야-', meaning: '~이겠는가', grammar: '가능법 3인칭 단수 (atthi)' },
  { pali: 'attanā', pronKo: '앗따나-', meaning: '자기 자신으로', grammar: '재귀대명사 단수 구격' },
  { pali: 'sudantena', pronKo: '수단떼나', meaning: '잘 다스려진', grammar: '과거분사 남성 단수 구격 (su + danta)' },
  { pali: 'nāthaṃ', pronKo: '나-탕', meaning: '의지처를', grammar: '남성 단수 대격' },
  { pali: 'labhati', pronKo: '라바띠', meaning: '얻다', grammar: '현재 3인칭 단수' },
  { pali: 'dullabhaṃ', pronKo: '둘라방', meaning: '얻기 어려운', grammar: '형용사 남성 단수 대격 (du + labha)' },
]

// ── Dhp 183: 불타 품 (Buddhavagga) ──

export const VERSE_7 = {
  pali: 'Sabbapāpassa akaraṇaṃ, kusalassa upasampadā;\nsacittapariyodapanaṃ, etaṃ buddhāna sāsanaṃ.',
  pronKo: '삽바빠-빳사 아까라낭, 꾸살랏사 우빠삼빠다-;\n사찟따빠리요다빠낭, 에땅 붓다-나 사-사낭.',
  translation: '모든 악을 짓지 않고, 선을 행하며,\n자기 마음을 깨끗이 하는 것, 이것이 모든 부처님의 가르침이니라.',
  grammarNotes: [
    '문장 구조: 3개의 주어(akaraṇaṃ, upasampadā, sacittapariyodapanaṃ)가 나열된 후 마지막 행에서 etaṃ...sāsanaṃ으로 서술 — 열거+총괄 구조',
    '속격의 목적적 용법: sabbapāpassa akaraṇaṃ "모든 악의 짓지 않음" — 속격(pāpassa)이 행위명사(akaraṇaṃ)의 목적어 역할. kusalassa upasampadā도 동일 패턴',
    '복합어: sabba+pāpa(모든+악) — Kammadhāraya, sa+citta+pari+oda+pana(자기+마음+완전히+씻음) — 4부분 복합어, a+karaṇa(짓지+않음) — 부정 접두사',
    'buddhāna: buddha의 복수 속격. 표준형은 buddhānaṃ이나 게송 운율에 맞추기 위해 -naṃ 대신 고형(古形) -na 사용',
  ],
}

export const VERSE_7_WORDS: VerseWord[] = [
  { pali: 'Sabbapāpassa', pronKo: '삽바빠-빳사', meaning: '모든 악의', grammar: '중성 단수 속격 (sabba + pāpa)' },
  { pali: 'akaraṇaṃ', pronKo: '아까라낭', meaning: '짓지 않음', grammar: '중성 단수 주격 (a + karaṇa)' },
  { pali: 'kusalassa', pronKo: '꾸살랏사', meaning: '선의/선한 것의', grammar: '중성 단수 속격' },
  { pali: 'upasampadā', pronKo: '우빠삼빠다-', meaning: '성취함/구족함', grammar: '여성 단수 주격' },
  { pali: 'sacittapariyodapanaṃ', pronKo: '사찟따빠리요다빠낭', meaning: '자기 마음의 청정', grammar: '중성 단수 주격 (sa + citta + pariyodapana)' },
  { pali: 'etaṃ', pronKo: '에땅', meaning: '이것이', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'buddhāna', pronKo: '붓다-나', meaning: '부처님들의', grammar: '남성 복수 속격' },
  { pali: 'sāsanaṃ', pronKo: '사-사낭', meaning: '가르침', grammar: '중성 단수 주격' },
]

// ── Dhp 197: 행복 품 (Sukhavagga) ──

export const VERSE_8 = {
  pali: 'Susukhaṃ vata jīvāma, verinesu averino;\nverinesu manussesu, viharāma averino.',
  pronKo: '수수캉 와따 지-와-마, 웨리네수 아웨리노;\n웨리네수 마눗세수, 위하라-마 아웨리노.',
  translation: '참으로 행복하게 사는도다, 원한 있는 이들 사이에서 원한 없이.\n원한 있는 사람들 사이에서 원한 없이 머무나니.',
  grammarNotes: [
    '1인칭 복수 동사: jīvāma(산다), viharāma(머문다) — 화자가 자신을 포함한 공동체("우리")의 삶을 선언하는 감탄적 표현',
    '처격(sattamīdivibhatti)의 환경적 용법: verinesu manussesu "원한 있는 사람들 사이에서" — 처격이 "~한 환경/상황 속에서"를 표현',
    '접두사 su-(강조): su+sukha → susukha "매우 행복한" — 접두사 su-가 형용사를 강조. a+verin → averin "원한 없는" — 접두사 a-가 부정',
    '대구 반복: 1행과 2행이 거의 동일 구조(처격+주격+동사)를 반복하되, jīvāma→viharāma, 처격에 manussesu 추가 — 게송의 운율적 반복 강조법',
  ],
}

export const VERSE_8_WORDS: VerseWord[] = [
  { pali: 'Susukhaṃ', pronKo: '수수캉', meaning: '매우 행복하게', grammar: '부사 (su + sukha)' },
  { pali: 'vata', pronKo: '와따', meaning: '참으로/실로', grammar: '불변어(감탄사)' },
  { pali: 'jīvāma', pronKo: '지-와-마', meaning: '우리는 산다', grammar: '현재 1인칭 복수 (jīvati)' },
  { pali: 'verinesu', pronKo: '웨리네수', meaning: '원한 있는 이들 사이에서', grammar: '형용사 남성 복수 처격 (verin)' },
  { pali: 'averino', pronKo: '아웨리노', meaning: '원한 없는 자들', grammar: '형용사 남성 복수 주격 (a + verin)' },
  { pali: 'manussesu', pronKo: '마눗세수', meaning: '사람들 사이에서', grammar: '남성 복수 처격' },
  { pali: 'viharāma', pronKo: '위하라-마', meaning: '우리는 머문다', grammar: '현재 1인칭 복수 (viharati)' },
]

// ── Dhp 223: 분노 품 (Kodhavagga) ──

export const VERSE_9 = {
  pali: 'Akkodhena jine kodhaṃ, asādhuṃ sādhunā jine;\njine kadariyaṃ dānena, saccenālikavādinaṃ.',
  pronKo: '악코데나 지네 꼬당, 아사-둥 사-두나- 지네;\n지네 까다리양 다-네나, 삿쩨나-리까와-디낭.',
  translation: '성내지 않음으로 성냄을 이기고, 선으로 불선을 이기며,\n보시로 인색을 이기고, 진실로 거짓말하는 자를 이겨라.',
  grammarNotes: [
    '가능법(optative) jine: jayati(이기다)의 가능법 3인칭 단수 — 권고/당위("~해야 한다, ~하라")를 표현. 4절 모두 동일 동사 반복으로 리듬 형성',
    '구격(수단)+대격(대상) 4쌍 병렬: akkodhena→kodhaṃ, sādhunā→asādhuṃ, dānena→kadariyaṃ, saccena→alikavādinaṃ — "A로써 B를 이겨라" 패턴 반복',
    '연성: saccena+alikavādinaṃ → saccenālikavādinaṃ — a 앞에서 a+a → ā 장모음화. alikavādinaṃ은 alika+vādin(거짓+말하는 자)의 남성 단수 대격',
    '반의어 쌍: akkodha↔kodha(비분노↔분노), sādhu↔asādhu(선↔불선) — 접두사 a-로 반의어를 만드는 빠알리어의 체계적 단어 형성법',
  ],
}

export const VERSE_9_WORDS: VerseWord[] = [
  { pali: 'Akkodhena', pronKo: '악코데나', meaning: '성내지 않음으로', grammar: '남성 단수 구격 (a + kodha)' },
  { pali: 'jine', pronKo: '지네', meaning: '이겨라', grammar: '가능법 3인칭 단수 (jayati)' },
  { pali: 'kodhaṃ', pronKo: '꼬당', meaning: '성냄을/분노를', grammar: '남성 단수 대격' },
  { pali: 'asādhuṃ', pronKo: '아사-둥', meaning: '불선한 자를', grammar: '형용사 남성 단수 대격 (a + sādhu)' },
  { pali: 'sādhunā', pronKo: '사-두나-', meaning: '선으로/착함으로', grammar: '중성 단수 구격' },
  { pali: 'kadariyaṃ', pronKo: '까다리양', meaning: '인색한 자를', grammar: '형용사 남성 단수 대격' },
  { pali: 'dānena', pronKo: '다-네나', meaning: '보시로', grammar: '중성 단수 구격' },
  { pali: 'saccenālikavādinaṃ', pronKo: '삿쩨나-리까와-디낭', meaning: '진실로 + 거짓말하는 자를', grammar: '중성 단수 구격 + 남성 단수 대격 (sacca + alika + vādin, 연성)' },
]

// ── Dhp 277: 길 품 (Maggavagga) ──

export const VERSE_10 = {
  pali: 'Sabbe saṅkhārā aniccāti, yadā paññāya passati;\natha nibbindati dukkhe, esa maggo visuddhiyā.',
  pronKo: '삽베 상카-라- 아닛짜-띠, 야다- 빤냐-야 빳사띠;\n아타 닙빈다띠 둑케, 에사 맛고 위숫디야-.',
  translation: '\'모든 형성된 것은 무상하다\'고 지혜로 볼 때,\n괴로움에 염오하나니, 이것이 청정의 길이니라.',
  grammarNotes: [
    '직접인용: sabbe saṅkhārā aniccā+iti → aniccāti — iti(~라고)가 인용절을 마감. 인용 내부는 주어(saṅkhārā)+서술어(aniccā) 명사문',
    '시간절+주절: yadā...passati(~할 때 본다) → atha nibbindati(그러면 염오한다) — yadā...atha 상관 부사쌍이 조건-결과를 연결',
    '구격(paññāya): paññā(지혜)의 여성 단수 구격 — 수단/도구의 구격 "지혜로써". 처격(dukkhe): dukkha의 중성 단수 처격 — "괴로움에 대해" 대상의 처격',
    '2행 명사문: esa maggo visuddhiyā "이것이 청정을 위한 길이다". visuddhiyā는 여격(~을 위한) 또는 속격(~의) — 목적/귀착의 여격 용법',
  ],
}

export const VERSE_10_WORDS: VerseWord[] = [
  { pali: 'Sabbe', pronKo: '삽베', meaning: '모든', grammar: '형용사 남성 복수 주격' },
  { pali: 'saṅkhārā', pronKo: '상카-라-', meaning: '형성된 것들/행', grammar: '남성 복수 주격' },
  { pali: 'aniccāti', pronKo: '아닛짜-띠', meaning: '무상하다고', grammar: '형용사 남성 복수 주격 + iti (연성)' },
  { pali: 'yadā', pronKo: '야다-', meaning: '~할 때', grammar: '불변어(부사)' },
  { pali: 'paññāya', pronKo: '빤냐-야', meaning: '지혜로', grammar: '여성 단수 구격 (paññā)' },
  { pali: 'passati', pronKo: '빳사띠', meaning: '보다/통찰하다', grammar: '현재 3인칭 단수' },
  { pali: 'atha', pronKo: '아타', meaning: '그때/그러면', grammar: '불변어(부사)' },
  { pali: 'nibbindati', pronKo: '닙빈다띠', meaning: '염오하다/싫어지다', grammar: '현재 3인칭 단수' },
  { pali: 'dukkhe', pronKo: '둑케', meaning: '괴로움에 대해', grammar: '중성 단수 처격' },
  { pali: 'maggo', pronKo: '맛고', meaning: '길/도', grammar: '남성 단수 주격' },
  { pali: 'visuddhiyā', pronKo: '위숫디야-', meaning: '청정의', grammar: '여성 단수 속격/여격 (visuddhi)' },
]

// ── 전체 게송 배열 ──
export const ALL_VERSES = [
  { id: 'dhp1', verseRef: 'Dhp 1', ...VERSE_1, words: VERSE_1_WORDS },
  { id: 'dhp2', verseRef: 'Dhp 2', ...VERSE_2, words: VERSE_2_WORDS },
  { id: 'dhp5', verseRef: 'Dhp 5', ...VERSE_3, words: VERSE_3_WORDS },
  { id: 'dhp21', verseRef: 'Dhp 21', ...VERSE_4, words: VERSE_4_WORDS },
  { id: 'dhp100', verseRef: 'Dhp 100', ...VERSE_5, words: VERSE_5_WORDS },
  { id: 'dhp160', verseRef: 'Dhp 160', ...VERSE_6, words: VERSE_6_WORDS },
  { id: 'dhp183', verseRef: 'Dhp 183', ...VERSE_7, words: VERSE_7_WORDS },
  { id: 'dhp197', verseRef: 'Dhp 197', ...VERSE_8, words: VERSE_8_WORDS },
  { id: 'dhp223', verseRef: 'Dhp 223', ...VERSE_9, words: VERSE_9_WORDS },
  { id: 'dhp277', verseRef: 'Dhp 277', ...VERSE_10, words: VERSE_10_WORDS },
]

// ── 전체 단어 (중복 제거) ──
export const ALL_DHAMMAPADA_WORDS: VerseWord[] = (() => {
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
