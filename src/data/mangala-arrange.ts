// 행복경 독해/작문 조립 퀴즈 — 격변화 함정 포함
import { genReadingArrange, genWritingArrange } from './quiz-generator'

// ── 서문 조립 ──

export const ARRANGE_V0_READING = genReadingArrange(
  'Evaṃ me sutaṃ',
  ['이와 같이', '나는', '들었다'],
  [
    { text: '나에게', why: 'me는 여기서 주격(나는)이지 여격(나에게)이 아닙니다' },
    { text: '나의', why: 'me의 소유격 해석이지만, 이 문장에서는 주격입니다' },
    { text: '들은 것을', why: 'sutaṃ은 여기서 주격(들은 것)이지 목적격(들은 것을)이 아닙니다' },
  ],
)

export const ARRANGE_V0_WRITING = genWritingArrange(
  '이와 같이 나는 들었다',
  ['Evaṃ', 'me', 'sutaṃ'],
  [
    { text: 'mayā', why: 'mayā는 구격(나에 의해)이지 주격이 아닙니다. 이 구문에서는 me가 맞습니다' },
    { text: 'sutassa', why: 'sutassa는 소유격(들은 것의)입니다. 여기서는 주격 sutaṃ이 맞습니다' },
    { text: 'Evā', why: 'Evā는 존재하지 않는 형태입니다. Evaṃ이 맞습니다' },
  ],
)

// ── 제1게송 조립 ──

export const ARRANGE_V1_READING_1 = genReadingArrange(
  'Bahū devā manussā ca',
  ['많은', '천신들과', '인간들이'],
  [
    { text: '천신들의', why: 'devā는 주격(천신들이)이지 소유격(천신들의)이 아닙니다' },
    { text: '인간들을', why: 'manussā는 주격(인간들이)이지 목적격(인간들을)이 아닙니다' },
    { text: '적은', why: 'Bahū는 "많은"이라는 뜻이지 "적은"이 아닙니다' },
  ],
)

export const ARRANGE_V1_WRITING_1 = genWritingArrange(
  '최상의 행복을 말씀해 주소서',
  ['brūhi', 'maṅgalamuttamaṃ'],
  [
    { text: 'brūti', why: 'brūti는 평서형(말한다)입니다. 명령형 brūhi가 맞습니다' },
    { text: 'maṅgalaṃ', why: 'maṅgalaṃ은 그냥 "행복을"이고, "최상의 행복"은 maṅgalamuttamaṃ입니다' },
    { text: 'maṅgalassa', why: 'maṅgalassa는 소유격(행복의)이지 목적격이 아닙니다' },
  ],
)

// ── 제2게송 조립 ──

export const ARRANGE_V2_READING = genReadingArrange(
  'Asevanā ca bālānaṃ, paṇḍitānañca sevanā',
  ['어리석은 이를', '가까이하지 않고', '현명한 이를', '가까이하며'],
  [
    { text: '어리석은 이에 의해', why: 'bālānaṃ은 소유격(~의/~을)이지 구격(~에 의해)이 아닙니다' },
    { text: '현명한 이의', why: '여기서 paṇḍitānaṃ은 "현명한 이를(섬기는 대상)"의 의미입니다' },
    { text: '가까이한 것', why: 'sevanā는 동작명사(가까이함)이지 과거분사가 아닙니다' },
  ],
)

export const ARRANGE_V2_WRITING = genWritingArrange(
  '어리석은 이를 가까이하지 않고, 현명한 이를 가까이하며',
  ['Asevanā', 'ca', 'bālānaṃ', 'paṇḍitānañca', 'sevanā'],
  [
    { text: 'bālā', why: 'bālā는 주격(어리석은 이들이)이지만, 여기서는 소유격 bālānaṃ이 맞습니다' },
    { text: 'paṇḍitā', why: 'paṇḍitā는 주격이지만, 여기서는 소유격이 필요합니다' },
    { text: 'sevanāya', why: 'sevanāya는 여격(가까이함을 위해)이지 주격이 아닙니다' },
  ],
)

// ── 제5게송 조립 ──

export const ARRANGE_V5_READING = genReadingArrange(
  'Mātāpitu upaṭṭhānaṃ, puttadārassa saṅgaho',
  ['어머니와 아버지를', '봉양함', '아내와 자녀를', '보살핌'],
  [
    { text: '어머니의', why: 'Mātāpitu는 "어머니와 아버지의(를)"이지 "어머니의"만이 아닙니다' },
    { text: '봉양하는 자', why: 'upaṭṭhānaṃ은 "봉양(행위)"이지 "봉양하는 자(사람)"가 아닙니다' },
    { text: '아내와 자녀에 의해', why: 'puttadārassa는 소유격(~의/~을)이지 구격(~에 의해)이 아닙니다' },
  ],
)

// ── 제8게송 조립 ──

export const ARRANGE_V8_READING = genReadingArrange(
  'Gāravo ca nivāto ca, santuṭṭhī ca kataññutā',
  ['존경과', '겸손', '만족과', '감사함'],
  [
    { text: '존경에 의해', why: 'Gāravo는 주격(존경이)이지 구격(존경에 의해)이 아닙니다' },
    { text: '만족을', why: 'santuṭṭhī는 주격(만족이)이지 목적격(만족을)이 아닙니다' },
  ],
)

// ── 제11게송 조립 ──

export const ARRANGE_V11_READING = genReadingArrange(
  'Phuṭṭhassa lokadhammehi, cittaṃ yassa na kampati',
  ['세상의 법에', '부딪혀도', '마음이', '흔들리지 않는'],
  [
    { text: '마음을', why: 'cittaṃ은 여기서 주격(마음이)이지 목적격(마음을)이 아닙니다' },
    { text: '세상의 법을', why: 'lokadhammehi는 구격(법에 의해/법에 부딪혀)이지 목적격이 아닙니다' },
    { text: '흔들린', why: 'na kampati는 "흔들리지 않는"이지 "흔들린"이 아닙니다' },
  ],
)

export const ARRANGE_V11_WRITING = genWritingArrange(
  '마음이 흔들리지 않는',
  ['cittaṃ', 'na', 'kampati'],
  [
    { text: 'cittassa', why: 'cittassa는 소유격(마음의)이지 주격(마음이)이 아닙니다' },
    { text: 'cittena', why: 'cittena는 구격(마음에 의해)이지 주격이 아닙니다' },
    { text: 'kampeti', why: 'kampeti는 사역형(흔들리게 하다)이지 자동사(흔들리다)가 아닙니다' },
  ],
)

// ── 전체 조립 퀴즈 배열 ──
export const ALL_ARRANGE_QUIZZES = [
  ARRANGE_V0_READING,
  ARRANGE_V0_WRITING,
  ARRANGE_V1_READING_1,
  ARRANGE_V1_WRITING_1,
  ARRANGE_V2_READING,
  ARRANGE_V2_WRITING,
  ARRANGE_V5_READING,
  ARRANGE_V8_READING,
  ARRANGE_V11_READING,
  ARRANGE_V11_WRITING,
]
