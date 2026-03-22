// 행복경(Maṅgala Sutta) — 본문 모든 단어 데이터
// 출처: Khuddakapāṭha 5, Suttanipāta 2.4

import type { VerseWord } from './types'

// ── 행복경 원문 (게송별) ──

/** 서문: 천신의 질문 */
export const VERSE_0 = {
  pali: 'Evaṃ me sutaṃ — ekaṃ samayaṃ bhagavā Sāvatthiyaṃ viharati Jetavane Anāthapiṇḍikassa ārāme.',
  pronKo: '에왕 메 수땅 — 에깡 사마양 바가와- 사-왓티양 위하라띠 제따와네 아나-타삔디깟사 아-라-메.',
  translation: '이와 같이 나는 들었다 — 한 때 세존께서 사왓티의 제따와나 아나타삔디까의 동산에 머무셨다.',
}

export const VERSE_0_WORDS: VerseWord[] = [
  { pali: 'Evaṃ', pronKo: '에왕', meaning: '이와 같이', grammar: '불변어(부사)' },
  { pali: 'me', pronKo: '메', meaning: '나는/나에게', grammar: '1인칭 단수 주격/여격' },
  { pali: 'sutaṃ', pronKo: '수땅', meaning: '들은 것', grammar: '과거분사 중성 단수 주격 (su + ta)' },
  { pali: 'ekaṃ', pronKo: '에깡', meaning: '하나의/한', grammar: '수사 중성 단수 대격' },
  { pali: 'samayaṃ', pronKo: '사마양', meaning: '때/시기', grammar: '남성 단수 대격' },
  { pali: 'bhagavā', pronKo: '바가와-', meaning: '세존(부처님)', grammar: '남성 단수 주격' },
  { pali: 'Sāvatthiyaṃ', pronKo: '사-왓티양', meaning: '사왓티에서', grammar: '여성 단수 처격 (지명)' },
  { pali: 'viharati', pronKo: '위하라띠', meaning: '머무시다', grammar: '현재 3인칭 단수 (vi + harati)' },
  { pali: 'Jetavane', pronKo: '제따와네', meaning: '제따와나에서', grammar: '중성 단수 처격 (지명)' },
  { pali: 'Anāthapiṇḍikassa', pronKo: '아나-타삔디깟사', meaning: '아나타삔디까의', grammar: '남성 단수 속격 (인명)' },
  { pali: 'ārāme', pronKo: '아-라-메', meaning: '동산/정원에서', grammar: '남성 단수 처격' },
]

/** 제1게송: 천신의 질문 */
export const VERSE_1 = {
  pali: 'Bahū devā manussā ca, maṅgalāni acintayuṃ;\nākaṅkhamānā sotthānaṃ, brūhi maṅgalamuttamaṃ.',
  pronKo: '바후- 데와- 마눗사- 짜, 망갈라-니 아찐따융;\n아-깡카마-나- 솟타-낭, 브루-히 망갈라뭇따망.',
  translation: '많은 천신과 인간들이 행복을 생각하며,\n안녕을 바라나니, 최상의 행복을 말씀해 주소서.',
}

export const VERSE_1_WORDS: VerseWord[] = [
  { pali: 'Bahū', pronKo: '바후-', meaning: '많은', grammar: '형용사 남성 복수 주격' },
  { pali: 'devā', pronKo: '데와-', meaning: '천신들', grammar: '남성 복수 주격' },
  { pali: 'manussā', pronKo: '마눗사-', meaning: '인간들', grammar: '남성 복수 주격' },
  { pali: 'ca', pronKo: '짜', meaning: '~과/그리고', grammar: '불변어(접속사)' },
  { pali: 'maṅgalāni', pronKo: '망갈라-니', meaning: '행복들을/길상들을', grammar: '중성 복수 대격' },
  { pali: 'acintayuṃ', pronKo: '아찐따융', meaning: '생각했다', grammar: '과거 3인칭 복수 (cinteti)' },
  { pali: 'ākaṅkhamānā', pronKo: '아-깡카마-나-', meaning: '바라면서/원하면서', grammar: '현재분사 남성 복수 주격' },
  { pali: 'sotthānaṃ', pronKo: '솟타-낭', meaning: '안녕을/행복을', grammar: '중성 단수 대격' },
  { pali: 'brūhi', pronKo: '브루-히', meaning: '말씀해 주소서', grammar: '명령형 2인칭 단수 (brūti)' },
  { pali: 'maṅgalamuttamaṃ', pronKo: '망갈라뭇따망', meaning: '최상의 행복을', grammar: '중성 단수 대격 (maṅgala + uttama 연성)' },
]

/** 제2게송 */
export const VERSE_2 = {
  pali: 'Asevanā ca bālānaṃ, paṇḍitānañca sevanā;\npūjā ca pūjanīyānaṃ, etaṃ maṅgalamuttamaṃ.',
  pronKo: '아세와나- 짜 바-라-낭, 빤디따-난짜 세와나-;\n뿌-자- 짜 뿌-자니-야-낭, 에땅 망갈라뭇따망.',
  translation: '어리석은 이를 가까이하지 않고, 현명한 이를 가까이하며,\n공양받을 분을 공양함, 이것이 최상의 행복이니라.',
}

export const VERSE_2_WORDS: VerseWord[] = [
  { pali: 'Asevanā', pronKo: '아세와나-', meaning: '가까이하지 않음', grammar: '여성 단수 주격 (a + sevanā)' },
  { pali: 'bālānaṃ', pronKo: '바-라-낭', meaning: '어리석은 이들의/을', grammar: '남성 복수 속격' },
  { pali: 'paṇḍitānañca', pronKo: '빤디따-난짜', meaning: '현명한 이들의 + 그리고', grammar: '남성 복수 속격 + ca (연성)' },
  { pali: 'sevanā', pronKo: '세와나-', meaning: '가까이함/섬김', grammar: '여성 단수 주격' },
  { pali: 'pūjā', pronKo: '뿌-자-', meaning: '공양/존경', grammar: '여성 단수 주격' },
  { pali: 'pūjanīyānaṃ', pronKo: '뿌-자니-야-낭', meaning: '공양받을 이들의/을', grammar: '남성 복수 속격 (pūjanīya: 의무분사)' },
  { pali: 'etaṃ', pronKo: '에땅', meaning: '이것이', grammar: '지시대명사 중성 단수 주격' },
]

/** 제3게송 */
export const VERSE_3 = {
  pali: 'Patirūpadesavāso ca, pubbe ca katapuññatā;\nattasammāpaṇidhi ca, etaṃ maṅgalamuttamaṃ.',
  pronKo: '빠띠루-빠데사와-소 짜, 뿝베 짜 까따뿐냐따-;\n앗따삼마-빠니디 짜, 에땅 망갈라뭇따망.',
  translation: '알맞은 곳에 사는 것, 전생에 지은 공덕,\n자신을 바르게 세우는 것, 이것이 최상의 행복이니라.',
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'Patirūpadesavāso', pronKo: '빠띠루-빠데사와-소', meaning: '알맞은 곳에 사는 것', grammar: '남성 단수 주격 (patirūpa + desa + vāsa)' },
  { pali: 'pubbe', pronKo: '뿝베', meaning: '이전에/전생에', grammar: '불변어(부사)' },
  { pali: 'katapuññatā', pronKo: '까따뿐냐따-', meaning: '지은 공덕이 있음', grammar: '여성 단수 주격 (kata + puñña + tā)' },
  { pali: 'attasammāpaṇidhi', pronKo: '앗따삼마-빠니디', meaning: '자신을 바르게 세움', grammar: '남성 단수 주격 (atta + sammā + paṇidhi)' },
]

/** 제4게송 */
export const VERSE_4 = {
  pali: 'Bāhusaccañca sippañca, vinayo ca susikkhito;\nsubhāsitā ca yā vācā, etaṃ maṅgalamuttamaṃ.',
  pronKo: '바-후삿짠짜 십빤짜, 위나요 짜 수식키또;\n수바-시따- 짜 야- 와-짜-, 에땅 망갈라뭇따망.',
  translation: '많이 배움과 기술, 잘 배운 계율,\n잘 한 말, 이것이 최상의 행복이니라.',
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'Bāhusaccañca', pronKo: '바-후삿짠짜', meaning: '많이 배움 + 그리고', grammar: '중성 단수 주격 + ca (bāhu + sacca)' },
  { pali: 'sippañca', pronKo: '십빤짜', meaning: '기술 + 그리고', grammar: '중성 단수 주격 + ca' },
  { pali: 'vinayo', pronKo: '위나요', meaning: '계율/율장', grammar: '남성 단수 주격' },
  { pali: 'susikkhito', pronKo: '수식키또', meaning: '잘 배운', grammar: '과거분사 남성 단수 주격 (su + sikkhita)' },
  { pali: 'subhāsitā', pronKo: '수바-시따-', meaning: '잘 말한', grammar: '과거분사 여성 단수 주격 (su + bhāsita)' },
  { pali: 'yā', pronKo: '야-', meaning: '어떤 ~이든', grammar: '관계대명사 여성 단수 주격' },
  { pali: 'vācā', pronKo: '와-짜-', meaning: '말/언어', grammar: '여성 단수 주격' },
]

/** 제5게송 */
export const VERSE_5 = {
  pali: 'Mātāpitu upaṭṭhānaṃ, puttadārassa saṅgaho;\nanākulā ca kammantā, etaṃ maṅgalamuttamaṃ.',
  pronKo: '마-따-삐뚜 우빳타-낭, 뿟따다-랏사 상가호;\n아나-꿀라- 짜 깜만따-, 에땅 망갈라뭇따망.',
  translation: '어머니와 아버지를 봉양함, 아내와 자녀를 보살핌,\n혼란 없는 생업, 이것이 최상의 행복이니라.',
}

export const VERSE_5_WORDS: VerseWord[] = [
  { pali: 'Mātāpitu', pronKo: '마-따-삐뚜', meaning: '어머니와 아버지의', grammar: '남성 복수 속격 (mātā + pitu)' },
  { pali: 'upaṭṭhānaṃ', pronKo: '우빳타-낭', meaning: '봉양/시중듦', grammar: '중성 단수 주격' },
  { pali: 'puttadārassa', pronKo: '뿟따다-랏사', meaning: '자녀와 아내의', grammar: '남성 단수 속격 (putta + dāra)' },
  { pali: 'saṅgaho', pronKo: '상가호', meaning: '보살핌/돌봄', grammar: '남성 단수 주격' },
  { pali: 'anākulā', pronKo: '아나-꿀라-', meaning: '혼란 없는', grammar: '형용사 남성 복수 주격 (a + nākula)' },
  { pali: 'kammantā', pronKo: '깜만따-', meaning: '생업들/일들', grammar: '남성 복수 주격' },
]

/** 제6게송 */
export const VERSE_6 = {
  pali: 'Dānañca dhammacariyā ca, ñātakānañca saṅgaho;\nanavajjāni kammāni, etaṃ maṅgalamuttamaṃ.',
  pronKo: '다-난짜 담마짜리야- 짜, 냐-따까-난짜 상가호;\n아나왓자-니 깜마-니, 에땅 망갈라뭇따망.',
  translation: '보시와 법다운 행동, 친족을 보살핌,\n허물없는 행위, 이것이 최상의 행복이니라.',
}

export const VERSE_6_WORDS: VerseWord[] = [
  { pali: 'Dānañca', pronKo: '다-난짜', meaning: '보시 + 그리고', grammar: '중성 단수 주격 + ca' },
  { pali: 'dhammacariyā', pronKo: '담마짜리야-', meaning: '법다운 행동', grammar: '여성 단수 주격 (dhamma + cariyā)' },
  { pali: 'ñātakānañca', pronKo: '냐-따까-난짜', meaning: '친족들의 + 그리고', grammar: '남성 복수 속격 + ca' },
  { pali: 'anavajjāni', pronKo: '아나왓자-니', meaning: '허물없는', grammar: '형용사 중성 복수 주격 (a + navajja)' },
  { pali: 'kammāni', pronKo: '깜마-니', meaning: '행위들', grammar: '중성 복수 주격' },
]

/** 제7게송 */
export const VERSE_7 = {
  pali: 'Āratī viratī pāpā, majjapānā ca saṃyamo;\nappamādo ca dhammesu, etaṃ maṅgalamuttamaṃ.',
  pronKo: '아-라띠- 위라띠- 빠-빠-, 맛자빠-나- 짜 상야모;\n앞빠마-도 짜 담메수, 에땅 망갈라뭇따망.',
  translation: '악으로부터 멀리함과 삼감, 음주를 절제함,\n법에 대한 방일하지 않음, 이것이 최상의 행복이니라.',
}

export const VERSE_7_WORDS: VerseWord[] = [
  { pali: 'Āratī', pronKo: '아-라띠-', meaning: '멀리함', grammar: '여성 단수 주격' },
  { pali: 'viratī', pronKo: '위라띠-', meaning: '삼감/절제', grammar: '여성 단수 주격' },
  { pali: 'pāpā', pronKo: '빠-빠-', meaning: '악으로부터', grammar: '중성 단수 탈격' },
  { pali: 'majjapānā', pronKo: '맛자빠-나-', meaning: '음주로부터', grammar: '중성 단수 탈격 (majja + pāna)' },
  { pali: 'saṃyamo', pronKo: '상야모', meaning: '절제/자제', grammar: '남성 단수 주격' },
  { pali: 'appamādo', pronKo: '앞빠마-도', meaning: '방일하지 않음', grammar: '남성 단수 주격 (a + pamāda)' },
  { pali: 'dhammesu', pronKo: '담메수', meaning: '법들에 대해', grammar: '남성 복수 처격' },
]

/** 제8게송 */
export const VERSE_8 = {
  pali: 'Gāravo ca nivāto ca, santuṭṭhī ca kataññutā;\nkālena dhammasavanaṃ, etaṃ maṅgalamuttamaṃ.',
  pronKo: '가-라워 짜 니와-또 짜, 산뚯티- 짜 까딴누따-;\n까-레나 담마사와낭, 에땅 망갈라뭇따망.',
  translation: '존경과 겸손, 만족과 감사함,\n때맞추어 법을 들음, 이것이 최상의 행복이니라.',
}

export const VERSE_8_WORDS: VerseWord[] = [
  { pali: 'Gāravo', pronKo: '가-라워', meaning: '존경', grammar: '남성 단수 주격' },
  { pali: 'nivāto', pronKo: '니와-또', meaning: '겸손', grammar: '남성 단수 주격' },
  { pali: 'santuṭṭhī', pronKo: '산뚯티-', meaning: '만족', grammar: '여성 단수 주격' },
  { pali: 'kataññutā', pronKo: '까딴누따-', meaning: '감사함/은혜를 앎', grammar: '여성 단수 주격 (kata + aññu + tā)' },
  { pali: 'kālena', pronKo: '까-레나', meaning: '때에 맞추어', grammar: '남성 단수 구격' },
  { pali: 'dhammasavanaṃ', pronKo: '담마사와낭', meaning: '법을 들음', grammar: '중성 단수 주격 (dhamma + savana)' },
]

/** 제9게송 */
export const VERSE_9 = {
  pali: 'Khantī ca sovacassatā, samaṇānañca dassanaṃ;\nkālena dhammasākacchā, etaṃ maṅgalamuttamaṃ.',
  pronKo: '칸띠- 짜 소와짯사따-, 사마나-난짜 닷사낭;\n까-레나 담마사-깟차-, 에땅 망갈라뭇따망.',
  translation: '인내와 유순함, 수행자들을 만남,\n때맞추어 법에 대해 논의함, 이것이 최상의 행복이니라.',
}

export const VERSE_9_WORDS: VerseWord[] = [
  { pali: 'Khantī', pronKo: '칸띠-', meaning: '인내', grammar: '여성 단수 주격' },
  { pali: 'sovacassatā', pronKo: '소와짯사따-', meaning: '유순함/말 잘 들음', grammar: '여성 단수 주격 (su + vacassa + tā)' },
  { pali: 'samaṇānañca', pronKo: '사마나-난짜', meaning: '수행자들의 + 그리고', grammar: '남성 복수 속격 + ca' },
  { pali: 'dassanaṃ', pronKo: '닷사낭', meaning: '만남/봄', grammar: '중성 단수 주격' },
  { pali: 'dhammasākacchā', pronKo: '담마사-깟차-', meaning: '법에 대한 논의', grammar: '여성 단수 주격 (dhamma + sākacchā)' },
]

/** 제10게송 */
export const VERSE_10 = {
  pali: 'Tapo ca brahmacariyañca, ariyasaccāna dassanaṃ;\nnibbānasacchikiriyā ca, etaṃ maṅgalamuttamaṃ.',
  pronKo: '따뽀 짜 브라흐마짜리얀짜, 아리야삿짜-나 닷사낭;\n닙바-나삿치끼리야- 짜, 에땅 망갈라뭇따망.',
  translation: '고행과 청정한 삶, 성스러운 진리를 봄,\n열반의 실현, 이것이 최상의 행복이니라.',
}

export const VERSE_10_WORDS: VerseWord[] = [
  { pali: 'Tapo', pronKo: '따뽀', meaning: '고행/수행', grammar: '중성 단수 주격' },
  { pali: 'brahmacariyañca', pronKo: '브라흐마짜리얀짜', meaning: '청정한 삶 + 그리고', grammar: '중성 단수 주격 + ca (brahma + cariya)' },
  { pali: 'ariyasaccāna', pronKo: '아리야삿짜-나', meaning: '성스러운 진리들의', grammar: '중성 복수 속격 (ariya + sacca)' },
  { pali: 'nibbānasacchikiriyā', pronKo: '닙바-나삿치끼리야-', meaning: '열반의 실현', grammar: '여성 단수 주격 (nibbāna + sacchikiriyā)' },
]

/** 제11게송 */
export const VERSE_11 = {
  pali: 'Phuṭṭhassa lokadhammehi, cittaṃ yassa na kampati;\nasokaṃ virajaṃ khemaṃ, etaṃ maṅgalamuttamaṃ.',
  pronKo: '풋탓사 로까담메히, 찟땅 얏사 나 깜빠띠;\n아소깡 위라장 케망, 에땅 망갈라뭇따망.',
  translation: '세상의 법에 부딪혀도, 마음이 흔들리지 않는,\n슬픔 없고 티끌 없고 평안한, 이것이 최상의 행복이니라.',
}

export const VERSE_11_WORDS: VerseWord[] = [
  { pali: 'Phuṭṭhassa', pronKo: '풋탓사', meaning: '부딪힌 자의', grammar: '과거분사 남성 단수 속격 (phusati)' },
  { pali: 'lokadhammehi', pronKo: '로까담메히', meaning: '세상의 법들에 의해', grammar: '남성 복수 구격 (loka + dhamma)' },
  { pali: 'cittaṃ', pronKo: '찟땅', meaning: '마음이', grammar: '중성 단수 주격' },
  { pali: 'yassa', pronKo: '얏사', meaning: '~의 (그의)', grammar: '관계대명사 남성 단수 속격' },
  { pali: 'na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'kampati', pronKo: '깜빠띠', meaning: '흔들리다', grammar: '현재 3인칭 단수' },
  { pali: 'asokaṃ', pronKo: '아소깡', meaning: '슬픔 없는', grammar: '형용사 중성 단수 주격 (a + soka)' },
  { pali: 'virajaṃ', pronKo: '위라장', meaning: '티끌 없는', grammar: '형용사 중성 단수 주격 (vi + raja)' },
  { pali: 'khemaṃ', pronKo: '케망', meaning: '평안한', grammar: '형용사 중성 단수 주격' },
]

/** 제12게송 (결론) */
export const VERSE_12 = {
  pali: 'Etādisāni katvāna, sabbatthamaparājitā;\nsabbattha sotthiṃ gacchanti, taṃ tesaṃ maṅgalamuttamanti.',
  pronKo: '에따-디사-니 깟와-나, 삽밧타마빠라-지따-;\n삽밧타 솟팅 갓찬띠, 땅 떼상 망갈라뭇따만띠.',
  translation: '이러한 것들을 행하여, 어디서나 패하지 않으니,\n어디서나 행복하게 가나니, 이것이 그들에게 최상의 행복이니라.',
}

export const VERSE_12_WORDS: VerseWord[] = [
  { pali: 'Etādisāni', pronKo: '에따-디사-니', meaning: '이러한 것들을', grammar: '지시대명사 중성 복수 대격' },
  { pali: 'katvāna', pronKo: '깟와-나', meaning: '행하여/하고서', grammar: '절대분사 (karoti의)' },
  { pali: 'sabbatthamaparājitā', pronKo: '삽밧타마빠라-지따-', meaning: '어디서나 패하지 않은', grammar: '형용사 남성 복수 주격 (sabbattha + a + parājita)' },
  { pali: 'sabbattha', pronKo: '삽밧타', meaning: '어디서나/모든 곳에서', grammar: '불변어(부사)' },
  { pali: 'sotthiṃ', pronKo: '솟팅', meaning: '안녕을/행복을', grammar: '여성 단수 대격' },
  { pali: 'gacchanti', pronKo: '갓찬띠', meaning: '간다/가게 된다', grammar: '현재 3인칭 복수' },
  { pali: 'taṃ', pronKo: '땅', meaning: '그것이', grammar: '지시대명사 중성 단수 주격' },
  { pali: 'tesaṃ', pronKo: '떼상', meaning: '그들에게', grammar: '3인칭 남성 복수 속격/여격' },
  { pali: 'maṅgalamuttamanti', pronKo: '망갈라뭇따만띠', meaning: '최상의 행복이니라', grammar: '중성 단수 주격 + iti (연성: uttamaṃ + iti)' },
]

// ── 전체 게송 배열 ──
export const ALL_VERSES = [
  { id: 'v0', ...VERSE_0, words: VERSE_0_WORDS },
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
export const ALL_MANGALA_WORDS: VerseWord[] = (() => {
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
