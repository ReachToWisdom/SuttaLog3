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
      { pali: 'ahaṃ dhammaṃ suṇāmi', breakdown: 'ahaṃ(나는) + dhammaṃ(법을) + suṇāmi(듣는다)', meaning: '나는 법을 듣는다', highlight: 'ahaṃ' },
      { pali: 'tvaṃ kiṃ passasi?', breakdown: 'tvaṃ(너는) + kiṃ(무엇을) + passasi(보느냐)', meaning: '너는 무엇을 보느냐?', highlight: 'tvaṃ' },
      { pali: 'mayaṃ buddhaṃ vandāma', breakdown: 'mayaṃ(우리는) + buddhaṃ(붓다를) + vandāma(예경한다)', meaning: '우리는 붓다를 예경한다', highlight: 'mayaṃ' },
    ],
    tip: 'me/te는 소유격의 짧은 형태로, 경전에서 매우 자주 나옵니다.',
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
      { pali: 'so puriso gacchati', breakdown: 'so(그) + puriso(사람이) + gacchati(간다)', meaning: '그 사람이 간다', highlight: 'so' },
      { pali: 'taṃ dhammaṃ suṇāti', breakdown: 'taṃ(그) + dhammaṃ(법을) + suṇāti(듣는다)', meaning: '그 법을 듣는다', highlight: 'taṃ' },
      { pali: 'sā itthī āgacchati', breakdown: 'sā(그 여) + itthī(여인이) + āgacchati(온다)', meaning: '그 여인이 온다', highlight: 'sā' },
    ],
    tip: '여성 주격은 sā, 중성 주격·목적격은 taṃ입니다.',
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
      { pali: 'yo dhammaṃ passati so sukhaṃ labhati', breakdown: 'yo(~하는 자) + dhammaṃ(법을) + passati(보는) + so(그는) + sukhaṃ(행복을) + labhati(얻는다)', meaning: '법을 보는 자는 행복을 얻는다', highlight: 'yo...so' },
      { pali: 'yaṃ kiñci samudayadhammaṃ', breakdown: 'yaṃ(어떤) + kiñci(~이든) + samudayadhammaṃ(일어나는 성질의 것)', meaning: '무엇이든 일어나는 성질의 것', highlight: 'yaṃ kiñci' },
      { pali: 'yassa maggo na vijjati', breakdown: 'yassa(~의) + maggo(길이) + na(~않다) + vijjati(존재하다)', meaning: '그의 길이 존재하지 않는 자', highlight: 'yassa' },
    ],
    tip: 'yo...so 구조는 경전에서 매우 빈번합니다. 영어의 "whoever...he..."와 비슷합니다.',
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
      { pali: 'ko ayaṃ puriso?', breakdown: 'ko(누구) + ayaṃ(이) + puriso(사람은)', meaning: '이 사람은 누구인가?', highlight: 'ko' },
      { pali: 'ko ci āgacchati', breakdown: 'ko(누구) + ci(~인가) + āgacchati(온다)', meaning: '누군가 온다', highlight: 'ko ci' },
      { pali: 'na kiñci jānāti', breakdown: 'na(~않다) + kiñci(아무것도) + jānāti(안다)', meaning: '아무것도 알지 못한다', highlight: 'kiñci' },
    ],
    tip: 'kiṃ + ci → kiñci (비음동화). "무엇인가"를 뜻합니다.',
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
      { pali: 'gacchanto puriso dhammaṃ suṇāti', breakdown: 'gacchanto(가고 있는) + puriso(사람이) + dhammaṃ(법을) + suṇāti(듣는다)', meaning: '가고 있는 사람이 법을 듣는다', highlight: 'gacchanto' },
      { pali: 'passantī itthī hasati', breakdown: 'passantī(보고 있는) + itthī(여인이) + hasati(웃는다)', meaning: '보고 있는 여인이 웃는다', highlight: 'passantī' },
      { pali: 'tiṭṭhamāno bhikkhu', breakdown: 'tiṭṭhamāno(서 있는) + bhikkhu(비구)', meaning: '서 있는 비구', highlight: 'tiṭṭhamāno' },
    ],
    tip: '현재분사는 형용사처럼 수식하는 명사와 성·수·격이 일치합니다.',
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
      { pali: 'purisena kataṃ kammaṃ', breakdown: 'purisena(사람에 의해) + kataṃ(행해진) + kammaṃ(업)', meaning: '사람에 의해 행해진 업', highlight: 'kataṃ' },
      { pali: 'diṭṭho me dhammo', breakdown: 'diṭṭho(본) + me(나에 의해) + dhammo(법)', meaning: '나에 의해 본 법 (= 내가 본 법)', highlight: 'diṭṭho' },
      { pali: 'evaṃ me sutaṃ', breakdown: 'evaṃ(이와 같이) + me(나에 의해) + sutaṃ(들린 것)', meaning: '이와 같이 나는 들었다', highlight: 'sutaṃ' },
    ],
    tip: '과거분사 + 구격 = 수동문입니다. "evaṃ me sutaṃ"은 모든 경의 시작입니다.',
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
      { pali: 'kattabbaṃ kammaṃ karoti', breakdown: 'kattabbaṃ(해야 할) + kammaṃ(일을) + karoti(한다)', meaning: '해야 할 일을 한다', highlight: 'kattabbaṃ' },
      { pali: 'pūjanīyā pūjanīye', breakdown: 'pūjanīyā(공양 받을 만한 자들을) + pūjanīye(공양하는)', meaning: '공양 받을 만한 자들을 공양하는 것', highlight: 'pūjanīyā' },
      { pali: 'na sevitabbaṃ asappurisaṃ', breakdown: 'na(~않다) + sevitabbaṃ(가까이해야 할) + asappurisaṃ(나쁜 사람)', meaning: '나쁜 사람은 가까이하지 말아야 한다', highlight: 'sevitabbaṃ' },
    ],
    tip: 'sevitabba(가까이해야 할)는 전법륜경에 나옵니다.',
    relatedLesson: '전법륜경의 sevitabba가 미래수동분사입니다.',
  },

  // ── Lesson 16-17: 미래형/명령형/희구법 ──

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
      { pali: 'bhagavā dhammaṃ desessati', breakdown: 'bhagavā(세존이) + dhammaṃ(법을) + desessati(설할 것이다)', meaning: '세존이 법을 설할 것이다', highlight: 'desessati' },
      { pali: 'karissati kusalaṃ kammaṃ', breakdown: 'karissati(할 것이다) + kusalaṃ(선한) + kammaṃ(업)', meaning: '선한 업을 할 것이다', highlight: 'karissati' },
      { pali: 'dassati me dhammaṃ', breakdown: 'dassati(볼 것이다) + me(나에게) + dhammaṃ(법을)', meaning: '나에게 법을 보여줄 것이다', highlight: 'dassati' },
    ],
    tip: 'bhavissati(될 것이다)는 경전에서 매우 자주 나오는 미래형입니다.',
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
      { pali: 'ehi bhikkhu', breakdown: 'ehi(오라) + bhikkhu(비구여)', meaning: '오라 비구여', highlight: 'ehi' },
      { pali: 'brūhi me bhante', breakdown: 'brūhi(말씀하소서) + me(나에게) + bhante(존자여)', meaning: '존자여 나에게 말씀해 주소서', highlight: 'brūhi' },
      { pali: 'suṇātu bhante bhagavā dhammaṃ desetu', breakdown: 'suṇātu(들으시라) + bhante(존자여) + bhagavā(세존이) + dhammaṃ(법을) + desetu(설하시라)', meaning: '세존이시여 법을 설하소서', highlight: 'desetu' },
    ],
    tip: 'ehi(오라)는 "ehi-bhikkhu(오라 비구여)" 구족계의 어원입니다.',
    relatedLesson: '행복경의 brūhi(말씀해 주소서)가 명령형입니다.',
  },

  // 스텝3: 희구법/조건법
  {
    type: 'teach-grammar',
    title: '희구법/조건법 (-eyya)',
    description:
      '희구법은 "~할 수 있다, ~해야 한다"를, 조건법은 "~했을 것이다"를 뜻합니다. ' +
      '어근 + eyya로 만듭니다.',
    table: {
      label: '희구법 인칭 변화',
      rows: [
        { case: '3인칭 단수', ending: '-eyya', example: 'gaccheyya', meaning: '갈 수 있다/가야 한다' },
        { case: '3인칭 복수', ending: '-eyyuṃ', example: 'gaccheyyuṃ', meaning: '갈 수 있다 (복수)' },
        { case: '2인칭 단수', ending: '-eyyāsi', example: 'gaccheyyāsi', meaning: '너는 가야 한다' },
        { case: '1인칭 단수', ending: '-eyyāmi', example: 'gaccheyyāmi', meaning: '나는 가야 한다' },
        { case: '조건법 3인칭', ending: '-issa', example: 'abhavissa', meaning: '~였을 것이다' },
      ],
    },
    examples: [
      { pali: 'saṃvatteyya ñāṇāya', breakdown: 'saṃvatteyya(이끌 것이다) + ñāṇāya(지혜로)', meaning: '지혜로 이끌 것이다', highlight: 'saṃvatteyya' },
      { pali: 'rūpaṃ attā abhavissa', breakdown: 'rūpaṃ(색이) + attā(자아) + abhavissa(~였을 것이다)', meaning: '색이 자아였다면', highlight: 'abhavissa' },
      { pali: 'na taṃ kareyyāmi', breakdown: 'na(~않다) + taṃ(그것을) + kareyyāmi(하겠다)', meaning: '나는 그것을 하지 않겠다', highlight: 'kareyyāmi' },
    ],
    tip: '조건법 abhavissa는 "만약 ~였다면"이라는 반사실적 가정에 사용됩니다.',
    relatedLesson: '무아경의 abhavissa(~였을 것이다)가 조건법입니다.',
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
      { pali: 'rājā purisaṃ kammaṃ kārāpeti', breakdown: 'rājā(왕이) + purisaṃ(사람에게) + kammaṃ(일을) + kārāpeti(시킨다)', meaning: '왕이 사람에게 일을 시킨다', highlight: 'kārāpeti' },
      { pali: 'ācariyo sissakaṃ pāṭhaṃ vāceti', breakdown: 'ācariyo(스승이) + sissakaṃ(학생에게) + pāṭhaṃ(경문을) + vāceti(읽게 한다)', meaning: '스승이 학생에게 경문을 읽게 한다', highlight: 'vāceti' },
      { pali: 'dhammaṃ sāveti bhagavā', breakdown: 'dhammaṃ(법을) + sāveti(알린다) + bhagavā(세존이)', meaning: '세존이 법을 알린다', highlight: 'sāveti' },
    ],
    tip: 'sāveti(듣게 하다 = 알리다)에서 sāvaka(듣는 자 = 제자)가 파생됩니다.',
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
      { pali: 'purisena kammaṃ karīyati', breakdown: 'purisena(사람에 의해) + kammaṃ(일이) + karīyati(행해진다)', meaning: '사람에 의해 일이 행해진다', highlight: 'karīyati' },
      { pali: 'idaṃ dukkhaṃ vuccati', breakdown: 'idaṃ(이것이) + dukkhaṃ(괴로움이라) + vuccati(불린다)', meaning: '이것이 괴로움이라 불린다', highlight: 'vuccati' },
      { pali: 'dhammo desīyati bhagavatā', breakdown: 'dhammo(법이) + desīyati(설해진다) + bhagavatā(세존에 의해)', meaning: '법이 세존에 의해 설해진다', highlight: 'desīyati' },
    ],
    tip: '경전에서 수동태는 과거분사 + 구격 형태로 더 자주 나옵니다 (예: kataṃ purisena).',
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
      { pali: 'dhammaṃ sutvā pasīdi', breakdown: 'dhammaṃ(법을) + sutvā(듣고 나서) + pasīdi(기뻐했다)', meaning: '법을 듣고 나서 기뻐했다', highlight: 'sutvā' },
      { pali: 'bhagavantaṃ disvā vanditvā nisīdi', breakdown: 'bhagavantaṃ(세존을) + disvā(보고) + vanditvā(예경하고) + nisīdi(앉았다)', meaning: '세존을 보고 예경하고 앉았다', highlight: 'disvā...vanditvā' },
      { pali: 'anupagamma asappurisaṃ', breakdown: 'anupagamma(가까이하지 않고) + asappurisaṃ(어리석은 자를)', meaning: '어리석은 자를 가까이하지 않고', highlight: 'anupagamma' },
    ],
    tip: '절대분사가 여러 개 연속으로 나올 수 있습니다: 보고 + 예경하고 + 앉았다.',
    relatedLesson: '행복경의 katvāna = katvā와 같은 절대분사입니다.',
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
      { pali: 'dhammaṃ sotuṃ āgacchati', breakdown: 'dhammaṃ(법을) + sotuṃ(듣기 위해) + āgacchati(온다)', meaning: '법을 들으러 온다', highlight: 'sotuṃ' },
      { pali: 'na sakkoti kātuṃ', breakdown: 'na(~못하다) + sakkoti(할 수 있다) + kātuṃ(하기를)', meaning: '할 수 없다', highlight: 'kātuṃ' },
      { pali: 'passituṃ agamāsi', breakdown: 'passituṃ(보기 위해) + agamāsi(갔다)', meaning: '보기 위해 갔다', highlight: 'passituṃ' },
    ],
    tip: 'sakkoti(~할 수 있다) + 부정사는 "can + 동사"와 같습니다.',
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
      { pali: 'bhagavā etadavoca', breakdown: 'bhagavā(세존이) + etad(이것을) + avoca(말씀하셨다)', meaning: '세존이 이것을 말씀하셨다', highlight: 'bhagavā' },
      { pali: 'bhagavantaṃ etadavoca', breakdown: 'bhagavantaṃ(세존에게) + etad(이것을) + avoca(말씀드렸다)', meaning: '세존에게 이것을 말씀드렸다', highlight: 'bhagavantaṃ' },
      { pali: 'guṇavā puriso', breakdown: 'guṇavā(덕 있는) + puriso(사람)', meaning: '덕 있는 사람', highlight: 'guṇavā' },
    ],
    tip: '-vā로 끝나는 주격은 -vant 어간입니다. bhagavā, guṇavā, satimā(satimat) 등.',
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
      { pali: 'satthā devamanussānaṃ', breakdown: 'satthā(스승) + devamanussānaṃ(천신과 인간의)', meaning: '천신과 인간의 스승', highlight: 'satthā' },
      { pali: 'mātāpitūnaṃ dhanaṃ', breakdown: 'mātāpitūnaṃ(어머니와 아버지의) + dhanaṃ(재산)', meaning: '부모의 재산', highlight: 'mātāpitūnaṃ' },
      { pali: 'sukhī hotu', breakdown: 'sukhī(행복한 자가) + hotu(되기를)', meaning: '행복하기를 (행복한 자가 되기를)', highlight: 'sukhī' },
    ],
    tip: '-in 어간 예: kammī(업을 가진), sukhī(행복한), dhammī(법을 가진).',
    relatedLesson: '행복경의 Mātāpitu(어머니와 아버지의)는 ar-어간 소유격입니다.',
  },
]
