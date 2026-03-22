// 사념처경(Mahāsatipaṭṭhāna Sutta, DN 22) — 서문 + 신념처(Kāyānupassanā) 전문
// 출처: Dīgha Nikāya 22
// 파일 1/2: 서문(VERSE_1~2) + 신념처 6관찰(VERSE_3~16)

import type { VerseWord } from './types'

// ════════════════════════════════════════════════════════════════
// 서문 (Uddesa)
// ════════════════════════════════════════════════════════════════

/** 제1단락: 서문 — 유일한 길 선언 */
export const VERSE_1 = {
  pali: 'Ekāyano ayaṃ bhikkhave maggo sattānaṃ visuddhiyā, sokaparidevānaṃ samatikkamāya, dukkhadomanassānaṃ atthaṅgamāya, ñāyassa adhigamāya, nibbānassa sacchikiriyāya, yadidaṃ cattāro satipaṭṭhānā.',
  pronKo: '에까-야노 아양 빅카웨 맥고 삿따-낭 위숫디야-, 소까빠리데와-낭 사마띡까마-야, 둑카도마낫사-낭 앗탕가마-야, 냐-얏사 아디가마-야, 닙바-낫사 삿치끼리야-야, 야디당 짯따-로 사띠빳타-나-.',
  translation: '비구들이여, 이것은 중생의 청정을 위한 유일한 길이니, 슬픔과 비탄을 극복하기 위하여, 괴로움과 근심을 소멸하기 위하여, 바른 방법을 얻기 위하여, 열반을 실현하기 위하여, 곧 네 가지 새김의 확립이다.',
  grammarNotes: [
    '문장 구조: 「Ekāyano ayaṃ maggo(주어+술어) + 속격 명사 + 여격 목적구 5개 나열 + yadidaṃ cattāro satipaṭṭhānā(동격 보충설명)」',
    '핵심 문법: 여격(-āya)이 목적("~을 위하여")을 나타내는 용법이 5회 반복 — visuddhiyā, samatikkamāya, atthaṅgamāya, adhigamāya, sacchikiriyāya',
    '복합어: sokaparidevānaṃ = soka(슬픔)+parideva(비탄), dukkhadomanassānaṃ = dukkha(고)+domanassa(근심), sacchikiriyāya = sacchi(눈앞에)+kiriyā(실현)',
    '정형구: "Ekāyano ayaṃ maggo"는 사념처경의 대표 선언문. yadidaṃ(yad+idaṃ)은 "곧 이것은"으로 앞 문장을 구체적으로 지시',
  ],
}

export const VERSE_1_WORDS: VerseWord[] = [
  { pali: 'Ekāyano', pronKo: '에까-야노', meaning: '유일한 길인', grammar: '형용사 남성 단수 주격 (eka + ayana)', important: true },
  { pali: 'ayaṃ', pronKo: '아양', meaning: '이것은', grammar: '지시대명사 남성 단수 주격' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'maggo', pronKo: '맥고', meaning: '길/도(道)', grammar: '남성 단수 주격', important: true },
  { pali: 'sattānaṃ', pronKo: '삿따-낭', meaning: '중생들의', grammar: '남성 복수 속격' },
  { pali: 'visuddhiyā', pronKo: '위숫디야-', meaning: '청정을 위해', grammar: '여성 단수 여격 (visuddhi)', important: true },
  { pali: 'sokaparidevānaṃ', pronKo: '소까빠리데와-낭', meaning: '슬픔과 비탄의', grammar: '남성 복수 속격 (soka + parideva)' },
  { pali: 'samatikkamāya', pronKo: '사마띡까마-야', meaning: '극복하기 위해', grammar: '남성 단수 여격 (sam + atikkama)' },
  { pali: 'dukkhadomanassānaṃ', pronKo: '둑카도마낫사-낭', meaning: '괴로움과 근심의', grammar: '중성 복수 속격 (dukkha + domanassa)' },
  { pali: 'atthaṅgamāya', pronKo: '앗탕가마-야', meaning: '소멸을 위해', grammar: '남성 단수 여격 (attha + gama)' },
  { pali: 'ñāyassa', pronKo: '냐-얏사', meaning: '바른 방법의', grammar: '남성 단수 속격' },
  { pali: 'adhigamāya', pronKo: '아디가마-야', meaning: '얻기 위해/도달을 위해', grammar: '남성 단수 여격 (adhi + gama)' },
  { pali: 'nibbānassa', pronKo: '닙바-낫사', meaning: '열반의', grammar: '중성 단수 속격', important: true },
  { pali: 'sacchikiriyāya', pronKo: '삿치끼리야-야', meaning: '실현을 위해', grammar: '여성 단수 여격 (sacchi + kiriyā)' },
  { pali: 'yadidaṃ', pronKo: '야디당', meaning: '곧 이것은', grammar: 'yad(관계대명사) + idaṃ(이것)' },
  { pali: 'cattāro', pronKo: '짯따-로', meaning: '네 가지의', grammar: '수사 남성 복수 주격' },
  { pali: 'satipaṭṭhānā', pronKo: '사띠빳타-나-', meaning: '새김의 확립(念處)', grammar: '남성 복수 주격 (sati + paṭṭhāna)', important: true },
]

/** 제2단락: 사념처 정의 */
export const VERSE_2 = {
  pali: 'Katame cattāro? Idha bhikkhave bhikkhu kāye kāyānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ; vedanāsu vedanānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ; citte cittānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ; dhammesu dhammānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ.',
  pronKo: '까따메 짯따-로? 이다 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠 아-따-삐- 삼빠자-노 사띠마-, 위네이야 로게 아비짜-도마낫상; 웨다나-수 웨다나-누빳시- 위하라띠 아-따-삐- 삼빠자-노 사띠마-, 위네이야 로게 아비짜-도마낫상; 찟떼 찟따-누빳시- 위하라띠 아-따-삐- 삼빠자-노 사띠마-, 위네이야 로게 아비짜-도마낫상; 담메수 담마-누빳시- 위하라띠 아-따-삐- 삼빠자-노 사띠마-, 위네이야 로게 아비짜-도마낫상.',
  translation: '네 가지란 무엇인가? 여기서 비구는 몸에서 몸을 관찰하며 머문다, 열심히, 분명히 알아차리며, 마음챙기며, 세상에 대한 탐욕과 근심을 제거하고; 느낌에서 느낌을 관찰하며 머문다...; 마음에서 마음을 관찰하며 머문다...; 법에서 법을 관찰하며 머문다...',
  grammarNotes: [
    '문장 구조: 질문(Katame cattāro?) + 4개 정형 관찰구 나열. 각 구문은 「처격 + 복합어형용사 + viharati + 3형용사 + 절대분사구」 동일 패턴',
    '핵심 문법: "kāye kāyānupassī"(몸에서 몸을 관찰하는) — 처격+복합어 형용사. ātāpī(정진하는), sampajāno(분명히 아는), satimā(새김 있는) 3형용사',
    '정형구: "ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ"은 사념처 각 관찰에 동일 반복',
    '복합어: kāyānupassī = kāya+anupassin, abhijjhādomanassaṃ = abhijjhā(탐욕)+domanassa(근심)',
  ],
}

export const VERSE_2_WORDS: VerseWord[] = [
  { pali: 'Katame', pronKo: '까따메', meaning: '어떤/무엇인', grammar: '의문대명사 남성 복수 주격' },
  { pali: 'cattāro', pronKo: '짯따-로', meaning: '네 가지', grammar: '수사 남성 복수 주격' },
  { pali: 'Idha', pronKo: '이다', meaning: '여기서', grammar: '불변어(부사)' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'bhikkhu', pronKo: '빅쿠', meaning: '비구는', grammar: '남성 단수 주격' },
  { pali: 'kāye', pronKo: '까-예', meaning: '몸에서', grammar: '남성 단수 처격', important: true },
  { pali: 'kāyānupassī', pronKo: '까-야-누빳시-', meaning: '몸을 관찰하는', grammar: '남성 단수 주격 (kāya + anupassin)', important: true },
  { pali: 'viharati', pronKo: '위하라띠', meaning: '머문다', grammar: '현재 3인칭 단수 (vi + harati)' },
  { pali: 'ātāpī', pronKo: '아-따-삐-', meaning: '열심히/정진하여', grammar: '형용사 남성 단수 주격', important: true },
  { pali: 'sampajāno', pronKo: '삼빠자-노', meaning: '분명히 알아차리는', grammar: '형용사 남성 단수 주격 (sam + pajānāti)', important: true },
  { pali: 'satimā', pronKo: '사띠마-', meaning: '마음챙기는/새김 있는', grammar: '형용사 남성 단수 주격 (sati + mant)', important: true },
  { pali: 'vineyya', pronKo: '위네이야', meaning: '제거하고/극복하고', grammar: '절대분사 (vineti)' },
  { pali: 'loke', pronKo: '로게', meaning: '세상에서', grammar: '남성 단수 처격' },
  { pali: 'abhijjhādomanassaṃ', pronKo: '아비짜-도마낫상', meaning: '탐욕과 근심을', grammar: '중성 단수 대격 (abhijjhā + domanassa)' },
  { pali: 'vedanāsu', pronKo: '웨다나-수', meaning: '느낌들에서', grammar: '여성 복수 처격', important: true },
  { pali: 'vedanānupassī', pronKo: '웨다나-누빳시-', meaning: '느낌을 관찰하는', grammar: '남성 단수 주격 (vedanā + anupassin)', important: true },
  { pali: 'citte', pronKo: '찟떼', meaning: '마음에서', grammar: '중성 단수 처격', important: true },
  { pali: 'cittānupassī', pronKo: '찟따-누빳시-', meaning: '마음을 관찰하는', grammar: '남성 단수 주격 (citta + anupassin)', important: true },
  { pali: 'dhammesu', pronKo: '담메수', meaning: '법들에서', grammar: '남성 복수 처격', important: true },
  { pali: 'dhammānupassī', pronKo: '담마-누빳시-', meaning: '법을 관찰하는', grammar: '남성 단수 주격 (dhamma + anupassin)', important: true },
]

// ════════════════════════════════════════════════════════════════
// 신념처 (Kāyānupassanā) — 6개 관찰법
// ════════════════════════════════════════════════════════════════

// ── 1. 호흡관찰 (Ānāpānapabba) ──

/** 제3단락: 호흡관찰 — 수행 자세 + 호흡 마음챙김 시작 */
export const VERSE_3 = {
  pali: 'Kathañca pana bhikkhave bhikkhu kāye kāyānupassī viharati? Idha bhikkhave bhikkhu araññagato vā rukkhamūlagato vā suññāgāragato vā nisīdati pallaṅkaṃ ābhujitvā ujuṃ kāyaṃ paṇidhāya parimukhaṃ satiṃ upaṭṭhapetvā. So satova assasati satova passasati.',
  pronKo: '까탄짜 빠나 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠? 이다 빅카웨 빅쿠 아란냐가또 와- 룩카무-라가또 와- 순냐-가-라가또 와- 니시-다띠 빨랑깡 아-부지뜨와- 우중 까-양 빠니다-야 빠리무캉 사띵 우빳타-뻬뜨와-. 소 사또와 앗사사띠 사또와 빳사사띠.',
  translation: '비구들이여, 그러면 어떻게 비구가 몸에서 몸을 관찰하며 머무는가? 여기서 비구는 숲에 가거나 나무 아래에 가거나 빈 곳에 가서 가부좌하고 몸을 곧게 세우고 새김을 전면에 확립한다. 그는 마음챙기며 들이쉬고 마음챙기며 내쉰다.',
  grammarNotes: [
    '문장 구조: 질문문(Kathañca pana...) + 수행 자세 묘사(절대분사 3개 → 주동사 nisīdati) + 호흡 시작',
    '핵심 문법: Kathañca = kathaṃ(어떻게)+ca. 절대분사 ābhujitvā(꿇고서), paṇidhāya(세우고서), upaṭṭhapetvā(확립하고서)가 주동사 nisīdati에 선행',
    '복합어: araññagato = arañña(숲)+gata(간), rukkhamūlagato = rukkha(나무)+mūla(뿌리/아래)+gata, suññāgāragato = suñña(빈)+āgāra(집)+gata',
    'satova = sato(마음챙기는, sata의 주격)+eva(바로/강조). assasati/passasati = 들이쉬다/내쉬다',
  ],
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'Kathañca', pronKo: '까탄짜', meaning: '그러면 어떻게', grammar: 'kathaṃ(어떻게) + ca(그리고)' },
  { pali: 'pana', pronKo: '빠나', meaning: '그런데/그러면', grammar: '불변어(접속사)' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'bhikkhu', pronKo: '빅쿠', meaning: '비구는', grammar: '남성 단수 주격' },
  { pali: 'kāye', pronKo: '까-예', meaning: '몸에서', grammar: '남성 단수 처격' },
  { pali: 'kāyānupassī', pronKo: '까-야-누빳시-', meaning: '몸을 관찰하는', grammar: '남성 단수 주격 (kāya + anupassin)' },
  { pali: 'viharati', pronKo: '위하라띠', meaning: '머문다', grammar: '현재 3인칭 단수' },
  { pali: 'Idha', pronKo: '이다', meaning: '여기서', grammar: '불변어(부사)' },
  { pali: 'araññagato', pronKo: '아란냐가또', meaning: '숲에 간', grammar: '과거분사 남성 단수 주격 (arañña + gata)', important: true },
  { pali: 'vā', pronKo: '와-', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'rukkhamūlagato', pronKo: '룩카무-라가또', meaning: '나무 아래에 간', grammar: '과거분사 남성 단수 주격 (rukkha + mūla + gata)' },
  { pali: 'suññāgāragato', pronKo: '순냐-가-라가또', meaning: '빈 곳에 간', grammar: '과거분사 남성 단수 주격 (suñña + āgāra + gata)' },
  { pali: 'nisīdati', pronKo: '니시-다띠', meaning: '앉다', grammar: '현재 3인칭 단수 (ni + sīdati)' },
  { pali: 'pallaṅkaṃ', pronKo: '빨랑깡', meaning: '가부좌를', grammar: '남성 단수 대격' },
  { pali: 'ābhujitvā', pronKo: '아-부지뜨와-', meaning: '꿇고/접고서', grammar: '절대분사 (ābhujati)' },
  { pali: 'ujuṃ', pronKo: '우중', meaning: '곧게', grammar: '형용사 중성 단수 대격/부사' },
  { pali: 'kāyaṃ', pronKo: '까-양', meaning: '몸을', grammar: '남성 단수 대격' },
  { pali: 'paṇidhāya', pronKo: '빠니다-야', meaning: '세우고/확립하고', grammar: '절대분사 (paṇidahati)' },
  { pali: 'parimukhaṃ', pronKo: '빠리무캉', meaning: '전면에/앞에', grammar: '형용사 중성 단수 대격 (pari + mukha)' },
  { pali: 'satiṃ', pronKo: '사띵', meaning: '새김을/마음챙김을', grammar: '여성 단수 대격', important: true },
  { pali: 'upaṭṭhapetvā', pronKo: '우빳타-뻬뜨와-', meaning: '확립하고서', grammar: '절대분사 (upaṭṭhapeti)' },
  { pali: 'So', pronKo: '소', meaning: '그는', grammar: '지시대명사 남성 단수 주격' },
  { pali: 'satova', pronKo: '사또와', meaning: '마음챙기며(sato+eva)', grammar: '형용사+불변어 (sata의 주격 + eva)' },
  { pali: 'assasati', pronKo: '앗사사띠', meaning: '들이쉰다', grammar: '현재 3인칭 단수', important: true },
  { pali: 'passasati', pronKo: '빳사사띠', meaning: '내쉰다', grammar: '현재 3인칭 단수', important: true },
]

/** 제4단락: 호흡관찰 — 4단계 (길게/짧게/온몸/고요히) */
export const VERSE_4 = {
  pali: 'Dīghaṃ vā assasanto dīghaṃ assasāmīti pajānāti, dīghaṃ vā passasanto dīghaṃ passasāmīti pajānāti. Rassaṃ vā assasanto rassaṃ assasāmīti pajānāti, rassaṃ vā passasanto rassaṃ passasāmīti pajānāti. Sabbakāyapaṭisaṃvedī assasissāmīti sikkhati, sabbakāyapaṭisaṃvedī passasissāmīti sikkhati. Passambhayaṃ kāyasaṅkhāraṃ assasissāmīti sikkhati, passambhayaṃ kāyasaṅkhāraṃ passasissāmīti sikkhati.',
  pronKo: '디-강 와- 앗사산또 디-강 앗사사-미-띠 빠자-나-띠, 디-강 와- 빳사산또 디-강 빳사사-미-띠 빠자-나-띠. 랏상 와- 앗사산또 랏상 앗사사-미-띠 빠자-나-띠, 랏상 와- 빳사산또 랏상 빳사사-미-띠 빠자-나-띠. 삽바까-야빠띠상웨디- 앗사싯사-미-띠 식카띠, 삽바까-야빠띠상웨디- 빳사싯사-미-띠 식카띠. 빳삼바양 까-야상카-랑 앗사싯사-미-띠 식카띠, 빳삼바양 까-야상카-랑 빳사싯사-미-띠 식카띠.',
  translation: '길게 들이쉬면서 "길게 들이쉰다"고 알아차리고, 길게 내쉬면서 "길게 내쉰다"고 알아차린다. 짧게 들이쉬면서 "짧게 들이쉰다"고 알아차린다. 짧게 내쉬면서 "짧게 내쉰다"고 알아차린다. "온 몸을 경험하면서 들이쉬리라"고 훈련한다. "온 몸을 경험하면서 내쉬리라"고 훈련한다. "몸의 형성을 고요히 하면서 들이쉬리라"고 훈련한다. "몸의 형성을 고요히 하면서 내쉬리라"고 훈련한다.',
  grammarNotes: [
    '문장 구조: 호흡 4단계 — ① 길게(dīghaṃ) ② 짧게(rassaṃ) ③ 온몸 경험(sabbakāyapaṭisaṃvedī) ④ 고요히(passambhayaṃ). 각 단계마다 들숨/날숨 쌍',
    '핵심 문법: assasanto/passasanto = 현재분사("~하면서"). assasāmīti = 현재 1인칭("들이쉰다")+iti. assasissāmīti = 미래 1인칭("~하리라")+iti. sikkhati = "훈련하다"',
    '복합어: sabbakāyapaṭisaṃvedī = sabba(모든)+kāya(몸)+paṭisaṃvedin(경험하는), kāyasaṅkhāraṃ = kāya(몸)+saṅkhāra(형성/조건)',
    '점진적 심화: pajānāti(알아차린다, 1~2단계) → sikkhati(훈련한다, 3~4단계)로 동사가 변화',
  ],
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'Dīghaṃ', pronKo: '디-강', meaning: '길게', grammar: '형용사 중성 단수 대격/부사적', important: true },
  { pali: 'assasanto', pronKo: '앗사산또', meaning: '들이쉬면서', grammar: '현재분사 남성 단수 주격 (assasati)' },
  { pali: 'assasāmīti', pronKo: '앗사사-미-띠', meaning: '"들이쉰다"라고', grammar: '현재 1인칭 단수 + iti' },
  { pali: 'pajānāti', pronKo: '빠자-나-띠', meaning: '알아차린다', grammar: '현재 3인칭 단수 (pa + jānāti)', important: true },
  { pali: 'passasanto', pronKo: '빳사산또', meaning: '내쉬면서', grammar: '현재분사 남성 단수 주격 (passasati)' },
  { pali: 'passasāmīti', pronKo: '빳사사-미-띠', meaning: '"내쉰다"라고', grammar: '현재 1인칭 단수 + iti' },
  { pali: 'Rassaṃ', pronKo: '랏상', meaning: '짧게', grammar: '형용사 중성 단수 대격/부사적', important: true },
  { pali: 'Sabbakāyapaṭisaṃvedī', pronKo: '삽바까-야빠띠상웨디-', meaning: '온 몸을 경험하는', grammar: '형용사 남성 단수 주격 (sabba+kāya+paṭisaṃvedin)', important: true },
  { pali: 'assasissāmīti', pronKo: '앗사싯사-미-띠', meaning: '"들이쉬리라"라고', grammar: '미래 1인칭 단수 + iti' },
  { pali: 'sikkhati', pronKo: '식카띠', meaning: '훈련한다', grammar: '현재 3인칭 단수', important: true },
  { pali: 'passasissāmīti', pronKo: '빳사싯사-미-띠', meaning: '"내쉬리라"라고', grammar: '미래 1인칭 단수 + iti' },
  { pali: 'Passambhayaṃ', pronKo: '빳삼바양', meaning: '고요히 하면서', grammar: '현재분사/절대분사 (passambheti)', important: true },
  { pali: 'kāyasaṅkhāraṃ', pronKo: '까-야상카-랑', meaning: '몸의 형성을', grammar: '남성 단수 대격 (kāya + saṅkhāra)', important: true },
]

/** 제5단락: 호흡관찰 정형문 (refrain) */
export const VERSE_5 = {
  pali: 'Iti ajjhattaṃ vā kāye kāyānupassī viharati, bahiddhā vā kāye kāyānupassī viharati, ajjhattabahiddhā vā kāye kāyānupassī viharati. Samudayadhammānupassī vā kāyasmiṃ viharati, vayadhammānupassī vā kāyasmiṃ viharati, samudayavayadhammānupassī vā kāyasmiṃ viharati. Atthi kāyoti vā panassa sati paccupaṭṭhitā hoti yāvadeva ñāṇamattāya paṭissatimattāya anissito ca viharati, na ca kiñci loke upādiyati. Evampi kho bhikkhave bhikkhu kāye kāyānupassī viharati.',
  pronKo: '이띠 앗잣땅 와- 까-예 까-야-누빳시- 위하라띠, 바힛다- 와- 까-예 까-야-누빳시- 위하라띠, 앗잣따바힛다- 와- 까-예 까-야-누빳시- 위하라띠. 사무다야담마-누빳시- 와- 까-야스밍 위하라띠, 와야담마-누빳시- 와- 까-야스밍 위하라띠, 사무다야와야담마-누빳시- 와- 까-야스밍 위하라띠. 앗티 까-요띠 와- 빠낫사 사띠 빳주빳티따- 호띠 야-와데와 냐-나맛따-야 빠띳사띠맛따-야 아닛시또 짜 위하라띠, 나 짜 긴찌 로게 우빠-디야띠. 에왐삐 코 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠.',
  translation: '이와 같이 안으로 몸에서 몸을 관찰하며 머물고, 밖으로 몸에서 몸을 관찰하며 머물고, 안팎으로 몸에서 몸을 관찰하며 머문다. 생겨남의 법칙을 관찰하며 몸에 머물고, 사라짐의 법칙을 관찰하며 머물고, 생겨남과 사라짐의 법칙을 관찰하며 머문다. "몸이 있다"는 새김이 확립되니, 앎만을 위해 새김만을 위해, 의지하지 않고 머물며 세상에서 아무것도 취착하지 않는다. 비구들이여, 이와 같이 비구는 몸에서 몸을 관찰하며 머문다.',
  grammarNotes: [
    '문장 구조: 3부분 — ① 안/밖/안팎 관찰 ② 생멸 관찰 ③ "있다"는 새김 확립 + 결어. 사념처 각 관찰 끝에 반복되는 정형문(refrain)',
    '핵심 문법: ajjhattaṃ/bahiddhā/ajjhattabahiddhā = 안/밖/안팎(부사). paccupaṭṭhitā hoti = "확립되어 있다"(과거분사+보조동사)',
    '복합어: samudayadhammānupassī = samudaya(생겨남)+dhamma(법)+anupassin(관찰하는), ñāṇamattāya = ñāṇa(앎)+matta(만큼)+여격',
    '"Evampi kho"는 각 관찰법 정형문의 마무리구. "na ca kiñci loke upādiyati" — 관찰의 궁극적 결과',
  ],
}

export const VERSE_5_WORDS: VerseWord[] = [
  { pali: 'Iti', pronKo: '이띠', meaning: '이와 같이', grammar: '불변어(인용사/부사)' },
  { pali: 'ajjhattaṃ', pronKo: '앗잣땅', meaning: '안으로/내적으로', grammar: '부사', important: true },
  { pali: 'bahiddhā', pronKo: '바힛다-', meaning: '밖으로/외적으로', grammar: '부사', important: true },
  { pali: 'ajjhattabahiddhā', pronKo: '앗잣따바힛다-', meaning: '안팎으로', grammar: '부사 (ajjhatta + bahiddhā)', important: true },
  { pali: 'Samudayadhammānupassī', pronKo: '사무다야담마-누빳시-', meaning: '생겨남의 법칙을 관찰하는', grammar: '형용사 남성 단수 주격 (samudaya+dhamma+anupassin)', important: true },
  { pali: 'kāyasmiṃ', pronKo: '까-야스밍', meaning: '몸에(서)', grammar: '남성 단수 처격' },
  { pali: 'vayadhammānupassī', pronKo: '와야담마-누빳시-', meaning: '사라짐의 법칙을 관찰하는', grammar: '형용사 남성 단수 주격 (vaya+dhamma+anupassin)', important: true },
  { pali: 'samudayavayadhammānupassī', pronKo: '사무다야와야담마-누빳시-', meaning: '생멸의 법칙을 관찰하는', grammar: '형용사 남성 단수 주격', important: true },
  { pali: 'Atthi', pronKo: '앗티', meaning: '있다', grammar: '현재 3인칭 단수' },
  { pali: 'kāyoti', pronKo: '까-요띠', meaning: '"몸이"라고', grammar: '남성 단수 주격 + iti' },
  { pali: 'panassa', pronKo: '빠낫사', meaning: '그에게(pana+assa)', grammar: '불변어+대명사 속격' },
  { pali: 'sati', pronKo: '사띠', meaning: '새김/마음챙김', grammar: '여성 단수 주격', important: true },
  { pali: 'paccupaṭṭhitā', pronKo: '빳주빳티따-', meaning: '확립된', grammar: '과거분사 여성 단수 주격 (paccupaṭṭhahati)' },
  { pali: 'hoti', pronKo: '호띠', meaning: '~이다/있다', grammar: '현재 3인칭 단수' },
  { pali: 'yāvadeva', pronKo: '야-와데와', meaning: '오직 ~만을 위해', grammar: '불변어 (yāva + d + eva)' },
  { pali: 'ñāṇamattāya', pronKo: '냐-나맛따-야', meaning: '앎만을 위해', grammar: '중성 단수 여격 (ñāṇa + matta)', important: true },
  { pali: 'paṭissatimattāya', pronKo: '빠띳사띠맛따-야', meaning: '새김만을 위해', grammar: '여성 단수 여격 (paṭissati + matta)' },
  { pali: 'anissito', pronKo: '아닛시또', meaning: '의지하지 않는', grammar: '과거분사 남성 단수 주격 (an + issita)', important: true },
  { pali: 'ca', pronKo: '짜', meaning: '그리고', grammar: '불변어(접속사)' },
  { pali: 'na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'kiñci', pronKo: '긴찌', meaning: '아무것도', grammar: '부정대명사 중성 단수 대격' },
  { pali: 'upādiyati', pronKo: '우빠-디야띠', meaning: '취착하다/집착하다', grammar: '현재 3인칭 단수 (upa + ādiyati)', important: true },
  { pali: 'Evampi', pronKo: '에왐삐', meaning: '이와 같이도', grammar: 'evaṃ(이와 같이) + pi(~도)' },
  { pali: 'kho', pronKo: '코', meaning: '실로/참으로', grammar: '불변어(강조사)' },
]

// ── 2. 자세관찰 (Iriyāpathapabba) ──

/** 제6단락: 자세관찰 — 4가지 자세 + 정형문 */
export const VERSE_6 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu gacchanto vā gacchāmīti pajānāti, ṭhito vā ṭhitomhīti pajānāti, nisinno vā nisinnomhīti pajānāti, sayāno vā sayānomhīti pajānāti. Yathā yathā vā panassa kāyo paṇihito hoti, tathā tathā naṃ pajānāti. Iti ajjhattaṃ vā kāye kāyānupassī viharati, bahiddhā vā... ajjhattabahiddhā vā... Samudayadhammānupassī vā... vayadhammānupassī vā... samudayavayadhammānupassī vā kāyasmiṃ viharati. Atthi kāyoti vā panassa sati paccupaṭṭhitā hoti yāvadeva ñāṇamattāya paṭissatimattāya anissito ca viharati, na ca kiñci loke upādiyati. Evampi kho bhikkhave bhikkhu kāye kāyānupassī viharati.',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 각찬또 와- 각차-미-띠 빠자-나-띠, 티또 와- 티또미-띠 빠자-나-띠, 니신노 와- 니신노미-띠 빠자-나-띠, 사야-노 와- 사야-노미-띠 빠자-나-띠. 야타- 야타- 와- 빠낫사 까-요 빠니히또 호띠, 따타- 따타- 낭 빠자-나-띠. 이띠 앗잣땅 와- 까-예 까-야-누빳시- 위하라띠... 앗티 까-요띠 와- 빠낫사 사띠 빳주빳티따-... 에왐삐 코 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠.',
  translation: '더 나아가, 비구들이여, 비구는 걸을 때 "걷고 있다"고 알아차리고, 서 있을 때 "서 있다"고 알아차리고, 앉아 있을 때 "앉아 있다"고 알아차리고, 누워 있을 때 "누워 있다"고 알아차린다. 그의 몸이 어떤 자세로 놓여 있든 그대로 알아차린다. [정형문 반복] 이와 같이 비구는 몸에서 몸을 관찰하며 머문다.',
  grammarNotes: [
    '문장 구조: "Puna caparaṃ"(더 나아가)로 새 관찰법 시작 + 4자세 나열 + 총괄문 + 정형문',
    '핵심 문법: gacchanto(현재분사 "걸으면서"), ṭhito/nisinno(과거분사 "서 있는/앉은"), sayāno(현재분사 "누운"). -mhīti = amhi(나는 ~이다)+iti',
    '"yathā yathā... tathā tathā"는 "어떻게 ~하든 그대로" 상관구문',
    '4자세(iriyāpatha): gacchanto(걷기), ṭhito(서기), nisinno(앉기), sayāno(눕기)',
  ],
}

export const VERSE_6_WORDS: VerseWord[] = [
  { pali: 'Puna', pronKo: '뿌나', meaning: '다시/더 나아가', grammar: '불변어(부사)' },
  { pali: 'caparaṃ', pronKo: '짜빠랑', meaning: '그리고 또한', grammar: 'ca(그리고) + aparaṃ(다른/또한)' },
  { pali: 'gacchanto', pronKo: '각찬또', meaning: '걸으면서/가면서', grammar: '현재분사 남성 단수 주격 (gacchati)', important: true },
  { pali: 'gacchāmīti', pronKo: '각차-미-띠', meaning: '"걷고 있다"라고', grammar: '현재 1인칭 단수 + iti' },
  { pali: 'ṭhito', pronKo: '티또', meaning: '서 있는', grammar: '과거분사 남성 단수 주격 (tiṭṭhati)', important: true },
  { pali: 'ṭhitomhīti', pronKo: '티또미-띠', meaning: '"서 있다"라고', grammar: '과거분사 + amhi + iti' },
  { pali: 'nisinno', pronKo: '니신노', meaning: '앉아 있는', grammar: '과거분사 남성 단수 주격 (nisīdati)', important: true },
  { pali: 'nisinnomhīti', pronKo: '니신노미-띠', meaning: '"앉아 있다"라고', grammar: '과거분사 + amhi + iti' },
  { pali: 'sayāno', pronKo: '사야-노', meaning: '누워 있는', grammar: '현재분사 남성 단수 주격 (sayati)', important: true },
  { pali: 'sayānomhīti', pronKo: '사야-노미-띠', meaning: '"누워 있다"라고', grammar: '현재분사 + amhi + iti' },
  { pali: 'Yathā', pronKo: '야타-', meaning: '~처럼/어떻게', grammar: '불변어(관계부사)' },
  { pali: 'kāyo', pronKo: '까-요', meaning: '몸이', grammar: '남성 단수 주격' },
  { pali: 'paṇihito', pronKo: '빠니히또', meaning: '놓여진/배치된', grammar: '과거분사 남성 단수 주격 (paṇidahati)' },
  { pali: 'tathā', pronKo: '따타-', meaning: '그와 같이/그대로', grammar: '불변어(부사)' },
  { pali: 'naṃ', pronKo: '낭', meaning: '그것을', grammar: '대명사 단수 대격' },
]

// ── 3. 분명한 앎 (Sampajānapabba) ──

/** 제7단락: 분명한 앎 — 일상 동작에서의 알아차림 + 정형문 */
export const VERSE_7 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu abhikkante paṭikkante sampajānakārī hoti, ālokite vilokite sampajānakārī hoti, samiñjite pasārite sampajānakārī hoti, saṅghāṭipattacīvaradhāraṇe sampajānakārī hoti, asite pīte khāyite sāyite sampajānakārī hoti, uccārapassāvakamme sampajānakārī hoti, gate ṭhite nisinne sutte jāgarite bhāsite tuṇhībhāve sampajānakārī hoti. Iti ajjhattaṃ vā kāye kāyānupassī viharati, bahiddhā vā... ajjhattabahiddhā vā... Samudayadhammānupassī vā... vayadhammānupassī vā... samudayavayadhammānupassī vā kāyasmiṃ viharati. Atthi kāyoti vā panassa sati paccupaṭṭhitā hoti yāvadeva ñāṇamattāya paṭissatimattāya anissito ca viharati, na ca kiñci loke upādiyati. Evampi kho bhikkhave bhikkhu kāye kāyānupassī viharati.',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 아빅깐떼 빠띡깐떼 삼빠자-나까-리- 호띠, 아-로끼떼 위로끼떼 삼빠자-나까-리- 호띠, 사민지떼 빠사-리떼 삼빠자-나까-리- 호띠, 상가-띠빳따찌-와라다-라네 삼빠자-나까-리- 호띠, 아시떼 삐-떼 카-이떼 사-이떼 삼빠자-나까-리- 호띠, 웃짜-라빳사-와깜메 삼빠자-나까-리- 호띠, 가떼 티떼 니신네 숫떼 자-가리떼 바-시떼 뚠히-바-웨 삼빠자-나까-리- 호띠. 이띠 앗잣땅 와-... 에왐삐 코 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠.',
  translation: '더 나아가, 비구들이여, 비구는 나아갈 때와 돌아올 때 분명히 알아차리며 행한다. 볼 때와 돌아볼 때 분명히 알아차리며 행한다. 구부릴 때와 펼 때 분명히 알아차리며 행한다. 겉옷·발우·가사를 입을 때 분명히 알아차리며 행한다. 먹을 때·마실 때·씹을 때·맛볼 때 분명히 알아차리며 행한다. 대소변 볼 때 분명히 알아차리며 행한다. 걸을 때·서 있을 때·앉을 때·잘 때·깨어 있을 때·말할 때·침묵할 때 분명히 알아차리며 행한다. [정형문 반복]',
  grammarNotes: [
    '문장 구조: 7개의 "sampajānakārī hoti" 반복 — 각각 다른 일상 동작을 처격으로 나열',
    '핵심 문법: sampajānakārī = sampajāna(분명한 앎)+kārin(행하는 자). 처격(-e)이 "~할 때"의 시간적 의미로 사용',
    '복합어: abhikkante = abhi(앞으로)+kanta(간), paṭikkante = paṭi(되돌아)+kanta, saṅghāṭipattacīvaradhāraṇe = saṅghāṭi(겉옷)+patta(발우)+cīvara(가사)+dhāraṇa(지님)',
    '처격 목록: asite(먹을 때), pīte(마실 때), khāyite(씹을 때), sāyite(맛볼 때), gate(갈 때), ṭhite(설 때), nisinne(앉을 때), sutte(잘 때), jāgarite(깨어 있을 때), bhāsite(말할 때), tuṇhībhāve(침묵할 때)',
  ],
}

export const VERSE_7_WORDS: VerseWord[] = [
  { pali: 'abhikkante', pronKo: '아빅깐떼', meaning: '나아갈 때', grammar: '과거분사 중성 단수 처격 (abhikkamati)', important: true },
  { pali: 'paṭikkante', pronKo: '빠띡깐떼', meaning: '돌아올 때', grammar: '과거분사 중성 단수 처격 (paṭikkamati)' },
  { pali: 'sampajānakārī', pronKo: '삼빠자-나까-리-', meaning: '분명히 알아차리며 행하는', grammar: '형용사 남성 단수 주격 (sampajāna + kārin)', important: true },
  { pali: 'ālokite', pronKo: '아-로끼떼', meaning: '볼 때', grammar: '과거분사 중성 단수 처격 (āloketi)' },
  { pali: 'vilokite', pronKo: '위로끼떼', meaning: '돌아볼 때', grammar: '과거분사 중성 단수 처격 (viloketi)' },
  { pali: 'samiñjite', pronKo: '사민지떼', meaning: '구부릴 때', grammar: '과거분사 중성 단수 처격 (samiñjeti)' },
  { pali: 'pasārite', pronKo: '빠사-리떼', meaning: '펼 때', grammar: '과거분사 중성 단수 처격 (pasāreti)' },
  { pali: 'saṅghāṭipattacīvaradhāraṇe', pronKo: '상가-띠빳따찌-와라다-라네', meaning: '겉옷·발우·가사를 입을 때', grammar: '중성 단수 처격 (saṅghāṭi+patta+cīvara+dhāraṇa)' },
  { pali: 'asite', pronKo: '아시떼', meaning: '먹을 때', grammar: '과거분사 중성 단수 처격 (asati)' },
  { pali: 'pīte', pronKo: '삐-떼', meaning: '마실 때', grammar: '과거분사 중성 단수 처격 (pivati)' },
  { pali: 'khāyite', pronKo: '카-이떼', meaning: '씹을 때', grammar: '과거분사 중성 단수 처격 (khādati)' },
  { pali: 'sāyite', pronKo: '사-이떼', meaning: '맛볼 때', grammar: '과거분사 중성 단수 처격 (sāyati)' },
  { pali: 'uccārapassāvakamme', pronKo: '웃짜-라빳사-와깜메', meaning: '대소변 볼 때', grammar: '중성 단수 처격 (uccāra+passāva+kamma)' },
  { pali: 'gate', pronKo: '가떼', meaning: '걸을 때', grammar: '과거분사 중성 단수 처격 (gacchati)' },
  { pali: 'ṭhite', pronKo: '티떼', meaning: '서 있을 때', grammar: '과거분사 중성 단수 처격 (tiṭṭhati)' },
  { pali: 'nisinne', pronKo: '니신네', meaning: '앉을 때', grammar: '과거분사 중성 단수 처격 (nisīdati)' },
  { pali: 'sutte', pronKo: '숫떼', meaning: '잘 때', grammar: '과거분사 중성 단수 처격 (supati)' },
  { pali: 'jāgarite', pronKo: '자-가리떼', meaning: '깨어 있을 때', grammar: '과거분사 중성 단수 처격 (jāgarati)' },
  { pali: 'bhāsite', pronKo: '바-시떼', meaning: '말할 때', grammar: '과거분사 중성 단수 처격 (bhāsati)' },
  { pali: 'tuṇhībhāve', pronKo: '뚠히-바-웨', meaning: '침묵할 때', grammar: '남성 단수 처격 (tuṇhī + bhāva)' },
]

// ── 4. 부정관 (Paṭikūlamanasikārapabba) — 32가지 신체 부분 ──

/** 제8단락: 부정관 — 32신체 부분 */
export const VERSE_8 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu imameva kāyaṃ uddhaṃ pādatalā adho kesamatthakā tacapariyantaṃ pūraṃ nānappakārassa asucino paccavekkhati — atthi imasmiṃ kāye kesā lomā nakhā dantā taco, maṃsaṃ nhāru aṭṭhi aṭṭhimiñjaṃ vakkaṃ, hadayaṃ yakanaṃ kilomakaṃ pihakaṃ papphāsaṃ, antaṃ antaguṇaṃ udariyaṃ karīsaṃ, pittaṃ semhaṃ pubbo lohitaṃ sedo medo, assu vasā kheḷo siṅghāṇikā lasikā muttaṃ.',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 이마메와 까-양 웃당 빠-다딸라- 아도 게사맛타까- 따짜빠리얀땅 뿌-랑 나-납빠까-랏사 아수찌노 빳짜웩카띠 — 앗티 이마스밍 까-예 게사- 로마- 나카- 단따- 따쪼, 망상 냐-루 앗티 앗티민장 왁깡, 하다양 야까낭 낄로마깡 삐하깡 빱파-상, 안땅 안따구낭 우다리양 까리-상, 삣땅 셈항 뿝보 로히땅 세도 메도, 앗수 와사- 켈로 싱가-니까- 라시까- 뭇땅.',
  translation: '더 나아가, 비구들이여, 비구는 이 몸을 발바닥부터 위로, 머리카락 끝부터 아래로, 피부로 둘러싸인 이 몸에 여러 종류의 부정한 것이 가득 차 있다고 관찰한다 — "이 몸에는 머리카락, 털, 손톱, 이, 피부, 살, 힘줄, 뼈, 골수, 콩팥, 심장, 간, 횡격막, 지라, 허파, 창자, 장간막, 위 속의 것, 대변, 담즙, 가래, 고름, 피, 땀, 지방, 눈물, 기름, 침, 콧물, 관절액, 소변이 있다."',
  grammarNotes: [
    '문장 구조: 주절(paccavekkhati 관찰한다) + 32가지 신체 부분 나열(명사 열거)',
    '핵심 문법: uddhaṃ pādatalā(발바닥부터 위로) + adho kesamatthakā(머리끝부터 아래로) — 탈격(-ā)이 "~부터" 기점을 표시',
    '복합어: tacapariyantaṃ = taca(피부)+pariyanta(경계/한계), nānappakārassa = nānā(여러)+pakāra(종류), aṭṭhimiñjaṃ = aṭṭhi(뼈)+miñja(골수)',
    '32신체 부분: 5그룹으로 나열 — ① 피부 그룹(5) ② 살 그룹(5) ③ 기관 그룹(5) ④ 소화 그룹(4) ⑤ 체액 그룹(6+6)',
  ],
}

export const VERSE_8_WORDS: VerseWord[] = [
  { pali: 'imameva', pronKo: '이마메와', meaning: '바로 이', grammar: 'imaṃ(이것을, 대격) + eva(강조)' },
  { pali: 'kāyaṃ', pronKo: '까-양', meaning: '몸을', grammar: '남성 단수 대격' },
  { pali: 'uddhaṃ', pronKo: '웃당', meaning: '위로', grammar: '불변어(부사)' },
  { pali: 'pādatalā', pronKo: '빠-다딸라-', meaning: '발바닥부터', grammar: '남성 단수 탈격 (pāda + tala)' },
  { pali: 'adho', pronKo: '아도', meaning: '아래로', grammar: '불변어(부사)' },
  { pali: 'kesamatthakā', pronKo: '게사맛타까-', meaning: '머리카락 끝부터', grammar: '남성 단수 탈격 (kesa + matthaka)' },
  { pali: 'tacapariyantaṃ', pronKo: '따짜빠리얀땅', meaning: '피부를 경계로 한', grammar: '형용사 남성 단수 대격 (taca + pariyanta)' },
  { pali: 'pūraṃ', pronKo: '뿌-랑', meaning: '가득 찬', grammar: '형용사 남성 단수 대격' },
  { pali: 'nānappakārassa', pronKo: '나-납빠까-랏사', meaning: '여러 종류의', grammar: '형용사 남성 단수 속격 (nānā + pakāra)' },
  { pali: 'asucino', pronKo: '아수찌노', meaning: '부정한 것의', grammar: '형용사 남성 단수 속격 (a + suci)' },
  { pali: 'paccavekkhati', pronKo: '빳짜웩카띠', meaning: '관찰한다/성찰한다', grammar: '현재 3인칭 단수 (paccavekkhati)', important: true },
  { pali: 'kesā', pronKo: '게사-', meaning: '머리카락', grammar: '남성 복수 주격', important: true },
  { pali: 'lomā', pronKo: '로마-', meaning: '털', grammar: '중성 복수 주격' },
  { pali: 'nakhā', pronKo: '나카-', meaning: '손톱', grammar: '남성 복수 주격' },
  { pali: 'dantā', pronKo: '단따-', meaning: '이(치아)', grammar: '남성 복수 주격' },
  { pali: 'taco', pronKo: '따쪼', meaning: '피부', grammar: '남성 단수 주격' },
  { pali: 'maṃsaṃ', pronKo: '망상', meaning: '살/고기', grammar: '중성 단수 주격' },
  { pali: 'nhāru', pronKo: '냐-루', meaning: '힘줄', grammar: '남성 복수 주격' },
  { pali: 'aṭṭhi', pronKo: '앗티', meaning: '뼈', grammar: '중성 단수 주격' },
  { pali: 'aṭṭhimiñjaṃ', pronKo: '앗티민장', meaning: '골수', grammar: '중성 단수 주격 (aṭṭhi + miñja)' },
  { pali: 'vakkaṃ', pronKo: '왁깡', meaning: '콩팥/신장', grammar: '중성 단수 주격' },
  { pali: 'hadayaṃ', pronKo: '하다양', meaning: '심장', grammar: '중성 단수 주격' },
  { pali: 'yakanaṃ', pronKo: '야까낭', meaning: '간', grammar: '중성 단수 주격' },
  { pali: 'kilomakaṃ', pronKo: '낄로마깡', meaning: '횡격막', grammar: '중성 단수 주격' },
  { pali: 'pihakaṃ', pronKo: '삐하깡', meaning: '지라/비장', grammar: '중성 단수 주격' },
  { pali: 'papphāsaṃ', pronKo: '빱파-상', meaning: '허파/폐', grammar: '중성 단수 주격' },
  { pali: 'antaṃ', pronKo: '안땅', meaning: '창자', grammar: '중성 단수 주격' },
  { pali: 'antaguṇaṃ', pronKo: '안따구낭', meaning: '장간막', grammar: '중성 단수 주격 (anta + guṇa)' },
  { pali: 'udariyaṃ', pronKo: '우다리양', meaning: '위 속의 것', grammar: '중성 단수 주격' },
  { pali: 'karīsaṃ', pronKo: '까리-상', meaning: '대변', grammar: '중성 단수 주격' },
  { pali: 'pittaṃ', pronKo: '삣땅', meaning: '담즙', grammar: '중성 단수 주격' },
  { pali: 'semhaṃ', pronKo: '셈항', meaning: '가래/점액', grammar: '중성 단수 주격' },
  { pali: 'pubbo', pronKo: '뿝보', meaning: '고름', grammar: '남성 단수 주격' },
  { pali: 'lohitaṃ', pronKo: '로히땅', meaning: '피', grammar: '중성 단수 주격' },
  { pali: 'sedo', pronKo: '세도', meaning: '땀', grammar: '남성 단수 주격' },
  { pali: 'medo', pronKo: '메도', meaning: '지방', grammar: '남성 단수 주격' },
  { pali: 'assu', pronKo: '앗수', meaning: '눈물', grammar: '중성 단수 주격' },
  { pali: 'vasā', pronKo: '와사-', meaning: '기름/윤활유', grammar: '여성 단수 주격' },
  { pali: 'kheḷo', pronKo: '켈로', meaning: '침', grammar: '남성 단수 주격' },
  { pali: 'siṅghāṇikā', pronKo: '싱가-니까-', meaning: '콧물', grammar: '여성 단수 주격' },
  { pali: 'lasikā', pronKo: '라시까-', meaning: '관절액', grammar: '여성 단수 주격' },
  { pali: 'muttaṃ', pronKo: '뭇땅', meaning: '소변', grammar: '중성 단수 주격' },
]

/** 제9단락: 부정관 비유 + 정형문 */
export const VERSE_9 = {
  pali: 'Seyyathāpi bhikkhave ubhatomukhā putoḷi pūrā nānāvihitassa dhaññassa, seyyathidaṃ — sālīnaṃ vīhīnaṃ muggānaṃ māsānaṃ tilānaṃ taṇḍulānaṃ. Tamenaṃ cakkhumā puriso muñcitvā paccavekkheyya — ime sālī ime vīhī ime muggā ime māsā ime tilā ime taṇḍulāti. Evameva kho bhikkhave bhikkhu imameva kāyaṃ uddhaṃ pādatalā adho kesamatthakā tacapariyantaṃ pūraṃ nānappakārassa asucino paccavekkhati — atthi imasmiṃ kāye kesā lomā... pe... muttanti. Iti ajjhattaṃ vā... pe... Evampi kho bhikkhave bhikkhu kāye kāyānupassī viharati.',
  pronKo: '세이야타-삐 빅카웨 우바또무카- 뿌또-리 뿌-라- 나-나-위히딷사 단냐싸, 세이야티당 — 사-리-낭 위-히-낭 뭇가-낭 마-사-낭 띨라-낭 딴뚤라-낭. 따메낭 짝쿠마- 뿌리소 문찌뜨와- 빳짜웩케이야 — 이메 사-리- 이메 위-히- 이메 뭇가- 이메 마-사- 이메 띨라- 이메 딴뚤라-띠. 에와메와 코 빅카웨 빅쿠 이마메와 까-양... 빳짜웩카띠... 에왐삐 코 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠.',
  translation: '비구들이여, 마치 양쪽이 열린 자루에 여러 종류의 곡식이 가득 차 있어서 — 즉 쌀, 벼, 녹두, 콩, 참깨, 정미가 있어서, 눈 있는 사람이 그것을 풀어 관찰하여 "이것은 쌀, 이것은 벼, 이것은 녹두, 이것은 콩, 이것은 참깨, 이것은 정미"라고 하듯이, 비구들이여, 이와 같이 비구는 이 몸을 관찰한다. [32신체 부분 반복 + 정형문]',
  grammarNotes: [
    '문장 구조: 비유(Seyyathāpi) + 적용(Evameva kho) — 양쪽 열린 자루(ubhatomukhā putoḷi) 비유로 32신체 부분 관찰을 설명',
    '핵심 문법: Seyyathāpi = "마치 ~와 같이". ubhatomukhā = ubhato(양쪽)+mukhā(입구). paccavekkheyya = 조건법("관찰한다면")',
    '곡식 6종: sālī(쌀), vīhī(벼), muggā(녹두), māsā(콩), tilā(참깨), taṇḍulā(정미) — 속격 복수(-naṃ) 나열',
    'cakkhumā puriso = "눈 있는 사람" — 지혜로 관찰하는 비구를 비유',
  ],
}

export const VERSE_9_WORDS: VerseWord[] = [
  { pali: 'Seyyathāpi', pronKo: '세이야타-삐', meaning: '마치 ~와 같이', grammar: '불변어 (seyyathā + pi)', important: true },
  { pali: 'ubhatomukhā', pronKo: '우바또무카-', meaning: '양쪽이 열린', grammar: '형용사 여성 단수 주격 (ubhato + mukha)' },
  { pali: 'putoḷi', pronKo: '뿌또-리', meaning: '자루/주머니', grammar: '여성 단수 주격' },
  { pali: 'pūrā', pronKo: '뿌-라-', meaning: '가득 찬', grammar: '형용사 여성 단수 주격' },
  { pali: 'nānāvihitassa', pronKo: '나-나-위히딷사', meaning: '여러 종류의', grammar: '형용사 남성 단수 속격 (nānā + vihita)' },
  { pali: 'dhaññassa', pronKo: '단냐싸', meaning: '곡식의', grammar: '중성 단수 속격' },
  { pali: 'seyyathidaṃ', pronKo: '세이야티당', meaning: '즉/이를테면', grammar: '불변어 (seyyathā + idaṃ)' },
  { pali: 'sālīnaṃ', pronKo: '사-리-낭', meaning: '쌀의', grammar: '남성 복수 속격' },
  { pali: 'vīhīnaṃ', pronKo: '위-히-낭', meaning: '벼의', grammar: '남성 복수 속격' },
  { pali: 'muggānaṃ', pronKo: '뭇가-낭', meaning: '녹두의', grammar: '남성 복수 속격' },
  { pali: 'māsānaṃ', pronKo: '마-사-낭', meaning: '콩의', grammar: '남성 복수 속격' },
  { pali: 'tilānaṃ', pronKo: '띨라-낭', meaning: '참깨의', grammar: '남성 복수 속격' },
  { pali: 'taṇḍulānaṃ', pronKo: '딴뚤라-낭', meaning: '정미의', grammar: '남성 복수 속격' },
  { pali: 'Tamenaṃ', pronKo: '따메낭', meaning: '그것을(taṃ+enaṃ)', grammar: '대명사 단수 대격 연성' },
  { pali: 'cakkhumā', pronKo: '짝쿠마-', meaning: '눈 있는/지혜로운', grammar: '형용사 남성 단수 주격 (cakkhu + mant)', important: true },
  { pali: 'puriso', pronKo: '뿌리소', meaning: '사람이', grammar: '남성 단수 주격' },
  { pali: 'muñcitvā', pronKo: '문찌뜨와-', meaning: '풀고서/열고서', grammar: '절대분사 (muñcati)' },
  { pali: 'paccavekkheyya', pronKo: '빳짜웩케이야', meaning: '관찰한다면', grammar: '조건법 3인칭 단수 (paccavekkhati)' },
  { pali: 'Evameva', pronKo: '에와메와', meaning: '바로 이와 같이', grammar: 'evaṃ(이와 같이) + eva(바로)', important: true },
]

// ── 5. 요소관찰 (Dhātumanasikārapabba) — 4대 요소 ──

/** 제10단락: 요소관찰 — 4대 요소 */
export const VERSE_10 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu imameva kāyaṃ yathāṭhitaṃ yathāpaṇihitaṃ dhātuso paccavekkhati — atthi imasmiṃ kāye pathavīdhātu āpodhātu tejodhātu vāyodhātūti.',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 이마메와 까-양 야타-티땅 야타-빠니히땅 다-뚜소 빳짜웩카띠 — 앗티 이마스밍 까-예 빠타위-다-뚜 아-뽀다-뚜 떼조다-뚜 와-요다-뚜-띠.',
  translation: '더 나아가, 비구들이여, 비구는 이 몸을 있는 그대로, 놓여진 그대로, 요소별로 관찰한다 — "이 몸에는 땅의 요소, 물의 요소, 불의 요소, 바람의 요소가 있다."',
  grammarNotes: [
    '문장 구조: 주절(paccavekkhati) + 인용절(atthi... dhātūti) — 4대 요소 나열',
    '핵심 문법: yathāṭhitaṃ = yathā(~처럼)+ṭhita(놓인), yathāpaṇihitaṃ = yathā+paṇihita(배치된). dhātuso = dhātu(요소)+탈격 부사("요소별로")',
    '4대 요소(dhātu): pathavī(땅/단단함), āpo(물/유동성), tejo(불/열), vāyo(바람/움직임)',
    'dhātūti = dhātu + iti — 인용문 마무리',
  ],
}

export const VERSE_10_WORDS: VerseWord[] = [
  { pali: 'imameva', pronKo: '이마메와', meaning: '바로 이', grammar: 'imaṃ(이것을) + eva(강조)' },
  { pali: 'kāyaṃ', pronKo: '까-양', meaning: '몸을', grammar: '남성 단수 대격' },
  { pali: 'yathāṭhitaṃ', pronKo: '야타-티땅', meaning: '있는 그대로', grammar: '부사+과거분사 (yathā + ṭhita)' },
  { pali: 'yathāpaṇihitaṃ', pronKo: '야타-빠니히땅', meaning: '놓여진 그대로', grammar: '부사+과거분사 (yathā + paṇihita)' },
  { pali: 'dhātuso', pronKo: '다-뚜소', meaning: '요소별로', grammar: '여성 탈격/부사 (dhātu + so)', important: true },
  { pali: 'paccavekkhati', pronKo: '빳짜웩카띠', meaning: '관찰한다', grammar: '현재 3인칭 단수' },
  { pali: 'pathavīdhātu', pronKo: '빠타위-다-뚜', meaning: '땅의 요소', grammar: '여성 단수 주격 (pathavī + dhātu)', important: true },
  { pali: 'āpodhātu', pronKo: '아-뽀다-뚜', meaning: '물의 요소', grammar: '여성 단수 주격 (āpo + dhātu)', important: true },
  { pali: 'tejodhātu', pronKo: '떼조다-뚜', meaning: '불의 요소', grammar: '여성 단수 주격 (tejo + dhātu)', important: true },
  { pali: 'vāyodhātu', pronKo: '와-요다-뚜', meaning: '바람의 요소', grammar: '여성 단수 주격 (vāyo + dhātu)', important: true },
]

/** 제11단락: 요소관찰 비유 + 정형문 */
export const VERSE_11 = {
  pali: 'Seyyathāpi bhikkhave dakkho goghātako vā goghātakantevāsī vā gāviṃ vadhitvā cātummahāpathe bilaso vibhajitvā nisinno assa, evameva kho bhikkhave bhikkhu imameva kāyaṃ yathāṭhitaṃ yathāpaṇihitaṃ dhātuso paccavekkhati — atthi imasmiṃ kāye pathavīdhātu āpodhātu tejodhātu vāyodhātūti. Iti ajjhattaṃ vā... pe... Evampi kho bhikkhave bhikkhu kāye kāyānupassī viharati.',
  pronKo: '세이야타-삐 빅카웨 닥코 고가-따꼬 와- 고가-따깐떼와-시- 와- 가-윙 와디뜨와- 짜-뚬마하-빠테 빌라소 위바지뜨와- 니신노 앗사, 에와메와 코 빅카웨 빅쿠 이마메와 까-양... 빳짜웩카띠... 에왐삐 코 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠.',
  translation: '비구들이여, 마치 능숙한 도축업자나 도축업자의 제자가 소를 잡아서 네거리에 부분별로 나누어 앉아 있듯이, 비구들이여, 이와 같이 비구는 이 몸을 있는 그대로, 놓여진 그대로, 요소별로 관찰한다 — "이 몸에는 땅의 요소, 물의 요소, 불의 요소, 바람의 요소가 있다." [정형문 반복]',
  grammarNotes: [
    '문장 구조: 비유(Seyyathāpi + 조건법 assa) + 적용(evameva kho) — 도축업자 비유로 4요소 분석을 설명',
    '핵심 문법: dakkho = "능숙한"(형용사). vadhitvā(잡아서), vibhajitvā(나누어서) — 절대분사 연속. assa = 조건법 "~일 것이다"',
    '복합어: goghātako = go(소)+ghātaka(도살하는 자), goghātakantevāsī = goghātaka+antevāsin(제자), cātummahāpathe = cātu(네)+mahā(큰)+patha(길) — 네거리',
    'bilaso = "부분별로/조각별로" — 소의 부위를 나누듯 몸의 요소를 분석하는 비유',
  ],
}

export const VERSE_11_WORDS: VerseWord[] = [
  { pali: 'dakkho', pronKo: '닥코', meaning: '능숙한/숙련된', grammar: '형용사 남성 단수 주격' },
  { pali: 'goghātako', pronKo: '고가-따꼬', meaning: '도축업자', grammar: '남성 단수 주격 (go + ghātaka)', important: true },
  { pali: 'goghātakantevāsī', pronKo: '고가-따깐떼와-시-', meaning: '도축업자의 제자', grammar: '남성 단수 주격 (goghātaka + antevāsin)' },
  { pali: 'gāviṃ', pronKo: '가-윙', meaning: '소를', grammar: '여성 단수 대격' },
  { pali: 'vadhitvā', pronKo: '와디뜨와-', meaning: '잡아서/도살하고서', grammar: '절대분사 (vadhati)' },
  { pali: 'cātummahāpathe', pronKo: '짜-뚬마하-빠테', meaning: '네거리에서', grammar: '남성 단수 처격 (cātu + mahā + patha)', important: true },
  { pali: 'bilaso', pronKo: '빌라소', meaning: '부분별로', grammar: '부사' },
  { pali: 'vibhajitvā', pronKo: '위바지뜨와-', meaning: '나누어서', grammar: '절대분사 (vibhajati)' },
  { pali: 'nisinno', pronKo: '니신노', meaning: '앉아 있는', grammar: '과거분사 남성 단수 주격' },
  { pali: 'assa', pronKo: '앗사', meaning: '~일 것이다', grammar: '조건법 3인칭 단수 (atthi)' },
]

// ── 6. 9가지 묘지관 (Navasivathikapabba) ──

/** 제12단락: 첫째 묘지관 — 부풀고 파랗게 변한 시체 */
export const VERSE_12 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu seyyathāpi passeyya sarīraṃ sivathikāya chaḍḍitaṃ ekāhamataṃ vā dvīhamataṃ vā tīhamataṃ vā uddhumātakaṃ vinīlakaṃ vipubbakajātaṃ. So imameva kāyaṃ upasaṃharati — ayampi kho kāyo evaṃdhammo evaṃbhāvī evaṃanatītoti. Iti ajjhattaṃ vā... pe... Evampi kho bhikkhave bhikkhu kāye kāyānupassī viharati.',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 세이야타-삐 빳세이야 사리-랑 시와티까-야 찻디땅 에까-하마땅 와- 드위-하마땅 와- 띠-하마땅 와- 웃두-마-따깡 위니-라깡 위뿝바까자-땅. 소 이마메와 까-양 우빠상하라띠 — 아얌삐 코 까-요 에왕담모 에왕바-위- 에왕아나띠-또띠. 이띠 앗잣땅 와-... 에왐삐 코 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠.',
  translation: '더 나아가, 비구들이여, 비구는 마치 묘지에 버려진 시체가 하루 죽은 것이거나 이틀 죽은 것이거나 사흘 죽은 것으로서 부풀고 파랗게 변하고 고름이 나는 것을 보듯이, 그는 이 몸에 비교한다 — "이 몸도 이런 성질이고 이렇게 될 것이며 이것을 벗어나지 못한다"라고. [정형문 반복]',
  grammarNotes: [
    '문장 구조: seyyathāpi passeyya(마치 ~을 보듯이, 조건법) + upasaṃharati(비교한다) + 인용절',
    '핵심 문법: passeyya = 조건법("본다면"). chaḍḍitaṃ = 과거분사("버려진"). upasaṃharati = upa(가까이)+saṃharati(가져오다) = "비교하다"',
    '복합어: ekāhamataṃ = eka(하루)+aha(날)+mata(죽은), uddhumātakaṃ = uddhumāta(부푼)+ka, vinīlakaṃ = vi(변한)+nīla(파란)+ka, vipubbakajātaṃ = vi+pubba(고름)+ka+jāta(생긴)',
    '정형구: "evaṃdhammo evaṃbhāvī evaṃanatīto" = "이런 성질이고, 이렇게 될 것이며, 이것을 벗어나지 못한다" — 9묘지관 공통 결어',
  ],
}

export const VERSE_12_WORDS: VerseWord[] = [
  { pali: 'passeyya', pronKo: '빳세이야', meaning: '본다면/보듯이', grammar: '조건법 3인칭 단수 (passati)', important: true },
  { pali: 'sarīraṃ', pronKo: '사리-랑', meaning: '시체를/몸을', grammar: '중성 단수 대격', important: true },
  { pali: 'sivathikāya', pronKo: '시와티까-야', meaning: '묘지에서', grammar: '여성 단수 처격', important: true },
  { pali: 'chaḍḍitaṃ', pronKo: '찻디땅', meaning: '버려진', grammar: '과거분사 중성 단수 대격 (chaḍḍeti)' },
  { pali: 'ekāhamataṃ', pronKo: '에까-하마땅', meaning: '하루 죽은', grammar: '형용사 중성 단수 대격 (eka + aha + mata)' },
  { pali: 'dvīhamataṃ', pronKo: '드위-하마땅', meaning: '이틀 죽은', grammar: '형용사 중성 단수 대격 (dvi + aha + mata)' },
  { pali: 'tīhamataṃ', pronKo: '띠-하마땅', meaning: '사흘 죽은', grammar: '형용사 중성 단수 대격 (ti + aha + mata)' },
  { pali: 'uddhumātakaṃ', pronKo: '웃두-마-따깡', meaning: '부푼', grammar: '형용사 중성 단수 대격 (uddhumāta + ka)', important: true },
  { pali: 'vinīlakaṃ', pronKo: '위니-라깡', meaning: '파랗게 변한', grammar: '형용사 중성 단수 대격 (vi + nīla + ka)' },
  { pali: 'vipubbakajātaṃ', pronKo: '위뿝바까자-땅', meaning: '고름이 생긴', grammar: '형용사 중성 단수 대격 (vi + pubba + ka + jāta)' },
  { pali: 'upasaṃharati', pronKo: '우빠상하라띠', meaning: '비교한다/적용한다', grammar: '현재 3인칭 단수 (upa + saṃharati)', important: true },
  { pali: 'ayampi', pronKo: '아얌삐', meaning: '이것도', grammar: 'ayaṃ(이것) + pi(~도)' },
  { pali: 'evaṃdhammo', pronKo: '에왕담모', meaning: '이런 성질의', grammar: 'evaṃ(이러한) + dhamma(성질/법) 남성 주격', important: true },
  { pali: 'evaṃbhāvī', pronKo: '에왕바-위-', meaning: '이렇게 될', grammar: 'evaṃ + bhāvin(될) 남성 주격' },
  { pali: 'evaṃanatīto', pronKo: '에왕아나띠-또', meaning: '이것을 벗어나지 못한', grammar: 'evaṃ + an(아닌) + atīta(지나간) 남성 주격' },
]

/** 제13단락: 둘째~셋째 묘지관 — 동물에게 먹히는 시체, 살점 붙은 뼈 */
export const VERSE_13 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu seyyathāpi passeyya sarīraṃ sivathikāya chaḍḍitaṃ kākehi vā khajjamānaṃ kulalehi vā khajjamānaṃ gijjhehi vā khajjamānaṃ kaṅkehi vā khajjamānaṃ sunakhehi vā khajjamānaṃ byagghehi vā khajjamānaṃ dīpīhi vā khajjamānaṃ siṅgālehi vā khajjamānaṃ vividhehi vā pāṇakajātehi khajjamānaṃ. So imameva kāyaṃ upasaṃharati — ayampi kho kāyo evaṃdhammo evaṃbhāvī evaṃanatītoti. Puna caparaṃ bhikkhave bhikkhu seyyathāpi passeyya sarīraṃ sivathikāya chaḍḍitaṃ aṭṭhikasaṅkhalikaṃ samaṃsalohitaṃ nhārusambandhaṃ. So imameva kāyaṃ upasaṃharati — ayampi kho kāyo evaṃdhammo evaṃbhāvī evaṃanatītoti. Iti ajjhattaṃ vā... pe... Evampi kho bhikkhave bhikkhu kāye kāyānupassī viharati.',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 세이야타-삐 빳세이야 사리-랑 시와티까-야 찻디땅 까-게히 와- 캇자마-낭 꿀라레히 와- 캇자마-낭 긷제히 와- 캇자마-낭 깡게히 와- 캇자마-낭 수나게히 와- 캇자마-낭 비앗게히 와- 캇자마-낭 디-삐-히 와- 캇자마-낭 싱가-레히 와- 캇자마-낭 위위데히 와- 빠-나까자-떼히 캇자마-낭. 소 이마메와 까-양 우빠상하라띠... 뿌나 짜빠랑... 앗티까상카리깡 사망사로히땅 냐-루삼반당... 에왐삐 코 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠.',
  translation: '더 나아가, 비구들이여, 비구는 마치 묘지에 버려진 시체가 까마귀에게 먹히고, 매에게 먹히고, 독수리에게 먹히고, 왜가리에게 먹히고, 개에게 먹히고, 호랑이에게 먹히고, 표범에게 먹히고, 자칼에게 먹히고, 여러 종류의 벌레에게 먹히는 것을 보듯이... "이 몸도 이런 성질이고..." 더 나아가, 비구는 마치 묘지에 버려진 시체가 뼈의 사슬로서 살과 피가 붙어 있고 힘줄로 연결된 것을 보듯이... "이 몸도 이런 성질이고..." [정형문 반복]',
  grammarNotes: [
    '문장 구조: 둘째 묘지관(동물에게 먹히는 시체) + 셋째 묘지관(살점 붙은 뼈) — 각각 동일한 정형구로 마무리',
    '핵심 문법: khajjamānaṃ = 현재수동분사("먹히고 있는", khādati). 구격(-ehi)이 행위자("~에 의해") 표시',
    '동물 8종: kāka(까마귀), kulala(매), gijjha(독수리), kaṅka(왜가리), sunakha(개), byaggha(호랑이), dīpī(표범), siṅgāla(자칼)',
    '복합어: aṭṭhikasaṅkhalikaṃ = aṭṭhika(뼈)+saṅkhalika(사슬), samaṃsalohitaṃ = sa(함께)+maṃsa(살)+lohita(피), nhārusambandhaṃ = nhāru(힘줄)+sambandha(연결)',
  ],
}

export const VERSE_13_WORDS: VerseWord[] = [
  { pali: 'kākehi', pronKo: '까-게히', meaning: '까마귀에 의해', grammar: '남성 복수 구격 (kāka)', important: true },
  { pali: 'khajjamānaṃ', pronKo: '캇자마-낭', meaning: '먹히고 있는', grammar: '현재수동분사 중성 단수 대격 (khādati)', important: true },
  { pali: 'kulalehi', pronKo: '꿀라레히', meaning: '매에 의해', grammar: '남성 복수 구격 (kulala)' },
  { pali: 'gijjhehi', pronKo: '긷제히', meaning: '독수리에 의해', grammar: '남성 복수 구격 (gijjha)' },
  { pali: 'kaṅkehi', pronKo: '깡게히', meaning: '왜가리에 의해', grammar: '남성 복수 구격 (kaṅka)' },
  { pali: 'sunakhehi', pronKo: '수나게히', meaning: '개에 의해', grammar: '남성 복수 구격 (sunakha)' },
  { pali: 'byagghehi', pronKo: '비앗게히', meaning: '호랑이에 의해', grammar: '남성 복수 구격 (byaggha)' },
  { pali: 'dīpīhi', pronKo: '디-삐-히', meaning: '표범에 의해', grammar: '남성 복수 구격 (dīpī)' },
  { pali: 'siṅgālehi', pronKo: '싱가-레히', meaning: '자칼에 의해', grammar: '남성 복수 구격 (siṅgāla)' },
  { pali: 'vividhehi', pronKo: '위위데히', meaning: '여러 종류의', grammar: '형용사 남성 복수 구격 (vividha)' },
  { pali: 'pāṇakajātehi', pronKo: '빠-나까자-떼히', meaning: '벌레 종류에 의해', grammar: '남성 복수 구격 (pāṇaka + jāta)' },
  { pali: 'aṭṭhikasaṅkhalikaṃ', pronKo: '앗티까상카리깡', meaning: '뼈의 사슬/골격', grammar: '중성 단수 대격 (aṭṭhika + saṅkhalika)', important: true },
  { pali: 'samaṃsalohitaṃ', pronKo: '사망사로히땅', meaning: '살과 피가 붙은', grammar: '형용사 중성 단수 대격 (sa + maṃsa + lohita)' },
  { pali: 'nhārusambandhaṃ', pronKo: '냐-루삼반당', meaning: '힘줄로 연결된', grammar: '형용사 중성 단수 대격 (nhāru + sambandha)' },
]

/** 제14단락: 넷째~다섯째 묘지관 — 피 묻은 뼈, 힘줄 연결된 뼈 */
export const VERSE_14 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu seyyathāpi passeyya sarīraṃ sivathikāya chaḍḍitaṃ aṭṭhikasaṅkhalikaṃ nimaṃsalohitamakkhitaṃ nhārusambandhaṃ. So imameva kāyaṃ upasaṃharati — ayampi kho kāyo evaṃdhammo evaṃbhāvī evaṃanatītoti. Puna caparaṃ bhikkhave bhikkhu seyyathāpi passeyya sarīraṃ sivathikāya chaḍḍitaṃ aṭṭhikasaṅkhalikaṃ apagatamaṃsalohitaṃ nhārusambandhaṃ. So imameva kāyaṃ upasaṃharati — ayampi kho kāyo evaṃdhammo evaṃbhāvī evaṃanatītoti. Iti ajjhattaṃ vā... pe... Evampi kho bhikkhave bhikkhu kāye kāyānupassī viharati.',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 세이야타-삐 빳세이야 사리-랑 시와티까-야 찻디땅 앗티까상카리깡 니망사로히따막키땅 냐-루삼반당. 소 이마메와 까-양 우빠상하라띠... 뿌나 짜빠랑... 앗티까상카리깡 아빠가따망사로히땅 냐-루삼반당... 에왐삐 코 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠.',
  translation: '더 나아가, 비구들이여, 비구는 마치 묘지에 버려진 시체가 뼈의 사슬로서 살은 없고 피가 묻어 있으며 힘줄로 연결된 것을 보듯이... "이 몸도 이런 성질이고..." 더 나아가, 비구는 마치 묘지에 버려진 시체가 뼈의 사슬로서 살과 피가 떨어져 나가고 힘줄로 연결된 것을 보듯이... "이 몸도 이런 성질이고..." [정형문 반복]',
  grammarNotes: [
    '문장 구조: 넷째(피 묻은 뼈) + 다섯째(살·피 없이 힘줄만 연결) — 시체 부패의 진행 과정',
    '핵심 문법: nimaṃsalohitamakkhitaṃ = ni(없는)+maṃsa(살)+lohita(피)+makkhita(묻은). apagatamaṃsalohitaṃ = apagata(떨어져 나간)+maṃsa+lohita',
    '넷째 vs 다섯째: 넷째는 "살 없이 피만 묻은"(nimaṃsa+lohitamakkhita), 다섯째는 "살과 피 모두 떨어진"(apagata+maṃsalohita) — 단계적 분해',
    '공통 구조: aṭṭhikasaṅkhalikaṃ(뼈의 사슬) + 형용사(부패 상태) + nhārusambandhaṃ(힘줄 연결)',
  ],
}

export const VERSE_14_WORDS: VerseWord[] = [
  { pali: 'aṭṭhikasaṅkhalikaṃ', pronKo: '앗티까상카리깡', meaning: '뼈의 사슬/골격', grammar: '중성 단수 대격' },
  { pali: 'nimaṃsalohitamakkhitaṃ', pronKo: '니망사로히따막키땅', meaning: '살 없이 피가 묻은', grammar: '형용사 중성 단수 대격 (ni+maṃsa+lohita+makkhita)', important: true },
  { pali: 'nhārusambandhaṃ', pronKo: '냐-루삼반당', meaning: '힘줄로 연결된', grammar: '형용사 중성 단수 대격' },
  { pali: 'apagatamaṃsalohitaṃ', pronKo: '아빠가따망사로히땅', meaning: '살과 피가 떨어져 나간', grammar: '형용사 중성 단수 대격 (apagata+maṃsa+lohita)', important: true },
]

/** 제15단락: 여섯째~일곱째 묘지관 — 흩어진 뼈, 조개껍데기처럼 하얀 뼈 */
export const VERSE_15 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu seyyathāpi passeyya sarīraṃ sivathikāya chaḍḍitaṃ aṭṭhikāni apagatasambandhāni disā vidisā vikkhittāni, aññena hatthaṭṭhikaṃ aññena pādaṭṭhikaṃ aññena gopphakaṭṭhikaṃ aññena jaṅghaṭṭhikaṃ aññena ūruṭṭhikaṃ aññena kaṭiṭṭhikaṃ aññena phāsukaṭṭhikaṃ aññena piṭṭhiṭṭhikaṃ aññena khandhaṭṭhikaṃ aññena gīvaṭṭhikaṃ aññena hanukaṭṭhikaṃ aññena dantaṭṭhikaṃ aññena sīsakaṭāhaṃ. So imameva kāyaṃ upasaṃharati — ayampi kho kāyo evaṃdhammo evaṃbhāvī evaṃanatītoti. Puna caparaṃ bhikkhave bhikkhu seyyathāpi passeyya sarīraṃ sivathikāya chaḍḍitaṃ aṭṭhikāni setāni saṅkhavaṇṇapaṭibhāgāni. So imameva kāyaṃ upasaṃharati — ayampi kho kāyo evaṃdhammo evaṃbhāvī evaṃanatītoti. Iti ajjhattaṃ vā... pe... Evampi kho bhikkhave bhikkhu kāye kāyānupassī viharati.',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 세이야타-삐 빳세이야 사리-랑 시와티까-야 찻디땅 앗티까-니 아빠가따삼반다-니 디사- 위디사- 윅킷따-니, 안녜나 핫탓티깡 안녜나 빠-닷티깡 안녜나 곱파깟티깡 안녜나 장갓티깡 안녜나 우-룻티깡 안녜나 까딧티깡 안녜나 파-수깟티깡 안녜나 삣팃티깡 안녜나 칸닷티깡 안녜나 기-왓티깡 안녜나 하누깟티깡 안녜나 단딷티깡 안녜나 시-사까따-항. 소 이마메와 까-양 우빠상하라띠... 뿌나 짜빠랑... 앗티까-니 세따-니 상카와나빠띠바-가-니... 에왐삐 코 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠.',
  translation: '더 나아가, 비구들이여, 비구는 마치 묘지에 버려진 시체의 뼈가 연결이 끊어져 사방으로 흩어져 있는 것을 보듯이 — 이쪽에 손뼈, 저쪽에 발뼈, 이쪽에 발목뼈, 저쪽에 정강이뼈, 이쪽에 넓적다리뼈, 저쪽에 엉덩이뼈, 이쪽에 갈비뼈, 저쪽에 등뼈, 이쪽에 어깨뼈, 저쪽에 목뼈, 이쪽에 턱뼈, 저쪽에 이(치아)뼈, 이쪽에 두개골... "이 몸도 이런 성질이고..." 더 나아가, 비구는 마치 묘지에 버려진 뼈가 조개껍데기처럼 하얀 것을 보듯이... "이 몸도 이런 성질이고..." [정형문 반복]',
  grammarNotes: [
    '문장 구조: 여섯째(흩어진 뼈 13부위 나열) + 일곱째(하얀 뼈) — 연결 해체와 색 변화 과정',
    '핵심 문법: aṭṭhikāni = 중성 복수 주격("뼈들"). apagatasambandhāni = 연결이 떨어진(복수). aññena = "다른 곳에"(구격)',
    '뼈 13부위: hattha(손), pāda(발), gopphaka(발목), jaṅgha(정강이), ūru(넓적다리), kaṭi(엉덩이), phāsuka(갈비), piṭṭhi(등), khandha(어깨), gīva(목), hanuka(턱), danta(이), sīsakaṭāha(두개골)',
    '복합어: saṅkhavaṇṇapaṭibhāgāni = saṅkha(조개)+vaṇṇa(색)+paṭibhāga(비슷한) — "조개껍데기 색과 같은"',
  ],
}

export const VERSE_15_WORDS: VerseWord[] = [
  { pali: 'aṭṭhikāni', pronKo: '앗티까-니', meaning: '뼈들', grammar: '중성 복수 주격', important: true },
  { pali: 'apagatasambandhāni', pronKo: '아빠가따삼반다-니', meaning: '연결이 끊어진', grammar: '형용사 중성 복수 주격 (apagata + sambandha)' },
  { pali: 'disā', pronKo: '디사-', meaning: '사방으로', grammar: '여성 복수 대격' },
  { pali: 'vidisā', pronKo: '위디사-', meaning: '간방(間方)으로', grammar: '여성 복수 대격' },
  { pali: 'vikkhittāni', pronKo: '윅킷따-니', meaning: '흩어진', grammar: '과거분사 중성 복수 주격 (vikkhipati)', important: true },
  { pali: 'aññena', pronKo: '안녜나', meaning: '다른 곳에/이쪽에', grammar: '대명사 남성 단수 구격' },
  { pali: 'hatthaṭṭhikaṃ', pronKo: '핫탓티깡', meaning: '손뼈', grammar: '중성 단수 주격 (hattha + aṭṭhika)' },
  { pali: 'pādaṭṭhikaṃ', pronKo: '빠-닷티깡', meaning: '발뼈', grammar: '중성 단수 주격 (pāda + aṭṭhika)' },
  { pali: 'gopphakaṭṭhikaṃ', pronKo: '곱파깟티깡', meaning: '발목뼈', grammar: '중성 단수 주격 (gopphaka + aṭṭhika)' },
  { pali: 'jaṅghaṭṭhikaṃ', pronKo: '장갓티깡', meaning: '정강이뼈', grammar: '중성 단수 주격 (jaṅgha + aṭṭhika)' },
  { pali: 'ūruṭṭhikaṃ', pronKo: '우-룻티깡', meaning: '넓적다리뼈', grammar: '중성 단수 주격 (ūru + aṭṭhika)' },
  { pali: 'kaṭiṭṭhikaṃ', pronKo: '까딧티깡', meaning: '엉덩이뼈', grammar: '중성 단수 주격 (kaṭi + aṭṭhika)' },
  { pali: 'phāsukaṭṭhikaṃ', pronKo: '파-수깟티깡', meaning: '갈비뼈', grammar: '중성 단수 주격 (phāsuka + aṭṭhika)' },
  { pali: 'piṭṭhiṭṭhikaṃ', pronKo: '삣팃티깡', meaning: '등뼈', grammar: '중성 단수 주격 (piṭṭhi + aṭṭhika)' },
  { pali: 'khandhaṭṭhikaṃ', pronKo: '칸닷티깡', meaning: '어깨뼈', grammar: '중성 단수 주격 (khandha + aṭṭhika)' },
  { pali: 'gīvaṭṭhikaṃ', pronKo: '기-왓티깡', meaning: '목뼈', grammar: '중성 단수 주격 (gīva + aṭṭhika)' },
  { pali: 'hanukaṭṭhikaṃ', pronKo: '하누깟티깡', meaning: '턱뼈', grammar: '중성 단수 주격 (hanuka + aṭṭhika)' },
  { pali: 'dantaṭṭhikaṃ', pronKo: '단딷티깡', meaning: '이(치아)뼈', grammar: '중성 단수 주격 (danta + aṭṭhika)' },
  { pali: 'sīsakaṭāhaṃ', pronKo: '시-사까따-항', meaning: '두개골', grammar: '중성 단수 주격 (sīsa + kaṭāha)', important: true },
  { pali: 'setāni', pronKo: '세따-니', meaning: '하얀', grammar: '형용사 중성 복수 주격 (seta)' },
  { pali: 'saṅkhavaṇṇapaṭibhāgāni', pronKo: '상카와나빠띠바-가-니', meaning: '조개껍데기 색과 같은', grammar: '형용사 중성 복수 주격 (saṅkha+vaṇṇa+paṭibhāga)', important: true },
]

/** 제16단락: 여덟째~아홉째 묘지관 — 1년 된 뼈, 가루가 된 뼈 */
export const VERSE_16 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu seyyathāpi passeyya sarīraṃ sivathikāya chaḍḍitaṃ aṭṭhikāni puñjakitāni terovassikāni. So imameva kāyaṃ upasaṃharati — ayampi kho kāyo evaṃdhammo evaṃbhāvī evaṃanatītoti. Puna caparaṃ bhikkhave bhikkhu seyyathāpi passeyya sarīraṃ sivathikāya chaḍḍitaṃ aṭṭhikāni cuṇṇakajātāni. So imameva kāyaṃ upasaṃharati — ayampi kho kāyo evaṃdhammo evaṃbhāvī evaṃanatītoti. Iti ajjhattaṃ vā kāye kāyānupassī viharati, bahiddhā vā kāye kāyānupassī viharati, ajjhattabahiddhā vā kāye kāyānupassī viharati. Samudayadhammānupassī vā kāyasmiṃ viharati, vayadhammānupassī vā kāyasmiṃ viharati, samudayavayadhammānupassī vā kāyasmiṃ viharati. Atthi kāyoti vā panassa sati paccupaṭṭhitā hoti yāvadeva ñāṇamattāya paṭissatimattāya anissito ca viharati, na ca kiñci loke upādiyati. Evampi kho bhikkhave bhikkhu kāye kāyānupassī viharati.',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 세이야타-삐 빳세이야 사리-랑 시와티까-야 찻디땅 앗티까-니 뿐자끼따-니 떼로왓시까-니. 소 이마메와 까-양 우빠상하라띠... 뿌나 짜빠랑... 앗티까-니 쭌나까자-따-니. 소 이마메와 까-양 우빠상하라띠... 이띠 앗잣땅 와- 까-예 까-야-누빳시- 위하라띠, 바힛다- 와-... 앗티 까-요띠 와- 빠낫사 사띠 빳주빳티따- 호띠... 에왐삐 코 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠.',
  translation: '더 나아가, 비구들이여, 비구는 마치 묘지에 버려진 뼈가 쌓여서 1년이 넘은 것을 보듯이... "이 몸도 이런 성질이고..." 더 나아가, 비구는 마치 묘지에 버려진 뼈가 가루가 된 것을 보듯이... "이 몸도 이런 성질이고, 이렇게 될 것이며, 이것을 벗어나지 못한다." 이와 같이 안으로 몸에서 몸을 관찰하며 머물고, 밖으로... 안팎으로... 생겨남의 법칙을... 사라짐의 법칙을... 생멸의 법칙을 관찰하며 머문다. "몸이 있다"는 새김이 확립되어... 의지하지 않고 머물며 세상에서 아무것도 취착하지 않는다. 비구들이여, 이와 같이 비구는 몸에서 몸을 관찰하며 머문다.',
  grammarNotes: [
    '문장 구조: 여덟째(1년 된 뼈) + 아홉째(가루가 된 뼈) + 마지막 정형문(전문) — 신념처의 최종 마무리',
    '핵심 문법: puñjakitāni = puñja(더미)+kata(된, 쌓인). terovassikāni = tero(넘는)+vassika(해/우기). cuṇṇakajātāni = cuṇṇaka(가루)+jāta(된)',
    '9묘지관 완결: ① 부푼 시체 → ② 동물에게 먹히는 → ③ 살 붙은 뼈 → ④ 피 묻은 뼈 → ⑤ 힘줄 연결 뼈 → ⑥ 흩어진 뼈 → ⑦ 하얀 뼈 → ⑧ 쌓인 오래된 뼈 → ⑨ 가루 뼈',
    '마지막 정형문은 신념처(kāyānupassanā) 전체의 결어. 이후 수념처(vedanānupassanā)로 이어짐',
  ],
}

export const VERSE_16_WORDS: VerseWord[] = [
  { pali: 'aṭṭhikāni', pronKo: '앗티까-니', meaning: '뼈들', grammar: '중성 복수 주격' },
  { pali: 'puñjakitāni', pronKo: '뿐자끼따-니', meaning: '쌓여진/더미가 된', grammar: '과거분사 중성 복수 주격 (puñja + kata)', important: true },
  { pali: 'terovassikāni', pronKo: '떼로왓시까-니', meaning: '1년이 넘은', grammar: '형용사 중성 복수 주격 (tero + vassika)', important: true },
  { pali: 'cuṇṇakajātāni', pronKo: '쭌나까자-따-니', meaning: '가루가 된', grammar: '형용사 중성 복수 주격 (cuṇṇaka + jāta)', important: true },
]

// ════════════════════════════════════════════════════════════════
// 내보내기 (Exports)
// ════════════════════════════════════════════════════════════════

/** 신념처 전체 단락 (서문 포함) */
export const KAYA_VERSES = [
  { id: 'VERSE_1', section: '서문', title: '유일한 길 선언', verse: VERSE_1, words: VERSE_1_WORDS },
  { id: 'VERSE_2', section: '서문', title: '사념처 정의', verse: VERSE_2, words: VERSE_2_WORDS },
  { id: 'VERSE_3', section: '호흡관찰', title: '수행 자세 + 호흡 시작', verse: VERSE_3, words: VERSE_3_WORDS },
  { id: 'VERSE_4', section: '호흡관찰', title: '호흡 4단계', verse: VERSE_4, words: VERSE_4_WORDS },
  { id: 'VERSE_5', section: '호흡관찰', title: '정형문 (refrain)', verse: VERSE_5, words: VERSE_5_WORDS },
  { id: 'VERSE_6', section: '자세관찰', title: '4가지 자세', verse: VERSE_6, words: VERSE_6_WORDS },
  { id: 'VERSE_7', section: '분명한 앎', title: '일상 동작의 알아차림', verse: VERSE_7, words: VERSE_7_WORDS },
  { id: 'VERSE_8', section: '부정관', title: '32가지 신체 부분', verse: VERSE_8, words: VERSE_8_WORDS },
  { id: 'VERSE_9', section: '부정관', title: '곡식 자루 비유', verse: VERSE_9, words: VERSE_9_WORDS },
  { id: 'VERSE_10', section: '요소관찰', title: '4대 요소', verse: VERSE_10, words: VERSE_10_WORDS },
  { id: 'VERSE_11', section: '요소관찰', title: '도축업자 비유', verse: VERSE_11, words: VERSE_11_WORDS },
  { id: 'VERSE_12', section: '묘지관', title: '첫째 — 부푼 시체', verse: VERSE_12, words: VERSE_12_WORDS },
  { id: 'VERSE_13', section: '묘지관', title: '둘째~셋째 — 동물에게 먹히는 시체, 살 붙은 뼈', verse: VERSE_13, words: VERSE_13_WORDS },
  { id: 'VERSE_14', section: '묘지관', title: '넷째~다섯째 — 피 묻은 뼈, 힘줄 연결 뼈', verse: VERSE_14, words: VERSE_14_WORDS },
  { id: 'VERSE_15', section: '묘지관', title: '여섯째~일곱째 — 흩어진 뼈, 하얀 뼈', verse: VERSE_15, words: VERSE_15_WORDS },
  { id: 'VERSE_16', section: '묘지관', title: '여덟째~아홉째 — 오래된 뼈, 가루 뼈', verse: VERSE_16, words: VERSE_16_WORDS },
]

/** 신념처 전체 단어 목록 (중복 제거) */
export const ALL_KAYA_WORDS: VerseWord[] = (() => {
  const allWords = [
    ...VERSE_1_WORDS, ...VERSE_2_WORDS, ...VERSE_3_WORDS, ...VERSE_4_WORDS,
    ...VERSE_5_WORDS, ...VERSE_6_WORDS, ...VERSE_7_WORDS, ...VERSE_8_WORDS,
    ...VERSE_9_WORDS, ...VERSE_10_WORDS, ...VERSE_11_WORDS, ...VERSE_12_WORDS,
    ...VERSE_13_WORDS, ...VERSE_14_WORDS, ...VERSE_15_WORDS, ...VERSE_16_WORDS,
  ]
  // 빠알리어 기준 중복 제거
  const seen = new Set<string>()
  return allWords.filter(w => {
    const key = w.pali.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
})()
