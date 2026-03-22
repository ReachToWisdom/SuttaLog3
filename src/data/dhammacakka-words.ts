// 전법륜경(Dhammacakkappavattana Sutta, SN 56.11) — 전문 단어 데이터
// 출처: Saṃyutta Nikāya 56.11

import type { VerseWord } from './types'

// ── 단락1: 서문 ──

export const VERSE_1 = {
  pali: 'Ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati isipatane migadāye. Tatra kho bhagavā pañcavaggiye bhikkhū āmantesi —',
  pronKo: '에깡 사마양 바가와- 바-라-나시양 위하라띠 이시빠따네 미가다-예. 따뜨라 코 바가와- 빤짜왁기예 빅쿠- 아-만떼시 —',
  translation: '한 때 세존께서 바라나시의 이시빠따나 녹야원에 머무셨다. 거기서 세존께서 다섯 비구에게 말씀하셨다.',
  grammarNotes: [
    '정형구: "Ekaṃ samayaṃ bhagavā ... viharati"는 경전 서두의 고정 형식(nidāna). ekaṃ samayaṃ은 시간 목적격(Accusative of time)',
    '처격 연쇄: bārāṇasiyaṃ → isipatane → migadāye. 넓은 장소에서 좁은 장소로 좁혀가는 처격 구문',
    'āmantesi: ā + manteti의 과거형. pañcavaggiye bhikkhū는 목적격으로 말씀의 대상',
  ],
}

export const VERSE_1_WORDS: VerseWord[] = [
  { pali: 'Ekaṃ', pronKo: '에깡', meaning: '하나의/한', grammar: '수사 중성 단수 목적격' },
  { pali: 'samayaṃ', pronKo: '사마양', meaning: '때/시기', grammar: '남성 단수 목적격' },
  { pali: 'bhagavā', pronKo: '바가와-', meaning: '세존(부처님)', grammar: '남성 단수 주격' },
  { pali: 'bārāṇasiyaṃ', pronKo: '바-라-나시양', meaning: '바라나시에서', grammar: '여성 단수 처격 (지명)' },
  { pali: 'viharati', pronKo: '위하라띠', meaning: '머무시다', grammar: '현재 3인칭 단수 (vi + harati)' },
  { pali: 'isipatane', pronKo: '이시빠따네', meaning: '이시빠따나에서', grammar: '중성 단수 처격 (지명)' },
  { pali: 'migadāye', pronKo: '미가다-예', meaning: '녹야원(사슴동산)에서', grammar: '남성 단수 처격 (miga + dāya)' },
  { pali: 'Tatra', pronKo: '따뜨라', meaning: '거기서', grammar: '불변어(부사)' },
  { pali: 'kho', pronKo: '코', meaning: '실로/참으로', grammar: '불변어(강조사)' },
  { pali: 'pañcavaggiye', pronKo: '빤짜왁기예', meaning: '다섯 무리의', grammar: '형용사 남성 복수 목적격 (pañca + vagga + iya)' },
  { pali: 'bhikkhū', pronKo: '빅쿠-', meaning: '비구들을', grammar: '남성 복수 목적격' },
  { pali: 'āmantesi', pronKo: '아-만떼시', meaning: '말씀하셨다', grammar: '과거 3인칭 단수 (ā + manteti)' },
]

// ── 단락2: 두 극단 ──

export const VERSE_2 = {
  pali: 'Dveme bhikkhave antā pabbajitena na sevitabbā. Yo cāyaṃ kāmesu kāmasukhallikānuyogo hīno gammo pothujjaniko anariyo anatthasaṃhito; yo cāyaṃ attakilamathānuyogo dukkho anariyo anatthasaṃhito.',
  pronKo: '드웨메 빅카웨 안따- 빱바지떼나 나 세위땁바-. 요 짜-양 까-메수 까-마숙칼리까-누요고 히-노 감모 뽀투잔니꼬 아나리요 아낫타상히또; 요 짜-양 앗따낄라마타-누요고 둑코 아나리요 아낫타상히또.',
  translation: '비구들이여, 출가자가 가까이하지 말아야 할 두 극단이 있다. 감각적 쾌락에 탐닉하는 것은 저열하고 세속적이며 범부의 것이고 성스럽지 않고 이익이 없다. 자기 괴롭힘에 전념하는 것은 괴롭고 성스럽지 않고 이익이 없다.',
  grammarNotes: [
    '수동 구문: 행위자(pabbajitena, 조격) + 부정(na) + 미래수동분사(sevitabbā). 의무/당위를 나타냄',
    '복합어: kāmasukhallikānuyogo = kāma + sukhallika + anuyoga. attakilamathānuyogo = atta + kilamatha + anuyoga',
    'Dveme = Dve(둘) + ime(이것들). antā(극단들)를 수식하는 수사+지시대명사 결합',
  ],
}

export const VERSE_2_WORDS: VerseWord[] = [
  { pali: 'Dve', pronKo: '드웨', meaning: '둘', grammar: '수사 남성 복수 주격' },
  { pali: 'ime', pronKo: '이메', meaning: '이것들', grammar: '지시대명사 남성 복수 주격' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'antā', pronKo: '안따-', meaning: '극단들', grammar: '남성 복수 주격' },
  { pali: 'pabbajitena', pronKo: '빱바지떼나', meaning: '출가자에 의해', grammar: '과거분사 남성 단수 조격' },
  { pali: 'na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'sevitabbā', pronKo: '세위땁바-', meaning: '가까이해야 할', grammar: '미래수동분사 남성 복수 주격 (sevati)' },
  { pali: 'Yo', pronKo: '요', meaning: '~하는 것/그것', grammar: '관계대명사 남성 단수 주격' },
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
]

// ── 단락3: 중도 ──

export const VERSE_3 = {
  pali: 'Ete kho bhikkhave ubho ante anupagamma majjhimā paṭipadā tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṃvattati.',
  pronKo: '에떼 코 빅카웨 우보 안떼 아누빠감마 맛지마- 빠띠빠다- 따타-가떼나 아비삼붓다- 짝쿠까라니- 냐-나까라니- 우빠사마-야 아빈냐-야 삼보다-야 닙바-나-야 상왓따띠.',
  translation: '비구들이여, 여래는 이 두 극단에 가까이하지 않고 중도를 깨달았으니, 눈을 만들고, 지혜를 만들고, 고요함, 뛰어난 앎, 깨달음, 열반으로 이끈다.',
  grammarNotes: [
    '절대분사: anupagamma = an + upa + gam + ya → "가까이하지 않고". 주절 동사 이전에 완료된 행위',
    '여격 연쇄: upasamāya, abhiññāya, sambodhāya, nibbānāya — 목적/방향의 여격 4개 병렬',
    '복합어: cakkhukaraṇī = cakkhu(눈) + karaṇī(만드는). ñāṇakaraṇī = ñāṇa(지혜) + karaṇī(만드는)',
  ],
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'Ete', pronKo: '에떼', meaning: '이것들', grammar: '지시대명사 남성 복수 목적격' },
  { pali: 'ubho', pronKo: '우보', meaning: '둘 다', grammar: '수사 남성 복수 목적격' },
  { pali: 'ante', pronKo: '안떼', meaning: '극단들을', grammar: '남성 복수 목적격' },
  { pali: 'anupagamma', pronKo: '아누빠감마', meaning: '가까이하지 않고', grammar: '절대분사 (an + upagacchati)' },
  { pali: 'majjhimā', pronKo: '맛지마-', meaning: '중간의/중도의', grammar: '형용사 여성 단수 주격' },
  { pali: 'paṭipadā', pronKo: '빠띠빠다-', meaning: '도/길/실천', grammar: '여성 단수 주격' },
  { pali: 'tathāgatena', pronKo: '따타-가떼나', meaning: '여래에 의해', grammar: '남성 단수 조격' },
  { pali: 'abhisambuddhā', pronKo: '아비삼붓다-', meaning: '완전히 깨달은', grammar: '과거분사 여성 단수 주격 (abhi + sam + budh)' },
  { pali: 'cakkhukaraṇī', pronKo: '짝쿠까라니-', meaning: '눈을 만드는', grammar: '형용사 여성 단수 주격 (cakkhu + karaṇī)' },
  { pali: 'ñāṇakaraṇī', pronKo: '냐-나까라니-', meaning: '지혜를 만드는', grammar: '형용사 여성 단수 주격 (ñāṇa + karaṇī)' },
  { pali: 'upasamāya', pronKo: '우빠사마-야', meaning: '고요함을 위해', grammar: '남성 단수 여격' },
  { pali: 'abhiññāya', pronKo: '아빈냐-야', meaning: '뛰어난 앎을 위해', grammar: '여성 단수 여격' },
  { pali: 'sambodhāya', pronKo: '삼보다-야', meaning: '깨달음을 위해', grammar: '여성 단수 여격' },
  { pali: 'nibbānāya', pronKo: '닙바-나-야', meaning: '열반을 위해', grammar: '중성 단수 여격', important: true },
  { pali: 'saṃvattati', pronKo: '상왓따띠', meaning: '이끌다/향하다', grammar: '현재 3인칭 단수' },
]

// ── 단락4: 팔정도 ──

export const VERSE_4 = {
  pali: 'Katamā ca sā bhikkhave majjhimā paṭipadā tathāgatena abhisambuddhā. Ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṃ — sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi. Ayaṃ kho sā bhikkhave majjhimā paṭipadā tathāgatena abhisambuddhā.',
  pronKo: '까따마- 짜 사- 빅카웨 맛지마- 빠띠빠다- 따타-가떼나 아비삼붓다-. 아야메와 아리요 앗탕기꼬 맏고, 세야티당 — 삼마-딧티 삼마-상깝뽀 삼마-와-짜- 삼마-깜만또 삼마-아-지-워 삼마-와-야-모 삼마-사띠 삼마-사마-디. 아양 코 사- 빅카웨 맛지마- 빠띠빠다- 따타-가떼나 아비삼붓다-.',
  translation: '비구들이여, 여래가 깨달은 중도란 무엇인가. 이 성스러운 팔정도이니, 곧 바른 견해, 바른 사유, 바른 말, 바른 행위, 바른 생계, 바른 노력, 바른 새김, 바른 삼매이다. 비구들이여, 이것이 여래가 깨달은 중도이다.',
  grammarNotes: [
    '의문문: Katamā(의문대명사 여성 주격) + ca sā(지시대명사 "그") + 주어(majjhimā paṭipadā)',
    '복합어: aṭṭhaṅgiko = aṭṭha(여덟) + aṅga(요소) + ika → "여덟 요소로 된"',
    'seyyathidaṃ: 열거 도입 불변어. 이후 팔정도 8항목이 주격으로 나열',
  ],
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'Katamā', pronKo: '까따마-', meaning: '어떤 것인가', grammar: '의문대명사 여성 단수 주격' },
  { pali: 'sā', pronKo: '사-', meaning: '그것', grammar: '지시대명사 여성 단수 주격' },
  { pali: 'Ayameva', pronKo: '아야메와', meaning: '바로 이것', grammar: '지시대명사 + eva(강조)' },
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
  { pali: 'Ayaṃ', pronKo: '아양', meaning: '이것', grammar: '지시대명사 여성 단수 주격' },
]

// ── 단락5: 고성제 ──

export const VERSE_5 = {
  pali: 'Idaṃ kho pana bhikkhave dukkhaṃ ariyasaccaṃ — jātipi dukkhā jarāpi dukkhā byādhipi dukkhā maraṇampi dukkhaṃ, appiyehi sampayogo dukkho piyehi vippayogo dukkho yampicchaṃ na labhati tampi dukkhaṃ — saṅkhittena pañcupādānakkhandhā dukkhā.',
  pronKo: '이당 코 빠나 빅카웨 둑캉 아리야삿짱 — 자-띠삐 둑카- 자라-삐 둑카- 뱌-디삐 둑카- 마라남삐 둑캉, 앞삐예히 삼빠요고 둑코 삐예히 윕빠요고 둑코 양삣창 나 라바띠 땀삐 둑캉 — 상킷떼나 빤쭈빠-다-낙칸다- 둑카-.',
  translation: '비구들이여, 이것이 괴로움의 성스러운 진리이다 — 태어남도 괴롭고, 늙음도 괴롭고, 병듦도 괴롭고, 죽음도 괴롭다. 좋아하지 않는 것과 만남도 괴롭고, 좋아하는 것과 헤어짐도 괴롭고, 원하는 것을 얻지 못함도 괴롭다. 요약하면 오취온이 괴로움이다.',
  grammarNotes: [
    '등가 구문: Idaṃ + dukkhaṃ ariyasaccaṃ — 주어와 술어가 모두 중성 주격',
    '첨가사 pi: jātipi = jāti + pi. 각 항목에 pi를 붙여 "~도 괴로운" 열거',
    '복합어: pañcupādānakkhandhā = pañca + upādāna + khandha(다섯 집착 무더기)',
  ],
}

export const VERSE_5_WORDS: VerseWord[] = [
  { pali: 'Idaṃ', pronKo: '이당', meaning: '이것', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'pana', pronKo: '빠나', meaning: '그런데/또한', grammar: '불변어(접속사)' },
  { pali: 'dukkhaṃ', pronKo: '둑캉', meaning: '괴로움', grammar: '중성 단수 주격', important: true },
  { pali: 'ariyasaccaṃ', pronKo: '아리야삿짱', meaning: '성스러운 진리', grammar: '중성 단수 주격 (ariya + sacca)', important: true },
  { pali: 'jātipi', pronKo: '자-띠삐', meaning: '태어남도', grammar: '여성 단수 주격 + api' },
  { pali: 'dukkhā', pronKo: '둑카-', meaning: '괴로운', grammar: '형용사 여성 단수 주격' },
  { pali: 'jarāpi', pronKo: '자라-삐', meaning: '늙음도', grammar: '여성 단수 주격 + api' },
  { pali: 'byādhipi', pronKo: '뱌-디삐', meaning: '병듦도', grammar: '남성 단수 주격 + api' },
  { pali: 'maraṇampi', pronKo: '마라남삐', meaning: '죽음도', grammar: '중성 단수 주격 + api' },
  { pali: 'appiyehi', pronKo: '앞삐예히', meaning: '좋아하지 않는 것들과', grammar: '형용사 남성 복수 조격 (a + piya)' },
  { pali: 'sampayogo', pronKo: '삼빠요고', meaning: '만남/결합', grammar: '남성 단수 주격' },
  { pali: 'piyehi', pronKo: '삐예히', meaning: '좋아하는 것들과', grammar: '형용사 남성 복수 조격' },
  { pali: 'vippayogo', pronKo: '윕빠요고', meaning: '헤어짐/분리', grammar: '남성 단수 주격 (vi + payoga)' },
  { pali: 'yampicchaṃ', pronKo: '양삣창', meaning: '원하는 것을', grammar: '관계대명사 + icchā (yaṃ + pi + icchaṃ)' },
  { pali: 'labhati', pronKo: '라바띠', meaning: '얻다', grammar: '현재 3인칭 단수' },
  { pali: 'tampi', pronKo: '땀삐', meaning: '그것도', grammar: '지시대명사 중성 단수 주격 + api' },
  { pali: 'saṅkhittena', pronKo: '상킷떼나', meaning: '요약하면', grammar: '과거분사 중성 단수 조격 (saṃ + khipati)' },
  { pali: 'pañcupādānakkhandhā', pronKo: '빤쭈빠-다-낙칸다-', meaning: '오취온(다섯 집착 무더기)', grammar: '남성 복수 주격 (pañca + upādāna + khandha)', important: true },
]

// ── 단락6: 집성제 ──

export const VERSE_6 = {
  pali: 'Idaṃ kho pana bhikkhave dukkhasamudayaṃ ariyasaccaṃ — yāyaṃ taṇhā ponobbhavikā nandirāgasahagatā tatratatrābhinandinī, seyyathidaṃ — kāmataṇhā bhavataṇhā vibhavataṇhā.',
  pronKo: '이당 코 빠나 빅카웨 둑카사무다양 아리야삿짱 — 야-양 딴하- 뽀놉바위까- 난디라-가사하가따- 따뜨라따뜨라-비난디니-, 세야티당 — 까-마딴하- 바와딴하- 위바와딴하-.',
  translation: '비구들이여, 이것이 괴로움의 발생의 성스러운 진리이다 — 다시 태어남을 가져오고 즐거움과 탐착을 동반하며 여기저기서 기뻐하는 갈애이니, 곧 감각적 쾌락에 대한 갈애, 존재에 대한 갈애, 비존재에 대한 갈애이다.',
  grammarNotes: [
    '관계절: yāyaṃ(yā + ayaṃ) + taṇhā + 형용사 3개로 갈애를 수식',
    '복합어: ponobbhavikā = puna + bhava + ika. nandirāgasahagatā = nandī + rāga + sahagata',
    '세 갈애: kāma/bhava/vibhava + taṇhā의 따뿌루사 복합어',
  ],
}

export const VERSE_6_WORDS: VerseWord[] = [
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

// ── 단락7: 멸성제 ──

export const VERSE_7 = {
  pali: 'Idaṃ kho pana bhikkhave dukkhanirodhaṃ ariyasaccaṃ — yo tassāyeva taṇhāya asesavirāganirodho cāgo paṭinissaggo mutti anālayo.',
  pronKo: '이당 코 빠나 빅카웨 둑카니로당 아리야삿짱 — 요 땃사-예와 딴하-야 아세사위라-가니로도 짜-고 빠띠닛삭고 뭇띠 아나-라요.',
  translation: '비구들이여, 이것이 괴로움의 소멸의 성스러운 진리이다 — 그 갈애의 남김없는 이욕과 소멸, 놓아버림, 포기함, 해탈, 집착 없음이다.',
  grammarNotes: [
    '소유격 구문: tassāyeva = tassā + eva("바로 그것의"). taṇhāya(여성 소유격)',
    '동격 나열: asesavirāganirodho, cāgo, paṭinissaggo, mutti, anālayo — 5개 주격 병렬',
    '복합어: asesavirāganirodho = asesa + virāga + nirodha',
  ],
}

export const VERSE_7_WORDS: VerseWord[] = [
  { pali: 'dukkhanirodhaṃ', pronKo: '둑카니로당', meaning: '괴로움의 소멸', grammar: '중성 단수 주격 (dukkha + nirodha)', important: true },
  { pali: 'yo', pronKo: '요', meaning: '그것/~하는 것', grammar: '관계대명사 남성 단수 주격' },
  { pali: 'tassāyeva', pronKo: '땃사-예와', meaning: '바로 그것의', grammar: '지시대명사 여성 단수 소유격 + eva' },
  { pali: 'taṇhāya', pronKo: '딴하-야', meaning: '갈애의', grammar: '여성 단수 소유격' },
  { pali: 'asesavirāganirodho', pronKo: '아세사위라-가니로도', meaning: '남김없는 이욕과 소멸', grammar: '남성 단수 주격 (asesa + virāga + nirodha)' },
  { pali: 'cāgo', pronKo: '짜-고', meaning: '놓아버림/버림', grammar: '남성 단수 주격', important: true },
  { pali: 'paṭinissaggo', pronKo: '빠띠닛삭고', meaning: '포기함/내려놓음', grammar: '남성 단수 주격', important: true },
  { pali: 'mutti', pronKo: '뭇띠', meaning: '해탈/풀려남', grammar: '여성 단수 주격', important: true },
  { pali: 'anālayo', pronKo: '아나-라요', meaning: '집착 없음', grammar: '남성 단수 주격 (a + ālaya)', important: true },
]

// ── 단락8: 도성제 ──

export const VERSE_8 = {
  pali: 'Idaṃ kho pana bhikkhave dukkhanirodhagāminī paṭipadā ariyasaccaṃ — ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṃ — sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi.',
  pronKo: '이당 코 빠나 빅카웨 둑카니로다가-미니- 빠띠빠다- 아리야삿짱 — 아야메와 아리요 앗탕기꼬 맏고, 세야티당 — 삼마-딧티 삼마-상깝뽀 삼마-와-짜- 삼마-깜만또 삼마-아-지-워 삼마-와-야-모 삼마-사띠 삼마-사마-디.',
  translation: '비구들이여, 이것이 괴로움의 소멸로 이끄는 도의 성스러운 진리이다 — 이 성스러운 팔정도이니, 곧 바른 견해, 바른 사유, 바른 말, 바른 행위, 바른 생계, 바른 노력, 바른 새김, 바른 삼매이다.',
  grammarNotes: [
    '복합어: dukkhanirodhagāminī = dukkha + nirodha + gāminī("괴로움의 소멸로 이끄는")',
    '성 일치: paṭipadā(여성) → gāminī(여성형). ariyasaccaṃ(중성)과 동격',
    '팔정도 반복: 단락4와 동일한 8가지 도(道)를 열거',
  ],
}

export const VERSE_8_WORDS: VerseWord[] = [
  { pali: 'Idaṃ', pronKo: '이당', meaning: '이것', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'kho', pronKo: '코', meaning: '실로/참으로', grammar: '불변어(강조사)' },
  { pali: 'pana', pronKo: '빠나', meaning: '그런데/또한', grammar: '불변어(접속사)' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'dukkhanirodhagāminī', pronKo: '둑카니로다가-미니-', meaning: '괴로움의 소멸로 이끄는', grammar: '형용사 여성 단수 주격 (dukkha + nirodha + gāminī)', important: true },
  { pali: 'paṭipadā', pronKo: '빠띠빠다-', meaning: '도/길/실천', grammar: '여성 단수 주격' },
  { pali: 'ariyasaccaṃ', pronKo: '아리야삿짱', meaning: '성스러운 진리', grammar: '중성 단수 주격 (ariya + sacca)', important: true },
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

// ── 단락9: 삼전십이행상 — 고제 ──

export const VERSE_9 = {
  pali: 'Idaṃ dukkhaṃ ariyasaccanti me bhikkhave pubbe ananussutesu dhammesu cakkhuṃ udapādi ñāṇaṃ udapādi paññā udapādi vijjā udapādi āloko udapādi. Taṃ kho panidaṃ dukkhaṃ ariyasaccaṃ pariññeyyanti me bhikkhave pubbe ananussutesu dhammesu cakkhuṃ udapādi ñāṇaṃ udapādi paññā udapādi vijjā udapādi āloko udapādi. Taṃ kho panidaṃ dukkhaṃ ariyasaccaṃ pariññātanti me bhikkhave pubbe ananussutesu dhammesu cakkhuṃ udapādi ñāṇaṃ udapādi paññā udapādi vijjā udapādi āloko udapādi.',
  pronKo: '이당 둑캉 아리야삿짠띠 메 빅카웨 뿝베 아나눗수떼수 담메수 짝쿵 우다빠-디 냐-낭 우다빠-디 빤냐- 우다빠-디 윗자- 우다빠-디 아-로꼬 우다빠-디. 땅 코 빠니당 둑캉 아리야삿짱 빠린녜이얀띠 메 빅카웨 뿝베 아나눗수떼수 담메수 짝쿵 우다빠-디 냐-낭 우다빠-디 빤냐- 우다빠-디 윗자- 우다빠-디 아-로꼬 우다빠-디. 땅 코 빠니당 둑캉 아리야삿짱 빠린냐-딴띠 메 빅카웨 뿝베 아나눗수떼수 담메수 짝쿵 우다빠-디 냐-낭 우다빠-디 빤냐- 우다빠-디 윗자- 우다빠-디 아-로꼬 우다빠-디.',
  translation: '"이것이 괴로움의 성스러운 진리이다"라고 이전에 들어보지 못한 법에 대해 눈이 생겼고, 지혜가 생겼고, 앎이 생겼고, 밝음이 생겼다. "이 괴로움의 성스러운 진리는 두루 알아야 한다"라고 ... 눈이 생겼다. "이 괴로움의 성스러운 진리는 두루 알았다"라고 ... 눈이 생겼다.',
  grammarNotes: [
    '삼전(tiparivaṭṭa): 고제에 대해 ①사제지(sacca-ñāṇa) ②작용지(kicca-ñāṇa) ③작용완료지(kata-ñāṇa)',
    '인용구: ariyasaccanti = ariyasaccaṃ + iti("~라고"). pariññeyyanti = pariññeyya + iti',
    '처격: ananussutesu dhammesu = "이전에 들어보지 못한(an + anussuta) 법들에서(처격)"',
    '5개 동의어 나열: cakkhuṃ(눈), ñāṇaṃ(지혜), paññā(반야), vijjā(명지), āloko(밝음)',
  ],
}

export const VERSE_9_WORDS: VerseWord[] = [
  { pali: 'ariyasaccanti', pronKo: '아리야삿짠띠', meaning: '성스러운 진리라고', grammar: '중성 단수 주격 + iti (ariyasacca + iti)' },
  { pali: 'me', pronKo: '메', meaning: '나에게', grammar: '인칭대명사 1인칭 단수 여격' },
  { pali: 'pubbe', pronKo: '뿝베', meaning: '이전에', grammar: '불변어(부사)' },
  { pali: 'ananussutesu', pronKo: '아나눗수떼수', meaning: '들어보지 못한', grammar: '과거분사 남성 복수 처격 (an + anussuta)' },
  { pali: 'dhammesu', pronKo: '담메수', meaning: '법들에서', grammar: '남성 복수 처격' },
  { pali: 'cakkhuṃ', pronKo: '짝쿵', meaning: '눈', grammar: '중성 단수 주격', important: true },
  { pali: 'udapādi', pronKo: '우다빠-디', meaning: '생겨났다', grammar: '과거 3인칭 단수 (ud + ā + pad)', important: true },
  { pali: 'ñāṇaṃ', pronKo: '냐-낭', meaning: '지혜/앎', grammar: '중성 단수 주격', important: true },
  { pali: 'paññā', pronKo: '빤냐-', meaning: '반야/지혜', grammar: '여성 단수 주격', important: true },
  { pali: 'vijjā', pronKo: '윗자-', meaning: '명지/앎', grammar: '여성 단수 주격', important: true },
  { pali: 'āloko', pronKo: '아-로꼬', meaning: '밝음/광명', grammar: '남성 단수 주격', important: true },
  { pali: 'Taṃ', pronKo: '땅', meaning: '그것', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'panidaṃ', pronKo: '빠니당', meaning: '또한 이것', grammar: 'pana + idaṃ (접속사 + 지시대명사)' },
  { pali: 'pariññeyyanti', pronKo: '빠린녜이얀띠', meaning: '두루 알아야 한다고', grammar: '미래수동분사 + iti (pariññeyya + iti)' },
  { pali: 'pariññātanti', pronKo: '빠린냐-딴띠', meaning: '두루 알았다고', grammar: '과거분사 + iti (pariññāta + iti)' },
]

// ── 단락10: 삼전십이행상 — 집제 ──

export const VERSE_10 = {
  pali: 'Idaṃ dukkhasamudayaṃ ariyasaccanti me bhikkhave pubbe ananussutesu dhammesu cakkhuṃ udapādi ñāṇaṃ udapādi paññā udapādi vijjā udapādi āloko udapādi. Taṃ kho panidaṃ dukkhasamudayaṃ ariyasaccaṃ pahātabbanti me bhikkhave pubbe ananussutesu dhammesu cakkhuṃ udapādi ñāṇaṃ udapādi paññā udapādi vijjā udapādi āloko udapādi. Taṃ kho panidaṃ dukkhasamudayaṃ ariyasaccaṃ pahīnanti me bhikkhave pubbe ananussutesu dhammesu cakkhuṃ udapādi ñāṇaṃ udapādi paññā udapādi vijjā udapādi āloko udapādi.',
  pronKo: '이당 둑카사무다양 아리야삿짠띠 ... 짝쿵 우다빠-디 ... 아-로꼬 우다빠-디. 땅 코 빠니당 둑카사무다양 아리야삿짱 빠하-땁반띠 ... 아-로꼬 우다빠-디. 땅 코 빠니당 둑카사무다양 아리야삿짱 빠히-난띠 ... 아-로꼬 우다빠-디.',
  translation: '"이것이 괴로움의 발생의 성스러운 진리이다"라고 ... 눈이 생겼다. "이 괴로움의 발생의 성스러운 진리는 버려야 한다"라고 ... 눈이 생겼다. "이 괴로움의 발생의 성스러운 진리는 버렸다"라고 ... 눈이 생겼다.',
  grammarNotes: [
    '삼전: 집제에 대해 ①사제지 ②작용지(pahātabba, 버려야 할) ③작용완료지(pahīna, 버린)',
    '미래수동분사: pahātabbanti = pahātabba(버려야 할, pajahati) + iti',
    '과거분사: pahīnanti = pahīna(버린, pajahati의 과거분사) + iti',
  ],
}

export const VERSE_10_WORDS: VerseWord[] = [
  { pali: 'Idaṃ', pronKo: '이당', meaning: '이것', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'dukkhasamudayaṃ', pronKo: '둑카사무다양', meaning: '괴로움의 발생', grammar: '중성 단수 주격 (dukkha + samudaya)', important: true },
  { pali: 'ariyasaccanti', pronKo: '아리야삿짠띠', meaning: '성스러운 진리라고', grammar: '중성 단수 주격 + iti (ariyasacca + iti)' },
  { pali: 'me', pronKo: '메', meaning: '나에게', grammar: '인칭대명사 1인칭 단수 여격' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'pubbe', pronKo: '뿝베', meaning: '이전에', grammar: '불변어(부사)' },
  { pali: 'ananussutesu', pronKo: '아나눗수떼수', meaning: '들어보지 못한', grammar: '과거분사 남성 복수 처격 (an + anussuta)' },
  { pali: 'dhammesu', pronKo: '담메수', meaning: '법들에서', grammar: '남성 복수 처격' },
  { pali: 'cakkhuṃ', pronKo: '짝쿵', meaning: '눈', grammar: '중성 단수 주격', important: true },
  { pali: 'udapādi', pronKo: '우다빠-디', meaning: '생겨났다', grammar: '과거 3인칭 단수 (ud + ā + pad)', important: true },
  { pali: 'ñāṇaṃ', pronKo: '냐-낭', meaning: '지혜/앎', grammar: '중성 단수 주격', important: true },
  { pali: 'paññā', pronKo: '빤냐-', meaning: '반야/지혜', grammar: '여성 단수 주격', important: true },
  { pali: 'vijjā', pronKo: '윗자-', meaning: '명지/앎', grammar: '여성 단수 주격', important: true },
  { pali: 'āloko', pronKo: '아-로꼬', meaning: '밝음/광명', grammar: '남성 단수 주격', important: true },
  { pali: 'Taṃ', pronKo: '땅', meaning: '그것', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'kho', pronKo: '코', meaning: '실로/참으로', grammar: '불변어(강조사)' },
  { pali: 'panidaṃ', pronKo: '빠니당', meaning: '또한 이것', grammar: 'pana + idaṃ (접속사 + 지시대명사)' },
  { pali: 'ariyasaccaṃ', pronKo: '아리야삿짱', meaning: '성스러운 진리', grammar: '중성 단수 주격 (ariya + sacca)' },
  { pali: 'pahātabbanti', pronKo: '빠하-땁반띠', meaning: '버려야 한다고', grammar: '미래수동분사 + iti (pahātabba + iti)', important: true },
  { pali: 'pahīnanti', pronKo: '빠히-난띠', meaning: '버렸다고', grammar: '과거분사 + iti (pahīna + iti)', important: true },
]

// ── 단락11: 삼전십이행상 — 멸제 ──

export const VERSE_11 = {
  pali: 'Idaṃ dukkhanirodhaṃ ariyasaccanti me bhikkhave pubbe ananussutesu dhammesu cakkhuṃ udapādi ñāṇaṃ udapādi paññā udapādi vijjā udapādi āloko udapādi. Taṃ kho panidaṃ dukkhanirodhaṃ ariyasaccaṃ sacchikātabbanti me bhikkhave pubbe ananussutesu dhammesu cakkhuṃ udapādi ñāṇaṃ udapādi paññā udapādi vijjā udapādi āloko udapādi. Taṃ kho panidaṃ dukkhanirodhaṃ ariyasaccaṃ sacchikatanti me bhikkhave pubbe ananussutesu dhammesu cakkhuṃ udapādi ñāṇaṃ udapādi paññā udapādi vijjā udapādi āloko udapādi.',
  pronKo: '이당 둑카니로당 아리야삿짠띠 ... 짝쿵 우다빠-디 ... 아-로꼬 우다빠-디. 땅 코 빠니당 둑카니로당 아리야삿짱 삿치까-땁반띠 ... 아-로꼬 우다빠-디. 땅 코 빠니당 둑카니로당 아리야삿짱 삿치까딴띠 ... 아-로꼬 우다빠-디.',
  translation: '"이것이 괴로움의 소멸의 성스러운 진리이다"라고 ... 눈이 생겼다. "이 괴로움의 소멸의 성스러운 진리는 실현해야 한다"라고 ... 눈이 생겼다. "이 괴로움의 소멸의 성스러운 진리는 실현했다"라고 ... 눈이 생겼다.',
  grammarNotes: [
    '삼전: 멸제에 대해 ①사제지 ②작용지(sacchikātabba, 실현해야 할) ③작용완료지(sacchikata, 실현한)',
    '미래수동분사: sacchikātabbanti = sacchikātabba(실현해야 할, sacchikaroti) + iti',
    '과거분사: sacchikatanti = sacchikata(실현한) + iti',
  ],
}

export const VERSE_11_WORDS: VerseWord[] = [
  { pali: 'Idaṃ', pronKo: '이당', meaning: '이것', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'dukkhanirodhaṃ', pronKo: '둑카니로당', meaning: '괴로움의 소멸', grammar: '중성 단수 주격 (dukkha + nirodha)', important: true },
  { pali: 'ariyasaccanti', pronKo: '아리야삿짠띠', meaning: '성스러운 진리라고', grammar: '중성 단수 주격 + iti (ariyasacca + iti)' },
  { pali: 'me', pronKo: '메', meaning: '나에게', grammar: '인칭대명사 1인칭 단수 여격' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'pubbe', pronKo: '뿝베', meaning: '이전에', grammar: '불변어(부사)' },
  { pali: 'ananussutesu', pronKo: '아나눗수떼수', meaning: '들어보지 못한', grammar: '과거분사 남성 복수 처격 (an + anussuta)' },
  { pali: 'dhammesu', pronKo: '담메수', meaning: '법들에서', grammar: '남성 복수 처격' },
  { pali: 'cakkhuṃ', pronKo: '짝쿵', meaning: '눈', grammar: '중성 단수 주격', important: true },
  { pali: 'udapādi', pronKo: '우다빠-디', meaning: '생겨났다', grammar: '과거 3인칭 단수 (ud + ā + pad)', important: true },
  { pali: 'ñāṇaṃ', pronKo: '냐-낭', meaning: '지혜/앎', grammar: '중성 단수 주격', important: true },
  { pali: 'paññā', pronKo: '빤냐-', meaning: '반야/지혜', grammar: '여성 단수 주격', important: true },
  { pali: 'vijjā', pronKo: '윗자-', meaning: '명지/앎', grammar: '여성 단수 주격', important: true },
  { pali: 'āloko', pronKo: '아-로꼬', meaning: '밝음/광명', grammar: '남성 단수 주격', important: true },
  { pali: 'Taṃ', pronKo: '땅', meaning: '그것', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'kho', pronKo: '코', meaning: '실로/참으로', grammar: '불변어(강조사)' },
  { pali: 'panidaṃ', pronKo: '빠니당', meaning: '또한 이것', grammar: 'pana + idaṃ (접속사 + 지시대명사)' },
  { pali: 'ariyasaccaṃ', pronKo: '아리야삿짱', meaning: '성스러운 진리', grammar: '중성 단수 주격 (ariya + sacca)' },
  { pali: 'sacchikātabbanti', pronKo: '삿치까-땁반띠', meaning: '실현해야 한다고', grammar: '미래수동분사 + iti (sacchikātabba + iti)', important: true },
  { pali: 'sacchikatanti', pronKo: '삿치까딴띠', meaning: '실현했다고', grammar: '과거분사 + iti (sacchikata + iti)', important: true },
]

// ── 단락12: 삼전십이행상 — 도제 ──

export const VERSE_12 = {
  pali: 'Idaṃ dukkhanirodhagāminī paṭipadā ariyasaccanti me bhikkhave pubbe ananussutesu dhammesu cakkhuṃ udapādi ñāṇaṃ udapādi paññā udapādi vijjā udapādi āloko udapādi. Taṃ kho panidaṃ dukkhanirodhagāminī paṭipadā ariyasaccaṃ bhāvetabbanti me bhikkhave pubbe ananussutesu dhammesu cakkhuṃ udapādi ñāṇaṃ udapādi paññā udapādi vijjā udapādi āloko udapādi. Taṃ kho panidaṃ dukkhanirodhagāminī paṭipadā ariyasaccaṃ bhāvitanti me bhikkhave pubbe ananussutesu dhammesu cakkhuṃ udapādi ñāṇaṃ udapādi paññā udapādi vijjā udapādi āloko udapādi.',
  pronKo: '이당 둑카니로다가-미니- 빠띠빠다- 아리야삿짠띠 ... 짝쿵 우다빠-디 ... 아-로꼬 우다빠-디. 땅 코 빠니당 둑카니로다가-미니- 빠띠빠다- 아리야삿짱 바-웨땁반띠 ... 아-로꼬 우다빠-디. 땅 코 빠니당 둑카니로다가-미니- 빠띠빠다- 아리야삿짱 바-위딴띠 ... 아-로꼬 우다빠-디.',
  translation: '"이것이 괴로움의 소멸로 이끄는 도의 성스러운 진리이다"라고 ... 눈이 생겼다. "이 도의 성스러운 진리는 닦아야 한다"라고 ... 눈이 생겼다. "이 도의 성스러운 진리는 닦았다"라고 ... 눈이 생겼다.',
  grammarNotes: [
    '삼전: 도제에 대해 ①사제지 ②작용지(bhāvetabba, 닦아야 할) ③작용완료지(bhāvita, 닦은)',
    '미래수동분사: bhāvetabbanti = bhāvetabba(닦아야 할, bhāveti) + iti',
    '과거분사: bhāvitanti = bhāvita(닦은, 수행한) + iti',
  ],
}

export const VERSE_12_WORDS: VerseWord[] = [
  { pali: 'Idaṃ', pronKo: '이당', meaning: '이것', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'dukkhanirodhagāminī', pronKo: '둑카니로다가-미니-', meaning: '괴로움의 소멸로 이끄는', grammar: '형용사 여성 단수 주격 (dukkha + nirodha + gāminī)', important: true },
  { pali: 'paṭipadā', pronKo: '빠띠빠다-', meaning: '도/길/실천', grammar: '여성 단수 주격' },
  { pali: 'ariyasaccanti', pronKo: '아리야삿짠띠', meaning: '성스러운 진리라고', grammar: '중성 단수 주격 + iti (ariyasacca + iti)' },
  { pali: 'me', pronKo: '메', meaning: '나에게', grammar: '인칭대명사 1인칭 단수 여격' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'pubbe', pronKo: '뿝베', meaning: '이전에', grammar: '불변어(부사)' },
  { pali: 'ananussutesu', pronKo: '아나눗수떼수', meaning: '들어보지 못한', grammar: '과거분사 남성 복수 처격 (an + anussuta)' },
  { pali: 'dhammesu', pronKo: '담메수', meaning: '법들에서', grammar: '남성 복수 처격' },
  { pali: 'cakkhuṃ', pronKo: '짝쿵', meaning: '눈', grammar: '중성 단수 주격', important: true },
  { pali: 'udapādi', pronKo: '우다빠-디', meaning: '생겨났다', grammar: '과거 3인칭 단수 (ud + ā + pad)', important: true },
  { pali: 'ñāṇaṃ', pronKo: '냐-낭', meaning: '지혜/앎', grammar: '중성 단수 주격', important: true },
  { pali: 'paññā', pronKo: '빤냐-', meaning: '반야/지혜', grammar: '여성 단수 주격', important: true },
  { pali: 'vijjā', pronKo: '윗자-', meaning: '명지/앎', grammar: '여성 단수 주격', important: true },
  { pali: 'āloko', pronKo: '아-로꼬', meaning: '밝음/광명', grammar: '남성 단수 주격', important: true },
  { pali: 'Taṃ', pronKo: '땅', meaning: '그것', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'kho', pronKo: '코', meaning: '실로/참으로', grammar: '불변어(강조사)' },
  { pali: 'panidaṃ', pronKo: '빠니당', meaning: '또한 이것', grammar: 'pana + idaṃ (접속사 + 지시대명사)' },
  { pali: 'ariyasaccaṃ', pronKo: '아리야삿짱', meaning: '성스러운 진리', grammar: '중성 단수 주격 (ariya + sacca)' },
  { pali: 'bhāvetabbanti', pronKo: '바-웨땁반띠', meaning: '닦아야 한다고', grammar: '미래수동분사 + iti (bhāvetabba + iti)', important: true },
  { pali: 'bhāvitanti', pronKo: '바-위딴띠', meaning: '닦았다고', grammar: '과거분사 + iti (bhāvita + iti)', important: true },
]

// ── 단락13: 확언 1 (청정하지 않았을 때) ──

export const VERSE_13 = {
  pali: 'Yāvakīvañca me bhikkhave imesu catūsu ariyasaccesu evaṃ tiparivaṭṭaṃ dvādasākāraṃ yathābhūtaṃ ñāṇadassanaṃ na suvisuddhaṃ ahosi, neva tāvāhaṃ bhikkhave sadevake loke samārake sabrahmake sassamaṇabrāhmaṇiyā pajāya sadevamanussāya anuttaraṃ sammāsambodhiṃ abhisambuddho paccaññāsiṃ.',
  pronKo: '야-와끼-완짜 메 빅카웨 이메수 짜뚜-수 아리야삿쩨수 에왕 띠빠리왓땅 드와-다사-까-랑 야타-부-땅 냐-나닷사낭 나 수위숫당 아호시, 네와 따-와-항 빅카웨 사데와께 로게 사마-라게 사브라마게 삿사마나브라-마니야- 빠자-야 사데와마눗사-야 아눗따랑 삼마-삼보딩 아비삼붓도 빳짠냐-싱.',
  translation: '비구들이여, 이 사성제에 대한 삼전십이행상의 여실지견이 완전히 청정하지 않았을 때는, 나는 천신, 마라, 범천, 사문, 바라문, 왕, 인간을 포함한 세간에서 위없는 바른 깨달음을 깨달았다고 선언하지 않았다.',
  grammarNotes: [
    '조건절: Yāvakīvañca ... na suvisuddhaṃ ahosi = "~하지 않는 한/~않았을 때". neva tāvāhaṃ = "그때까지 나는 ~않았다"',
    '복합어: tiparivaṭṭaṃ = ti(셋) + parivaṭṭa(회전) → "세 번 돌림". dvādasākāraṃ = dvādasa(열둘) + ākāra(양상)',
    '복합어: ñāṇadassanaṃ = ñāṇa(지혜) + dassana(봄). yathābhūtaṃ = yathā(있는 그대로) + bhūta(된)',
    '처격: sadevake loke = "천신을 포함한(sa + deva + ka) 세간에서". 연이어 나오는 처격들이 세간의 범위를 확장',
  ],
}

export const VERSE_13_WORDS: VerseWord[] = [
  { pali: 'Yāvakīvañca', pronKo: '야-와끼-완짜', meaning: '~하는 한/~할 때까지', grammar: '불변어(접속사)' },
  { pali: 'imesu', pronKo: '이메수', meaning: '이것들에서', grammar: '지시대명사 중성 복수 처격' },
  { pali: 'catūsu', pronKo: '짜뚜-수', meaning: '네 가지에서', grammar: '수사 복수 처격' },
  { pali: 'ariyasaccesu', pronKo: '아리야삿쩨수', meaning: '성스러운 진리들에서', grammar: '중성 복수 처격', important: true },
  { pali: 'evaṃ', pronKo: '에왕', meaning: '이와 같이', grammar: '불변어(부사)' },
  { pali: 'tiparivaṭṭaṃ', pronKo: '띠빠리왓땅', meaning: '삼전(세 번 돌림)', grammar: '중성 단수 목적격 (ti + parivaṭṭa)', important: true },
  { pali: 'dvādasākāraṃ', pronKo: '드와-다사-까-랑', meaning: '십이행상(열두 양상)', grammar: '중성 단수 목적격 (dvādasa + ākāra)', important: true },
  { pali: 'yathābhūtaṃ', pronKo: '야타-부-땅', meaning: '있는 그대로의', grammar: '불변어/형용사 (yathā + bhūta)' },
  { pali: 'ñāṇadassanaṃ', pronKo: '냐-나닷사낭', meaning: '지견(지혜로 봄)', grammar: '중성 단수 주격 (ñāṇa + dassana)', important: true },
  { pali: 'suvisuddhaṃ', pronKo: '수위숫당', meaning: '완전히 청정한', grammar: '과거분사 중성 단수 주격 (su + visuddha)' },
  { pali: 'ahosi', pronKo: '아호시', meaning: '~이었다', grammar: '과거 3인칭 단수 (hoti)' },
  { pali: 'neva', pronKo: '네와', meaning: '결코 ~않다', grammar: 'na + eva (강조 부정)' },
  { pali: 'tāvāhaṃ', pronKo: '따-와-항', meaning: '그때까지 나는', grammar: 'tāva(그때까지) + ahaṃ(나)' },
  { pali: 'sadevake', pronKo: '사데와께', meaning: '천신을 포함한', grammar: '형용사 남성 단수 처격 (sa + deva + ka)' },
  { pali: 'loke', pronKo: '로게', meaning: '세간에서', grammar: '남성 단수 처격' },
  { pali: 'samārake', pronKo: '사마-라게', meaning: '마라를 포함한', grammar: '형용사 남성 단수 처격 (sa + māra + ka)' },
  { pali: 'sabrahmake', pronKo: '사브라마게', meaning: '범천을 포함한', grammar: '형용사 남성 단수 처격 (sa + brahma + ka)' },
  { pali: 'sassamaṇabrāhmaṇiyā', pronKo: '삿사마나브라-마니야-', meaning: '사문과 바라문을 포함한', grammar: '형용사 여성 단수 조격' },
  { pali: 'pajāya', pronKo: '빠자-야', meaning: '무리/인류의', grammar: '여성 단수 조격' },
  { pali: 'sadevamanussāya', pronKo: '사데와마눗사-야', meaning: '천신과 인간을 포함한', grammar: '형용사 여성 단수 조격' },
  { pali: 'anuttaraṃ', pronKo: '아눗따랑', meaning: '위없는/최상의', grammar: '형용사 여성 단수 목적격 (an + uttara)', important: true },
  { pali: 'sammāsambodhiṃ', pronKo: '삼마-삼보딩', meaning: '바른 완전한 깨달음을', grammar: '여성 단수 목적격 (sammā + sam + bodhi)', important: true },
  { pali: 'abhisambuddho', pronKo: '아비삼붓도', meaning: '완전히 깨달은 자로서', grammar: '과거분사 남성 단수 주격' },
  { pali: 'paccaññāsiṃ', pronKo: '빳짠냐-싱', meaning: '선언했다', grammar: '과거 1인칭 단수 (paṭi + ā + ñā)' },
]

// ── 단락14: 확언 2 (청정해졌을 때) ──

export const VERSE_14 = {
  pali: 'Yato ca kho me bhikkhave imesu catūsu ariyasaccesu evaṃ tiparivaṭṭaṃ dvādasākāraṃ yathābhūtaṃ ñāṇadassanaṃ suvisuddhaṃ ahosi, athāhaṃ bhikkhave sadevake loke samārake sabrahmake sassamaṇabrāhmaṇiyā pajāya sadevamanussāya anuttaraṃ sammāsambodhiṃ abhisambuddho paccaññāsiṃ. Ñāṇañca pana me dassanaṃ udapādi — akuppā me vimutti, ayamantimā jāti, natthidāni punabbhavoti.',
  pronKo: '야또 짜 코 메 빅카웨 이메수 짜뚜-수 아리야삿쩨수 에왕 띠빠리왓땅 드와-다사-까-랑 야타-부-땅 냐-나닷사낭 수위숫당 아호시, 아타-항 빅카웨 사데와께 로게 ... 아눗따랑 삼마-삼보딩 아비삼붓도 빳짠냐-싱. 냐-난짜 빠나 메 닷사낭 우다빠-디 — 아꿉빠- 메 위뭇띠, 아야만띠마- 자-띠, 낫티다-니 뿌납바워띠.',
  translation: '비구들이여, 이 사성제에 대한 삼전십이행상의 여실지견이 완전히 청정해졌을 때, 나는 세간에서 위없는 바른 깨달음을 깨달았다고 선언했다. 나에게 지견이 생겼다 — "흔들리지 않는 나의 해탈이여, 이것이 마지막 생이니, 더 이상 태어남은 없다."',
  grammarNotes: [
    '대구 구조: 단락13과 정확히 대비. na suvisuddhaṃ → suvisuddhaṃ, neva tāvāhaṃ → athāhaṃ',
    'Yato ca kho: "~하였을 때/~한 이래". 시간 종속절 도입사',
    '인용구(iti): punabbhavoti = punabbhavo(다시 태어남) + iti. akuppā(흔들리지 않는) + vimutti(해탈)',
    '복합어: ayamantimā = ayaṃ(이) + antimā(마지막의). natthidāni = natthi(없다) + idāni(이제)',
  ],
}

export const VERSE_14_WORDS: VerseWord[] = [
  { pali: 'Yato', pronKo: '야또', meaning: '~하였을 때', grammar: '불변어(접속사)' },
  { pali: 'athāhaṃ', pronKo: '아타-항', meaning: '그래서 나는', grammar: 'atha(그래서) + ahaṃ(나)' },
  { pali: 'Ñāṇañca', pronKo: '냐-난짜', meaning: '지혜와 또한', grammar: '중성 단수 주격 + ca (ñāṇa + ca)' },
  { pali: 'dassanaṃ', pronKo: '닷사낭', meaning: '봄/견해', grammar: '중성 단수 주격' },
  { pali: 'akuppā', pronKo: '아꿉빠-', meaning: '흔들리지 않는', grammar: '형용사 여성 단수 주격 (a + kuppa)', important: true },
  { pali: 'vimutti', pronKo: '위뭇띠', meaning: '해탈/풀려남', grammar: '여성 단수 주격', important: true },
  { pali: 'ayamantimā', pronKo: '아야만띠마-', meaning: '이것이 마지막의', grammar: 'ayaṃ + antimā (지시대명사 + 형용사)', important: true },
  { pali: 'jāti', pronKo: '자-띠', meaning: '태어남/생', grammar: '여성 단수 주격', important: true },
  { pali: 'natthidāni', pronKo: '낫티다-니', meaning: '이제 없다', grammar: 'natthi(없다) + idāni(이제)', important: true },
  { pali: 'punabbhavoti', pronKo: '뿌납바워띠', meaning: '다시 태어남이라고', grammar: '남성 단수 주격 + iti (puna + bhava + iti)', important: true },
]

// ── 단락15: 꼰단냐 증과 ──

export const VERSE_15 = {
  pali: 'Idamavoca bhagavā. Attamanā pañcavaggiyā bhikkhū bhagavato bhāsitaṃ abhinandunti. Imasmiṃ ca pana veyyākaraṇasmiṃ bhaññamāne āyasmato koṇḍaññassa virajaṃ vītamalaṃ dhammacakkhuṃ udapādi — yaṃ kiñci samudayadhammaṃ sabbaṃ taṃ nirodhadhammanti.',
  pronKo: '이다마워짜 바가와-. 앗따마나- 빤짜왁기야- 빅쿠- 바가와또 바-시땅 아비난둔띠. 이마스밍 짜 빠나 웨야-까라나스밍 반냐마-네 아-야스마또 꼰단냣사 위라장 위-따말랑 담마짝쿵 우다빠-디 — 양 낀찌 사무다야담망 삽방 땅 니로다담만띠.',
  translation: '세존께서 이와 같이 말씀하셨다. 기쁜 마음으로 다섯 비구는 세존의 말씀을 기뻐하였다. 이 가르침이 설해졌을 때, 존자 꼰단냐에게 티끌 없고 때 없는 법의 눈이 생겨났다 — "무엇이든 생겨나는 성질이 있는 것은 모두 소멸하는 성질이 있다."',
  grammarNotes: [
    '처격 절대 구문: Imasmiṃ veyyākaraṇasmiṃ bhaññamāne = "이 가르침이 설해지고 있을 때"',
    '현재수동분사: bhaññamāne = bhaṇ + ya + māna → "설해지고 있는"(처격)',
    '소유격 소유구문: āyasmato koṇḍaññassa(소유격) + dhammacakkhuṃ(주격) + udapādi',
    '인용구: nirodhadhammanti = nirodhadhamma + iti. 보편 진리의 표현',
  ],
}

export const VERSE_15_WORDS: VerseWord[] = [
  { pali: 'Idamavoca', pronKo: '이다마워짜', meaning: '이것을 말씀하셨다', grammar: 'idaṃ + avoca (과거 3인칭 단수, vacati)' },
  { pali: 'bhagavā', pronKo: '바가와-', meaning: '세존', grammar: '남성 단수 주격' },
  { pali: 'Attamanā', pronKo: '앗따마나-', meaning: '기쁜 마음의', grammar: '형용사 남성 복수 주격 (atta + mana)' },
  { pali: 'pañcavaggiyā', pronKo: '빤짜왁기야-', meaning: '다섯 무리의', grammar: '형용사 남성 복수 주격' },
  { pali: 'bhagavato', pronKo: '바가와또', meaning: '세존의', grammar: '남성 단수 소유격' },
  { pali: 'bhāsitaṃ', pronKo: '바-시땅', meaning: '말씀하신 것을', grammar: '과거분사 중성 단수 목적격 (bhāsati)' },
  { pali: 'abhinandunti', pronKo: '아비난둔띠', meaning: '기뻐하였다', grammar: '과거 3인칭 복수 (abhi + nandati) + iti' },
  { pali: 'Imasmiṃ', pronKo: '이마스밍', meaning: '이것에서/이것이', grammar: '지시대명사 중성 단수 처격' },
  { pali: 'veyyākaraṇasmiṃ', pronKo: '웨야-까라나스밍', meaning: '가르침/해설에서', grammar: '중성 단수 처격' },
  { pali: 'bhaññamāne', pronKo: '반냐마-네', meaning: '설해지고 있을 때', grammar: '현재수동분사 중성 단수 처격 (bhaṇati)' },
  { pali: 'āyasmato', pronKo: '아-야스마또', meaning: '존자의', grammar: '남성 단수 소유격 (존칭)' },
  { pali: 'koṇḍaññassa', pronKo: '꼰단냣사', meaning: '꼰단냐의', grammar: '남성 단수 소유격 (인명)' },
  { pali: 'virajaṃ', pronKo: '위라장', meaning: '티끌 없는', grammar: '형용사 중성 단수 주격 (vi + raja)' },
  { pali: 'vītamalaṃ', pronKo: '위-따말랑', meaning: '때 없는/오염 없는', grammar: '형용사 중성 단수 주격 (vīta + mala)' },
  { pali: 'dhammacakkhuṃ', pronKo: '담마짝쿵', meaning: '법의 눈', grammar: '중성 단수 주격 (dhamma + cakkhu)', important: true },
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
  { id: 'dc9', ...VERSE_9, words: VERSE_9_WORDS },
  { id: 'dc10', ...VERSE_10, words: VERSE_10_WORDS },
  { id: 'dc11', ...VERSE_11, words: VERSE_11_WORDS },
  { id: 'dc12', ...VERSE_12, words: VERSE_12_WORDS },
  { id: 'dc13', ...VERSE_13, words: VERSE_13_WORDS },
  { id: 'dc14', ...VERSE_14, words: VERSE_14_WORDS },
  { id: 'dc15', ...VERSE_15, words: VERSE_15_WORDS },
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
