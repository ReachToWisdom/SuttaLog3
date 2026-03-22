import type { TeachGrammarStep } from './types'

// De Silva Pali Primer Lesson 11~22 문법 스텝
export const PRIMER_GRAMMAR_2: TeachGrammarStep[] = [
  // ── Lesson 11-12: 대명사 ──

  // 스텝1: 인칭 대명사
  {
    type: 'teach-grammar',
    title: '인칭 대명사: 나/너',
    description:
      '빠알리어의 1인칭(나)과 2인칭(너) 대명사입니다. ' +
      '격에 따라 형태가 크게 변하므로 자주 접하며 익혀야 합니다.',
    table: {
      label: '인칭 대명사 격변화',
      rows: [
        { case: '1인칭 주격 단', ending: 'ahaṃ', example: 'ahaṃ gacchāmi', meaning: '나는 간다' },
        { case: '1인칭 목적격 단', ending: 'maṃ', example: 'maṃ passati', meaning: '나를 본다' },
        { case: '1인칭 구격 단', ending: 'mayā', example: 'mayā kataṃ', meaning: '나에 의해 행해진' },
        { case: '1인칭 소유격 단', ending: 'mama/mayhaṃ/me', example: 'mama dhammo', meaning: '나의 법' },
        { case: '2인칭 주격 단', ending: 'tvaṃ/tuvaṃ', example: 'tvaṃ gacchasi', meaning: '너는 간다' },
        { case: '2인칭 목적격 단', ending: 'taṃ/tavaṃ', example: 'taṃ passati', meaning: '너를 본다' },
        { case: '2인칭 구격 단', ending: 'tayā/tvayā', example: 'tayā kataṃ', meaning: '너에 의해 행해진' },
        { case: '2인칭 소유격 단', ending: 'tava/tuyhaṃ/te', example: 'tava dhammo', meaning: '너의 법' },
      ],
    },
    examples: [
      { pali: 'Evaṃ me sutaṃ', breakdown: 'Evaṃ(이와 같이) + me(나에 의해) + sutaṃ(들린 것)', meaning: '이와 같이 나는 들었다', highlight: 'me', source: '행복경(Maṅgala Sutta) 서문' },
      { pali: 'evaṃ me rūpaṃ hotu', breakdown: 'evaṃ(이렇게) + me(나의) + rūpaṃ(물질이) + hotu(되어라)', meaning: '나의 물질이 이렇게 되어라', highlight: 'me', source: '무아경(SN 22.59) 제2단락' },
      { pali: 'mayā kataṃ', breakdown: 'mayā(나에 의해) + kataṃ(행해진)', meaning: '나에 의해 행해진', highlight: 'mayā', source: '경전 정형구' },
    ],
    tip: 'me/te는 소유격의 짧은 형태로, 경전에서 매우 자주 나옵니다. "Evaṃ me sutaṃ"은 모든 경의 시작입니다.',
  },

  // 스텝2: 지시대명사
  {
    type: 'teach-grammar',
    title: '지시대명사: ta (그/저)',
    description:
      '지시대명사 ta는 "그, 저"를 뜻합니다. ' +
      '남성·여성·중성에 따라 형태가 다르며, 경전에서 가장 흔한 대명사입니다.',
    table: {
      label: 'ta (그) 남성 격변화',
      rows: [
        { case: '주격 단수', ending: 'so', example: 'so puriso', meaning: '그 사람은' },
        { case: '목적격 단수', ending: 'taṃ', example: 'taṃ purisaṃ', meaning: '그 사람을' },
        { case: '구격 단수', ending: 'tena', example: 'tena purisena', meaning: '그 사람에 의해' },
        { case: '소유격 단수', ending: 'tassa', example: 'tassa purisassa', meaning: '그 사람의' },
        { case: '처소격 단수', ending: 'tasmiṃ', example: 'tasmiṃ vihāre', meaning: '그 절에서' },
        { case: '주격 복수', ending: 'te', example: 'te purisā', meaning: '그 사람들은' },
        { case: '소유격 복수', ending: 'tesaṃ', example: 'tesaṃ purisānaṃ', meaning: '그 사람들의' },
      ],
    },
    examples: [
      { pali: 'etaṃ maṅgalamuttamaṃ', breakdown: 'etaṃ(이것이) + maṅgalam(행복) + uttamaṃ(최상의)', meaning: '이것이 최상의 행복이니라', highlight: 'etaṃ', source: '행복경(Maṅgala Sutta) 제2게송' },
      { pali: 'te bhikkhū bhagavato paccassosuṃ', breakdown: 'te(그) + bhikkhū(비구들이) + bhagavato(세존에게) + paccassosuṃ(대답하였다)', meaning: '그 비구들이 세존에게 대답하였다', highlight: 'te', source: '무아경(SN 22.59) 제1단락' },
      { pali: 'Katamā ca sā majjhimā paṭipadā', breakdown: 'Katamā(어떤) + ca(그리고) + sā(그) + majjhimā(중간의) + paṭipadā(도)', meaning: '그 중도란 무엇인가', highlight: 'sā', source: '전법륜경(SN 56.11) 단락4' },
    ],
    tip: '여성 주격은 sā, 중성 주격·목적격은 taṃ/etaṃ입니다. etaṃ은 행복경에서 매 게송 반복됩니다.',
  },

  // 스텝3: 관계대명사
  {
    type: 'teach-grammar',
    title: '관계대명사: ya (어떤 ~이든)',
    description:
      '관계대명사 ya는 "~하는 자"를 뜻합니다. ' +
      'yo...so... 구조로 "~하는 자는 ~이다"를 표현합니다.',
    table: {
      label: 'ya 남성 격변화',
      rows: [
        { case: '주격 단수', ending: 'yo', example: 'yo passati', meaning: '~하는 자는' },
        { case: '목적격 단수', ending: 'yaṃ', example: 'yaṃ passati', meaning: '~하는 것을' },
        { case: '구격 단수', ending: 'yena', example: 'yena kataṃ', meaning: '~에 의해' },
        { case: '소유격 단수', ending: 'yassa', example: 'yassa dhammo', meaning: '~의' },
        { case: '처소격 단수', ending: 'yasmiṃ', example: 'yasmiṃ ṭhāne', meaning: '~하는 곳에서' },
      ],
    },
    examples: [
      { pali: 'Yo cāyaṃ kāmesu kāmasukhallikānuyogo', breakdown: 'Yo(~하는 것) + ca(그리고) + ayaṃ(이) + kāmesu(감각적 쾌락들에서) + kāmasukhallikānuyogo(감각적 쾌락에 탐닉함)', meaning: '감각적 쾌락에 탐닉하는 이것', highlight: 'Yo', source: '전법륜경(SN 56.11) 단락2' },
      { pali: 'Yaṃ panāniccaṃ dukkhaṃ vā taṃ sukhaṃ vā', breakdown: 'Yaṃ(~하는 것은) + panāniccaṃ(그런데 무상한) + dukkhaṃ(괴로운가) + vā(또는) + taṃ(그것) + sukhaṃ(즐거운가) + vā(또는)', meaning: '무상한 것은 괴로운가 즐거운가', highlight: 'Yaṃ...taṃ', source: '무아경(SN 22.59) 제7단락' },
      { pali: 'Yasmā ca kho bhikkhave rūpaṃ anattā, tasmā rūpaṃ ābādhāya saṃvattati', breakdown: 'Yasmā(~이므로) + rūpaṃ(물질은) + anattā(무아이다) + tasmā(그러므로) + ābādhāya(병듦에) + saṃvattati(이끈다)', meaning: '물질은 자아가 아니므로, 물질은 병듦에 이른다', highlight: 'Yasmā...tasmā', source: '무아경(SN 22.59) 제2단락' },
    ],
    tip: 'yo...so/yaṃ...taṃ/yasmā...tasmā 구조는 경전에서 매우 빈번합니다.',
  },

  // ── Lesson 13: 의문대명사/부정대명사 ──

  {
    type: 'teach-grammar',
    title: '의문대명사 ka (누구/무엇)',
    description:
      'ka는 "누구, 무엇"을 뜻하는 의문대명사입니다. ' +
      'ci를 붙이면 부정대명사("누군가, 무엇인가")가 됩니다.',
    table: {
      label: 'ka 격변화',
      rows: [
        { case: '남성 주격', ending: 'ko', example: 'ko ayaṃ?', meaning: '이 사람은 누구?' },
        { case: '남성 목적격', ending: 'kaṃ', example: 'kaṃ passasi?', meaning: '누구를 보느냐?' },
        { case: '남성 구격', ending: 'kena', example: 'kena kataṃ?', meaning: '누구에 의해 행해진?' },
        { case: '남성 소유격', ending: 'kassa', example: 'kassa putto?', meaning: '누구의 아들?' },
        { case: '남성 처소격', ending: 'kasmiṃ', example: 'kasmiṃ ṭhāne?', meaning: '어디에서?' },
        { case: '여성 주격', ending: 'kā', example: 'kā sā itthī?', meaning: '그 여인은 누구?' },
        { case: '중성 주격', ending: 'kiṃ', example: 'kiṃ etaṃ?', meaning: '이것은 무엇?' },
      ],
    },
    examples: [
      { pali: 'Taṃ kiṃ maññatha bhikkhave', breakdown: 'Taṃ(그것을) + kiṃ(어떻게) + maññatha(생각하느냐) + bhikkhave(비구들이여)', meaning: '비구들이여, 어떻게 생각하느냐', highlight: 'kiṃ', source: '무아경(SN 22.59) 제7단락' },
      { pali: 'Katame cattāro?', breakdown: 'Katame(어떤) + cattāro(네 가지)', meaning: '네 가지란 무엇인가?', highlight: 'Katame', source: '사념처경(DN 22) 제2단락' },
      { pali: 'Yaṃ kiñci vittaṃ idha vā huraṃ vā', breakdown: 'Yaṃ(어떤) + kiñci(~이든) + vittaṃ(재물이) + idha(이 세상에) + vā(또는) + huraṃ(저 세상에) + vā(또는)', meaning: '이 세상이든 저 세상이든 어떤 재물이 있더라도', highlight: 'kiñci', source: '보배경(Sn 2.1) 제3게송' },
    ],
    tip: 'kiṃ + ci → kiñci (비음동화). Taṃ kiṃ maññatha는 무아경의 반복 정형 의문구입니다.',
  },

  // ── Lesson 14-15: 현재분사/과거분사 ──

  // 스텝1: 현재분사
  {
    type: 'teach-grammar',
    title: '현재분사 (-anta/-māna)',
    description:
      '현재분사는 "~하고 있는"이라는 형용사 역할을 합니다. ' +
      '어근 + anta(능동) 또는 māna(중동)로 만듭니다.',
    table: {
      label: '현재분사 남성 격변화 (gacchanta)',
      rows: [
        { case: '주격 단수', ending: '-anto/-aṃ', example: 'gacchanto puriso', meaning: '가고 있는 사람은' },
        { case: '목적격 단수', ending: '-antaṃ', example: 'gacchantaṃ purisaṃ', meaning: '가고 있는 사람을' },
        { case: '구격 단수', ending: '-antena/-atā', example: 'gacchantena purisena', meaning: '가고 있는 사람에 의해' },
        { case: '소유격 단수', ending: '-antassa/-ato', example: 'gacchantassa purisassa', meaning: '가고 있는 사람의' },
        { case: '여성 주격', ending: '-antī', example: 'gacchantī itthī', meaning: '가고 있는 여인' },
      ],
    },
    examples: [
      { pali: 'ākaṅkhamānā sotthānaṃ', breakdown: 'ākaṅkhamānā(바라면서, 현재분사 남성 복수) + sotthānaṃ(안녕을)', meaning: '안녕을 바라면서', highlight: 'ākaṅkhamānā', source: '행복경(Maṅgala Sutta) 제1게송' },
      { pali: 'kāye kāyānupassī viharati', breakdown: 'kāye(몸에서) + kāyānupassī(몸을 관찰하는, -in 어간 현재분사) + viharati(머문다)', meaning: '몸에서 몸을 관찰하며 머문다', highlight: 'kāyānupassī', source: '사념처경(DN 22) 제2단락' },
      { pali: 'Tiṭṭhañcaraṃ nisinno vā sayāno vā', breakdown: 'Tiṭṭhaṃ(서 있으면서) + caraṃ(걸으면서) + nisinno(앉아 있는) + vā(또는) + sayāno(누워 있는) + vā(또는)', meaning: '서 있을 때나 걸을 때나 앉아 있을 때나 누워 있을 때나', highlight: 'Tiṭṭhaṃ...caraṃ', source: '자비경(Sn 1.8) 제9게송' },
    ],
    tip: '현재분사는 형용사처럼 수식하는 명사와 성·수·격이 일치합니다. -ānupassī는 -in 어간의 현재분사형입니다.',
  },

  // 스텝2: 과거분사
  {
    type: 'teach-grammar',
    title: '과거분사 (-ta/-na)',
    description:
      '과거분사는 어근 + ta(또는 na)로 만들며, "~된, ~한" 뜻입니다. ' +
      '수동적 완료를 나타내며 형용사처럼 명사를 수식합니다.',
    table: {
      label: '주요 과거분사',
      rows: [
        { case: 'karoti (하다)', ending: 'kata', example: 'kataṃ kammaṃ', meaning: '행해진 업' },
        { case: 'gacchati (가다)', ending: 'gata', example: 'gato puriso', meaning: '간 사람' },
        { case: 'bhuñjati (먹다)', ending: 'bhutta', example: 'bhuttaṃ bhojanaṃ', meaning: '먹은 음식' },
        { case: 'passati (보다)', ending: 'diṭṭha', example: 'diṭṭho dhammo', meaning: '본 법' },
        { case: 'suṇāti (듣다)', ending: 'suta', example: 'sutaṃ dhammaṃ', meaning: '들은 법' },
        { case: 'chindati (자르다)', ending: 'chinna', example: 'chinnaṃ rukkhaṃ', meaning: '잘린 나무' },
      ],
    },
    examples: [
      { pali: 'Evaṃ me sutaṃ', breakdown: 'Evaṃ(이와 같이) + me(나에 의해) + sutaṃ(들린 것, suṇāti의 과거분사)', meaning: '이와 같이 나는 들었다', highlight: 'sutaṃ', source: '행복경(Maṅgala Sutta) 서문' },
      { pali: 'majjhimā paṭipadā tathāgatena abhisambuddhā', breakdown: 'majjhimā(중간의) + paṭipadā(도가) + tathāgatena(여래에 의해) + abhisambuddhā(완전히 깨달은)', meaning: '여래에 의해 깨달은 중도', highlight: 'abhisambuddhā', source: '전법륜경(SN 56.11) 단락3' },
      { pali: 'pubbe ca katapuññatā', breakdown: 'pubbe(이전에) + ca(그리고) + katapuññatā(kata(행한, 과거분사) + puñña(공덕) + tā(~함))', meaning: '전생에 지은 공덕이 있음', highlight: 'kata', source: '행복경(Maṅgala Sutta) 제3게송' },
    ],
    tip: '과거분사 + 구격 = 수동문입니다. "evaṃ me sutaṃ"은 모든 경의 시작이고, tathāgatena abhisambuddhā도 같은 구문입니다.',
  },

  // 스텝3: 미래수동분사
  {
    type: 'teach-grammar',
    title: '미래수동분사 (-tabba/-anīya)',
    description:
      '미래수동분사는 "~되어야 할, ~할 만한"을 뜻합니다. ' +
      '어근 + tabba 또는 anīya로 만듭니다.',
    table: {
      label: '주요 미래수동분사',
      rows: [
        { case: 'karoti (하다)', ending: 'kattabba', example: 'kattabbaṃ kammaṃ', meaning: '해야 할 일' },
        { case: 'passati (보다)', ending: 'dassanīya', example: 'dassanīyo puggalo', meaning: '볼 만한 인물' },
        { case: 'pūjeti (공양하다)', ending: 'pūjanīya', example: 'pūjanīyo bhikkhu', meaning: '공양 받을 만한 비구' },
        { case: 'sevati (가까이하다)', ending: 'sevitabba', example: 'sevitabbo kalyāṇamitto', meaning: '가까이해야 할 선한 벗' },
      ],
    },
    examples: [
      { pali: 'Dveme bhikkhave antā pabbajitena na sevitabbā', breakdown: 'Dve(둘) + ime(이) + antā(극단들은) + pabbajitena(출가자에 의해) + na(~않다) + sevitabbā(가까이해야 할)', meaning: '비구들이여, 출가자가 가까이하지 말아야 할 두 극단이 있다', highlight: 'sevitabbā', source: '전법륜경(SN 56.11) 단락2' },
      { pali: 'pūjā ca pūjanīyānaṃ', breakdown: 'pūjā(공양) + ca(그리고) + pūjanīyānaṃ(공양 받을 만한 이들의)', meaning: '공양 받을 분을 공양함', highlight: 'pūjanīyānaṃ', source: '행복경(Maṅgala Sutta) 제2게송' },
      { pali: 'dukkhaṃ ariyasaccaṃ pariññeyyaṃ', breakdown: 'dukkhaṃ(괴로움의) + ariyasaccaṃ(성스러운 진리는) + pariññeyyaṃ(두루 알아야 할)', meaning: '괴로움의 성스러운 진리는 두루 알아야 한다', highlight: 'pariññeyyaṃ', source: '전법륜경(SN 56.11) 단락9' },
    ],
    tip: 'sevitabba(가까이해야 할), pūjanīya(공양 받을 만한), pariññeyya(알아야 할)는 모두 경전의 미래수동분사입니다.',
    relatedLesson: '전법륜경의 sevitabbā/pariññeyyaṃ, 행복경의 pūjanīyānaṃ이 대표적입니다.',
  },

  // ── Lesson 16-17: 미래형/명령형/원망형 ──

  // 스텝1: 미래형
  {
    type: 'teach-grammar',
    title: '미래형 (-ssa-)',
    description:
      '미래형은 어근에 -ssa-를 삽입하고 인칭어미를 붙여 만듭니다. ' +
      '"~할 것이다"를 뜻합니다.',
    table: {
      label: '미래형 인칭 변화 (gamissati, 갈 것이다)',
      rows: [
        { case: '3인칭 단수', ending: '-ssati', example: 'gamissati', meaning: '갈 것이다' },
        { case: '3인칭 복수', ending: '-ssanti', example: 'gamissanti', meaning: '갈 것이다 (복수)' },
        { case: '2인칭 단수', ending: '-ssasi', example: 'gamissasi', meaning: '너는 갈 것이다' },
        { case: '1인칭 단수', ending: '-ssāmi', example: 'gamissāmi', meaning: '나는 갈 것이다' },
        { case: '1인칭 복수', ending: '-ssāma', example: 'gamissāma', meaning: '우리는 갈 것이다' },
      ],
    },
    examples: [
      { pali: 'nayidaṃ rūpaṃ ābādhāya saṃvatteyya', breakdown: 'na(~않다) + ayidaṃ(이것은) + rūpaṃ(물질이) + ābādhāya(병듦에) + saṃvatteyya(이끌 것이다)', meaning: '이 물질은 병듦에 이끌리지 않을 것이다', highlight: 'saṃvatteyya', source: '무아경(SN 22.59) 제2단락 — 반사실 조건문의 귀결절' },
      { pali: 'upasamāya abhiññāya sambodhāya nibbānāya saṃvattati', breakdown: 'upasamāya(고요함으로) + abhiññāya(뛰어난 앎으로) + sambodhāya(깨달음으로) + nibbānāya(열반으로) + saṃvattati(이끈다)', meaning: '고요함, 뛰어난 앎, 깨달음, 열반으로 이끈다', highlight: 'saṃvattati', source: '전법륜경(SN 56.11) 단락3' },
      { pali: 'cakkhuṃ udapādi ñāṇaṃ udapādi', breakdown: 'cakkhuṃ(눈이) + udapādi(생겨났다) + ñāṇaṃ(지혜가) + udapādi(생겨났다)', meaning: '눈이 생겼고 지혜가 생겼다', highlight: 'udapādi', source: '전법륜경(SN 56.11) 단락9' },
    ],
    tip: 'saṃvattati/saṃvatteyya(이끌다)는 전법륜경·무아경에서 매우 자주 나옵니다. udapādi(생겨났다)는 ud+ā+pad의 과거형입니다.',
  },

  // 스텝2: 명령형
  {
    type: 'teach-grammar',
    title: '명령형 (-tu/-hi)',
    description:
      '명령형은 "~하라, ~하시오"를 뜻합니다. ' +
      '3인칭은 -tu, 2인칭은 -hi 또는 어간만 사용합니다.',
    table: {
      label: '명령형 인칭 변화',
      rows: [
        { case: '3인칭 단수', ending: '-tu', example: 'gacchatu', meaning: '가시라' },
        { case: '2인칭 단수', ending: '-hi/-a', example: 'gaccha / brūhi', meaning: '가라 / 말하라' },
        { case: '3인칭 복수', ending: '-ntu', example: 'gacchantu', meaning: '가시라 (복수)' },
        { case: '2인칭 복수', ending: '-tha', example: 'gacchatha', meaning: '가라 (복수)' },
        { case: '1인칭 단수', ending: '-āmi', example: 'gacchāmi', meaning: '가겠다 (의지)' },
      ],
    },
    examples: [
      { pali: 'brūhi maṅgalamuttamaṃ', breakdown: 'brūhi(말씀해 주소서, 명령형 2인칭) + maṅgalamuttamaṃ(최상의 행복을)', meaning: '최상의 행복을 말씀해 주소서', highlight: 'brūhi', source: '행복경(Maṅgala Sutta) 제1게송' },
      { pali: 'sakkacca suṇantu bhāsitaṃ', breakdown: 'sakkacca(정성껏) + suṇantu(들으시라, 명령형 3인칭 복수) + bhāsitaṃ(말씀을)', meaning: '정성껏 말씀을 들으시라', highlight: 'suṇantu', source: '보배경(Sn 2.1) 제1게송' },
      { pali: 'sabbe sattā bhavantu sukhitattā', breakdown: 'sabbe(모든) + sattā(존재들이) + bhavantu(되기를, 명령형 3인칭 복수) + sukhitattā(행복한 자들이)', meaning: '모든 존재가 행복하기를', highlight: 'bhavantu', source: '자비경(Sn 1.8) 제3게송' },
    ],
    tip: 'brūhi(2인칭 명령), suṇantu/bhavantu(3인칭 복수 명령)는 경전의 대표적 명령형입니다.',
    relatedLesson: '행복경의 brūhi, 보배경의 suṇantu, 자비경의 bhavantu가 명령형 대표 예입니다.',
  },

  // 스텝3: 원망형/조건법
  {
    type: 'teach-grammar',
    title: '원망형/조건법 (-eyya)',
    description:
      '원망형은 "~할 수 있다, ~해야 한다"를, 조건법은 "~했을 것이다"를 뜻합니다. ' +
      '어근 + eyya로 만듭니다.',
    table: {
      label: '원망형 인칭 변화',
      rows: [
        { case: '3인칭 단수', ending: '-eyya', example: 'gaccheyya', meaning: '갈 수 있다/가야 한다' },
        { case: '3인칭 복수', ending: '-eyyuṃ', example: 'gaccheyyuṃ', meaning: '갈 수 있다 (복수)' },
        { case: '2인칭 단수', ending: '-eyyāsi', example: 'gaccheyyāsi', meaning: '너는 가야 한다' },
        { case: '1인칭 단수', ending: '-eyyāmi', example: 'gaccheyyāmi', meaning: '나는 가야 한다' },
        { case: '조건법 3인칭', ending: '-issa', example: 'abhavissa', meaning: '~였을 것이다' },
      ],
    },
    examples: [
      { pali: 'Rūpañca hidaṃ bhikkhave attā abhavissa', breakdown: 'Rūpañca(물질이+그리고) + hidaṃ(만약 이것이) + bhikkhave(비구들이여) + attā(자아) + abhavissa(~이었다면)', meaning: '비구들이여, 만약 물질이 자아라면', highlight: 'abhavissa', source: '무아경(SN 22.59) 제2단락' },
      { pali: 'nayidaṃ rūpaṃ ābādhāya saṃvatteyya', breakdown: 'na(~않다) + ayidaṃ(이것은) + rūpaṃ(물질이) + ābādhāya(병듦에) + saṃvatteyya(이끌어야 한다)', meaning: '이 물질은 병듦에 이르지 않아야 할 것이다', highlight: 'saṃvatteyya', source: '무아경(SN 22.59) 제2단락' },
      { pali: 'mānasaṃ bhāvaye aparimāṇaṃ', breakdown: 'mānasaṃ(마음을) + bhāvaye(닦을지어다, 원망형) + aparimāṇaṃ(한량없는)', meaning: '한량없는 마음을 닦을지어다', highlight: 'bhāvaye', source: '자비경(Sn 1.8) 제7게송' },
    ],
    tip: '조건법 abhavissa/saṃvatteyya는 반사실적 가정문에, bhāvaye는 당위/기원 표현에 사용됩니다.',
    relatedLesson: '무아경의 abhavissa/saṃvatteyya(조건법), 자비경의 bhāvaye(원망형)가 대표적입니다.',
  },

  // ── Lesson 18-19: 사역/수동 ──

  // 스텝1: 사역형
  {
    type: 'teach-grammar',
    title: '사역형 (-āpeti/-eti)',
    description:
      '사역형은 "~하게 하다, ~시키다"를 뜻합니다. ' +
      '어근에 -āpeti 또는 -eti를 붙여 만듭니다.',
    table: {
      label: '주요 사역형',
      rows: [
        { case: 'karoti (하다)', ending: 'kārāpeti', example: 'kammaṃ kārāpeti', meaning: '일을 시키다' },
        { case: 'pacati (요리하다)', ending: 'pāceti/pācāpeti', example: 'bhojanaṃ pāceti', meaning: '음식을 요리하게 하다' },
        { case: 'gacchati (가다)', ending: 'gameti/gamāpeti', example: 'purisaṃ gameti', meaning: '사람을 보내다' },
        { case: 'suṇāti (듣다)', ending: 'sāveti', example: 'dhammaṃ sāveti', meaning: '법을 알리다 (듣게 하다)' },
      ],
    },
    examples: [
      { pali: 'bhagavā pañcavaggiye bhikkhū āmantesi', breakdown: 'bhagavā(세존이) + pañcavaggiye(다섯 무리의) + bhikkhū(비구들을) + āmantesi(말씀하셨다, 사역동사 manteti의 과거형)', meaning: '세존께서 다섯 비구에게 말씀하셨다', highlight: 'āmantesi', source: '전법륜경(SN 56.11) 단락1' },
      { pali: 'parimukhaṃ satiṃ upaṭṭhapetvā', breakdown: 'parimukhaṃ(전면에) + satiṃ(새김을) + upaṭṭhapetvā(확립하고서, upaṭṭhāpeti(사역)의 절대분사)', meaning: '새김을 전면에 확립하고서', highlight: 'upaṭṭhapetvā', source: '사념처경(DN 22) 제3단락' },
      { pali: 'dhammaṃ sāveti bhagavā', breakdown: 'dhammaṃ(법을) + sāveti(알린다, suṇāti의 사역형) + bhagavā(세존이)', meaning: '세존이 법을 알린다 (듣게 하다)', highlight: 'sāveti', source: '경전 정형구. sāvaka(제자)의 어원' },
    ],
    tip: 'āmantesi(ā+manteti, 부르다/말하다), upaṭṭhāpeti(확립시키다), sāveti(알리다)는 경전의 사역동사입니다.',
  },

  // 스텝2: 수동태
  {
    type: 'teach-grammar',
    title: '수동태 (-iya-/-ya-)',
    description:
      '수동태는 어근에 -iya-/-ya-를 삽입하여 만듭니다. ' +
      '행위자는 구격(~에 의해)으로 표현합니다.',
    table: {
      label: '주요 수동태',
      rows: [
        { case: 'karoti (하다)', ending: 'karīyati/kayirati', example: 'kammaṃ karīyati', meaning: '일이 행해지다' },
        { case: 'passati (보다)', ending: 'passīyati', example: 'rūpaṃ passīyati', meaning: '색이 보이다' },
        { case: 'vadati (말하다)', ending: 'vuccati', example: 'dhammo vuccati', meaning: '법이라 불리다' },
        { case: 'jānāti (알다)', ending: 'ñāyati', example: 'saccaṃ ñāyati', meaning: '진리가 알려지다' },
      ],
    },
    examples: [
      { pali: 'na ca labbhati rūpe', breakdown: 'na(~않다) + ca(그리고) + labbhati(얻어지다, 수동태) + rūpe(물질에 대해)', meaning: '물질에 대해 (그렇게) 할 수 없다', highlight: 'labbhati', source: '무아경(SN 22.59) 제2단락' },
      { pali: 'cakkhuṃ udapādi', breakdown: 'cakkhuṃ(눈이) + udapādi(생겨났다, ud+ā+pad 자동사 과거)', meaning: '눈이 생겨났다', highlight: 'udapādi', source: '전법륜경(SN 56.11) 단락9' },
      { pali: 'Evaṃ me sutaṃ', breakdown: 'Evaṃ(이와 같이) + me(나에 의해, 구격) + sutaṃ(들린 것, 과거분사 수동)', meaning: '이와 같이 나는 들었다 (= 나에 의해 들려졌다)', highlight: 'sutaṃ', source: '행복경(Maṅgala Sutta) 서문 — 과거분사+구격의 수동 구문' },
    ],
    tip: '경전에서 수동태는 과거분사 + 구격 형태로 자주 나옵니다. labbhati(얻어지다)도 수동 동사입니다.',
  },

  // ── Lesson 20-21: 절대분사/부정사 ──

  // 스텝1: 절대분사
  {
    type: 'teach-grammar',
    title: '절대분사 (-tvā/-ya): ~하고 나서',
    description:
      '절대분사는 두 동작을 연결합니다. "A를 하고 나서 B를 했다." ' +
      '어근 + tvā, 접두사 있으면 + ya로 만듭니다.',
    table: {
      label: '주요 절대분사',
      rows: [
        { case: 'karoti (하다)', ending: 'katvā', example: 'kammaṃ katvā', meaning: '일을 하고 나서' },
        { case: 'gacchati (가다)', ending: 'gantvā', example: 'gantvā nisīdi', meaning: '가고 나서 앉았다' },
        { case: 'passati (보다)', ending: 'disvā', example: 'disvā pasīdi', meaning: '보고 나서 기뻐했다' },
        { case: 'suṇāti (듣다)', ending: 'sutvā', example: 'sutvā anumodati', meaning: '듣고 나서 수희했다' },
        { case: 'abhisambujjhati', ending: 'abhisamecca', example: 'abhisamecca deseti', meaning: '완전히 깨닫고 설한다' },
      ],
    },
    examples: [
      { pali: 'Ete kho bhikkhave ubho ante anupagamma', breakdown: 'Ete(이) + ubho(둘 다) + ante(극단들을) + anupagamma(가까이하지 않고, an+upa+gam+ya 절대분사)', meaning: '이 두 극단에 가까이하지 않고', highlight: 'anupagamma', source: '전법륜경(SN 56.11) 단락3' },
      { pali: 'pallaṅkaṃ ābhujitvā ujuṃ kāyaṃ paṇidhāya', breakdown: 'pallaṅkaṃ(가부좌를) + ābhujitvā(꿇고서) + ujuṃ(곧게) + kāyaṃ(몸을) + paṇidhāya(세우고서)', meaning: '가부좌하고 몸을 곧게 세우고', highlight: 'ābhujitvā...paṇidhāya', source: '사념처경(DN 22) 제3단락' },
      { pali: 'vineyya loke abhijjhādomanassaṃ', breakdown: 'vineyya(제거하고, vineti의 절대분사) + loke(세상에서) + abhijjhādomanassaṃ(탐욕과 근심을)', meaning: '세상에 대한 탐욕과 근심을 제거하고', highlight: 'vineyya', source: '사념처경(DN 22) 제2단락' },
    ],
    tip: '절대분사가 여러 개 연속으로 나올 수 있습니다. 사념처경에서 ābhujitvā + paṇidhāya + upaṭṭhapetvā가 연속됩니다.',
    relatedLesson: '전법륜경의 anupagamma, 사념처경의 ābhujitvā/vineyya가 절대분사입니다.',
  },

  // 스텝2: 부정사
  {
    type: 'teach-grammar',
    title: '부정사 (-tuṃ): ~하기 위해',
    description:
      '부정사는 "~하기 위해, ~하려고"를 뜻합니다. ' +
      '"~할 수 있다"는 sakkoti + 부정사로 표현합니다.',
    table: {
      label: '주요 부정사',
      rows: [
        { case: 'gacchati (가다)', ending: 'gantuṃ', example: 'gantuṃ icchati', meaning: '가기를 원한다' },
        { case: 'karoti (하다)', ending: 'kātuṃ', example: 'kātuṃ sakkoti', meaning: '할 수 있다' },
        { case: 'deti (주다)', ending: 'dātuṃ', example: 'dātuṃ vaṭṭati', meaning: '주는 것이 마땅하다' },
        { case: 'passati (보다)', ending: 'passituṃ', example: 'passituṃ āgacchati', meaning: '보러 온다' },
        { case: 'suṇāti (듣다)', ending: 'sotuṃ', example: 'dhammaṃ sotuṃ', meaning: '법을 듣기 위해' },
      ],
    },
    examples: [
      { pali: 'kallaṃ nu taṃ samanupassituṃ', breakdown: 'kallaṃ(합당한가) + nu(과연) + taṃ(그것을) + samanupassituṃ(~라고 보기에, sam+anu+passati의 부정사)', meaning: '그것을 ~라고 보는 것이 합당한가', highlight: 'samanupassituṃ', source: '무아경(SN 22.59) 제7단락' },
      { pali: 'Karanīyamatthakusalena yantaṃ santaṃ padaṃ abhisamecca', breakdown: 'Karanīyam(행해야 할 것) + atthakusalena(선을 아는 자에 의해) + santaṃ(고요한) + padaṃ(경지를) + abhisamecca(완전히 이해하고)', meaning: '선을 아는 자가 적멸의 경지를 완전히 이해하고 행할 것은', highlight: 'Karanīyam', source: '자비경(Sn 1.8) 제1게송 — karanīya는 의무분사이자 부정사적 용법' },
      { pali: 'nibbānassa sacchikiriyāya', breakdown: 'nibbānassa(열반의) + sacchikiriyāya(실현을 위해, sacchi+kiriyā의 여격)', meaning: '열반을 실현하기 위하여', highlight: 'sacchikiriyāya', source: '사념처경(DN 22) 제1단락 — 목적의 여격(부정사적 기능)' },
    ],
    tip: 'samanupassituṃ(~라고 보기에)는 무아경의 핵심 부정사입니다. 빠알리어에서는 부정사(-tuṃ) 외에도 여격(-āya)이 목적을 나타내기도 합니다.',
  },

  // ── Lesson 22: 자음어간 명사 ──

  // 스텝1: -ant/-mant/-vant 어간
  {
    type: 'teach-grammar',
    title: '자음어간 명사: -ant/-mant/-vant',
    description:
      '어간이 자음으로 끝나는 명사입니다. ' +
      '-vant는 "~을 가진"이라는 소유 형용사에서 파생됩니다.',
    table: {
      label: 'bhagavant (세존) 격변화',
      rows: [
        { case: '주격 단수', ending: '-vā', example: 'bhagavā', meaning: '세존은' },
        { case: '목적격 단수', ending: '-vantaṃ', example: 'bhagavantaṃ', meaning: '세존을' },
        { case: '구격 단수', ending: '-vatā', example: 'bhagavatā', meaning: '세존에 의해' },
        { case: '소유격 단수', ending: '-vato', example: 'bhagavato', meaning: '세존의' },
        { case: '처소격 단수', ending: '-vati', example: 'bhagavati', meaning: '세존에게서' },
        { case: '호격 단수', ending: '-vaṃ/-vā', example: 'bhagavā', meaning: '세존이시여' },
      ],
    },
    examples: [
      { pali: 'Ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati', breakdown: 'Ekaṃ(한) + samayaṃ(때) + bhagavā(세존이, bhagavant의 주격) + bārāṇasiyaṃ(바라나시에서) + viharati(머무셨다)', meaning: '한 때 세존께서 바라나시에 머무셨다', highlight: 'bhagavā', source: '전법륜경(SN 56.11) 단락1' },
      { pali: 'ātāpī sampajāno satimā', breakdown: 'ātāpī(열심히, -in 어간 주격) + sampajāno(분명히 아는) + satimā(마음챙기는, satimant의 주격)', meaning: '열심히, 분명히 알아차리며, 마음챙기며', highlight: 'satimā', source: '사념처경(DN 22) 제2단락' },
      { pali: 'Bhagavā etadavoca', breakdown: 'Bhagavā(세존이, bhagavant 주격) + etad(이것을) + avoca(말씀하셨다)', meaning: '세존이 이것을 말씀하셨다', highlight: 'Bhagavā', source: '무아경(SN 22.59) 제1단락' },
    ],
    tip: '-vā로 끝나는 주격은 -vant 어간입니다. bhagavā(bhagavant), satimā(satimant)가 대표적입니다.',
  },

  // 스텝2: -in/-ar 어간
  {
    type: 'teach-grammar',
    title: '자음어간 명사: -in/-ar',
    description:
      '-in 어간은 "~을 가진 자"를, -ar 어간은 친족·직업 명사를 나타냅니다. ' +
      'satthā(스승), mātā(어머니), pitā(아버지) 등이 대표적입니다.',
    table: {
      label: 'satthā (스승) ar-어간 격변화',
      rows: [
        { case: '주격 단수', ending: '-tā', example: 'satthā', meaning: '스승은' },
        { case: '목적격 단수', ending: '-tāraṃ', example: 'satthāraṃ', meaning: '스승을' },
        { case: '구격 단수', ending: '-tārā', example: 'satthārā', meaning: '스승에 의해' },
        { case: '소유격 단수', ending: '-tu', example: 'satthu', meaning: '스승의' },
        { case: '호격 단수', ending: '-tā', example: 'satthā', meaning: '스승이시여' },
        { case: '주격 복수', ending: '-tāro', example: 'satthāro', meaning: '스승들은' },
      ],
    },
    examples: [
      { pali: 'Mātāpitu upaṭṭhānaṃ', breakdown: 'Mātāpitu(어머니와 아버지의, mātā+pitu ar-어간 소유격) + upaṭṭhānaṃ(봉양)', meaning: '어머니와 아버지를 봉양함', highlight: 'Mātāpitu', source: '행복경(Maṅgala Sutta) 제5게송' },
      { pali: 'sukhino vā khemino hontu', breakdown: 'sukhino(행복한 자들이, sukhin -in 어간 복수 주격) + vā(또는) + khemino(안온한 자들이, khemin -in 어간) + hontu(되기를)', meaning: '행복하고 안온하기를', highlight: 'sukhino...khemino', source: '자비경(Sn 1.8) 제3게송' },
      { pali: 'satthā devamanussānaṃ', breakdown: 'satthā(스승, satthā ar-어간 주격) + devamanussānaṃ(천신과 인간의)', meaning: '천신과 인간의 스승', highlight: 'satthā', source: '경전 정형 불호(佛號)' },
    ],
    tip: '-in 어간(sukhī/sukhino, ātāpī), ar-어간(satthā/satthu, mātā/mātāpitu)은 경전 곳곳에 나옵니다.',
    relatedLesson: '행복경의 Mātāpitu(ar-어간), 자비경의 sukhino/khemino(-in 어간)가 대표적입니다.',
  },
]
