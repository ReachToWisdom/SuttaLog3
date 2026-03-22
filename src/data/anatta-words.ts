// 무아경(Anattalakkhaṇa Sutta, SN 22.59) — 전문 단어 데이터
// 출처: Saṃyutta Nikāya 22.59

import type { VerseWord } from './types'

// ── 제1단락: 서문 ──

export const VERSE_1 = {
  pali: 'Ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati isipatane migadāye. Tatra kho bhagavā pañcavaggiye bhikkhū āmantesi — bhikkhavoti. Bhadanteti te bhikkhū bhagavato paccassosuṃ. Bhagavā etadavoca —',
  pronKo: '에깡 사마양 바가와- 바-라-나시양 위하라띠 이시빠따네 미가다-예. 따뜨라 코 바가와- 빤짜왁기예 빅쿠- 아-만떼시 — 빅카워띠. 바단떼띠 떼 빅쿠- 바가와또 빳짯소숭. 바가와- 에따다워짜 —',
  translation: '한 때 세존께서 바라나시의 이시빠따나 녹야원에 머무셨다. 거기서 세존께서 다섯 비구에게 "비구들이여"라고 말씀하셨다. "세존이시여"라고 그 비구들이 대답하였다. 세존께서 이렇게 말씀하셨다.',
  grammarNotes: [
    '문장 구조: 4문장. ①시간+장소 서두 ②부름 ③대답 ④도입. 경전 정형 서두(nidāna)',
    '핵심 문법: "Ekaṃ samayaṃ"은 대격의 시간 부사 용법. 처격 bārāṇasiyaṃ/isipatane/migadāye가 장소',
    '연성: bhikkhavoti = bhikkhavo + iti, Bhadanteti = Bhadante + iti, etadavoca = etad + avoca, paccassosuṃ = pati + assosuṃ',
  ],
}

export const VERSE_1_WORDS: VerseWord[] = [
  { pali: 'Ekaṃ', pronKo: '에깡', meaning: '하나의/한', grammar: '수사 중성 단수 대격' },
  { pali: 'samayaṃ', pronKo: '사마양', meaning: '때/시기', grammar: '남성 단수 대격' },
  { pali: 'bhagavā', pronKo: '바가와-', meaning: '세존(부처님)', grammar: '남성 단수 주격', important: true },
  { pali: 'bārāṇasiyaṃ', pronKo: '바-라-나시양', meaning: '바라나시에서', grammar: '여성 단수 처격 (지명)' },
  { pali: 'viharati', pronKo: '위하라띠', meaning: '머무시다', grammar: '현재 3인칭 단수 (vi + harati)' },
  { pali: 'isipatane', pronKo: '이시빠따네', meaning: '이시빠따나에서', grammar: '중성 단수 처격 (지명)' },
  { pali: 'migadāye', pronKo: '미가다-예', meaning: '녹야원에서', grammar: '남성 단수 처격 (miga + dāya)' },
  { pali: 'Tatra', pronKo: '따뜨라', meaning: '거기서', grammar: '불변어(부사)' },
  { pali: 'kho', pronKo: '코', meaning: '참으로/실로', grammar: '불변어(강조사)' },
  { pali: 'pañcavaggiye', pronKo: '빤짜왁기예', meaning: '다섯 무리의', grammar: '형용사 남성 복수 대격 (pañca + vaggiya)' },
  { pali: 'bhikkhū', pronKo: '빅쿠-', meaning: '비구들을', grammar: '남성 복수 대격' },
  { pali: 'āmantesi', pronKo: '아-만떼시', meaning: '말씀하셨다', grammar: '과거(아오리스트) 3인칭 단수 (āmanteti)' },
  { pali: 'bhikkhavoti', pronKo: '빅카워띠', meaning: '"비구들이여"라고', grammar: 'bhikkhavo + iti (연성)' },
  { pali: 'Bhadanteti', pronKo: '바단떼띠', meaning: '"세존이시여"라고', grammar: 'Bhadante + iti (연성)' },
  { pali: 'te', pronKo: '떼', meaning: '그/그들이', grammar: '지시대명사 남성 복수 주격' },
  { pali: 'bhagavato', pronKo: '바가와또', meaning: '세존에게/세존의', grammar: '남성 단수 여격/속격' },
  { pali: 'paccassosuṃ', pronKo: '빳짯소숭', meaning: '대답하였다', grammar: '과거 3인칭 복수 (pati + assosati)' },
  { pali: 'etadavoca', pronKo: '에따다워짜', meaning: '이렇게 말씀하셨다', grammar: 'etad + avoca (과거 3인칭 단수, vacati)' },
]

// ── 제2단락: 색온(色蘊) 무아 ──

export const VERSE_2 = {
  pali: 'Rūpaṃ bhikkhave anattā. Rūpañca hidaṃ bhikkhave attā abhavissa, nayidaṃ rūpaṃ ābādhāya saṃvatteyya, labbhetha ca rūpe — evaṃ me rūpaṃ hotu, evaṃ me rūpaṃ mā ahosīti. Yasmā ca kho bhikkhave rūpaṃ anattā, tasmā rūpaṃ ābādhāya saṃvattati, na ca labbhati rūpe — evaṃ me rūpaṃ hotu, evaṃ me rūpaṃ mā ahosīti.',
  pronKo: '루-빵 빅카웨 아낫따-. 루-빤짜 히당 빅카웨 앗따- 아바윗사, 나이당 루-빵 아-바-다-야 상왓떼이야, 랍베타 짜 루-뻬 — 에왕 메 루-빵 호뚜, 에왕 메 루-빵 마- 아호시-띠. 야스마- 짜 코 빅카웨 루-빵 아낫따-, 따스마- 루-빵 아-바-다-야 상왓따띠, 나 짜 랍바띠 루-뻬 — 에왕 메 루-빵 호뚜, 에왕 메 루-빵 마- 아호시-띠.',
  translation: '비구들이여, 물질은 자아가 아니다. 만약 물질이 자아라면 물질이 병들지 않아야 할 것이며, 물질에 대해 "나의 물질이 이렇게 되어라, 이렇게 되지 말라"고 할 수 있어야 한다. 그러나 물질은 자아가 아니므로 물질은 병듦에 이르고, 물질에 대해 "나의 물질이 이렇게 되어라, 이렇게 되지 말라"고 할 수 없다.',
  grammarNotes: [
    '문장 구조: 3부분. ①선언「Rūpaṃ anattā」 ②반사실 조건문「abhavissa → saṃvatteyya/labbhetha」 ③현실「Yasmā anattā, tasmā saṃvattati/na labbhati」',
    '핵심 문법: 가정법(optative) abhavissa/saṃvatteyya/labbhetha가 반사실 조건문 형성. Yasmā...tasmā는 "~이므로...그러므로" 인과 구문',
    '정형구: "evaṃ me rūpaṃ hotu, evaṃ me rūpaṃ mā ahosī" — 명령법(hotu)과 금지형(mā + ahosī)의 대조. 자아의 통제력 부재 논증',
    '연성: Rūpañca = Rūpaṃ + ca, hidaṃ = hi + idaṃ, nayidaṃ = na + ayidaṃ, ahosīti = ahosī + iti',
  ],
}

export const VERSE_2_WORDS: VerseWord[] = [
  { pali: 'Rūpaṃ', pronKo: '루-빵', meaning: '물질/색(色)', grammar: '중성 단수 주격', important: true },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격', important: true },
  { pali: 'anattā', pronKo: '아낫따-', meaning: '자아가 아닌/무아', grammar: '남성 단수 주격 (an + attā)', important: true },
  { pali: 'Rūpañca', pronKo: '루-빤짜', meaning: '물질이 + 그리고', grammar: '중성 단수 주격 + ca (연성)' },
  { pali: 'hidaṃ', pronKo: '히당', meaning: '만약 이것이', grammar: 'hi(만약) + idaṃ(이것)' },
  { pali: 'attā', pronKo: '앗따-', meaning: '자아/나', grammar: '남성 단수 주격', important: true },
  { pali: 'abhavissa', pronKo: '아바윗사', meaning: '~이었다면', grammar: '가정법 과거 3인칭 단수 (bhavati)' },
  { pali: 'nayidaṃ', pronKo: '나이당', meaning: '이것은 ~않을 것이다', grammar: 'na(부정) + ayidaṃ(이것)' },
  { pali: 'ābādhāya', pronKo: '아-바-다-야', meaning: '병들기 위해/병듦에', grammar: '남성 단수 여격 (ābādha)' },
  { pali: 'saṃvatteyya', pronKo: '상왓떼이야', meaning: '이끌 것이다', grammar: '가정법 3인칭 단수 (saṃvattati)' },
  { pali: 'labbhetha', pronKo: '랍베타', meaning: '얻어질 수 있어야 한다', grammar: '가정법 수동 3인칭 단수 (labhati)' },
  { pali: 'ca', pronKo: '짜', meaning: '~과/그리고', grammar: '불변어(접속사)' },
  { pali: 'rūpe', pronKo: '루-뻬', meaning: '물질에 대해', grammar: '중성 단수 처격' },
  { pali: 'evaṃ', pronKo: '에왕', meaning: '이와 같이', grammar: '불변어(부사)' },
  { pali: 'me', pronKo: '메', meaning: '나의', grammar: '1인칭 단수 속격' },
  { pali: 'hotu', pronKo: '호뚜', meaning: '~이 되어라', grammar: '명령법 3인칭 단수 (bhavati)' },
  { pali: 'mā', pronKo: '마-', meaning: '~하지 말라', grammar: '불변어(금지사)' },
  { pali: 'ahosīti', pronKo: '아호시-띠', meaning: '되었다 + 라고', grammar: '과거 3인칭 단수 + iti (ahosi + iti)' },
  { pali: 'Yasmā', pronKo: '야스마-', meaning: '~이므로', grammar: '관계대명사 탈격 (원인)' },
  { pali: 'tasmā', pronKo: '따스마-', meaning: '그러므로', grammar: '지시대명사 탈격 (결론)' },
  { pali: 'saṃvattati', pronKo: '상왓따띠', meaning: '이끌다/이르다', grammar: '현재 3인칭 단수' },
  { pali: 'na', pronKo: '나', meaning: '~아니다', grammar: '불변어(부정사)' },
  { pali: 'labbhati', pronKo: '랍바띠', meaning: '얻어지다/할 수 있다', grammar: '현재 수동 3인칭 단수 (labhati)' },
]

// ── 제3단락: 수온(受蘊) 무아 ──

export const VERSE_3 = {
  pali: 'Vedanā bhikkhave anattā. Vedanā ca hidaṃ bhikkhave attā abhavissa, nayidaṃ vedanā ābādhāya saṃvatteyya, labbhetha ca vedanāya — evaṃ me vedanā hotu, evaṃ me vedanā mā ahosīti. Yasmā ca kho bhikkhave vedanā anattā, tasmā vedanā ābādhāya saṃvattati, na ca labbhati vedanāya — evaṃ me vedanā hotu, evaṃ me vedanā mā ahosīti.',
  pronKo: '웨다나- 빅카웨 아낫따-. 웨다나- 짜 히당 빅카웨 앗따- 아바윗사, 나이당 웨다나- 아-바-다-야 상왓떼이야, 랍베타 짜 웨다나-야 — 에왕 메 웨다나- 호뚜, 에왕 메 웨다나- 마- 아호시-띠. 야스마- 짜 코 빅카웨 웨다나- 아낫따-, 따스마- 웨다나- 아-바-다-야 상왓따띠, 나 짜 랍바띠 웨다나-야 — 에왕 메 웨다나- 호뚜, 에왕 메 웨다나- 마- 아호시-띠.',
  translation: '비구들이여, 느낌은 자아가 아니다. 만약 느낌이 자아라면 느낌이 병들지 않아야 할 것이며, 느낌에 대해 "나의 느낌이 이렇게 되어라, 이렇게 되지 말라"고 할 수 있어야 한다. 그러나 느낌은 자아가 아니므로 느낌은 병듦에 이르고, 느낌에 대해 "나의 느낌이 이렇게 되어라, 이렇게 되지 말라"고 할 수 없다.',
  grammarNotes: [
    '색온(제2단락)과 동일한 구문 패턴. vedanā(여성 단수 주격)로 대체',
    '핵심 차이: 처격이 rūpe(중성) → vedanāya(여성)로 변경. 여성 명사의 처격 어미 -āya',
    '연성 규칙 동일: Vedanā ca(별도 단어, 연성 없음 — 여성이므로 Rūpañca와 다름)',
  ],
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'Vedanā', pronKo: '웨다나-', meaning: '느낌/수(受)', grammar: '여성 단수 주격', important: true },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'anattā', pronKo: '아낫따-', meaning: '자아가 아닌/무아', grammar: '남성 단수 주격 (an + attā)' },
  { pali: 'ca', pronKo: '짜', meaning: '~과/그리고', grammar: '불변어(접속사)' },
  { pali: 'hidaṃ', pronKo: '히당', meaning: '만약 이것이', grammar: 'hi(만약) + idaṃ(이것)' },
  { pali: 'attā', pronKo: '앗따-', meaning: '자아/나', grammar: '남성 단수 주격' },
  { pali: 'abhavissa', pronKo: '아바윗사', meaning: '~이었다면', grammar: '가정법 과거 3인칭 단수 (bhavati)' },
  { pali: 'nayidaṃ', pronKo: '나이당', meaning: '이것은 ~않을 것이다', grammar: 'na(부정) + ayidaṃ(이것)' },
  { pali: 'ābādhāya', pronKo: '아-바-다-야', meaning: '병들기 위해/병듦에', grammar: '남성 단수 여격 (ābādha)' },
  { pali: 'saṃvatteyya', pronKo: '상왓떼이야', meaning: '이끌 것이다', grammar: '가정법 3인칭 단수 (saṃvattati)' },
  { pali: 'labbhetha', pronKo: '랍베타', meaning: '얻어질 수 있어야 한다', grammar: '가정법 수동 3인칭 단수 (labhati)' },
  { pali: 'vedanāya', pronKo: '웨다나-야', meaning: '느낌에 대해', grammar: '여성 단수 처격/여격' },
  { pali: 'evaṃ', pronKo: '에왕', meaning: '이와 같이', grammar: '불변어(부사)' },
  { pali: 'me', pronKo: '메', meaning: '나의', grammar: '1인칭 단수 속격' },
  { pali: 'hotu', pronKo: '호뚜', meaning: '~이 되어라', grammar: '명령법 3인칭 단수 (bhavati)' },
  { pali: 'mā', pronKo: '마-', meaning: '~하지 말라', grammar: '불변어(금지사)' },
  { pali: 'ahosīti', pronKo: '아호시-띠', meaning: '되었다 + 라고', grammar: '과거 3인칭 단수 + iti (ahosi + iti)' },
  { pali: 'Yasmā', pronKo: '야스마-', meaning: '~이므로', grammar: '관계대명사 탈격 (원인)' },
  { pali: 'kho', pronKo: '코', meaning: '참으로/실로', grammar: '불변어(강조사)' },
  { pali: 'tasmā', pronKo: '따스마-', meaning: '그러므로', grammar: '지시대명사 탈격 (결론)' },
  { pali: 'saṃvattati', pronKo: '상왓따띠', meaning: '이끌다/이르다', grammar: '현재 3인칭 단수' },
  { pali: 'na', pronKo: '나', meaning: '~아니다', grammar: '불변어(부정사)' },
  { pali: 'labbhati', pronKo: '랍바띠', meaning: '얻어지다/할 수 있다', grammar: '현재 수동 3인칭 단수 (labhati)' },
]

// ── 제4단락: 상온(想蘊) 무아 ──

export const VERSE_4 = {
  pali: 'Saññā bhikkhave anattā. Saññā ca hidaṃ bhikkhave attā abhavissa, nayidaṃ saññā ābādhāya saṃvatteyya, labbhetha ca saññāya — evaṃ me saññā hotu, evaṃ me saññā mā ahosīti. Yasmā ca kho bhikkhave saññā anattā, tasmā saññā ābādhāya saṃvattati, na ca labbhati saññāya — evaṃ me saññā hotu, evaṃ me saññā mā ahosīti.',
  pronKo: '산냐- 빅카웨 아낫따-. 산냐- 짜 히당 빅카웨 앗따- 아바윗사, 나이당 산냐- 아-바-다-야 상왓떼이야, 랍베타 짜 산냐-야 — 에왕 메 산냐- 호뚜, 에왕 메 산냐- 마- 아호시-띠. 야스마- 짜 코 빅카웨 산냐- 아낫따-, 따스마- 산냐- 아-바-다-야 상왓따띠, 나 짜 랍바띠 산냐-야 — 에왕 메 산냐- 호뚜, 에왕 메 산냐- 마- 아호시-띠.',
  translation: '비구들이여, 인식은 자아가 아니다. 만약 인식이 자아라면 인식이 병들지 않아야 할 것이며, 인식에 대해 "나의 인식이 이렇게 되어라, 이렇게 되지 말라"고 할 수 있어야 한다. 그러나 인식은 자아가 아니므로 인식은 병듦에 이르고, 인식에 대해 "나의 인식이 이렇게 되어라, 이렇게 되지 말라"고 할 수 없다.',
  grammarNotes: [
    '색온(제2단락)과 동일한 구문 패턴. saññā(여성 단수 주격)로 대체',
    '핵심 차이: vedanā와 마찬가지로 여성 명사. 처격 saññāya',
  ],
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'Saññā', pronKo: '산냐-', meaning: '인식/상(想)', grammar: '여성 단수 주격', important: true },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'anattā', pronKo: '아낫따-', meaning: '자아가 아닌/무아', grammar: '남성 단수 주격 (an + attā)' },
  { pali: 'ca', pronKo: '짜', meaning: '~과/그리고', grammar: '불변어(접속사)' },
  { pali: 'hidaṃ', pronKo: '히당', meaning: '만약 이것이', grammar: 'hi(만약) + idaṃ(이것)' },
  { pali: 'attā', pronKo: '앗따-', meaning: '자아/나', grammar: '남성 단수 주격' },
  { pali: 'abhavissa', pronKo: '아바윗사', meaning: '~이었다면', grammar: '가정법 과거 3인칭 단수 (bhavati)' },
  { pali: 'nayidaṃ', pronKo: '나이당', meaning: '이것은 ~않을 것이다', grammar: 'na(부정) + ayidaṃ(이것)' },
  { pali: 'ābādhāya', pronKo: '아-바-다-야', meaning: '병들기 위해/병듦에', grammar: '남성 단수 여격 (ābādha)' },
  { pali: 'saṃvatteyya', pronKo: '상왓떼이야', meaning: '이끌 것이다', grammar: '가정법 3인칭 단수 (saṃvattati)' },
  { pali: 'labbhetha', pronKo: '랍베타', meaning: '얻어질 수 있어야 한다', grammar: '가정법 수동 3인칭 단수 (labhati)' },
  { pali: 'saññāya', pronKo: '산냐-야', meaning: '인식에 대해', grammar: '여성 단수 처격/여격' },
  { pali: 'evaṃ', pronKo: '에왕', meaning: '이와 같이', grammar: '불변어(부사)' },
  { pali: 'me', pronKo: '메', meaning: '나의', grammar: '1인칭 단수 속격' },
  { pali: 'hotu', pronKo: '호뚜', meaning: '~이 되어라', grammar: '명령법 3인칭 단수 (bhavati)' },
  { pali: 'mā', pronKo: '마-', meaning: '~하지 말라', grammar: '불변어(금지사)' },
  { pali: 'ahosīti', pronKo: '아호시-띠', meaning: '되었다 + 라고', grammar: '과거 3인칭 단수 + iti (ahosi + iti)' },
  { pali: 'Yasmā', pronKo: '야스마-', meaning: '~이므로', grammar: '관계대명사 탈격 (원인)' },
  { pali: 'kho', pronKo: '코', meaning: '참으로/실로', grammar: '불변어(강조사)' },
  { pali: 'tasmā', pronKo: '따스마-', meaning: '그러므로', grammar: '지시대명사 탈격 (결론)' },
  { pali: 'saṃvattati', pronKo: '상왓따띠', meaning: '이끌다/이르다', grammar: '현재 3인칭 단수' },
  { pali: 'na', pronKo: '나', meaning: '~아니다', grammar: '불변어(부정사)' },
  { pali: 'labbhati', pronKo: '랍바띠', meaning: '얻어지다/할 수 있다', grammar: '현재 수동 3인칭 단수 (labhati)' },
]

// ── 제5단락: 행온(行蘊) 무아 ──

export const VERSE_5 = {
  pali: 'Saṅkhārā bhikkhave anattā. Saṅkhārā ca hidaṃ bhikkhave attā abhavissaṃsu, nayidaṃ saṅkhārā ābādhāya saṃvatteyyuṃ, labbhetha ca saṅkhāresu — evaṃ me saṅkhārā hontu, evaṃ me saṅkhārā mā ahesuṃti. Yasmā ca kho bhikkhave saṅkhārā anattā, tasmā saṅkhārā ābādhāya saṃvattanti, na ca labbhati saṅkhāresu — evaṃ me saṅkhārā hontu, evaṃ me saṅkhārā mā ahesuṃti.',
  pronKo: '상카-라- 빅카웨 아낫따-. 상카-라- 짜 히당 빅카웨 앗따- 아바윗상수, 나이당 상카-라- 아-바-다-야 상왓떼이융, 랍베타 짜 상카-레수 — 에왕 메 상카-라- 혼뚜, 에왕 메 상카-라- 마- 아헤숭띠. 야스마- 짜 코 빅카웨 상카-라- 아낫따-, 따스마- 상카-라- 아-바-다-야 상왓딴띠, 나 짜 랍바띠 상카-레수 — 에왕 메 상카-라- 혼뚜, 에왕 메 상카-라- 마- 아헤숭띠.',
  translation: '비구들이여, 형성들은 자아가 아니다. 만약 형성들이 자아라면 형성들이 병들지 않아야 할 것이며, 형성들에 대해 "나의 형성들이 이렇게 되어라, 이렇게 되지 말라"고 할 수 있어야 한다. 그러나 형성들은 자아가 아니므로 형성들은 병듦에 이르고, 형성들에 대해 "나의 형성들이 이렇게 되어라, 이렇게 되지 말라"고 할 수 없다.',
  grammarNotes: [
    '색온(제2단락)과 동일한 구문 패턴. saṅkhārā(남성 복수 주격)로 대체',
    '핵심 차이: 복수형이므로 동사도 복수 — abhavissaṃsu, saṃvatteyyuṃ, saṃvattanti, hontu, ahesuṃ',
    '처격: saṅkhāresu(남성 복수 처격). 단수 처격과 달리 -esu 어미',
  ],
}

export const VERSE_5_WORDS: VerseWord[] = [
  { pali: 'Saṅkhārā', pronKo: '상카-라-', meaning: '형성들/행(行)', grammar: '남성 복수 주격', important: true },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'anattā', pronKo: '아낫따-', meaning: '자아가 아닌/무아', grammar: '남성 단수 주격 (an + attā)' },
  { pali: 'ca', pronKo: '짜', meaning: '~과/그리고', grammar: '불변어(접속사)' },
  { pali: 'hidaṃ', pronKo: '히당', meaning: '만약 이것이', grammar: 'hi(만약) + idaṃ(이것)' },
  { pali: 'attā', pronKo: '앗따-', meaning: '자아/나', grammar: '남성 단수 주격' },
  { pali: 'abhavissaṃsu', pronKo: '아바윗상수', meaning: '~이었다면(복수)', grammar: '가정법 과거 3인칭 복수 (bhavati)' },
  { pali: 'nayidaṃ', pronKo: '나이당', meaning: '이것은 ~않을 것이다', grammar: 'na(부정) + ayidaṃ(이것)' },
  { pali: 'ābādhāya', pronKo: '아-바-다-야', meaning: '병들기 위해/병듦에', grammar: '남성 단수 여격 (ābādha)' },
  { pali: 'saṃvatteyyuṃ', pronKo: '상왓떼이융', meaning: '이끌 것이다(복수)', grammar: '가정법 3인칭 복수 (saṃvattati)' },
  { pali: 'labbhetha', pronKo: '랍베타', meaning: '얻어질 수 있어야 한다', grammar: '가정법 수동 3인칭 단수 (labhati)' },
  { pali: 'saṅkhāresu', pronKo: '상카-레수', meaning: '형성들에 대해', grammar: '남성 복수 처격' },
  { pali: 'evaṃ', pronKo: '에왕', meaning: '이와 같이', grammar: '불변어(부사)' },
  { pali: 'me', pronKo: '메', meaning: '나의', grammar: '1인칭 단수 속격' },
  { pali: 'hontu', pronKo: '혼뚜', meaning: '~이 되어라(복수)', grammar: '명령법 3인칭 복수 (bhavati)' },
  { pali: 'mā', pronKo: '마-', meaning: '~하지 말라', grammar: '불변어(금지사)' },
  { pali: 'ahesuṃti', pronKo: '아헤숭띠', meaning: '되었다(복수) + 라고', grammar: '과거 3인칭 복수 + iti' },
  { pali: 'Yasmā', pronKo: '야스마-', meaning: '~이므로', grammar: '관계대명사 탈격 (원인)' },
  { pali: 'kho', pronKo: '코', meaning: '참으로/실로', grammar: '불변어(강조사)' },
  { pali: 'tasmā', pronKo: '따스마-', meaning: '그러므로', grammar: '지시대명사 탈격 (결론)' },
  { pali: 'saṃvattanti', pronKo: '상왓딴띠', meaning: '이끌다(복수)', grammar: '현재 3인칭 복수 (saṃvattati)' },
  { pali: 'na', pronKo: '나', meaning: '~아니다', grammar: '불변어(부정사)' },
  { pali: 'labbhati', pronKo: '랍바띠', meaning: '얻어지다/할 수 있다', grammar: '현재 수동 3인칭 단수 (labhati)' },
]

// ── 제6단락: 식온(識蘊) 무아 ──

export const VERSE_6 = {
  pali: 'Viññāṇaṃ bhikkhave anattā. Viññāṇañca hidaṃ bhikkhave attā abhavissa, nayidaṃ viññāṇaṃ ābādhāya saṃvatteyya, labbhetha ca viññāṇe — evaṃ me viññāṇaṃ hotu, evaṃ me viññāṇaṃ mā ahosīti. Yasmā ca kho bhikkhave viññāṇaṃ anattā, tasmā viññāṇaṃ ābādhāya saṃvattati, na ca labbhati viññāṇe — evaṃ me viññāṇaṃ hotu, evaṃ me viññāṇaṃ mā ahosīti.',
  pronKo: '윈냐-낭 빅카웨 아낫따-. 윈냐-난짜 히당 빅카웨 앗따- 아바윗사, 나이당 윈냐-낭 아-바-다-야 상왓떼이야, 랍베타 짜 윈냐-네 — 에왕 메 윈냐-낭 호뚜, 에왕 메 윈냐-낭 마- 아호시-띠. 야스마- 짜 코 빅카웨 윈냐-낭 아낫따-, 따스마- 윈냐-낭 아-바-다-야 상왓따띠, 나 짜 랍바띠 윈냐-네 — 에왕 메 윈냐-낭 호뚜, 에왕 메 윈냐-낭 마- 아호시-띠.',
  translation: '비구들이여, 의식은 자아가 아니다. 만약 의식이 자아라면 의식이 병들지 않아야 할 것이며, 의식에 대해 "나의 의식이 이렇게 되어라, 이렇게 되지 말라"고 할 수 있어야 한다. 그러나 의식은 자아가 아니므로 의식은 병듦에 이르고, 의식에 대해 "나의 의식이 이렇게 되어라, 이렇게 되지 말라"고 할 수 없다.',
  grammarNotes: [
    '색온(제2단락)과 동일한 구문 패턴. viññāṇaṃ(중성 단수 주격)로 대체',
    '핵심 차이: rūpaṃ과 같은 중성 명사. 처격 viññāṇe. 연성 Viññāṇañca = Viññāṇaṃ + ca',
  ],
}

export const VERSE_6_WORDS: VerseWord[] = [
  { pali: 'Viññāṇaṃ', pronKo: '윈냐-낭', meaning: '의식/식(識)', grammar: '중성 단수 주격', important: true },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'anattā', pronKo: '아낫따-', meaning: '자아가 아닌/무아', grammar: '남성 단수 주격 (an + attā)' },
  { pali: 'Viññāṇañca', pronKo: '윈냐-난짜', meaning: '의식이 + 그리고', grammar: '중성 단수 주격 + ca (연성)' },
  { pali: 'hidaṃ', pronKo: '히당', meaning: '만약 이것이', grammar: 'hi(만약) + idaṃ(이것)' },
  { pali: 'attā', pronKo: '앗따-', meaning: '자아/나', grammar: '남성 단수 주격' },
  { pali: 'abhavissa', pronKo: '아바윗사', meaning: '~이었다면', grammar: '가정법 과거 3인칭 단수 (bhavati)' },
  { pali: 'nayidaṃ', pronKo: '나이당', meaning: '이것은 ~않을 것이다', grammar: 'na(부정) + ayidaṃ(이것)' },
  { pali: 'ābādhāya', pronKo: '아-바-다-야', meaning: '병들기 위해/병듦에', grammar: '남성 단수 여격 (ābādha)' },
  { pali: 'saṃvatteyya', pronKo: '상왓떼이야', meaning: '이끌 것이다', grammar: '가정법 3인칭 단수 (saṃvattati)' },
  { pali: 'labbhetha', pronKo: '랍베타', meaning: '얻어질 수 있어야 한다', grammar: '가정법 수동 3인칭 단수 (labhati)' },
  { pali: 'ca', pronKo: '짜', meaning: '~과/그리고', grammar: '불변어(접속사)' },
  { pali: 'viññāṇe', pronKo: '윈냐-네', meaning: '의식에 대해', grammar: '중성 단수 처격' },
  { pali: 'evaṃ', pronKo: '에왕', meaning: '이와 같이', grammar: '불변어(부사)' },
  { pali: 'me', pronKo: '메', meaning: '나의', grammar: '1인칭 단수 속격' },
  { pali: 'hotu', pronKo: '호뚜', meaning: '~이 되어라', grammar: '명령법 3인칭 단수 (bhavati)' },
  { pali: 'mā', pronKo: '마-', meaning: '~하지 말라', grammar: '불변어(금지사)' },
  { pali: 'ahosīti', pronKo: '아호시-띠', meaning: '되었다 + 라고', grammar: '과거 3인칭 단수 + iti (ahosi + iti)' },
  { pali: 'Yasmā', pronKo: '야스마-', meaning: '~이므로', grammar: '관계대명사 탈격 (원인)' },
  { pali: 'kho', pronKo: '코', meaning: '참으로/실로', grammar: '불변어(강조사)' },
  { pali: 'tasmā', pronKo: '따스마-', meaning: '그러므로', grammar: '지시대명사 탈격 (결론)' },
  { pali: 'saṃvattati', pronKo: '상왓따띠', meaning: '이끌다/이르다', grammar: '현재 3인칭 단수' },
  { pali: 'na', pronKo: '나', meaning: '~아니다', grammar: '불변어(부정사)' },
  { pali: 'labbhati', pronKo: '랍바띠', meaning: '얻어지다/할 수 있다', grammar: '현재 수동 3인칭 단수 (labhati)' },
]

// ── 제7단락: 색온 질문 — 무상·고·무아의 논리 ──

export const VERSE_7 = {
  pali: 'Taṃ kiṃ maññatha bhikkhave, rūpaṃ niccaṃ vā aniccaṃ vāti? Aniccaṃ bhante. Yaṃ panāniccaṃ dukkhaṃ vā taṃ sukhaṃ vāti? Dukkhaṃ bhante. Yaṃ panāniccaṃ dukkhaṃ vipariṇāmadhammaṃ, kallaṃ nu taṃ samanupassituṃ — etaṃ mama, esohamasmi, eso me attāti? No hetaṃ bhante.',
  pronKo: '땅 낑 만냐타 빅카웨, 루-빵 닛짱 와- 아닛짱 와-띠? 아닛짱 반떼. 양 빠나닛짱 둑캉 와- 땅 수캉 와-띠? 둑캉 반떼. 양 빠나닛짱 둑캉 위빠리나-마담망, 깔랑 누 땅 사마누빳시뚱 — 에땅 마마, 에소하맛미, 에소 메 앗따-띠? 노 헤땅 반떼.',
  translation: '비구들이여 어떻게 생각하느냐, 물질은 영원하냐 무상하냐? 무상합니다, 존자시여. 무상한 것은 괴로운가 즐거운가? 괴로움입니다, 존자시여. 무상하고 괴롭고 변하는 것을 "이것은 나의 것, 이것은 나, 이것은 나의 자아"라고 보는 것이 합당하냐? 아닙니다, 존자시여.',
  grammarNotes: [
    '문장 구조: 문답 형식 3단 논증. ①상/무상 택일 ②고/락 택일 ③삼상 정형구로 결론',
    '핵심 문법: "Taṃ kiṃ maññatha"는 경전 정형 의문구. kallaṃ nu는 수사 의문(합당한가→합당하지 않다)',
    '복합어: vipariṇāmadhammaṃ = vipariṇāma(변화) + dhamma(성질), samanupassituṃ = sam+anu+passati 부정사',
    '삼상 정형구: "etaṃ mama(갈애), esohamasmi(만), eso me attā(사견)" — 세 가지 집착 방식',
  ],
}

export const VERSE_7_WORDS: VerseWord[] = [
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
  { pali: 'esohamasmi', pronKo: '에소하맛미', meaning: '이것은 나이다', grammar: 'eso + aham + asmi (연성)', important: true },
  { pali: 'eso', pronKo: '에소', meaning: '이것은', grammar: '지시대명사 남성 단수 주격' },
  { pali: 'attāti', pronKo: '앗따-띠', meaning: '자아이다 + 라고', grammar: 'attā + iti (연성)' },
  { pali: 'No', pronKo: '노', meaning: '아니다', grammar: '불변어(부정사)' },
  { pali: 'hetaṃ', pronKo: '헤땅', meaning: '참으로 이것은', grammar: 'hi + etaṃ (연성, 강조)' },
]

// ── 제8단락: 수온 질문 ──

export const VERSE_8 = {
  pali: 'Taṃ kiṃ maññatha bhikkhave, vedanā niccā vā aniccā vāti? Aniccā bhante. Yaṃ panāniccaṃ dukkhaṃ vā taṃ sukhaṃ vāti? Dukkhaṃ bhante. Yaṃ panāniccaṃ dukkhaṃ vipariṇāmadhammaṃ, kallaṃ nu taṃ samanupassituṃ — etaṃ mama, esohamasmi, eso me attāti? No hetaṃ bhante.',
  pronKo: '땅 낑 만냐타 빅카웨, 웨다나- 닛짜- 와- 아닛짜- 와-띠? 아닛짜- 반떼. 양 빠나닛짱 둑캉 와- 땅 수캉 와-띠? 둑캉 반떼. 양 빠나닛짱 둑캉 위빠리나-마담망, 깔랑 누 땅 사마누빳시뚱 — 에땅 마마, 에소하맛미, 에소 메 앗따-띠? 노 헤땅 반떼.',
  translation: '비구들이여 어떻게 생각하느냐, 느낌은 영원하냐 무상하냐? 무상합니다, 존자시여. 무상한 것은 괴로운가 즐거운가? 괴로움입니다, 존자시여. 무상하고 괴롭고 변하는 것을 "이것은 나의 것, 이것은 나, 이것은 나의 자아"라고 보는 것이 합당하냐? 아닙니다, 존자시여.',
  grammarNotes: [
    '색온 질문(제7단락)과 동일한 구문 패턴. vedanā(여성)로 대체',
    '핵심 차이: niccaṃ(중성) → niccā(여성), aniccaṃ → aniccā. 여성 명사에 맞춰 형용사 어미 변화',
  ],
}

export const VERSE_8_WORDS: VerseWord[] = [
  { pali: 'Taṃ', pronKo: '땅', meaning: '그것을', grammar: '지시대명사 중성 단수 대격' },
  { pali: 'kiṃ', pronKo: '낑', meaning: '무엇을/어떻게', grammar: '의문대명사 중성 단수 대격' },
  { pali: 'maññatha', pronKo: '만냐타', meaning: '생각하느냐', grammar: '현재 2인칭 복수 (maññati)' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'vedanā', pronKo: '웨다나-', meaning: '느낌/수(受)', grammar: '여성 단수 주격', important: true },
  { pali: 'niccā', pronKo: '닛짜-', meaning: '영원한(여성형)', grammar: '형용사 여성 단수 주격' },
  { pali: 'vā', pronKo: '와-', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'aniccā', pronKo: '아닛짜-', meaning: '무상한(여성형)', grammar: '형용사 여성 단수 주격 (an + nicca)', important: true },
  { pali: 'ti', pronKo: '띠', meaning: '~라고 (인용)', grammar: '불변어(인용사, iti의 줄임)' },
  { pali: 'bhante', pronKo: '반떼', meaning: '존자시여', grammar: '호격 (공경어)' },
  { pali: 'Yaṃ', pronKo: '양', meaning: '~하는 것은', grammar: '관계대명사 중성 단수 주격' },
  { pali: 'panāniccaṃ', pronKo: '빠나닛짱', meaning: '그런데 무상한 것은', grammar: 'pana(그런데) + aniccaṃ (연성)' },
  { pali: 'dukkhaṃ', pronKo: '둑캉', meaning: '괴로움/고(苦)', grammar: '중성 단수 주격' },
  { pali: 'sukhaṃ', pronKo: '수캉', meaning: '즐거움/행복', grammar: '중성 단수 주격' },
  { pali: 'vipariṇāmadhammaṃ', pronKo: '위빠리나-마담망', meaning: '변하는 성질의', grammar: '형용사 중성 단수 주격 (vipariṇāma + dhamma)' },
  { pali: 'kallaṃ', pronKo: '깔랑', meaning: '합당한/적절한', grammar: '형용사 중성 단수 주격' },
  { pali: 'nu', pronKo: '누', meaning: '과연 ~인가', grammar: '불변어(의문사)' },
  { pali: 'samanupassituṃ', pronKo: '사마누빳시뚱', meaning: '~라고 보기에', grammar: '부정사 (sam + anu + passati)' },
  { pali: 'etaṃ', pronKo: '에땅', meaning: '이것은', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'mama', pronKo: '마마', meaning: '나의 것', grammar: '1인칭 단수 속격' },
  { pali: 'esohamasmi', pronKo: '에소하맛미', meaning: '이것은 나이다', grammar: 'eso + aham + asmi (연성)' },
  { pali: 'eso', pronKo: '에소', meaning: '이것은', grammar: '지시대명사 남성 단수 주격' },
  { pali: 'me', pronKo: '메', meaning: '나의', grammar: '1인칭 단수 속격' },
  { pali: 'attāti', pronKo: '앗따-띠', meaning: '자아이다 + 라고', grammar: 'attā + iti (연성)' },
  { pali: 'No', pronKo: '노', meaning: '아니다', grammar: '불변어(부정사)' },
  { pali: 'hetaṃ', pronKo: '헤땅', meaning: '참으로 이것은', grammar: 'hi + etaṃ (연성, 강조)' },
]

// ── 제9단락: 상온 질문 ──

export const VERSE_9 = {
  pali: 'Taṃ kiṃ maññatha bhikkhave, saññā niccā vā aniccā vāti? Aniccā bhante. Yaṃ panāniccaṃ dukkhaṃ vā taṃ sukhaṃ vāti? Dukkhaṃ bhante. Yaṃ panāniccaṃ dukkhaṃ vipariṇāmadhammaṃ, kallaṃ nu taṃ samanupassituṃ — etaṃ mama, esohamasmi, eso me attāti? No hetaṃ bhante.',
  pronKo: '땅 낑 만냐타 빅카웨, 산냐- 닛짜- 와- 아닛짜- 와-띠? 아닛짜- 반떼. 양 빠나닛짱 둑캉 와- 땅 수캉 와-띠? 둑캉 반떼. 양 빠나닛짱 둑캉 위빠리나-마담망, 깔랑 누 땅 사마누빳시뚱 — 에땅 마마, 에소하맛미, 에소 메 앗따-띠? 노 헤땅 반떼.',
  translation: '비구들이여 어떻게 생각하느냐, 인식은 영원하냐 무상하냐? 무상합니다, 존자시여. 무상하고 괴롭고 변하는 것을 "이것은 나의 것, 이것은 나, 이것은 나의 자아"라고 보는 것이 합당하냐? 아닙니다, 존자시여.',
  grammarNotes: [
    '색온 질문(제7단락)과 동일한 구문 패턴. saññā(여성)로 대체',
    '수온 질문(제8단락)과 동일하게 niccā/aniccā 여성형 사용',
  ],
}

export const VERSE_9_WORDS: VerseWord[] = [
  { pali: 'Taṃ', pronKo: '땅', meaning: '그것을', grammar: '지시대명사 중성 단수 대격' },
  { pali: 'kiṃ', pronKo: '낑', meaning: '무엇을/어떻게', grammar: '의문대명사 중성 단수 대격' },
  { pali: 'maññatha', pronKo: '만냐타', meaning: '생각하느냐', grammar: '현재 2인칭 복수 (maññati)' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'saññā', pronKo: '산냐-', meaning: '인식/상(想)', grammar: '여성 단수 주격', important: true },
  { pali: 'niccā', pronKo: '닛짜-', meaning: '영원한(여성형)', grammar: '형용사 여성 단수 주격' },
  { pali: 'vā', pronKo: '와-', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'aniccā', pronKo: '아닛짜-', meaning: '무상한(여성형)', grammar: '형용사 여성 단수 주격 (an + nicca)', important: true },
  { pali: 'ti', pronKo: '띠', meaning: '~라고 (인용)', grammar: '불변어(인용사, iti의 줄임)' },
  { pali: 'bhante', pronKo: '반떼', meaning: '존자시여', grammar: '호격 (공경어)' },
  { pali: 'Yaṃ', pronKo: '양', meaning: '~하는 것은', grammar: '관계대명사 중성 단수 주격' },
  { pali: 'panāniccaṃ', pronKo: '빠나닛짱', meaning: '그런데 무상한 것은', grammar: 'pana(그런데) + aniccaṃ (연성)' },
  { pali: 'dukkhaṃ', pronKo: '둑캉', meaning: '괴로움/고(苦)', grammar: '중성 단수 주격' },
  { pali: 'sukhaṃ', pronKo: '수캉', meaning: '즐거움/행복', grammar: '중성 단수 주격' },
  { pali: 'vipariṇāmadhammaṃ', pronKo: '위빠리나-마담망', meaning: '변하는 성질의', grammar: '형용사 중성 단수 주격 (vipariṇāma + dhamma)' },
  { pali: 'kallaṃ', pronKo: '깔랑', meaning: '합당한/적절한', grammar: '형용사 중성 단수 주격' },
  { pali: 'nu', pronKo: '누', meaning: '과연 ~인가', grammar: '불변어(의문사)' },
  { pali: 'samanupassituṃ', pronKo: '사마누빳시뚱', meaning: '~라고 보기에', grammar: '부정사 (sam + anu + passati)' },
  { pali: 'etaṃ', pronKo: '에땅', meaning: '이것은', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'mama', pronKo: '마마', meaning: '나의 것', grammar: '1인칭 단수 속격' },
  { pali: 'esohamasmi', pronKo: '에소하맛미', meaning: '이것은 나이다', grammar: 'eso + aham + asmi (연성)' },
  { pali: 'eso', pronKo: '에소', meaning: '이것은', grammar: '지시대명사 남성 단수 주격' },
  { pali: 'me', pronKo: '메', meaning: '나의', grammar: '1인칭 단수 속격' },
  { pali: 'attāti', pronKo: '앗따-띠', meaning: '자아이다 + 라고', grammar: 'attā + iti (연성)' },
  { pali: 'No', pronKo: '노', meaning: '아니다', grammar: '불변어(부정사)' },
  { pali: 'hetaṃ', pronKo: '헤땅', meaning: '참으로 이것은', grammar: 'hi + etaṃ (연성, 강조)' },
]

// ── 제10단락: 행온 질문 ──

export const VERSE_10 = {
  pali: 'Taṃ kiṃ maññatha bhikkhave, saṅkhārā niccā vā aniccā vāti? Aniccā bhante. Yaṃ panāniccaṃ dukkhaṃ vā taṃ sukhaṃ vāti? Dukkhaṃ bhante. Yaṃ panāniccaṃ dukkhaṃ vipariṇāmadhammaṃ, kallaṃ nu taṃ samanupassituṃ — etaṃ mama, esohamasmi, eso me attāti? No hetaṃ bhante.',
  pronKo: '땅 낑 만냐타 빅카웨, 상카-라- 닛짜- 와- 아닛짜- 와-띠? 아닛짜- 반떼. 양 빠나닛짱 둑캉 와- 땅 수캉 와-띠? 둑캉 반떼. 양 빠나닛짱 둑캉 위빠리나-마담망, 깔랑 누 땅 사마누빳시뚱 — 에땅 마마, 에소하맛미, 에소 메 앗따-띠? 노 헤땅 반떼.',
  translation: '비구들이여 어떻게 생각하느냐, 형성들은 영원하냐 무상하냐? 무상합니다, 존자시여. 무상하고 괴롭고 변하는 것을 "이것은 나의 것, 이것은 나, 이것은 나의 자아"라고 보는 것이 합당하냐? 아닙니다, 존자시여.',
  grammarNotes: [
    '색온 질문(제7단락)과 동일한 구문 패턴. saṅkhārā(남성 복수)로 대체',
    '핵심 차이: saṅkhārā는 복수이지만 질문·답변 형식은 동일. niccā/aniccā는 복수 주격과 형태 동일',
  ],
}

export const VERSE_10_WORDS: VerseWord[] = [
  { pali: 'Taṃ', pronKo: '땅', meaning: '그것을', grammar: '지시대명사 중성 단수 대격' },
  { pali: 'kiṃ', pronKo: '낑', meaning: '무엇을/어떻게', grammar: '의문대명사 중성 단수 대격' },
  { pali: 'maññatha', pronKo: '만냐타', meaning: '생각하느냐', grammar: '현재 2인칭 복수 (maññati)' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'saṅkhārā', pronKo: '상카-라-', meaning: '형성들/행(行)', grammar: '남성 복수 주격', important: true },
  { pali: 'niccā', pronKo: '닛짜-', meaning: '영원한(복수형)', grammar: '형용사 복수 주격' },
  { pali: 'vā', pronKo: '와-', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'aniccā', pronKo: '아닛짜-', meaning: '무상한(복수형)', grammar: '형용사 복수 주격 (an + nicca)', important: true },
  { pali: 'ti', pronKo: '띠', meaning: '~라고 (인용)', grammar: '불변어(인용사, iti의 줄임)' },
  { pali: 'bhante', pronKo: '반떼', meaning: '존자시여', grammar: '호격 (공경어)' },
  { pali: 'Yaṃ', pronKo: '양', meaning: '~하는 것은', grammar: '관계대명사 중성 단수 주격' },
  { pali: 'panāniccaṃ', pronKo: '빠나닛짱', meaning: '그런데 무상한 것은', grammar: 'pana(그런데) + aniccaṃ (연성)' },
  { pali: 'dukkhaṃ', pronKo: '둑캉', meaning: '괴로움/고(苦)', grammar: '중성 단수 주격' },
  { pali: 'sukhaṃ', pronKo: '수캉', meaning: '즐거움/행복', grammar: '중성 단수 주격' },
  { pali: 'vipariṇāmadhammaṃ', pronKo: '위빠리나-마담망', meaning: '변하는 성질의', grammar: '형용사 중성 단수 주격 (vipariṇāma + dhamma)' },
  { pali: 'kallaṃ', pronKo: '깔랑', meaning: '합당한/적절한', grammar: '형용사 중성 단수 주격' },
  { pali: 'nu', pronKo: '누', meaning: '과연 ~인가', grammar: '불변어(의문사)' },
  { pali: 'samanupassituṃ', pronKo: '사마누빳시뚱', meaning: '~라고 보기에', grammar: '부정사 (sam + anu + passati)' },
  { pali: 'etaṃ', pronKo: '에땅', meaning: '이것은', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'mama', pronKo: '마마', meaning: '나의 것', grammar: '1인칭 단수 속격' },
  { pali: 'esohamasmi', pronKo: '에소하맛미', meaning: '이것은 나이다', grammar: 'eso + aham + asmi (연성)' },
  { pali: 'eso', pronKo: '에소', meaning: '이것은', grammar: '지시대명사 남성 단수 주격' },
  { pali: 'me', pronKo: '메', meaning: '나의', grammar: '1인칭 단수 속격' },
  { pali: 'attāti', pronKo: '앗따-띠', meaning: '자아이다 + 라고', grammar: 'attā + iti (연성)' },
  { pali: 'No', pronKo: '노', meaning: '아니다', grammar: '불변어(부정사)' },
  { pali: 'hetaṃ', pronKo: '헤땅', meaning: '참으로 이것은', grammar: 'hi + etaṃ (연성, 강조)' },
]

// ── 제11단락: 식온 질문 ──

export const VERSE_11 = {
  pali: 'Taṃ kiṃ maññatha bhikkhave, viññāṇaṃ niccaṃ vā aniccaṃ vāti? Aniccaṃ bhante. Yaṃ panāniccaṃ dukkhaṃ vā taṃ sukhaṃ vāti? Dukkhaṃ bhante. Yaṃ panāniccaṃ dukkhaṃ vipariṇāmadhammaṃ, kallaṃ nu taṃ samanupassituṃ — etaṃ mama, esohamasmi, eso me attāti? No hetaṃ bhante.',
  pronKo: '땅 낑 만냐타 빅카웨, 윈냐-낭 닛짱 와- 아닛짱 와-띠? 아닛짱 반떼. 양 빠나닛짱 둑캉 와- 땅 수캉 와-띠? 둑캉 반떼. 양 빠나닛짱 둑캉 위빠리나-마담망, 깔랑 누 땅 사마누빳시뚱 — 에땅 마마, 에소하맛미, 에소 메 앗따-띠? 노 헤땅 반떼.',
  translation: '비구들이여 어떻게 생각하느냐, 의식은 영원하냐 무상하냐? 무상합니다, 존자시여. 무상하고 괴롭고 변하는 것을 "이것은 나의 것, 이것은 나, 이것은 나의 자아"라고 보는 것이 합당하냐? 아닙니다, 존자시여.',
  grammarNotes: [
    '색온 질문(제7단락)과 동일한 구문 패턴. viññāṇaṃ(중성 단수)로 대체',
    '색온(제7단락)과 동일하게 niccaṃ/aniccaṃ 중성형 사용',
  ],
}

export const VERSE_11_WORDS: VerseWord[] = [
  { pali: 'Taṃ', pronKo: '땅', meaning: '그것을', grammar: '지시대명사 중성 단수 대격' },
  { pali: 'kiṃ', pronKo: '낑', meaning: '무엇을/어떻게', grammar: '의문대명사 중성 단수 대격' },
  { pali: 'maññatha', pronKo: '만냐타', meaning: '생각하느냐', grammar: '현재 2인칭 복수 (maññati)' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'viññāṇaṃ', pronKo: '윈냐-낭', meaning: '의식/식(識)', grammar: '중성 단수 주격', important: true },
  { pali: 'niccaṃ', pronKo: '닛짱', meaning: '영원한/상(常)', grammar: '형용사 중성 단수 주격' },
  { pali: 'vā', pronKo: '와-', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'aniccaṃ', pronKo: '아닛짱', meaning: '무상한', grammar: '형용사 중성 단수 주격 (an + nicca)', important: true },
  { pali: 'ti', pronKo: '띠', meaning: '~라고 (인용)', grammar: '불변어(인용사, iti의 줄임)' },
  { pali: 'bhante', pronKo: '반떼', meaning: '존자시여', grammar: '호격 (공경어)' },
  { pali: 'Yaṃ', pronKo: '양', meaning: '~하는 것은', grammar: '관계대명사 중성 단수 주격' },
  { pali: 'panāniccaṃ', pronKo: '빠나닛짱', meaning: '그런데 무상한 것은', grammar: 'pana(그런데) + aniccaṃ (연성)' },
  { pali: 'dukkhaṃ', pronKo: '둑캉', meaning: '괴로움/고(苦)', grammar: '중성 단수 주격' },
  { pali: 'sukhaṃ', pronKo: '수캉', meaning: '즐거움/행복', grammar: '중성 단수 주격' },
  { pali: 'vipariṇāmadhammaṃ', pronKo: '위빠리나-마담망', meaning: '변하는 성질의', grammar: '형용사 중성 단수 주격 (vipariṇāma + dhamma)' },
  { pali: 'kallaṃ', pronKo: '깔랑', meaning: '합당한/적절한', grammar: '형용사 중성 단수 주격' },
  { pali: 'nu', pronKo: '누', meaning: '과연 ~인가', grammar: '불변어(의문사)' },
  { pali: 'samanupassituṃ', pronKo: '사마누빳시뚱', meaning: '~라고 보기에', grammar: '부정사 (sam + anu + passati)' },
  { pali: 'etaṃ', pronKo: '에땅', meaning: '이것은', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'mama', pronKo: '마마', meaning: '나의 것', grammar: '1인칭 단수 속격' },
  { pali: 'esohamasmi', pronKo: '에소하맛미', meaning: '이것은 나이다', grammar: 'eso + aham + asmi (연성)' },
  { pali: 'eso', pronKo: '에소', meaning: '이것은', grammar: '지시대명사 남성 단수 주격' },
  { pali: 'me', pronKo: '메', meaning: '나의', grammar: '1인칭 단수 속격' },
  { pali: 'attāti', pronKo: '앗따-띠', meaning: '자아이다 + 라고', grammar: 'attā + iti (연성)' },
  { pali: 'No', pronKo: '노', meaning: '아니다', grammar: '불변어(부정사)' },
  { pali: 'hetaṃ', pronKo: '헤땅', meaning: '참으로 이것은', grammar: 'hi + etaṃ (연성, 강조)' },
]

// ── 제12단락: 결론 — "있는 그대로 바른 지혜로 보아야 한다" ──

export const VERSE_12 = {
  pali: 'Tasmātiha bhikkhave yaṃ kiñci rūpaṃ atītānāgatapaccuppannaṃ ajjhattaṃ vā bahiddhā vā oḷārikaṃ vā sukhumaṃ vā hīnaṃ vā paṇītaṃ vā yaṃ dūre santike vā, sabbaṃ rūpaṃ — netaṃ mama, nesohamasmi, na meso attāti evametaṃ yathābhūtaṃ sammappaññāya daṭṭhabbaṃ. Yā kāci vedanā atītānāgatapaccuppannā ajjhattā vā bahiddhā vā oḷārikā vā sukhumā vā hīnā vā paṇītā vā yā dūre santike vā, sabbā vedanā — netaṃ mama, nesohamasmi, na meso attāti evametaṃ yathābhūtaṃ sammappaññāya daṭṭhabbaṃ. Yā kāci saññā atītānāgatapaccuppannā ajjhattā vā bahiddhā vā oḷārikā vā sukhumā vā hīnā vā paṇītā vā yā dūre santike vā, sabbā saññā — netaṃ mama, nesohamasmi, na meso attāti evametaṃ yathābhūtaṃ sammappaññāya daṭṭhabbaṃ. Ye keci saṅkhārā atītānāgatapaccuppannā ajjhattā vā bahiddhā vā oḷārikā vā sukhumā vā hīnā vā paṇītā vā ye dūre santike vā, sabbe saṅkhārā — netaṃ mama, nesohamasmi, na meso attāti evametaṃ yathābhūtaṃ sammappaññāya daṭṭhabbaṃ. Yaṃ kiñci viññāṇaṃ atītānāgatapaccuppannaṃ ajjhattaṃ vā bahiddhā vā oḷārikaṃ vā sukhumaṃ vā hīnaṃ vā paṇītaṃ vā yaṃ dūre santike vā, sabbaṃ viññāṇaṃ — netaṃ mama, nesohamasmi, na meso attāti evametaṃ yathābhūtaṃ sammappaññāya daṭṭhabbaṃ.',
  pronKo: '따스마-띠하 빅카웨 양 긴찌 루-빵 아띠-따-나-가따빳쭙빤낭 앗잫딴 와- 바힛다- 와- 올라-리깡 와- 수쿠망 와- 히-낭 와- 빠니-땅 와- 양 두-레 산띠게 와-, 삽방 루-빵 — 네땅 마마, 네소하맛미, 나 메소 앗따-띠 에와메땅 야타-부-땅 삼맙빤냐-야 닷타방. 야- 가-찌 웨다나- 아띠-따-나-가따빳쭙빤나- 앗잫따- 와- 바힛다- 와- 올라-리까- 와- 수쿠마- 와- 히-나- 와- 빠니-따- 와- 야- 두-레 산띠게 와-, 삽바- 웨다나- — 네땅 마마, 네소하맛미, 나 메소 앗따-띠 에와메땅 야타-부-땅 삼맙빤냐-야 닷타방. 야- 가-찌 산냐- … 삽바- 산냐- — … 닷타방. 예 게찌 상카-라- … 삽베 상카-라- — … 닷타방. 양 긴찌 윈냐-낭 … 삽방 윈냐-낭 — … 닷타방.',
  translation: '그러므로 비구들이여, 과거·미래·현재의, 안의·밖의, 거친·미세한, 열등한·수승한, 먼·가까운, 모든 물질을 "이것은 나의 것이 아니다, 이것은 내가 아니다, 이것은 나의 자아가 아니다"라고 있는 그대로 바른 지혜로 보아야 한다. 모든 느낌을... 모든 인식을... 모든 형성들을... 모든 의식을... 있는 그대로 바른 지혜로 보아야 한다.',
  grammarNotes: [
    '문장 구조: 5온 각각에 11종 분류(시간3+내외2+조세2+열수2+원근2) 적용 후 삼상 부정 정형구',
    '핵심 문법: "netaṃ mama, nesohamasmi, na meso attā" — 제7단락의 삼상 정형구를 부정형으로 전환',
    '복합어: atītānāgatapaccuppannaṃ = atīta(과거)+anāgata(미래)+paccuppanna(현재), yathābhūtaṃ = yathā(~대로)+bhūta(있는), sammappaññāya = sammā(바른)+paññā(지혜) 구격',
    '성·수 변화: 5온의 성에 따라 관계대명사·형용사 어미 변화 — yaṃ/yā/ye, sabbaṃ/sabbā/sabbe',
    'daṭṭhabbaṃ = dassati(보다)의 미래수동분사(의무형). "보아야 한다"',
  ],
}

export const VERSE_12_WORDS: VerseWord[] = [
  { pali: 'Tasmātiha', pronKo: '따스마-띠하', meaning: '그러므로 여기서', grammar: 'tasmā(그러므로) + iha(여기서)' },
  { pali: 'kiñci', pronKo: '긴찌', meaning: '어떤 ~이든', grammar: '부정대명사 중성 단수 주격' },
  { pali: 'atītānāgatapaccuppannaṃ', pronKo: '아띠-따-나-가따빳쭙빤낭', meaning: '과거·미래·현재의', grammar: '복합형용사 중성 단수 주격', important: true },
  { pali: 'ajjhattaṃ', pronKo: '앗잫딴', meaning: '안의/내적인', grammar: '형용사 중성 단수 대격' },
  { pali: 'bahiddhā', pronKo: '바힛다-', meaning: '밖의/외적인', grammar: '불변어(부사)' },
  { pali: 'oḷārikaṃ', pronKo: '올라-리깡', meaning: '거친/조대한', grammar: '형용사 중성 단수 대격' },
  { pali: 'sukhumaṃ', pronKo: '수쿠망', meaning: '미세한/섬세한', grammar: '형용사 중성 단수 대격' },
  { pali: 'hīnaṃ', pronKo: '히-낭', meaning: '열등한/낮은', grammar: '형용사 중성 단수 대격' },
  { pali: 'paṇītaṃ', pronKo: '빠니-땅', meaning: '수승한/뛰어난', grammar: '형용사 중성 단수 대격' },
  { pali: 'dūre', pronKo: '두-레', meaning: '먼 곳에', grammar: '중성 단수 처격 (dūra)' },
  { pali: 'santike', pronKo: '산띠게', meaning: '가까운 곳에', grammar: '중성 단수 처격 (santika)' },
  { pali: 'sabbaṃ', pronKo: '삽방', meaning: '모든', grammar: '형용사 중성 단수 주격' },
  { pali: 'netaṃ', pronKo: '네땅', meaning: '이것은 ~아니다', grammar: 'na + etaṃ (연성)', important: true },
  { pali: 'nesohamasmi', pronKo: '네소하맛미', meaning: '이것은 내가 아니다', grammar: 'na + eso + aham + asmi (연성)', important: true },
  { pali: 'meso', pronKo: '메소', meaning: '나의 이것', grammar: 'me + eso (연성)' },
  { pali: 'evametaṃ', pronKo: '에와메땅', meaning: '이와 같이 이것을', grammar: 'evaṃ + etaṃ (연성)' },
  { pali: 'yathābhūtaṃ', pronKo: '야타-부-땅', meaning: '있는 그대로', grammar: '부사 (yathā + bhūta)', important: true },
  { pali: 'sammappaññāya', pronKo: '삼맙빤냐-야', meaning: '바른 지혜로', grammar: '여성 단수 구격 (sammā + paññā)', important: true },
  { pali: 'daṭṭhabbaṃ', pronKo: '닷타방', meaning: '보아야 한다', grammar: '미래수동분사 (dassati)', important: true },
]

// ── 제13단락: 해탈 선언 ──

export const VERSE_13 = {
  pali: 'Evaṃ passaṃ bhikkhave sutavā ariyasāvako rūpasmimpi nibbindati, vedanāyapi nibbindati, saññāyapi nibbindati, saṅkhāresupi nibbindati, viññāṇasmimpi nibbindati. Nibbindaṃ virajjati; virāgā vimuccati. Vimuttasmiṃ vimuttamiti ñāṇaṃ hoti. Khīṇā jāti, vusitaṃ brahmacariyaṃ, kataṃ karaṇīyaṃ, nāparaṃ itthattāyāti pajānāti.',
  pronKo: '에왕 빳상 빅카웨 수따와- 아리야사-와꼬 루-빠스밈삐 닙빈다띠, 웨다나-야삐 닙빈다띠, 산냐-야삐 닙빈다띠, 상카-레수삐 닙빈다띠, 윈냐-나스밈삐 닙빈다띠. 닙빈당 위랏자띠; 위라-가- 위뭇짜띠. 위뭇따스밍 위뭇따미띠 냐-낭 호띠. 키-나- 자-띠, 우시땅 브라흐마짜리양, 까땅 까라니-양, 나-빠랑 잇탓따-야-띠 빠자-나띠.',
  translation: '이와 같이 보는 비구들이여, 배운 성스러운 제자는 물질에도 염오하고, 느낌에도 염오하고, 인식에도 염오하고, 형성들에도 염오하고, 의식에도 염오한다. 염오하여 이욕하고, 이욕으로 해탈한다. 해탈하면 "해탈했다"는 지혜가 생긴다. 태어남은 다했고, 청정한 삶을 살았고, 해야 할 것을 했고, 더 이상 이런 상태로 돌아오지 않는다고 안다.',
  grammarNotes: [
    '문장 구조: ①분사구문(Evaṃ passaṃ) → 염오(5온 각각) → ②해탈 연쇄 → ③해탈 지혜 → ④아라한과 선언',
    '해탈 연쇄: nibbindati(염오) → virajjati(이욕) → vimuccati(해탈) — 경전 전체 반복 정형구',
    '처격 5온: rūpasmim(중성), vedanāya(여성), saññāya(여성), saṅkhāresu(남성 복수), viññāṇasmim(중성)',
    '아라한과 4구: Khīṇā jāti(태어남 다함), vusitaṃ brahmacariyaṃ(청정행 완성), kataṃ karaṇīyaṃ(할 일 완수), nāparaṃ itthattāya(더 이상 윤회 없음)',
  ],
}

export const VERSE_13_WORDS: VerseWord[] = [
  { pali: 'passaṃ', pronKo: '빳상', meaning: '보면서/관찰하면서', grammar: '현재분사 남성 단수 주격 (passati)' },
  { pali: 'sutavā', pronKo: '수따와-', meaning: '(법을) 들은/배운', grammar: '형용사 남성 단수 주격 (suta + vant)' },
  { pali: 'ariyasāvako', pronKo: '아리야사-와꼬', meaning: '성스러운 제자', grammar: '남성 단수 주격 (ariya + sāvaka)', important: true },
  { pali: 'rūpasmimpi', pronKo: '루-빠스밈삐', meaning: '물질에서도', grammar: '중성 단수 처격 + api' },
  { pali: 'nibbindati', pronKo: '닙빈다띠', meaning: '염오하다/싫어지다', grammar: '현재 3인칭 단수 (nis + vindati)', important: true },
  { pali: 'vedanāyapi', pronKo: '웨다나-야삐', meaning: '느낌에서도', grammar: '여성 단수 처격 + api' },
  { pali: 'saññāyapi', pronKo: '산냐-야삐', meaning: '인식에서도', grammar: '여성 단수 처격 + api' },
  { pali: 'saṅkhāresupi', pronKo: '상카-레수삐', meaning: '형성들에서도', grammar: '남성 복수 처격 + api' },
  { pali: 'viññāṇasmimpi', pronKo: '윈냐-나스밈삐', meaning: '의식에서도', grammar: '중성 단수 처격 + api' },
  { pali: 'Nibbindaṃ', pronKo: '닙빈당', meaning: '염오하여', grammar: '현재분사 남성 단수 주격' },
  { pali: 'virajjati', pronKo: '위랏자띠', meaning: '이욕하다', grammar: '현재 3인칭 단수 (vi + rajjati)', important: true },
  { pali: 'virāgā', pronKo: '위라-가-', meaning: '이욕으로/탐욕 여읨으로', grammar: '남성 단수 탈격 (vi + rāga)', important: true },
  { pali: 'vimuccati', pronKo: '위뭇짜띠', meaning: '해탈하다', grammar: '현재 3인칭 단수 (vi + muccati)', important: true },
  { pali: 'Vimuttasmiṃ', pronKo: '위뭇따스밍', meaning: '해탈했을 때', grammar: '과거분사 남성 단수 처격 (절대처격)' },
  { pali: 'vimuttamiti', pronKo: '위뭇따미띠', meaning: '"해탈했다"라고', grammar: 'vimuttam + iti (연성)' },
  { pali: 'ñāṇaṃ', pronKo: '냐-낭', meaning: '지혜/앎', grammar: '중성 단수 주격', important: true },
  { pali: 'hoti', pronKo: '호띠', meaning: '~이다/생기다', grammar: '현재 3인칭 단수 (bhavati)' },
  { pali: 'Khīṇā', pronKo: '키-나-', meaning: '다한/소진된', grammar: '과거분사 여성 단수 주격 (khīyati)', important: true },
  { pali: 'jāti', pronKo: '자-띠', meaning: '태어남/탄생', grammar: '여성 단수 주격', important: true },
  { pali: 'vusitaṃ', pronKo: '우시땅', meaning: '살아온/완성된', grammar: '과거분사 중성 단수 주격 (vasati)' },
  { pali: 'brahmacariyaṃ', pronKo: '브라흐마짜리양', meaning: '청정한 삶/범행', grammar: '중성 단수 주격 (brahma + cariya)', important: true },
  { pali: 'kataṃ', pronKo: '까땅', meaning: '행해진/완수된', grammar: '과거분사 중성 단수 주격 (karoti)' },
  { pali: 'karaṇīyaṃ', pronKo: '까라니-양', meaning: '해야 할 것', grammar: '미래수동분사 중성 단수 주격 (karoti)' },
  { pali: 'nāparaṃ', pronKo: '나-빠랑', meaning: '더 이상 ~없다', grammar: 'na + aparaṃ(다른 것) (연성)' },
  { pali: 'itthattāyāti', pronKo: '잇탓따-야-띠', meaning: '이런 상태로 + 라고', grammar: 'itthattāya(여격) + iti (연성)' },
  { pali: 'pajānāti', pronKo: '빠자-나띠', meaning: '분명히 안다', grammar: '현재 3인칭 단수 (pa + jānāti)', important: true },
]

// ── 제14단락: 결미(結尾) ──

export const VERSE_14 = {
  pali: 'Idamavoca bhagavā. Attamanā pañcavaggiyā bhikkhū bhagavato bhāsitaṃ abhinandunti. Imasmiñca pana veyyākaraṇasmiṃ bhaññamāne pañcavaggiyānaṃ bhikkhūnaṃ anupādāya āsavehi cittāni vimucciṃsūti.',
  pronKo: '이다마워짜 바가와-. 앗따마나- 빤짜왁기야- 빅쿠- 바가와또 바-시땅 아비난둔띠. 이마스민짜 빠나 웨이야-까라나스밍 반냐마-네 빤짜왁기야-낭 빅쿠-낭 아누빠-다-야 아-사웨히 짓따-니 위뭇찐수-띠.',
  translation: '세존께서 이와 같이 말씀하셨다. 다섯 비구는 기뻐하며 세존의 말씀을 환영하였다. 이 가르침이 설해졌을 때 다섯 비구의 마음은 집착 없이 번뇌로부터 해탈하였다.',
  grammarNotes: [
    '문장 구조: ①결어 정형구(Idamavoca) ②청중 반응(abhinandun) ③해탈 선언(vimucciṃsu)',
    '핵심 문법: bhaññamāne = 현재수동분사 처격("설해지고 있을 때"), anupādāya = 절대용법("집착 없이"), āsavehi = 구격 복수("번뇌로부터")',
    '연성: Idamavoca = Idaṃ + avoca, Imasmiñca = Imasmiṃ + ca, vimucciṃsūti = vimucciṃsu + iti',
  ],
}

export const VERSE_14_WORDS: VerseWord[] = [
  { pali: 'Idamavoca', pronKo: '이다마워짜', meaning: '이것을 말씀하셨다', grammar: 'Idaṃ + avoca (과거 3인칭 단수, vacati)' },
  { pali: 'Attamanā', pronKo: '앗따마나-', meaning: '기뻐하는/만족한', grammar: '형용사 남성 복수 주격' },
  { pali: 'pañcavaggiyā', pronKo: '빤짜왁기야-', meaning: '다섯 무리의', grammar: '형용사 남성 복수 주격' },
  { pali: 'bhāsitaṃ', pronKo: '바-시땅', meaning: '말씀/법문', grammar: '과거분사 중성 단수 대격 (bhāsati)' },
  { pali: 'abhinandunti', pronKo: '아비난둔띠', meaning: '환영하였다 + 라고', grammar: '과거 3인칭 복수 + iti (abhinandati)' },
  { pali: 'Imasmiñca', pronKo: '이마스민짜', meaning: '이것에서 + 그리고', grammar: 'Imasmiṃ(처격) + ca (연성)' },
  { pali: 'pana', pronKo: '빠나', meaning: '그런데/또한', grammar: '불변어(접속사)' },
  { pali: 'veyyākaraṇasmiṃ', pronKo: '웨이야-까라나스밍', meaning: '설명/해설에서', grammar: '중성 단수 처격' },
  { pali: 'bhaññamāne', pronKo: '반냐마-네', meaning: '설해지고 있을 때', grammar: '현재수동분사 중성 단수 처격 (bhaṇati)', important: true },
  { pali: 'pañcavaggiyānaṃ', pronKo: '빤짜왁기야-낭', meaning: '다섯 무리의 (속격)', grammar: '형용사 남성 복수 속격' },
  { pali: 'bhikkhūnaṃ', pronKo: '빅쿠-낭', meaning: '비구들의', grammar: '남성 복수 속격' },
  { pali: 'anupādāya', pronKo: '아누빠-다-야', meaning: '집착 없이', grammar: '절대용법 (an + upādāya)', important: true },
  { pali: 'āsavehi', pronKo: '아-사웨히', meaning: '번뇌들로부터', grammar: '남성 복수 구격 (āsava)', important: true },
  { pali: 'cittāni', pronKo: '짓따-니', meaning: '마음들이', grammar: '중성 복수 주격 (citta)' },
  { pali: 'vimucciṃsūti', pronKo: '위뭇찐수-띠', meaning: '해탈하였다 + 라고', grammar: '과거 3인칭 복수 + iti (vimuccati)', important: true },
]

// ── 전체 단락 배열 ──

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
  { id: 'v11', ...VERSE_11, words: VERSE_11_WORDS },
  { id: 'v12', ...VERSE_12, words: VERSE_12_WORDS },
  { id: 'v13', ...VERSE_13, words: VERSE_13_WORDS },
  { id: 'v14', ...VERSE_14, words: VERSE_14_WORDS },
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
