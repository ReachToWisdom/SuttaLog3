// 사념처경(Mahāsatipaṭṭhāna Sutta, DN 22) — 핵심 발췌 단어 데이터
// 출처: Dīgha Nikāya 22

import type { VerseWord } from './types'

// ── 사념처경 원문 (단락별) ──

/** 제1단락: 서문 — 유일한 길 */
export const VERSE_1 = {
  pali: 'Ekāyano ayaṃ bhikkhave maggo sattānaṃ visuddhiyā, sokaparidevānaṃ samatikkamāya, dukkhadomanassānaṃ atthaṅgamāya, ñāyassa adhigamāya, nibbānassa sacchikiriyāya, yadidaṃ cattāro satipaṭṭhānā.',
  pronKo: '에까-야노 아양 빅카웨 맥고 삿따-낭 위숫디야-, 소까빠리데와-낭 사마띡까마-야, 둑카도마낫사-낭 앗탕가마-야, 냐-얏사 아디가마-야, 닙바-낫사 삿치끼리야-야, 야디당 짯따-로 사띠빳타-나-.',
  translation: '비구들이여, 이것은 중생의 청정을 위한 유일한 길이니, 슬픔과 비탄을 극복하기 위하여, 괴로움과 근심을 소멸하기 위하여, 바른 방법을 얻기 위하여, 열반을 실현하기 위하여, 곧 네 가지 새김의 확립이다.',
  grammarNotes: [
    '문장 구조: 단일 문장. 「Ekāyano ayaṃ maggo(주어+술어) + 속격 명사 + 여격 목적구 5개 나열 + yadidaṃ cattāro satipaṭṭhānā(동격 보충설명)」',
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
  pronKo: '까따메 짯따-로? 이다 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠 아-따-삐- 삼빠자-노 사띠마-, 위네이야 로게 아비짜-도마낫상; 웨다나-수 웨다나-누빳시- 위하라띠...; 찟떼 찟따-누빳시- 위하라띠...; 담메수 담마-누빳시- 위하라띠...',
  translation: '네 가지란 무엇인가? 여기서 비구는 몸에서 몸을 관찰하며 머문다, 열심히, 분명히 알아차리며, 마음챙기며, 세상에 대한 탐욕과 근심을 제거하고; 느낌에서 느낌을 관찰하며 머문다...; 마음에서 마음을 관찰하며 머문다...; 법에서 법을 관찰하며 머문다...',
  grammarNotes: [
    '문장 구조: 질문(Katame cattāro?) + 4개 정형 관찰구 나열. 각 구문은 「처격 + 복합어형용사 + viharati + 3형용사 + 절대분사구」 동일 패턴',
    '핵심 문법: "kāye kāyānupassī"(몸에서 몸을 관찰하는), "vedanāsu vedanānupassī"(느낌들에서 느낌을 관찰하는), "citte cittānupassī"(마음에서 마음을 관찰하는), "dhammesu dhammānupassī"(법들에서 법을 관찰하는) — 처격+복합어 형용사 4종',
    '정형구: "ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ"은 사념처 각 관찰에 동일 반복',
    '복합어: kāyānupassī = kāya+anupassin, vedanānupassī = vedanā+anupassin, cittānupassī = citta+anupassin, dhammānupassī = dhamma+anupassin',
  ],
}

export const VERSE_2_WORDS: VerseWord[] = [
  { pali: 'Katame', pronKo: '까따메', meaning: '어떤/무엇인', grammar: '의문대명사 남성 복수 주격' },
  { pali: 'cattāro', pronKo: '짯따-로', meaning: '네 가지', grammar: '수사 남성 복수 주격' },
  { pali: 'Idha', pronKo: '이다', meaning: '여기서', grammar: '불변어(부사)' },
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

/** 제3단락: 호흡관찰 (ānāpānapabba) */
export const VERSE_3 = {
  pali: 'Idha bhikkhave bhikkhu araññagato vā rukkhamūlagato vā suññāgāragato vā nisīdati pallaṅkaṃ ābhujitvā ujuṃ kāyaṃ paṇidhāya parimukhaṃ satiṃ upaṭṭhapetvā. So satova assasati satova passasati. Dīghaṃ vā assasanto dīghaṃ assasāmīti pajānāti, dīghaṃ vā passasanto dīghaṃ passasāmīti pajānāti. Rassaṃ vā assasanto rassaṃ assasāmīti pajānāti, rassaṃ vā passasanto rassaṃ passasāmīti pajānāti. Sabbakāyapaṭisaṃvedī assasissāmīti sikkhati, sabbakāyapaṭisaṃvedī passasissāmīti sikkhati. Passambhayaṃ kāyasaṅkhāraṃ assasissāmīti sikkhati, passambhayaṃ kāyasaṅkhāraṃ passasissāmīti sikkhati.',
  pronKo: '이다 빅카웨 빅쿠 아란냐가또 와- 룩카무-라가또 와- 순냐-가-라가또 와- 니시-다띠 빨랑깡 아-부지뜨와- 우중 까-양 빠니다-야 빠리무캉 사띵 우빳타-뻬뜨와-. 소 사또와 앗사사띠 사또와 빳사사띠. 디-강 와- 앗사산또 디-강 앗사사-미-띠 빠자-나-띠, 디-강 와- 빳사산또 디-강 빳사사-미-띠 빠자-나-띠. 랏상 와- 앗사산또 랏상 앗사사-미-띠 빠자-나-띠, 랏상 와- 빳사산또 랏상 빳사사-미-띠 빠자-나-띠. 삽바까-야빠띠상웨디- 앗사싯사-미-띠 식카띠, 삽바까-야빠띠상웨디- 빳사싯사-미-띠 식카띠. 빳삼바양 까-야상카-랑 앗사싯사-미-띠 식카띠, 빳삼바양 까-야상카-랑 빳사싯사-미-띠 식카띠.',
  translation: '여기서 비구는 숲에 가거나 나무 아래에 가거나 빈 곳에 가서 가부좌하고 몸을 곧게 세우고 새김을 전면에 확립한다. 그는 마음챙기며 들이쉬고 마음챙기며 내쉰다. 길게 들이쉬면서 "길게 들이쉰다"고 알아차리고, 길게 내쉬면서 "길게 내쉰다"고 알아차린다. 짧게 들이쉬면서 "짧게 들이쉰다"고 알아차린다. "온 몸을 경험하면서 들이쉬리라"고 훈련한다. "몸의 형성을 고요히 하면서 들이쉬리라"고 훈련한다.',
  grammarNotes: [
    '문장 구조: 수행 자세 묘사 → 호흡 4단계(길게/짧게/온몸/고요히). 절대분사(ābhujitvā, paṇidhāya, upaṭṭhapetvā)가 주동사 nisīdati에 선행',
    '핵심 문법: assasati/passasati = 들이쉬다/내쉬다. assasanto/passasanto = 현재분사("~하면서"). assasissāmīti = 미래 1인칭("~하리라")+iti. sikkhati = "훈련하다"',
    '복합어: araññagato = arañña(숲)+gata(간), sabbakāyapaṭisaṃvedī = sabba(모든)+kāya(몸)+paṭisaṃvedin(경험하는), kāyasaṅkhāraṃ = kāya(몸)+saṅkhāra(형성/조건)',
    '정형 반복: 들숨/날숨 쌍 + 길게/짧게 쌍 + 훈련(sikkhati) 구문 — 호흡 관찰의 4단계 점진적 심화',
  ],
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'araññagato', pronKo: '아란냐가또', meaning: '숲에 간', grammar: '과거분사 남성 단수 주격 (arañña + gata)' },
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
  { pali: 'Dīghaṃ', pronKo: '디-강', meaning: '길게', grammar: '형용사 중성 단수 대격/부사적', important: true },
  { pali: 'assasanto', pronKo: '앗사산또', meaning: '들이쉬면서', grammar: '현재분사 남성 단수 주격' },
  { pali: 'assasāmīti', pronKo: '앗사사-미-띠', meaning: '"들이쉰다"라고', grammar: '현재 1인칭 단수 + iti' },
  { pali: 'pajānāti', pronKo: '빠자-나-띠', meaning: '알아차린다', grammar: '현재 3인칭 단수 (pa + jānāti)', important: true },
  { pali: 'passasanto', pronKo: '빳사산또', meaning: '내쉬면서', grammar: '현재분사 남성 단수 주격' },
  { pali: 'passasāmīti', pronKo: '빳사사-미-띠', meaning: '"내쉰다"라고', grammar: '현재 1인칭 단수 + iti' },
  { pali: 'Rassaṃ', pronKo: '랏상', meaning: '짧게', grammar: '형용사 중성 단수 대격/부사적', important: true },
  { pali: 'Sabbakāyapaṭisaṃvedī', pronKo: '삽바까-야빠띠상웨디-', meaning: '온 몸을 경험하는', grammar: '형용사 남성 단수 주격 (sabba+kāya+paṭisaṃvedin)', important: true },
  { pali: 'assasissāmīti', pronKo: '앗사싯사-미-띠', meaning: '"들이쉬리라"라고', grammar: '미래 1인칭 단수 + iti' },
  { pali: 'sikkhati', pronKo: '식카띠', meaning: '훈련한다', grammar: '현재 3인칭 단수', important: true },
  { pali: 'passasissāmīti', pronKo: '빳사싯사-미-띠', meaning: '"내쉬리라"라고', grammar: '미래 1인칭 단수 + iti' },
  { pali: 'Passambhayaṃ', pronKo: '빳삼바양', meaning: '고요히 하면서', grammar: '현재분사/절대분사 (passambheti)', important: true },
  { pali: 'kāyasaṅkhāraṃ', pronKo: '까-야상카-랑', meaning: '몸의 형성을', grammar: '남성 단수 대격 (kāya + saṅkhāra)', important: true },
]

/** 제4단락: 신념처 관찰 정형문 */
export const VERSE_4 = {
  pali: 'Iti ajjhattaṃ vā kāye kāyānupassī viharati, bahiddhā vā kāye kāyānupassī viharati, ajjhattabahiddhā vā kāye kāyānupassī viharati. Samudayadhammānupassī vā kāyasmiṃ viharati, vayadhammānupassī vā kāyasmiṃ viharati, samudayavayadhammānupassī vā kāyasmiṃ viharati. Atthi kāyoti vā panassa sati paccupaṭṭhitā hoti yāvadeva ñāṇamattāya paṭissatimattāya anissito ca viharati, na ca kiñci loke upādiyati.',
  pronKo: '이띠 앗잣땅 와- 까-예 까-야-누빳시- 위하라띠, 바힛다- 와- 까-예 까-야-누빳시- 위하라띠, 앗잣따바힛다- 와- 까-예 까-야-누빳시- 위하라띠. 사무다야담마-누빳시- 와- 까-야스밍 위하라띠, 와야담마-누빳시- 와- 까-야스밍 위하라띠, 사무다야와야담마-누빳시- 와- 까-야스밍 위하라띠. 앗티 까-요띠 와- 빠낫사 사띠 빳주빳티따- 호띠 야-와데와 냐-나맛따-야 빠띳사띠맛따-야 아닛시또 짜 위하라띠, 나 짜 긴찌 로게 우빠-디야띠.',
  translation: '이와 같이 안으로 몸에서 몸을 관찰하며 머물고, 밖으로 몸에서 몸을 관찰하며 머물고, 안팎으로 몸에서 몸을 관찰하며 머문다. 생겨남의 법칙을 관찰하며 몸에 머물고, 사라짐의 법칙을 관찰하며 머물고, 생겨남과 사라짐의 법칙을 관찰하며 머문다. "몸이 있다"는 새김이 확립되니, 앎만을 위해 새김만을 위해, 의지하지 않고 머물며 세상에서 아무것도 취착하지 않는다.',
  grammarNotes: [
    '문장 구조: 3부분 — ① 안/밖/안팎 관찰 ② 생멸 관찰 ③ "있다"는 새김 확립. 사념처 각 관찰 끝에 반복되는 정형문(refrain)',
    '핵심 문법: ajjhattaṃ/bahiddhā/ajjhattabahiddhā = 안/밖/안팎(부사). samudayadhammānupassī = 생겨남의 법칙을 관찰하는. paccupaṭṭhitā hoti = "확립되어 있다"(과거분사+보조동사)',
    '복합어: samudayadhamma = samudaya(생겨남)+dhamma(법), vayadhamma = vaya(소멸)+dhamma(법), ñāṇamattāya = ñāṇa(앎)+matta(만큼)+여격, paṭissatimattāya = paṭissati(새김)+matta+여격',
    '구문: "na ca kiñci loke upādiyati"(세상에서 아무것도 취착하지 않는다) — 관찰의 궁극적 결과를 나타내는 부정 서술문',
  ],
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'Iti', pronKo: '이띠', meaning: '이와 같이', grammar: '불변어(인용사/부사)' },
  { pali: 'ajjhattaṃ', pronKo: '앗잣땅', meaning: '안으로/내적으로', grammar: '부사', important: true },
  { pali: 'bahiddhā', pronKo: '바힛다-', meaning: '밖으로/외적으로', grammar: '부사', important: true },
  { pali: 'ajjhattabahiddhā', pronKo: '앗잣따바힛다-', meaning: '안팎으로', grammar: '부사 (ajjhatta + bahiddhā)', important: true },
  { pali: 'Samudayadhammānupassī', pronKo: '사무다야담마-누빳시-', meaning: '생겨남의 법칙을 관찰하는', grammar: '형용사 남성 단수 주격 (samudaya+dhamma+anupassin)', important: true },
  { pali: 'kāyasmiṃ', pronKo: '까-야스밍', meaning: '몸에(서)', grammar: '남성 단수 처격' },
  { pali: 'vayadhammānupassī', pronKo: '와야담마-누빳시-', meaning: '사라짐의 법칙을 관찰하는', grammar: '형용사 남성 단수 주격 (vaya+dhamma+anupassin)', important: true },
  { pali: 'samudayavayadhammānupassī', pronKo: '사무다야와야담마-누빳시-', meaning: '생멸의 법칙을 관찰하는', grammar: '형용사 남성 단수 주격', important: true },
  { pali: 'Atthi', pronKo: '앗티', meaning: '있다', grammar: '현재 3인칭 단수 (atthi)' },
  { pali: 'kāyoti', pronKo: '까-요띠', meaning: '"몸이"라고', grammar: '남성 단수 주격 + iti' },
  { pali: 'panassa', pronKo: '빠낫사', meaning: '그에게(pana+assa)', grammar: '불변어+대명사 속격' },
  { pali: 'sati', pronKo: '사띠', meaning: '새김/마음챙김', grammar: '여성 단수 주격', important: true },
  { pali: 'paccupaṭṭhitā', pronKo: '빳주빳티따-', meaning: '확립된', grammar: '과거분사 여성 단수 주격 (paccupaṭṭhahati)' },
  { pali: 'yāvadeva', pronKo: '야-와데와', meaning: '오직 ~만을 위해', grammar: '불변어 (yāva + d + eva)' },
  { pali: 'ñāṇamattāya', pronKo: '냐-나맛따-야', meaning: '앎만을 위해', grammar: '중성 단수 여격 (ñāṇa + matta)', important: true },
  { pali: 'paṭissatimattāya', pronKo: '빠띳사띠맛따-야', meaning: '새김만을 위해', grammar: '여성 단수 여격 (paṭissati + matta)' },
  { pali: 'anissito', pronKo: '아닛시또', meaning: '의지하지 않는', grammar: '과거분사 남성 단수 주격 (an + issita)', important: true },
  { pali: 'ca', pronKo: '짜', meaning: '그리고', grammar: '불변어(접속사)' },
  { pali: 'na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'kiñci', pronKo: '긴찌', meaning: '아무것도', grammar: '부정대명사 중성 단수 대격' },
  { pali: 'upādiyati', pronKo: '우빠-디야띠', meaning: '취착하다/집착하다', grammar: '현재 3인칭 단수 (upa + ādiyati)', important: true },
]

/** 제5단락: 위빳사나 자세 관찰 (iriyāpathapabba) */
export const VERSE_5 = {
  pali: 'So gacchanto vā gacchāmīti pajānāti, ṭhito vā ṭhitomhīti pajānāti, nisinno vā nisinnomhīti pajānāti, sayāno vā sayānomhīti pajānāti. Yathā yathā vā panassa kāyo paṇihito hoti tathā tathā naṃ pajānāti.',
  pronKo: '소 각찬또 와- 각차-미-띠 빠자-나-띠, 티또 와- 티또미-띠 빠자-나-띠, 니신노 와- 니신노미-띠 빠자-나-띠, 사야-노 와- 사야-노미-띠 빠자-나-띠. 야타- 야타- 와- 빠낫사 까-요 빠니히또 호띠 따타- 따타- 낭 빠자-나-띠.',
  translation: '걸을 때 "걷고 있다"고 알아차리고, 서 있을 때 "서 있다"고 알아차리고, 앉아 있을 때 "앉아 있다"고 알아차리고, 누워 있을 때 "누워 있다"고 알아차린다. 그의 몸이 어떤 자세로 놓여 있든 그대로 알아차린다.',
  grammarNotes: [
    '문장 구조: 4개 자세(걷기/서기/앉기/눕기) + 총괄문. 각 구절은 「현재분사/과거분사 + vā + 1인칭 주격+iti + pajānāti」 동일 패턴',
    '핵심 문법: gacchanto(현재분사 "걸으면서"), ṭhito/nisinno/sayāno(과거분사 "서 있는/앉은/누운"). -mhīti = -mhi("나는 ~이다", 1인칭 단수)+iti',
    '복합어: ṭhitomhīti = ṭhito(서 있는)+amhi(나는 ~이다)+iti. "yathā yathā... tathā tathā"는 "어떻게 ~하든 그대로" 상관구문',
    '4자세(iriyāpatha): gacchanto(걷기), ṭhito(서기), nisinno(앉기), sayāno(눕기) — 일상의 모든 자세에서의 마음챙김',
  ],
}

export const VERSE_5_WORDS: VerseWord[] = [
  { pali: 'gacchanto', pronKo: '각찬또', meaning: '걸으면서/가면서', grammar: '현재분사 남성 단수 주격 (gacchati)', important: true },
  { pali: 'gacchāmīti', pronKo: '각차-미-띠', meaning: '"걷고 있다"라고', grammar: '현재 1인칭 단수 + iti' },
  { pali: 'ṭhito', pronKo: '티또', meaning: '서 있는', grammar: '과거분사 남성 단수 주격 (tiṭṭhati)', important: true },
  { pali: 'ṭhitomhīti', pronKo: '티또미-띠', meaning: '"서 있다"라고', grammar: '과거분사 + amhi + iti' },
  { pali: 'nisinno', pronKo: '니신노', meaning: '앉아 있는', grammar: '과거분사 남성 단수 주격 (nisīdati)', important: true },
  { pali: 'nisinnomhīti', pronKo: '니신노미-띠', meaning: '"앉아 있다"라고', grammar: '과거분사 + amhi + iti' },
  { pali: 'sayāno', pronKo: '사야-노', meaning: '누워 있는', grammar: '현재분사 남성 단수 주격 (sayati)', important: true },
  { pali: 'sayānomhīti', pronKo: '사야-노미-띠', meaning: '"누워 있다"라고', grammar: '현재분사 + amhi + iti' },
  { pali: 'yathā', pronKo: '야타-', meaning: '~처럼/어떻게', grammar: '불변어(관계부사)' },
  { pali: 'paṇihito', pronKo: '빠니히또', meaning: '놓여진/배치된', grammar: '과거분사 남성 단수 주격 (paṇidahati)' },
  { pali: 'hoti', pronKo: '호띠', meaning: '~이다/있다', grammar: '현재 3인칭 단수' },
  { pali: 'tathā', pronKo: '따타-', meaning: '그와 같이/그대로', grammar: '불변어(부사)' },
  { pali: 'naṃ', pronKo: '낭', meaning: '그것을', grammar: '대명사 단수 대격' },
]

/** 제6단락: 수념처 — 느낌 관찰 (vedanānupassanā) */
export const VERSE_6 = {
  pali: 'Idha bhikkhave bhikkhu sukhaṃ vā vedanaṃ vediyamāno sukhaṃ vedanaṃ vediyāmīti pajānāti. Dukkhaṃ vā vedanaṃ vediyamāno dukkhaṃ vedanaṃ vediyāmīti pajānāti. Adukkhamasukhaṃ vā vedanaṃ vediyamāno adukkhamasukhaṃ vedanaṃ vediyāmīti pajānāti.',
  pronKo: '이다 빅카웨 빅쿠 수캉 와- 웨다낭 웨디야마-노 수캉 웨다낭 웨디야-미-띠 빠자-나-띠. 둑캉 와- 웨다낭 웨디야마-노 둑캉 웨다낭 웨디야-미-띠 빠자-나-띠. 아둑카마수캉 와- 웨다낭 웨디야마-노 아둑카마수캉 웨다낭 웨디야-미-띠 빠자-나-띠.',
  translation: '여기서 비구는 즐거운 느낌을 느끼면서 "즐거운 느낌을 느끼고 있다"고 알아차린다. 괴로운 느낌을 느끼면서 "괴로운 느낌을 느끼고 있다"고 알아차린다. 괴롭지도 즐겁지도 않은 느낌을 느끼면서 "괴롭지도 즐겁지도 않은 느낌을 느끼고 있다"고 알아차린다.',
  grammarNotes: [
    '문장 구조: 세 문장 동일 패턴.「형용사 + vedanaṃ(대격) + vediyamāno(현재분사) → vediyāmīti pajānāti(주절)」',
    '핵심 문법: vediyamāno(현재분사 남성 주격)는 동시 진행("느끼면서"). vediyāmīti = vediyāmi(1인칭 "느끼고 있다")+iti. 직접 화법을 인용사로 감싸는 구문',
    '수념처 핵심: sukhaṃ(즐거운)/dukkhaṃ(괴로운)/adukkhamasukhaṃ(불고불락) 세 유형의 느낌 관찰',
    '복합어: adukkhamasukhaṃ = a(아닌)+dukkha(괴로움)+m(연결음)+a(아닌)+sukha(즐거움) — "괴롭지도 않고 즐겁지도 않은"',
  ],
}

export const VERSE_6_WORDS: VerseWord[] = [
  { pali: 'sukhaṃ', pronKo: '수캉', meaning: '즐거운/행복한', grammar: '형용사 중성 단수 대격', important: true },
  { pali: 'vedanaṃ', pronKo: '웨다낭', meaning: '느낌을', grammar: '여성 단수 대격', important: true },
  { pali: 'vediyamāno', pronKo: '웨디야마-노', meaning: '느끼면서', grammar: '현재분사 남성 단수 주격 (vediyati)' },
  { pali: 'vediyāmīti', pronKo: '웨디야-미-띠', meaning: '"느끼고 있다"라고', grammar: '현재 1인칭 단수 + iti (vediyāmi + iti)' },
  { pali: 'dukkhaṃ', pronKo: '둑캉', meaning: '괴로운/고통스러운', grammar: '형용사 중성 단수 대격', important: true },
  { pali: 'Adukkhamasukhaṃ', pronKo: '아둑카마수캉', meaning: '괴롭지도 즐겁지도 않은', grammar: '형용사 중성 단수 대격 (a+dukkha+m+a+sukha)', important: true },
]

/** 제7단락: 심념처 — 마음 관찰 (cittānupassanā) */
export const VERSE_7 = {
  pali: 'Idha bhikkhave bhikkhu sarāgaṃ vā cittaṃ sarāgaṃ cittanti pajānāti. Vītarāgaṃ vā cittaṃ vītarāgaṃ cittanti pajānāti. Sadosaṃ vā cittaṃ sadosaṃ cittanti pajānāti. Vītadosaṃ vā cittaṃ vītadosaṃ cittanti pajānāti. Samohaṃ vā cittaṃ samohaṃ cittanti pajānāti. Vītamohaṃ vā cittaṃ vītamohaṃ cittanti pajānāti.',
  pronKo: '이다 빅카웨 빅쿠 사라-강 와- 찟땅 사라-강 찟딴띠 빠자-나-띠. 위-따라-강 와- 찟땅 위-따라-강 찟딴띠 빠자-나-띠. 사도상 와- 찟땅 사도상 찟딴띠 빠자-나-띠. 위-따도상 와- 찟땅 위-따도상 찟딴띠 빠자-나-띠. 사모항 와- 찟땅 사모항 찟딴띠 빠자-나-띠. 위-따모항 와- 찟땅 위-따모항 찟딴띠 빠자-나-띠.',
  translation: '여기서 비구는 탐욕 있는 마음을 "탐욕 있는 마음"이라고 알아차린다. 탐욕 없는 마음을 "탐욕 없는 마음"이라고 알아차린다. 성냄 있는 마음을... 성냄 없는 마음을... 어리석음 있는 마음을... 어리석음 없는 마음을 "어리석음 없는 마음"이라고 알아차린다.',
  grammarNotes: [
    '문장 구조: 6개 문장, 3쌍(탐/진/치 × 있음/없음) 동일 패턴.「형용사 + cittaṃ(대격) + 형용사 + cittanti(cittaṃ+iti) + pajānāti」',
    '핵심 문법: cittanti = cittaṃ(마음을)+iti(라고), 연성으로 ṃ+i→nti. sa- 접두사 = "~있는"(with), vīta- 접두사 = "~없는/떠난"(past)',
    '3독(三毒) 관찰: rāga(탐욕), dosa(성냄), moha(어리석음) + sa-(있음)/vīta-(없음) = 6상태',
    '복합어: sarāgaṃ = sa(함께)+rāga(탐욕), vītarāgaṃ = vīta(떠난)+rāga, sadosaṃ = sa+dosa(성냄), vītadosaṃ, samohaṃ = sa+moha(어리석음), vītamohaṃ',
  ],
}

export const VERSE_7_WORDS: VerseWord[] = [
  { pali: 'sarāgaṃ', pronKo: '사라-강', meaning: '탐욕 있는', grammar: '형용사 중성 단수 대격 (sa + rāga)', important: true },
  { pali: 'cittaṃ', pronKo: '찟땅', meaning: '마음을', grammar: '중성 단수 대격', important: true },
  { pali: 'cittanti', pronKo: '찟딴띠', meaning: '"마음"이라고', grammar: 'cittaṃ + iti (연성)' },
  { pali: 'Vītarāgaṃ', pronKo: '위-따라-강', meaning: '탐욕 없는/탐욕 떠난', grammar: '형용사 중성 단수 대격 (vīta + rāga)', important: true },
  { pali: 'Sadosaṃ', pronKo: '사도상', meaning: '성냄 있는', grammar: '형용사 중성 단수 대격 (sa + dosa)', important: true },
  { pali: 'Vītadosaṃ', pronKo: '위-따도상', meaning: '성냄 없는', grammar: '형용사 중성 단수 대격 (vīta + dosa)', important: true },
  { pali: 'Samohaṃ', pronKo: '사모항', meaning: '어리석음 있는', grammar: '형용사 중성 단수 대격 (sa + moha)', important: true },
  { pali: 'Vītamohaṃ', pronKo: '위-따모항', meaning: '어리석음 없는', grammar: '형용사 중성 단수 대격 (vīta + moha)', important: true },
]

/** 제8단락: 법념처 — 오개 (nīvaraṇapabba) */
export const VERSE_8 = {
  pali: 'Idha bhikkhave bhikkhu santaṃ vā ajjhattaṃ kāmacchandaṃ atthi me ajjhattaṃ kāmacchando ti pajānāti, asantaṃ vā ajjhattaṃ kāmacchandaṃ natthi me ajjhattaṃ kāmacchando ti pajānāti.',
  pronKo: '이다 빅카웨 빅쿠 산땅 와- 앗잣땅 까-맛찬당 앗티 메 앗잣땅 까-맛찬도 띠 빠자-나-띠, 아산땅 와- 앗잣땅 까-맛찬당 낫티 메 앗잣땅 까-맛찬도 띠 빠자-나-띠.',
  translation: '여기서 비구는 안에 감각적 욕망이 있으면 "나에게 안에 감각적 욕망이 있다"고 알아차리고, 안에 감각적 욕망이 없으면 "나에게 안에 감각적 욕망이 없다"고 알아차린다.',
  grammarNotes: [
    '문장 구조: 있음/없음 쌍. 「santaṃ(있는)+ajjhattaṃ(안에)+kāmacchandaṃ(감각욕망) → atthi me(나에게 있다)+iti+pajānāti」 / 「asantaṃ(없는) → natthi me(나에게 없다)」',
    '핵심 문법: santaṃ = sant(있는, atthi의 현재분사) 대격. asantaṃ = 부정. atthi/natthi = 있다/없다. me = 나에게(여격적 속격)',
    '오개(五蓋, nīvaraṇa): kāmacchanda(감각적 욕망), byāpāda(악의), thīnamiddha(혼침·졸음), uddhaccakukkucca(들뜸·후회), vicikicchā(의심) — 원전에서 5개 모두 동일 패턴으로 반복',
    '복합어: kāmacchanda = kāma(감각적 욕망)+chanda(의욕/욕구). santaṃ/asantaṃ은 att(있음)/na+att(없음)의 현재분사형',
  ],
}

export const VERSE_8_WORDS: VerseWord[] = [
  { pali: 'santaṃ', pronKo: '산땅', meaning: '있는', grammar: '현재분사 중성 단수 대격 (atthi의 분사형)', important: true },
  { pali: 'kāmacchandaṃ', pronKo: '까-맛찬당', meaning: '감각적 욕망을', grammar: '남성 단수 대격 (kāma + chanda)', important: true },
  { pali: 'atthi', pronKo: '앗티', meaning: '있다', grammar: '현재 3인칭 단수' },
  { pali: 'me', pronKo: '메', meaning: '나에게', grammar: '대명사 1인칭 단수 속격/여격' },
  { pali: 'kāmacchando', pronKo: '까-맛찬도', meaning: '감각적 욕망이', grammar: '남성 단수 주격 (kāma + chanda)', important: true },
  { pali: 'ti', pronKo: '띠', meaning: '~라고 (인용)', grammar: '불변어(인용사, iti의 줄임)' },
  { pali: 'asantaṃ', pronKo: '아산땅', meaning: '없는', grammar: '현재분사 중성 단수 대격 (부정, a + sant)' },
  { pali: 'natthi', pronKo: '낫티', meaning: '없다', grammar: '현재 3인칭 단수 (na + atthi)' },
]

/** 제9단락: 법념처 — 오온 (khandhapabba) */
export const VERSE_9 = {
  pali: 'Idha bhikkhave bhikkhu iti rūpaṃ, iti rūpassa samudayo, iti rūpassa atthaṅgamo; iti vedanā, iti vedanāya samudayo, iti vedanāya atthaṅgamo; iti saññā, iti saññāya samudayo, iti saññāya atthaṅgamo; iti saṅkhārā, iti saṅkhārānaṃ samudayo, iti saṅkhārānaṃ atthaṅgamo; iti viññāṇaṃ, iti viññāṇassa samudayo, iti viññāṇassa atthaṅgamo ti.',
  pronKo: '이다 빅카웨 빅쿠 이띠 루-빵, 이띠 루-빳사 사무다요, 이띠 루-빳사 앗탕가모; 이띠 웨다나-, 이띠 웨다나-야 사무다요, 이띠 웨다나-야 앗탕가모; 이띠 산냐-, 이띠 산냐-야 사무다요, 이띠 산냐-야 앗탕가모; 이띠 상카-라-, 이띠 상카-라-낭 사무다요, 이띠 상카-라-낭 앗탕가모; 이띠 윈냐-낭, 이띠 윈냐-낫사 사무다요, 이띠 윈냐-낫사 앗탕가모 띠.',
  translation: '"이것이 물질이다, 이것이 물질의 생겨남이다, 이것이 물질의 사라짐이다; 이것이 느낌이다, 이것이 느낌의 생겨남이다, 이것이 느낌의 사라짐이다; 이것이 인식이다...; 이것이 의지적 형성이다...; 이것이 의식이다, 이것이 의식의 생겨남이다, 이것이 의식의 사라짐이다"라고.',
  grammarNotes: [
    '문장 구조: 5온 × 3관찰(자체/생겨남/사라짐) = 15개 구절. 각「iti(이것이) + 온 명사 + 속격 + samudayo/atthaṅgamo」동일 패턴',
    '핵심 문법: iti = "이것이~이다"(인용/지시). 속격(-ssa, -āya, -ānaṃ)으로 소유/소속 표현. samudayo(생겨남), atthaṅgamo(사라짐) 남성 주격',
    '오온(五蘊, pañcakkhandha): rūpaṃ(물질/색), vedanā(느낌/수), saññā(인식/상), saṅkhārā(형성/행), viññāṇaṃ(의식/식)',
    '성/수 변화: rūpaṃ(중성), vedanā·saññā(여성, 속격 -āya), saṅkhārā(남성 복수, 속격 -ānaṃ), viññāṇaṃ(중성, 속격 -assa)',
  ],
}

export const VERSE_9_WORDS: VerseWord[] = [
  { pali: 'iti', pronKo: '이띠', meaning: '이것이 ~이다', grammar: '불변어(인용사/지시사)' },
  { pali: 'rūpaṃ', pronKo: '루-빵', meaning: '물질/색(色)', grammar: '중성 단수 주격', important: true },
  { pali: 'rūpassa', pronKo: '루-빳사', meaning: '물질의', grammar: '중성 단수 속격' },
  { pali: 'samudayo', pronKo: '사무다요', meaning: '생겨남/발생(集)', grammar: '남성 단수 주격', important: true },
  { pali: 'atthaṅgamo', pronKo: '앗탕가모', meaning: '사라짐/소멸', grammar: '남성 단수 주격 (attha + gama)', important: true },
  { pali: 'vedanā', pronKo: '웨다나-', meaning: '느낌/수(受)', grammar: '여성 단수 주격', important: true },
  { pali: 'vedanāya', pronKo: '웨다나-야', meaning: '느낌의', grammar: '여성 단수 속격' },
  { pali: 'saññā', pronKo: '산냐-', meaning: '인식/상(想)', grammar: '여성 단수 주격', important: true },
  { pali: 'saññāya', pronKo: '산냐-야', meaning: '인식의', grammar: '여성 단수 속격' },
  { pali: 'saṅkhārā', pronKo: '상카-라-', meaning: '의지적 형성/행(行)', grammar: '남성 복수 주격', important: true },
  { pali: 'saṅkhārānaṃ', pronKo: '상카-라-낭', meaning: '형성들의', grammar: '남성 복수 속격' },
  { pali: 'viññāṇaṃ', pronKo: '윈냐-낭', meaning: '의식/식(識)', grammar: '중성 단수 주격', important: true },
  { pali: 'viññāṇassa', pronKo: '윈냐-낫사', meaning: '의식의', grammar: '중성 단수 속격' },
]

/** 제10단락: 법념처 — 사성제 (saccapabba) */
export const VERSE_10 = {
  pali: 'Idha bhikkhave bhikkhu idaṃ dukkhanti yathābhūtaṃ pajānāti, ayaṃ dukkhasamudayoti yathābhūtaṃ pajānāti, ayaṃ dukkhanirodhoti yathābhūtaṃ pajānāti, ayaṃ dukkhanirodhagāminī paṭipadāti yathābhūtaṃ pajānāti.',
  pronKo: '이다 빅카웨 빅쿠 이당 둑칸띠 야타-부-땅 빠자-나-띠, 아양 둑카사무다요띠 야타-부-땅 빠자-나-띠, 아양 둑카니로도띠 야타-부-땅 빠자-나-띠, 아양 둑카니로다가-미니- 빠띠빠다-띠 야타-부-땅 빠자-나-띠.',
  translation: '여기서 비구는 "이것이 괴로움이다"라고 있는 그대로 알아차린다, "이것이 괴로움의 발생이다"라고 있는 그대로 알아차린다, "이것이 괴로움의 소멸이다"라고 있는 그대로 알아차린다, "이것이 괴로움의 소멸로 이끄는 도이다"라고 있는 그대로 알아차린다.',
  grammarNotes: [
    '문장 구조: 사성제 정형구 4회 반복.「지시대명사 + 사성제 명사 + ti(인용사) + yathābhūtaṃ(부사) + pajānāti(동사)」',
    '핵심 문법: ti(=iti)가 직접 인용을 닫음. yathābhūtaṃ = yathā(~처럼)+bhūta(있는 그대로), 부사적 대격. Idaṃ(중성)과 ayaṃ(남성)이 성에 따라 교체',
    '복합어: dukkhasamudayo = dukkha(고)+samudaya(발생/집), dukkhanirodho = dukkha+nirodha(소멸/멸), dukkhanirodhagāminī = dukkha+nirodha+gāminī(이끄는, 여성형)',
    '성 일치: paṭipadā(여성)를 수식하는 dukkhanirodhagāminī도 여성형(-inī). dukkhanti = dukkhaṃ+iti (연성)',
  ],
}

export const VERSE_10_WORDS: VerseWord[] = [
  { pali: 'Idaṃ', pronKo: '이당', meaning: '이것은', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'dukkhanti', pronKo: '둑칸띠', meaning: '"괴로움이다"라고', grammar: 'dukkhaṃ + iti (연성)', important: true },
  { pali: 'yathābhūtaṃ', pronKo: '야타-부-땅', meaning: '있는 그대로', grammar: '불변어(부사, yathā + bhūta)', important: true },
  { pali: 'dukkhasamudayoti', pronKo: '둑카사무다요띠', meaning: '"괴로움의 발생이다"라고', grammar: 'dukkhasamudayo + iti', important: true },
  { pali: 'dukkhanirodhoti', pronKo: '둑카니로도띠', meaning: '"괴로움의 소멸이다"라고', grammar: 'dukkhanirodho + iti', important: true },
  { pali: 'dukkhanirodhagāminī', pronKo: '둑카니로다가-미니-', meaning: '괴로움의 소멸로 이끄는', grammar: '형용사 여성 단수 주격 (dukkha+nirodha+gāmin)', important: true },
  { pali: 'paṭipadāti', pronKo: '빠띠빠다-띠', meaning: '"도/실천이다"라고', grammar: '여성 단수 주격 + iti', important: true },
]

/** 제11단락: 결론 — 수행의 과보 */
export const VERSE_11 = {
  pali: 'Yo hi koci bhikkhave ime cattāro satipaṭṭhāne evaṃ bhāveyya sattavassāni, tassa dvinnaṃ phalānaṃ aññataraṃ phalaṃ pāṭikaṅkhaṃ — diṭṭheva dhamme aññā, sati vā upādisese anāgāmitā.',
  pronKo: '요 히 꼬찌 빅카웨 이메 짯따-로 사띠빳타-네 에왕 바-웨이야 삿따왓사-니, 땃사 드윈낭 팔라-낭 안냐따랑 팔랑 빠-띠깡캉 — 딧테와 담메 안냐-, 사띠 와- 우빠-디세세 아나-가-미따-.',
  translation: '비구들이여, 누구든 이 네 가지 새김의 확립을 이와 같이 7년간 닦으면, 그에게는 두 과보 중 하나를 기대할 수 있으니 — 현생에서의 완전한 앎(아라한과), 또는 남은 집착이 있으면 불환과이다.',
  grammarNotes: [
    '문장 구조: 조건절(yo...bhāveyya) + 주절(tassa...pāṭikaṅkhaṃ) + 동격 보충(aññā/anāgāmitā). 가정법(optative) 사용',
    '핵심 문법: bhāveyya = 가정법 3인칭 단수("닦으면", bhāveti). sattavassāni = 7년간(대격, 시간의 지속). pāṭikaṅkhaṃ = "기대할 수 있는"(미래수동분사)',
    '복합어: satipaṭṭhāne = sati+paṭṭhāna(새김의 확립, 복수 대격). upādisese = upādi(집착의 기반)+sesa(남은), 처격. anāgāmitā = an+āgāmin(불환자)+tā(추상명사)',
    '두 과보: aññā = 완전한 앎(아라한과), anāgāmitā = 불환과(不還果). diṭṭheva dhamme = diṭṭha+eva+dhamme "현생에서 바로"',
  ],
}

export const VERSE_11_WORDS: VerseWord[] = [
  { pali: 'Yo', pronKo: '요', meaning: '누구든', grammar: '관계대명사 남성 단수 주격' },
  { pali: 'hi', pronKo: '히', meaning: '실로/참으로', grammar: '불변어(강조사)' },
  { pali: 'koci', pronKo: '꼬찌', meaning: '어떤/누구든', grammar: '부정대명사 남성 단수 주격 (ko + ci)' },
  { pali: 'ime', pronKo: '이메', meaning: '이', grammar: '지시대명사 남성 복수 대격' },
  { pali: 'satipaṭṭhāne', pronKo: '사띠빳타-네', meaning: '새김의 확립을', grammar: '남성 복수 대격 (sati + paṭṭhāna)', important: true },
  { pali: 'evaṃ', pronKo: '에왕', meaning: '이와 같이', grammar: '불변어(부사)' },
  { pali: 'bhāveyya', pronKo: '바-웨이야', meaning: '닦으면/수행하면', grammar: '가정법 3인칭 단수 (bhāveti)', important: true },
  { pali: 'sattavassāni', pronKo: '삿따왓사-니', meaning: '7년간', grammar: '중성 복수 대격 (satta + vassa)', important: true },
  { pali: 'tassa', pronKo: '땃사', meaning: '그에게', grammar: '대명사 남성 단수 속격/여격' },
  { pali: 'dvinnaṃ', pronKo: '드윈낭', meaning: '두 가지의', grammar: '수사 중성 복수 속격' },
  { pali: 'phalānaṃ', pronKo: '팔라-낭', meaning: '과보들의', grammar: '중성 복수 속격', important: true },
  { pali: 'aññataraṃ', pronKo: '안냐따랑', meaning: '하나를/어느 하나', grammar: '부정대명사 중성 단수 대격' },
  { pali: 'phalaṃ', pronKo: '팔랑', meaning: '과보를', grammar: '중성 단수 대격', important: true },
  { pali: 'pāṭikaṅkhaṃ', pronKo: '빠-띠깡캉', meaning: '기대할 수 있는', grammar: '미래수동분사 중성 단수 대격 (paṭi + kaṅkhati)' },
  { pali: 'diṭṭheva', pronKo: '딧테와', meaning: '현(생에서) 바로', grammar: 'diṭṭha(보여진)+eva(바로)', important: true },
  { pali: 'dhamme', pronKo: '담메', meaning: '법에서/현생에서', grammar: '남성 단수 처격' },
  { pali: 'aññā', pronKo: '안냐-', meaning: '완전한 앎(아라한과)', grammar: '여성 단수 주격', important: true },
  { pali: 'upādisese', pronKo: '우빠-디세세', meaning: '남은 집착이 있으면', grammar: '남성 단수 처격 (upādi + sesa)' },
  { pali: 'anāgāmitā', pronKo: '아나-가-미따-', meaning: '불환과(不還果)', grammar: '여성 단수 주격 (an + āgāmin + tā)', important: true },
]

/** 제12단락: 결미 — "유일한 길" 재확인 */
export const VERSE_12 = {
  pali: 'Ekāyano ayaṃ bhikkhave maggo sattānaṃ visuddhiyā, sokaparidevānaṃ samatikkamāya, dukkhadomanassānaṃ atthaṅgamāya, ñāyassa adhigamāya, nibbānassa sacchikiriyāya, yadidaṃ cattāro satipaṭṭhānā ti. Iti yaṃ taṃ vuttaṃ idametaṃ paṭicca vuttanti.',
  pronKo: '에까-야노 아양 빅카웨 맥고 삿따-낭 위숫디야-, 소까빠리데와-낭 사마띡까마-야, 둑카도마낫사-낭 앗탕가마-야, 냐-얏사 아디가마-야, 닙바-낫사 삿치끼리야-야, 야디당 짯따-로 사띠빳타-나- 띠. 이띠 양 땅 웃땅 이다메땅 빠띳짜 웃딴띠.',
  translation: '"비구들이여, 이것은 중생의 청정을 위한 유일한 길이니... 곧 네 가지 새김의 확립이다"라고. 이와 같이 말씀하신 것은 이것을 두고 말씀하신 것이다.',
  grammarNotes: [
    '문장 구조: 서문(VERSE_1) 반복 + 결미 정형구. 경전 전체를 감싸는 수미상관(首尾相關) 구조',
    '핵심 문법: "Iti yaṃ taṃ vuttaṃ idametaṃ paṭicca vuttanti" — 관계대명사 구문. yaṃ(관계대명사 중성)+"말씀하신 것", idametaṃ(idam+etaṃ)="바로 이것", paṭicca="~에 관하여/~을 두고"',
    '복합어: idametaṃ = idaṃ(이것)+etaṃ(그것). vuttanti = vuttaṃ(말씀하신 것, 과거분사)+iti',
    '수미상관: 경전 시작과 끝에 동일한 "Ekāyano ayaṃ maggo" 선언을 반복하여 구조적 완결성 부여',
  ],
}

export const VERSE_12_WORDS: VerseWord[] = [
  { pali: 'yaṃ', pronKo: '양', meaning: '~한 것을', grammar: '관계대명사 중성 단수 대격' },
  { pali: 'taṃ', pronKo: '땅', meaning: '그것을', grammar: '지시대명사 중성 단수 대격' },
  { pali: 'vuttaṃ', pronKo: '웃땅', meaning: '말씀하신 것', grammar: '과거분사 중성 단수 주격/대격 (vuccati)', important: true },
  { pali: 'idametaṃ', pronKo: '이다메땅', meaning: '바로 이것을', grammar: 'idaṃ(이것) + etaṃ(그것)', important: true },
  { pali: 'paṭicca', pronKo: '빠띳짜', meaning: '~을 두고/~에 관하여', grammar: '절대분사 (paṭi + icca)', important: true },
  { pali: 'vuttanti', pronKo: '웃딴띠', meaning: '"말씀하신 것이다"라고', grammar: 'vuttaṃ + iti (연성)' },
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
]

// ── 전체 단어 (중복 제거) ──
export const ALL_SATIPATTHANA_WORDS: VerseWord[] = (() => {
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
