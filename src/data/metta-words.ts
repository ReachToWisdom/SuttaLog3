// 자비경(Karanīya Mettā Sutta) — 본문 모든 단어 데이터
// 출처: Suttanipāta 1.8

import type { VerseWord } from './types'

// ── 자비경 원문 (게송별) ──

/** 제1게송 */
export const VERSE_1 = {
  pali: 'Karanīyamatthakusalena, yantaṃ santaṃ padaṃ abhisamecca;\nsakko ujū ca suhujū ca, sūvaco cassa mudu anatimānī.',
  pronKo: '까라니-야맛타꾸살레나, 얀땅 산땅 빠당 아비사멧짜;\n삭꼬 우주- 짜 수후주- 짜, 수-와쪼 짯사 무두 아나띠마-니-.',
  translation: '선을 아는 자가 적멸의 경지를 완전히 이해하고 행할 것은,\n유능하고 곧고 매우 곧으며, 말 잘 듣고 부드럽고 교만하지 않는 것이다.',
}

export const VERSE_1_WORDS: VerseWord[] = [
  { pali: 'Karanīyam', pronKo: '까라니-양', meaning: '행해야 할 것', grammar: '의무분사 중성 단수 주격 (karoti + anīya)' },
  { pali: 'atthakusalena', pronKo: '앗타꾸살레나', meaning: '선을 아는 자에 의해', grammar: '남성 단수 구격 (attha + kusala)' },
  { pali: 'yantaṃ', pronKo: '얀땅', meaning: '그것을 (관계대명사)', grammar: '관계대명사 중성 단수 대격 (yaṃ + taṃ)' },
  { pali: 'santaṃ', pronKo: '산땅', meaning: '적멸의/고요한', grammar: '형용사 중성 단수 대격' },
  { pali: 'padaṃ', pronKo: '빠당', meaning: '경지/자리', grammar: '중성 단수 대격' },
  { pali: 'abhisamecca', pronKo: '아비사멧짜', meaning: '완전히 이해하고', grammar: '절대분사 (abhi + sam + eti)' },
  { pali: 'sakko', pronKo: '삭꼬', meaning: '유능한', grammar: '형용사 남성 단수 주격' },
  { pali: 'ujū', pronKo: '우주-', meaning: '곧은/정직한', grammar: '형용사 남성 단수 주격' },
  { pali: 'ca', pronKo: '짜', meaning: '~과/그리고', grammar: '불변어(접속사)' },
  { pali: 'suhujū', pronKo: '수후주-', meaning: '매우 곧은', grammar: '형용사 남성 단수 주격 (su + ujū)' },
  { pali: 'sūvaco', pronKo: '수-와쪼', meaning: '말 잘 듣는', grammar: '형용사 남성 단수 주격 (su + vaco)' },
  { pali: 'cassa', pronKo: '짯사', meaning: '그리고 ~이어야 한다', grammar: 'ca + assa (동사 있다의 원망법)' },
  { pali: 'mudu', pronKo: '무두', meaning: '부드러운', grammar: '형용사 남성 단수 주격' },
  { pali: 'anatimānī', pronKo: '아나띠마-니-', meaning: '교만하지 않은', grammar: '형용사 남성 단수 주격 (an + atimānī)' },
]

/** 제2게송 */
export const VERSE_2 = {
  pali: 'Santussako ca subharo ca, appakicco ca sallahukavutti;\nsantindriyo ca nipako ca, appagabbho kulesu ananugiddho.',
  pronKo: '산뚯사꼬 짜 수바로 짜, 앞빠끼쪼 짜 살라후까붓띠;\n산띤드리요 짜 니빠꼬 짜, 앞빠갑보 꿀레수 아나누깃토.',
  translation: '만족하고 봉양하기 쉬우며, 할 일 적고 생활이 가벼우며,\n감관이 고요하고 슬기로우며, 건방지지 않고 가문에 탐착하지 않는다.',
}

export const VERSE_2_WORDS: VerseWord[] = [
  { pali: 'Santussako', pronKo: '산뚯사꼬', meaning: '만족하는', grammar: '형용사 남성 단수 주격 (sam + tussa)' },
  { pali: 'subharo', pronKo: '수바로', meaning: '봉양하기 쉬운', grammar: '형용사 남성 단수 주격 (su + bhara)' },
  { pali: 'appakicco', pronKo: '앞빠끼쪼', meaning: '할 일이 적은', grammar: '형용사 남성 단수 주격 (appa + kicca)' },
  { pali: 'sallahukavutti', pronKo: '살라후까붓띠', meaning: '생활이 가벼운', grammar: '형용사 남성 단수 주격 (sallahuka + vutti)' },
  { pali: 'santindriyo', pronKo: '산띤드리요', meaning: '감관이 고요한', grammar: '형용사 남성 단수 주격 (santa + indriya)' },
  { pali: 'nipako', pronKo: '니빠꼬', meaning: '슬기로운', grammar: '형용사 남성 단수 주격' },
  { pali: 'appagabbho', pronKo: '앞빠갑보', meaning: '건방지지 않은', grammar: '형용사 남성 단수 주격 (appa + gabbha)' },
  { pali: 'kulesu', pronKo: '꿀레수', meaning: '가문들에서', grammar: '중성 복수 처격' },
  { pali: 'ananugiddho', pronKo: '아나누깃토', meaning: '탐착하지 않은', grammar: '과거분사 남성 단수 주격 (an + anu + giddha)' },
]

/** 제3게송 */
export const VERSE_3 = {
  pali: 'Na ca khuddaṃ samācare kiñci, yena viññū pare upavadeyyuṃ;\nsukhino vā khemino hontu, sabbe sattā bhavantu sukhitattā.',
  pronKo: '나 짜 쿳당 사마-짜레 낀찌, 예나 윈뉴- 빠레 우빠와뎃융;\n수키노 와- 케미노 혼뚜, 삽베 삿따- 바완뚜 수키딷따-.',
  translation: '현자들이 비난할 만한 사소한 것도 행하지 말라.\n모든 존재가 행복하고 안온하기를, 모든 존재가 행복한 자가 되기를.',
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'Na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'khuddaṃ', pronKo: '쿳당', meaning: '사소한 것을', grammar: '형용사 중성 단수 대격' },
  { pali: 'samācare', pronKo: '사마-짜레', meaning: '행하다', grammar: '원망법 3인칭 단수 (sam + ācarati)' },
  { pali: 'kiñci', pronKo: '낀찌', meaning: '어떤 것이라도', grammar: '부정대명사 중성 단수 대격' },
  { pali: 'yena', pronKo: '예나', meaning: '그것에 의해', grammar: '관계대명사 중성 단수 구격' },
  { pali: 'viññū', pronKo: '윈뉴-', meaning: '현자들이', grammar: '남성 복수 주격' },
  { pali: 'pare', pronKo: '빠레', meaning: '다른 사람들을', grammar: '남성 복수 대격' },
  { pali: 'upavadeyyuṃ', pronKo: '우빠와뎃융', meaning: '비난할 것이다', grammar: '원망법 3인칭 복수 (upa + vadati)' },
  { pali: 'sukhino', pronKo: '수키노', meaning: '행복한 자들이', grammar: '형용사 남성 복수 주격 (sukhin)' },
  { pali: 'vā', pronKo: '와-', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'khemino', pronKo: '케미노', meaning: '안온한 자들이', grammar: '형용사 남성 복수 주격 (khemin)' },
  { pali: 'hontu', pronKo: '혼뚜', meaning: '~이 되기를', grammar: '명령법 3인칭 복수 (hoti)' },
  { pali: 'sabbe', pronKo: '삽베', meaning: '모든', grammar: '형용사 남성 복수 주격' },
  { pali: 'sattā', pronKo: '삿따-', meaning: '존재들이', grammar: '남성 복수 주격' },
  { pali: 'bhavantu', pronKo: '바완뚜', meaning: '~이 되기를', grammar: '명령법 3인칭 복수 (bhavati)' },
  { pali: 'sukhitattā', pronKo: '수키딷따-', meaning: '행복한 자들이', grammar: '남성 복수 주격 (sukhita + atta)' },
]

/** 제4게송 */
export const VERSE_4 = {
  pali: 'Ye keci pāṇabhūtatthi, tasā vā thāvarā vā anavasesā;\ndīghā vā ye mahantā vā, majjhimā rassakāṇukathūlā.',
  pronKo: '예 게찌 빠-나부-땃티, 따사- 와- 타-와라- 와- 아나와세사-;\n디-가- 와- 예 마한따- 와-, 맛지마- 랏사까-누까투-라-.',
  translation: '살아있는 존재 어떤 것이든, 떨리는 것이든 흔들리지 않는 것이든 남김없이,\n긴 것이든 큰 것이든, 중간이든 짧은 것이든 미세한 것이든 거친 것이든.',
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'Ye', pronKo: '예', meaning: '어떤 ~이든', grammar: '관계대명사 남성 복수 주격' },
  { pali: 'keci', pronKo: '게찌', meaning: '무엇이든', grammar: '부정대명사 남성 복수 주격' },
  { pali: 'pāṇabhūtatthi', pronKo: '빠-나부-땃티', meaning: '살아있는 존재가 있는', grammar: '남성 복수 주격 (pāṇa + bhūta + atthi)' },
  { pali: 'tasā', pronKo: '따사-', meaning: '떨리는 것들 (동물)', grammar: '남성 복수 주격' },
  { pali: 'thāvarā', pronKo: '타-와라-', meaning: '흔들리지 않는 것들 (식물)', grammar: '남성 복수 주격' },
  { pali: 'anavasesā', pronKo: '아나와세사-', meaning: '남김없이/예외 없이', grammar: '형용사 남성 복수 주격 (an + avasesa)' },
  { pali: 'dīghā', pronKo: '디-가-', meaning: '긴 것들', grammar: '형용사 남성 복수 주격' },
  { pali: 'mahantā', pronKo: '마한따-', meaning: '큰 것들', grammar: '형용사 남성 복수 주격' },
  { pali: 'majjhimā', pronKo: '맛지마-', meaning: '중간의 것들', grammar: '형용사 남성 복수 주격' },
  { pali: 'rassakāṇukathūlā', pronKo: '랏사까-누까투-라-', meaning: '짧고 미세하고 거친 것들', grammar: '형용사 남성 복수 주격 (rassa + aṇuka + thūla)' },
]

/** 제5게송 */
export const VERSE_5 = {
  pali: 'Diṭṭhā vā ye ca adiṭṭhā, ye ca dūre vasanti avidūre;\nbhūtā vā sambhavesī vā, sabbe sattā bhavantu sukhitattā.',
  pronKo: '딧타- 와- 예 짜 아딧타-, 예 짜 두-레 와산띠 아위두-레;\n부-따- 와- 삼바웨시- 와-, 삽베 삿따- 바완뚜 수키딷따-.',
  translation: '보이는 것이든 보이지 않는 것이든, 멀리 사는 것이든 가까이 사는 것이든,\n이미 태어난 것이든 태어날 것이든, 모든 존재가 행복하기를.',
}

export const VERSE_5_WORDS: VerseWord[] = [
  { pali: 'Diṭṭhā', pronKo: '딧타-', meaning: '보이는 것들', grammar: '과거분사 남성 복수 주격 (passati)' },
  { pali: 'adiṭṭhā', pronKo: '아딧타-', meaning: '보이지 않는 것들', grammar: '과거분사 남성 복수 주격 (a + diṭṭha)' },
  { pali: 'dūre', pronKo: '두-레', meaning: '멀리', grammar: '불변어(부사)' },
  { pali: 'vasanti', pronKo: '와산띠', meaning: '살다/거주하다', grammar: '현재 3인칭 복수 (vasati)' },
  { pali: 'avidūre', pronKo: '아위두-레', meaning: '가까이', grammar: '불변어(부사) (a + vidūre)' },
  { pali: 'bhūtā', pronKo: '부-따-', meaning: '이미 태어난 것들', grammar: '과거분사 남성 복수 주격 (bhavati)' },
  { pali: 'sambhavesī', pronKo: '삼바웨시-', meaning: '태어나려는 것들', grammar: '형용사 남성 복수 주격 (sam + bhavati + esī)' },
]

/** 제6게송 */
export const VERSE_6 = {
  pali: 'Na paro paraṃ nikubbetha, nātimaññetha katthaci naṃ kiñci;\nbyārosanā paṭighasaññā, nāññamaññassa dukkhamiccheyya.',
  pronKo: '나 빠로 빠랑 니꿉베타, 나-띠만녜타 깟타찌 낭 낀찌;\n뱌-로사나- 빠띠가산냐-, 나-ㄴ냐만냐ㅅ사 둑카밋쩨ㅇ야.',
  translation: '남을 속이지 말라, 어디서든 누구도 멸시하지 말라,\n분노와 적의의 생각으로 서로에게 괴로움을 바라지 말라.',
}

export const VERSE_6_WORDS: VerseWord[] = [
  { pali: 'paro', pronKo: '빠로', meaning: '남이/다른 사람이', grammar: '대명사 남성 단수 주격' },
  { pali: 'paraṃ', pronKo: '빠랑', meaning: '다른 사람을', grammar: '대명사 남성 단수 대격' },
  { pali: 'nikubbetha', pronKo: '니꿉베타', meaning: '속이다', grammar: '원망법 3인칭 단수 (ni + kubbati)' },
  { pali: 'nātimaññetha', pronKo: '나-띠만녜타', meaning: '멸시하지 말라', grammar: 'na + atimaññetha, 원망법 3인칭 단수' },
  { pali: 'katthaci', pronKo: '깟타찌', meaning: '어디서든', grammar: '불변어(부사)' },
  { pali: 'naṃ', pronKo: '낭', meaning: '그를', grammar: '대명사 남성 단수 대격' },
  { pali: 'byārosanā', pronKo: '뱌-로사나-', meaning: '분노로', grammar: '여성 단수 탈격 (vi + ārosanā)' },
  { pali: 'paṭighasaññā', pronKo: '빠띠가산냐-', meaning: '적의의 인식으로', grammar: '여성 단수 구격 (paṭigha + saññā)' },
  { pali: 'nāññamaññassa', pronKo: '나-ㄴ냐만냐ㅅ사', meaning: '서로에게 ~않다', grammar: 'na + aññamañña 속격' },
  { pali: 'dukkhamiccheyya', pronKo: '둑카밋쩨ㅇ야', meaning: '괴로움을 바라다', grammar: '원망법 3인칭 단수 (dukkhaṃ + iccheyya)' },
]

/** 제7게송 */
export const VERSE_7 = {
  pali: 'Mātā yathā niyaṃ puttaṃ, āyusā ekaputtamanurakkhe;\nevampi sabbabhūtesu, mānasaṃ bhāvaye aparimāṇaṃ.',
  pronKo: '마-따- 야타- 니양 뿟땅, 아-유사- 에까뿟따마누락케;\n에왐삐 삽바부-떼수, 마-나상 바-와예 아빠리마-낭.',
  translation: '마치 어머니가 목숨을 다하여 하나뿐인 자식을 보호하듯,\n그와 같이 모든 존재에게 한량없는 마음을 닦을지어다.',
}

export const VERSE_7_WORDS: VerseWord[] = [
  { pali: 'Mātā', pronKo: '마-따-', meaning: '어머니가', grammar: '여성 단수 주격' },
  { pali: 'yathā', pronKo: '야타-', meaning: '~와 같이', grammar: '불변어(부사)' },
  { pali: 'niyaṃ', pronKo: '니양', meaning: '자기의', grammar: '형용사 남성 단수 대격' },
  { pali: 'puttaṃ', pronKo: '뿟땅', meaning: '아들을', grammar: '남성 단수 대격' },
  { pali: 'āyusā', pronKo: '아-유사-', meaning: '목숨으로', grammar: '중성 단수 구격 (āyu)' },
  { pali: 'ekaputtam', pronKo: '에까뿟땅', meaning: '하나뿐인 아들을', grammar: '남성 단수 대격 (eka + putta)' },
  { pali: 'anurakkhe', pronKo: '아누락케', meaning: '보호하다', grammar: '원망법 3인칭 단수 (anu + rakkhati)' },
  { pali: 'evampi', pronKo: '에왐삐', meaning: '그와 같이', grammar: '불변어(부사) (evaṃ + pi)' },
  { pali: 'sabbabhūtesu', pronKo: '삽바부-떼수', meaning: '모든 존재들에게', grammar: '남성 복수 처격 (sabba + bhūta)' },
  { pali: 'mānasaṃ', pronKo: '마-나상', meaning: '마음을', grammar: '중성 단수 대격' },
  { pali: 'bhāvaye', pronKo: '바-와예', meaning: '닦다/수행하다', grammar: '원망법 3인칭 단수 (bhāveti)' },
  { pali: 'aparimāṇaṃ', pronKo: '아빠리마-낭', meaning: '한량없는', grammar: '형용사 중성 단수 대격 (a + parimāṇa)' },
]

/** 제8게송 */
export const VERSE_8 = {
  pali: 'Mettañca sabbalokasmiṃ, mānasaṃ bhāvaye aparimāṇaṃ;\nuddhaṃ adho ca tiriyañca, asambādhaṃ averaṃ asapattaṃ.',
  pronKo: '멧딴짜 삽바로까스밍, 마-나상 바-와예 아빠리마-낭;\n웃당 아토 짜 띠리얀짜, 아삼바-당 아웨랑 아사빳땅.',
  translation: '자비로써 온 세상에 한량없는 마음을 닦을지어다,\n위로 아래로 옆으로, 장애 없이 원한 없이 적의 없이.',
}

export const VERSE_8_WORDS: VerseWord[] = [
  { pali: 'Mettañca', pronKo: '멧딴짜', meaning: '자비 + 그리고', grammar: '여성 단수 대격 + ca (mettā)' },
  { pali: 'sabbalokasmiṃ', pronKo: '삽바로까스밍', meaning: '온 세상에', grammar: '남성 단수 처격 (sabba + loka)' },
  { pali: 'uddhaṃ', pronKo: '웃당', meaning: '위로', grammar: '불변어(부사)' },
  { pali: 'adho', pronKo: '아토', meaning: '아래로', grammar: '불변어(부사)' },
  { pali: 'tiriyañca', pronKo: '띠리얀짜', meaning: '옆으로 + 그리고', grammar: '불변어(부사) + ca' },
  { pali: 'asambādhaṃ', pronKo: '아삼바-당', meaning: '장애 없는', grammar: '형용사 중성 단수 대격 (a + sambādha)' },
  { pali: 'averaṃ', pronKo: '아웨랑', meaning: '원한 없는', grammar: '형용사 중성 단수 대격 (a + vera)' },
  { pali: 'asapattaṃ', pronKo: '아사빳땅', meaning: '적의 없는', grammar: '형용사 중성 단수 대격 (a + sapatta)' },
]

/** 제9게송 */
export const VERSE_9 = {
  pali: 'Tiṭṭhañcaraṃ nisinno vā, sayāno vā yāvatassa vigatamiddho;\netaṃ satiṃ adhiṭṭheyya, brahmametaṃ vihāraṃ idhamāhu.',
  pronKo: '띳탄짜랑 니신노 와-, 사야-노 와- 야-왓딷사 위가따밋토;\n에땅 사띵 아딧테ㅇ야, 브라흐마메땅 위하-랑 이다마-후.',
  translation: '서 있을 때나 걸을 때나 앉아 있을 때나,\n누워 있을 때나 잠들지 않는 한, 이 마음챙김을 확립할지니, 이것을 숭고한 삶이라 부른다.',
}

export const VERSE_9_WORDS: VerseWord[] = [
  { pali: 'Tiṭṭhaṃ', pronKo: '띳탕', meaning: '서 있으면서', grammar: '현재분사 남성 단수 주격 (tiṭṭhati)' },
  { pali: 'caraṃ', pronKo: '짜랑', meaning: '걸으면서', grammar: '현재분사 남성 단수 주격 (carati)' },
  { pali: 'nisinno', pronKo: '니신노', meaning: '앉아 있는', grammar: '과거분사 남성 단수 주격 (nisīdati)' },
  { pali: 'sayāno', pronKo: '사야-노', meaning: '누워 있는', grammar: '현재분사 남성 단수 주격 (sayati)' },
  { pali: 'yāvatassa', pronKo: '야-왓딷사', meaning: '~하는 한', grammar: '불변어 yāvat + assa' },
  { pali: 'vigatamiddho', pronKo: '위가따밋토', meaning: '잠에서 벗어난', grammar: '형용사 남성 단수 주격 (vigata + middha)' },
  { pali: 'etaṃ', pronKo: '에땅', meaning: '이것을', grammar: '지시대명사 중성 단수 대격' },
  { pali: 'satiṃ', pronKo: '사띵', meaning: '마음챙김을', grammar: '여성 단수 대격' },
  { pali: 'adhiṭṭheyya', pronKo: '아딧테ㅇ야', meaning: '확립하다', grammar: '원망법 3인칭 단수 (adhitiṭṭhati)' },
  { pali: 'brahmam', pronKo: '브라흐망', meaning: '숭고한', grammar: '형용사 남성 단수 대격' },
  { pali: 'vihāraṃ', pronKo: '위하-랑', meaning: '삶/머무름을', grammar: '남성 단수 대격' },
  { pali: 'idham', pronKo: '이당', meaning: '이것을', grammar: '지시대명사 중성 단수 대격' },
  { pali: 'āhu', pronKo: '아-후', meaning: '~라고 부른다', grammar: '과거 3인칭 복수 (āha)' },
]

/** 제10게송 */
export const VERSE_10 = {
  pali: 'Diṭṭhiñca anupagamma sīlavā, dassanena sampanno;\nkāmesu vineyya gedhaṃ, na hi jātu gabbhaseyyaṃ punaretīti.',
  pronKo: '딧틴짜 아누빠감마 시-라와-, 닷사네나 삼빤노;\n까-메수 위넷야 게당, 나 히 자-뚜 갑바셋양 뿌나레띠-띠.',
  translation: '견해에 빠지지 않고 계행을 갖추며, 바른 견해를 성취하여,\n감각적 욕망에 대한 탐욕을 버리면, 결코 다시 태에 들지 않으리라.',
}

export const VERSE_10_WORDS: VerseWord[] = [
  { pali: 'Diṭṭhiñca', pronKo: '딧틴짜', meaning: '견해를 + 그리고', grammar: '여성 단수 대격 + ca (diṭṭhi)' },
  { pali: 'anupagamma', pronKo: '아누빠감마', meaning: '빠지지 않고/취하지 않고', grammar: '절대분사 (an + upagacchati)' },
  { pali: 'sīlavā', pronKo: '시-라와-', meaning: '계행을 갖춘 자', grammar: '형용사 남성 단수 주격 (sīla + vant)' },
  { pali: 'dassanena', pronKo: '닷사네나', meaning: '바른 견해로', grammar: '중성 단수 구격' },
  { pali: 'sampanno', pronKo: '삼빤노', meaning: '성취한/갖춘', grammar: '과거분사 남성 단수 주격 (sam + pāpuṇāti)' },
  { pali: 'kāmesu', pronKo: '까-메수', meaning: '감각적 욕망들에서', grammar: '남성 복수 처격' },
  { pali: 'vineyya', pronKo: '위넷야', meaning: '버리고/제거하고', grammar: '절대분사 (vineti)' },
  { pali: 'gedhaṃ', pronKo: '게당', meaning: '탐욕을', grammar: '남성 단수 대격' },
  { pali: 'na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'hi', pronKo: '히', meaning: '실로/참으로', grammar: '불변어(강조사)' },
  { pali: 'jātu', pronKo: '자-뚜', meaning: '결코', grammar: '불변어(부사)' },
  { pali: 'gabbhaseyyaṃ', pronKo: '갑바셋양', meaning: '태에 드는 것을', grammar: '여성 단수 대격 (gabbha + seyyā)' },
  { pali: 'punaretīti', pronKo: '뿌나레띠-띠', meaning: '다시 가다 + ~라고', grammar: 'puna + eti + iti' },
]

// ── 전체 게송 배열 ──
export const ALL_VERSES = [
  { id: 'v1', ...VERSE_1, words: VERSE_1_WORDS },
  { id: 'v2', ...VERSE_2, words: VERSE_2_WORDS },
  { id: 'v3', ...VERSE_3, words: VERSE_3_WORDS },
  { id: 'v4', ...VERSE_4, words: VERSE_4_WORDS },
  { id: 'v5', ...VERSE_5, words: VERSE_5_WORDS },
  { id: 'v6', ...VERSE_6, words: VERSE_6_WORDS },
  { id: 'v7', ...VERSE_7, words: VERSE_7_WORDS },
  { id: 'v8', ...VERSE_8, words: VERSE_8_WORDS },
  { id: 'v9', ...VERSE_9, words: VERSE_9_WORDS },
  { id: 'v10', ...VERSE_10, words: VERSE_10_WORDS },
]

// ── 전체 단어 (중복 제거) ──
export const ALL_METTA_WORDS: VerseWord[] = (() => {
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
