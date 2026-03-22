// 보배경(Ratana Sutta) — Suttanipāta 2.1 전문 17게송 단어 데이터
// 모든 게송 생략 없이 수록

import type { VerseWord } from './types'

// ── 제1게송: 서문 — 모든 존재에 대한 권유 ──

export const VERSE_1 = {
  pali: 'Yānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe;\nsabbe va bhūtā sumanā bhavantu, athopi sakkacca suṇantu bhāsitaṃ.',
  pronKo: '야-니-다 부-따-니 사마-가따-니, 붐마-니 와- 야-니 와 안딸릭케;\n삽베 와 부-따- 수마나- 바완뚜, 아토삐 삭깟짜 수난뚜 바-시땅.',
  translation: '이 자리에 모인 존재들이여, 땅 위든 하늘이든,\n모든 존재가 행복하기를, 그리고 정성껏 말씀을 들으시라.',
  grammarNotes: [
    '문장 구조: 관계절(Yānīdha...samāgatāni) + 주절(bhavantu/suṇantu). 명령형 동사 2개가 핵심 술어',
    '핵심 문법: bhavantu(명령형 3인칭 복수)와 suṇantu가 청원/축원의 의미. sumanā(su+mana)는 바후브비히 복합어로 "좋은 마음을 가진"',
    '연성법: Yānīdha = yāni + idha (모음 축약). athopi = atha + api (모음 생략)',
  ],
}

export const VERSE_1_WORDS: VerseWord[] = [
  { pali: 'Yānīdha', pronKo: '야-니-다', meaning: '여기에 ~한 것들이', grammar: '관계대명사 중성 복수 주격 + idha (연성)' },
  { pali: 'bhūtāni', pronKo: '부-따-니', meaning: '존재들이', grammar: '중성 복수 주격' },
  { pali: 'samāgatāni', pronKo: '사마-가따-니', meaning: '모인', grammar: '과거분사 중성 복수 주격 (saṃ + āgata)' },
  { pali: 'bhummāni', pronKo: '붐마-니', meaning: '땅의/지상의', grammar: '형용사 중성 복수 주격' },
  { pali: 'vā', pronKo: '와-', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'yāni', pronKo: '야-니', meaning: '~한 것들이', grammar: '관계대명사 중성 복수 주격' },
  { pali: 'va', pronKo: '와', meaning: '또는/혹은', grammar: '불변어(접속사)' },
  { pali: 'antalikkhe', pronKo: '안딸릭케', meaning: '허공에/하늘에', grammar: '중성 단수 처격' },
  { pali: 'sabbe', pronKo: '삽베', meaning: '모든', grammar: '형용사 남성 복수 주격' },
  { pali: 'bhūtā', pronKo: '부-따-', meaning: '존재들이', grammar: '남성 복수 주격' },
  { pali: 'sumanā', pronKo: '수마나-', meaning: '행복한 마음의', grammar: '형용사 남성 복수 주격 (su + mana)' },
  { pali: 'bhavantu', pronKo: '바완뚜', meaning: '~이기를/되기를', grammar: '명령형 3인칭 복수 (bhavati)' },
  { pali: 'athopi', pronKo: '아토삐', meaning: '그리고 또한', grammar: '불변어 (atha + api, 연성)' },
  { pali: 'sakkacca', pronKo: '삭깟짜', meaning: '정성껏/공경히', grammar: '절대분사 (sakkāroti)' },
  { pali: 'suṇantu', pronKo: '수난뚜', meaning: '들으시라', grammar: '명령형 3인칭 복수 (suṇāti)' },
  { pali: 'bhāsitaṃ', pronKo: '바-시땅', meaning: '말씀을/설법을', grammar: '과거분사 중성 단수 대격 (bhāsati)' },
]

// ── 제2게송: 존재들에 대한 자비 ──

export const VERSE_2 = {
  pali: 'Tasmā hi bhūtā nisāmetha sabbe, mettaṃ karotha mānusiyā pajāya;\ndivā ca ratto ca haranti ye baliṃ, tasmā hi ne rakkhatha appamattā.',
  pronKo: '따스마- 히 부-따- 니사-메타 삽베, 멧땅 까로타 마-누시야- 빠자-야;\n디와- 짜 랏또 짜 하란띠 예 발링, 따스마- 히 네 락카타 앱빠맛따-.',
  translation: '그러므로 모든 존재들이여 들으시라. 인간의 자손에게 자비를 행하라.\n낮이든 밤이든 공양을 바치는 이들을 방일하지 않고 보호하라.',
  grammarNotes: [
    '문장 구조: 명령절(nisāmetha + karotha) + 관계절(ye...baliṃ) + 명령절(rakkhatha). 3개 명령형이 연속',
    '핵심 문법: nisāmetha(명령형 2인칭 복수)는 "들으시라". karotha(명령형 2인칭 복수)는 "행하라". rakkhatha(명령형 2인칭 복수)는 "보호하라"',
    '복합어: appamattā = a(부정) + pamatta(방일한), "방일하지 않는". mānusiyā pajāya(여격)는 "인간의 자손에게"',
  ],
}

export const VERSE_2_WORDS: VerseWord[] = [
  { pali: 'Tasmā', pronKo: '따스마-', meaning: '그러므로', grammar: '불변어(접속부사)' },
  { pali: 'hi', pronKo: '히', meaning: '실로/정말로', grammar: '불변어(강조사)' },
  { pali: 'bhūtā', pronKo: '부-따-', meaning: '존재들이여', grammar: '남성 복수 주격' },
  { pali: 'nisāmetha', pronKo: '니사-메타', meaning: '들으시라/경청하시라', grammar: '명령형 2인칭 복수 (nisāmeti)' },
  { pali: 'sabbe', pronKo: '삽베', meaning: '모든', grammar: '형용사 남성 복수 주격' },
  { pali: 'mettaṃ', pronKo: '멧땅', meaning: '자비를/자애를', grammar: '여성 단수 대격' },
  { pali: 'karotha', pronKo: '까로타', meaning: '행하라/베풀라', grammar: '명령형 2인칭 복수 (karoti)' },
  { pali: 'mānusiyā', pronKo: '마-누시야-', meaning: '인간의', grammar: '형용사 여성 단수 여격' },
  { pali: 'pajāya', pronKo: '빠자-야', meaning: '자손에게/백성에게', grammar: '여성 단수 여격' },
  { pali: 'divā', pronKo: '디와-', meaning: '낮에', grammar: '불변어(부사)' },
  { pali: 'ca', pronKo: '짜', meaning: '그리고/~와', grammar: '불변어(접속사)' },
  { pali: 'ratto', pronKo: '랏또', meaning: '밤에', grammar: '불변어(부사, rattiṃ의 변형)' },
  { pali: 'haranti', pronKo: '하란띠', meaning: '바치다/가져가다', grammar: '현재 3인칭 복수 (harati)' },
  { pali: 'ye', pronKo: '예', meaning: '~하는 이들이', grammar: '관계대명사 남성 복수 주격' },
  { pali: 'baliṃ', pronKo: '발링', meaning: '공양을/헌물을', grammar: '남성 단수 대격' },
  { pali: 'ne', pronKo: '네', meaning: '그들을', grammar: '인칭대명사 3인칭 복수 대격' },
  { pali: 'rakkhatha', pronKo: '락카타', meaning: '보호하라', grammar: '명령형 2인칭 복수 (rakkhati)' },
  { pali: 'appamattā', pronKo: '앱빠맛따-', meaning: '방일하지 않고', grammar: '형용사 남성 복수 주격 (a + pamatta)' },
]

// ── 제3게송: 부처님의 보배 ──

export const VERSE_3 = {
  pali: 'Yaṃ kiñci vittaṃ idha vā huraṃ vā, saggesu vā yaṃ ratanaṃ paṇītaṃ;\nna no samaṃ atthi tathāgatena.\nIdampi buddhe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '양 낀찌 윗땅 이다 와- 후랑 와-, 삭게수 와- 양 라따낭 빠니-땅;\n나 노 사망 앗티 따타-가떼나.\n이담삐 붓데 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '이 세상이든 저 세상이든 하늘에든, 어떤 보배가 있더라도\n여래와 같은 것은 없으니.\n이것이 부처님의 뛰어난 보배이니라, 이 진리로 안녕이 있기를.',
  grammarNotes: [
    '문장 구조: 양보절(Yaṃ kiñci...paṇītaṃ) + 부정 주절(na no samaṃ atthi) + 선언절(idampi...paṇītaṃ) + 축원절(etena...hotu)',
    '핵심 문법: tathāgatena(구격)는 비교 대상 — "여래와 비교하여 같은 것이 없다". kiñci는 부정대명사(kiṃ+ci)',
    '복합어: tathāgata = tathā(그렇게) + gata(간), "진리에 도달한 자". suvatthi = su(좋은) + atthi(존재)',
    '연성법: idampi = idaṃ + api (ṃ→m 비음 동화)',
  ],
}

export const VERSE_3_WORDS: VerseWord[] = [
  { pali: 'Yaṃ', pronKo: '양', meaning: '어떤 ~이든', grammar: '관계대명사 중성 단수 주격' },
  { pali: 'kiñci', pronKo: '낀찌', meaning: '무엇이든/어떤', grammar: '부정대명사 중성 단수 주격 (kiṃ + ci)' },
  { pali: 'vittaṃ', pronKo: '윗땅', meaning: '재물/보물', grammar: '중성 단수 주격' },
  { pali: 'idha', pronKo: '이다', meaning: '여기에/이 세상에', grammar: '불변어(부사)' },
  { pali: 'vā', pronKo: '와-', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'huraṃ', pronKo: '후랑', meaning: '저 세상에/저편에', grammar: '불변어(부사)' },
  { pali: 'saggesu', pronKo: '삭게수', meaning: '하늘들에/천상에', grammar: '남성 복수 처격' },
  { pali: 'yaṃ', pronKo: '양', meaning: '어떤 ~이든', grammar: '관계대명사 중성 단수 주격' },
  { pali: 'ratanaṃ', pronKo: '라따낭', meaning: '보배/보석', grammar: '중성 단수 주격' },
  { pali: 'paṇītaṃ', pronKo: '빠니-땅', meaning: '뛰어난/수승한', grammar: '형용사 중성 단수 주격' },
  { pali: 'na', pronKo: '나', meaning: '~않다', grammar: '불변어(부정사)' },
  { pali: 'no', pronKo: '노', meaning: '실로/확실히', grammar: '불변어(강조사)' },
  { pali: 'samaṃ', pronKo: '사망', meaning: '같은 것이', grammar: '형용사 중성 단수 주격' },
  { pali: 'atthi', pronKo: '앗티', meaning: '있다/존재하다', grammar: '현재 3인칭 단수 (atthi)' },
  { pali: 'tathāgatena', pronKo: '따타-가떼나', meaning: '여래에 의해/여래와', grammar: '남성 단수 구격' },
  { pali: 'Idampi', pronKo: '이담삐', meaning: '이것도/이것이', grammar: '지시대명사 중성 단수 주격 + api' },
  { pali: 'buddhe', pronKo: '붓데', meaning: '부처님 안에/에 대해', grammar: '남성 단수 처격' },
  { pali: 'etena', pronKo: '에떼나', meaning: '이것에 의해', grammar: '지시대명사 중성 단수 구격' },
  { pali: 'saccena', pronKo: '삿쩨나', meaning: '진실에 의해', grammar: '중성 단수 구격' },
  { pali: 'suvatthi', pronKo: '수왓티', meaning: '행복/안녕', grammar: '여성 단수 주격 (su + atthi)' },
  { pali: 'hotu', pronKo: '호뚜', meaning: '~이기를/되기를', grammar: '명령형 3인칭 단수 (bhavati)' },
]

// ── 제4게송: 법의 보배 — 소멸과 이욕 ──

export const VERSE_4 = {
  pali: 'Khayaṃ virāgaṃ amataṃ paṇītaṃ, yadajjhagā sakyamunī samāhito;\nna tena dhammena samatthi kiñci.\nIdampi dhamme ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '카양 위라-강 아마땅 빠니-땅, 야닷자가- 사꺄무니- 사마-히또;\n나 떼나 담메나 사맛티 낀찌.\n이담삐 담메 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '소멸과 이욕과 불사의 뛰어난 것을 석가모니께서 삼매에서 깨달으셨으니,\n그 법과 같은 것은 없으니.\n이것이 법의 뛰어난 보배이니라.',
  grammarNotes: [
    '문장 구조: 목적어 나열(Khayaṃ virāgaṃ amataṃ paṇītaṃ) + 관계절(yad...samāhito) + 부정절(na...kiñci)',
    '핵심 문법: ajjhagā(adhigacchati의 과거형)는 "깨달았다/도달했다". samāhito(과거분사)는 "삼매에 든 채로"',
    '복합어: virāga = vi(떠남) + rāga(탐욕). amata = a(부정) + mata(죽은), 열반의 동의어',
    '연성법: yadajjhagā = yaṃ + ajjhagā. samatthi = samaṃ + atthi',
  ],
}

export const VERSE_4_WORDS: VerseWord[] = [
  { pali: 'Khayaṃ', pronKo: '카양', meaning: '소멸/다함', grammar: '남성 단수 대격' },
  { pali: 'virāgaṃ', pronKo: '위라-강', meaning: '이욕/탐욕의 떠남', grammar: '남성 단수 대격 (vi + rāga)' },
  { pali: 'amataṃ', pronKo: '아마땅', meaning: '불사의/죽지 않는', grammar: '형용사 중성 단수 대격 (a + mata)' },
  { pali: 'paṇītaṃ', pronKo: '빠니-땅', meaning: '뛰어난/수승한', grammar: '형용사 중성 단수 대격' },
  { pali: 'yadajjhagā', pronKo: '야닷자가-', meaning: '~것을 깨달으셨다', grammar: 'yaṃ + ajjhagā (연성), 과거 3인칭 단수 (adhigacchati)' },
  { pali: 'sakyamunī', pronKo: '사꺄무니-', meaning: '석가모니(석가족의 성자)', grammar: '남성 단수 주격 (고유명사)' },
  { pali: 'samāhito', pronKo: '사마-히또', meaning: '삼매에 든/집중한', grammar: '과거분사 남성 단수 주격 (samādahati)' },
  { pali: 'tena', pronKo: '떼나', meaning: '그것에 의해/그와', grammar: '지시대명사 남성 단수 구격' },
  { pali: 'dhammena', pronKo: '담메나', meaning: '법에 의해/법과', grammar: '남성 단수 구격' },
  { pali: 'samatthi', pronKo: '사맛티', meaning: '같은 것이 있다', grammar: 'samaṃ + atthi (연성)' },
  { pali: 'kiñci', pronKo: '낀찌', meaning: '무엇이든/어떤 것이', grammar: '부정대명사 중성 단수 주격' },
  { pali: 'dhamme', pronKo: '담메', meaning: '법 안에/법에 대해', grammar: '남성 단수 처격' },
]

// ── 제5게송: 법의 보배 — 청정한 삼매 ──

export const VERSE_5 = {
  pali: 'Yaṃ buddhaseṭṭho parivaṇṇayī suciṃ, samādhimānantarikaññamāhu;\nsamādhinā tena samo na vijjati.\nIdampi dhamme ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '양 붓다셋토 빠리완나이- 수찡, 사마-디마-난따리깐냐마-후;\n사마-디나- 떼나 사모 나 윗자띠.\n이담삐 담메 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '최상의 부처님이 찬탄하신 청정한 삼매를 간격 없는 것이라 하니,\n그 삼매와 같은 것은 없으니.\n이것이 법의 뛰어난 보배이니라.',
  grammarNotes: [
    '문장 구조: 관계절(Yaṃ...suciṃ) + 인용절(samādhiṃ...āhu) + 부정 주절(samo na vijjati)',
    '핵심 문법: parivaṇṇayī(과거형, parivaṇṇeti)는 "찬탄하다". vijjati(vindati의 수동형)는 "발견되다"',
    '복합어: buddhaseṭṭho = buddha + seṭṭha(최상의). ānantarika = an + antara(간격) + ika',
    '연성법: samādhimānantarikaññamāhu = samādhiṃ + ānantarikaṃ + āhu (3단 연성)',
  ],
}

export const VERSE_5_WORDS: VerseWord[] = [
  { pali: 'buddhaseṭṭho', pronKo: '붓다셋토', meaning: '최상의 부처님', grammar: '남성 단수 주격 (buddha + seṭṭha)' },
  { pali: 'parivaṇṇayī', pronKo: '빠리완나이-', meaning: '찬탄하셨다', grammar: '과거 3인칭 단수 (parivaṇṇeti)' },
  { pali: 'suciṃ', pronKo: '수찡', meaning: '청정한', grammar: '형용사 남성 단수 대격' },
  { pali: 'samādhimānantarikaññamāhu', pronKo: '사마-디마-난따리깐냐마-후', meaning: '삼매를 간격 없는 것이라 말했다', grammar: 'samādhiṃ + ānantarikaṃ + āhu (연성)' },
  { pali: 'samādhinā', pronKo: '사마-디나-', meaning: '삼매에 의해/삼매와', grammar: '남성 단수 구격' },
  { pali: 'samo', pronKo: '사모', meaning: '같은 것이', grammar: '형용사 남성 단수 주격' },
  { pali: 'vijjati', pronKo: '윗자띠', meaning: '발견되다/있다', grammar: '수동 현재 3인칭 단수 (vindati)' },
]

// ── 제6게송: 승가의 보배 — 여덟 성인 ──

export const VERSE_6 = {
  pali: 'Ye puggalā aṭṭha sataṃ pasatthā, cattāri etāni yugāni honti;\nte dakkhiṇeyyā sugatassa sāvakā, etesu dinnāni mahapphalāni.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '예 뿍갈라- 앗타 사땅 빠삿타-, 짯따-리 에따-니 유가-니 혼띠;\n떼 닥키네이야- 수가땃사 사-와까-, 에떼수 딘나-니 마합팔라-니.\n이담삐 상게 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '선인들이 찬탄한 여덟 성인, 네 쌍이 되니,\n그들은 선서의 제자로서 공양 받을 만하니, 그들에게 보시하면 큰 과보가 있나니.\n이것이 승가의 뛰어난 보배이니라.',
  grammarNotes: [
    '문장 구조: 관계절(Ye...pasatthā) + 주절(cattāri...honti) + 주절2(te...sāvakā) + 결과절(etesu...mahapphalāni)',
    '핵심 문법: pasatthā(과거분사)는 "찬탄된". dakkhiṇeyyā(의무분사)는 "공양 받을 만한"',
    '복합어: mahapphalāni = mahā + phalāni. sugatassa = su + gata, 부처님의 별칭',
  ],
}

export const VERSE_6_WORDS: VerseWord[] = [
  { pali: 'Ye', pronKo: '예', meaning: '~한 그들이', grammar: '관계대명사 남성 복수 주격' },
  { pali: 'puggalā', pronKo: '뿍갈라-', meaning: '사람들/인물들', grammar: '남성 복수 주격' },
  { pali: 'aṭṭha', pronKo: '앗타', meaning: '여덟', grammar: '수사' },
  { pali: 'sataṃ', pronKo: '사땅', meaning: '선인들에 의해', grammar: '남성 복수 속격 (sant, 선한 자)' },
  { pali: 'pasatthā', pronKo: '빠삿타-', meaning: '찬탄된/칭찬받은', grammar: '과거분사 남성 복수 주격 (pasaṃsati)' },
  { pali: 'cattāri', pronKo: '짯따-리', meaning: '넷', grammar: '수사 중성 복수 주격' },
  { pali: 'etāni', pronKo: '에따-니', meaning: '이것들은', grammar: '지시대명사 중성 복수 주격' },
  { pali: 'yugāni', pronKo: '유가-니', meaning: '쌍들', grammar: '중성 복수 주격' },
  { pali: 'honti', pronKo: '혼띠', meaning: '~이다/된다', grammar: '현재 3인칭 복수 (bhavati)' },
  { pali: 'te', pronKo: '떼', meaning: '그들은', grammar: '지시대명사 남성 복수 주격' },
  { pali: 'dakkhiṇeyyā', pronKo: '닥키네이야-', meaning: '공양 받을 만한', grammar: '의무분사 남성 복수 주격 (dakkhiṇā + eyya)' },
  { pali: 'sugatassa', pronKo: '수가땃사', meaning: '선서(부처님)의', grammar: '남성 단수 속격 (su + gata)' },
  { pali: 'sāvakā', pronKo: '사-와까-', meaning: '제자들', grammar: '남성 복수 주격' },
  { pali: 'etesu', pronKo: '에떼수', meaning: '이들에게', grammar: '지시대명사 남성 복수 처격' },
  { pali: 'dinnāni', pronKo: '딘나-니', meaning: '보시된/주어진 것들이', grammar: '과거분사 중성 복수 주격 (deti)' },
  { pali: 'mahapphalāni', pronKo: '마합팔라-니', meaning: '큰 과보의', grammar: '형용사 중성 복수 주격 (mahā + phala)' },
  { pali: 'saṅghe', pronKo: '상게', meaning: '승가 안에/승가에 대해', grammar: '남성 단수 처격' },
]

// ── 제7게송: 승가의 보배 — 정진하는 이들 ──

export const VERSE_7 = {
  pali: 'Ye suppayuttā manasā daḷhena, nikkāmino gotamasāsanamhi;\nte pattipattā amataṃ vigayha, laddhā mudhā nibbutiṃ bhuñjamānā.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '예 숩빠윳따- 마나사- 달헤나, 닉까-미노 고따마사-사남히;\n떼 빳띠빳따- 아마땅 위가이하, 랃다- 무다- 닙부띵 분자마-나-.\n이담삐 상게 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '굳건한 마음으로 잘 정진하여, 고따마 가르침에서 떠남 없는 이들,\n불사에 들어가 도달하여 얻은 적멸의 즐거움을 누리니.\n이것이 승가의 뛰어난 보배이니라.',
  grammarNotes: [
    '문장 구조: 관계절(Ye...sāsanamhi) + 주절(te...bhuñjamānā). 절대분사 vigayha, laddhā가 순차적 행위를 연결',
    '핵심 문법: bhuñjamānā(현재분사)는 진행 중인 향유. manasā daḷhena(구격)는 수단 — "굳건한 마음으로"',
    '복합어: suppayuttā = su + payutta. gotamasāsanamhi = gotama + sāsana + mhi',
    '절대분사 연쇄: vigayha(vigāhati) → laddhā(labhati)',
  ],
}

export const VERSE_7_WORDS: VerseWord[] = [
  { pali: 'suppayuttā', pronKo: '숩빠윳따-', meaning: '잘 정진한', grammar: '과거분사 남성 복수 주격 (su + payutta)' },
  { pali: 'manasā', pronKo: '마나사-', meaning: '마음으로', grammar: '중성 단수 구격' },
  { pali: 'daḷhena', pronKo: '달헤나', meaning: '굳건한', grammar: '형용사 중성 단수 구격' },
  { pali: 'nikkāmino', pronKo: '닉까-미노', meaning: '떠남이 없는/욕망 없는', grammar: '형용사 남성 복수 주격 (nikkāmin)' },
  { pali: 'gotamasāsanamhi', pronKo: '고따마사-사남히', meaning: '고따마의 가르침에서', grammar: '중성 단수 처격 (gotama + sāsana)' },
  { pali: 'pattipattā', pronKo: '빳띠빳따-', meaning: '도달한/성취한', grammar: '과거분사 남성 복수 주격 (paṭipajjati)' },
  { pali: 'vigayha', pronKo: '위가이하', meaning: '들어가서/잠겨서', grammar: '절대분사 (vigāhati)' },
  { pali: 'laddhā', pronKo: '랃다-', meaning: '얻어서', grammar: '절대분사 (labhati)' },
  { pali: 'mudhā', pronKo: '무다-', meaning: '값없이/공짜로', grammar: '불변어(부사)' },
  { pali: 'nibbutiṃ', pronKo: '닙부띵', meaning: '적멸/열반의 즐거움', grammar: '여성 단수 대격' },
  { pali: 'bhuñjamānā', pronKo: '분자마-나-', meaning: '누리면서/향유하면서', grammar: '현재분사 남성 복수 주격 (bhuñjati)' },
]

// ── 제8게송: 승가의 보배 — 인드라의 기둥 ──

export const VERSE_8 = {
  pali: 'Yathindakhīlo paṭhaviṃ sito siyā, catubbhi vātehi asampakampiyo;\ntathūpamaṃ sappurisaṃ vadāmi, yo ariyasaccāni avecca passati.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '야틴다키-로 빠타윙 시또 시야-, 짜뚭비 와-떼히 아삼빠깜삐요;\n따투-빠망 삽뿌리상 와다-미, 요 아리야삿짜-니 아웻짜 빳사띠.\n이담삐 상게 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '인드라의 기둥이 땅에 박혀 사방의 바람에도 흔들리지 않듯,\n성스러운 진리를 확실히 보는 선인도 그와 같다고 나는 말한다.\n이것이 승가의 뛰어난 보배이니라.',
  grammarNotes: [
    '문장 구조: 비유절(Yathā...asampakampiyo) + 주절(tathā...vadāmi) + 관계절(yo...passati)',
    '핵심 문법: yathā...tathā 구문은 "~처럼...그와 같이". avecca(절대분사)는 "확실히/꿰뚫어"',
    '복합어: indakhīlo = inda(인드라) + khīla(기둥). asampakampiyo = a + saṃ + pakampiya(흔들리는)',
    '연성법: Yathindakhīlo = yathā + indakhīlo. tathūpamaṃ = tathā + upamaṃ',
  ],
}

export const VERSE_8_WORDS: VerseWord[] = [
  { pali: 'Yathindakhīlo', pronKo: '야틴다키-로', meaning: '인드라의 기둥처럼', grammar: 'yathā + indakhīlo (연성), 남성 단수 주격' },
  { pali: 'paṭhaviṃ', pronKo: '빠타윙', meaning: '땅에', grammar: '여성 단수 대격' },
  { pali: 'sito', pronKo: '시또', meaning: '의지한/박힌', grammar: '과거분사 남성 단수 주격 (sayati)' },
  { pali: 'siyā', pronKo: '시야-', meaning: '~일 것이다', grammar: '가정법 3인칭 단수 (atthi)' },
  { pali: 'catubbhi', pronKo: '짜뚭비', meaning: '네 가지의', grammar: '수사 구격 복수 (catu)' },
  { pali: 'vātehi', pronKo: '와-떼히', meaning: '바람들에 의해', grammar: '남성 복수 구격' },
  { pali: 'asampakampiyo', pronKo: '아삼빠깜삐요', meaning: '흔들리지 않는', grammar: '의무분사 부정형 (a + saṃ + pakampiya)' },
  { pali: 'tathūpamaṃ', pronKo: '따투-빠망', meaning: '그와 같은', grammar: 'tathā + upamaṃ (연성), 남성 단수 대격' },
  { pali: 'sappurisaṃ', pronKo: '삽뿌리상', meaning: '선인을/좋은 사람을', grammar: '남성 단수 대격 (sat + purisa)' },
  { pali: 'vadāmi', pronKo: '와다-미', meaning: '나는 말한다', grammar: '현재 1인칭 단수 (vadati)' },
  { pali: 'yo', pronKo: '요', meaning: '~하는 그가', grammar: '관계대명사 남성 단수 주격' },
  { pali: 'ariyasaccāni', pronKo: '아리야삿짜-니', meaning: '성스러운 진리들을', grammar: '중성 복수 대격 (ariya + sacca)' },
  { pali: 'avecca', pronKo: '아웻짜', meaning: '확실히/꿰뚫어', grammar: '절대분사 (aveti)' },
  { pali: 'passati', pronKo: '빳사띠', meaning: '본다/꿰뚫어 본다', grammar: '현재 3인칭 단수 (passati)' },
]

// ── 제9게송: 승가의 보배 — 여덟 번째 존재 없음 ──

export const VERSE_9 = {
  pali: 'Ye ariyasaccāni vibhāvayanti, gambhīrapaññena sudesitāni;\nkiñcāpi te honti bhusappamattā, na te bhavaṃ aṭṭhamaṃ ādiyanti.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '예 아리야삿짜-니 위바-와얀띠, 감비-라빤녜나 수데시따-니;\n낀짜-삐 떼 혼띠 부삽빠맛따-, 나 떼 바왕 앗타망 아-디얀띠.\n이담삐 상게 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '깊은 지혜를 가진 분께서 잘 가르치신 성스러운 진리를 밝히는 이들은,\n아무리 방일하더라도 여덟 번째 존재를 받지 않는다.\n이것이 승가의 뛰어난 보배이니라.',
  grammarNotes: [
    '문장 구조: 관계절(Ye...sudesitāni) + 양보절(kiñcāpi...bhusappamattā) + 부정 주절(na...ādiyanti)',
    '핵심 문법: vibhāvayanti(사역형)는 "밝히다/이해하다". ādiyanti(ādiyati)는 "취하다/받다"',
    '복합어: gambhīrapaññena = gambhīra(깊은) + pañña(지혜). bhusappamattā = bhusa(심히) + pamatta(방일한)',
    '교리: aṭṭhamaṃ bhavaṃ = 수다원은 최대 7번 윤회, 8번째 존재는 없다',
  ],
}

export const VERSE_9_WORDS: VerseWord[] = [
  { pali: 'ariyasaccāni', pronKo: '아리야삿짜-니', meaning: '성스러운 진리들을', grammar: '중성 복수 대격 (ariya + sacca)' },
  { pali: 'vibhāvayanti', pronKo: '위바-와얀띠', meaning: '밝히다/이해하다', grammar: '현재 3인칭 복수 사역형 (vibhāveti)' },
  { pali: 'gambhīrapaññena', pronKo: '감비-라빤녜나', meaning: '깊은 지혜를 가진 분에 의해', grammar: '남성 단수 구격 (gambhīra + pañña)' },
  { pali: 'sudesitāni', pronKo: '수데시따-니', meaning: '잘 가르치신', grammar: '과거분사 중성 복수 주격 (su + desita)' },
  { pali: 'kiñcāpi', pronKo: '낀짜-삐', meaning: '비록 ~일지라도', grammar: '불변어 (kiñci + api, 양보 접속사)' },
  { pali: 'bhusappamattā', pronKo: '부삽빠맛따-', meaning: '심히 방일한', grammar: '형용사 남성 복수 주격 (bhusa + pamatta)' },
  { pali: 'bhavaṃ', pronKo: '바왕', meaning: '존재를/윤회를', grammar: '남성 단수 대격' },
  { pali: 'aṭṭhamaṃ', pronKo: '앗타망', meaning: '여덟 번째의', grammar: '서수 중성 단수 대격' },
  { pali: 'ādiyanti', pronKo: '아-디얀띠', meaning: '취하다/받다', grammar: '현재 3인칭 복수 (ādiyati)' },
]

// ── 제10게송: 승가의 보배 — 세 가지 결박 끊음 ──

export const VERSE_10 = {
  pali: 'Sahāvassa dassanasampadāya, tayassu dhammā jahitā bhavanti;\nsakkāyadiṭṭhi vicikicchitañca, sīlabbataṃ vāpi yadatthi kiñci.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '사하-왓사 닷사나삼빠다-야, 따얏수 담마- 자히따- 바완띠;\n삭까-야딧티 위찌낏치딴짜, 시-랍바땅 와-삐 야닷티 낀찌.\n이담삐 상게 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '견해의 성취와 함께 세 가지 법을 버리니,\n유신견과 의심과 계금취이다.\n이것이 승가의 뛰어난 보배이니라.',
  grammarNotes: [
    '문장 구조: 부사절(Sahā...sampadāya) + 주절(tayassu...bhavanti) + 열거(sakkāyadiṭṭhi...kiñci)',
    '핵심 문법: jahitā(jahati의 과거분사)는 "버려진". sahā(전치사)는 "~와 함께"',
    '교리: 수다원이 끊는 세 결박(saṃyojana) — 유신견, 의심, 계금취',
    '복합어: dassanasampadāya = dassana(견해) + sampadā(성취). sakkāyadiṭṭhi = sakkāya(유신) + diṭṭhi(견해)',
  ],
}

export const VERSE_10_WORDS: VerseWord[] = [
  { pali: 'Sahāvassa', pronKo: '사하-왓사', meaning: '그의 ~와 함께', grammar: 'sahā + assa (연성), 전치사 + 대명사 속격' },
  { pali: 'dassanasampadāya', pronKo: '닷사나삼빠다-야', meaning: '견해의 성취에 의해', grammar: '여성 단수 구격 (dassana + sampadā)' },
  { pali: 'tayassu', pronKo: '따얏수', meaning: '세 가지 실로', grammar: 'tayo + assu (연성), 수사 남성 복수 주격 + 강조사' },
  { pali: 'dhammā', pronKo: '담마-', meaning: '법들이/것들이', grammar: '남성 복수 주격' },
  { pali: 'jahitā', pronKo: '자히따-', meaning: '버려진', grammar: '과거분사 남성 복수 주격 (jahati)' },
  { pali: 'bhavanti', pronKo: '바완띠', meaning: '~이 된다', grammar: '현재 3인칭 복수 (bhavati)' },
  { pali: 'sakkāyadiṭṭhi', pronKo: '삭까-야딧티', meaning: '유신견', grammar: '여성 단수 주격 (sakkāya + diṭṭhi)' },
  { pali: 'vicikicchitañca', pronKo: '위찌낏치딴짜', meaning: '의심과', grammar: '중성 단수 주격 + ca (vicikicchā의 변형)' },
  { pali: 'sīlabbataṃ', pronKo: '시-랍바땅', meaning: '계금취를', grammar: '중성 단수 주격 (sīla + vata, 연성 bb)' },
  { pali: 'vāpi', pronKo: '와-삐', meaning: '또는 ~이든', grammar: 'vā + api (연성)' },
  { pali: 'yadatthi', pronKo: '야닷티', meaning: '어떤 것이든', grammar: 'yaṃ + atthi (연성)' },
]

// ── 제11게송: 승가의 보배 — 네 악처에서 벗어남 ──

export const VERSE_11 = {
  pali: 'Catūhapāyehi ca vippamutto, cha cābhiṭhānāni abhabbo kātuṃ.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '짜뚜-하빠-예히 짜 윕빠뭇또, 차 짜-비탄나-니 아밥보 까-뚱.\n이담삐 상게 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '네 가지 악처에서 벗어나고, 여섯 가지 중죄를 지을 수 없다.\n이것이 승가의 뛰어난 보배이니라.',
  grammarNotes: [
    '문장 구조: 서술절(vippamutto + abhabbo kātuṃ). 간결한 2행 게송',
    '핵심 문법: vippamutto(과거분사)는 "벗어난". abhabbo(형용사)는 "불가능한" + kātuṃ(부정사) "할 수 없는"',
    '교리: 4악처(catūhapāya) = 지옥, 아귀, 축생, 아수라. 6중죄(abhiṭhāna) = 모친살해 등',
    '연성법: Catūhapāyehi = catūhi + apāyehi. cābhiṭhānāni = ca + abhiṭhānāni',
  ],
}

export const VERSE_11_WORDS: VerseWord[] = [
  { pali: 'Catūhapāyehi', pronKo: '짜뚜-하빠-예히', meaning: '네 가지 악처에서', grammar: 'catūhi + apāyehi (연성), 남성 복수 탈격' },
  { pali: 'vippamutto', pronKo: '윕빠뭇또', meaning: '벗어난/해탈한', grammar: '과거분사 남성 단수 주격 (vippamuccati)' },
  { pali: 'cha', pronKo: '차', meaning: '여섯', grammar: '수사' },
  { pali: 'cābhiṭhānāni', pronKo: '짜-비탄나-니', meaning: '그리고 중죄들을', grammar: 'ca + abhiṭhānāni (연성), 중성 복수 대격' },
  { pali: 'abhabbo', pronKo: '아밥보', meaning: '불가능한/~할 수 없는', grammar: '형용사 남성 단수 주격' },
  { pali: 'kātuṃ', pronKo: '까-뚱', meaning: '행할/지을', grammar: '부정사 (karoti)' },
]

// ── 제12게송: 승가의 보배 — 악업을 숨길 수 없음 ──

export const VERSE_12 = {
  pali: 'Kiñcāpi so kammaṃ karoti pāpakaṃ, kāyena vācā uda cetasā vā;\nabhabbo so tassa paṭicchādāya, abhabbatā diṭṭhapadassa vuttā.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '낀짜-삐 소 깜망 까로띠 빠-빠깡, 까-예나 와-짜- 우다 쩨따사- 와-;\n아밥보 소 땃사 빠띳차-다-야, 아밥바따- 딧타빠닷사 웃따-.\n이담삐 상게 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '설령 그가 몸이나 말이나 마음으로 나쁜 업을 짓더라도,\n그것을 숨길 수 없으니, 도를 본 자에게는 불가능하다고 설해졌다.\n이것이 승가의 뛰어난 보배이니라.',
  grammarNotes: [
    '문장 구조: 양보절(Kiñcāpi...vā) + 주절(abhabbo...paṭicchādāya) + 인용절(abhabbatā...vuttā)',
    '핵심 문법: paṭicchādāya(여격 부정사)는 "숨기기 위해/숨기는 것에". vuttā(vacati의 과거분사)는 "말해진"',
    '복합어: diṭṭhapadassa = diṭṭha(본) + pada(도/경지), "도를 본 자의"',
  ],
}

export const VERSE_12_WORDS: VerseWord[] = [
  { pali: 'Kiñcāpi', pronKo: '낀짜-삐', meaning: '비록 ~일지라도', grammar: '불변어 (kiñci + api, 양보 접속사)' },
  { pali: 'so', pronKo: '소', meaning: '그가', grammar: '지시대명사 남성 단수 주격' },
  { pali: 'kammaṃ', pronKo: '깜망', meaning: '업을/행위를', grammar: '중성 단수 대격' },
  { pali: 'karoti', pronKo: '까로띠', meaning: '짓다/행하다', grammar: '현재 3인칭 단수 (karoti)' },
  { pali: 'pāpakaṃ', pronKo: '빠-빠깡', meaning: '나쁜/악한', grammar: '형용사 중성 단수 대격' },
  { pali: 'kāyena', pronKo: '까-예나', meaning: '몸으로', grammar: '남성 단수 구격' },
  { pali: 'vācā', pronKo: '와-짜-', meaning: '말로', grammar: '여성 단수 구격' },
  { pali: 'uda', pronKo: '우다', meaning: '또는', grammar: '불변어(접속사)' },
  { pali: 'cetasā', pronKo: '쩨따사-', meaning: '마음으로', grammar: '중성 단수 구격 (cetas)' },
  { pali: 'abhabbo', pronKo: '아밥보', meaning: '불가능한/~할 수 없는', grammar: '형용사 남성 단수 주격' },
  { pali: 'tassa', pronKo: '땃사', meaning: '그것의/그에 대해', grammar: '지시대명사 중성 단수 속격' },
  { pali: 'paṭicchādāya', pronKo: '빠띳차-다-야', meaning: '숨기기 위해', grammar: '여격 부정사 (paṭicchādeti)' },
  { pali: 'abhabbatā', pronKo: '아밥바따-', meaning: '불가능함이', grammar: '여성 단수 주격 (abhabba + tā)' },
  { pali: 'diṭṭhapadassa', pronKo: '딧타빠닷사', meaning: '도를 본 자의', grammar: '남성 단수 속격 (diṭṭha + pada)' },
  { pali: 'vuttā', pronKo: '웃따-', meaning: '말해진/설해진', grammar: '과거분사 여성 단수 주격 (vacati)' },
]

// ── 제13게송: 부처님의 보배 — 숲속의 꽃 ──

export const VERSE_13 = {
  pali: 'Vanappagumbe yathā phussitagge, gimhānamāse paṭhamasmiṃ gimhe;\ntathūpamaṃ dhammavaraṃ adesayi, nibbānagāmiṃ paramaṃ hitāya.\nIdampi buddhe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '와납빠굼베 야타- 풋시딱게, 김하-나마-세 빠타마스밍 김헤;\n따투-빠망 담마와랑 아데사이, 닙바-나가-밍 빠라망 히따-야.\n이담삐 붓데 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '숲속의 나무가 여름 첫 달에 꽃을 피우듯,\n열반으로 이끄는 최상의 법을 최상의 이익을 위해 가르치셨다.\n이것이 부처님의 뛰어난 보배이니라.',
  grammarNotes: [
    '문장 구조: 비유절(yathā...gimhe) + 주절(tathūpamaṃ...hitāya). yathā...tathā 비유 구문',
    '핵심 문법: adesayi(ādeseti의 과거형)는 "가르치셨다". hitāya(여격)는 목적 — "이익을 위해"',
    '복합어: vanappagumbe = vana(숲) + pagumba(덤불). phussitagge = phussita(꽃 핀) + agga(꼭대기)',
    '복합어: nibbānagāmiṃ = nibbāna(열반) + gāmin(이끄는). dhammavaraṃ = dhamma + vara(뛰어난)',
  ],
}

export const VERSE_13_WORDS: VerseWord[] = [
  { pali: 'Vanappagumbe', pronKo: '와납빠굼베', meaning: '숲속의 덤불에서', grammar: '남성 단수 처격 (vana + pagumba)' },
  { pali: 'yathā', pronKo: '야타-', meaning: '~처럼', grammar: '불변어(비유 부사)' },
  { pali: 'phussitagge', pronKo: '풋시딱게', meaning: '꼭대기에 꽃이 핀', grammar: '형용사 남성 단수 처격 (phussita + agga)' },
  { pali: 'gimhānamāse', pronKo: '김하-나마-세', meaning: '여름의 달에', grammar: '남성 단수 처격 (gimhāna + māsa)' },
  { pali: 'paṭhamasmiṃ', pronKo: '빠타마스밍', meaning: '첫 번째의', grammar: '형용사 남성 단수 처격' },
  { pali: 'gimhe', pronKo: '김헤', meaning: '여름에', grammar: '남성 단수 처격' },
  { pali: 'tathūpamaṃ', pronKo: '따투-빠망', meaning: '그와 같은', grammar: 'tathā + upamaṃ (연성)' },
  { pali: 'dhammavaraṃ', pronKo: '담마와랑', meaning: '뛰어난 법을', grammar: '남성 단수 대격 (dhamma + vara)' },
  { pali: 'adesayi', pronKo: '아데사이', meaning: '가르치셨다/보여주셨다', grammar: '과거 3인칭 단수 (ādeseti)' },
  { pali: 'nibbānagāmiṃ', pronKo: '닙바-나가-밍', meaning: '열반으로 이끄는', grammar: '형용사 남성 단수 대격 (nibbāna + gāmin)' },
  { pali: 'paramaṃ', pronKo: '빠라망', meaning: '최상의/최고의', grammar: '형용사 중성 단수 대격' },
  { pali: 'hitāya', pronKo: '히따-야', meaning: '이익을 위해', grammar: '중성 단수 여격 (hita)' },
]

// ── 제14게송: 부처님의 보배 — 뛰어난 분 ──

export const VERSE_14 = {
  pali: 'Varo varaññū varado varāharo, anuttaro dhammavaraṃ adesayi.\nIdampi buddhe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '와로 와란뉴- 와라도 와라-하로, 아눗따로 담마와랑 아데사이.\n이담삐 붓데 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '뛰어난 분, 뛰어남을 아는 분, 뛰어남을 주는 분, 뛰어남을 가져오는 분이\n위없는 뛰어난 법을 가르치셨다.\n이것이 부처님의 뛰어난 보배이니라.',
  grammarNotes: [
    '문장 구조: 주어 나열(Varo...varāharo) + 형용사(anuttaro) + 목적어(dhammavaraṃ) + 동사(adesayi)',
    '핵심 문법: 4개의 vara 복합어로 부처님의 덕성을 강조. anuttaro = an + uttara(더 높은), "위없는"',
    '복합어: varaññū = vara + ñū(아는 자). varado = vara + da(주는 자). varāharo = vara + āhara(가져오는 자)',
  ],
}

export const VERSE_14_WORDS: VerseWord[] = [
  { pali: 'Varo', pronKo: '와로', meaning: '뛰어난 분', grammar: '형용사 남성 단수 주격' },
  { pali: 'varaññū', pronKo: '와란뉴-', meaning: '뛰어남을 아는 분', grammar: '남성 단수 주격 (vara + ñū)' },
  { pali: 'varado', pronKo: '와라도', meaning: '뛰어남을 주는 분', grammar: '남성 단수 주격 (vara + da)' },
  { pali: 'varāharo', pronKo: '와라-하로', meaning: '뛰어남을 가져오는 분', grammar: '남성 단수 주격 (vara + āhara)' },
  { pali: 'anuttaro', pronKo: '아눗따로', meaning: '위없는/최상의', grammar: '형용사 남성 단수 주격 (an + uttara)' },
  { pali: 'dhammavaraṃ', pronKo: '담마와랑', meaning: '뛰어난 법을', grammar: '남성 단수 대격 (dhamma + vara)' },
  { pali: 'adesayi', pronKo: '아데사이', meaning: '가르치셨다', grammar: '과거 3인칭 단수 (ādeseti)' },
]

// ── 제15게송: 승가의 보배 — 등불처럼 꺼지다 ──

export const VERSE_15 = {
  pali: 'Khīṇaṃ purāṇaṃ navaṃ natthi sambhavaṃ, virattacittāyatike bhavasmiṃ;\nte khīṇabījā aviruḷhichandā, nibbanti dhīrā yathāyaṃ padīpo.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.',
  pronKo: '키-낭 뿌라-낭 나왕 낫티 삼바왕, 위랏따찟따-야띠게 바와스밍;\n떼 키-나비-자- 아위룰히찬다-, 닙반띠 디-라- 야타-양 빠디-뽀.\n이담삐 상게 라따낭 빠니-땅, 에떼나 삿쩨나 수왓티 호뚜.',
  translation: '옛것은 다하고 새것은 생겨나지 않으며, 미래 존재에 마음이 이욕한 이들,\n씨앗이 다하고 욕구가 자라지 않는 지혜로운 이들은 이 등불처럼 꺼진다.\n이것이 승가의 뛰어난 보배이니라.',
  grammarNotes: [
    '문장 구조: 서술절(Khīṇaṃ...sambhavaṃ) + 형용사절(virattacitta...bhavasmiṃ) + 주절(te...padīpo)',
    '핵심 문법: nibbanti(nibbāti, 3인칭 복수)는 "꺼지다/열반에 들다". yathā...padīpo는 등불 비유',
    '복합어: khīṇabījā = khīṇa(다한) + bīja(씨앗). aviruḷhichandā = a + viruḷhi(자라남) + chanda(욕구)',
    '복합어: virattacittā = viratta(이욕한) + citta(마음). āyatike = āyati(미래) + ka',
  ],
}

export const VERSE_15_WORDS: VerseWord[] = [
  { pali: 'Khīṇaṃ', pronKo: '키-낭', meaning: '다한/소진된', grammar: '과거분사 중성 단수 주격 (khīyati)' },
  { pali: 'purāṇaṃ', pronKo: '뿌라-낭', meaning: '옛것이/이전의', grammar: '형용사 중성 단수 주격' },
  { pali: 'navaṃ', pronKo: '나왕', meaning: '새것이/새로운', grammar: '형용사 중성 단수 주격' },
  { pali: 'natthi', pronKo: '낫티', meaning: '없다', grammar: 'na + atthi (연성)' },
  { pali: 'sambhavaṃ', pronKo: '삼바왕', meaning: '생겨남/탄생', grammar: '남성 단수 주격' },
  { pali: 'virattacittāyatike', pronKo: '위랏따찟따-야띠게', meaning: '미래 존재에 마음이 이욕한', grammar: '남성 복수 주격 (viratta + citta + āyatika)' },
  { pali: 'bhavasmiṃ', pronKo: '바와스밍', meaning: '존재에/윤회에', grammar: '남성 단수 처격' },
  { pali: 'khīṇabījā', pronKo: '키-나비-자-', meaning: '씨앗이 다한', grammar: '형용사 남성 복수 주격 (khīṇa + bīja)' },
  { pali: 'aviruḷhichandā', pronKo: '아위룰히찬다-', meaning: '욕구가 자라지 않는', grammar: '형용사 남성 복수 주격 (a + viruḷhi + chanda)' },
  { pali: 'nibbanti', pronKo: '닙반띠', meaning: '꺼지다/열반에 들다', grammar: '현재 3인칭 복수 (nibbāti)' },
  { pali: 'dhīrā', pronKo: '디-라-', meaning: '지혜로운 이들', grammar: '형용사 남성 복수 주격' },
  { pali: 'yathāyaṃ', pronKo: '야타-양', meaning: '이것처럼', grammar: 'yathā + ayaṃ (연성)' },
  { pali: 'padīpo', pronKo: '빠디-뽀', meaning: '등불이', grammar: '남성 단수 주격' },
]

// ── 제16게송: 결어 — 부처님께 예배 ──

export const VERSE_16 = {
  pali: 'Yānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe;\ntathāgataṃ devamanussapūjitaṃ, buddhaṃ namassāma suvatthi hotu.',
  pronKo: '야-니-다 부-따-니 사마-가따-니, 붐마-니 와- 야-니 와 안딸릭케;\n따타-가땅 데와마눗사뿌-지땅, 붓당 나맛사-마 수왓티 호뚜.',
  translation: '이 자리에 모인 존재들이여, 땅 위든 하늘이든,\n천신과 인간이 공양하는 여래, 부처님께 예배하오니 안녕이 있기를.',
  grammarNotes: [
    '문장 구조: 호격절(Yānīdha...antalikkhe) + 주절(tathāgataṃ...namassāma) + 축원(suvatthi hotu)',
    '핵심 문법: namassāma(명령/원망형 1인칭 복수)는 "예배하자/예배합니다". 제1게송과 대구',
    '복합어: devamanussapūjitaṃ = deva(천신) + manussa(인간) + pūjita(공양받은)',
  ],
}

export const VERSE_16_WORDS: VerseWord[] = [
  { pali: 'tathāgataṃ', pronKo: '따타-가땅', meaning: '여래를', grammar: '남성 단수 대격 (tathā + gata)' },
  { pali: 'devamanussapūjitaṃ', pronKo: '데와마눗사뿌-지땅', meaning: '천신과 인간이 공양한', grammar: '과거분사 남성 단수 대격 (deva + manussa + pūjita)' },
  { pali: 'buddhaṃ', pronKo: '붓당', meaning: '부처님을', grammar: '남성 단수 대격' },
  { pali: 'namassāma', pronKo: '나맛사-마', meaning: '예배합니다', grammar: '현재/원망형 1인칭 복수 (namassati)' },
]

// ── 제17게송: 결어 — 법과 승가에 예배 ──

export const VERSE_17 = {
  pali: 'Yānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe;\ntathāgataṃ devamanussapūjitaṃ, dhammaṃ namassāma suvatthi hotu.\nYānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe;\ntathāgataṃ devamanussapūjitaṃ, saṅghaṃ namassāma suvatthi hotu.',
  pronKo: '야-니-다 부-따-니 사마-가따-니, 붐마-니 와- 야-니 와 안딸릭케;\n따타-가땅 데와마눗사뿌-지땅, 담망 나맛사-마 수왓티 호뚜.\n야-니-다 부-따-니 사마-가따-니, 붐마-니 와- 야-니 와 안딸릭케;\n따타-가땅 데와마눗사뿌-지땅, 상강 나맛사-마 수왓티 호뚜.',
  translation: '이 자리에 모인 존재들이여, 땅 위든 하늘이든,\n천신과 인간이 공양하는 여래, 법에 예배하오니 안녕이 있기를.\n...승가에 예배하오니 안녕이 있기를.',
  grammarNotes: [
    '문장 구조: 제16게송과 동일한 대구 구조. 대상만 dhammaṃ → saṅghaṃ으로 교체',
    '핵심 문법: 삼보(三寶) 귀의의 완결. 16게송(buddha) → 17게송(dhamma + saṅgha)',
    '특징: 한 게송에 법과 승가 예배가 합쳐져 있어, 실제 독송에서는 두 번 반복한다',
  ],
}

export const VERSE_17_WORDS: VerseWord[] = [
  { pali: 'dhammaṃ', pronKo: '담망', meaning: '법을', grammar: '남성 단수 대격' },
  { pali: 'saṅghaṃ', pronKo: '상강', meaning: '승가를', grammar: '남성 단수 대격' },
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
  { id: 'v11', ...VERSE_11, words: VERSE_11_WORDS },
  { id: 'v12', ...VERSE_12, words: VERSE_12_WORDS },
  { id: 'v13', ...VERSE_13, words: VERSE_13_WORDS },
  { id: 'v14', ...VERSE_14, words: VERSE_14_WORDS },
  { id: 'v15', ...VERSE_15, words: VERSE_15_WORDS },
  { id: 'v16', ...VERSE_16, words: VERSE_16_WORDS },
  { id: 'v17', ...VERSE_17, words: VERSE_17_WORDS },
]

// ── 전체 단어 (중복 제거) ──
export const ALL_RATANA_WORDS: VerseWord[] = (() => {
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
