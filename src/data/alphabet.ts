// 빠알리 자모 41자 — 글자 ↔ 발음 매칭 데이터
// 예시 단어는 모두 행복경(Maṅgala Sutta) 원문에서 가져옴

import type { PaliLetter } from './types'

// ── 모음 8자 ──
export const VOWELS: PaliLetter[] = [
  { roman: 'a', pronKo: '아', pronDesc: '짧은 "아"', example: 'acintayuṃ', examplePronKo: '아찐따융', exampleMeaning: '생각했다 (행복경)' },
  { roman: 'ā', pronKo: '아-', pronDesc: '긴 "아" (두 배 길게)', example: 'ārāme', examplePronKo: '아-라-메', exampleMeaning: '동산에서 (행복경)' },
  { roman: 'i', pronKo: '이', pronDesc: '짧은 "이"', example: 'iti', examplePronKo: '이띠', exampleMeaning: '이와 같이' },
  { roman: 'ī', pronKo: '이-', pronDesc: '긴 "이" (두 배 길게)', example: 'sīla', examplePronKo: '시-라', exampleMeaning: '계율' },
  { roman: 'u', pronKo: '우', pronDesc: '짧은 "우"', example: 'uttamaṃ', examplePronKo: '욷따망', exampleMeaning: '최상의 (행복경)' },
  { roman: 'ū', pronKo: '우-', pronDesc: '긴 "우" (두 배 길게)', example: 'pūjā', examplePronKo: '뿌-자-', exampleMeaning: '공양 (행복경)' },
  { roman: 'e', pronKo: '에', pronDesc: '항상 긴 "에"', example: 'evaṃ', examplePronKo: '에왕', exampleMeaning: '이와 같이 (행복경)' },
  { roman: 'o', pronKo: '오', pronDesc: '항상 긴 "오"', example: 'okāsa', examplePronKo: '오까-사', exampleMeaning: '기회/허락' },
]

// ── 자음 33자 (예시 모두 행복경 원문) ──

// 후음
export const GUTTURALS: PaliLetter[] = [
  { roman: 'k', pronKo: '까', pronDesc: '된소리 "까"', example: 'kammantā', examplePronKo: '깜만따-', exampleMeaning: '생업들 (행복경)' },
  { roman: 'kh', pronKo: '카', pronDesc: '거센소리 "카"', example: 'khantī', examplePronKo: '칸띠-', exampleMeaning: '인내 (행복경)' },
  { roman: 'g', pronKo: '가', pronDesc: '"가"', example: 'gacchanti', examplePronKo: '갓찬띠', exampleMeaning: '간다 (행복경)' },
  { roman: 'gh', pronKo: '가(h)', pronDesc: '숨 섞인 "가"', example: 'saṅgaho', examplePronKo: '상가호', exampleMeaning: '보살핌 (행복경)' },
  { roman: 'ṅ', pronKo: '응아', pronDesc: '"ng" 소리', example: 'maṅgala', examplePronKo: '망갈라', exampleMeaning: '행복/길상 (행복경)' },
]

// 구개음
export const PALATALS: PaliLetter[] = [
  { roman: 'c', pronKo: '짜', pronDesc: '된소리 "짜"', example: 'ca', examplePronKo: '짜', exampleMeaning: '그리고 (행복경)' },
  { roman: 'ch', pronKo: '차', pronDesc: '거센소리 "차"', example: 'dhammacariyā', examplePronKo: '담마짜리야-', exampleMeaning: '법다운 행동 (행복경)' },
  { roman: 'j', pronKo: '자', pronDesc: '"자"', example: 'Jetavane', examplePronKo: '제따와네', exampleMeaning: '제따와나에서 (행복경)' },
  { roman: 'jh', pronKo: '자(h)', pronDesc: '숨 섞인 "자"', example: 'jhāna', examplePronKo: '자-나', exampleMeaning: '선정' },
  { roman: 'ñ', pronKo: '냐', pronDesc: '"냐"', example: 'kataññutā', examplePronKo: '까딴누따-', exampleMeaning: '감사함 (행복경)' },
]

// 권설음
export const RETROFLEX: PaliLetter[] = [
  { roman: 'ṭ', pronKo: '따', pronDesc: '혀를 말아 "따"', example: 'upaṭṭhānaṃ', examplePronKo: '우빳타-낭', exampleMeaning: '봉양 (행복경)' },
  { roman: 'ṭh', pronKo: '타', pronDesc: '혀를 말아 "타"', example: 'santuṭṭhī', examplePronKo: '산뚯티-', exampleMeaning: '만족 (행복경)' },
  { roman: 'ḍ', pronKo: '다', pronDesc: '혀를 말아 "다"', example: 'paṇḍitānaṃ', examplePronKo: '빤디따-낭', exampleMeaning: '현명한 이들의 (행복경)' },
  { roman: 'ḍh', pronKo: '다(h)', pronDesc: '혀를 말아 숨 섞인 "다"', example: 'viḍḍha', examplePronKo: '윋다', exampleMeaning: '꿰뚫린' },
  { roman: 'ṇ', pronKo: '나', pronDesc: '혀를 말아 "나"', example: 'Anāthapiṇḍikassa', examplePronKo: '아나-타삔디깟사', exampleMeaning: '아나타삔디까의 (행복경)' },
]

// 치음
export const DENTALS: PaliLetter[] = [
  { roman: 't', pronKo: '따', pronDesc: '이에 혀 대고 "따"', example: 'tapo', examplePronKo: '따뽀', exampleMeaning: '고행 (행복경)' },
  { roman: 'th', pronKo: '타', pronDesc: '이에 혀 대고 "타"', example: 'sotthānaṃ', examplePronKo: '솟타-낭', exampleMeaning: '안녕을 (행복경)' },
  { roman: 'd', pronKo: '다', pronDesc: '이에 혀 대고 "다"', example: 'dānañca', examplePronKo: '다-난짜', exampleMeaning: '보시 (행복경)' },
  { roman: 'dh', pronKo: '다(h)', pronDesc: '이에 혀 대고 숨 섞인 "다"', example: 'dhammesu', examplePronKo: '담메수', exampleMeaning: '법들에서 (행복경)' },
  { roman: 'n', pronKo: '나', pronDesc: '"나"', example: 'nivāto', examplePronKo: '니와-또', exampleMeaning: '겸손 (행복경)' },
]

// 순음
export const LABIALS: PaliLetter[] = [
  { roman: 'p', pronKo: '빠', pronDesc: '된소리 "빠"', example: 'pūjā', examplePronKo: '뿌-자-', exampleMeaning: '공양 (행복경)' },
  { roman: 'ph', pronKo: '파', pronDesc: '거센소리 "파"', example: 'Phuṭṭhassa', examplePronKo: '풋탓사', exampleMeaning: '부딪힌 자의 (행복경)' },
  { roman: 'b', pronKo: '바', pronDesc: '"바"', example: 'Bahū', examplePronKo: '바후-', exampleMeaning: '많은 (행복경)' },
  { roman: 'bh', pronKo: '바(h)', pronDesc: '숨 섞인 "바"', example: 'bhagavā', examplePronKo: '바가와-', exampleMeaning: '세존 (행복경)' },
  { roman: 'm', pronKo: '마', pronDesc: '"마"', example: 'maṅgala', examplePronKo: '망갈라', exampleMeaning: '행복/길상 (행복경)' },
]

// 기타 자음
export const OTHERS: PaliLetter[] = [
  { roman: 'y', pronKo: '야', pronDesc: '"야"', example: 'yassa', examplePronKo: '얏사', exampleMeaning: '~의 (행복경)' },
  { roman: 'r', pronKo: '라', pronDesc: '"라" (혀를 굴리지 않음)', example: 'virajaṃ', examplePronKo: '위라장', exampleMeaning: '티끌 없는 (행복경)' },
  { roman: 'l', pronKo: '라', pronDesc: '"라" (혀끝이 윗잇몸)', example: 'lokadhammehi', examplePronKo: '로까담메히', exampleMeaning: '세상의 법에 의해 (행복경)' },
  { roman: 'v', pronKo: '와', pronDesc: '"와" (v보다 w에 가까움)', example: 'viharati', examplePronKo: '위하라띠', exampleMeaning: '머무시다 (행복경)' },
  { roman: 's', pronKo: '사', pronDesc: '"사"', example: 'sevanā', examplePronKo: '세와나-', exampleMeaning: '가까이함 (행복경)' },
  { roman: 'h', pronKo: '하', pronDesc: '"하"', example: 'brūhi', examplePronKo: '브루-히', exampleMeaning: '말씀해 주소서 (행복경)' },
  { roman: 'ḷ', pronKo: '라', pronDesc: '혀를 말아 "라"', example: 'bāḷhaṃ', examplePronKo: '바-랑', exampleMeaning: '강하게' },
  { roman: 'ṃ', pronKo: '응', pronDesc: '콧소리 "ㅇ" (니가히따)', example: 'evaṃ', examplePronKo: '에왕', exampleMeaning: '이와 같이 (행복경)' },
]

// ── 전체 자음 배열 ──
export const ALL_CONSONANTS: PaliLetter[] = [
  ...GUTTURALS, ...PALATALS, ...RETROFLEX,
  ...DENTALS, ...LABIALS, ...OTHERS,
]

// ── 전체 자모 (모음 + 자음) ──
export const ALL_LETTERS: PaliLetter[] = [
  ...VOWELS, ...ALL_CONSONANTS,
]
