import type { TeachGrammarStep } from './types'

// De Silva Pali Primer 문법 — 순서대로
// 각 스텝은 스마트폰 한 화면에 맞게 짧게 (테이블 1개 + 예문 3-4개)

export const PRIMER_GRAMMAR: TeachGrammarStep[] = [

  // ═══════════════════════════════════════
  // Lesson 2: a-어간 남성 명사
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: 'a-어간 남성 명사: 단수 격변화',
    description:
      '빠알리어에서 가장 흔한 명사 유형. -a로 끝나는 남성 명사.',
    examples: [
      { pali: 'buddho', breakdown: 'buddha + o', meaning: '붓다가 (주격)', highlight: 'o' },
      { pali: 'buddhaṃ', breakdown: 'buddha + aṃ', meaning: '붓다를 (목적격)', highlight: 'aṃ' },
      { pali: 'buddhena', breakdown: 'buddha + ena', meaning: '붓다에 의해 (조격)', highlight: 'ena' },
      { pali: 'buddhassa', breakdown: 'buddha + ssa', meaning: '붓다의 (소유격)', highlight: 'ssa' },
    ],
    table: {
      label: 'a-어간 남성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-o', example: 'buddho', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-aṃ', example: 'buddhaṃ', meaning: '~을/를' },
        { case: '조격 (ins.)', ending: '-ena', example: 'buddhena', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-āya/-ssa', example: 'buddhāya', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-ā/-mhā/-smā', example: 'buddhā', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-ssa', example: 'buddhassa', meaning: '~의' },
        { case: '처격 (loc.)', ending: '-e/-mhi/-smiṃ', example: 'buddhe', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '= 어간', example: 'buddha', meaning: '~이여' },
      ],
    },
    tip: '-o로 끝나면 남성 주격 단수',
    relatedLesson: 'Primer Lesson 2',
  },

  {
    type: 'teach-grammar',
    title: 'a-어간 남성 명사: 복수 격변화',
    description: '복수형도 규칙적. 주격 -ā, 목적격 -e 를 먼저 익히세요.',
    examples: [
      { pali: 'buddhā', breakdown: 'buddha + ā', meaning: '붓다들이 (주격)', highlight: 'ā' },
      { pali: 'buddhe', breakdown: 'buddha + e', meaning: '붓다들을 (목적격)', highlight: 'e' },
      { pali: 'buddhehi', breakdown: 'buddha + ehi', meaning: '붓다들에 의해 (조격)', highlight: 'ehi' },
      { pali: 'buddhānaṃ', breakdown: 'buddha + ānaṃ', meaning: '붓다들의 (소유격)', highlight: 'ānaṃ' },
    ],
    table: {
      label: 'a-어간 남성 명사 복수',
      rows: [
        { case: '주격 (nom.)', ending: '-ā', example: 'buddhā', meaning: '~들이' },
        { case: '목적격 (acc.)', ending: '-e', example: 'buddhe', meaning: '~들을' },
        { case: '조격 (ins.)', ending: '-ehi/-ebhi', example: 'buddhehi', meaning: '~들에 의해' },
        { case: '여격 (dat.)', ending: '-ānaṃ', example: 'buddhānaṃ', meaning: '~들에게' },
        { case: '탈격 (abl.)', ending: '-ehi/-ebhi', example: 'buddhehi', meaning: '~들로부터' },
        { case: '소유격 (gen.)', ending: '-ānaṃ', example: 'buddhānaṃ', meaning: '~들의' },
        { case: '처격 (loc.)', ending: '-esu', example: 'buddhesu', meaning: '~들에서' },
        { case: '호격 (voc.)', ending: '= 주격', example: 'buddhā', meaning: '~들이여' },
      ],
    },
    tip: '복수 여격과 소유격은 둘 다 -ānaṃ (같은 형태)',
    relatedLesson: 'Primer Lesson 2',
  },

  // ═══════════════════════════════════════
  // Lesson 3: 동사 현재형
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: '동사 현재형: 기본 활용',
    description:
      '빠알리어 동사는 어근(dhātu) + 접미사로 구성. 현재형은 인칭/수에 따라 변화.',
    examples: [
      { pali: 'pacati', breakdown: 'pac + a + ti', meaning: '(그가) 요리한다', highlight: 'ti' },
      { pali: 'pacanti', breakdown: 'pac + a + nti', meaning: '(그들이) 요리한다', highlight: 'nti' },
      { pali: 'pacāmi', breakdown: 'pac + ā + mi', meaning: '(내가) 요리한다', highlight: 'mi' },
      { pali: 'pacasi', breakdown: 'pac + a + si', meaning: '(네가) 요리한다', highlight: 'si' },
    ],
    table: {
      label: '동사 현재형 활용 (pac- 요리하다)',
      rows: [
        { case: '3인칭 단수', ending: '-ti', example: 'pacati', meaning: '(그가) 요리한다' },
        { case: '3인칭 복수', ending: '-nti', example: 'pacanti', meaning: '(그들이) 요리한다' },
        { case: '2인칭 단수', ending: '-si', example: 'pacasi', meaning: '(네가) 요리한다' },
        { case: '2인칭 복수', ending: '-tha', example: 'pacatha', meaning: '(너희가) 요리한다' },
        { case: '1인칭 단수', ending: '-mi', example: 'pacāmi', meaning: '(내가) 요리한다' },
        { case: '1인칭 복수', ending: '-ma', example: 'pacāma', meaning: '(우리가) 요리한다' },
      ],
    },
    tip: '경전에서 가장 많이 보이는 것은 3인칭 -ti/-nti',
    relatedLesson: 'Primer Lesson 3',
  },

  {
    type: 'teach-grammar',
    title: '자주 나오는 동사 10선',
    description: '경전에서 반복적으로 등장하는 핵심 동사들.',
    examples: [
      { pali: 'gacchati', breakdown: 'gam + cha + ti', meaning: '(그가) 간다', highlight: 'gaccha' },
      { pali: 'passati', breakdown: 'dis/pas + a + ti', meaning: '(그가) 본다', highlight: 'passa' },
      { pali: 'suṇāti', breakdown: 'su + ṇā + ti', meaning: '(그가) 듣는다', highlight: 'suṇā' },
      { pali: 'karoti', breakdown: 'kar + o + ti', meaning: '(그가) 한다', highlight: 'karo' },
    ],
    table: {
      label: '핵심 동사 10선 (현재 3인칭 단수)',
      rows: [
        { case: '가다', ending: 'gacchati', example: 'gam', meaning: '가다' },
        { case: '오다', ending: 'āgacchati', example: 'ā + gam', meaning: '오다' },
        { case: '서다', ending: 'tiṭṭhati', example: 'ṭhā', meaning: '서다' },
        { case: '앉다', ending: 'nisīdati', example: 'ni + sad', meaning: '앉다' },
        { case: '보다', ending: 'passati', example: 'dis/pas', meaning: '보다' },
        { case: '듣다', ending: 'suṇāti', example: 'su', meaning: '듣다' },
        { case: '말하다', ending: 'vadati', example: 'vad', meaning: '말하다' },
        { case: '하다', ending: 'karoti', example: 'kar', meaning: '하다' },
        { case: '주다', ending: 'dadāti', example: 'dā', meaning: '주다' },
        { case: '알다', ending: 'jānāti', example: 'ñā', meaning: '알다' },
      ],
    },
    tip: 'gacchati, passati, karoti — 이 세 동사만 알아도 경전 절반을 읽는다',
    relatedLesson: 'Primer Lesson 3',
  },

  // ═══════════════════════════════════════
  // Lesson 4: a-어간 중성 명사
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: 'a-어간 중성 명사: 단수 격변화',
    description:
      '남성과 거의 같지만 주격/목적격/호격만 다르다. 중성은 주격 = 목적격이 항상 같다!',
    examples: [
      { pali: 'cittaṃ', breakdown: 'citta + aṃ', meaning: '마음이/마음을 (주격=목적격)', highlight: 'aṃ' },
      { pali: 'rūpaṃ', breakdown: 'rūpa + aṃ', meaning: '물질이/물질을', highlight: 'aṃ' },
      { pali: 'dukkhaṃ', breakdown: 'dukkha + aṃ', meaning: '괴로움이/괴로움을', highlight: 'aṃ' },
      { pali: 'sukhaṃ', breakdown: 'sukha + aṃ', meaning: '행복이/행복을', highlight: 'aṃ' },
    ],
    table: {
      label: 'a-어간 중성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-aṃ', example: 'cittaṃ', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-aṃ', example: 'cittaṃ', meaning: '~을/를' },
        { case: '조격 (ins.)', ending: '-ena', example: 'cittena', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-āya/-ssa', example: 'cittassa', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-ā/-mhā/-smā', example: 'cittā', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-ssa', example: 'cittassa', meaning: '~의' },
        { case: '처격 (loc.)', ending: '-e/-mhi/-smiṃ', example: 'citte', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '-aṃ / 어간', example: 'cittaṃ', meaning: '~이여' },
      ],
    },
    tip: '중성은 주격 = 목적격이 항상 같다! 남성과의 유일한 차이.',
    relatedLesson: 'Primer Lesson 4',
  },

  {
    type: 'teach-grammar',
    title: 'a-어간 중성 명사: 복수 격변화',
    description: '복수에서도 주격 = 목적격. 어미 -āni로 끝남. 나머지는 남성 복수와 동일.',
    examples: [
      { pali: 'cittāni', breakdown: 'citta + āni', meaning: '마음들이/마음들을 (주격=목적격)', highlight: 'āni' },
      { pali: 'rūpāni', breakdown: 'rūpa + āni', meaning: '물질들이/물질들을', highlight: 'āni' },
      { pali: 'dukkhāni', breakdown: 'dukkha + āni', meaning: '괴로움들이', highlight: 'āni' },
    ],
    table: {
      label: 'a-어간 중성 명사 복수',
      rows: [
        { case: '주격 (nom.)', ending: '-āni', example: 'cittāni', meaning: '~들이' },
        { case: '목적격 (acc.)', ending: '-āni', example: 'cittāni', meaning: '~들을' },
        { case: '조격 (ins.)', ending: '-ehi/-ebhi', example: 'cittehi', meaning: '~들에 의해' },
        { case: '여격 (dat.)', ending: '-ānaṃ', example: 'cittānaṃ', meaning: '~들에게' },
        { case: '탈격 (abl.)', ending: '-ehi/-ebhi', example: 'cittehi', meaning: '~들로부터' },
        { case: '소유격 (gen.)', ending: '-ānaṃ', example: 'cittānaṃ', meaning: '~들의' },
        { case: '처격 (loc.)', ending: '-esu', example: 'cittesu', meaning: '~들에서' },
        { case: '호격 (voc.)', ending: '-āni', example: 'cittāni', meaning: '~들이여' },
      ],
    },
    tip: '복수 주격/목적격/호격 -āni, 나머지는 남성 복수와 완전히 같다',
    relatedLesson: 'Primer Lesson 4',
  },

  // ═══════════════════════════════════════
  // Lesson 5: ā-어간 여성 명사
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: 'ā-어간 여성 명사: 단수 격변화',
    description:
      '-ā로 끝나는 여성 명사. 조격~처격이 대부분 -āya로 동일한 것이 특징.',
    examples: [
      { pali: 'paññā', breakdown: 'paññ + ā', meaning: '지혜가 (주격)', highlight: 'ā' },
      { pali: 'paññaṃ', breakdown: 'paññ + aṃ', meaning: '지혜를 (목적격)', highlight: 'aṃ' },
      { pali: 'paññāya', breakdown: 'paññ + āya', meaning: '지혜에 의해/~에게/~의 (구·여·탈·속)', highlight: 'āya' },
      { pali: 'paññe', breakdown: 'paññ + e', meaning: '지혜여 (호격)', highlight: 'e' },
    ],
    table: {
      label: 'ā-어간 여성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-ā', example: 'paññā', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-aṃ', example: 'paññaṃ', meaning: '~을/를' },
        { case: '조격 (ins.)', ending: '-āya', example: 'paññāya', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-āya', example: 'paññāya', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-āya', example: 'paññāya', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-āya', example: 'paññāya', meaning: '~의' },
        { case: '처격 (loc.)', ending: '-āya/-āyaṃ', example: 'paññāyaṃ', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '-e', example: 'paññe', meaning: '~이여' },
      ],
    },
    tip: '여성 단수 조격~소유격이 모두 -āya — 외우기 쉽다!',
    relatedLesson: 'Primer Lesson 5',
  },

  {
    type: 'teach-grammar',
    title: 'ā-어간 여성 명사: 복수 격변화',
    description: '복수 주격/목적격은 -ā 또는 -āyo 두 형태 모두 사용.',
    examples: [
      { pali: 'paññā', breakdown: 'paññ + ā', meaning: '지혜들이 (주격)', highlight: 'ā' },
      { pali: 'paññāyo', breakdown: 'paññ + āyo', meaning: '지혜들이 (주격 대안)', highlight: 'āyo' },
      { pali: 'paññāhi', breakdown: 'paññ + āhi', meaning: '지혜들에 의해 (조격)', highlight: 'āhi' },
      { pali: 'paññānaṃ', breakdown: 'paññ + ānaṃ', meaning: '지혜들의 (소유격)', highlight: 'ānaṃ' },
    ],
    table: {
      label: 'ā-어간 여성 명사 복수',
      rows: [
        { case: '주격 (nom.)', ending: '-ā/-āyo', example: 'paññā', meaning: '~들이' },
        { case: '목적격 (acc.)', ending: '-ā/-āyo', example: 'paññāyo', meaning: '~들을' },
        { case: '조격 (ins.)', ending: '-āhi', example: 'paññāhi', meaning: '~들에 의해' },
        { case: '여격 (dat.)', ending: '-ānaṃ', example: 'paññānaṃ', meaning: '~들에게' },
        { case: '탈격 (abl.)', ending: '-āhi', example: 'paññāhi', meaning: '~들로부터' },
        { case: '소유격 (gen.)', ending: '-ānaṃ', example: 'paññānaṃ', meaning: '~들의' },
        { case: '처격 (loc.)', ending: '-āsu', example: 'paññāsu', meaning: '~들에서' },
        { case: '호격 (voc.)', ending: '= 주격', example: 'paññā', meaning: '~들이여' },
      ],
    },
    tip: '여성 복수 조격/탈격 -āhi, 처격 -āsu — 남성 -ehi/-esu와 비교!',
    relatedLesson: 'Primer Lesson 5',
  },

  // ═══════════════════════════════════════
  // Lesson 6: 형용사
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: '형용사 — 명사와 같은 격변화',
    description:
      '형용사는 수식하는 명사의 성·수·격에 일치시킨다. 별도 변화표가 없다!',
    examples: [
      { pali: 'mahanto buddho', breakdown: 'mahant + o buddha + o', meaning: '위대한 붓다가 (남성 주격 단수)', highlight: 'o' },
      { pali: 'mahantaṃ buddhaṃ', breakdown: 'mahant + aṃ buddha + aṃ', meaning: '위대한 붓다를 (남성 목적격 단수)', highlight: 'aṃ' },
      { pali: 'mahantī paññā', breakdown: 'mahant + ī paññ + ā', meaning: '위대한 지혜가 (여성 주격 단수)', highlight: 'ī' },
      { pali: 'mahantaṃ dukkhaṃ', breakdown: 'mahant + aṃ dukkha + aṃ', meaning: '큰 괴로움이 (중성 주격 단수)', highlight: 'aṃ' },
    ],
    tip: '형용사는 따로 외울 필요 없이 명사 격변화를 따른다',
    relatedLesson: 'Primer Lesson 6',
  },

  // ═══════════════════════════════════════
  // Lesson 7: 과거형 (Aorist)
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: '과거형(Aorist): 기본 활용',
    description:
      '과거를 나타내는 동사 형태. 접두사 a- + 어근 + 과거 어미.',
    examples: [
      { pali: 'apaci', breakdown: 'a + pac + i', meaning: '(그가) 요리했다', highlight: 'a...i' },
      { pali: 'apacuṃ', breakdown: 'a + pac + uṃ', meaning: '(그들이) 요리했다', highlight: 'uṃ' },
      { pali: 'apaciṃ', breakdown: 'a + pac + iṃ', meaning: '(내가) 요리했다', highlight: 'iṃ' },
    ],
    table: {
      label: '과거형(Aorist) 활용 (pac- 요리하다)',
      rows: [
        { case: '3인칭 단수', ending: '-i', example: 'apaci', meaning: '(그가) 요리했다' },
        { case: '3인칭 복수', ending: '-uṃ/-iṃsu', example: 'apacuṃ', meaning: '(그들이) 요리했다' },
        { case: '2인칭 단수', ending: '-o/-i', example: 'apaco', meaning: '(네가) 요리했다' },
        { case: '2인칭 복수', ending: '-ittha', example: 'apacittha', meaning: '(너희가) 요리했다' },
        { case: '1인칭 단수', ending: '-iṃ', example: 'apaciṃ', meaning: '(내가) 요리했다' },
        { case: '1인칭 복수', ending: '-imhā', example: 'apacimhā', meaning: '(우리가) 요리했다' },
      ],
    },
    tip: '경전에서 3인칭 -i와 -uṃ이 가장 많이 보인다',
    relatedLesson: 'Primer Lesson 7',
  },

  {
    type: 'teach-grammar',
    title: '불규칙 과거형',
    description:
      '자주 나오는 동사일수록 불규칙. 경전에서 반복되므로 자연스럽게 익히자.',
    examples: [
      { pali: 'ahosi', breakdown: 'a + hos + i (← hoti)', meaning: '(그가) 되었다', highlight: 'ahosi' },
      { pali: 'agamāsi', breakdown: 'a + gamās + i (← gacchati)', meaning: '(그가) 갔다', highlight: 'agamāsi' },
      { pali: 'addasā', breakdown: 'a + ddas + ā (← passati)', meaning: '(그가) 보았다', highlight: 'addasā' },
      { pali: 'avoca', breakdown: 'a + voc + a (← vadati)', meaning: '(그가) 말했다', highlight: 'avoca' },
    ],
    table: {
      label: '불규칙 과거형 (자주 나오는 것)',
      rows: [
        { case: '되다 (hoti)', ending: 'ahosi', example: 'ahosi kho so samayo', meaning: '그 때가 되었다' },
        { case: '가다 (gacchati)', ending: 'agamāsi', example: 'agamāsi bhagavā', meaning: '세존이 가셨다' },
        { case: '보다 (passati)', ending: 'addasā', example: 'addasā bhagavantaṃ', meaning: '세존을 보았다' },
        { case: '말하다 (vadati)', ending: 'avoca', example: 'bhagavā avoca', meaning: '세존이 말씀하셨다' },
      ],
    },
    tip: '경전에서 자주 나오는 불규칙 과거형은 따로 외워야 합니다',
    relatedLesson: 'Primer Lesson 7',
  },

  // ═══════════════════════════════════════
  // Lesson 8-9: i-어간 명사
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: 'i-어간 남성/중성 명사',
    description:
      '-i로 끝나는 명사. 남성과 중성은 a-어간처럼 주격/목적격만 다르다.',
    examples: [
      { pali: 'aggi', breakdown: 'aggi (어간)', meaning: '불이 (남성 주격)', highlight: 'i' },
      { pali: 'aggiṃ', breakdown: 'agg + iṃ', meaning: '불을 (목적격)', highlight: 'iṃ' },
      { pali: 'agginā', breakdown: 'agg + inā', meaning: '불에 의해 (조격)', highlight: 'inā' },
      { pali: 'muni', breakdown: 'muni (어간)', meaning: '성자가 (남성 주격)', highlight: 'i' },
    ],
    table: {
      label: 'i-어간 남성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-i', example: 'aggi', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-iṃ', example: 'aggiṃ', meaning: '~을/를' },
        { case: '조격 (ins.)', ending: '-inā', example: 'agginā', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-ino/-issa', example: 'aggissa', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-inā/-imhā/-ismā', example: 'agginā', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-ino/-issa', example: 'aggino', meaning: '~의' },
        { case: '처격 (loc.)', ending: '-imhi/-ismiṃ', example: 'aggimhi', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '-i', example: 'aggi', meaning: '~이여' },
      ],
    },
    tip: 'i-어간은 조격 -inā, 소유격 -ino/-issa — a-어간의 -ena, -ssa와 비교!',
    relatedLesson: 'Primer Lesson 8',
  },

  {
    type: 'teach-grammar',
    title: 'i-어간 여성 명사',
    description:
      '-i로 끝나는 여성 명사. 조격~소유격이 대부분 -iyā로 동일.',
    examples: [
      { pali: 'bhūmi', breakdown: 'bhūmi (어간)', meaning: '땅이 (주격)', highlight: 'i' },
      { pali: 'bhūmiṃ', breakdown: 'bhūm + iṃ', meaning: '땅을 (목적격)', highlight: 'iṃ' },
      { pali: 'bhūmiyā', breakdown: 'bhūm + iyā', meaning: '땅에 의해/~의 (구·여·탈·속)', highlight: 'iyā' },
      { pali: 'ratti', breakdown: 'ratti (어간)', meaning: '밤이 (주격)', highlight: 'i' },
    ],
    table: {
      label: 'i-어간 여성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-i', example: 'bhūmi', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-iṃ', example: 'bhūmiṃ', meaning: '~을/를' },
        { case: '조격 (ins.)', ending: '-iyā', example: 'bhūmiyā', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-iyā', example: 'bhūmiyā', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-iyā', example: 'bhūmiyā', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-iyā', example: 'bhūmiyā', meaning: '~의' },
        { case: '처격 (loc.)', ending: '-iyā/-iyaṃ', example: 'bhūmiyaṃ', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '-i', example: 'bhūmi', meaning: '~이여' },
      ],
    },
    tip: '여성 i-어간 조격~소유격 -iyā = ā-어간의 -āya와 같은 패턴!',
    relatedLesson: 'Primer Lesson 9',
  },

  // ═══════════════════════════════════════
  // Lesson 10: u-어간 명사
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: 'u-어간 남성 명사',
    description:
      '-u로 끝나는 남성 명사. i-어간과 패턴이 비슷하다.',
    examples: [
      { pali: 'bhikkhu', breakdown: 'bhikkhu (어간)', meaning: '비구가 (주격)', highlight: 'u' },
      { pali: 'bhikkhuṃ', breakdown: 'bhikkh + uṃ', meaning: '비구를 (목적격)', highlight: 'uṃ' },
      { pali: 'bhikkhunā', breakdown: 'bhikkh + unā', meaning: '비구에 의해 (조격)', highlight: 'unā' },
      { pali: 'bhikkhussa', breakdown: 'bhikkh + ussa', meaning: '비구의 (소유격)', highlight: 'ussa' },
    ],
    table: {
      label: 'u-어간 남성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-u', example: 'bhikkhu', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-uṃ', example: 'bhikkhuṃ', meaning: '~을/를' },
        { case: '조격 (ins.)', ending: '-unā', example: 'bhikkhunā', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-uno/-ussa', example: 'bhikkhussa', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-unā/-umhā/-usmā', example: 'bhikkhunā', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-uno/-ussa', example: 'bhikkhuno', meaning: '~의' },
        { case: '처격 (loc.)', ending: '-umhi/-usmiṃ', example: 'bhikkhumhi', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '-u', example: 'bhikkhu', meaning: '~이여' },
      ],
    },
    tip: 'u-어간은 i-어간의 i를 u로 바꾸면 거의 같다: -inā→-unā, -issa→-ussa',
    relatedLesson: 'Primer Lesson 10',
  },

  {
    type: 'teach-grammar',
    title: 'u-어간 여성 명사',
    description:
      '-u로 끝나는 여성 명사. i-어간 여성과 같은 패턴 (-iyā → -uyā).',
    examples: [
      { pali: 'dhātu', breakdown: 'dhātu (어간)', meaning: '요소가 (주격)', highlight: 'u' },
      { pali: 'dhātuṃ', breakdown: 'dhāt + uṃ', meaning: '요소를 (목적격)', highlight: 'uṃ' },
      { pali: 'dhātuyā', breakdown: 'dhāt + uyā', meaning: '요소에 의해/~의 (구·여·탈·속)', highlight: 'uyā' },
      { pali: 'jambū', breakdown: 'jambū (어간)', meaning: '잠부나무가 (주격)', highlight: 'ū' },
    ],
    table: {
      label: 'u-어간 여성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-u', example: 'dhātu', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-uṃ', example: 'dhātuṃ', meaning: '~을/를' },
        { case: '조격 (ins.)', ending: '-uyā', example: 'dhātuyā', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-uyā', example: 'dhātuyā', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-uyā', example: 'dhātuyā', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-uyā', example: 'dhātuyā', meaning: '~의' },
        { case: '처격 (loc.)', ending: '-uyā/-uyaṃ', example: 'dhātuyaṃ', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '-u', example: 'dhātu', meaning: '~이여' },
      ],
    },
    tip: '여성 u-어간 조격~소유격 -uyā = i-어간의 -iyā, ā-어간의 -āya와 같은 패턴!',
    relatedLesson: 'Primer Lesson 10',
  },
]
