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
      { pali: 'Gāravo ca nivāto ca', breakdown: 'gārava + o / nivāta + o', meaning: '존경과 겸손이 (주격) — 행복경 8게송', highlight: 'o' },
      { pali: 'Anāthapiṇḍikassa ārāme', breakdown: 'Anāthapiṇḍika + ssa / ārāma + e', meaning: '아나타삔디까의 동산에서 (소유격+처소격) — 행복경 서문', highlight: 'ssa' },
      { pali: 'Jetavane viharati', breakdown: 'Jetavana + e / vi + harati', meaning: '제따와나에서 머무시다 (처소격) — 행복경 서문', highlight: 'e' },
      { pali: 'vinayo ca susikkhito', breakdown: 'vinaya + o / su + sikkhita + o', meaning: '잘 배운 계율이 (주격) — 행복경 4게송', highlight: 'o' },
    ],
    table: {
      label: 'a-어간 남성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-o', example: 'gāravo (행복경)', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-aṃ', example: 'samayaṃ (행복경)', meaning: '~을/를' },
        { case: '구격 (ins.)', ending: '-ena', example: 'kālena (행복경)', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-āya/-ssa', example: 'buddhāya', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-ā/-mhā/-smā', example: 'pāpā (행복경)', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-ssa', example: 'Anāthapiṇḍikassa (행복경)', meaning: '~의' },
        { case: '처소격 (loc.)', ending: '-e/-mhi/-smiṃ', example: 'Jetavane (행복경)', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '= 어간', example: 'buddha', meaning: '~이여' },
      ],
    },
    tip: '-o로 끝나면 남성 주격 단수. 행복경 서문에서 gāravo, vinayo 등 다수 등장',
    relatedLesson: 'Primer Lesson 2',
  },

  {
    type: 'teach-grammar',
    title: 'a-어간 남성 명사: 복수 격변화',
    description: '복수형도 규칙적. 주격 -ā, 목적격 -e 를 먼저 익히세요.',
    examples: [
      { pali: 'Bahū devā manussā ca', breakdown: 'deva + ā / manussa + ā', meaning: '많은 천신들과 인간들이 (주격 복수) — 행복경 1게송', highlight: 'ā' },
      { pali: 'bālānaṃ', breakdown: 'bāla + ānaṃ', meaning: '어리석은 이들의 (소유격 복수) — 행복경 2게송', highlight: 'ānaṃ' },
      { pali: 'dhammesu', breakdown: 'dhamma + esu', meaning: '법들에 대해 (처소격 복수) — 행복경 7게송', highlight: 'esu' },
      { pali: 'kammantā', breakdown: 'kammanta + ā', meaning: '생업들이 (주격 복수) — 행복경 5게송', highlight: 'ā' },
    ],
    table: {
      label: 'a-어간 남성 명사 복수',
      rows: [
        { case: '주격 (nom.)', ending: '-ā', example: 'devā (행복경)', meaning: '~들이' },
        { case: '목적격 (acc.)', ending: '-e', example: 'ante (전법륜경)', meaning: '~들을' },
        { case: '구격 (ins.)', ending: '-ehi/-ebhi', example: 'piyehi (전법륜경)', meaning: '~들에 의해' },
        { case: '여격 (dat.)', ending: '-ānaṃ', example: 'bālānaṃ (행복경)', meaning: '~들에게' },
        { case: '탈격 (abl.)', ending: '-ehi/-ebhi', example: 'appiyehi (전법륜경)', meaning: '~들로부터' },
        { case: '소유격 (gen.)', ending: '-ānaṃ', example: 'pūjanīyānaṃ (행복경)', meaning: '~들의' },
        { case: '처소격 (loc.)', ending: '-esu', example: 'dhammesu (행복경)', meaning: '~들에서' },
        { case: '호격 (voc.)', ending: '= 주격', example: 'bhikkhave (전법륜경)', meaning: '~들이여' },
      ],
    },
    tip: '복수 여격과 소유격은 둘 다 -ānaṃ (같은 형태). 행복경에서 devā, bālānaṃ 등 자주 등장',
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
      { pali: 'viharati', breakdown: 'vi + har + a + ti', meaning: '(세존께서) 머무시다 — 행복경 서문', highlight: 'ti' },
      { pali: 'haranti ye baliṃ', breakdown: 'har + a + nti', meaning: '(그들이) 공양을 바친다 — 보배경 2게송', highlight: 'nti' },
      { pali: 'saṃvattati', breakdown: 'saṃ + vatt + a + ti', meaning: '(중도가) 이끈다 — 전법륜경', highlight: 'ti' },
      { pali: 'na kampati', breakdown: 'kamp + a + ti', meaning: '흔들리지 않는다 — 행복경 11게송', highlight: 'ti' },
    ],
    table: {
      label: '동사 현재형 활용 (경전 실례)',
      rows: [
        { case: '3인칭 단수', ending: '-ti', example: 'viharati (행복경)', meaning: '(그가) 머무신다' },
        { case: '3인칭 복수', ending: '-nti', example: 'haranti (보배경)', meaning: '(그들이) 바친다' },
        { case: '2인칭 단수', ending: '-si', example: 'pacasi', meaning: '(네가) 요리한다' },
        { case: '2인칭 복수', ending: '-tha', example: 'rakkhatha (보배경)', meaning: '(너희가) 보호하라' },
        { case: '1인칭 단수', ending: '-mi', example: 'pacāmi', meaning: '(내가) 요리한다' },
        { case: '1인칭 복수', ending: '-ma', example: 'pacāma', meaning: '(우리가) 요리한다' },
      ],
    },
    tip: '경전에서 가장 많이 보이는 것은 3인칭 -ti/-nti. viharati(머무시다)는 거의 모든 경전 서문에 등장',
    relatedLesson: 'Primer Lesson 3',
  },

  {
    type: 'teach-grammar',
    title: '자주 나오는 동사 10선',
    description: '경전에서 반복적으로 등장하는 핵심 동사들.',
    examples: [
      { pali: 'viharati', breakdown: 'vi + har + a + ti', meaning: '머무시다 — 행복경·전법륜경 서문', highlight: 'viharati' },
      { pali: 'suṇantu bhāsitaṃ', breakdown: 'su + ṇā + ntu', meaning: '말씀을 들으시라 — 보배경 1게송', highlight: 'suṇā' },
      { pali: 'mettaṃ karotha', breakdown: 'kar + o + tha', meaning: '자비를 행하라 — 보배경 2게송', highlight: 'karo' },
      { pali: 'na kampati', breakdown: 'kamp + a + ti', meaning: '흔들리지 않는다 — 행복경 11게송', highlight: 'kampati' },
    ],
    table: {
      label: '핵심 동사 10선 (경전 출처 포함)',
      rows: [
        { case: '머무르다', ending: 'viharati', example: '행복경·전법륜경 서문', meaning: '머무르다' },
        { case: '가다', ending: 'gacchati', example: 'gam', meaning: '가다' },
        { case: '보다', ending: 'passati', example: 'dis/pas', meaning: '보다' },
        { case: '듣다', ending: 'suṇāti', example: '보배경 1게송', meaning: '듣다' },
        { case: '말하다', ending: 'vadati', example: 'vad', meaning: '말하다' },
        { case: '하다', ending: 'karoti', example: '보배경 2게송', meaning: '하다' },
        { case: '주다', ending: 'dadāti', example: 'dā', meaning: '주다' },
        { case: '알다', ending: 'jānāti', example: 'ñā', meaning: '알다' },
        { case: '얻다', ending: 'labhati', example: '전법륜경 고성제', meaning: '얻다' },
        { case: '있다', ending: 'atthi', example: '보배경 3게송', meaning: '있다/존재하다' },
      ],
    },
    tip: 'viharati(머무시다)는 거의 모든 경전 서두에 등장. atthi(있다)도 매우 빈번',
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
      { pali: 'dukkhaṃ ariyasaccaṃ', breakdown: 'dukkha + aṃ / ariyasacca + aṃ', meaning: '괴로움의 성스러운 진리가 (주격) — 전법륜경', highlight: 'aṃ' },
      { pali: 'dhammasavanaṃ', breakdown: 'dhamma + savana + aṃ', meaning: '법을 들음이 (주격) — 행복경 8게송', highlight: 'aṃ' },
      { pali: 'dānañca', breakdown: 'dāna + aṃ + ca', meaning: '보시가 (주격+그리고) — 행복경 6게송', highlight: 'aṃ' },
      { pali: 'etaṃ maṅgalamuttamaṃ', breakdown: 'eta + aṃ / maṅgala + uttama + aṃ', meaning: '이것이 최상의 행복이니라 (주격) — 행복경 반복구', highlight: 'aṃ' },
    ],
    table: {
      label: 'a-어간 중성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-aṃ', example: 'dukkhaṃ (전법륜경)', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-aṃ', example: 'mettaṃ (보배경)', meaning: '~을/를' },
        { case: '구격 (ins.)', ending: '-ena', example: 'kālena (행복경)', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-āya/-ssa', example: 'cittassa', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-ā/-mhā/-smā', example: 'pāpā (행복경)', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-ssa', example: 'cittassa', meaning: '~의' },
        { case: '처소격 (loc.)', ending: '-e/-mhi/-smiṃ', example: 'antalikkhe (보배경)', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '-aṃ / 어간', example: 'cittaṃ', meaning: '~이여' },
      ],
    },
    tip: '중성은 주격 = 목적격이 항상 같다! 전법륜경 "dukkhaṃ ariyasaccaṃ"이 대표 예',
    relatedLesson: 'Primer Lesson 4',
  },

  {
    type: 'teach-grammar',
    title: 'a-어간 중성 명사: 복수 격변화',
    description: '복수에서도 주격 = 목적격. 어미 -āni로 끝남. 나머지는 남성 복수와 동일.',
    examples: [
      { pali: 'maṅgalāni acintayuṃ', breakdown: 'maṅgala + āni', meaning: '행복들을 생각했다 (목적격 복수) — 행복경 1게송', highlight: 'āni' },
      { pali: 'anavajjāni kammāni', breakdown: 'kamma + āni', meaning: '허물없는 행위들이 (주격 복수) — 행복경 6게송', highlight: 'āni' },
      { pali: 'bhūtāni samāgatāni', breakdown: 'bhūta + āni', meaning: '모인 존재들이 (주격 복수) — 보배경 1게송', highlight: 'āni' },
    ],
    table: {
      label: 'a-어간 중성 명사 복수',
      rows: [
        { case: '주격 (nom.)', ending: '-āni', example: 'kammāni (행복경)', meaning: '~들이' },
        { case: '목적격 (acc.)', ending: '-āni', example: 'maṅgalāni (행복경)', meaning: '~들을' },
        { case: '구격 (ins.)', ending: '-ehi/-ebhi', example: 'lokadhammehi (행복경)', meaning: '~들에 의해' },
        { case: '여격 (dat.)', ending: '-ānaṃ', example: 'cittānaṃ', meaning: '~들에게' },
        { case: '탈격 (abl.)', ending: '-ehi/-ebhi', example: 'cittehi', meaning: '~들로부터' },
        { case: '소유격 (gen.)', ending: '-ānaṃ', example: 'ariyasaccāna (행복경)', meaning: '~들의' },
        { case: '처소격 (loc.)', ending: '-esu', example: 'saggesu (보배경)', meaning: '~들에서' },
        { case: '호격 (voc.)', ending: '-āni', example: 'bhūtāni (보배경)', meaning: '~들이여' },
      ],
    },
    tip: '복수 주격/목적격/호격 -āni. 행복경 "maṅgalāni", "kammāni"가 대표 예',
    relatedLesson: 'Primer Lesson 4',
  },

  // ═══════════════════════════════════════
  // Lesson 5: ā-어간 여성 명사
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: 'ā-어간 여성 명사: 단수 격변화',
    description:
      '-ā로 끝나는 여성 명사. 구격~처소격이 대부분 -āya로 동일한 것이 특징.',
    examples: [
      { pali: 'sevanā', breakdown: 'sevan + ā', meaning: '가까이함이 (주격) — 행복경 2게송', highlight: 'ā' },
      { pali: 'pūjā ca pūjanīyānaṃ', breakdown: 'pūj + ā', meaning: '공양받을 분들의 공양이 (주격) — 행복경 2게송', highlight: 'ā' },
      { pali: 'paññā udapādi', breakdown: 'paññ + ā', meaning: '지혜가 생겨났다 (주격) — 전법륜경', highlight: 'ā' },
      { pali: 'taṇhāya', breakdown: 'taṇh + āya', meaning: '갈애의 (소유격) — 전법륜경 멸성제', highlight: 'āya' },
    ],
    table: {
      label: 'ā-어간 여성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-ā', example: 'sevanā (행복경)', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-aṃ', example: 'paññaṃ', meaning: '~을/를' },
        { case: '구격 (ins.)', ending: '-āya', example: 'paññāya', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-āya', example: 'pajāya (보배경)', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-āya', example: 'taṇhāya (전법륜경)', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-āya', example: 'taṇhāya (전법륜경)', meaning: '~의' },
        { case: '처소격 (loc.)', ending: '-āya/-āyaṃ', example: 'paññāyaṃ', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '-e', example: 'paññe', meaning: '~이여' },
      ],
    },
    tip: '여성 단수 구격~소유격이 모두 -āya. 행복경 "sevanā, pūjā", 전법륜경 "taṇhāya, paññā"가 대표',
    relatedLesson: 'Primer Lesson 5',
  },

  {
    type: 'teach-grammar',
    title: 'ā-어간 여성 명사: 복수 격변화',
    description: '복수 주격/목적격은 -ā 또는 -āyo 두 형태 모두 사용.',
    examples: [
      { pali: 'kāmataṇhā bhavataṇhā vibhavataṇhā', breakdown: 'taṇh + ā (3회)', meaning: '감각적 갈애, 존재의 갈애, 비존재의 갈애 (주격) — 전법륜경', highlight: 'ā' },
      { pali: 'vācā', breakdown: 'vāc + ā', meaning: '말이 (주격) — 행복경 4게송 "subhāsitā ca yā vācā"', highlight: 'ā' },
      { pali: 'paññāhi', breakdown: 'paññ + āhi', meaning: '지혜들에 의해 (구격)', highlight: 'āhi' },
      { pali: 'paññānaṃ', breakdown: 'paññ + ānaṃ', meaning: '지혜들의 (소유격)', highlight: 'ānaṃ' },
    ],
    table: {
      label: 'ā-어간 여성 명사 복수',
      rows: [
        { case: '주격 (nom.)', ending: '-ā/-āyo', example: 'taṇhā (전법륜경)', meaning: '~들이' },
        { case: '목적격 (acc.)', ending: '-ā/-āyo', example: 'paññāyo', meaning: '~들을' },
        { case: '구격 (ins.)', ending: '-āhi', example: 'paññāhi', meaning: '~들에 의해' },
        { case: '여격 (dat.)', ending: '-ānaṃ', example: 'paññānaṃ', meaning: '~들에게' },
        { case: '탈격 (abl.)', ending: '-āhi', example: 'paññāhi', meaning: '~들로부터' },
        { case: '소유격 (gen.)', ending: '-ānaṃ', example: 'paññānaṃ', meaning: '~들의' },
        { case: '처소격 (loc.)', ending: '-āsu', example: 'paññāsu', meaning: '~들에서' },
        { case: '호격 (voc.)', ending: '= 주격', example: 'paññā', meaning: '~들이여' },
      ],
    },
    tip: '여성 복수 구격/탈격 -āhi, 처소격 -āsu. 전법륜경 세 갈애(taṇhā)가 대표 예',
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
      { pali: 'Bahū devā', breakdown: 'bahu + ū deva + ā', meaning: '많은 천신들이 (남성 복수 주격) — 행복경 1게송', highlight: 'ū' },
      { pali: 'anākulā ca kammantā', breakdown: 'a + ākula + ā / kammanta + ā', meaning: '혼란 없는 생업들이 (남성 복수 주격) — 행복경 5게송', highlight: 'ā' },
      { pali: 'ariyo aṭṭhaṅgiko maggo', breakdown: 'ariya + o / aṭṭhaṅgika + o / magga + o', meaning: '성스러운 팔정도가 (남성 주격 단수) — 전법륜경', highlight: 'o' },
      { pali: 'hīno gammo pothujjaniko', breakdown: 'hīna + o / gamma + o / pothujjanika + o', meaning: '저열하고 세속적이고 범부의 — 전법륜경', highlight: 'o' },
    ],
    tip: '형용사는 명사 격변화를 따른다. 행복경 "Bahū devā", 전법륜경 "ariyo maggo"가 대표 예',
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
      { pali: 'acintayuṃ', breakdown: 'a + cintay + uṃ (← cinteti)', meaning: '(그들이) 생각했다 — 행복경 1게송', highlight: 'uṃ' },
      { pali: 'udapādi', breakdown: 'ud + ā + pād + i', meaning: '(눈이) 생겨났다 — 전법륜경', highlight: 'i' },
      { pali: 'āmantesi', breakdown: 'ā + mantes + i (← manteti)', meaning: '(세존께서) 말씀하셨다 — 전법륜경 서문', highlight: 'i' },
    ],
    table: {
      label: '과거형(Aorist) 활용 (경전 실례)',
      rows: [
        { case: '3인칭 단수', ending: '-i', example: 'udapādi (전법륜경)', meaning: '(눈이) 생겨났다' },
        { case: '3인칭 복수', ending: '-uṃ/-iṃsu', example: 'acintayuṃ (행복경)', meaning: '(그들이) 생각했다' },
        { case: '2인칭 단수', ending: '-o/-i', example: 'apaco', meaning: '(네가) 요리했다' },
        { case: '2인칭 복수', ending: '-ittha', example: 'apacittha', meaning: '(너희가) 요리했다' },
        { case: '1인칭 단수', ending: '-iṃ', example: 'apaciṃ', meaning: '(내가) 요리했다' },
        { case: '1인칭 복수', ending: '-imhā', example: 'apacimhā', meaning: '(우리가) 요리했다' },
      ],
    },
    tip: '경전에서 3인칭 -i와 -uṃ이 가장 많이 보인다. 전법륜경 "udapādi"는 15회 반복!',
    relatedLesson: 'Primer Lesson 7',
  },

  {
    type: 'teach-grammar',
    title: '불규칙 과거형',
    description:
      '자주 나오는 동사일수록 불규칙. 경전에서 반복되므로 자연스럽게 익히자.',
    examples: [
      { pali: 'udapādi', breakdown: 'ud + ā + pād + i (← uppajjati)', meaning: '(눈/지혜가) 생겨났다 — 전법륜경', highlight: 'udapādi' },
      { pali: 'acintayuṃ', breakdown: 'a + cintay + uṃ (← cinteti)', meaning: '(천신들이) 생각했다 — 행복경 1게송', highlight: 'acintayuṃ' },
      { pali: 'āmantesi', breakdown: 'ā + mantes + i (← manteti)', meaning: '(세존께서) 말씀하셨다 — 전법륜경 서문', highlight: 'āmantesi' },
      { pali: 'abhisambuddha', breakdown: 'abhi + saṃ + budh + ta', meaning: '완전히 깨달은 (과거분사) — 전법륜경', highlight: 'buddh' },
    ],
    table: {
      label: '불규칙 과거형 (경전 실례)',
      rows: [
        { case: '생기다 (uppajjati)', ending: 'udapādi', example: 'cakkhuṃ udapādi (전법륜경)', meaning: '눈이 생겨났다' },
        { case: '생각하다 (cinteti)', ending: 'acintayuṃ', example: 'maṅgalāni acintayuṃ (행복경)', meaning: '행복을 생각했다' },
        { case: '말하다 (manteti)', ending: 'āmantesi', example: 'bhikkhū āmantesi (전법륜경)', meaning: '비구들에게 말씀하셨다' },
        { case: '말하다 (vadati)', ending: 'avoca', example: 'bhagavā avoca', meaning: '세존이 말씀하셨다' },
      ],
    },
    tip: '전법륜경 "udapādi"(생겨났다)는 삼전십이행상에서 15회 반복되므로 자연히 익힌다',
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
      { pali: 'mutti', breakdown: 'mutti (어간)', meaning: '해탈이 (여성 주격) — 전법륜경 멸성제', highlight: 'i' },
      { pali: 'aggi', breakdown: 'aggi (어간)', meaning: '불이 (남성 주격)', highlight: 'i' },
      { pali: 'aggiṃ', breakdown: 'agg + iṃ', meaning: '불을 (목적격)', highlight: 'iṃ' },
      { pali: 'muni', breakdown: 'muni (어간)', meaning: '성자가 (남성 주격)', highlight: 'i' },
    ],
    table: {
      label: 'i-어간 남성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-i', example: 'aggi', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-iṃ', example: 'aggiṃ', meaning: '~을/를' },
        { case: '구격 (ins.)', ending: '-inā', example: 'agginā', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-ino/-issa', example: 'aggissa', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-inā/-imhā/-ismā', example: 'agginā', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-ino/-issa', example: 'aggino', meaning: '~의' },
        { case: '처소격 (loc.)', ending: '-imhi/-ismiṃ', example: 'aggimhi', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '-i', example: 'aggi', meaning: '~이여' },
      ],
    },
    tip: 'i-어간은 구격 -inā, 소유격 -ino/-issa — a-어간의 -ena, -ssa와 비교!',
    relatedLesson: 'Primer Lesson 8',
  },

  {
    type: 'teach-grammar',
    title: 'i-어간 여성 명사',
    description:
      '-i로 끝나는 여성 명사. 구격~소유격이 대부분 -iyā로 동일.',
    examples: [
      { pali: 'sammādiṭṭhi', breakdown: 'sammā + diṭṭhi (어간)', meaning: '바른 견해가 (주격) — 전법륜경 팔정도', highlight: 'i' },
      { pali: 'sammāsati', breakdown: 'sammā + sati (어간)', meaning: '바른 새김이 (주격) — 전법륜경 팔정도', highlight: 'i' },
      { pali: 'bhūmiyā', breakdown: 'bhūm + iyā', meaning: '땅에 의해/~의 (구·여·탈·속)', highlight: 'iyā' },
      { pali: 'ratti', breakdown: 'ratti (어간)', meaning: '밤이 (주격)', highlight: 'i' },
    ],
    table: {
      label: 'i-어간 여성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-i', example: 'bhūmi', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-iṃ', example: 'bhūmiṃ', meaning: '~을/를' },
        { case: '구격 (ins.)', ending: '-iyā', example: 'bhūmiyā', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-iyā', example: 'bhūmiyā', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-iyā', example: 'bhūmiyā', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-iyā', example: 'bhūmiyā', meaning: '~의' },
        { case: '처소격 (loc.)', ending: '-iyā/-iyaṃ', example: 'bhūmiyaṃ', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '-i', example: 'bhūmi', meaning: '~이여' },
      ],
    },
    tip: '여성 i-어간 구격~소유격 -iyā = ā-어간의 -āya와 같은 패턴!',
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
      { pali: 'bhikkhu', breakdown: 'bhikkhu (어간)', meaning: '비구가 (주격) — 전법륜경에 자주 등장', highlight: 'u' },
      { pali: 'bhikkhū āmantesi', breakdown: 'bhikkh + ū (복수 목적격)', meaning: '비구들에게 말씀하셨다 — 전법륜경 서문', highlight: 'ū' },
      { pali: 'bhikkhunā', breakdown: 'bhikkh + unā', meaning: '비구에 의해 (구격)', highlight: 'unā' },
      { pali: 'bhikkhussa', breakdown: 'bhikkh + ussa', meaning: '비구의 (소유격)', highlight: 'ussa' },
    ],
    table: {
      label: 'u-어간 남성 명사 단수',
      rows: [
        { case: '주격 (nom.)', ending: '-u', example: 'bhikkhu', meaning: '~이/가' },
        { case: '목적격 (acc.)', ending: '-uṃ', example: 'bhikkhuṃ', meaning: '~을/를' },
        { case: '구격 (ins.)', ending: '-unā', example: 'bhikkhunā', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-uno/-ussa', example: 'bhikkhussa', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-unā/-umhā/-usmā', example: 'bhikkhunā', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-uno/-ussa', example: 'bhikkhuno', meaning: '~의' },
        { case: '처소격 (loc.)', ending: '-umhi/-usmiṃ', example: 'bhikkhumhi', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '-u', example: 'bhikkhu', meaning: '~이여' },
      ],
    },
    tip: 'u-어간은 i-어간의 i를 u로 바꾸면 거의 같다: -inā→-unā, -issa→-ussa. 전법륜경 "bhikkhū"(비구들)이 대표',
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
        { case: '구격 (ins.)', ending: '-uyā', example: 'dhātuyā', meaning: '~에 의해' },
        { case: '여격 (dat.)', ending: '-uyā', example: 'dhātuyā', meaning: '~에게' },
        { case: '탈격 (abl.)', ending: '-uyā', example: 'dhātuyā', meaning: '~로부터' },
        { case: '소유격 (gen.)', ending: '-uyā', example: 'dhātuyā', meaning: '~의' },
        { case: '처소격 (loc.)', ending: '-uyā/-uyaṃ', example: 'dhātuyaṃ', meaning: '~에서' },
        { case: '호격 (voc.)', ending: '-u', example: 'dhātu', meaning: '~이여' },
      ],
    },
    tip: '여성 u-어간 구격~소유격 -uyā = i-어간의 -iyā, ā-어간의 -āya와 같은 패턴!',
    relatedLesson: 'Primer Lesson 10',
  },
]
