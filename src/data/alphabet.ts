// 빠알리 자모 41자 — 글자 ↔ 발음 매칭 데이터
// 음성학 분류 없이, "이 글자는 이렇게 읽는다"에 집중

import type { PaliLetter } from './types'

// ── 모음 8자 ──
export const VOWELS: PaliLetter[] = [
  { roman: 'a', pronKo: '아', pronDesc: '짧은 "아"', example: 'anicca', examplePronKo: '아닛짜', exampleMeaning: '무상한' },
  { roman: 'ā', pronKo: '아-', pronDesc: '긴 "아" (두 배 길게)', example: 'ānāpāna', examplePronKo: '아-나-빠-나', exampleMeaning: '들숨날숨' },
  { roman: 'i', pronKo: '이', pronDesc: '짧은 "이"', example: 'iti', examplePronKo: '이띠', exampleMeaning: '이와 같이' },
  { roman: 'ī', pronKo: '이-', pronDesc: '긴 "이" (두 배 길게)', example: 'sīla', examplePronKo: '시-라', exampleMeaning: '계율' },
  { roman: 'u', pronKo: '우', pronDesc: '짧은 "우"', example: 'uttama', examplePronKo: '욷따마', exampleMeaning: '최상의' },
  { roman: 'ū', pronKo: '우-', pronDesc: '긴 "우" (두 배 길게)', example: 'rūpa', examplePronKo: '루-빠', exampleMeaning: '물질/형상' },
  { roman: 'e', pronKo: '에', pronDesc: '항상 긴 "에"', example: 'evaṃ', examplePronKo: '에왕', exampleMeaning: '이와 같이' },
  { roman: 'o', pronKo: '오', pronDesc: '항상 긴 "오"', example: 'okāsa', examplePronKo: '오까-사', exampleMeaning: '기회/허락' },
]

// ── 자음 33자 ──

// 후음
export const GUTTURALS: PaliLetter[] = [
  { roman: 'k', pronKo: '까', pronDesc: '된소리 "까"', example: 'kamma', examplePronKo: '깜마', exampleMeaning: '업' },
  { roman: 'kh', pronKo: '카', pronDesc: '거센소리 "카"', example: 'khanti', examplePronKo: '칸띠', exampleMeaning: '인내' },
  { roman: 'g', pronKo: '가', pronDesc: '"가"', example: 'gāma', examplePronKo: '가-마', exampleMeaning: '마을' },
  { roman: 'gh', pronKo: '가(h)', pronDesc: '숨 섞인 "가"', example: 'ghara', examplePronKo: '가라', exampleMeaning: '집' },
  { roman: 'ṅ', pronKo: '응아', pronDesc: '"ng" 소리 (강의 "ㅇ")', example: 'saṅgha', examplePronKo: '상가', exampleMeaning: '승가' },
]

// 구개음
export const PALATALS: PaliLetter[] = [
  { roman: 'c', pronKo: '짜', pronDesc: '된소리 "짜"', example: 'citta', examplePronKo: '찟따', exampleMeaning: '마음' },
  { roman: 'ch', pronKo: '차', pronDesc: '거센소리 "차"', example: 'chanda', examplePronKo: '찬다', exampleMeaning: '의욕' },
  { roman: 'j', pronKo: '자', pronDesc: '"자"', example: 'jīvita', examplePronKo: '지-위따', exampleMeaning: '생명' },
  { roman: 'jh', pronKo: '자(h)', pronDesc: '숨 섞인 "자"', example: 'jhāna', examplePronKo: '자-나', exampleMeaning: '선정' },
  { roman: 'ñ', pronKo: '냐', pronDesc: '"냐" (스페인어 ñ)', example: 'paññā', examplePronKo: '빤냐-', exampleMeaning: '지혜' },
]

// 권설음
export const RETROFLEX: PaliLetter[] = [
  { roman: 'ṭ', pronKo: '따', pronDesc: '혀를 말아 "따"', example: 'ṭhāna', examplePronKo: '타-나', exampleMeaning: '자리/장소' },
  { roman: 'ṭh', pronKo: '타', pronDesc: '혀를 말아 "타"', example: 'kaṭṭha', examplePronKo: '깟타', exampleMeaning: '나무' },
  { roman: 'ḍ', pronKo: '다', pronDesc: '혀를 말아 "다"', example: 'daṇḍa', examplePronKo: '단다', exampleMeaning: '막대기' },
  { roman: 'ḍh', pronKo: '다(h)', pronDesc: '혀를 말아 숨 섞인 "다"', example: 'viḍḍha', examplePronKo: '윋다', exampleMeaning: '꿰뚫린' },
  { roman: 'ṇ', pronKo: '나', pronDesc: '혀를 말아 "나"', example: 'guṇa', examplePronKo: '구나', exampleMeaning: '덕/성질' },
]

// 치음
export const DENTALS: PaliLetter[] = [
  { roman: 't', pronKo: '따', pronDesc: '이에 혀 대고 "따"', example: 'tathā', examplePronKo: '따타-', exampleMeaning: '그와 같이' },
  { roman: 'th', pronKo: '타', pronDesc: '이에 혀 대고 "타"', example: 'thera', examplePronKo: '테라', exampleMeaning: '장로' },
  { roman: 'd', pronKo: '다', pronDesc: '이에 혀 대고 "다"', example: 'dāna', examplePronKo: '다-나', exampleMeaning: '보시' },
  { roman: 'dh', pronKo: '다(h)', pronDesc: '이에 혀 대고 숨 섞인 "다"', example: 'dhamma', examplePronKo: '담마', exampleMeaning: '법' },
  { roman: 'n', pronKo: '나', pronDesc: '"나"', example: 'nibbāna', examplePronKo: '닙바-나', exampleMeaning: '열반' },
]

// 순음
export const LABIALS: PaliLetter[] = [
  { roman: 'p', pronKo: '빠', pronDesc: '된소리 "빠"', example: 'pāli', examplePronKo: '빠-리', exampleMeaning: '빠알리(경전 언어)' },
  { roman: 'ph', pronKo: '파', pronDesc: '거센소리 "파"', example: 'phala', examplePronKo: '팔라', exampleMeaning: '열매/과' },
  { roman: 'b', pronKo: '바', pronDesc: '"바"', example: 'buddha', examplePronKo: '붓다', exampleMeaning: '깨달은 자' },
  { roman: 'bh', pronKo: '바(h)', pronDesc: '숨 섞인 "바"', example: 'bhikkhu', examplePronKo: '빅쿠', exampleMeaning: '비구' },
  { roman: 'm', pronKo: '마', pronDesc: '"마"', example: 'magga', examplePronKo: '맛가', exampleMeaning: '길/도' },
]

// 기타 자음
export const OTHERS: PaliLetter[] = [
  { roman: 'y', pronKo: '야', pronDesc: '"야"', example: 'yāna', examplePronKo: '야-나', exampleMeaning: '탈것/수레' },
  { roman: 'r', pronKo: '라', pronDesc: '"라" (혀를 굴리지 않음)', example: 'rāja', examplePronKo: '라-자', exampleMeaning: '왕' },
  { roman: 'l', pronKo: '라', pronDesc: '"라" (혀끝이 윗잇몸)', example: 'loka', examplePronKo: '로까', exampleMeaning: '세계' },
  { roman: 'v', pronKo: '와', pronDesc: '"와" (v보다 w에 가까움)', example: 'vāda', examplePronKo: '와-다', exampleMeaning: '말/주장' },
  { roman: 's', pronKo: '사', pronDesc: '"사"', example: 'sutta', examplePronKo: '숫따', exampleMeaning: '경전' },
  { roman: 'h', pronKo: '하', pronDesc: '"하"', example: 'hetu', examplePronKo: '헤뚜', exampleMeaning: '원인' },
  { roman: 'ḷ', pronKo: '라', pronDesc: '혀를 말아 "라"', example: 'kaḷīra', examplePronKo: '깔리-라', exampleMeaning: '새싹' },
  { roman: 'ṃ', pronKo: '응', pronDesc: '콧소리 "ㅇ" (niggahīta)', example: 'evaṃ', examplePronKo: '에왕', exampleMeaning: '이와 같이' },
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
