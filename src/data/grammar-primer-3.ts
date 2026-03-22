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
      { pali: 'dhammacakka', breakdown: 'dhamma + cakka', meaning: '법의 바퀴 (법륜)', highlight: 'dhamma+cakka' },
      { pali: 'mahāsatipaṭṭhāna', breakdown: 'mahā + satipaṭṭhāna', meaning: '큰 새김의 확립', highlight: 'mahā+sati' },
      { pali: 'dukkhanirodha', breakdown: 'dukkha + nirodha', meaning: '괴로움의 소멸', highlight: 'dukkha+nirodha' },
    ],
    tip: '복합어를 만나면 "어디서 나눌 수 있을까?"를 먼저 생각하세요. 대부분 2~3개 단어의 조합입니다.',
  },

  {
    type: 'teach-grammar',
    title: '복합어 종류: 지배/상술/병렬/소유',
    description:
      '복합어는 구성 요소의 관계에 따라 4가지로 분류됩니다. Tappurisa(지배), Kammadhāraya(상술), Dvanda(병렬), Bahubbīhi(소유).',
    examples: [
      { pali: 'dhammacakka', breakdown: 'dhammaṃ + cakkaṃ (Tappurisa)', meaning: '법의 바퀴 — 앞이 뒤를 지배', highlight: '지배' },
      { pali: 'mahārājā', breakdown: 'mahā + rājā (Kammadhāraya)', meaning: '위대한 왕 — 형용사+명사', highlight: '상술' },
      { pali: 'cakkhusota', breakdown: 'cakkhu + sota (Dvanda)', meaning: '눈과 귀 — 두 명사 나열', highlight: '병렬' },
      { pali: 'mahāpañña', breakdown: 'mahā + paññā (Bahubbīhi)', meaning: '큰 지혜를 가진 — 전체가 형용사', highlight: '소유' },
    ],
    table: {
      label: '복합어 4종류',
      rows: [
        { case: 'Tappurisa (지배)', ending: '앞→뒤 지배', example: 'dhammacakka', meaning: '법의 바퀴' },
        { case: 'Kammadhāraya (상술)', ending: '형용사+명사', example: 'mahārājā', meaning: '위대한 왕' },
        { case: 'Dvanda (병렬)', ending: '나열', example: 'cakkhusota', meaning: '눈과 귀' },
        { case: 'Bahubbīhi (소유)', ending: '전체=형용사', example: 'mahāpañña', meaning: '큰 지혜를 가진' },
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
      { pali: 'kāmasukhallikānuyogo', breakdown: 'kāma + sukha + allikā + anuyoga', meaning: '감각적 쾌락에의 탐닉', highlight: '4어 복합' },
      { pali: 'attakilamathānuyogo', breakdown: 'atta + kilamatha + anuyoga', meaning: '자기 괴롭힘에의 전념', highlight: '3어 복합' },
      { pali: 'dukkhanirodhagāminī', breakdown: 'dukkha + nirodha + gāminī', meaning: '괴로움의 소멸로 이끄는', highlight: '3어 복합' },
    ],
    relatedLesson: '전법륜경의 긴 복합어들이 이 패턴입니다',
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
      { pali: 'natthi', breakdown: 'na + atthi (a+a → a 탈락, tt 이중화)', meaning: '~이 없다', highlight: 'a+a' },
      { pali: 'ceti', breakdown: 'ca + iti (a+i → e, 드물게)', meaning: '~라고 그리고', highlight: 'a+i → e' },
      { pali: 'sodaka', breakdown: 'sa + udaka (a+u → o)', meaning: '물이 있는', highlight: 'a+u → o' },
      { pali: 'patyanta', breakdown: 'pati + anta (i+a → ya, 드물게)', meaning: '경계', highlight: 'i+a → ya' },
    ],
    table: {
      label: '모음 연성법 규칙',
      rows: [
        { case: 'a/ā + a/ā', ending: '→ ā', example: 'na + atthi → natthi', meaning: '하나가 탈락' },
        { case: 'a + i', ending: '→ e (드물게)', example: 'ca + iti → ceti', meaning: '두 모음이 합침' },
        { case: 'a + u', ending: '→ o', example: 'sa + udaka → sodaka', meaning: '두 모음이 합침' },
        { case: 'i + a', ending: '→ ya (드물게)', example: 'pati + anta → patyanta', meaning: 'i가 반모음 y로' },
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
      { pali: 'tañca', breakdown: 'taṃ + ca (ṃ+c → ñc)', meaning: '그것을 그리고', highlight: 'ṃ+c → ñc' },
      { pali: 'taṅkho', breakdown: 'taṃ + kho (ṃ+kh → ṅkh)', meaning: '그것을 실로', highlight: 'ṃ+k → ṅk' },
      { pali: 'udgacchati', breakdown: 'ut + gacchati (t+유성 → d)', meaning: '위로 간다', highlight: 't → d' },
      { pali: 'natthi', breakdown: 'na + atthi (이중 자음화)', meaning: '없다', highlight: 'tt 이중화' },
    ],
    table: {
      label: '자음 연성법 규칙',
      rows: [
        { case: 'ṃ + k/kh', ending: '→ ṅk/ṅkh', example: 'taṃ + kho → taṅkho', meaning: '연구개 비음' },
        { case: 'ṃ + c/ch', ending: '→ ñc/ñch', example: 'taṃ + ca → tañca', meaning: '경구개 비음' },
        { case: 'ṃ + t/th', ending: '→ nt/nth', example: 'taṃ + ti → tanti', meaning: '치경 비음' },
        { case: 'ṃ + p/ph', ending: '→ mp/mph', example: 'taṃ + pi → tampi', meaning: '양순 비음' },
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
      { pali: 'maṅgalamuttamaṃ', breakdown: 'maṅgalaṃ + uttamaṃ (ṃ+u → mu)', meaning: '최상의 행복을', highlight: 'ṃ+u' },
      { pali: 'paṇḍitānañca', breakdown: 'paṇḍitānaṃ + ca (ṃ+c → ñc)', meaning: '현명한 자들의 그리고', highlight: 'ṃ+c → ñc' },
      { pali: 'etampi', breakdown: 'etaṃ + api (ṃ+a → 탈락 후 p 이중화)', meaning: '이것도', highlight: 'ṃ → m+p' },
    ],
    relatedLesson: '행복경에 16가지 연성법이 모두 나옵니다',
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
      { pali: 'anatta', breakdown: 'an + atta (부정 접두사)', meaning: '무아 — 자아가 아닌', highlight: 'an-' },
      { pali: 'vipassanā', breakdown: 'vi + passanā (분리/강조)', meaning: '위빳사나 — 꿰뚫어 봄', highlight: 'vi-' },
      { pali: 'sammādiṭṭhi', breakdown: 'sammā + diṭṭhi (바른)', meaning: '바른 견해', highlight: 'sammā-' },
      { pali: 'nibbāna', breakdown: 'ni + bāna (밖으로/아래)', meaning: '열반 — 꺼짐', highlight: 'ni-' },
    ],
    table: {
      label: '주요 접두사',
      rows: [
        { case: 'a/an (부정)', ending: '~이 아닌', example: 'anatta, anicca', meaning: '무아, 무상' },
        { case: 'abhi (위/강조)', ending: '위로, 더', example: 'abhidhamma', meaning: '아비담마' },
        { case: 'anu (따라)', ending: '~을 따라', example: 'anupassī', meaning: '관찰하는' },
        { case: 'adhi (위에)', ending: '위에, 넘어', example: 'adhigama', meaning: '도달' },
        { case: 'ni/nī (아래/밖)', ending: '밖으로', example: 'nibbāna, nikkhamati', meaning: '열반, 나가다' },
        { case: 'pa/ppa (앞으로)', ending: '앞으로', example: 'paññā, pabbajja', meaning: '지혜, 출가' },
        { case: 'paṭi (반대/돌아가)', ending: '반대로', example: 'paṭipadā, paṭisandhi', meaning: '도, 결생' },
        { case: 'vi (분리/강조)', ending: '분리, 특별히', example: 'vipassanā, vimutta', meaning: '위빳사나, 해탈한' },
        { case: 'saṃ/sam (함께)', ending: '함께, 완전히', example: 'saṅgha, samādhi', meaning: '승가, 삼매' },
        { case: 'su (좋은)', ending: '좋은, 잘', example: 'sukha, sugata', meaning: '행복, 선서' },
        { case: 'ud (위로)', ending: '위로', example: 'udaya, uppāda', meaning: '생겨남, 발생' },
        { case: 'upa (가까이)', ending: '가까이', example: 'upāsaka, upekkhā', meaning: '우바새, 평정' },
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
      { pali: 'suññatā', breakdown: 'suñña + tā (추상명사)', meaning: '공성 — 비어있음', highlight: '-tā' },
      { pali: 'sāvaka', breakdown: 'su + aka (행위자)', meaning: '듣는 자, 제자', highlight: '-ka' },
      { pali: 'manomaya', breakdown: 'mano + maya (구성)', meaning: '마음으로 이루어진', highlight: '-maya' },
      { pali: 'satimant', breakdown: 'sati + mant (소유)', meaning: '새김 있는', highlight: '-mant' },
    ],
    table: {
      label: '주요 접미사',
      rows: [
        { case: '-tā (추상명사)', ending: '~함, ~성', example: 'suññatā, kataññutā', meaning: '공성, 감사' },
        { case: '-tta/-ttana (추상)', ending: '~함', example: 'sīlabbata', meaning: '계행' },
        { case: '-ka (행위자)', ending: '~하는 자', example: 'sāvaka', meaning: '듣는 자, 제자' },
        { case: '-ika (관련)', ending: '~의, ~에 관한', example: 'lokika', meaning: '세속의' },
        { case: '-iya/-eyya (의무)', ending: '~할 만한', example: 'pūjanīya', meaning: '공양받을만한' },
        { case: '-maya (구성)', ending: '~으로 된', example: 'manomaya', meaning: '마음으로 이루어진' },
        { case: '-vant/-mant (소유)', ending: '~을 가진', example: 'guṇavant, satimant', meaning: '덕 있는, 새김 있는' },
        { case: '-ī/-in (소유)', ending: '~을 가진', example: 'sukhī, dhammī', meaning: '행복한, 법을 가진' },
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
      { pali: 'cattāri ariyasaccāni', breakdown: 'cattāri(4) + ariya(성스러운) + saccāni(진리들)', meaning: '네 가지 성스러운 진리', highlight: 'cattāri' },
      { pali: 'aṭṭhaṅgiko maggo', breakdown: 'aṭṭha(8) + aṅgika(가지의) + maggo(도)', meaning: '여덟 가지의 도', highlight: 'aṭṭha' },
      { pali: 'pañcakkhandhā', breakdown: 'pañca(5) + khandhā(무더기들)', meaning: '다섯 무더기 (오온)', highlight: 'pañca' },
    ],
    table: {
      label: '기수와 서수',
      rows: [
        { case: '1 eka', ending: '첫째 paṭhama', example: 'ekaṃ samayaṃ', meaning: '한때' },
        { case: '2 dvi/dve', ending: '둘째 dutiya', example: 'dve dhammā', meaning: '두 가지 법' },
        { case: '3 ti/tayo', ending: '셋째 tatiya', example: 'tisso sikkhā', meaning: '세 가지 학' },
        { case: '4 catu/cattāro', ending: '넷째 catuttha', example: 'cattāri saccāni', meaning: '네 진리' },
        { case: '5 pañca', ending: '다섯째 pañcama', example: 'pañcakkhandhā', meaning: '오온' },
        { case: '6 cha', ending: '여섯째 chaṭṭha', example: 'cha āyatanāni', meaning: '6처' },
        { case: '7 satta', ending: '일곱째 sattama', example: 'satta bojjhaṅgā', meaning: '7각지' },
        { case: '8 aṭṭha', ending: '여덟째 aṭṭhama', example: 'aṭṭhaṅgiko', meaning: '여덟 가지의' },
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
      { pali: 'sundaratara', breakdown: 'sundara + tara (비교급)', meaning: '더 아름다운', highlight: '-tara' },
      { pali: 'sundaratama', breakdown: 'sundara + tama (최상급)', meaning: '가장 아름다운', highlight: '-tama' },
      { pali: 'etaṃ maṅgalamuttamaṃ', breakdown: 'etaṃ + maṅgalaṃ + uttamaṃ', meaning: '이것이 최상의 행복', highlight: 'uttama' },
      { pali: 'buddho garuṃ sundarataro', breakdown: 'buddho + garuṃ(탈격) + sundarataro', meaning: '붓다는 스승보다 더 아름답다', highlight: '탈격 비교' },
    ],
    table: {
      label: '비교급/최상급 형성',
      rows: [
        { case: '비교급 (-tara)', ending: '더 ~한', example: 'sundaratara', meaning: '더 아름다운' },
        { case: '최상급 (-tama)', ending: '가장 ~한', example: 'sundaratama', meaning: '가장 아름다운' },
        { case: '최상 (uttama)', ending: '최상의', example: 'maṅgalamuttamaṃ', meaning: '최상의 행복' },
        { case: '최고 (seṭṭha)', ending: '최고의', example: 'seṭṭho dhammo', meaning: '최고의 법' },
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
      { pali: 'evaṃ me sutaṃ', breakdown: 'evaṃ(이와 같이) + me(나는) + sutaṃ(들었다)', meaning: '이와 같이 나는 들었다', highlight: 'evaṃ' },
      { pali: 'idha bhikkhave', breakdown: 'idha(여기에) + bhikkhave(비구들이여)', meaning: '여기에서 비구들이여', highlight: 'idha' },
      { pali: 'kiṃ nu kho', breakdown: 'kiṃ(무엇) + nu(과연) + kho(실로)', meaning: '과연 무엇인가?', highlight: 'kiṃ' },
    ],
    table: {
      label: '불변어 분류',
      rows: [
        { case: '접속사', ending: 'ca, vā, pana, atha', example: 'ca(그리고), vā(또는)', meaning: '문장 연결' },
        { case: '부사', ending: 'evaṃ, tathā, idha, sabbattha', example: 'evaṃ(이와 같이)', meaning: '동사 수식' },
        { case: '부정', ending: 'na, mā', example: 'na(아니다), mā(~말라)', meaning: '부정/금지' },
        { case: '강조', ending: 'kho, hi, eva, pana', example: 'kho(실로), eva(바로)', meaning: '의미 강조' },
        { case: '의문', ending: 'kiṃ, kuto, kadā', example: 'kiṃ(무엇?), kadā(언제?)', meaning: '의문문' },
      ],
    },
    relatedLesson: '행복경 서문의 evaṃ, ca, na가 모두 불변어입니다',
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
      { pali: 'buddho', breakdown: 'a-남성: buddha + o', meaning: '붓다가', highlight: '-o' },
      { pali: 'dhammaṃ', breakdown: 'a-중성: dhamma + aṃ', meaning: '법이/법을', highlight: '-aṃ' },
      { pali: 'paññā', breakdown: 'ā-여성: paññā', meaning: '지혜가', highlight: '-ā' },
      { pali: 'bhagavā', breakdown: 'ant-남성: bhagavant → bhagavā', meaning: '세존께서', highlight: '-ā/-aṃ' },
    ],
    table: {
      label: '어간별 주격 단수 비교',
      rows: [
        { case: 'a-남성', ending: '-o', example: 'buddho', meaning: '붓다가' },
        { case: 'a-중성', ending: '-aṃ', example: 'dhammaṃ', meaning: '법이/법을' },
        { case: 'ā-여성', ending: '-ā', example: 'paññā', meaning: '지혜가' },
        { case: 'i-남성', ending: '-i', example: 'aggi', meaning: '불이' },
        { case: 'i-여성', ending: '-i', example: 'bhūmi', meaning: '땅이' },
        { case: 'u-남성', ending: '-u', example: 'bhikkhu', meaning: '비구가' },
        { case: 'u-여성', ending: '-u', example: 'dhātu', meaning: '요소가' },
        { case: 'ant-남성', ending: '-ā/-aṃ', example: 'bhagavā', meaning: '세존께서' },
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
      { pali: 'gacchati', breakdown: 'gam + chati (현재형)', meaning: '간다', highlight: '-ti' },
      { pali: 'agacchi', breakdown: 'a + gacch + i (과거형)', meaning: '갔다', highlight: '-i' },
      { pali: 'gamissati', breakdown: 'gam + issati (미래형)', meaning: '갈 것이다', highlight: '-ssati' },
      { pali: 'gantvā', breakdown: 'gam + tvā (절대분사)', meaning: '가고 나서', highlight: '-tvā' },
    ],
    table: {
      label: '동사 활용 총정리 (3인칭 단수)',
      rows: [
        { case: '현재형', ending: '-ti', example: 'gacchati', meaning: '간다' },
        { case: '과거형', ending: '-i', example: 'agacchi', meaning: '갔다' },
        { case: '미래형', ending: '-ssati', example: 'gamissati', meaning: '갈 것이다' },
        { case: '명령형', ending: '-tu', example: 'gacchatu', meaning: '가라' },
        { case: '희구법', ending: '-eyya', example: 'gaccheyya', meaning: '갈 수 있다/가야 한다' },
        { case: '수동태', ending: '-iyati', example: 'gamiyati', meaning: '가게 된다' },
        { case: '사역형', ending: '-āpeti', example: 'gamāpeti', meaning: '가게 한다' },
        { case: '현재분사', ending: '-anto', example: 'gacchanto', meaning: '가는 (자)' },
        { case: '과거분사', ending: '-ta', example: 'gata', meaning: '간, 도달한' },
        { case: '절대분사', ending: '-tvā', example: 'gantvā', meaning: '가고 나서' },
        { case: '부정사', ending: '-tuṃ', example: 'gantuṃ', meaning: '가기 위해' },
      ],
    },
    tip: '경전에서 가장 자주 나오는 것은 현재형(-ti), 과거형(-i), 과거분사(-ta), 절대분사(-tvā)입니다. 이 4가지를 우선 익히세요.',
  },
]
