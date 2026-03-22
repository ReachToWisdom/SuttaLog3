// SSOT: 경전별 문법 설명 스텝
// 각 경전에서 처음 만나는 문법 포인트를 정리
import type { TeachGrammarStep } from './types'
import { MANGALA_SANDHI_NOTES, DHAMMACAKKA_SANDHI_NOTES, ANATTA_SANDHI_NOTES, SATIPATTHANA_SANDHI_NOTES } from './grammar-sandhi-notes'

// ── 행복경 문법 ──

export const MANGALA_GRAMMAR: TeachGrammarStep[] = [
  {
    type: 'teach-grammar',
    title: '불변어 (Indeclinable)',
    description: '빠알리어에는 격변화 없이 형태가 변하지 않는 단어들이 있습니다. 부사, 접속사, 감탄사 등이 여기 해당합니다.',
    examples: [
      { pali: 'Evaṃ', breakdown: '변화 없음 (부사)', meaning: '이와 같이', highlight: 'Evaṃ' },
      { pali: 'ca', breakdown: '변화 없음 (접속사)', meaning: '~과, 그리고', highlight: 'ca' },
      { pali: 'na', breakdown: '변화 없음 (부정사)', meaning: '~않다', highlight: 'na' },
    ],
    tip: '불변어는 격변화를 외울 필요가 없어서 가장 쉬운 단어들입니다!',
    relatedLesson: '전법륜경·무아경·사념처경에서도 ca, na 등 불변어가 계속 등장합니다.',
  },
  {
    type: 'teach-grammar',
    title: '연성법 (Sandhi): 단어 병합',
    description: '빠알리어에서 두 단어가 만나면 소리가 합쳐지는 경우가 많습니다. 이것을 연성법(sandhi)이라 합니다. 행복경에는 16가지 연성법이 모두 나옵니다.',
    examples: [
      { pali: 'maṅgalamuttamaṃ', breakdown: 'maṅgalaṃ + uttamaṃ → maṅgalam-uttamaṃ', meaning: '최상의 행복을', highlight: 'm + u' },
      { pali: 'paṇḍitānañca', breakdown: 'paṇḍitānaṃ + ca → paṇḍitānañ-ca', meaning: '현명한 이들의 + 그리고', highlight: 'ṃ + c' },
      { pali: 'Dānañca', breakdown: 'Dānaṃ + ca → Dānañ-ca', meaning: '보시 + 그리고', highlight: 'ṃ + c' },
    ],
    tip: '연성법은 규칙을 외우기보다, 많이 읽으면 자연스럽게 익숙해집니다. 분해해서 원래 형태를 찾는 연습이 중요합니다.',
    relatedLesson: '보배경·자비경에서도 동일한 연성법이 자주 나옵니다. 전법륜경에서는 더 긴 복합어에서 연성법을 만납니다.',
  },
  // 본문 변형 보충 (연성법 상세, 관계/지시대명사, ant-어간)
  ...MANGALA_SANDHI_NOTES,
  {
    type: 'teach-grammar',
    title: '명사의 격 (Case) 기초',
    description: '빠알리어 명사는 문장에서 역할에 따라 형태가 변합니다. 이것을 "격변화"라 합니다. 한국어의 은/는/이/가/을/를/의/에서 와 비슷합니다.',
    examples: [
      { pali: 'bhagavā', breakdown: 'bhagavant + ā (주격)', meaning: '세존께서 (주어)', highlight: '-ā' },
      { pali: 'Sāvatthiyaṃ', breakdown: 'Sāvatthī + yaṃ (처소격)', meaning: '사왓티에서 (장소)', highlight: '-yaṃ' },
      { pali: 'ārāme', breakdown: 'ārāma + e (처소격)', meaning: '동산에서 (장소)', highlight: '-e' },
      { pali: 'Anāthapiṇḍikassa', breakdown: 'Anāthapiṇḍika + ssa (소유격)', meaning: '아나타삔디까의 (소유)', highlight: '-ssa' },
    ],
    table: {
      label: '격변화 기본 (a 어간 남성)',
      rows: [
        { case: '주격 (~이/가)', ending: '-o / -ā', example: 'dhammo / dhammā', meaning: '법이 / 법들이' },
        { case: '목적격 (~을/를)', ending: '-aṃ / -e', example: 'dhammaṃ / dhamme', meaning: '법을 / 법들을' },
        { case: '구격 (~에 의해)', ending: '-ena / -ehi', example: 'dhammena / dhammehi', meaning: '법에 의해' },
        { case: '소유격 (~의)', ending: '-assa / -ānaṃ', example: 'dhammassa / dhammānaṃ', meaning: '법의 / 법들의' },
        { case: '처소격 (~에서)', ending: '-e / -esu', example: 'dhamme / dhammesu', meaning: '법에서 / 법들에서' },
      ],
    },
    tip: '처음엔 주격(~이)과 처소격(~에서)만 구분해도 충분합니다. 나머지는 경전을 읽으면서 자연스럽게 배웁니다.',
    relatedLesson: '보배경에서 구격(-ena)이 핵심 역할을 하고, 전법륜경에서 중성 주격(-aṃ)이 반복됩니다.',
  },
]

// ── 전법륜경 문법 ──

export const DHAMMACAKKA_GRAMMAR: TeachGrammarStep[] = [
  {
    type: 'teach-grammar',
    title: '동사 활용: 현재형',
    description: '빠알리어 동사는 인칭과 수에 따라 형태가 변합니다. 전법륜경에서 처음으로 다양한 동사 형태를 만납니다.',
    examples: [
      { pali: 'viharati', breakdown: 'vi + harati (현재 3인칭 단수)', meaning: '머무시다', highlight: '-ti' },
      { pali: 'āmantesi', breakdown: 'ā + manteti (과거 3인칭 단수)', meaning: '말씀하셨다', highlight: '-esi' },
      { pali: 'abhisambuddhā', breakdown: 'abhi + sam + budh + tā (과거분사)', meaning: '완전히 깨달은', highlight: '-tā' },
    ],
    table: {
      label: '동사 현재형 활용 (viharati 류)',
      rows: [
        { case: '3인칭 단수', ending: '-ti', example: 'viharati', meaning: '그는 머문다' },
        { case: '3인칭 복수', ending: '-nti', example: 'viharanti', meaning: '그들은 머문다' },
        { case: '1인칭 단수', ending: '-mi', example: 'viharāmi', meaning: '나는 머문다' },
        { case: '2인칭 단수', ending: '-si', example: 'viharasi', meaning: '너는 머문다' },
        { case: '명령형', ending: '-tu / -hi', example: 'viharatu', meaning: '머무시라' },
      ],
    },
    relatedLesson: '행복경의 viharati(머무시다), brūhi(말씀하소서)도 같은 패턴!',
    tip: '동사 어미 -ti가 보이면 "현재 3인칭 단수"입니다. 가장 자주 나오는 형태입니다.',
  },
  {
    type: 'teach-grammar',
    title: '사성제의 격변화 패턴',
    description: '사성제(四聖諦)는 동일한 문장 구조가 4번 반복됩니다. 이 반복 패턴을 통해 격변화를 자연스럽게 익힐 수 있습니다.',
    examples: [
      { pali: 'dukkhaṃ ariyasaccaṃ', breakdown: 'dukkha + ṃ (중성 주격) + ariyasacca + ṃ', meaning: '괴로움의 성스러운 진리', highlight: '-aṃ' },
      { pali: 'dukkhasamudayaṃ', breakdown: 'dukkha + samudaya + ṃ (중성 주격)', meaning: '괴로움의 발생', highlight: 'samudaya' },
      { pali: 'dukkhanirodhaṃ', breakdown: 'dukkha + nirodha + ṃ (중성 주격)', meaning: '괴로움의 소멸', highlight: 'nirodha' },
      { pali: 'dukkhanirodhagāminī paṭipadā', breakdown: 'dukkha + nirodha + gāminī + paṭipadā', meaning: '괴로움의 소멸로 이끄는 도', highlight: 'gāminī' },
    ],
    tip: '사성제는 dukkha(괴로움)에 다른 단어가 붙는 복합어입니다. dukkha 하나만 알면 4개를 이해할 수 있습니다.',
    relatedLesson: '행복경에서 배운 중성 주격(-aṃ)이 사성제 4항목 모두에 사용됩니다. 사념처경 법념처에서 사성제가 다시 나옵니다.',
  },
  {
    type: 'teach-grammar',
    title: '팔정도: 접두사 sammā-',
    description: 'sammā는 "바른/올바른"이라는 접두사입니다. 팔정도의 8가지 항목 모두 sammā-로 시작합니다.',
    examples: [
      { pali: 'sammādiṭṭhi', breakdown: 'sammā + diṭṭhi', meaning: '바른 견해', highlight: 'sammā' },
      { pali: 'sammāsaṅkappo', breakdown: 'sammā + saṅkappa + o', meaning: '바른 사유', highlight: 'sammā' },
      { pali: 'sammāvācā', breakdown: 'sammā + vācā', meaning: '바른 말', highlight: 'sammā' },
      { pali: 'sammāsamādhi', breakdown: 'sammā + samādhi', meaning: '바른 삼매', highlight: 'sammā' },
    ],
    tip: 'sammā(바른) ↔ micchā(잘못된). 이 대비를 기억하면 많은 빠알리 단어를 이해할 수 있습니다.',
    relatedLesson: '사념처경 법념처에서 팔정도가 다시 등장합니다. sammādiṭṭhi(바른 견해)가 수행의 출발점입니다.',
  },
  // 본문 변형 보충 (미래수동분사, 불규칙 과거형, 축약, 절대분사)
  ...DHAMMACAKKA_SANDHI_NOTES,
]

// ── 무아경 문법 ──

export const ANATTA_GRAMMAR: TeachGrammarStep[] = [
  {
    type: 'teach-grammar',
    title: '오온 (五蘊) 격변화',
    description: '무아경에서 오온(rūpa, vedanā, saññā, saṅkhārā, viññāṇa)은 같은 문장 패턴으로 5번 반복됩니다. 각각 문법적 성별이 다릅니다.',
    examples: [
      { pali: 'rūpaṃ anattā', breakdown: 'rūpa + ṃ (중성 주격)', meaning: '물질은 자아가 아니다', highlight: '-aṃ' },
      { pali: 'vedanā anattā', breakdown: 'vedanā (여성 주격)', meaning: '느낌은 자아가 아니다', highlight: '-ā' },
      { pali: 'viññāṇaṃ anattā', breakdown: 'viññāṇa + ṃ (중성 주격)', meaning: '의식은 자아가 아니다', highlight: '-aṃ' },
    ],
    table: {
      label: '오온의 문법적 성별',
      rows: [
        { case: 'rūpa (물질)', ending: '중성', example: 'rūpaṃ', meaning: '물질은' },
        { case: 'vedanā (느낌)', ending: '여성', example: 'vedanā', meaning: '느낌은' },
        { case: 'saññā (인식)', ending: '여성', example: 'saññā', meaning: '인식은' },
        { case: 'saṅkhārā (형성)', ending: '남성 복수', example: 'saṅkhārā', meaning: '형성들은' },
        { case: 'viññāṇa (의식)', ending: '중성', example: 'viññāṇaṃ', meaning: '의식은' },
      ],
    },
    relatedLesson: '전법륜경의 pañcupādānakkhandhā(오취온)가 여기서 하나씩 분석됩니다.',
    tip: '같은 패턴이 5번 반복되므로, 하나만 이해하면 나머지 4개도 자동으로 이해됩니다!',
  },
  {
    type: 'teach-grammar',
    title: '가정법 구문: ca hi + 가정법 동사',
    description: '무아경에서 "만약 ~라면"이라는 가정법(조건문)이 등장합니다. 빠알리어에서 조건문은 ce(만약)를 쓰기도 하지만, 이 경전에서는 ce가 직접 나오지 않고 "ca hi"(실로 ~이) + 가정법 동사(-ssa, -eyya)로 조건을 표현합니다.',
    examples: [
      { pali: 'Rūpañca hidaṃ attā abhavissa', breakdown: 'rūpaṃ + ca + hi + idaṃ = "실로 이 물질이" + abhavissa(가정법: ~였을 것이다). ca hi가 "만약 ~라면"의 역할. 본문에 ce는 나오지 않지만 ca hi + 가정법 동사가 같은 기능', meaning: '만약 물질이 자아라면 (= 자아였을 것이라면)', highlight: 'ca hi ... abhavissa' },
      { pali: 'nayidaṃ rūpaṃ ābādhāya saṃvatteyya', breakdown: 'na + ayidaṃ(= ayaṃ + idaṃ 연성) + rūpaṃ + ābādhāya(병들기 위해, 여격) + saṃvatteyya(가정법: ~해야 할 것이다)', meaning: '(그렇다면) 물질이 병들지 않아야 할 것이다', highlight: 'saṃvatteyya' },
      { pali: 'labbhetha ca rūpe', breakdown: 'labbhetha(가정법 수동: 얻어질 것이다) + ca + rūpe(처소격: 물질에 대해)', meaning: '(그렇다면) 물질에 대해 이렇게 할 수 있어야 할 것이다', highlight: 'labbhetha' },
    ],
    table: {
      label: '조건문 표현 비교',
      rows: [
        { case: 'ce 사용', ending: 'ce + 동사', example: 'sace attā abhavissa', meaning: '만약 자아였다면 (직접 ce)' },
        { case: '본문 표현', ending: 'ca hi + 가정법', example: 'rūpañca hidaṃ attā abhavissa', meaning: '실로 물질이 자아였다면 (ca hi)' },
        { case: '가정법 동사', ending: '-ssa / -eyya', example: 'abhavissa, saṃvatteyya', meaning: '~였을 것이다, ~해야 할 것이다' },
      ],
    },
    tip: '본문에서 ce(만약)가 직접 나오지 않아도, 가정법 동사 어미(-ssa, -eyya)가 보이면 조건문입니다. "만약 A라면 B일 것이다" 구조를 파악하세요.',
    relatedLesson: '자비경의 bhāvaye(희구법)도 가정법과 같은 -eyya 계열 동사 어미입니다.',
  },
  // 본문 변형 보충 (연성 축약, 미래수동분사 daṭṭhabbaṃ, 11종 분류)
  ...ANATTA_SANDHI_NOTES,
]

// ── 사념처경 문법 ──

export const SATIPATTHANA_GRAMMAR: TeachGrammarStep[] = [
  {
    type: 'teach-grammar',
    title: '복합 관찰 구문: -ānupassī viharati',
    description: '사념처경의 핵심 정형문은 "~에서 ~을 관찰하며 머문다"입니다. 이 구문이 몸·느낌·마음·법 4번 반복됩니다.',
    examples: [
      { pali: 'kāye kāyānupassī viharati', breakdown: 'kāye (처소격) + kāya + anupassī + viharati', meaning: '몸에서 몸을 관찰하며 머문다', highlight: 'ānupassī' },
      { pali: 'vedanāsu vedanānupassī viharati', breakdown: 'vedanāsu (처소격 복수) + vedanā + anupassī + viharati', meaning: '느낌에서 느낌을 관찰하며 머문다', highlight: 'ānupassī' },
      { pali: 'citte cittānupassī viharati', breakdown: 'citte (처소격) + citta + anupassī + viharati', meaning: '마음에서 마음을 관찰하며 머문다', highlight: 'ānupassī' },
      { pali: 'dhammesu dhammānupassī viharati', breakdown: 'dhammesu (처소격 복수) + dhamma + anupassī + viharati', meaning: '법에서 법을 관찰하며 머문다', highlight: 'ānupassī' },
    ],
    table: {
      label: '사념처 정형문의 처소격',
      rows: [
        { case: '몸 (kāya)', ending: '-e', example: 'kāye', meaning: '몸에서' },
        { case: '느낌 (vedanā)', ending: '-āsu', example: 'vedanāsu', meaning: '느낌들에서' },
        { case: '마음 (citta)', ending: '-e', example: 'citte', meaning: '마음에서' },
        { case: '법 (dhamma)', ending: '-esu', example: 'dhammesu', meaning: '법들에서' },
      ],
    },
    relatedLesson: '행복경의 dhammesu(법들에서)와 같은 처소격 복수!',
    tip: 'anupassī = anu(따라) + passī(보는 자). "따라 관찰하는 자"라는 현재분사입니다.',
  },
  {
    type: 'teach-grammar',
    title: '수행 부사 3종: ātāpī, sampajāno, satimā',
    description: '사념처경 관찰 구문에는 항상 3가지 부사가 따라옵니다. 수행의 자세를 나타냅니다.',
    examples: [
      { pali: 'ātāpī', breakdown: 'ātāpa + ī (소유 접미사)', meaning: '열심히/정진하는', highlight: 'ātāpī' },
      { pali: 'sampajāno', breakdown: 'sam + pa + jāna + o (현재분사)', meaning: '분명히 알아차리는', highlight: 'sampajāno' },
      { pali: 'satimā', breakdown: 'sati + mant + ā (소유 접미사)', meaning: '마음챙기는', highlight: 'satimā' },
    ],
    tip: '-ī, -mā(mant)는 "~을 가진"이라는 소유 접미사입니다. ātāpī = 열정을 가진, satimā = 새김을 가진.',
    relatedLesson: '자비경의 santussako(-ko 소유접미사)도 같은 패턴입니다. 행복경의 bhagavā(-vant 소유접미사)도 동일 원리!',
  },
  // 본문 변형 보충 (정형문 구조, 절대분사/축약, 처소격 다양한 형태)
  ...SATIPATTHANA_SANDHI_NOTES,
]

// ── 보배경 문법 ──

export const RATANA_GRAMMAR: TeachGrammarStep[] = [
  {
    type: 'teach-grammar',
    title: '반복 구문: etena saccena suvatthi hotu',
    description: '보배경의 거의 모든 게송이 이 구절로 끝납니다. "이 진리로 안녕이 있기를"이라는 축원문입니다.',
    examples: [
      { pali: 'etena', breakdown: 'eta + ena (구격 단수)', meaning: '이것에 의해', highlight: '-ena' },
      { pali: 'saccena', breakdown: 'sacca + ena (구격 단수)', meaning: '진리에 의해', highlight: '-ena' },
      { pali: 'suvatthi', breakdown: 'su + atthi (불변어)', meaning: '안녕이', highlight: 'suvatthi' },
      { pali: 'hotu', breakdown: 'hoti의 명령형 3인칭 단수', meaning: '있기를', highlight: 'hotu' },
    ],
    relatedLesson: '행복경의 격변화에서 배운 구격(-ena)이 여기서 핵심 역할을 합니다.',
    tip: '구격(~에 의해)이 도구/수단을 나타냅니다. "진리라는 수단에 의해 안녕이 있기를"이라는 구조입니다.',
  },
  {
    type: 'teach-grammar',
    title: '삼보 찬탄 구조: idampi ... ratanaṃ paṇītaṃ',
    description: '보배경에서 삼보(불·법·승)를 찬탄할 때 동일한 정형문이 반복됩니다. buddhe/dhamme/saṅghe는 처소격(~안에)입니다.',
    examples: [
      { pali: 'buddhe', breakdown: 'buddha + e (처소격 단수)', meaning: '부처님 안에', highlight: '-e' },
      { pali: 'dhamme', breakdown: 'dhamma + e (처소격 단수)', meaning: '법 안에', highlight: '-e' },
      { pali: 'saṅghe', breakdown: 'saṅgha + e (처소격 단수)', meaning: '승가 안에', highlight: '-e' },
      { pali: 'ratanaṃ paṇītaṃ', breakdown: 'ratana + ṃ + paṇīta + ṃ (중성 주격)', meaning: '뛰어난 보배', highlight: '-aṃ' },
    ],
    relatedLesson: '행복경의 처소격(-e, -esu)이 여기서도 "~안에"의 의미로 사용됩니다.',
    tip: 'idampi(이것도) + ratanaṃ(보배) + paṇītaṃ(뛰어난) — 삼보 각각에 대해 이 구문이 반복됩니다.',
  },
  {
    type: 'teach-grammar',
    title: 'khayaṃ virāgaṃ amataṃ: 열반의 동의어',
    description: '보배경에서 열반을 가리키는 세 가지 동의어가 나옵니다. 모두 중성 목적격(-aṃ)으로 같은 형태입니다.',
    examples: [
      { pali: 'khayaṃ', breakdown: 'khaya + ṃ (중성 목적격)', meaning: '소멸을', highlight: 'khaya' },
      { pali: 'virāgaṃ', breakdown: 'virāga + ṃ (중성 목적격)', meaning: '이욕을', highlight: 'virāga' },
      { pali: 'amataṃ', breakdown: 'amata + ṃ (중성 목적격)', meaning: '불사를', highlight: 'amata' },
    ],
    relatedLesson: '전법륜경의 dukkhanirodhaṃ(괴로움의 소멸)과 같은 열반 관련 어휘입니다.',
    tip: 'khaya(소멸), virāga(이욕), amata(불사) — 세 가지 모두 열반을 가리킵니다. 경전에서 자주 나오는 동의어입니다.',
  },
]

// ── 자비경 문법 ──

export const METTA_GRAMMAR: TeachGrammarStep[] = [
  {
    type: 'teach-grammar',
    title: '의무분사: karanīya (-anīya)',
    description: '자비경의 첫 단어 karanīyam이 의무분사입니다. karoti(하다)에서 파생된 "해야 할 것"이라는 의미입니다.',
    examples: [
      { pali: 'karanīyaṃ', breakdown: 'karoti(하다) + anīya(의무) + ṃ(중성 목적격)', meaning: '행해야 할 것은', highlight: '-anīya' },
      { pali: 'atthakusalena', breakdown: 'attha + kusala + ena (구격)', meaning: '선에 능숙한 자에 의해', highlight: '-ena' },
    ],
    table: {
      label: '의무분사 접미사 비교',
      rows: [
        { case: '-anīya', ending: '동사어근 + anīya', example: 'karanīya', meaning: '해야 할 것' },
        { case: '-tabba', ending: '동사어근 + tabba', example: 'daṭṭhabba', meaning: '보아야 할 것' },
        { case: '-ya', ending: '동사어근 + ya', example: 'pūjiya', meaning: '공양해야 할' },
      ],
    },
    relatedLesson: '무아경의 daṭṭhabbaṃ(보아야 할 것)도 의무분사(-tabba)입니다.',
    tip: '-anīya/-tabba는 "~해야 할"이라는 의무를 나타냅니다. 영어 -able/-ible와 비슷합니다.',
  },
  {
    type: 'teach-grammar',
    title: '소유 접미사: -ko/-ka',
    description: '자비경에는 -ko/-ka로 끝나는 형용사가 많이 나옵니다. 명사에 소유 접미사를 붙여 "~을 가진, ~한"이라는 뜻을 만듭니다.',
    examples: [
      { pali: 'santussako', breakdown: 'santussa + ko (소유)', meaning: '만족한 자', highlight: '-ko' },
      { pali: 'appakicco', breakdown: 'appa + kicca + o', meaning: '할 일이 적은', highlight: 'appa-' },
      { pali: 'sallahukavutti', breakdown: 'sallahuka + vutti', meaning: '가벼운 생활의', highlight: 'sallahuka' },
    ],
    relatedLesson: '사념처경의 ātāpī(-ī 소유접미사), satimā(-mant 소유접미사)와 같은 패턴입니다.',
    tip: '-ko/-ka, -ī, -mant/-vant 모두 "~을 가진"이라는 소유 접미사입니다. 형용사처럼 명사를 수식합니다.',
  },
  {
    type: 'teach-grammar',
    title: '자비 수행 구문: mānasaṃ bhāvaye aparimāṇaṃ',
    description: '자비경의 수행 구문에서 희구법(bhāvaye)과 한량없음(aparimāṇaṃ)이 나옵니다. 비유 구문(mātā yathā)도 중요합니다.',
    examples: [
      { pali: 'bhāvaye', breakdown: 'bhāveti의 희구법 3인칭 단수', meaning: '닦을지어다', highlight: '-aye' },
      { pali: 'aparimāṇaṃ', breakdown: 'a + parimāṇa + ṃ (중성 목적격)', meaning: '한량없는', highlight: 'a-' },
      { pali: 'mātā yathā niyaṃ puttaṃ', breakdown: 'mātā(어머니가) yathā(마치) niyaṃ(자기의) puttaṃ(아들을)', meaning: '마치 어머니가 자기 아들을', highlight: 'yathā' },
    ],
    relatedLesson: '전법륜경의 동사 활용에서 배운 명령형(-tu)과 비슷한 희구법(-eyya/-aye) 구문입니다.',
    tip: 'a- 접두사는 부정을 나타냅니다. aparimāṇa = a(부정) + parimāṇa(한량) = 한량없는. anatta(무아)와 같은 패턴!',
  },
]
