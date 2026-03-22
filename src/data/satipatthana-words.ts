// 사념처경(Mahāsatipaṭṭhāna Sutta, DN 22) — 발췌 핵심 단어 데이터
// 출처: Dīgha Nikāya 22

import type { VerseWord } from './types'

// ── 사념처경 원문 (단락별) ──

/** 제1단락: 서문 — 유일한 길 */
export const VERSE_1 = {
  pali: 'Ekāyano ayaṃ bhikkhave maggo sattānaṃ visuddhiyā, sokaparidevānaṃ samatikkamāya, dukkhadomanassānaṃ atthaṅgamāya, ñāyassa adhigamāya, nibbānassa sacchikiriyāya, yadidaṃ cattāro satipaṭṭhānā.',
  pronKo: '에까-야노 아양 빅카웨 맥고 삿따-낭 위숫디야-, 소까빠리데와-낭 사마띡까마-야, 둑카도마낫사-낭 앗탕가마-야, 냐-얏사 아디가마-야, 닙바-낫사 삿치끼리야-야, 야디당 짯따-로 사띠빳타-나-.',
  translation: '비구들이여, 이것은 중생의 청정을 위한 유일한 길이니, 슬픔과 비탄을 극복하기 위하여, 괴로움과 근심을 소멸하기 위하여, 바른 방법을 얻기 위하여, 열반을 실현하기 위하여, 곧 네 가지 새김의 확립이다.',
  grammarNotes: [
    '문장 구조: 단일 문장. 「Ekāyano ayaṃ maggo(주어+술어) + 속격 명사 + 여격 목적구 5개 나열 + yadidaṃ cattāro satipaṭṭhānā(동격 보충설명)」. 주절 뒤에 목적을 나타내는 여격 구문이 연속 배치',
    '핵심 문법: 여격(-āya)이 목적("~을 위하여")을 나타내는 용법이 5회 반복 — visuddhiyā, samatikkamāya, atthaṅgamāya, adhigamāya, sacchikiriyāya. 속격은 대상("~의")을 나타냄',
    '복합어: sokaparidevānaṃ = soka(슬픔) + parideva(비탄), dukkhadomanassānaṃ = dukkha(고) + domanassa(근심), sacchikiriyāya = sacchi(눈앞에) + kiriyā(행위, 실현). satipaṭṭhānā = sati(새김) + paṭṭhāna(확립)',
    '정형구: "Ekāyano ayaṃ maggo"는 사념처경의 대표 선언문. yadidaṃ(yad + idaṃ)은 "곧 이것은"으로 앞 문장을 구체적으로 지시하는 설명적 관계사',
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

/** 제2단락: 신념처 — 호흡 관찰 */
export const VERSE_2 = {
  pali: 'Idha bhikkhave bhikkhu kāye kāyānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ. Idha bhikkhave bhikkhu araññagato vā rukkhamūlagato vā suññāgāragato vā nisīdati pallaṅkaṃ ābhujitvā ujuṃ kāyaṃ paṇidhāya parimukhaṃ satiṃ upaṭṭhapetvā.',
  pronKo: '이다 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠 아-따-삐- 삼빠자-노 사띠마-, 위네이야 로게 아비짜-도마낫상. 이다 빅카웨 빅쿠 아란냐가또 와- 룩카무-라가또 와- 순냐-가-라가또 와- 니시-다띠 빨랑깡 아-부지뜨와- 우중 까-양 빠니다-야 빠리무캉 사띵 우빳타-뻬뜨와-.',
  translation: '비구들이여, 여기서 비구는 몸에서 몸을 관찰하며 머문다, 열심히, 분명히 알아차리며, 마음챙기며. 숲에 가거나 나무 아래에 가거나 빈 곳에 가서 가부좌하고 몸을 곧게 세우고 새김을 전면에 확립한다.',
  grammarNotes: [
    '문장 구조: 두 문장. ① 정형 관찰구「bhikkhu(주어) + kāye(처격, 대상) + kāyānupassī(서술적 형용사) + viharati(동사) + 세 형용사(ātāpī, sampajāno, satimā) + 절대분사구(vineyya...)」 ② 수행 장소·자세 묘사',
    '핵심 문법: "kāye kāyānupassī"는 처격 + 처격 복합어 형용사 구문 — "몸에서 몸을 관찰하는 자로서". 절대분사(vineyya, ābhujitvā, paṇidhāya, upaṭṭhapetvā)가 주동사에 선행하는 부대 동작을 나타냄',
    '복합어: kāyānupassī = kāya(몸) + anupassin(관찰하는 자), abhijjhādomanassaṃ = abhijjhā(탐욕) + domanassa(근심), araññagato = arañña(숲) + gata(간), rukkhamūlagato = rukkha(나무) + mūla(뿌리/아래) + gata(간)',
    '사념처 정형구: "ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ"은 사념처 각 관찰(신·수·심·법)에 반복되는 정형 수식구. 세 형용사가 수행자의 자세를, 절대분사구가 전제 조건을 표현',
  ],
}

export const VERSE_2_WORDS: VerseWord[] = [
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
]

/** 제3단락: 수념처 — 느낌 관찰 */
export const VERSE_3 = {
  pali: 'Vedanāsu vedanānupassī viharati. Sukhaṃ vā vedanaṃ vediyamāno sukhaṃ vedanaṃ vediyāmīti pajānāti. Dukkhaṃ vā vedanaṃ vediyamāno dukkhaṃ vedanaṃ vediyāmīti pajānāti.',
  pronKo: '웨다나-수 웨다나-누빳시- 위하라띠. 수캉 와- 웨다낭 웨디야마-노 수캉 웨다낭 웨디야-미-띠 빠자-나-띠. 둑캉 와- 웨다낭 웨디야마-노 둑캉 웨다낭 웨디야-미-띠 빠자-나-띠.',
  translation: '느낌에서 느낌을 관찰하며 머문다. 즐거운 느낌을 느끼면서 "즐거운 느낌을 느끼고 있다"고 알아차린다. 괴로운 느낌을 느끼면서 "괴로운 느낌을 느끼고 있다"고 알아차린다.',
  grammarNotes: [
    '문장 구조: 세 문장. ① 정형 관찰구「Vedanāsu vedanānupassī viharati」 ② ③ 동일 패턴의 반복「형용사 + vedanaṃ(대격) + vediyamāno(현재분사) → vediyāmīti pajānāti(주절)」',
    '핵심 문법: vediyamāno(현재분사 남성 주격)는 동시 진행 상태("느끼면서")를 나타냄. vediyāmīti = vediyāmi(1인칭 단수 "느끼고 있다") + iti(인용사). 직접 화법을 인용사로 감싸는 빠알리 특유 구문',
    '수념처 핵심: "Vedanāsu vedanānupassī"는 복수 처격(Vedanāsu, 느낌들에서) + 복합어 형용사(vedanā + anupassin). 제2단락 kāye kāyānupassī와 동일한 "X에서 X를 관찰" 패턴',
    '정형 반복: sukhaṃ/dukkhaṃ 교체 외 문장 구조가 완전 동일. 원전에는 adukkhamasukhaṃ(불고불락)도 포함되어 느낌의 세 유형을 모두 관찰',
  ],
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'Vedanāsu', pronKo: '웨다나-수', meaning: '느낌들에서', grammar: '여성 복수 처격', important: true },
  { pali: 'vedanānupassī', pronKo: '웨다나-누빳시-', meaning: '느낌을 관찰하는', grammar: '남성 단수 주격 (vedanā + anupassin)', important: true },
  { pali: 'Sukhaṃ', pronKo: '수캉', meaning: '즐거운/행복한', grammar: '형용사 중성 단수 대격' },
  { pali: 'vedanaṃ', pronKo: '웨다낭', meaning: '느낌을', grammar: '여성 단수 대격' },
  { pali: 'vediyamāno', pronKo: '웨디야마-노', meaning: '느끼면서', grammar: '현재분사 남성 단수 주격 (vediyati)' },
  { pali: 'vediyāmīti', pronKo: '웨디야-미-띠', meaning: '느끼고 있다 + 라고', grammar: '현재 1인칭 단수 + iti (vediyāmi + iti)' },
  { pali: 'pajānāti', pronKo: '빠자-나-띠', meaning: '알아차린다/분명히 안다', grammar: '현재 3인칭 단수 (pa + jānāti)', important: true },
  { pali: 'Dukkhaṃ', pronKo: '둑캉', meaning: '괴로운/고통스러운', grammar: '형용사 중성 단수 대격' },
]

/** 제4단락: 사성제 — 결론 */
export const VERSE_4 = {
  pali: 'Idaṃ dukkhan ti yathābhūtaṃ pajānāti, ayaṃ dukkhasamudayo ti yathābhūtaṃ pajānāti, ayaṃ dukkhanirodho ti yathābhūtaṃ pajānāti, ayaṃ dukkhanirodhagāminī paṭipadā ti yathābhūtaṃ pajānāti.',
  pronKo: '이당 둑칸 띠 야타-부-땅 빠자-나-띠, 아양 둑카사무다요 띠 야타-부-땅 빠자-나-띠, 아양 둑카니로도 띠 야타-부-땅 빠자-나-띠, 아양 둑카니로다가-미니- 빠띠빠다- 띠 야타-부-땅 빠자-나-띠.',
  translation: '"이것이 괴로움이다"라고 있는 그대로 알아차린다, "이것이 괴로움의 발생이다"라고 있는 그대로 알아차린다, "이것이 괴로움의 소멸이다"라고 있는 그대로 알아차린다, "이것이 괴로움의 소멸로 이끄는 도이다"라고 있는 그대로 알아차린다.',
  grammarNotes: [
    '문장 구조: 사성제(四聖諦) 정형구. 동일 구문 4회 반복 —「지시대명사(Idaṃ/ayaṃ) + 사성제 명사 + ti(인용사) + yathābhūtaṃ(부사) + pajānāti(동사)」. 직접 인용문 + 주절의 결합',
    '핵심 문법: ti(= iti)가 직접 인용을 닫음. yathābhūtaṃ = yathā(~처럼) + bhūta(있는 그대로), 부사적 대격으로 "있는 그대로" 인식의 방식을 나타냄. Idaṃ(중성)과 ayaṃ(남성)이 성에 따라 교체',
    '복합어: dukkhasamudayo = dukkha(고) + samudaya(발생/집), dukkhanirodho = dukkha + nirodha(소멸/멸), dukkhanirodhagāminī = dukkha + nirodha + gāminī(이끄는, 여성형 — paṭipadā를 수식). 사성제 각 항의 복합어 형성 패턴',
    '성(gender) 일치: paṭipadā(여성 명사)를 수식하는 dukkhanirodhagāminī도 여성형(-inī). 나머지 세 진리는 남성 주격(-o)으로 끝남. 지시대명사도 Idaṃ(중성, dukkhan 수식) vs ayaṃ(남성)으로 성 일치',
  ],
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'Idaṃ', pronKo: '이당', meaning: '이것은', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'dukkhan', pronKo: '둑칸', meaning: '괴로움이다', grammar: '중성 단수 주격 (dukkhaṃ의 연성형)', important: true },
  { pali: 'ti', pronKo: '띠', meaning: '~라고 (인용)', grammar: '불변어(인용사, iti의 줄임)' },
  { pali: 'yathābhūtaṃ', pronKo: '야타-부-땅', meaning: '있는 그대로', grammar: '불변어(부사, yathā + bhūta)', important: true },
  { pali: 'ayaṃ', pronKo: '아양', meaning: '이것은', grammar: '지시대명사 남성 단수 주격' },
  { pali: 'dukkhasamudayo', pronKo: '둑카사무다요', meaning: '괴로움의 발생(集)', grammar: '남성 단수 주격 (dukkha + samudaya)', important: true },
  { pali: 'dukkhanirodho', pronKo: '둑카니로도', meaning: '괴로움의 소멸(滅)', grammar: '남성 단수 주격 (dukkha + nirodha)', important: true },
  { pali: 'dukkhanirodhagāminī', pronKo: '둑카니로다가-미니-', meaning: '괴로움의 소멸로 이끄는', grammar: '형용사 여성 단수 주격 (dukkha + nirodha + gāmin)', important: true },
  { pali: 'paṭipadā', pronKo: '빠띠빠다-', meaning: '도/길/실천', grammar: '여성 단수 주격', important: true },
]

// ── 전체 단락 배열 ──
export const ALL_VERSES = [
  { id: 'v1', ...VERSE_1, words: VERSE_1_WORDS },
  { id: 'v2', ...VERSE_2, words: VERSE_2_WORDS },
  { id: 'v3', ...VERSE_3, words: VERSE_3_WORDS },
  { id: 'v4', ...VERSE_4, words: VERSE_4_WORDS },
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
