import type { TeachGrammarStep } from './types'

// De Silva Pali Primer Lesson 23~32 문법
// 복합어, 연성법 상세, 접두사/접미사, 수사/비교/불변어, 총정리

export const PRIMER_GRAMMAR_3: TeachGrammarStep[] = [

  // ═══════════════════════════════════════
  // Lesson 23-24: 복합어 Samāsa
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: '복합어란? — 여러 단어가 하나로',
    description:
      '빠알리어에서 두 개 이상의 단어가 합쳐져 하나의 단어가 됩니다. 경전에서 매우 빈번하게 나타나며, 복합어를 분해할 수 있어야 경전 독해가 가능합니다.',
    examples: [
      { pali: 'dhammacakkappavattana', breakdown: 'dhamma + cakka + pavattana', meaning: '법의 바퀴를 굴림 (전법륜경 제목)', highlight: 'dhamma+cakka+pavattana' },
      { pali: 'kāyānupassī', breakdown: 'kāya + anupassī', meaning: '몸을 관찰하는 (사념처경)', highlight: 'kāya+anupassī' },
      { pali: 'dukkhanirodhagāminī', breakdown: 'dukkha + nirodha + gāminī', meaning: '괴로움의 소멸로 이끄는 (전법륜경)', highlight: 'dukkha+nirodha+gāminī' },
    ],
    tip: '복합어를 만나면 "어디서 나눌 수 있을까?"를 먼저 생각하세요. 대부분 2~3개 단어의 조합입니다.',
  },

  {
    type: 'teach-grammar',
    title: '복합어 종류: 지배/상술/병렬/소유',
    description:
      '복합어는 구성 요소의 관계에 따라 4가지로 분류됩니다. Tappurisa(지배), Kammadhāraya(상술), Dvanda(병렬), Bahubbīhi(소유).',
    examples: [
      { pali: 'dhammasavanaṃ', breakdown: 'dhammaṃ + savanaṃ (Tappurisa)', meaning: '법을 들음 — 앞이 뒤를 지배 (행복경)', highlight: '지배' },
      { pali: 'maṅgalamuttamaṃ', breakdown: 'maṅgala + uttama (Kammadhāraya)', meaning: '최상의 행복 — 형용사+명사 (행복경)', highlight: '상술' },
      { pali: 'abhijjhādomanassaṃ', breakdown: 'abhijjhā + domanassa (Dvanda)', meaning: '탐욕과 근심 — 두 명사 나열 (사념처경)', highlight: '병렬' },
      { pali: 'pañcavaggiyā', breakdown: 'pañca + vagga (Bahubbīhi)', meaning: '다섯 무리의 — 전체가 형용사 (전법륜경)', highlight: '소유' },
    ],
    table: {
      label: '복합어 4종류',
      rows: [
        { case: 'Tappurisa (지배)', ending: '앞→뒤 지배', example: 'dhammasavanaṃ (행복경)', meaning: '법을 들음' },
        { case: 'Kammadhāraya (상술)', ending: '형용사+명사', example: 'maṅgalamuttamaṃ (행복경)', meaning: '최상의 행복' },
        { case: 'Dvanda (병렬)', ending: '나열', example: 'abhijjhādomanassaṃ (사념처경)', meaning: '탐욕과 근심' },
        { case: 'Bahubbīhi (소유)', ending: '전체=형용사', example: 'pañcavaggiyā (전법륜경)', meaning: '다섯 무리의' },
      ],
    },
    tip: 'Bahubbīhi가 가장 독특합니다. 전체 복합어가 형용사처럼 다른 명사를 수식합니다.',
  },

  {
    type: 'teach-grammar',
    title: '복합어 분해 연습',
    description:
      '경전에 나오는 긴 복합어를 분해하는 연습입니다. 분해할 수 있으면 뜻을 쉽게 파악할 수 있습니다.',
    examples: [
      { pali: 'kāmasukhallikānuyogo', breakdown: 'kāma + sukhallika + anuyoga', meaning: '감각적 쾌락에의 탐닉 (전법륜경)', highlight: '3어 복합' },
      { pali: 'attakilamathānuyogo', breakdown: 'atta + kilamatha + anuyoga', meaning: '자기 괴롭힘에의 전념 (전법륜경)', highlight: '3어 복합' },
      { pali: 'dukkhanirodhagāminī', breakdown: 'dukkha + nirodha + gāminī', meaning: '괴로움의 소멸로 이끄는 (전법륜경)', highlight: '3어 복합' },
      { pali: 'sammāsamādhi', breakdown: 'sammā + samādhi', meaning: '바른 삼매 (전법륜경 팔정도)', highlight: '2어 복합' },
    ],
    relatedLesson: '전법륜경(SN 56.11)의 긴 복합어들이 이 패턴입니다',
    tip: '긴 복합어도 2~4개의 단어로 분해하면 뜻이 명확해집니다.',
  },

  // ═══════════════════════════════════════
  // Lesson 25: 연성법 Sandhi 상세
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: '모음 연성법',
    description:
      '두 단어가 이어질 때 모음끼리 만나면 합쳐지거나 변합니다. 가장 흔한 모음 연성법 규칙입니다.',
    examples: [
      { pali: 'maṅgalamuttamaṃ', breakdown: 'maṅgalaṃ + uttamaṃ (ṃ탈락+u→mu)', meaning: '최상의 행복을 (행복경)', highlight: 'ṃ+u' },
      { pali: 'hidaṃ', breakdown: 'hi + idaṃ (i+i → i 탈락)', meaning: '만약 이것이 (무아경)', highlight: 'i+i' },
      { pali: 'panāniccaṃ', breakdown: 'pana + aniccaṃ (a+a → ā)', meaning: '그런데 무상한 (무아경)', highlight: 'a+a → ā' },
      { pali: 'nayidaṃ', breakdown: 'na + ayidaṃ (a+a → 탈락)', meaning: '이것은 ~않을 것이다 (무아경)', highlight: 'a+a' },
    ],
    table: {
      label: '모음 연성법 규칙',
      rows: [
        { case: 'a/ā + a/ā', ending: '→ ā', example: 'panāniccaṃ (무아경) pana+aniccaṃ', meaning: '하나가 탈락/장음화' },
        { case: 'a + u', ending: '→ 탈락 후 결합', example: 'maṅgalamuttamaṃ (행복경)', meaning: 'ṃ탈락+모음 결합' },
        { case: 'i + i', ending: '→ i (하나 탈락)', example: 'hidaṃ (무아경) hi+idaṃ', meaning: '두 모음 중 하나 탈락' },
        { case: 'a + a', ending: '→ 탈락', example: 'nayidaṃ (무아경) na+ayidaṃ', meaning: '모음 탈락' },
      ],
    },
    tip: '가장 흔한 것은 a+a → ā(하나 탈락)입니다. na + atthi → natthi는 경전에서 매우 자주 나옵니다.',
  },

  {
    type: 'teach-grammar',
    title: '자음 연성법',
    description:
      'ṃ(니가히따)이 자음 앞에 올 때 같은 조음 위치의 비음으로 변합니다. 자음 이중화도 자주 일어납니다.',
    examples: [
      { pali: 'Rūpañca', breakdown: 'Rūpaṃ + ca (ṃ+c → ñc)', meaning: '물질이 그리고 (무아경)', highlight: 'ṃ+c → ñc' },
      { pali: 'paṇḍitānañca', breakdown: 'paṇḍitānaṃ + ca (ṃ+c → ñc)', meaning: '현명한 이들의 그리고 (행복경)', highlight: 'ṃ+c → ñc' },
      { pali: 'etampi', breakdown: 'etaṃ + api (ṃ→m, a탈락)', meaning: '이것도 (행복경)', highlight: 'ṃ+a → m+p' },
      { pali: 'maṅgalamuttamanti', breakdown: 'maṅgalaṃ + uttamaṃ + iti', meaning: '최상의 행복이니라 (행복경)', highlight: '연성 3중' },
    ],
    table: {
      label: '자음 연성법 규칙',
      rows: [
        { case: 'ṃ + k/kh', ending: '→ ṅk/ṅkh', example: 'saṅkhittena (전법륜경)', meaning: '연구개 비음' },
        { case: 'ṃ + c/ch', ending: '→ ñc/ñch', example: 'Rūpañca (무아경) Rūpaṃ+ca', meaning: '경구개 비음' },
        { case: 'ṃ + t/th', ending: '→ nt/nth', example: 'saṃvattati → saṃvattati (무아경)', meaning: '치경 비음' },
        { case: 'ṃ + p/ph', ending: '→ mp/mph', example: 'etampi (행복경) etaṃ+api', meaning: '양순 비음' },
      ],
    },
    tip: 'ṃ은 뒤에 오는 자음의 조음 위치에 맞춰 변합니다. 경구개(ñ), 연구개(ṅ), 치경(n), 양순(m).',
  },

  {
    type: 'teach-grammar',
    title: '연성법 분해 실전',
    description:
      '실제 경전에 나오는 연성법 사례를 분해합니다. 분해할 수 있으면 사전에서 원래 단어를 찾을 수 있습니다.',
    examples: [
      { pali: 'maṅgalamuttamaṃ', breakdown: 'maṅgalaṃ + uttamaṃ (ṃ+u → mu)', meaning: '최상의 행복을 (행복경)', highlight: 'ṃ+u' },
      { pali: 'paṇḍitānañca', breakdown: 'paṇḍitānaṃ + ca (ṃ+c → ñc)', meaning: '현명한 이들의 그리고 (행복경)', highlight: 'ṃ+c → ñc' },
      { pali: 'Rūpañca', breakdown: 'Rūpaṃ + ca (ṃ+c → ñc)', meaning: '물질이 그리고 (무아경)', highlight: 'ṃ+c → ñc' },
      { pali: 'etampi', breakdown: 'etaṃ + api (ṃ+a → 탈락 후 p이중화)', meaning: '이것도 (행복경 반복구)', highlight: 'ṃ → m+p' },
    ],
    relatedLesson: '행복경(Khuddakapāṭha 5)에 연성법이 다양하게 나타납니다',
    tip: '경전을 읽다가 모르는 단어를 만나면, 연성법으로 합쳐진 것은 아닌지 확인하세요.',
  },

  // ═══════════════════════════════════════
  // Lesson 26-27: 접두사/접미사
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: '자주 쓰이는 접두사 14개',
    description:
      '접두사는 동사나 명사 앞에 붙어 의미를 변화시킵니다. 경전에서 가장 자주 나오는 접두사 14개를 정리합니다.',
    examples: [
      { pali: 'anattā', breakdown: 'an + attā (부정 접두사)', meaning: '무아 — 자아가 아닌 (무아경)', highlight: 'an-' },
      { pali: 'aniccaṃ', breakdown: 'a + nicca (부정 접두사)', meaning: '무상한 (무아경)', highlight: 'a-' },
      { pali: 'sammādiṭṭhi', breakdown: 'sammā + diṭṭhi (바른)', meaning: '바른 견해 (전법륜경 팔정도)', highlight: 'sammā-' },
      { pali: 'abhijjhādomanassaṃ', breakdown: 'abhi + jhā + domanassa', meaning: '탐욕과 근심 (사념처경)', highlight: 'abhi-' },
    ],
    table: {
      label: '주요 접두사',
      rows: [
        { case: 'a/an (부정)', ending: '~이 아닌', example: 'anattā (무아경), aniccaṃ (무아경)', meaning: '무아, 무상' },
        { case: 'abhi (위/강조)', ending: '위로, 더', example: 'abhijjhā (사념처경)', meaning: '탐욕' },
        { case: 'anu (따라)', ending: '~을 따라', example: 'kāyānupassī (사념처경)', meaning: '몸을 관찰하는' },
        { case: 'adhi (위에)', ending: '위에, 넘어', example: 'abhisambuddhā (전법륜경)', meaning: '완전히 깨달은' },
        { case: 'ni/nī (아래/밖)', ending: '밖으로', example: 'nirodha (전법륜경)', meaning: '소멸' },
        { case: 'pa/ppa (앞으로)', ending: '앞으로', example: 'pabbajitena (전법륜경)', meaning: '출가한 자에 의해' },
        { case: 'paṭi (반대/돌아가)', ending: '반대로', example: 'paṭipadā (전법륜경)', meaning: '도/실천' },
        { case: 'vi (분리/강조)', ending: '분리, 특별히', example: 'vipassanā, vimutta', meaning: '위빳사나, 해탈한' },
        { case: 'saṃ/sam (함께)', ending: '함께, 완전히', example: 'sammāsamādhi (전법륜경)', meaning: '바른 삼매' },
        { case: 'su (좋은)', ending: '좋은, 잘', example: 'susikkhito (행복경)', meaning: '잘 배운' },
        { case: 'ud (위로)', ending: '위로', example: 'udapādi (전법륜경)', meaning: '생겨났다' },
        { case: 'upa (가까이)', ending: '가까이', example: 'upaṭṭhānaṃ (행복경)', meaning: '보살핌' },
      ],
    },
    tip: '접두사를 알면 모르는 단어도 뜻을 추측할 수 있습니다. vi-(꿰뚫어) + passanā(봄) = 꿰뚫어 봄!',
  },

  {
    type: 'teach-grammar',
    title: '자주 쓰이는 접미사',
    description:
      '접미사는 단어 뒤에 붙어 품사를 바꾸거나 의미를 추가합니다. 명사→추상명사, 명사→형용사 등의 변환에 사용됩니다.',
    examples: [
      { pali: 'kataññutā', breakdown: 'kata + aññu + tā (추상명사)', meaning: '감사함 — 행해진 것을 아는 상태 (행복경)', highlight: '-tā' },
      { pali: 'pūjanīyānaṃ', breakdown: 'pūja + anīya + ānaṃ (의무분사)', meaning: '공양받을 이들의 (행복경)', highlight: '-nīya' },
      { pali: 'satimā', breakdown: 'sati + mant → satimā (소유)', meaning: '새김 있는 (사념처경)', highlight: '-mant' },
      { pali: 'aṭṭhaṅgiko', breakdown: 'aṭṭha + aṅga + ika (관련)', meaning: '여덟 가지로 된 (전법륜경)', highlight: '-ika' },
    ],
    table: {
      label: '주요 접미사',
      rows: [
        { case: '-tā (추상명사)', ending: '~함, ~성', example: 'kataññutā (행복경)', meaning: '감사함' },
        { case: '-tta/-ttana (추상)', ending: '~함', example: 'sovacassatā (행복경)', meaning: '말 잘 듣는 성품' },
        { case: '-ka (행위자)', ending: '~하는 자', example: 'sāvaka', meaning: '듣는 자, 제자' },
        { case: '-ika (관련)', ending: '~의, ~에 관한', example: 'aṭṭhaṅgiko (전법륜경)', meaning: '여덟 가지로 된' },
        { case: '-iya/-eyya (의무)', ending: '~할 만한', example: 'pūjanīyānaṃ (행복경)', meaning: '공양받을 이들의' },
        { case: '-maya (구성)', ending: '~으로 된', example: 'vipariṇāmadhammaṃ (무아경)', meaning: '변화하는 성질의' },
        { case: '-vant/-mant (소유)', ending: '~을 가진', example: 'satimā (사념처경)', meaning: '새김 있는' },
        { case: '-ī/-in (소유)', ending: '~을 가진', example: 'kāyānupassī (사념처경)', meaning: '몸을 관찰하는' },
      ],
    },
    tip: '-tā는 영어의 -ness/-ity와 같습니다. suñña(빈) → suññatā(공성, emptiness).',
  },

  // ═══════════════════════════════════════
  // Lesson 28-30: 수사/비교/기타
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: '수사 (기수/서수)',
    description:
      '경전에서 수를 나타내는 단어입니다. "사성제(4)", "팔정도(8)", "오온(5)" 등 핵심 교리에 수사가 자주 쓰입니다.',
    examples: [
      { pali: 'cattāri ariyasaccāni', breakdown: 'cattāri(4) + ariya(성스러운) + saccāni(진리들)', meaning: '네 가지 성스러운 진리 (전법륜경)', highlight: 'cattāri' },
      { pali: 'ariyo aṭṭhaṅgiko maggo', breakdown: 'aṭṭha(8) + aṅgika(가지의) + maggo(도)', meaning: '성스러운 여덟 가지의 도 (전법륜경)', highlight: 'aṭṭha' },
      { pali: 'pañcavaggiyā bhikkhū', breakdown: 'pañca(5) + vaggiya(무리의) + bhikkhū(비구들)', meaning: '다섯 무리의 비구들 (전법륜경)', highlight: 'pañca' },
    ],
    table: {
      label: '기수와 서수',
      rows: [
        { case: '1 eka', ending: '첫째 paṭhama', example: 'ekaṃ samayaṃ (전법륜경)', meaning: '한 때' },
        { case: '2 dvi/dve', ending: '둘째 dutiya', example: 'Dveme antā (전법륜경)', meaning: '이 두 극단' },
        { case: '3 ti/tayo', ending: '셋째 tatiya', example: 'tisso sikkhā', meaning: '세 가지 학' },
        { case: '4 catu/cattāro', ending: '넷째 catuttha', example: 'cattāri ariyasaccāni (전법륜경)', meaning: '네 성스러운 진리' },
        { case: '5 pañca', ending: '다섯째 pañcama', example: 'pañcavaggiyā (전법륜경)', meaning: '다섯 무리의' },
        { case: '6 cha', ending: '여섯째 chaṭṭha', example: 'cha āyatanāni', meaning: '6처' },
        { case: '7 satta', ending: '일곱째 sattama', example: 'satta bojjhaṅgā', meaning: '7각지' },
        { case: '8 aṭṭha', ending: '여덟째 aṭṭhama', example: 'aṭṭhaṅgiko maggo (전법륜경)', meaning: '여덟 가지의 도' },
        { case: '9 nava', ending: '아홉째 navama', example: 'nava aṅgāni', meaning: '9요소' },
        { case: '10 dasa', ending: '열째 dasama', example: 'dasa sīlāni', meaning: '10계' },
      ],
    },
    tip: 'cattāri ariyasaccāni(4성제), aṭṭhaṅgiko maggo(8정도), pañcakkhandhā(5온) — 교리 핵심에 수사가 들어갑니다.',
  },

  {
    type: 'teach-grammar',
    title: '비교급/최상급',
    description:
      '빠알리어에서 비교(-tara)와 최상(-tama)을 나타내는 방법입니다. uttama(최상의), seṭṭha(최고의) 같은 독립 단어도 있습니다.',
    examples: [
      { pali: 'etaṃ maṅgalamuttamaṃ', breakdown: 'etaṃ + maṅgalaṃ + uttamaṃ', meaning: '이것이 최상의 행복 (행복경 반복구)', highlight: 'uttama' },
      { pali: 'hīno', breakdown: 'hīna (열등한/비천한)', meaning: '저열한 (전법륜경 — 두 극단)', highlight: '열등' },
      { pali: 'majjhimā paṭipadā', breakdown: 'majjhima(중간의) + paṭipadā(도)', meaning: '중도 (전법륜경)', highlight: 'majjhima' },
      { pali: 'sabbatthamaparājitā', breakdown: 'sabbattha + a + parājita', meaning: '어디서나 패하지 않은 (행복경 마지막)', highlight: 'a+parājita' },
    ],
    table: {
      label: '비교급/최상급 형성',
      rows: [
        { case: '비교급 (-tara)', ending: '더 ~한', example: 'sundaratara', meaning: '더 아름다운' },
        { case: '최상급 (-tama)', ending: '가장 ~한', example: 'uttama (행복경)', meaning: '최상의' },
        { case: '최상 (uttama)', ending: '최상의', example: 'maṅgalamuttamaṃ (행복경)', meaning: '최상의 행복' },
        { case: '열등 (hīna)', ending: '저열한', example: 'hīno (전법륜경)', meaning: '저열한/비천한' },
      ],
    },
    tip: '비교 대상은 탈격으로 표현합니다. "A는 B보다 더~" = "A + B(탈격) + 비교급"',
  },

  {
    type: 'teach-grammar',
    title: '불변어(Indeclinables) 정리',
    description:
      '격변화하지 않는 단어들입니다. 접속사, 부사, 부정어, 강조어, 의문사 등이 포함됩니다. 경전의 뼈대를 이루는 중요한 단어들입니다.',
    examples: [
      { pali: 'Evaṃ me sutaṃ', breakdown: 'evaṃ(이와 같이) + me(나에 의해) + sutaṃ(들려진 것)', meaning: '이와 같이 나는 들었다 (행복경 서문)', highlight: 'evaṃ' },
      { pali: 'na kampati', breakdown: 'na(않다) + kampati(흔들린다)', meaning: '흔들리지 않는다 (행복경 11게)', highlight: 'na' },
      { pali: 'sabbattha sotthiṃ gacchanti', breakdown: 'sabbattha(어디서나) + sotthiṃ(안녕을) + gacchanti(간다)', meaning: '어디서나 안녕하게 간다 (행복경 결게)', highlight: 'sabbattha' },
    ],
    table: {
      label: '불변어 분류',
      rows: [
        { case: '접속사', ending: 'ca, vā, pana', example: 'ca (행복경 전체 반복)', meaning: '그리고' },
        { case: '부사', ending: 'evaṃ, idha, sabbattha', example: 'Evaṃ me sutaṃ (행복경)', meaning: '이와 같이' },
        { case: '부정', ending: 'na, mā', example: 'na kampati (행복경)', meaning: '~않다' },
        { case: '강조', ending: 'kho, hi, eva', example: 'Tatra kho (전법륜경)', meaning: '거기서 실로' },
        { case: '의문', ending: 'kiṃ, katamā', example: 'Taṃ kiṃ maññatha (무아경)', meaning: '무엇이라 생각하는가?' },
      ],
    },
    relatedLesson: '행복경의 Evaṃ, ca, na, sabbattha가 모두 불변어입니다',
    tip: '불변어는 형태가 변하지 않으므로 한 번 외우면 어디서든 바로 알아볼 수 있습니다.',
  },

  // ═══════════════════════════════════════
  // Lesson 31-32: 문법 총정리
  // ═══════════════════════════════════════

  {
    type: 'teach-grammar',
    title: '명사 격변화 총정리 — 어간별 비교',
    description:
      '지금까지 배운 모든 명사 어간의 주격 단수를 한눈에 비교합니다. 어간 유형을 파악하면 격변화 패턴을 예측할 수 있습니다.',
    examples: [
      { pali: 'maggo', breakdown: 'a-남성: magga + o', meaning: '도(道)가 (전법륜경)', highlight: '-o' },
      { pali: 'dukkhaṃ', breakdown: 'a-중성: dukkha + aṃ', meaning: '괴로움이 (전법륜경)', highlight: '-aṃ' },
      { pali: 'paṭipadā', breakdown: 'ā-여성: paṭipadā', meaning: '도/실천이 (전법륜경)', highlight: '-ā' },
      { pali: 'bhagavā', breakdown: 'ant-남성: bhagavant → bhagavā', meaning: '세존께서 (전법륜경)', highlight: '-ā/-aṃ' },
    ],
    table: {
      label: '어간별 주격 단수 비교',
      rows: [
        { case: 'a-남성', ending: '-o', example: 'maggo (전법륜경)', meaning: '도(道)가' },
        { case: 'a-중성', ending: '-aṃ', example: 'dukkhaṃ (전법륜경)', meaning: '괴로움이' },
        { case: 'ā-여성', ending: '-ā', example: 'vedanā (무아경)', meaning: '느낌이' },
        { case: 'i-남성', ending: '-i', example: 'aggi', meaning: '불이' },
        { case: 'i-여성', ending: '-i', example: 'sati (사념처경)', meaning: '새김이' },
        { case: 'u-남성', ending: '-u', example: 'bhikkhu (전법륜경)', meaning: '비구가' },
        { case: 'u-여성', ending: '-u', example: 'dhātu', meaning: '요소가' },
        { case: 'ant-남성', ending: '-ā/-aṃ', example: 'bhagavā (전법륜경)', meaning: '세존께서' },
        { case: 'ar-남성', ending: '-ā', example: 'satthā', meaning: '스승께서' },
      ],
    },
    tip: '가장 흔한 것은 a-어간(남/중)과 ā-어간(여)입니다. 이 3가지만 확실히 외우면 경전 명사의 70% 이상을 커버합니다.',
  },

  {
    type: 'teach-grammar',
    title: '동사 활용 총정리 — 시제별 비교',
    description:
      '모든 동사 활용 형태를 3인칭 단수 기준으로 비교합니다. gacchati(가다) 어근을 예로 들어 정리합니다.',
    examples: [
      { pali: 'viharati', breakdown: 'vi + harati (현재형)', meaning: '머무신다 (전법륜경/행복경)', highlight: '-ti' },
      { pali: 'āmantesi', breakdown: 'ā + manteti 과거형', meaning: '말씀하셨다 (전법륜경)', highlight: '-esi' },
      { pali: 'abhavissa', breakdown: 'bhavati 가정법 과거', meaning: '~이었다면 (무아경)', highlight: '-issa' },
      { pali: 'katvāna', breakdown: 'karoti + tvāna (절대분사)', meaning: '행하고 나서 (행복경)', highlight: '-tvāna' },
    ],
    table: {
      label: '동사 활용 총정리 — 경전 실례',
      rows: [
        { case: '현재형', ending: '-ti', example: 'viharati (전법륜경)', meaning: '머무신다' },
        { case: '과거형', ending: '-esi/-i', example: 'āmantesi (전법륜경)', meaning: '말씀하셨다' },
        { case: '미래형', ending: '-ssati', example: 'gamissati', meaning: '갈 것이다' },
        { case: '명령형', ending: '-hi/-tu', example: 'brūhi (행복경)', meaning: '말씀해 주소서' },
        { case: '가정법', ending: '-eyya/-issa', example: 'abhavissa (무아경)', meaning: '~이었다면' },
        { case: '수동분사', ending: '-tabba', example: 'sevitabbā (전법륜경)', meaning: '가까이해야 할' },
        { case: '사역형', ending: '-āpeti', example: 'gamāpeti', meaning: '가게 한다' },
        { case: '현재분사', ending: '-anto/-māna', example: 'ākaṅkhamānā (행복경)', meaning: '바라는' },
        { case: '과거분사', ending: '-ta/-ita', example: 'susikkhito (행복경)', meaning: '잘 배운' },
        { case: '절대분사', ending: '-tvā/-tvāna', example: 'katvāna (행복경)', meaning: '행하고 나서' },
        { case: '부정사', ending: '-tuṃ', example: 'samanupassituṃ (무아경)', meaning: '간주하기 위해' },
      ],
    },
    tip: '경전에서 가장 자주 나오는 것은 현재형(-ti), 과거형(-i), 과거분사(-ta), 절대분사(-tvā)입니다. 이 4가지를 우선 익히세요.',
  },
]
