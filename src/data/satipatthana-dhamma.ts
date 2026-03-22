// 사념처경(Mahāsatipaṭṭhāna Sutta, DN 22) — 수념처 + 심념처 + 법념처 + 결론
// 출처: Dīgha Nikāya 22
// 신념처는 satipatthana-words.ts에서 관리

import type { VerseWord } from './types'

// ══════════════════════════════════════════
// 수념처 (Vedanānupassanā) — 느낌의 관찰
// ══════════════════════════════════════════

/** 수념처 제1단락: 세 가지 느낌 */
export const VERSE_1 = {
  pali: 'Kathañca pana bhikkhave bhikkhu vedanāsu vedanānupassī viharati? Idha bhikkhave bhikkhu sukhaṃ vā vedanaṃ vediyamāno sukhaṃ vedanaṃ vediyāmīti pajānāti. Dukkhaṃ vā vedanaṃ vediyamāno dukkhaṃ vedanaṃ vediyāmīti pajānāti. Adukkhamasukhaṃ vā vedanaṃ vediyamāno adukkhamasukhaṃ vedanaṃ vediyāmīti pajānāti.',
  pronKo: '까탄짜 빠나 빅카웨 빅쿠 웨다나-수 웨다나-누빳시- 위하라띠? 이다 빅카웨 빅쿠 수캉 와- 웨다낭 웨디야마-노 수캉 웨다낭 웨디야-미-띠 빠자-나-띠. 둑캉 와- 웨다낭 웨디야마-노 둑캉 웨다낭 웨디야-미-띠 빠자-나-띠. 아둑카마수캉 와- 웨다낭 웨디야마-노 아둑카마수캉 웨다낭 웨디야-미-띠 빠자-나-띠.',
  translation: '그러면 비구들이여, 비구는 어떻게 느낌들에서 느낌을 관찰하며 머무는가? 여기서 비구들이여, 비구는 즐거운 느낌을 느끼면서 "즐거운 느낌을 느끼고 있다"고 알아차린다. 괴로운 느낌을 느끼면서 "괴로운 느낌을 느끼고 있다"고 알아차린다. 즐겁지도 괴롭지도 않은 느낌을 느끼면서 "즐겁지도 괴롭지도 않은 느낌을 느끼고 있다"고 알아차린다.',
  grammarNotes: [
    '문장 구조: 도입 의문문 + 세 가지 느낌(sukha/dukkha/adukkhamasukha)의 관찰. 각 구절은 「형용사+vedanaṃ vediyamāno ... vediyāmīti pajānāti」 동일 패턴',
    '핵심 문법: vedanāsu = 처격 복수("느낌들에서"). vediyamāno = 현재수동분사("느끼면서"). vediyāmīti = vediyāmi + iti("느끼고 있다라고")',
    '복합어: vedanānupassī = vedanā(느낌) + anupassin(관찰하는). adukkhamasukhaṃ = a(不) + dukkham(괴로운) + a(不) + sukhaṃ(즐거운)',
  ],
}

export const VERSE_1_WORDS: VerseWord[] = [
  { pali: 'Kathañca', pronKo: '까탄짜', meaning: '그러면 어떻게', grammar: '의문부사 kathaṃ + ca' },
  { pali: 'pana', pronKo: '빠나', meaning: '그런데/그러면', grammar: '불변어(접속사)' },
  { pali: 'bhikkhave', pronKo: '빅카웨', meaning: '비구들이여', grammar: '남성 복수 호격' },
  { pali: 'bhikkhu', pronKo: '빅쿠', meaning: '비구는', grammar: '남성 단수 주격' },
  { pali: 'vedanāsu', pronKo: '웨다나-수', meaning: '느낌들에서', grammar: '여성 복수 처격', important: true },
  { pali: 'vedanānupassī', pronKo: '웨다나-누빳시-', meaning: '느낌을 관찰하는', grammar: '형용사 남성 단수 주격 (vedanā + anupassin)', important: true },
  { pali: 'viharati', pronKo: '위하라띠', meaning: '머문다', grammar: '현재 3인칭 단수' },
  { pali: 'Idha', pronKo: '이다', meaning: '여기서', grammar: '불변어(부사)' },
  { pali: 'sukhaṃ', pronKo: '수캉', meaning: '즐거운', grammar: '형용사 중성/여성 단수 대격', important: true },
  { pali: 'vedanaṃ', pronKo: '웨다낭', meaning: '느낌을', grammar: '여성 단수 대격', important: true },
  { pali: 'vediyamāno', pronKo: '웨디야마-노', meaning: '느끼면서', grammar: '현재수동분사 남성 단수 주격 (vedeti)', important: true },
  { pali: 'vediyāmīti', pronKo: '웨디야-미-띠', meaning: '"느끼고 있다"라고', grammar: '현재 1인칭 단수 + iti (vediyāmi + iti)' },
  { pali: 'pajānāti', pronKo: '빠자-나-띠', meaning: '알아차린다', grammar: '현재 3인칭 단수 (pa + jānāti)', important: true },
  { pali: 'Dukkhaṃ', pronKo: '둑캉', meaning: '괴로운', grammar: '형용사 중성/여성 단수 대격', important: true },
  { pali: 'Adukkhamasukhaṃ', pronKo: '아둑카마수캉', meaning: '즐겁지도 괴롭지도 않은', grammar: '형용사 (a + dukkham + a + sukhaṃ)', important: true },
]

/** 수념처 제2단락: 세간적/출세간적 느낌 (6종) + 정형문 */
export const VERSE_2 = {
  pali: 'Sāmisaṃ vā sukhaṃ vedanaṃ vediyamāno sāmisaṃ sukhaṃ vedanaṃ vediyāmīti pajānāti. Nirāmisaṃ vā sukhaṃ vedanaṃ vediyamāno nirāmisaṃ sukhaṃ vedanaṃ vediyāmīti pajānāti. Sāmisaṃ vā dukkhaṃ vedanaṃ vediyamāno sāmisaṃ dukkhaṃ vedanaṃ vediyāmīti pajānāti. Nirāmisaṃ vā dukkhaṃ vedanaṃ vediyamāno nirāmisaṃ dukkhaṃ vedanaṃ vediyāmīti pajānāti. Sāmisaṃ vā adukkhamasukhaṃ vedanaṃ vediyamāno sāmisaṃ adukkhamasukhaṃ vedanaṃ vediyāmīti pajānāti. Nirāmisaṃ vā adukkhamasukhaṃ vedanaṃ vediyamāno nirāmisaṃ adukkhamasukhaṃ vedanaṃ vediyāmīti pajānāti. Iti ajjhattaṃ vā vedanāsu vedanānupassī viharati, bahiddhā vā vedanāsu vedanānupassī viharati, ajjhattabahiddhā vā vedanāsu vedanānupassī viharati. Samudayadhammānupassī vā vedanāsu viharati, vayadhammānupassī vā vedanāsu viharati, samudayavayadhammānupassī vā vedanāsu viharati. Atthi vedanāti vā panassa sati paccupaṭṭhitā hoti yāvadeva ñāṇamattāya paṭissatimattāya anissito ca viharati, na ca kiñci loke upādiyati.',
  pronKo: '사-미상 와- 수캉 웨다낭 웨디야마-노 사-미상 수캉 웨다낭 웨디야-미-띠 빠자-나-띠. 니라-미상 와- 수캉 웨다낭 웨디야마-노 니라-미상 수캉 웨다낭 웨디야-미-띠 빠자-나-띠. 사-미상 와- 둑캉 웨다낭... 니라-미상 와- 둑캉... 사-미상 와- 아둑카마수캉... 니라-미상 와- 아둑카마수캉... 이띠 앗잣땅 와- 웨다나-수 웨다나-누빳시- 위하라띠, 바힛다- 와- 웨다나-수 웨다나-누빳시- 위하라띠, 앗잣따바힛다- 와- 웨다나-수 웨다나-누빳시- 위하라띠. 사무다야담마-누빳시- 와- 웨다나-수 위하라띠, 와야담마-누빳시- 와- 웨다나-수 위하라띠, 사무다야와야담마-누빳시- 와- 웨다나-수 위하라띠. 앗티 웨다나-띠 와- 빠낫사 사띠 빳주빳티따- 호띠 야-와데와 냐-나맛따-야 빠띳사띠맛따-야 아닛시또 짜 위하라띠, 나 짜 긴찌 로게 우빠-디야띠.',
  translation: '세간적 즐거운 느낌을 느끼면서 "세간적 즐거운 느낌을 느끼고 있다"고 알아차린다. 출세간적 즐거운 느낌을 느끼면서 "출세간적 즐거운 느낌을 느끼고 있다"고 알아차린다. 세간적 괴로운 느낌을... 출세간적 괴로운 느낌을... 세간적 즐겁지도 괴롭지도 않은 느낌을... 출세간적 즐겁지도 괴롭지도 않은 느낌을... 이와 같이 안으로 느낌들에서 느낌을 관찰하며 머물고, 밖으로... 안팎으로... 생겨남의 법칙을 관찰하며... 사라짐의... 생멸의... "느낌이 있다"는 새김이 확립되니, 앎만을 위해, 새김만을 위해, 의지하지 않고 머물며 세상에서 아무것도 취착하지 않는다.',
  grammarNotes: [
    '문장 구조: 6가지 세간적/출세간적 느낌 관찰 + 수념처 정형문(refrain). sāmisa/nirāmisa × sukha/dukkha/adukkhamasukha = 6종',
    '핵심 문법: sāmisaṃ = sa(有) + āmisa(물질적 쾌락) → "세간적인". nirāmisaṃ = nir(無) + āmisa → "출세간적인"',
    '정형문: 신념처의 kāye → vedanāsu로 교체된 동일 구조. 안/밖/안팎 + 생/멸/생멸 + 새김 확립',
  ],
}

export const VERSE_2_WORDS: VerseWord[] = [
  { pali: 'Sāmisaṃ', pronKo: '사-미상', meaning: '세간적인/물질적인', grammar: '형용사 (sa + āmisa)', important: true },
  { pali: 'Nirāmisaṃ', pronKo: '니라-미상', meaning: '출세간적인/비물질적인', grammar: '형용사 (nir + āmisa)', important: true },
  { pali: 'ajjhattaṃ', pronKo: '앗잣땅', meaning: '안으로/내적으로', grammar: '부사' },
  { pali: 'bahiddhā', pronKo: '바힛다-', meaning: '밖으로/외적으로', grammar: '부사' },
  { pali: 'ajjhattabahiddhā', pronKo: '앗잣따바힛다-', meaning: '안팎으로', grammar: '부사' },
  { pali: 'Samudayadhammānupassī', pronKo: '사무다야담마-누빳시-', meaning: '생겨남의 법칙을 관찰하는', grammar: '형용사 남성 단수 주격' },
  { pali: 'vayadhammānupassī', pronKo: '와야담마-누빳시-', meaning: '사라짐의 법칙을 관찰하는', grammar: '형용사 남성 단수 주격' },
  { pali: 'samudayavayadhammānupassī', pronKo: '사무다야와야담마-누빳시-', meaning: '생멸의 법칙을 관찰하는', grammar: '형용사 남성 단수 주격' },
  { pali: 'vedanāti', pronKo: '웨다나-띠', meaning: '"느낌이"라고', grammar: '여성 단수 주격 + iti' },
  { pali: 'sati', pronKo: '사띠', meaning: '새김/마음챙김', grammar: '여성 단수 주격' },
  { pali: 'paccupaṭṭhitā', pronKo: '빳주빳티따-', meaning: '확립된', grammar: '과거분사 여성 단수 주격' },
  { pali: 'ñāṇamattāya', pronKo: '냐-나맛따-야', meaning: '앎만을 위해', grammar: '중성 단수 여격 (ñāṇa + matta)' },
  { pali: 'paṭissatimattāya', pronKo: '빠띳사띠맛따-야', meaning: '새김만을 위해', grammar: '여성 단수 여격' },
  { pali: 'anissito', pronKo: '아닛시또', meaning: '의지하지 않는', grammar: '과거분사 남성 단수 주격' },
  { pali: 'upādiyati', pronKo: '우빠-디야띠', meaning: '취착하다', grammar: '현재 3인칭 단수' },
]

// ══════════════════════════════════════════
// 심념처 (Cittānupassanā) — 마음의 관찰
// ══════════════════════════════════════════

/** 심념처: 16가지 마음 상태 + 정형문 */
export const VERSE_3 = {
  pali: 'Kathañca pana bhikkhave bhikkhu citte cittānupassī viharati? Idha bhikkhave bhikkhu sarāgaṃ vā cittaṃ sarāgaṃ cittanti pajānāti. Vītarāgaṃ vā cittaṃ vītarāgaṃ cittanti pajānāti. Sadosaṃ vā cittaṃ sadosaṃ cittanti pajānāti. Vītadosaṃ vā cittaṃ vītadosaṃ cittanti pajānāti. Samohaṃ vā cittaṃ samohaṃ cittanti pajānāti. Vītamohaṃ vā cittaṃ vītamohaṃ cittanti pajānāti. Saṅkhittaṃ vā cittaṃ saṅkhittaṃ cittanti pajānāti. Vikkhittaṃ vā cittaṃ vikkhittaṃ cittanti pajānāti. Mahaggataṃ vā cittaṃ mahaggataṃ cittanti pajānāti. Amahaggataṃ vā cittaṃ amahaggataṃ cittanti pajānāti. Sauttaraṃ vā cittaṃ sauttaraṃ cittanti pajānāti. Anuttaraṃ vā cittaṃ anuttaraṃ cittanti pajānāti. Samāhitaṃ vā cittaṃ samāhitaṃ cittanti pajānāti. Asamāhitaṃ vā cittaṃ asamāhitaṃ cittanti pajānāti. Vimuttaṃ vā cittaṃ vimuttaṃ cittanti pajānāti. Avimuttaṃ vā cittaṃ avimuttaṃ cittanti pajānāti. Iti ajjhattaṃ vā citte cittānupassī viharati, bahiddhā vā citte cittānupassī viharati, ajjhattabahiddhā vā citte cittānupassī viharati. Samudayadhammānupassī vā cittasmiṃ viharati, vayadhammānupassī vā cittasmiṃ viharati, samudayavayadhammānupassī vā cittasmiṃ viharati. Atthi cittanti vā panassa sati paccupaṭṭhitā hoti yāvadeva ñāṇamattāya paṭissatimattāya anissito ca viharati, na ca kiñci loke upādiyati.',
  pronKo: '까탄짜 빠나 빅카웨 빅쿠 짓떼 짓따-누빳시- 위하라띠? 이다 빅카웨 빅쿠 사라-강 와- 짓땅 사라-강 짓딴띠 빠자-나-띠. 위-따라-강 와- 짓땅 위-따라-강 짓딴띠 빠자-나-띠. 사도상 와- 짓땅... 위-따도상 와-... 사모항 와-... 위-따모항 와-... 상킷땅 와-... 윅킷땅 와-... 마학가땅 와-... 아마학가땅 와-... 사웃따랑 와-... 아눗따랑 와-... 사마-히땅 와-... 아사마-히땅 와-... 위뭇땅 와-... 아위뭇땅 와-... 이띠 앗잣땅 와- 짓떼 짓따-누빳시- 위하라띠, 바힛다- 와-... 앗잣따바힛다- 와-... 사무다야담마-누빳시- 와- 짓따스밍 위하라띠... 앗티 짓딴띠 와- 빠낫사 사띠 빳주빳티따- 호띠...',
  translation: '그러면 비구들이여, 비구는 어떻게 마음에서 마음을 관찰하며 머무는가? 여기서 비구는 탐욕 있는 마음을 "탐욕 있는 마음"이라고 알아차린다. 탐욕 없는 마음을... 성냄 있는 마음을... 성냄 없는 마음을... 미혹 있는 마음을... 미혹 없는 마음을... 수축된 마음을... 산란된 마음을... 넓어진 마음을... 넓어지지 않은 마음을... 위가 있는 마음을... 위가 없는 마음을... 삼매에 든 마음을... 삼매에 들지 않은 마음을... 해탈한 마음을... 해탈하지 않은 마음을... 이와 같이 안으로/밖으로/안팎으로 마음에서 마음을 관찰하며 머문다... "마음이 있다"는 새김이 확립되니...',
  grammarNotes: [
    '문장 구조: 도입 의문문 + 16가지 마음 상태(8쌍) 관찰 + 정형문. 각 구절은 「형용사+cittaṃ 형용사+cittanti pajānāti」 동일 패턴',
    '핵심 문법: cittānupassī = citta(마음) + anupassin(관찰하는). 16가지 마음은 8쌍의 대립: sa-(有)/vīta-(離), sa-(有)/a-(無)',
    '8쌍: sarāga/vītarāga(탐욕), sadosa/vītadosa(성냄), samoha/vītamoha(미혹), saṅkhitta/vikkhitta(수축/산란), mahaggata/amahaggata(넓어진), sauttara/anuttara(위 있는), samāhita/asamāhita(삼매), vimutta/avimutta(해탈)',
    '접두어: sa- = "~가 있는", vīta- = "떠난/없는", a- = "~가 아닌"',
  ],
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'citte', pronKo: '짓떼', meaning: '마음에서', grammar: '중성 단수 처격', important: true },
  { pali: 'cittānupassī', pronKo: '짓따-누빳시-', meaning: '마음을 관찰하는', grammar: '형용사 남성 단수 주격 (citta + anupassin)', important: true },
  { pali: 'sarāgaṃ', pronKo: '사라-강', meaning: '탐욕 있는', grammar: '형용사 중성 단수 대격 (sa + rāga)', important: true },
  { pali: 'cittaṃ', pronKo: '짓땅', meaning: '마음을', grammar: '중성 단수 대격', important: true },
  { pali: 'cittanti', pronKo: '짓딴띠', meaning: '"마음이다"라고', grammar: '중성 단수 주격 + iti (cittaṃ + ti)' },
  { pali: 'Vītarāgaṃ', pronKo: '위-따라-강', meaning: '탐욕 없는(떠난)', grammar: '형용사 (vīta + rāga)', important: true },
  { pali: 'Sadosaṃ', pronKo: '사도상', meaning: '성냄 있는', grammar: '형용사 (sa + dosa)', important: true },
  { pali: 'Vītadosaṃ', pronKo: '위-따도상', meaning: '성냄 없는', grammar: '형용사 (vīta + dosa)', important: true },
  { pali: 'Samohaṃ', pronKo: '사모항', meaning: '미혹 있는', grammar: '형용사 (sa + moha)', important: true },
  { pali: 'Vītamohaṃ', pronKo: '위-따모항', meaning: '미혹 없는', grammar: '형용사 (vīta + moha)', important: true },
  { pali: 'Saṅkhittaṃ', pronKo: '상킷땅', meaning: '수축된/위축된', grammar: '과거분사 (saṅkhipati)', important: true },
  { pali: 'Vikkhittaṃ', pronKo: '윅킷땅', meaning: '산란된/흩어진', grammar: '과거분사 (vikkhipati)', important: true },
  { pali: 'Mahaggataṃ', pronKo: '마학가땅', meaning: '넓어진/고양된', grammar: '과거분사 (mahā + gata)', important: true },
  { pali: 'Amahaggataṃ', pronKo: '아마학가땅', meaning: '넓어지지 않은', grammar: '형용사 (a + mahaggata)' },
  { pali: 'Sauttaraṃ', pronKo: '사웃따랑', meaning: '위가 있는/더 뛰어난 것이 있는', grammar: '형용사 (sa + uttara)', important: true },
  { pali: 'Anuttaraṃ', pronKo: '아눗따랑', meaning: '위가 없는/최상의', grammar: '형용사 (an + uttara)', important: true },
  { pali: 'Samāhitaṃ', pronKo: '사마-히땅', meaning: '삼매에 든/집중된', grammar: '과거분사 (samādahati)', important: true },
  { pali: 'Asamāhitaṃ', pronKo: '아사마-히땅', meaning: '삼매에 들지 않은', grammar: '형용사 (a + samāhita)' },
  { pali: 'Vimuttaṃ', pronKo: '위뭇땅', meaning: '해탈한/해방된', grammar: '과거분사 (vimuñcati)', important: true },
  { pali: 'Avimuttaṃ', pronKo: '아위뭇땅', meaning: '해탈하지 않은', grammar: '형용사 (a + vimutta)' },
  { pali: 'cittasmiṃ', pronKo: '짓따스밍', meaning: '마음에(서)', grammar: '중성 단수 처격' },
]

// ══════════════════════════════════════════
// 법념처 (Dhammānupassanā) — 법의 관찰
// ══════════════════════════════════════════

// ── 1. 오개 (Nīvaraṇapabba) — 5가지 장애 ──

/** 법념처 도입 + 오개 도입 */
export const VERSE_4 = {
  pali: 'Kathañca pana bhikkhave bhikkhu dhammesu dhammānupassī viharati? Idha bhikkhave bhikkhu dhammesu dhammānupassī viharati pañcasu nīvaraṇesu. Kathañca pana bhikkhave bhikkhu dhammesu dhammānupassī viharati pañcasu nīvaraṇesu?',
  pronKo: '까탄짜 빠나 빅카웨 빅쿠 담메수 담마-누빳시- 위하라띠? 이다 빅카웨 빅쿠 담메수 담마-누빳시- 위하라띠 빤짜수 니-와라네수. 까탄짜 빠나 빅카웨 빅쿠 담메수 담마-누빳시- 위하라띠 빤짜수 니-와라네수?',
  translation: '그러면 비구들이여, 비구는 어떻게 법들에서 법을 관찰하며 머무는가? 여기서 비구들이여, 비구는 법들에서 법을 관찰하며 다섯 가지 장애에서 머문다. 그러면 비구들이여, 비구는 어떻게 다섯 가지 장애에서 법들에서 법을 관찰하며 머무는가?',
  grammarNotes: [
    '문장 구조: 법념처의 총론적 도입 의문문 + 오개(五蓋) 소단원 도입. 동일 의문문이 두 번 반복 — 첫째는 법념처 전체, 둘째는 오개 소단원 도입',
    '핵심 문법: dhammesu = 처격 복수("법들에서"). dhammānupassī = dhamma + anupassin. nīvaraṇesu = 처격 복수("장애들에서")',
    '복합어: nīvaraṇa = nī(아래로) + varaṇa(덮는) → "덮어 가리는 것/장애". pañcasu = 수사 5의 처격 복수',
  ],
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'dhammesu', pronKo: '담메수', meaning: '법들에서', grammar: '남성 복수 처격', important: true },
  { pali: 'dhammānupassī', pronKo: '담마-누빳시-', meaning: '법을 관찰하는', grammar: '형용사 남성 단수 주격 (dhamma + anupassin)', important: true },
  { pali: 'pañcasu', pronKo: '빤짜수', meaning: '다섯의', grammar: '수사 복수 처격' },
  { pali: 'nīvaraṇesu', pronKo: '니-와라네수', meaning: '장애들에서', grammar: '중성 복수 처격', important: true },
]

/** 오개: 5가지 장애의 있음/없음/생겨남/버림/미래 안 생겨남 + 정형문 */
export const VERSE_5 = {
  pali: 'Idha bhikkhave bhikkhu santaṃ vā ajjhattaṃ kāmacchandaṃ atthi me ajjhattaṃ kāmacchando ti pajānāti, asantaṃ vā ajjhattaṃ kāmacchandaṃ natthi me ajjhattaṃ kāmacchando ti pajānāti; yathā ca anuppannassa kāmacchandassa uppādo hoti tañca pajānāti, yathā ca uppannassa kāmacchandassa pahānaṃ hoti tañca pajānāti, yathā ca pahīnassa kāmacchandassa āyatiṃ anuppādo hoti tañca pajānāti. Santaṃ vā ajjhattaṃ byāpādaṃ atthi me ajjhattaṃ byāpādo ti pajānāti... Santaṃ vā ajjhattaṃ thīnamiddhaṃ... Santaṃ vā ajjhattaṃ uddhaccakukkuccaṃ... Santaṃ vā ajjhattaṃ vicikicchaṃ... Iti ajjhattaṃ vā dhammesu dhammānupassī viharati, bahiddhā vā dhammesu dhammānupassī viharati, ajjhattabahiddhā vā dhammesu dhammānupassī viharati. Samudayadhammānupassī vā dhammesu viharati, vayadhammānupassī vā dhammesu viharati, samudayavayadhammānupassī vā dhammesu viharati. Atthi dhammāti vā panassa sati paccupaṭṭhitā hoti yāvadeva ñāṇamattāya paṭissatimattāya anissito ca viharati, na ca kiñci loke upādiyati.',
  pronKo: '이다 빅카웨 빅쿠 산땅 와- 앗잣땅 까-맛찬당 앗티 메 앗잣땅 까-맛찬도 띠 빠자-나-띠, 아산땅 와- 앗잣땅 까-맛찬당 낫티 메 앗잣땅 까-맛찬도 띠 빠자-나-띠; 야타- 짜 아눕빤낫사 까-맛찬닷사 웁빠-도 호띠 딴짜 빠자-나-띠, 야타- 짜 웁빤낫사 까-맛찬닷사 빠하-낭 호띠 딴짜 빠자-나-띠, 야타- 짜 빠히-낫사 까-맛찬닷사 아-야띵 아눕빠-도 호띠 딴짜 빠자-나-띠. 산땅 와- 앗잣땅 뱌-빠-당... 산땅 와- 앗잣땅 티-나밋당... 산땅 와- 앗잣땅 웃닷짜꿋꿋짱... 산땅 와- 앗잣땅 위찌낏짱... 이띠 앗잣땅 와- 담메수...',
  translation: '여기서 비구는 안에 감각적 욕망이 있으면 "내 안에 감각적 욕망이 있다"고 알아차리고, 안에 감각적 욕망이 없으면 "내 안에 감각적 욕망이 없다"고 알아차린다. 아직 생겨나지 않은 감각적 욕망이 생겨남을 알아차리고, 생겨난 감각적 욕망의 버림을 알아차리고, 버려진 감각적 욕망이 미래에 생겨나지 않음을 알아차린다. 악의에 대해서도... 혼침과 졸음에 대해서도... 들뜸과 후회에 대해서도... 의심에 대해서도 동일하게... (정형문)',
  grammarNotes: [
    '문장 구조: 5가지 장애(kāmacchanda, byāpāda, thīnamiddha, uddhaccakukkucca, vicikicchā)의 5단계 관찰 × 5 + 정형문',
    '5단계: ① 있음(santaṃ) ② 없음(asantaṃ) ③ 생겨남(uppādo) ④ 버림(pahānaṃ) ⑤ 미래 안 생겨남(āyatiṃ anuppādo)',
    '핵심 문법: santaṃ = 현재분사("있는"). anuppannassa = 속격("아직 생겨나지 않은 것의"). pahīnassa = 속격("버려진 것의")',
    '복합어: kāmacchanda = kāma(감각적 욕망) + chanda(의욕). thīnamiddha = thīna(혼침) + middha(졸음). uddhaccakukkucca = uddhacca(들뜸) + kukkucca(후회)',
  ],
}

export const VERSE_5_WORDS: VerseWord[] = [
  { pali: 'santaṃ', pronKo: '산땅', meaning: '있는/존재하는', grammar: '현재분사 중성 단수 대격 (atthi)', important: true },
  { pali: 'kāmacchandaṃ', pronKo: '까-맛찬당', meaning: '감각적 욕망을', grammar: '남성 단수 대격 (kāma + chanda)', important: true },
  { pali: 'atthi', pronKo: '앗티', meaning: '있다', grammar: '현재 3인칭 단수' },
  { pali: 'me', pronKo: '메', meaning: '나의/내 안에', grammar: '대명사 1인칭 속격/여격' },
  { pali: 'kāmacchando', pronKo: '까-맛찬도', meaning: '감각적 욕망이', grammar: '남성 단수 주격' },
  { pali: 'asantaṃ', pronKo: '아산땅', meaning: '없는/존재하지 않는', grammar: '현재분사 부정 (a + santaṃ)' },
  { pali: 'natthi', pronKo: '낫티', meaning: '없다', grammar: '부정 현재 3인칭 (na + atthi)' },
  { pali: 'anuppannassa', pronKo: '아눕빤낫사', meaning: '아직 생겨나지 않은 것의', grammar: '과거분사 남성 단수 속격 (an + uppanna)', important: true },
  { pali: 'uppādo', pronKo: '웁빠-도', meaning: '생겨남/일어남', grammar: '남성 단수 주격', important: true },
  { pali: 'uppannassa', pronKo: '웁빤낫사', meaning: '생겨난 것의', grammar: '과거분사 남성 단수 속격', important: true },
  { pali: 'pahānaṃ', pronKo: '빠하-낭', meaning: '버림/제거', grammar: '중성 단수 주격', important: true },
  { pali: 'pahīnassa', pronKo: '빠히-낫사', meaning: '버려진 것의', grammar: '과거분사 남성 단수 속격 (pajahati)', important: true },
  { pali: 'āyatiṃ', pronKo: '아-야띵', meaning: '미래에', grammar: '부사', important: true },
  { pali: 'anuppādo', pronKo: '아눕빠-도', meaning: '생겨나지 않음', grammar: '남성 단수 주격 (an + uppāda)' },
  { pali: 'byāpādaṃ', pronKo: '뱌-빠-당', meaning: '악의/적의를', grammar: '남성 단수 대격', important: true },
  { pali: 'thīnamiddhaṃ', pronKo: '티-나밋당', meaning: '혼침과 졸음을', grammar: '중성 단수 대격 (thīna + middha)', important: true },
  { pali: 'uddhaccakukkuccaṃ', pronKo: '웃닷짜꿋꿋짱', meaning: '들뜸과 후회를', grammar: '중성 단수 대격 (uddhacca + kukkucca)', important: true },
  { pali: 'vicikicchaṃ', pronKo: '위찌낏짱', meaning: '의심을', grammar: '여성 단수 대격', important: true },
  { pali: 'dhammāti', pronKo: '담마-띠', meaning: '"법이"라고', grammar: '남성 복수 주격 + iti' },
]

// ── 2. 오온 (Khandhapabba) — 5가지 취착의 무더기 ──

/** 오온: 5가지 집착의 무더기 + 정형문 */
export const VERSE_6 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu dhammesu dhammānupassī viharati pañcasu upādānakkhandhesu. Kathañca pana bhikkhave bhikkhu dhammesu dhammānupassī viharati pañcasu upādānakkhandhesu? Idha bhikkhave bhikkhu iti rūpaṃ, iti rūpassa samudayo, iti rūpassa atthaṅgamo; iti vedanā, iti vedanāya samudayo, iti vedanāya atthaṅgamo; iti saññā, iti saññāya samudayo, iti saññāya atthaṅgamo; iti saṅkhārā, iti saṅkhārānaṃ samudayo, iti saṅkhārānaṃ atthaṅgamo; iti viññāṇaṃ, iti viññāṇassa samudayo, iti viññāṇassa atthaṅgamoti. Iti ajjhattaṃ vā dhammesu dhammānupassī viharati... Atthi dhammāti vā panassa sati paccupaṭṭhitā hoti yāvadeva ñāṇamattāya paṭissatimattāya anissito ca viharati, na ca kiñci loke upādiyati.',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 담메수 담마-누빳시- 위하라띠 빤짜수 우빠-다-낙칸데수. 까탄짜 빠나... 이다 빅카웨 빅쿠 이띠 루-빵, 이띠 루-빳사 사무다요, 이띠 루-빳사 앗탕가모; 이띠 웨다나-, 이띠 웨다나-야 사무다요, 이띠 웨다나-야 앗탕가모; 이띠 산냐-, 이띠 산냐-야 사무다요, 이띠 산냐-야 앗탕가모; 이띠 상카-라-, 이띠 상카-라-낭 사무다요, 이띠 상카-라-낭 앗탕가모; 이띠 윈냐-낭, 이띠 윈냐-낫사 사무다요, 이띠 윈냐-낫사 앗탕가모띠. 이띠 앗잣땅 와-...',
  translation: '다시 비구들이여, 비구는 다섯 가지 취착의 무더기에서 법들에서 법을 관찰하며 머문다. 어떻게...? 여기서 비구는 "이것이 물질이다, 이것이 물질의 생겨남이다, 이것이 물질의 사라짐이다; 이것이 느낌이다... 인식이다... 형성들이다... 의식이다, 이것이 의식의 생겨남이다, 이것이 의식의 사라짐이다"라고 (관찰한다). (정형문)',
  grammarNotes: [
    '문장 구조: 5온(rūpa/vedanā/saññā/saṅkhāra/viññāṇa) 각각의 3면(본질/생겨남/사라짐) 관찰 + 정형문',
    '핵심 문법: upādānakkhandhesu = upādāna(취착) + khandha(무더기) + 처격 복수. samudayo = 생겨남(주격). atthaṅgamo = 사라짐(주격)',
    '속격 변화: rūpassa(중성), vedanāya(여성), saññāya(여성), saṅkhārānaṃ(남성 복수), viññāṇassa(중성) — 성(性)에 따라 속격 어미가 다름',
    'Puna caparaṃ = puna(다시) + ca(그리고) + aparaṃ(또한) — 새 소단원 시작의 정형 표현',
  ],
}

export const VERSE_6_WORDS: VerseWord[] = [
  { pali: 'Puna', pronKo: '뿌나', meaning: '다시', grammar: '불변어(부사)' },
  { pali: 'caparaṃ', pronKo: '짜빠랑', meaning: '또한(ca+aparaṃ)', grammar: '접속사+대명사' },
  { pali: 'upādānakkhandhesu', pronKo: '우빠-다-낙칸데수', meaning: '취착의 무더기들에서', grammar: '남성 복수 처격 (upādāna + khandha)', important: true },
  { pali: 'rūpaṃ', pronKo: '루-빵', meaning: '물질/형상', grammar: '중성 단수 주격', important: true },
  { pali: 'rūpassa', pronKo: '루-빳사', meaning: '물질의', grammar: '중성 단수 속격' },
  { pali: 'samudayo', pronKo: '사무다요', meaning: '생겨남/일어남', grammar: '남성 단수 주격', important: true },
  { pali: 'atthaṅgamo', pronKo: '앗탕가모', meaning: '사라짐/소멸', grammar: '남성 단수 주격', important: true },
  { pali: 'vedanā', pronKo: '웨다나-', meaning: '느낌', grammar: '여성 단수 주격', important: true },
  { pali: 'vedanāya', pronKo: '웨다나-야', meaning: '느낌의', grammar: '여성 단수 속격' },
  { pali: 'saññā', pronKo: '산냐-', meaning: '인식/지각', grammar: '여성 단수 주격', important: true },
  { pali: 'saññāya', pronKo: '산냐-야', meaning: '인식의', grammar: '여성 단수 속격' },
  { pali: 'saṅkhārā', pronKo: '상카-라-', meaning: '형성들/의지적 형성', grammar: '남성 복수 주격', important: true },
  { pali: 'saṅkhārānaṃ', pronKo: '상카-라-낭', meaning: '형성들의', grammar: '남성 복수 속격' },
  { pali: 'viññāṇaṃ', pronKo: '윈냐-낭', meaning: '의식', grammar: '중성 단수 주격', important: true },
  { pali: 'viññāṇassa', pronKo: '윈냐-낫사', meaning: '의식의', grammar: '중성 단수 속격' },
]

// ── 3. 육입처 (Āyatanapabba) — 12처 ──

/** 육입처: 6쌍 내외처 + 족쇄 관찰 + 정형문 */
export const VERSE_7 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu dhammesu dhammānupassī viharati chasu ajjhattikabāhiresu āyatanesu. Kathañca pana bhikkhave bhikkhu dhammesu dhammānupassī viharati chasu ajjhattikabāhiresu āyatanesu? Idha bhikkhave bhikkhu cakkhuñca pajānāti, rūpe ca pajānāti, yañca tadubhayaṃ paṭicca uppajjati saṃyojanaṃ tañca pajānāti, yathā ca anuppannassa saṃyojanassa uppādo hoti tañca pajānāti, yathā ca uppannassa saṃyojanassa pahānaṃ hoti tañca pajānāti, yathā ca pahīnassa saṃyojanassa āyatiṃ anuppādo hoti tañca pajānāti. Sotañca pajānāti, sadde ca pajānāti... Ghānañca pajānāti, gandhe ca pajānāti... Jivhañca pajānāti, rase ca pajānāti... Kāyañca pajānāti, phoṭṭhabbe ca pajānāti... Manañca pajānāti, dhamme ca pajānāti, yañca tadubhayaṃ paṭicca uppajjati saṃyojanaṃ tañca pajānāti... Iti ajjhattaṃ vā dhammesu dhammānupassī viharati... na ca kiñci loke upādiyati.',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 담메수 담마-누빳시- 위하라띠 차수 앗잣띠까바-히레수 아-야따네수. 까탄짜 빠나... 이다 빅카웨 빅쿠 짝쿤짜 빠자-나-띠, 루-뻬 짜 빠자-나-띠, 얀짜 따두바양 빠띳짜 웁빠지야띠 상요자낭 딴짜 빠자-나-띠, 야타- 짜 아눕빤낫사 상요자낫사 웁빠-도 호띠 딴짜 빠자-나-띠... 소딴짜... 가-난짜... 지와-짠짜... 까-얀짜... 마난짜 빠자-나-띠, 담메 짜 빠자-나-띠... 이띠 앗잣땅 와-...',
  translation: '다시 비구들이여, 비구는 여섯 가지 안팎의 감각장소에서 법들에서 법을 관찰하며 머문다. 어떻게...? 여기서 비구는 눈을 알아차리고, 형상을 알아차리고, 그 둘에 의지하여 일어나는 족쇄를 알아차리고, 아직 생겨나지 않은 족쇄가 생겨남을, 생겨난 족쇄의 버림을, 버려진 족쇄가 미래에 안 생겨남을 알아차린다. 귀와 소리를... 코와 냄새를... 혀와 맛을... 몸과 감촉을... 마음과 법을 알아차린다... (정형문)',
  grammarNotes: [
    '문장 구조: 6쌍 감각장소(눈-형상, 귀-소리, 코-냄새, 혀-맛, 몸-감촉, 마음-법) × 족쇄 4단계 관찰 + 정형문',
    '핵심 문법: ajjhattikabāhiresu = ajjhattika(내적) + bāhira(외적) + 처격 복수. saṃyojanaṃ = 족쇄/결박(중성 단수 대격)',
    '관계절: yañca tadubhayaṃ paṭicca uppajjati = "그 둘에 의지하여 일어나는 그것을". paṭicca = 절대분사("의지하여")',
    '6쌍: cakkhu-rūpa, sota-sadda, ghāna-gandha, jivhā-rasa, kāya-phoṭṭhabba, mana-dhamma',
  ],
}

export const VERSE_7_WORDS: VerseWord[] = [
  { pali: 'chasu', pronKo: '차수', meaning: '여섯의', grammar: '수사 복수 처격' },
  { pali: 'ajjhattikabāhiresu', pronKo: '앗잣띠까바-히레수', meaning: '안팎의', grammar: '형용사 복수 처격 (ajjhattika + bāhira)' },
  { pali: 'āyatanesu', pronKo: '아-야따네수', meaning: '감각장소들에서', grammar: '중성 복수 처격', important: true },
  { pali: 'cakkhuñca', pronKo: '짝쿤짜', meaning: '눈을 그리고', grammar: '중성 단수 대격 + ca', important: true },
  { pali: 'rūpe', pronKo: '루-뻬', meaning: '형상들을', grammar: '중성 복수 대격' },
  { pali: 'tadubhayaṃ', pronKo: '따두바양', meaning: '그 둘을', grammar: '대명사+수사 중성 단수 대격 (tad + ubhaya)' },
  { pali: 'paṭicca', pronKo: '빠띳짜', meaning: '의지하여/연하여', grammar: '절대분사 (paṭi + icca)', important: true },
  { pali: 'uppajjati', pronKo: '웁빠지야띠', meaning: '일어나다/생겨나다', grammar: '현재 3인칭 단수', important: true },
  { pali: 'saṃyojanaṃ', pronKo: '상요자낭', meaning: '족쇄/결박', grammar: '중성 단수 대격', important: true },
  { pali: 'sotañca', pronKo: '소딴짜', meaning: '귀를 그리고', grammar: '중성 단수 대격 + ca', important: true },
  { pali: 'sadde', pronKo: '삿데', meaning: '소리들을', grammar: '남성 복수 대격' },
  { pali: 'ghānañca', pronKo: '가-난짜', meaning: '코를 그리고', grammar: '중성 단수 대격 + ca' },
  { pali: 'gandhe', pronKo: '간데', meaning: '냄새들을', grammar: '남성 복수 대격' },
  { pali: 'jivhañca', pronKo: '지와-짠짜', meaning: '혀를 그리고', grammar: '여성 단수 대격 + ca' },
  { pali: 'rase', pronKo: '라세', meaning: '맛들을', grammar: '남성 복수 대격' },
  { pali: 'kāyañca', pronKo: '까-얀짜', meaning: '몸을 그리고', grammar: '남성 단수 대격 + ca' },
  { pali: 'phoṭṭhabbe', pronKo: '폿탑베', meaning: '감촉들을', grammar: '중성 복수 대격', important: true },
  { pali: 'manañca', pronKo: '마난짜', meaning: '마음을 그리고', grammar: '중성 단수 대격 + ca', important: true },
  { pali: 'dhamme', pronKo: '담메', meaning: '법들을(마음의 대상)', grammar: '남성 복수 대격' },
]

// ── 4. 칠각지 (Bojjhaṅgapabba) — 7각지 ──

/** 칠각지: 7가지 깨달음의 요소 있음/없음/생겨남/완성 + 정형문 */
export const VERSE_8 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu dhammesu dhammānupassī viharati sattasu bojjhaṅgesu. Kathañca pana bhikkhave bhikkhu dhammesu dhammānupassī viharati sattasu bojjhaṅgesu? Idha bhikkhave bhikkhu santaṃ vā ajjhattaṃ satisambojjhaṅgaṃ atthi me ajjhattaṃ satisambojjhaṅgo ti pajānāti, asantaṃ vā ajjhattaṃ satisambojjhaṅgaṃ natthi me ajjhattaṃ satisambojjhaṅgo ti pajānāti, yathā ca anuppannassa satisambojjhaṅgassa uppādo hoti tañca pajānāti, yathā ca uppannassa satisambojjhaṅgassa bhāvanāya pāripūrī hoti tañca pajānāti. Santaṃ vā ajjhattaṃ dhammavicayasambojjhaṅgaṃ... vīriyasambojjhaṅgaṃ... pītisambojjhaṅgaṃ... passaddhisambojjhaṅgaṃ... samādhisambojjhaṅgaṃ... upekkhāsambojjhaṅgaṃ... Iti ajjhattaṃ vā dhammesu dhammānupassī viharati... na ca kiñci loke upādiyati.',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 담메수 담마-누빳시- 위하라띠 삿따수 봇장게수. 까탄짜 빠나... 이다 빅카웨 빅쿠 산땅 와- 앗잣땅 사띠삼봇장강 앗티 메 앗잣땅 사띠삼봇장고 띠 빠자-나-띠, 아산땅 와-... 야타- 짜 아눕빤낫사 사띠삼봇장갓사 웁빠-도 호띠 딴짜 빠자-나-띠, 야타- 짜 웁빤낫사 사띠삼봇장갓사 바-와나-야 빠-리뿌-리- 호띠 딴짜 빠자-나-띠. 산땅 와- 앗잣땅 담마위짜야삼봇장강... 위-리야삼봇장강... 삐-띠삼봇장강... 빳삿디삼봇장강... 사마-디삼봇장강... 우뻭카-삼봇장강... 이띠 앗잣땅 와-...',
  translation: '다시 비구들이여, 비구는 일곱 가지 깨달음의 요소에서 법들에서 법을 관찰하며 머문다. 어떻게...? 여기서 비구는 안에 새김의 깨달음 요소가 있으면 "있다"고 알아차리고, 없으면 "없다"고 알아차리고, 아직 생겨나지 않은 것이 생겨남을, 생겨난 것이 수행으로 완성됨을 알아차린다. 법 간택의... 정진의... 기쁨의... 경안의... 삼매의... 평정의 깨달음 요소도 동일하게... (정형문)',
  grammarNotes: [
    '문장 구조: 7각지(sati/dhammavicaya/vīriya/pīti/passaddhi/samādhi/upekkhā) × 4단계 관찰 + 정형문',
    '4단계: ① 있음(santaṃ) ② 없음(asantaṃ) ③ 생겨남(uppādo) ④ 수행으로 완성(bhāvanāya pāripūrī) — 오개의 5단계와 다르게 "버림" 대신 "완성"',
    '핵심 문법: bojjhaṅga = bodhi(깨달음) + aṅga(요소). sambojjhaṅga = saṃ + bojjhaṅga(완전한 깨달음 요소)',
    '복합어: dhammavicaya = dhamma(법) + vicaya(간택). passaddhi = 경안/고요. upekkhā = 평정/중립',
  ],
}

export const VERSE_8_WORDS: VerseWord[] = [
  { pali: 'sattasu', pronKo: '삿따수', meaning: '일곱의', grammar: '수사 복수 처격' },
  { pali: 'bojjhaṅgesu', pronKo: '봇장게수', meaning: '깨달음의 요소들에서', grammar: '중성 복수 처격', important: true },
  { pali: 'satisambojjhaṅgaṃ', pronKo: '사띠삼봇장강', meaning: '새김의 깨달음 요소를', grammar: '남성 단수 대격 (sati + sambojjhaṅga)', important: true },
  { pali: 'satisambojjhaṅgo', pronKo: '사띠삼봇장고', meaning: '새김의 깨달음 요소가', grammar: '남성 단수 주격' },
  { pali: 'bhāvanāya', pronKo: '바-와나-야', meaning: '수행으로/닦음으로', grammar: '여성 단수 구격', important: true },
  { pali: 'pāripūrī', pronKo: '빠-리뿌-리-', meaning: '완성/충만', grammar: '여성 단수 주격', important: true },
  { pali: 'dhammavicayasambojjhaṅgaṃ', pronKo: '담마위짜야삼봇장강', meaning: '법 간택의 깨달음 요소를', grammar: '남성 단수 대격', important: true },
  { pali: 'vīriyasambojjhaṅgaṃ', pronKo: '위-리야삼봇장강', meaning: '정진의 깨달음 요소를', grammar: '남성 단수 대격', important: true },
  { pali: 'pītisambojjhaṅgaṃ', pronKo: '삐-띠삼봇장강', meaning: '기쁨의 깨달음 요소를', grammar: '남성 단수 대격', important: true },
  { pali: 'passaddhisambojjhaṅgaṃ', pronKo: '빳삿디삼봇장강', meaning: '경안의 깨달음 요소를', grammar: '남성 단수 대격', important: true },
  { pali: 'samādhisambojjhaṅgaṃ', pronKo: '사마-디삼봇장강', meaning: '삼매의 깨달음 요소를', grammar: '남성 단수 대격', important: true },
  { pali: 'upekkhāsambojjhaṅgaṃ', pronKo: '우뻭카-삼봇장강', meaning: '평정의 깨달음 요소를', grammar: '남성 단수 대격', important: true },
]

// ── 5. 사성제 (Saccapabba) ──

/** 사성제 도입 */
export const VERSE_9 = {
  pali: 'Puna caparaṃ bhikkhave bhikkhu dhammesu dhammānupassī viharati catūsu ariyasaccesu. Kathañca pana bhikkhave bhikkhu dhammesu dhammānupassī viharati catūsu ariyasaccesu?',
  pronKo: '뿌나 짜빠랑 빅카웨 빅쿠 담메수 담마-누빳시- 위하라띠 짜뚜-수 아리야삿쩨수. 까탄짜 빠나 빅카웨 빅쿠 담메수 담마-누빳시- 위하라띠 짜뚜-수 아리야삿쩨수?',
  translation: '다시 비구들이여, 비구는 네 가지 거룩한 진리에서 법들에서 법을 관찰하며 머문다. 그러면 비구들이여, 비구는 어떻게 네 가지 거룩한 진리에서 법들에서 법을 관찰하며 머무는가?',
  grammarNotes: [
    '핵심 문법: catūsu = 수사 4의 처격 복수. ariyasaccesu = ariya(거룩한) + sacca(진리) + 처격 복수',
    '구조: 사성제(catūsu ariyasaccesu) 소단원 도입문. 이후 고/집/멸/도 4개 성제 각각을 상세히 설명',
  ],
}

export const VERSE_9_WORDS: VerseWord[] = [
  { pali: 'catūsu', pronKo: '짜뚜-수', meaning: '네 가지의', grammar: '수사 복수 처격', important: true },
  { pali: 'ariyasaccesu', pronKo: '아리야삿쩨수', meaning: '거룩한 진리들에서', grammar: '중성 복수 처격 (ariya + sacca)', important: true },
]

/** 고성제 상세 — 괴로움의 거룩한 진리 */
export const VERSE_10 = {
  pali: 'Katamañca bhikkhave dukkhaṃ ariyasaccaṃ? Jātipi dukkhā, jarāpi dukkhā, byādhipi dukkhā, maraṇampi dukkhaṃ, appiyehi sampayogo dukkho, piyehi vippayogo dukkho, yampicchaṃ na labhati tampi dukkhaṃ — saṅkhittena pañcupādānakkhandhā dukkhā.',
  pronKo: '까따만짜 빅카웨 둑캉 아리야삿짱? 자-띠삐 둑카-, 자라-삐 둑카-, 뱌-디삐 둑카-, 마라남삐 둑캉, 압삐예히 삼빠요고 둑코, 삐예히 윕빠요고 둑코, 얌삣짱 나 라바띠 땀삐 둑캉 — 상킷테나 빤주빠-다-낙칸다- 둑카-.',
  translation: '비구들이여, 괴로움의 거룩한 진리란 무엇인가? 태어남도 괴로움이고, 늙음도 괴로움이고, 병듦도 괴로움이고, 죽음도 괴로움이다. 싫어하는 것과 만남도 괴로움이고, 좋아하는 것과 헤어짐도 괴로움이고, 원하는 것을 얻지 못함도 괴로움이다 — 요약하면 다섯 가지 취착의 무더기가 괴로움이다.',
  grammarNotes: [
    '문장 구조: 의문문 + 8종 괴로움 나열 + 총괄문. pi(~도)가 반복되며 병렬 강조',
    '핵심 문법: Katamañca = 의문대명사("어떤 것이?"). jāti/jarā/byādhi/maraṇa = 태어남/늙음/병/죽음(4고)',
    '복합어: appiyehi sampayogo = appiya(싫어하는)+구격 + sampayoga(만남). piyehi vippayogo = piya(좋아하는)+구격 + vippayoga(헤어짐)',
    '총괄문: saṅkhittena = "요약하면"(구격 부사). pañcupādānakkhandhā = pañca + upādāna + khandha + 주격 복수',
  ],
}

export const VERSE_10_WORDS: VerseWord[] = [
  { pali: 'Katamañca', pronKo: '까따만짜', meaning: '어떤 것이', grammar: '의문대명사 중성 단수 주격 + ca' },
  { pali: 'dukkhaṃ', pronKo: '둑캉', meaning: '괴로움의', grammar: '중성 단수 주격/대격', important: true },
  { pali: 'ariyasaccaṃ', pronKo: '아리야삿짱', meaning: '거룩한 진리', grammar: '중성 단수 주격 (ariya + sacca)', important: true },
  { pali: 'Jātipi', pronKo: '자-띠삐', meaning: '태어남도', grammar: '여성 단수 주격 + pi(~도)', important: true },
  { pali: 'dukkhā', pronKo: '둑카-', meaning: '괴로움이다', grammar: '여성 단수 주격' },
  { pali: 'jarāpi', pronKo: '자라-삐', meaning: '늙음도', grammar: '여성 단수 주격 + pi', important: true },
  { pali: 'byādhipi', pronKo: '뱌-디삐', meaning: '병듦도', grammar: '남성 단수 주격 + pi', important: true },
  { pali: 'maraṇampi', pronKo: '마라남삐', meaning: '죽음도', grammar: '중성 단수 주격 + pi', important: true },
  { pali: 'appiyehi', pronKo: '압삐예히', meaning: '싫어하는 것들과', grammar: '형용사 남성 복수 구격 (a + piya)', important: true },
  { pali: 'sampayogo', pronKo: '삼빠요고', meaning: '만남/결합', grammar: '남성 단수 주격', important: true },
  { pali: 'piyehi', pronKo: '삐예히', meaning: '좋아하는 것들과', grammar: '형용사 남성 복수 구격', important: true },
  { pali: 'vippayogo', pronKo: '윕빠요고', meaning: '헤어짐/이별', grammar: '남성 단수 주격', important: true },
  { pali: 'yampicchaṃ', pronKo: '얌삣짱', meaning: '원하는 것을(yaṃ+icchaṃ)', grammar: '관계대명사+현재분사' },
  { pali: 'na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'labhati', pronKo: '라바띠', meaning: '얻다', grammar: '현재 3인칭 단수' },
  { pali: 'saṅkhittena', pronKo: '상킷테나', meaning: '요약하면', grammar: '과거분사 중성 단수 구격(부사적)' },
  { pali: 'pañcupādānakkhandhā', pronKo: '빤주빠-다-낙칸다-', meaning: '다섯 취착의 무더기들이', grammar: '남성 복수 주격 (pañca + upādāna + khandha)', important: true },
]

/** 집성제 — 괴로움의 원인 (갈애 3종) */
export const VERSE_11 = {
  pali: 'Katamañca bhikkhave dukkhasamudayaṃ ariyasaccaṃ? Yāyaṃ taṇhā ponobbhavikā nandirāgasahagatā tatratatrābhinandinī, seyyathidaṃ — kāmataṇhā bhavataṇhā vibhavataṇhā.',
  pronKo: '까따만짜 빅카웨 둑카사무다양 아리야삿짱? 야-양 딴하- 뽀놉바위까- 난디라-가사하가따- 따뜨라따뜨라-비난디니-, 세야티당 — 까-마딴하- 바와딴하- 위바와딴하-.',
  translation: '비구들이여, 괴로움의 원인의 거룩한 진리란 무엇인가? 재생을 가져오고, 기쁨과 탐욕이 함께하며, 이곳저곳에서 즐기는 갈애이니, 곧 감각적 쾌락에 대한 갈애, 존재에 대한 갈애, 비존재에 대한 갈애이다.',
  grammarNotes: [
    '문장 구조: 의문문 + 갈애(taṇhā)의 정의 + 3종 나열',
    '핵심 문법: dukkhasamudayaṃ = dukkha(괴로움) + samudaya(원인/생겨남). ponobbhavikā = punabbhava(재생)에서 파생된 형용사("재생을 가져오는")',
    '복합어: nandirāgasahagatā = nandī(기쁨) + rāga(탐욕) + sahagatā(함께하는). tatratatrābhinandinī = tatra-tatra(이곳저곳) + abhinandinī(즐기는)',
    '갈애 3종: kāmataṇhā(감각적 욕망), bhavataṇhā(존재), vibhavataṇhā(비존재/허무)',
  ],
}

export const VERSE_11_WORDS: VerseWord[] = [
  { pali: 'dukkhasamudayaṃ', pronKo: '둑카사무다양', meaning: '괴로움의 원인의', grammar: '중성 단수 대격 (dukkha + samudaya)', important: true },
  { pali: 'taṇhā', pronKo: '딴하-', meaning: '갈애/갈망', grammar: '여성 단수 주격', important: true },
  { pali: 'ponobbhavikā', pronKo: '뽀놉바위까-', meaning: '재생을 가져오는', grammar: '형용사 여성 단수 주격 (punabbhava + ika)', important: true },
  { pali: 'nandirāgasahagatā', pronKo: '난디라-가사하가따-', meaning: '기쁨과 탐욕이 함께하는', grammar: '형용사 여성 단수 주격 (nandī + rāga + sahagata)' },
  { pali: 'tatratatrābhinandinī', pronKo: '따뜨라따뜨라-비난디니-', meaning: '이곳저곳에서 즐기는', grammar: '형용사 여성 단수 주격 (tatra-tatra + abhinandinī)' },
  { pali: 'seyyathidaṃ', pronKo: '세야티당', meaning: '곧 이것은/다음과 같이', grammar: '불변어 (seyyathā + idaṃ)' },
  { pali: 'kāmataṇhā', pronKo: '까-마딴하-', meaning: '감각적 쾌락에 대한 갈애', grammar: '여성 단수 주격', important: true },
  { pali: 'bhavataṇhā', pronKo: '바와딴하-', meaning: '존재에 대한 갈애', grammar: '여성 단수 주격', important: true },
  { pali: 'vibhavataṇhā', pronKo: '위바와딴하-', meaning: '비존재에 대한 갈애', grammar: '여성 단수 주격', important: true },
]

/** 멸성제 — 괴로움의 소멸 */
export const VERSE_12 = {
  pali: 'Katamañca bhikkhave dukkhanirodhaṃ ariyasaccaṃ? Yo tassāyeva taṇhāya asesavirāganirodho cāgo paṭinissaggo mutti anālayo.',
  pronKo: '까따만짜 빅카웨 둑카니로당 아리야삿짱? 요 땃사-예와 딴하-야 아세사위라-가니로도 짜-고 빠띠닛삭고 뭇띠 아나-라요.',
  translation: '비구들이여, 괴로움의 소멸의 거룩한 진리란 무엇인가? 바로 그 갈애의 남김없는 탐욕 떠남과 소멸, 놓아버림, 포기, 해방, 집착 없음이다.',
  grammarNotes: [
    '문장 구조: 의문문 + 갈애의 소멸 정의(동의어 나열)',
    '핵심 문법: dukkhanirodhaṃ = dukkha(괴로움) + nirodha(소멸). tassāyeva = tassā(그것의) + yeva(바로, 강조)',
    '동의어 나열: asesavirāganirodho(남김없는 탐욕 떠남과 소멸), cāgo(놓아버림), paṭinissaggo(포기), mutti(해방), anālayo(집착 없음)',
    '복합어: asesavirāganirodho = a(없는) + sesa(남김) + virāga(탐욕 떠남) + nirodha(소멸)',
  ],
}

export const VERSE_12_WORDS: VerseWord[] = [
  { pali: 'dukkhanirodhaṃ', pronKo: '둑카니로당', meaning: '괴로움의 소멸의', grammar: '중성 단수 대격 (dukkha + nirodha)', important: true },
  { pali: 'tassāyeva', pronKo: '땃사-예와', meaning: '바로 그것의', grammar: '대명사 여성 속격 + eva(강조)' },
  { pali: 'taṇhāya', pronKo: '딴하-야', meaning: '갈애의', grammar: '여성 단수 속격' },
  { pali: 'asesavirāganirodho', pronKo: '아세사위라-가니로도', meaning: '남김없는 탐욕 떠남과 소멸', grammar: '남성 단수 주격 (asesa + virāga + nirodha)', important: true },
  { pali: 'cāgo', pronKo: '짜-고', meaning: '놓아버림/보시', grammar: '남성 단수 주격', important: true },
  { pali: 'paṭinissaggo', pronKo: '빠띠닛삭고', meaning: '포기/놓아줌', grammar: '남성 단수 주격', important: true },
  { pali: 'mutti', pronKo: '뭇띠', meaning: '해방/해탈', grammar: '여성 단수 주격', important: true },
  { pali: 'anālayo', pronKo: '아나-라요', meaning: '집착 없음', grammar: '남성 단수 주격 (an + ālaya)', important: true },
]

/** 도성제 도입 — 팔정도 나열 */
export const VERSE_13 = {
  pali: 'Katamañca bhikkhave dukkhanirodhagāminī paṭipadā ariyasaccaṃ? Ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṃ — sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi.',
  pronKo: '까따만짜 빅카웨 둑카니로다가-미니- 빠띠빠다- 아리야삿짱? 아야메와 아리요 앗탕기꼬 맥고, 세야티당 — 삼마-딧티 삼마-상깝뽀 삼마-와-짜- 삼마-깜만또 삼마-아-지-오 삼마-와-야-모 삼마-사띠 삼마-사마-디.',
  translation: '비구들이여, 괴로움의 소멸로 이끄는 도닦음의 거룩한 진리란 무엇인가? 바로 이 거룩한 여덟 가지 요소의 길이니, 곧 바른 견해, 바른 사유, 바른 말, 바른 행위, 바른 생계, 바른 노력, 바른 새김, 바른 삼매이다.',
  grammarNotes: [
    '핵심 문법: dukkhanirodhagāminī = dukkha+nirodha+gāminī("괴로움의 소멸로 이끄는"). paṭipadā = "도닦음/실천 방법"',
    '복합어: aṭṭhaṅgiko = aṭṭha(여덟) + aṅga(요소) + ika(형용사 접미어). sammā = "바르게/올바른"(불변어 접두사)',
    '팔정도 나열: diṭṭhi(견해), saṅkappa(사유), vācā(말), kammanta(행위), ājīva(생계), vāyāma(노력), sati(새김), samādhi(삼매)',
  ],
}

export const VERSE_13_WORDS: VerseWord[] = [
  { pali: 'dukkhanirodhagāminī', pronKo: '둑카니로다가-미니-', meaning: '괴로움의 소멸로 이끄는', grammar: '형용사 여성 단수 주격', important: true },
  { pali: 'paṭipadā', pronKo: '빠띠빠다-', meaning: '도닦음/수행법', grammar: '여성 단수 주격', important: true },
  { pali: 'ariyo', pronKo: '아리요', meaning: '거룩한/성스러운', grammar: '형용사 남성 단수 주격' },
  { pali: 'aṭṭhaṅgiko', pronKo: '앗탕기꼬', meaning: '여덟 가지 요소의', grammar: '형용사 남성 단수 주격 (aṭṭha + aṅga + ika)', important: true },
  { pali: 'maggo', pronKo: '맥고', meaning: '길/도(道)', grammar: '남성 단수 주격', important: true },
  { pali: 'sammādiṭṭhi', pronKo: '삼마-딧티', meaning: '바른 견해', grammar: '여성 단수 주격 (sammā + diṭṭhi)', important: true },
  { pali: 'sammāsaṅkappo', pronKo: '삼마-상깝뽀', meaning: '바른 사유', grammar: '남성 단수 주격 (sammā + saṅkappa)', important: true },
  { pali: 'sammāvācā', pronKo: '삼마-와-짜-', meaning: '바른 말', grammar: '여성 단수 주격 (sammā + vācā)', important: true },
  { pali: 'sammākammanto', pronKo: '삼마-깜만또', meaning: '바른 행위', grammar: '남성 단수 주격 (sammā + kammanta)', important: true },
  { pali: 'sammāājīvo', pronKo: '삼마-아-지-오', meaning: '바른 생계', grammar: '남성 단수 주격 (sammā + ājīva)', important: true },
  { pali: 'sammāvāyāmo', pronKo: '삼마-와-야-모', meaning: '바른 노력', grammar: '남성 단수 주격 (sammā + vāyāma)', important: true },
  { pali: 'sammāsati', pronKo: '삼마-사띠', meaning: '바른 새김', grammar: '여성 단수 주격 (sammā + sati)', important: true },
  { pali: 'sammāsamādhi', pronKo: '삼마-사마-디', meaning: '바른 삼매', grammar: '남성 단수 주격 (sammā + samādhi)', important: true },
]

/** 바른 견해 상세 */
export const VERSE_14 = {
  pali: 'Katamā ca bhikkhave sammādiṭṭhi? Yaṃ kho bhikkhave dukkhe ñāṇaṃ, dukkhasamudaye ñāṇaṃ, dukkhanirodhe ñāṇaṃ, dukkhanirodhagāminiyā paṭipadāya ñāṇaṃ — ayaṃ vuccati bhikkhave sammādiṭṭhi.',
  pronKo: '까따마- 짜 빅카웨 삼마-딧티? 양 코 빅카웨 둑케 냐-낭, 둑카사무다예 냐-낭, 둑카니로데 냐-낭, 둑카니로다가-미니야- 빠띠빠다-야 냐-낭 — 아양 웃짜띠 빅카웨 삼마-딧티.',
  translation: '비구들이여, 바른 견해란 무엇인가? 비구들이여, 괴로움에 대한 앎, 괴로움의 원인에 대한 앎, 괴로움의 소멸에 대한 앎, 괴로움의 소멸로 이끄는 도닦음에 대한 앎 — 이것을 비구들이여 바른 견해라고 부른다.',
  grammarNotes: [
    '문장 구조: 의문문 + 사성제 각각에 대한 앎(ñāṇa) 4회 나열 + 결론문',
    '핵심 문법: dukkhe/dukkhasamudaye/dukkhanirodhe = 처격("~에 대한"). dukkhanirodhagāminiyā paṭipadāya = 여성 단수 처격(속격)',
    'vuccati = 수동태("~라고 불린다"). Katamā = 의문대명사 여성 단수 주격("어떤 것이?")',
  ],
}

export const VERSE_14_WORDS: VerseWord[] = [
  { pali: 'Katamā', pronKo: '까따마-', meaning: '어떤 것이', grammar: '의문대명사 여성 단수 주격' },
  { pali: 'sammādiṭṭhi', pronKo: '삼마-딧티', meaning: '바른 견해', grammar: '여성 단수 주격', important: true },
  { pali: 'dukkhe', pronKo: '둑케', meaning: '괴로움에 대한', grammar: '중성 단수 처격' },
  { pali: 'ñāṇaṃ', pronKo: '냐-낭', meaning: '앎/지혜', grammar: '중성 단수 주격', important: true },
  { pali: 'dukkhasamudaye', pronKo: '둑카사무다예', meaning: '괴로움의 원인에 대한', grammar: '남성 단수 처격' },
  { pali: 'dukkhanirodhe', pronKo: '둑카니로데', meaning: '괴로움의 소멸에 대한', grammar: '남성 단수 처격' },
  { pali: 'dukkhanirodhagāminiyā', pronKo: '둑카니로다가-미니야-', meaning: '괴로움의 소멸로 이끄는', grammar: '형용사 여성 단수 처격' },
  { pali: 'paṭipadāya', pronKo: '빠띠빠다-야', meaning: '도닦음에 대한', grammar: '여성 단수 처격' },
  { pali: 'vuccati', pronKo: '웃짜띠', meaning: '~라고 불린다', grammar: '수동태 현재 3인칭 단수 (vac)', important: true },
]

/** 바른 사유 상세 */
export const VERSE_15 = {
  pali: 'Katamo ca bhikkhave sammāsaṅkappo? Nekkhammasaṅkappo abyāpādasaṅkappo avihiṃsāsaṅkappo — ayaṃ vuccati bhikkhave sammāsaṅkappo.',
  pronKo: '까따모 짜 빅카웨 삼마-상깝뽀? 넥캄마상깝뽀 아뱌-빠-다상깝뽀 아위힝사-상깝뽀 — 아양 웃짜띠 빅카웨 삼마-상깝뽀.',
  translation: '비구들이여, 바른 사유란 무엇인가? 출리의 사유, 악의 없는 사유, 해침 없는 사유 — 이것을 비구들이여 바른 사유라고 부른다.',
  grammarNotes: [
    '3종 바른 사유: nekkhammasaṅkappo(출리), abyāpādasaṅkappo(악의 없음), avihiṃsāsaṅkappo(해침 없음)',
    '복합어: nekkhamma = 출가/출리/세속 포기. abyāpāda = a(없는) + byāpāda(악의). avihiṃsā = a(없는) + vihiṃsā(해침)',
  ],
}

export const VERSE_15_WORDS: VerseWord[] = [
  { pali: 'Katamo', pronKo: '까따모', meaning: '어떤 것이', grammar: '의문대명사 남성 단수 주격' },
  { pali: 'sammāsaṅkappo', pronKo: '삼마-상깝뽀', meaning: '바른 사유', grammar: '남성 단수 주격', important: true },
  { pali: 'Nekkhammasaṅkappo', pronKo: '넥캄마상깝뽀', meaning: '출리의 사유', grammar: '남성 단수 주격 (nekkhamma + saṅkappa)', important: true },
  { pali: 'abyāpādasaṅkappo', pronKo: '아뱌-빠-다상깝뽀', meaning: '악의 없는 사유', grammar: '남성 단수 주격 (abyāpāda + saṅkappa)', important: true },
  { pali: 'avihiṃsāsaṅkappo', pronKo: '아위힝사-상깝뽀', meaning: '해침 없는 사유', grammar: '남성 단수 주격 (avihiṃsā + saṅkappa)', important: true },
]

/** 바른 말 상세 */
export const VERSE_16 = {
  pali: 'Katamā ca bhikkhave sammāvācā? Musāvādā veramaṇī, pisuṇāya vācāya veramaṇī, pharusāya vācāya veramaṇī, samphappalāpā veramaṇī — ayaṃ vuccati bhikkhave sammāvācā.',
  pronKo: '까따마- 짜 빅카웨 삼마-와-짜-? 무사-와-다- 웨라마니-, 삐수나-야 와-짜-야 웨라마니-, 파루사-야 와-짜-야 웨라마니-, 삼팝빠라-빠- 웨라마니- — 아양 웃짜띠 빅카웨 삼마-와-짜-.',
  translation: '비구들이여, 바른 말이란 무엇인가? 거짓말을 삼가고, 이간질하는 말을 삼가고, 거친 말을 삼가고, 쓸데없는 말을 삼간다 — 이것을 바른 말이라고 부른다.',
  grammarNotes: [
    '4종 바른 말: musāvādā(거짓말), pisuṇā vācā(이간질), pharusā vācā(거친 말), samphappalāpa(쓸데없는 말)의 삼감(veramaṇī)',
    '핵심 문법: veramaṇī = 삼감/자제(여성 단수 주격). 탈격(-ā)은 "~로부터의" 의미로 삼감의 대상을 나타냄',
  ],
}

export const VERSE_16_WORDS: VerseWord[] = [
  { pali: 'sammāvācā', pronKo: '삼마-와-짜-', meaning: '바른 말', grammar: '여성 단수 주격', important: true },
  { pali: 'Musāvādā', pronKo: '무사-와-다-', meaning: '거짓말로부터', grammar: '남성 단수 탈격 (musā + vāda)', important: true },
  { pali: 'veramaṇī', pronKo: '웨라마니-', meaning: '삼감/자제', grammar: '여성 단수 주격', important: true },
  { pali: 'pisuṇāya', pronKo: '삐수나-야', meaning: '이간질하는', grammar: '형용사 여성 단수 탈격' },
  { pali: 'vācāya', pronKo: '와-짜-야', meaning: '말로부터', grammar: '여성 단수 탈격' },
  { pali: 'pharusāya', pronKo: '파루사-야', meaning: '거친/난폭한', grammar: '형용사 여성 단수 탈격', important: true },
  { pali: 'samphappalāpā', pronKo: '삼팝빠라-빠-', meaning: '쓸데없는 말로부터', grammar: '남성 단수 탈격', important: true },
]

/** 바른 행위 상세 */
export const VERSE_17 = {
  pali: 'Katamo ca bhikkhave sammākammanto? Pāṇātipātā veramaṇī, adinnādānā veramaṇī, kāmesumicchācārā veramaṇī — ayaṃ vuccati bhikkhave sammākammanto.',
  pronKo: '까따모 짜 빅카웨 삼마-깜만또? 빠-나-띠빠-따- 웨라마니-, 아딘나-다-나- 웨라마니-, 까-메수밋차-짜-라- 웨라마니- — 아양 웃짜띠 빅카웨 삼마-깜만또.',
  translation: '비구들이여, 바른 행위란 무엇인가? 살생을 삼가고, 주지 않은 것을 가져감을 삼가고, 감각적 쾌락에서의 삿된 행실을 삼간다 — 이것을 바른 행위라고 부른다.',
  grammarNotes: [
    '3종 바른 행위: pāṇātipāta(살생), adinnādāna(도둑질), kāmesumicchācāra(사음)의 삼감',
    '복합어: pāṇātipāta = pāṇa(생명)+atipāta(죽임). adinnādāna = adinna(주지 않은)+ādāna(가져감). kāmesumicchācāra = kāmesu(감각적 쾌락에서)+micchā(삿된)+cāra(행실)',
  ],
}

export const VERSE_17_WORDS: VerseWord[] = [
  { pali: 'sammākammanto', pronKo: '삼마-깜만또', meaning: '바른 행위', grammar: '남성 단수 주격', important: true },
  { pali: 'Pāṇātipātā', pronKo: '빠-나-띠빠-따-', meaning: '살생으로부터', grammar: '남성 단수 탈격 (pāṇa + atipāta)', important: true },
  { pali: 'adinnādānā', pronKo: '아딘나-다-나-', meaning: '도둑질로부터', grammar: '중성 단수 탈격 (adinna + ādāna)', important: true },
  { pali: 'kāmesumicchācārā', pronKo: '까-메수밋차-짜-라-', meaning: '사음으로부터', grammar: '남성 단수 탈격 (kāmesu + micchā + cāra)', important: true },
]

/** 바른 생계 상세 */
export const VERSE_18 = {
  pali: 'Katamo ca bhikkhave sammāājīvo? Idha bhikkhave ariyasāvako micchāājīvaṃ pahāya sammāājīvena jīvitaṃ kappeti — ayaṃ vuccati bhikkhave sammāājīvo.',
  pronKo: '까따모 짜 빅카웨 삼마-아-지-오? 이다 빅카웨 아리야사-와꼬 밋차-아-지-왕 빠하-야 삼마-아-지-웨나 지-위땅 깝뻬띠 — 아양 웃짜띠 빅카웨 삼마-아-지-오.',
  translation: '비구들이여, 바른 생계란 무엇인가? 여기서 거룩한 제자는 삿된 생계를 버리고 바른 생계로 생활한다 — 이것을 바른 생계라고 부른다.',
  grammarNotes: [
    '핵심 문법: micchāājīvaṃ pahāya = 삿된 생계를 버리고(절대분사). sammāājīvena = 바른 생계로(구격, 수단)',
    '복합어: ariyasāvako = ariya(거룩한) + sāvaka(제자). jīvitaṃ kappeti = "생계를 꾸리다/생활하다"',
  ],
}

export const VERSE_18_WORDS: VerseWord[] = [
  { pali: 'sammāājīvo', pronKo: '삼마-아-지-오', meaning: '바른 생계', grammar: '남성 단수 주격', important: true },
  { pali: 'ariyasāvako', pronKo: '아리야사-와꼬', meaning: '거룩한 제자는', grammar: '남성 단수 주격 (ariya + sāvaka)', important: true },
  { pali: 'micchāājīvaṃ', pronKo: '밋차-아-지-왕', meaning: '삿된 생계를', grammar: '남성 단수 대격 (micchā + ājīva)' },
  { pali: 'pahāya', pronKo: '빠하-야', meaning: '버리고서', grammar: '절대분사 (pajahati)', important: true },
  { pali: 'sammāājīvena', pronKo: '삼마-아-지-웨나', meaning: '바른 생계로', grammar: '남성 단수 구격' },
  { pali: 'jīvitaṃ', pronKo: '지-위땅', meaning: '생활을/삶을', grammar: '중성 단수 대격' },
  { pali: 'kappeti', pronKo: '깝뻬띠', meaning: '꾸리다/영위하다', grammar: '현재 3인칭 단수' },
]

/** 바른 노력 상세 — 4정근 */
export const VERSE_19 = {
  pali: 'Katamo ca bhikkhave sammāvāyāmo? Idha bhikkhave bhikkhu anuppannānaṃ pāpakānaṃ akusalānaṃ dhammānaṃ anuppādāya chandaṃ janeti vāyamati vīriyaṃ ārabhati cittaṃ paggaṇhāti padahati; uppannānaṃ pāpakānaṃ akusalānaṃ dhammānaṃ pahānāya chandaṃ janeti vāyamati vīriyaṃ ārabhati cittaṃ paggaṇhāti padahati; anuppannānaṃ kusalānaṃ dhammānaṃ uppādāya chandaṃ janeti vāyamati vīriyaṃ ārabhati cittaṃ paggaṇhāti padahati; uppannānaṃ kusalānaṃ dhammānaṃ ṭhitiyā asammosāya bhiyyobhāvāya vepullāya bhāvanāya pāripūriyā chandaṃ janeti vāyamati vīriyaṃ ārabhati cittaṃ paggaṇhāti padahati — ayaṃ vuccati bhikkhave sammāvāyāmo.',
  pronKo: '까따모 짜 빅카웨 삼마-와-야-모? 이다 빅카웨 빅쿠 아눕빤나-낭 빠-빠까-낭 아꾸살라-낭 담마-낭 아눕빠-다-야 찬당 자네띠 와-야마띠 위-리양 아-라바띠 짓땅 빡가나-띠 빠다하띠; 웁빤나-낭... 빠하-나-야... 아눕빤나-낭 꾸살라-낭 담마-낭 웁빠-다-야... 웁빤나-낭 꾸살라-낭 담마-낭 티띠야- 아삼모사-야 빗요바-와-야 웨뿔라-야 바-와나-야 빠-리뿌-리야- 찬당 자네띠... — 아양 웃짜띠 빅카웨 삼마-와-야-모.',
  translation: '비구들이여, 바른 노력이란 무엇인가? 여기서 비구는 아직 생겨나지 않은 나쁘고 불선한 법들이 생겨나지 않도록 의욕을 내고 노력하고 정진을 시작하고 마음을 굳건히 하고 분투한다. 이미 생겨난 나쁜 법들을 버리기 위해... 아직 생겨나지 않은 선한 법들이 생겨나도록... 이미 생겨난 선한 법들이 지속되고, 사라지지 않고, 더 늘어나고, 넓어지고, 수행으로 완성되도록 의욕을 낸다 — 이것을 바른 노력이라고 부른다.',
  grammarNotes: [
    '문장 구조: 4정근 — ① 악법 방지 ② 악법 제거 ③ 선법 생성 ④ 선법 증장. 각각 동일한 5개 동사 병렬',
    '5개 동사: chandaṃ janeti(의욕을 낸다), vāyamati(노력한다), vīriyaṃ ārabhati(정진을 시작한다), cittaṃ paggaṇhāti(마음을 굳건히 한다), padahati(분투한다)',
    '여격 목적: anuppādāya(안 생겨나게), pahānāya(버리기 위해), uppādāya(생겨나게), ṭhitiyā/asammosāya/bhiyyobhāvāya/vepullāya/bhāvanāya/pāripūriyā(지속/유지/증장/완성 위해)',
  ],
}

export const VERSE_19_WORDS: VerseWord[] = [
  { pali: 'sammāvāyāmo', pronKo: '삼마-와-야-모', meaning: '바른 노력', grammar: '남성 단수 주격', important: true },
  { pali: 'anuppannānaṃ', pronKo: '아눕빤나-낭', meaning: '아직 생겨나지 않은 것들의', grammar: '과거분사 남성 복수 속격 (an + uppanna)', important: true },
  { pali: 'pāpakānaṃ', pronKo: '빠-빠까-낭', meaning: '나쁜 것들의', grammar: '형용사 남성 복수 속격' },
  { pali: 'akusalānaṃ', pronKo: '아꾸살라-낭', meaning: '불선한 것들의', grammar: '형용사 남성 복수 속격', important: true },
  { pali: 'dhammānaṃ', pronKo: '담마-낭', meaning: '법들의', grammar: '남성 복수 속격' },
  { pali: 'anuppādāya', pronKo: '아눕빠-다-야', meaning: '안 생겨나게 하기 위해', grammar: '남성 단수 여격 (an + uppāda)' },
  { pali: 'chandaṃ', pronKo: '찬당', meaning: '의욕을', grammar: '남성 단수 대격', important: true },
  { pali: 'janeti', pronKo: '자네띠', meaning: '낸다/일으킨다', grammar: '현재 3인칭 단수 (janeti)' },
  { pali: 'vāyamati', pronKo: '와-야마띠', meaning: '노력한다', grammar: '현재 3인칭 단수', important: true },
  { pali: 'vīriyaṃ', pronKo: '위-리양', meaning: '정진을', grammar: '중성 단수 대격', important: true },
  { pali: 'ārabhati', pronKo: '아-라바띠', meaning: '시작하다', grammar: '현재 3인칭 단수' },
  { pali: 'paggaṇhāti', pronKo: '빡가나-띠', meaning: '굳건히 한다/붙잡다', grammar: '현재 3인칭 단수 (pa + gaṇhāti)' },
  { pali: 'padahati', pronKo: '빠다하띠', meaning: '분투한다/애쓰다', grammar: '현재 3인칭 단수', important: true },
  { pali: 'uppannānaṃ', pronKo: '웁빤나-낭', meaning: '이미 생겨난 것들의', grammar: '과거분사 남성 복수 속격' },
  { pali: 'pahānāya', pronKo: '빠하-나-야', meaning: '버리기 위해', grammar: '중성 단수 여격' },
  { pali: 'kusalānaṃ', pronKo: '꾸살라-낭', meaning: '선한 것들의', grammar: '형용사 남성 복수 속격', important: true },
  { pali: 'uppādāya', pronKo: '웁빠-다-야', meaning: '생겨나게 하기 위해', grammar: '남성 단수 여격' },
  { pali: 'ṭhitiyā', pronKo: '티띠야-', meaning: '지속을 위해', grammar: '여성 단수 여격' },
  { pali: 'asammosāya', pronKo: '아삼모사-야', meaning: '사라지지 않게 하기 위해', grammar: '남성 단수 여격 (a + sammosa)' },
  { pali: 'bhiyyobhāvāya', pronKo: '빗요바-와-야', meaning: '더 늘어나기 위해', grammar: '남성 단수 여격 (bhiyyo + bhāva)' },
  { pali: 'vepullāya', pronKo: '웨뿔라-야', meaning: '넓어지기 위해', grammar: '중성 단수 여격' },
]

/** 바른 새김 상세 — 사념처 정형구 */
export const VERSE_20 = {
  pali: 'Katamā ca bhikkhave sammāsati? Idha bhikkhave bhikkhu kāye kāyānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ; vedanāsu vedanānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ; citte cittānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ; dhammesu dhammānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṃ — ayaṃ vuccati bhikkhave sammāsati.',
  pronKo: '까따마- 짜 빅카웨 삼마-사띠? 이다 빅카웨 빅쿠 까-예 까-야-누빳시- 위하라띠 아-따-삐- 삼빠자-노 사띠마-, 위네야 로게 아비짜-도마낫상; 웨다나-수 웨다나-누빳시-... 짓떼 짓따-누빳시-... 담메수 담마-누빳시- 위하라띠 아-따-삐- 삼빠자-노 사띠마-, 위네야 로게 아비짜-도마낫상 — 아양 웃짜띠 빅카웨 삼마-사띠.',
  translation: '비구들이여, 바른 새김이란 무엇인가? 여기서 비구는 몸에서 몸을 관찰하며 머문다, 열심히, 분명히 알면서, 마음챙기며, 세상에서 탐욕과 근심을 제거하면서; 느낌에서 느낌을... 마음에서 마음을... 법에서 법을 관찰하며 머문다 — 이것을 바른 새김이라고 부른다.',
  grammarNotes: [
    '문장 구조: 사념처(kāya/vedanā/citta/dhamma) 각각의 관찰 + 공통 수식어 4개 → 결론문',
    '4개 수식어: ātāpī(열심히 하는), sampajāno(분명히 아는), satimā(마음챙김 있는), vineyya loke abhijjhādomanassaṃ(세상에서 탐욕과 근심을 제거하면서)',
    '핵심 문법: vineyya = 절대분사("제거하면서"). abhijjhādomanassaṃ = abhijjhā(탐욕) + domanassa(근심)',
  ],
}

export const VERSE_20_WORDS: VerseWord[] = [
  { pali: 'sammāsati', pronKo: '삼마-사띠', meaning: '바른 새김', grammar: '여성 단수 주격', important: true },
  { pali: 'kāye', pronKo: '까-예', meaning: '몸에서', grammar: '남성 단수 처격' },
  { pali: 'kāyānupassī', pronKo: '까-야-누빳시-', meaning: '몸을 관찰하는', grammar: '형용사 남성 단수 주격' },
  { pali: 'ātāpī', pronKo: '아-따-삐-', meaning: '열심히 하는/근면한', grammar: '형용사 남성 단수 주격', important: true },
  { pali: 'sampajāno', pronKo: '삼빠자-노', meaning: '분명히 아는', grammar: '형용사 남성 단수 주격', important: true },
  { pali: 'satimā', pronKo: '사띠마-', meaning: '마음챙김 있는', grammar: '형용사 남성 단수 주격 (sati + -mant)', important: true },
  { pali: 'vineyya', pronKo: '위네야', meaning: '제거하면서', grammar: '절대분사 (vineti)', important: true },
  { pali: 'loke', pronKo: '로게', meaning: '세상에서', grammar: '남성 단수 처격' },
  { pali: 'abhijjhādomanassaṃ', pronKo: '아비짜-도마낫상', meaning: '탐욕과 근심을', grammar: '중성 단수 대격 (abhijjhā + domanassa)', important: true },
]

/** 바른 삼매 상세 — 4선정 */
export const VERSE_21 = {
  pali: 'Katamo ca bhikkhave sammāsamādhi? Idha bhikkhave bhikkhu vivicceva kāmehi vivicca akusalehi dhammehi savitakkaṃ savicāraṃ vivekajaṃ pītisukhaṃ paṭhamaṃ jhānaṃ upasampajja viharati. Vitakkavicārānaṃ vūpasamā ajjhattaṃ sampasādanaṃ cetaso ekodibhāvaṃ avitakkaṃ avicāraṃ samādhijaṃ pītisukhaṃ dutiyaṃ jhānaṃ upasampajja viharati. Pītiyā ca virāgā upekkhako ca viharati sato ca sampajāno sukhañca kāyena paṭisaṃvedeti, yaṃ taṃ ariyā ācikkhanti upekkhako satimā sukhavihārīti tatiyaṃ jhānaṃ upasampajja viharati. Sukhassa ca pahānā dukkhassa ca pahānā pubbeva somanassadomanassānaṃ atthaṅgamā adukkhamasukhaṃ upekkhāsatipārisuddhiṃ catutthaṃ jhānaṃ upasampajja viharati — ayaṃ vuccati bhikkhave sammāsamādhi.',
  pronKo: '까따모 짜 빅카웨 삼마-사마-디? 이다 빅카웨 빅쿠 위윗쩨와 까-메히 위윗짜 아꾸살레히 담메히 사위딱깡 사위짜-랑 위웨까장 삐-띠수캉 빠타망 자-낭 우빠삼빳자 위하라띠. 위딱까위짜-라-낭 우-빠사마- 앗잣땅 삼빠사-다낭 쩨따소 에꼬디바-왕 아위딱깡 아위짜-랑 사마-디장 삐-띠수캉 두띠양 자-낭 우빠삼빳자 위하라띠. 삐-띠야- 짜 위라-가- 우뻭카꼬 짜 위하라띠 사또 짜 삼빠자-노 수칸짜 까-예나 빠띠상웨데띠... 따띠양 자-낭... 수캇사 짜 빠하-나- 둑캇사 짜 빠하-나- 뿝베와 소마낫사도마낫사-낭 앗탕가마- 아둑카마수캉 우뻭카-사띠빠-리숫딩 짜뚯탕 자-낭 우빠삼빳자 위하라띠 — 아양 웃짜띠 빅카웨 삼마-사마-디.',
  translation: '비구들이여, 바른 삼매란 무엇인가? 여기서 비구는 감각적 쾌락들로부터 떠나고, 불선한 법들로부터 떠나서, 일으킨 생각과 지속적 고찰이 있는, 떠남에서 생겨난 기쁨과 즐거움이 있는 첫째 선정에 들어 머문다. 일으킨 생각과 지속적 고찰의 가라앉음으로, 안으로 고요해지고 마음이 하나로 됨에, 생각과 고찰이 없는, 삼매에서 생겨난 기쁨과 즐거움이 있는 둘째 선정에... 기쁨의 탐욕 떠남으로 평정하게 머물고, 마음챙기며 분명히 알면서 몸으로 즐거움을 경험하니, 거룩한 이들이 "평정하고 마음챙기며 즐겁게 머무는 이"라고 말하는 셋째 선정에... 즐거움과 괴로움을 버림으로, 앞서 기뻐함과 슬퍼함이 사라지고, 괴롭지도 즐겁지도 않은, 평정과 새김의 청정인 넷째 선정에 들어 머문다 — 이것을 바른 삼매라고 부른다.',
  grammarNotes: [
    '문장 구조: 4선정(jhāna) 각각의 상세 설명. 선정 단계가 올라감에 따라 요소가 줄어가는 구조',
    '1선: savitakka(일으킨 생각 있음) + savicāra(지속적 고찰 있음) + vivekaja pītisukha(떠남에서 생긴 기쁨과 즐거움)',
    '2선: avitakka avicāra(생각/고찰 없음) + samādhija pītisukha(삼매에서 생긴 기쁨과 즐거움) + ekodibhāva(마음 통일)',
    '3선: pīti virāga(기쁨 떠남) + upekkhā(평정) + sati+sampajāna + sukhavihāra(즐거운 머무름)',
    '4선: sukhapahāna(즐거움 버림) + dukkha pahāna(괴로움 버림) + adukkhamasukha(불고불락) + upekkhāsatipārisuddhi(평정과 새김의 청정)',
  ],
}

export const VERSE_21_WORDS: VerseWord[] = [
  { pali: 'sammāsamādhi', pronKo: '삼마-사마-디', meaning: '바른 삼매', grammar: '남성 단수 주격', important: true },
  { pali: 'vivicceva', pronKo: '위윗쩨와', meaning: '떠나서(vivicca+eva)', grammar: '절대분사+강조사' },
  { pali: 'kāmehi', pronKo: '까-메히', meaning: '감각적 쾌락들로부터', grammar: '남성 복수 탈격' },
  { pali: 'akusalehi', pronKo: '아꾸살레히', meaning: '불선한 것들로부터', grammar: '형용사 남성 복수 탈격' },
  { pali: 'savitakkaṃ', pronKo: '사위딱깡', meaning: '일으킨 생각이 있는', grammar: '형용사 (sa + vitakka)', important: true },
  { pali: 'savicāraṃ', pronKo: '사위짜-랑', meaning: '지속적 고찰이 있는', grammar: '형용사 (sa + vicāra)', important: true },
  { pali: 'vivekajaṃ', pronKo: '위웨까장', meaning: '떠남에서 생겨난', grammar: '형용사 (viveka + ja)', important: true },
  { pali: 'pītisukhaṃ', pronKo: '삐-띠수캉', meaning: '기쁨과 즐거움', grammar: '중성 단수 대격 (pīti + sukha)', important: true },
  { pali: 'paṭhamaṃ', pronKo: '빠타망', meaning: '첫째', grammar: '서수 중성 단수 대격' },
  { pali: 'jhānaṃ', pronKo: '자-낭', meaning: '선정을', grammar: '중성 단수 대격', important: true },
  { pali: 'upasampajja', pronKo: '우빠삼빳자', meaning: '들어가서/도달하여', grammar: '절대분사 (upa + sampajjati)', important: true },
  { pali: 'vitakkavicārānaṃ', pronKo: '위딱까위짜-라-낭', meaning: '생각과 고찰들의', grammar: '남성 복수 속격' },
  { pali: 'vūpasamā', pronKo: '우-빠사마-', meaning: '가라앉음으로', grammar: '남성 단수 탈격', important: true },
  { pali: 'sampasādanaṃ', pronKo: '삼빠사-다낭', meaning: '고요해짐', grammar: '중성 단수 주격' },
  { pali: 'cetaso', pronKo: '쩨따소', meaning: '마음의', grammar: '중성 단수 속격 (cetas)' },
  { pali: 'ekodibhāvaṃ', pronKo: '에꼬디바-왕', meaning: '하나로 됨/통일', grammar: '남성 단수 대격 (ekodi + bhāva)', important: true },
  { pali: 'avitakkaṃ', pronKo: '아위딱깡', meaning: '생각 없는', grammar: '형용사 (a + vitakka)' },
  { pali: 'avicāraṃ', pronKo: '아위짜-랑', meaning: '고찰 없는', grammar: '형용사 (a + vicāra)' },
  { pali: 'samādhijaṃ', pronKo: '사마-디장', meaning: '삼매에서 생겨난', grammar: '형용사 (samādhi + ja)', important: true },
  { pali: 'dutiyaṃ', pronKo: '두띠양', meaning: '둘째', grammar: '서수 중성 단수 대격' },
  { pali: 'pītiyā', pronKo: '삐-띠야-', meaning: '기쁨의', grammar: '여성 단수 탈격/속격' },
  { pali: 'virāgā', pronKo: '위라-가-', meaning: '탐욕 떠남으로', grammar: '남성 단수 탈격', important: true },
  { pali: 'upekkhako', pronKo: '우뻭카꼬', meaning: '평정한', grammar: '형용사 남성 단수 주격', important: true },
  { pali: 'sato', pronKo: '사또', meaning: '마음챙기며', grammar: '형용사 남성 단수 주격 (sata)' },
  { pali: 'sukhañca', pronKo: '수칸짜', meaning: '즐거움을 그리고', grammar: '중성 단수 대격 + ca' },
  { pali: 'kāyena', pronKo: '까-예나', meaning: '몸으로', grammar: '남성 단수 구격' },
  { pali: 'paṭisaṃvedeti', pronKo: '빠띠상웨데띠', meaning: '경험한다', grammar: '현재 3인칭 단수', important: true },
  { pali: 'ariyā', pronKo: '아리야-', meaning: '거룩한 이들이', grammar: '남성 복수 주격' },
  { pali: 'ācikkhanti', pronKo: '아-찍칸띠', meaning: '말하다/설명하다', grammar: '현재 3인칭 복수' },
  { pali: 'sukhavihārīti', pronKo: '수카위하-리-띠', meaning: '"즐겁게 머무는 이"라고', grammar: '남성 단수 주격 + iti' },
  { pali: 'tatiyaṃ', pronKo: '따띠양', meaning: '셋째', grammar: '서수 중성 단수 대격' },
  { pali: 'sukhassa', pronKo: '수캇사', meaning: '즐거움의', grammar: '중성 단수 속격' },
  { pali: 'dukkhassa', pronKo: '둑캇사', meaning: '괴로움의', grammar: '중성 단수 속격' },
  { pali: 'somanassadomanassānaṃ', pronKo: '소마낫사도마낫사-낭', meaning: '기뻐함과 슬퍼함의', grammar: '중성 복수 속격 (somanassa + domanassa)' },
  { pali: 'atthaṅgamā', pronKo: '앗탕가마-', meaning: '사라짐으로', grammar: '남성 단수 탈격' },
  { pali: 'upekkhāsatipārisuddhiṃ', pronKo: '우뻭카-사띠빠-리숫딩', meaning: '평정과 새김의 청정', grammar: '여성 단수 대격 (upekkhā + sati + pārisuddhi)', important: true },
  { pali: 'catutthaṃ', pronKo: '짜뚯탕', meaning: '넷째', grammar: '서수 중성 단수 대격' },
]

// ══════════════════════════════════════════
// 결론
// ══════════════════════════════════════════

/** 수행의 과보 — 7년~7일 + 두 과보 */
export const VERSE_22 = {
  pali: 'Yo hi koci bhikkhave ime cattāro satipaṭṭhāne evaṃ bhāveyya sattavassāni, tassa dvinnaṃ phalānaṃ aññataraṃ phalaṃ pāṭikaṅkhaṃ — diṭṭheva dhamme aññā; sati vā upādisese anāgāmitā. Tiṭṭhantu bhikkhave sattavassāni... chabbassāni... pañcavassāni... cattāri vassāni... tīṇi vassāni... dve vassāni... ekaṃ vassaṃ... sattamāse... chamāse... pañcamāse... cattāro māse... tīṇi māse... dve māse... ekaṃ māsaṃ... aḍḍhamāsaṃ... Yo hi koci bhikkhave ime cattāro satipaṭṭhāne evaṃ bhāveyya sattāhaṃ, tassa dvinnaṃ phalānaṃ aññataraṃ phalaṃ pāṭikaṅkhaṃ — diṭṭheva dhamme aññā; sati vā upādisese anāgāmitā.',
  pronKo: '요 히 꼬찌 빅카웨 이메 짯따-로 사띠빳타-네 에왕 바-웨야 삿따왓사-니, 땃사 드윈낭 팔라-낭 안냐따랑 팔랑 빠-띠깡캉 — 딧테와 담메 안냐-; 사띠 와- 우빠-디세세 아나-가-미따-. 띳탄뚜 빅카웨 삿따왓사-니... 찹밧사-니... 빤짜왓사-니... 짯따-리 왓사-니... 띠-니 왓사-니... 드웨 왓사-니... 에깡 왓상... 삿따마-세... 차마-세... 빤짜마-세... 짯따-로 마-세... 띠-니 마-세... 드웨 마-세... 에깡 마-상... 앋다마-상... 요 히 꼬찌 빅카웨 이메 짯따-로 사띠빳타-네 에왕 바-웨야 삿따-항, 땃사 드윈낭 팔라-낭 안냐따랑 팔랑 빠-띠깡캉 — 딧테와 담메 안냐-; 사띠 와- 우빠-디세세 아나-가-미따-.',
  translation: '비구들이여, 누구든지 이 네 가지 새김의 확립을 이렇게 7년간 닦으면, 두 가지 과보 중 하나를 기대할 수 있으니 — 현생에서 완전한 앎(아라한과)이거나, 남은 취착이 있다면 불환과이다. 7년은 그만두고... 6년... 5년... 4년... 3년... 2년... 1년... 7개월... 6개월... 5개월... 4개월... 3개월... 2개월... 1개월... 보름... 누구든지 이 네 가지 새김의 확립을 이렇게 7일간 닦으면, 두 가지 과보 중 하나를 기대할 수 있다.',
  grammarNotes: [
    '문장 구조: 7년부터 7일까지 점진적으로 기간을 줄여가며 동일한 결론 — 두 가지 과보',
    '핵심 문법: bhāveyya = 가정법("닦으면"). pāṭikaṅkhaṃ = "기대할 수 있는"(미래수동분사). aññā = "완전한 앎"(아라한과)',
    '두 과보: ① diṭṭheva dhamme aññā(현생에서 완전한 앎 = 아라한과) ② anāgāmitā(불환과, 불환자의 상태)',
    '복합어: upādisese = upādi(취착) + sesa(남은) + 처격. anāgāmitā = anāgāmin(불환자) + tā(상태)',
  ],
}

export const VERSE_22_WORDS: VerseWord[] = [
  { pali: 'koci', pronKo: '꼬찌', meaning: '누구든지', grammar: '부정대명사 남성 단수 주격' },
  { pali: 'cattāro', pronKo: '짯따-로', meaning: '네 가지', grammar: '수사 남성 복수 대격' },
  { pali: 'satipaṭṭhāne', pronKo: '사띠빳타-네', meaning: '새김의 확립을', grammar: '남성 복수 대격', important: true },
  { pali: 'bhāveyya', pronKo: '바-웨야', meaning: '닦으면/수행하면', grammar: '가정법 3인칭 단수 (bhāveti)', important: true },
  { pali: 'sattavassāni', pronKo: '삿따왓사-니', meaning: '7년간', grammar: '중성 복수 대격 (satta + vassa)' },
  { pali: 'dvinnaṃ', pronKo: '드윈낭', meaning: '둘의', grammar: '수사 속격' },
  { pali: 'phalānaṃ', pronKo: '팔라-낭', meaning: '과보들의', grammar: '중성 복수 속격', important: true },
  { pali: 'aññataraṃ', pronKo: '안냐따랑', meaning: '어떤 하나의', grammar: '부정대명사 중성 단수 대격' },
  { pali: 'phalaṃ', pronKo: '팔랑', meaning: '과보를', grammar: '중성 단수 대격' },
  { pali: 'pāṭikaṅkhaṃ', pronKo: '빠-띠깡캉', meaning: '기대할 수 있는', grammar: '미래수동분사 중성 단수 대격', important: true },
  { pali: 'diṭṭheva', pronKo: '딧테와', meaning: '바로 현생에서(diṭṭhe+eva)', grammar: '과거분사 처격+강조사' },
  { pali: 'dhamme', pronKo: '담메', meaning: '법에서/현생에서', grammar: '남성 단수 처격' },
  { pali: 'aññā', pronKo: '안냐-', meaning: '완전한 앎(아라한과)', grammar: '여성 단수 주격', important: true },
  { pali: 'upādisese', pronKo: '우빠-디세세', meaning: '취착의 남은 것이 있을 때', grammar: '남성 단수 처격 (upādi + sesa)' },
  { pali: 'anāgāmitā', pronKo: '아나-가-미따-', meaning: '불환과/불환자의 상태', grammar: '여성 단수 주격 (anāgāmin + tā)', important: true },
  { pali: 'sattāhaṃ', pronKo: '삿따-항', meaning: '7일간', grammar: '중성 단수 대격 (satta + aha)', important: true },
]

/** 결미 — 경전 마무리 */
export const VERSE_23 = {
  pali: 'Ekāyano ayaṃ bhikkhave maggo sattānaṃ visuddhiyā, sokaparidevānaṃ samatikkamāya, dukkhadomanassānaṃ atthaṅgamāya, ñāyassa adhigamāya, nibbānassa sacchikiriyāya, yadidaṃ cattāro satipaṭṭhānāti. Iti yaṃ taṃ vuttaṃ idametaṃ paṭicca vuttanti.',
  pronKo: '에까-야노 아양 빅카웨 맥고 삿따-낭 위숫디야-, 소까빠리데와-낭 사마띡까마-야, 둑카도마낫사-낭 앗탕가마-야, 냐-얏사 아디가마-야, 닙바-낫사 삿치끼리야-야, 야디당 짯따-로 사띠빳타-나-띠. 이띠 양 땅 웃땅 이다메땅 빠띳짜 웃딴띠.',
  translation: '비구들이여, 이것은 중생의 청정을 위한 유일한 길이니, 슬픔과 비탄을 극복하기 위하여, 괴로움과 근심을 소멸하기 위하여, 바른 방법을 얻기 위하여, 열반을 실현하기 위하여, 곧 네 가지 새김의 확립이라고. 앞서 말씀하신 바가 이것에 의거하여 말씀하신 것이다.',
  grammarNotes: [
    '문장 구조: 서문(VERSE_1 of satipatthana-words.ts)의 반복 + 결미문. 경전 처음과 끝이 동일한 선언으로 감싸는 수미쌍관(ring composition)',
    '결미문: iti yaṃ taṃ vuttaṃ = "앞서 말씀하신 바가". idametaṃ paṭicca vuttaṃ = "이것에 의거하여 말씀하신 것이다"',
    '핵심 문법: vuttaṃ = 과거분사("말씀하신"). paṭicca = 절대분사("의거하여"). satipaṭṭhānāti = satipaṭṭhānā + iti',
  ],
}

export const VERSE_23_WORDS: VerseWord[] = [
  { pali: 'Ekāyano', pronKo: '에까-야노', meaning: '유일한 길인', grammar: '형용사 남성 단수 주격 (eka + ayana)', important: true },
  { pali: 'maggo', pronKo: '맥고', meaning: '길/도(道)', grammar: '남성 단수 주격', important: true },
  { pali: 'sattānaṃ', pronKo: '삿따-낭', meaning: '중생들의', grammar: '남성 복수 속격' },
  { pali: 'visuddhiyā', pronKo: '위숫디야-', meaning: '청정을 위해', grammar: '여성 단수 여격', important: true },
  { pali: 'sokaparidevānaṃ', pronKo: '소까빠리데와-낭', meaning: '슬픔과 비탄의', grammar: '남성 복수 속격 (soka + parideva)' },
  { pali: 'samatikkamāya', pronKo: '사마띡까마-야', meaning: '극복하기 위해', grammar: '남성 단수 여격' },
  { pali: 'dukkhadomanassānaṃ', pronKo: '둑카도마낫사-낭', meaning: '괴로움과 근심의', grammar: '중성 복수 속격 (dukkha + domanassa)' },
  { pali: 'atthaṅgamāya', pronKo: '앗탕가마-야', meaning: '소멸하기 위해', grammar: '남성 단수 여격' },
  { pali: 'ñāyassa', pronKo: '냐-얏사', meaning: '바른 방법의', grammar: '남성 단수 속격' },
  { pali: 'adhigamāya', pronKo: '아디가마-야', meaning: '얻기 위해', grammar: '남성 단수 여격', important: true },
  { pali: 'nibbānassa', pronKo: '닙바-낫사', meaning: '열반의', grammar: '중성 단수 속격', important: true },
  { pali: 'sacchikiriyāya', pronKo: '삿치끼리야-야', meaning: '실현하기 위해', grammar: '여성 단수 여격 (sacchi + kiriyā)', important: true },
  { pali: 'yadidaṃ', pronKo: '야디당', meaning: '곧 이것은', grammar: '관계대명사+지시대명사 (yad + idaṃ)' },
  { pali: 'satipaṭṭhānāti', pronKo: '사띠빳타-나-띠', meaning: '새김의 확립이라고', grammar: '남성 복수 주격 + iti' },
  { pali: 'vuttaṃ', pronKo: '웃땅', meaning: '말씀하신', grammar: '과거분사 중성 단수 주격 (vac)', important: true },
  { pali: 'idametaṃ', pronKo: '이다메땅', meaning: '바로 이것에', grammar: '지시대명사 (idaṃ + etaṃ)' },
  { pali: 'paṭicca', pronKo: '빠띳짜', meaning: '의거하여', grammar: '절대분사' },
]

// ══════════════════════════════════════════
// 전체 내보내기
// ══════════════════════════════════════════

export const DHAMMA_VERSES = [
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
  { id: 'v15', ...VERSE_15, words: VERSE_15_WORDS },
  { id: 'v16', ...VERSE_16, words: VERSE_16_WORDS },
  { id: 'v17', ...VERSE_17, words: VERSE_17_WORDS },
  { id: 'v18', ...VERSE_18, words: VERSE_18_WORDS },
  { id: 'v19', ...VERSE_19, words: VERSE_19_WORDS },
  { id: 'v20', ...VERSE_20, words: VERSE_20_WORDS },
  { id: 'v21', ...VERSE_21, words: VERSE_21_WORDS },
  { id: 'v22', ...VERSE_22, words: VERSE_22_WORDS },
  { id: 'v23', ...VERSE_23, words: VERSE_23_WORDS },
]

// ── 전체 단어 (중복 제거) ──
export const ALL_DHAMMA_WORDS: VerseWord[] = (() => {
  const seen = new Set<string>()
  const unique: VerseWord[] = []
  for (const verse of DHAMMA_VERSES) {
    for (const word of verse.words) {
      if (!seen.has(word.pali)) {
        seen.add(word.pali)
        unique.push(word)
      }
    }
  }
  return unique
})()
