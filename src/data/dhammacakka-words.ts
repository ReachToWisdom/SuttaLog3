// 전법륜경(Dhammacakkappavattana Sutta, SN 56.11) — 핵심 단락 단어 데이터
// 출처: Saṃyutta Nikāya 56.11

import type { VerseWord } from './types'

// ── 전법륜경 원문 (단락별) ──

/** 단락1: 서문 */
export const VERSE_1 = {
  pali: 'Ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati isipatane migadāye.',
  pronKo: '에깡 사마양 바가와- 바-라-나시양 위하라띠 이시빠따네 미가다-예.',
  translation: '한 때 세존께서 바라나시의 이시빠따나 녹야원에 머무셨다.',
}

export const VERSE_1_WORDS: VerseWord[] = [
  { pali: 'Ekaṃ', pronKo: '에깡', meaning: '하나의/한', grammar: '수사 중성 단수 대격' },
  { pali: 'samayaṃ', pronKo: '사마양', meaning: '때/시기', grammar: '남성 단수 대격' },
  { pali: 'bhagavā', pronKo: '바가와-', meaning: '세존(부처님)', grammar: '남성 단수 주격' },
  { pali: 'bārāṇasiyaṃ', pronKo: '바-라-나시양', meaning: '바라나시에서', grammar: '여성 단수 처격 (지명)' },
  { pali: 'viharati', pronKo: '위하라띠', meaning: '머무시다', grammar: '현재 3인칭 단수 (vi + harati)' },
  { pali: 'isipatane', pronKo: '이시빠따네', meaning: '이시빠따나(선인들이 떨어진 곳)에서', grammar: '중성 단수 처격 (지명)' },
  { pali: 'migadāye', pronKo: '미가다-예', meaning: '녹야원(사슴동산)에서', grammar: '남성 단수 처격 (miga + dāya)' },
]

/** 단락2: 중도 — 두 극단의 회피 */
export const VERSE_2 = {
  pali: 'Dveme bhikkhave antā pabbajitena na sevitabbā. Yo cāyaṃ kāmesu kāmasukhallikānuyogo hīno gammo pothujjaniko anariyo anatthasaṃhito, yo cāyaṃ attakilamathānuyogo dukkho anariyo anatthasaṃhito. Ete kho bhikkhave ubho ante anupagamma majjhimā paṭipadā tathāgatena abhisambuddhā.',
  pronKo: '드웨메 빅카웨 안따- 빱바지떼나 나 세위땁바-. 요 짜-양 까-메수 까-마숙칼리까-누요고 히-노 감모 뽀투잔니꼬 아나리요 아낫타상히또, 요 짜-양 앗따낄라마타-누요고 둑코 아나리요 아낫타상히또. 에떼 코 빅카웨 우보 안떼 아누빠감마 맛지마- 빠띠빠다- 따타-가떼나 아비삼붓다-.',
  translation: '비구들이여, 출가자가 가까이하지 말아야 할 두 극단이 있다. 감각적 쾌락에 탐닉하는 것은 저열하고 세속적이며 범부의 것이고 성스럽지 않고 이익이 없다. 자기 괴롭힘에 전념하는 것은 괴롭고 성스럽지 않고 이익이 없다. 비구들이여, 여래는 이 두 극단에 가까이하지 않고 중도를 완전히 깨달았다.',
}

export const VERSE_2_WORDS: VerseWord[] = [
  { pali: 'Dve', pronKo: '드웨', meaning: '둘', grammar: '수사 남성 복수 주격' },
  { pali: 'ime', pronKo: '이메', meaning: '이것들', grammar: '지시대명사 남성 복수 주격' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'antā', pronKo: '안따-', meaning: '극단들', grammar: '남성 복수 주격' },
  { pali: 'pabbajitena', pronKo: '빱바지떼나', meaning: '출가자에 의해', grammar: '과거분사 남성 단수 구격' },
  { pali: 'na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'sevitabbā', pronKo: '세위땁바-', meaning: '가까이해야 할', grammar: '미래수동분사 남성 복수 주격 (sevati)' },
  { pali: 'yo', pronKo: '요', meaning: '~하는 것/그것', grammar: '관계대명사 남성 단수 주격' },
  { pali: 'ca', pronKo: '짜', meaning: '그리고', grammar: '불변어(접속사)' },
  { pali: 'ayaṃ', pronKo: '아양', meaning: '이것', grammar: '지시대명사 남성 단수 주격' },
  { pali: 'kāmesu', pronKo: '까-메수', meaning: '감각적 쾌락들에서', grammar: '남성 복수 처격' },
  { pali: 'kāmasukhallikānuyogo', pronKo: '까-마숙칼리까-누요고', meaning: '감각적 쾌락에 탐닉함', grammar: '남성 단수 주격 (kāma + sukhallika + anuyoga)' },
  { pali: 'hīno', pronKo: '히-노', meaning: '저열한/비천한', grammar: '형용사 남성 단수 주격' },
  { pali: 'gammo', pronKo: '감모', meaning: '세속적인/촌스러운', grammar: '형용사 남성 단수 주격' },
  { pali: 'pothujjaniko', pronKo: '뽀투잔니꼬', meaning: '범부의/세속인의', grammar: '형용사 남성 단수 주격' },
  { pali: 'anariyo', pronKo: '아나리요', meaning: '성스럽지 않은', grammar: '형용사 남성 단수 주격 (a + ariya)' },
  { pali: 'anatthasaṃhito', pronKo: '아낫타상히또', meaning: '이익이 없는', grammar: '형용사 남성 단수 주격 (a + attha + saṃhita)' },
  { pali: 'attakilamathānuyogo', pronKo: '앗따낄라마타-누요고', meaning: '자기 괴롭힘에 전념함', grammar: '남성 단수 주격 (atta + kilamatha + anuyoga)' },
  { pali: 'dukkho', pronKo: '둑코', meaning: '괴로운', grammar: '형용사 남성 단수 주격' },
  { pali: 'ete', pronKo: '에떼', meaning: '이것들', grammar: '지시대명사 남성 복수 대격' },
  { pali: 'kho', pronKo: '코', meaning: '실로/참으로', grammar: '불변어(강조사)' },
  { pali: 'ubho', pronKo: '우보', meaning: '둘 다', grammar: '수사 남성 복수 대격' },
  { pali: 'ante', pronKo: '안떼', meaning: '극단들을', grammar: '남성 복수 대격' },
  { pali: 'anupagamma', pronKo: '아누빠감마', meaning: '가까이하지 않고', grammar: '절대분사 (an + upagacchati)' },
  { pali: 'majjhimā', pronKo: '맛지마-', meaning: '중간의/중도의', grammar: '형용사 여성 단수 주격' },
  { pali: 'paṭipadā', pronKo: '빠띠빠다-', meaning: '도/길/실천', grammar: '여성 단수 주격' },
  { pali: 'tathāgatena', pronKo: '따타-가떼나', meaning: '여래에 의해', grammar: '남성 단수 구격' },
  { pali: 'abhisambuddhā', pronKo: '아비삼붓다-', meaning: '완전히 깨달은', grammar: '과거분사 여성 단수 주격 (abhi + sam + budh)' },
]

/** 단락3: 팔정도 */
export const VERSE_3 = {
  pali: 'Katamā ca sā bhikkhave majjhimā paṭipadā tathāgatena abhisambuddhā. Ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṃ — sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi.',
  pronKo: '까따마- 짜 사- 빅카웨 맛지마- 빠띠빠다- 따타-가떼나 아비삼붓다-. 아야메와 아리요 앗탕기꼬 맏고, 세야티당 — 삼마-딧티 삼마-상깝뽀 삼마-와-짜- 삼마-깜만또 삼마-아-지-워 삼마-와-야-모 삼마-사띠 삼마-사마-디.',
  translation: '비구들이여, 여래가 깨달은 중도란 무엇인가. 이 성스러운 팔정도이니, 곧 바른 견해, 바른 사유, 바른 말, 바른 행위, 바른 생계, 바른 노력, 바른 새김, 바른 삼매이다.',
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'Katamā', pronKo: '까따마-', meaning: '어떤 것인가', grammar: '의문대명사 여성 단수 주격' },
  { pali: 'sā', pronKo: '사-', meaning: '그것', grammar: '지시대명사 여성 단수 주격' },
  { pali: 'ayameva', pronKo: '아야메와', meaning: '바로 이것', grammar: '지시대명사 + eva(강조)' },
  { pali: 'ariyo', pronKo: '아리요', meaning: '성스러운/고귀한', grammar: '형용사 남성 단수 주격' },
  { pali: 'aṭṭhaṅgiko', pronKo: '앗탕기꼬', meaning: '여덟 가지로 된', grammar: '형용사 남성 단수 주격 (aṭṭha + aṅga + ika)' },
  { pali: 'maggo', pronKo: '맏고', meaning: '도/길', grammar: '남성 단수 주격' },
  { pali: 'seyyathidaṃ', pronKo: '세야티당', meaning: '이른바/곧', grammar: '불변어(설명 도입사)' },
  { pali: 'sammādiṭṭhi', pronKo: '삼마-딧티', meaning: '바른 견해', grammar: '여성 단수 주격 (sammā + diṭṭhi)', important: true },
  { pali: 'sammāsaṅkappo', pronKo: '삼마-상깝뽀', meaning: '바른 사유', grammar: '남성 단수 주격 (sammā + saṅkappa)', important: true },
  { pali: 'sammāvācā', pronKo: '삼마-와-짜-', meaning: '바른 말', grammar: '여성 단수 주격 (sammā + vācā)', important: true },
  { pali: 'sammākammanto', pronKo: '삼마-깜만또', meaning: '바른 행위', grammar: '남성 단수 주격 (sammā + kammanta)', important: true },
  { pali: 'sammāājīvo', pronKo: '삼마-아-지-워', meaning: '바른 생계', grammar: '남성 단수 주격 (sammā + ājīva)', important: true },
  { pali: 'sammāvāyāmo', pronKo: '삼마-와-야-모', meaning: '바른 노력', grammar: '남성 단수 주격 (sammā + vāyāma)', important: true },
  { pali: 'sammāsati', pronKo: '삼마-사띠', meaning: '바른 새김/알아차림', grammar: '여성 단수 주격 (sammā + sati)', important: true },
  { pali: 'sammāsamādhi', pronKo: '삼마-사마-디', meaning: '바른 삼매/집중', grammar: '남성 단수 주격 (sammā + samādhi)', important: true },
]

/** 단락4: 고성제 (苦聖諦) */
export const VERSE_4 = {
  pali: 'Idaṃ kho pana bhikkhave dukkhaṃ ariyasaccaṃ — jātipi dukkhā jarāpi dukkhā byādhipi dukkhā maraṇampi dukkhaṃ, appiyehi sampayogo dukkho piyehi vippayogo dukkho yampicchaṃ na labhati tampi dukkhaṃ, saṅkhittena pañcupādānakkhandhā dukkhā.',
  pronKo: '이당 코 빠나 빅카웨 둑캉 아리야삿짱 — 자-띠삐 둑카- 자라-삐 둑카- 뱌-디삐 둑카- 마라남삐 둑캉, 앞삐예히 삼빠요고 둑코 삐예히 윕빠요고 둑코 양삣창 나 라바띠 땀삐 둑캉, 상킷떼나 빤쭈빠-다-낙칸다- 둑카-.',
  translation: '비구들이여, 이것이 괴로움의 성스러운 진리이다 — 태어남도 괴롭고, 늙음도 괴롭고, 병듦도 괴롭고, 죽음도 괴롭다. 좋아하지 않는 것과 만남도 괴롭고, 좋아하는 것과 헤어짐도 괴롭고, 원하는 것을 얻지 못함도 괴롭다. 요약하면 오취온이 괴로움이다.',
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'Idaṃ', pronKo: '이당', meaning: '이것', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'kho', pronKo: '코', meaning: '실로/참으로', grammar: '불변어(강조사)' },
  { pali: 'pana', pronKo: '빠나', meaning: '그런데/또한', grammar: '불변어(접속사)' },
  { pali: 'dukkhaṃ', pronKo: '둑캉', meaning: '괴로움', grammar: '중성 단수 주격', important: true },
  { pali: 'ariyasaccaṃ', pronKo: '아리야삿짱', meaning: '성스러운 진리', grammar: '중성 단수 주격 (ariya + sacca)', important: true },
  { pali: 'jātipi', pronKo: '자-띠삐', meaning: '태어남도', grammar: '여성 단수 주격 + api (jāti + pi)' },
  { pali: 'dukkhā', pronKo: '둑카-', meaning: '괴로운', grammar: '형용사 여성 단수 주격' },
  { pali: 'jarāpi', pronKo: '자라-삐', meaning: '늙음도', grammar: '여성 단수 주격 + api' },
  { pali: 'byādhipi', pronKo: '뱌-디삐', meaning: '병듦도', grammar: '남성 단수 주격 + api' },
  { pali: 'maraṇampi', pronKo: '마라남삐', meaning: '죽음도', grammar: '중성 단수 주격 + api' },
  { pali: 'appiyehi', pronKo: '앞삐예히', meaning: '좋아하지 않는 것들과', grammar: '형용사 남성 복수 구격 (a + piya)' },
  { pali: 'sampayogo', pronKo: '삼빠요고', meaning: '만남/결합', grammar: '남성 단수 주격' },
  { pali: 'piyehi', pronKo: '삐예히', meaning: '좋아하는 것들과', grammar: '형용사 남성 복수 구격' },
  { pali: 'vippayogo', pronKo: '윕빠요고', meaning: '헤어짐/분리', grammar: '남성 단수 주격 (vi + payoga)' },
  { pali: 'yampicchaṃ', pronKo: '양삣창', meaning: '원하는 것을', grammar: '관계대명사 + icchā (yaṃ + pi + icchaṃ)' },
  { pali: 'labhati', pronKo: '라바띠', meaning: '얻다', grammar: '현재 3인칭 단수' },
  { pali: 'tampi', pronKo: '땀삐', meaning: '그것도', grammar: '지시대명사 중성 단수 주격 + api' },
  { pali: 'saṅkhittena', pronKo: '상킷떼나', meaning: '요약하면', grammar: '과거분사 중성 단수 구격 (saṃ + khipati)' },
  { pali: 'pañcupādānakkhandhā', pronKo: '빤쭈빠-다-낙칸다-', meaning: '오취온(다섯 집착 무더기)', grammar: '남성 복수 주격 (pañca + upādāna + khandha)', important: true },
]

/** 단락5: 집성제 (集聖諦) */
export const VERSE_5 = {
  pali: 'Idaṃ kho pana bhikkhave dukkhasamudayaṃ ariyasaccaṃ — yāyaṃ taṇhā ponobbhavikā nandirāgasahagatā tatratatrābhinandinī, seyyathidaṃ — kāmataṇhā bhavataṇhā vibhavataṇhā.',
  pronKo: '이당 코 빠나 빅카웨 둑카사무다양 아리야삿짱 — 야-양 딴하- 뽀놉바위까- 난디라-가사하가따- 따뜨라따뜨라-비난디니-, 세야티당 — 까-마딴하- 바와딴하- 위바와딴하-.',
  translation: '비구들이여, 이것이 괴로움의 발생의 성스러운 진리이다 — 다시 태어남을 가져오고 즐거움과 탐착을 동반하며 여기저기서 기뻐하는 갈애이니, 곧 감각적 쾌락에 대한 갈애, 존재에 대한 갈애, 비존재에 대한 갈애이다.',
}

export const VERSE_5_WORDS: VerseWord[] = [
  { pali: 'dukkhasamudayaṃ', pronKo: '둑카사무다양', meaning: '괴로움의 발생', grammar: '중성 단수 주격 (dukkha + samudaya)', important: true },
  { pali: 'yāyaṃ', pronKo: '야-양', meaning: '이 ~인', grammar: '관계대명사 여성 단수 주격 (yā + ayaṃ)' },
  { pali: 'taṇhā', pronKo: '딴하-', meaning: '갈애/갈망', grammar: '여성 단수 주격', important: true },
  { pali: 'ponobbhavikā', pronKo: '뽀놉바위까-', meaning: '다시 태어남을 가져오는', grammar: '형용사 여성 단수 주격 (puna + bhava + ika)' },
  { pali: 'nandirāgasahagatā', pronKo: '난디라-가사하가따-', meaning: '즐거움과 탐착을 동반하는', grammar: '형용사 여성 단수 주격 (nandī + rāga + sahagata)' },
  { pali: 'tatratatrābhinandinī', pronKo: '따뜨라따뜨라-비난디니-', meaning: '여기저기서 기뻐하는', grammar: '형용사 여성 단수 주격 (tatra + tatra + abhinandinī)' },
  { pali: 'kāmataṇhā', pronKo: '까-마딴하-', meaning: '감각적 쾌락에 대한 갈애', grammar: '여성 단수 주격 (kāma + taṇhā)', important: true },
  { pali: 'bhavataṇhā', pronKo: '바와딴하-', meaning: '존재에 대한 갈애', grammar: '여성 단수 주격 (bhava + taṇhā)', important: true },
  { pali: 'vibhavataṇhā', pronKo: '위바와딴하-', meaning: '비존재에 대한 갈애', grammar: '여성 단수 주격 (vi + bhava + taṇhā)', important: true },
]

/** 단락6: 멸성제 (滅聖諦) */
export const VERSE_6 = {
  pali: 'Idaṃ kho pana bhikkhave dukkhanirodhaṃ ariyasaccaṃ — yo tassāyeva taṇhāya asesavirāganirodho cāgo paṭinissaggo mutti anālayo.',
  pronKo: '이당 코 빠나 빅카웨 둑카니로당 아리야삿짱 — 요 땃사-예와 딴하-야 아세사위라-가니로도 짜-고 빠띠닛삭고 뭇띠 아나-라요.',
  translation: '비구들이여, 이것이 괴로움의 소멸의 성스러운 진리이다 — 그 갈애의 남김없는 이욕과 소멸, 놓아버림, 포기함, 해탈, 집착 없음이다.',
}

export const VERSE_6_WORDS: VerseWord[] = [
  { pali: 'dukkhanirodhaṃ', pronKo: '둑카니로당', meaning: '괴로움의 소멸', grammar: '중성 단수 주격 (dukkha + nirodha)', important: true },
  { pali: 'tassāyeva', pronKo: '땃사-예와', meaning: '바로 그것의', grammar: '지시대명사 여성 단수 속격 + eva' },
  { pali: 'taṇhāya', pronKo: '딴하-야', meaning: '갈애의', grammar: '여성 단수 속격' },
  { pali: 'asesavirāganirodho', pronKo: '아세사위라-가니로도', meaning: '남김없는 이욕과 소멸', grammar: '남성 단수 주격 (asesa + virāga + nirodha)' },
  { pali: 'cāgo', pronKo: '짜-고', meaning: '놓아버림/버림', grammar: '남성 단수 주격', important: true },
  { pali: 'paṭinissaggo', pronKo: '빠띠닛삭고', meaning: '포기함/내려놓음', grammar: '남성 단수 주격', important: true },
  { pali: 'mutti', pronKo: '뭇띠', meaning: '해탈/풀려남', grammar: '여성 단수 주격', important: true },
  { pali: 'anālayo', pronKo: '아나-라요', meaning: '집착 없음', grammar: '남성 단수 주격 (a + ālaya)', important: true },
]

/** 단락7: 도성제 (道聖諦) */
export const VERSE_7 = {
  pali: 'Idaṃ kho pana bhikkhave dukkhanirodhagāminī paṭipadā ariyasaccaṃ — ayameva ariyo aṭṭhaṅgiko maggo.',
  pronKo: '이당 코 빠나 빅카웨 둑카니로다가-미니- 빠띠빠다- 아리야삿짱 — 아야메와 아리요 앗탕기꼬 맏고.',
  translation: '비구들이여, 이것이 괴로움의 소멸로 이끄는 도의 성스러운 진리이다 — 이 성스러운 팔정도이다.',
}

export const VERSE_7_WORDS: VerseWord[] = [
  { pali: 'dukkhanirodhagāminī', pronKo: '둑카니로다가-미니-', meaning: '괴로움의 소멸로 이끄는', grammar: '형용사 여성 단수 주격 (dukkha + nirodha + gāminī)', important: true },
  { pali: 'paṭipadā', pronKo: '빠띠빠다-', meaning: '도/길/실천', grammar: '여성 단수 주격' },
]

/** 단락8: 결론 — 꼰단냐의 법안 */
export const VERSE_8 = {
  pali: 'Imasmiṃ ca pana veyyākaraṇasmiṃ bhaññamāne āyasmato koṇḍaññassa virajaṃ vītamalaṃ dhammacakkhuṃ udapādi — yaṃ kiñci samudayadhammaṃ sabbaṃ taṃ nirodhadhammanti.',
  pronKo: '이마스밍 짜 빠나 웨야-까라나스밍 반냐마-네 아-야스마또 꼰단냣사 위라장 위-따말랑 담마짝쿵 우다빠-디 — 양 낀찌 사무다야담망 삽방 땅 니로다담만띠.',
  translation: '이 가르침이 설해졌을 때, 존자 꼰단냐에게 티끌 없고 때 없는 법의 눈이 생겨났다 — "무엇이든 생겨나는 성질이 있는 것은 모두 소멸하는 성질이 있다."',
}

export const VERSE_8_WORDS: VerseWord[] = [
  { pali: 'Imasmiṃ', pronKo: '이마스밍', meaning: '이것에서/이것이', grammar: '지시대명사 중성 단수 처격' },
  { pali: 'veyyākaraṇasmiṃ', pronKo: '웨야-까라나스밍', meaning: '가르침/해설에서', grammar: '중성 단수 처격' },
  { pali: 'bhaññamāne', pronKo: '반냐마-네', meaning: '설해지고 있을 때', grammar: '현재수동분사 중성 단수 처격 (bhaṇati)' },
  { pali: 'āyasmato', pronKo: '아-야스마또', meaning: '존자의', grammar: '남성 단수 속격 (존칭)' },
  { pali: 'koṇḍaññassa', pronKo: '꼰단냣사', meaning: '꼰단냐의', grammar: '남성 단수 속격 (인명)' },
  { pali: 'virajaṃ', pronKo: '위라장', meaning: '티끌 없는', grammar: '형용사 중성 단수 주격 (vi + raja)' },
  { pali: 'vītamalaṃ', pronKo: '위-따말랑', meaning: '때 없는/오염 없는', grammar: '형용사 중성 단수 주격 (vīta + mala)' },
  { pali: 'dhammacakkhuṃ', pronKo: '담마짝쿵', meaning: '법의 눈', grammar: '중성 단수 주격 (dhamma + cakkhu)', important: true },
  { pali: 'udapādi', pronKo: '우다빠-디', meaning: '생겨났다/일어났다', grammar: '과거 3인칭 단수 (ud + ā + pad)' },
  { pali: 'yaṃ', pronKo: '양', meaning: '무엇이든', grammar: '관계대명사 중성 단수 주격' },
  { pali: 'kiñci', pronKo: '낀찌', meaning: '어떤 것이든', grammar: '부정대명사 중성 단수 주격' },
  { pali: 'samudayadhammaṃ', pronKo: '사무다야담망', meaning: '생겨나는 성질이 있는', grammar: '형용사 중성 단수 주격 (samudaya + dhamma)', important: true },
  { pali: 'sabbaṃ', pronKo: '삽방', meaning: '모두/전부', grammar: '형용사 중성 단수 주격' },
  { pali: 'taṃ', pronKo: '땅', meaning: '그것은', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'nirodhadhammanti', pronKo: '니로다담만띠', meaning: '소멸하는 성질이 있다', grammar: '중성 단수 주격 + iti (nirodha + dhamma + iti)', important: true },
]

// ── 전체 단락 배열 ──
export const ALL_VERSES = [
  { id: 'dc1', ...VERSE_1, words: VERSE_1_WORDS },
  { id: 'dc2', ...VERSE_2, words: VERSE_2_WORDS },
  { id: 'dc3', ...VERSE_3, words: VERSE_3_WORDS },
  { id: 'dc4', ...VERSE_4, words: VERSE_4_WORDS },
  { id: 'dc5', ...VERSE_5, words: VERSE_5_WORDS },
  { id: 'dc6', ...VERSE_6, words: VERSE_6_WORDS },
  { id: 'dc7', ...VERSE_7, words: VERSE_7_WORDS },
  { id: 'dc8', ...VERSE_8, words: VERSE_8_WORDS },
]

// ── 전체 단어 (중복 제거) ──
export const ALL_DHAMMACAKKA_WORDS: VerseWord[] = (() => {
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
