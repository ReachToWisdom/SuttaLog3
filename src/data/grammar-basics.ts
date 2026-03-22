// SSOT: 기초 문법 개론 — 경전 학습 전 전체 지도 제공
// 3성 + 8격 + a-어간 남/중/여 + 동사 기초 + 연성법 기초
import type { TeachGrammarStep, QuizStep } from './types'

// ── 기초 문법 설명 스텝 ──

export const GRAMMAR_BASICS: TeachGrammarStep[] = [
  // 1. 성(Gender) 개념
  {
    type: 'teach-grammar',
    title: '빠알리어의 3가지 성(Gender)',
    description: '빠알리어 명사는 남성(pulliṅga)·중성(napuṃsakaliṅga)·여성(itthiliṅga) 3가지 성별이 있습니다. 성별에 따라 격변화 형태가 다르므로, 단어를 배울 때 성별을 함께 외우는 것이 중요합니다.',
    examples: [
      { pali: 'dhammo', breakdown: 'dhamma + o (남성 주격)', meaning: '법(法)', highlight: '남성' },
      { pali: 'rūpaṃ', breakdown: 'rūpa + ṃ (중성 주격)', meaning: '물질/색(色)', highlight: '중성' },
      { pali: 'paññā', breakdown: 'paññā (여성 주격)', meaning: '지혜(智慧)', highlight: '여성' },
    ],
    table: {
      label: '3성 구분법',
      rows: [
        { case: '남성 (pulliṅga)', ending: '-o (주격)', example: 'dhammo, devo, buddho', meaning: '법, 신, 붓다' },
        { case: '중성 (napuṃsaka)', ending: '-aṃ (주격)', example: 'rūpaṃ, cittaṃ, dukkhaṃ', meaning: '물질, 마음, 괴로움' },
        { case: '여성 (itthiliṅga)', ending: '-ā (주격)', example: 'paññā, vedanā, saddhā', meaning: '지혜, 느낌, 믿음' },
      ],
    },
    tip: '남성은 -o, 중성은 -aṃ, 여성은 -ā로 끝나는 경우가 가장 많습니다. 이 패턴만 기억해도 경전에서 성별을 빠르게 구분할 수 있습니다!',
  },

  // 2. 격(Case) 개념
  {
    type: 'teach-grammar',
    title: '8가지 격(Case) — 한국어 조사와 대응',
    description: '빠알리어는 명사 어미가 바뀌어 문장에서의 역할을 나타냅니다. 한국어의 조사(은/는/이/가/을/를/의/에/에서)와 비슷한 기능입니다. 총 8가지 격이 있으며, 단수와 복수 형태가 각각 있습니다.',
    examples: [
      { pali: 'Buddho deseti', breakdown: 'Buddho (주격) + deseti (가르치다)', meaning: '붓다께서 가르치신다', highlight: '주격 = ~이/가' },
      { pali: 'dhammaṃ deseti', breakdown: 'dhammaṃ (목적격) + deseti', meaning: '법을 가르치신다', highlight: '목적격 = ~을/를' },
      { pali: 'buddhassa dhammo', breakdown: 'buddhassa (소유격) + dhammo', meaning: '붓다의 법', highlight: '소유격 = ~의' },
      { pali: 'ārāme viharati', breakdown: 'ārāme (처격) + viharati', meaning: '동산에서 머문다', highlight: '처격 = ~에서' },
    ],
    table: {
      label: '8격 전체 조감도',
      rows: [
        { case: '① 주격 (Nominative)', ending: '~이/가', example: 'buddho', meaning: '주어' },
        { case: '② 목적격 (Accusative)', ending: '~을/를', example: 'dhammaṃ', meaning: '목적어' },
        { case: '③ 조격 (Instrumental)', ending: '~에 의해, ~(으)로', example: 'dhammena', meaning: '수단/도구' },
        { case: '④ 여격 (Dative)', ending: '~에게', example: 'buddhāya', meaning: '간접 목적어' },
        { case: '⑤ 탈격 (Ablative)', ending: '~에서, ~(으)로부터', example: 'dhammā', meaning: '출발점/원인' },
        { case: '⑥ 소유격 (Genitive)', ending: '~의', example: 'dhammassa', meaning: '소유' },
        { case: '⑦ 처격 (Locative)', ending: '~에서, ~에', example: 'dhamme', meaning: '장소/때' },
        { case: '⑧ 호격 (Vocative)', ending: '~이여!', example: 'bhikkhu!', meaning: '부름' },
      ],
    },
    tip: '처음에는 주격(~이), 목적격(~을), 처격(~에서), 소유격(~의) 4가지만 구분해도 경전의 80%를 이해할 수 있습니다!',
  },

  // 3. a-어간 남성 격변화
  {
    type: 'teach-grammar',
    title: 'a-어간 남성 격변화 (가장 기본!)',
    description: '빠알리어에서 가장 흔한 명사 패턴입니다. dhamma(법), deva(신), buddha(붓다) 등 수많은 단어가 이 패턴을 따릅니다. 이것 하나만 외우면 경전 명사의 절반 이상을 이해할 수 있습니다.',
    examples: [
      { pali: 'dhammo', breakdown: 'dhamma + o', meaning: '법이 (주격 단수)', highlight: '-o' },
      { pali: 'dhammaṃ', breakdown: 'dhamma + ṃ', meaning: '법을 (목적격 단수)', highlight: '-aṃ' },
      { pali: 'dhammassa', breakdown: 'dhamma + ssa', meaning: '법의 (소유격 단수)', highlight: '-assa' },
      { pali: 'dhamme', breakdown: 'dhamma + e', meaning: '법에서 (처격 단수)', highlight: '-e' },
    ],
    table: {
      label: 'a-어간 남성 (dhamma 법)',
      rows: [
        { case: '주격 (~이/가)', ending: '-o / -ā', example: 'dhammo / dhammā', meaning: '법이 / 법들이' },
        { case: '목적격 (~을/를)', ending: '-aṃ / -e', example: 'dhammaṃ / dhamme', meaning: '법을 / 법들을' },
        { case: '조격 (~에 의해)', ending: '-ena / -ehi', example: 'dhammena / dhammehi', meaning: '법에 의해' },
        { case: '여격 (~에게)', ending: '-āya / -ānaṃ', example: 'dhammāya / dhammānaṃ', meaning: '법에게' },
        { case: '탈격 (~로부터)', ending: '-ā, -smā / -ehi', example: 'dhammā / dhammehi', meaning: '법으로부터' },
        { case: '소유격 (~의)', ending: '-assa / -ānaṃ', example: 'dhammassa / dhammānaṃ', meaning: '법의 / 법들의' },
        { case: '처격 (~에서)', ending: '-e, -smiṃ / -esu', example: 'dhamme / dhammesu', meaning: '법에서' },
        { case: '호격 (~이여)', ending: '-a / -ā', example: 'dhamma! / dhammā!', meaning: '법이여!' },
      ],
    },
    tip: '남성 주격 단수 -o와 복수 -ā가 같은 글자(ā)로 끝나지만, 주격 복수의 -ā와 탈격 단수의 -ā는 형태가 같습니다. 문맥으로 구분합니다!',
  },

  // 4. a-어간 중성 격변화
  {
    type: 'teach-grammar',
    title: 'a-어간 중성 격변화',
    description: '중성 명사는 남성과 거의 같지만 주격과 목적격이 다릅니다. rūpa(물질), citta(마음), dukkha(괴로움), sukha(행복) 등 추상적인 개념에 많습니다.',
    examples: [
      { pali: 'rūpaṃ', breakdown: 'rūpa + ṃ', meaning: '물질이/물질을 (주격=목적격)', highlight: '-aṃ' },
      { pali: 'rūpāni', breakdown: 'rūpa + āni', meaning: '물질들이/물질들을 (복수)', highlight: '-āni' },
      { pali: 'cittassa', breakdown: 'citta + ssa', meaning: '마음의 (소유격)', highlight: '-assa' },
    ],
    table: {
      label: 'a-어간 중성 (rūpa 물질) — 남성과 다른 부분만',
      rows: [
        { case: '주격 (~이/가)', ending: '-aṃ / -āni', example: 'rūpaṃ / rūpāni', meaning: '물질이 / 물질들이' },
        { case: '목적격 (~을/를)', ending: '-aṃ / -āni', example: 'rūpaṃ / rūpāni', meaning: '물질을 / 물질들을' },
        { case: '나머지 격', ending: '남성과 동일', example: 'rūpassa, rūpe...', meaning: '물질의, 물질에서...' },
      ],
    },
    tip: '중성의 핵심: 주격 = 목적격! 즉, "~이"와 "~을"이 같은 형태(-aṃ)입니다. 남성(-o/-aṃ)과 달리 구분이 없습니다.',
  },

  // 5. ā-어간 여성 격변화
  {
    type: 'teach-grammar',
    title: 'ā-어간 여성 격변화',
    description: '여성 명사 중 가장 흔한 패턴입니다. paññā(지혜), vedanā(느낌), saddhā(믿음), mettā(자비) 등 추상 덕목에 많습니다.',
    examples: [
      { pali: 'paññā', breakdown: 'paññā (여성 주격)', meaning: '지혜가', highlight: '-ā' },
      { pali: 'paññaṃ', breakdown: 'paññā → paññaṃ (목적격)', meaning: '지혜를', highlight: '-aṃ' },
      { pali: 'paññāya', breakdown: 'paññā + ya (조격/여격/탈격)', meaning: '지혜에 의해/에게/로부터', highlight: '-āya' },
    ],
    table: {
      label: 'ā-어간 여성 (paññā 지혜)',
      rows: [
        { case: '주격 (~이/가)', ending: '-ā / -ā, -āyo', example: 'paññā / paññā', meaning: '지혜가' },
        { case: '목적격 (~을/를)', ending: '-aṃ / -ā, -āyo', example: 'paññaṃ / paññā', meaning: '지혜를' },
        { case: '조격 (~에 의해)', ending: '-āya / -āhi', example: 'paññāya / paññāhi', meaning: '지혜에 의해' },
        { case: '소유격 (~의)', ending: '-āya / -ānaṃ', example: 'paññāya / paññānaṃ', meaning: '지혜의' },
        { case: '처격 (~에서)', ending: '-āya, -āyaṃ / -āsu', example: 'paññāya / paññāsu', meaning: '지혜에서' },
      ],
    },
    tip: '여성의 핵심: -āya가 조격·여격·탈격·소유격·처격에 모두 쓰입니다. 만능 어미! 문맥으로 어떤 격인지 판단합니다.',
  },

  // 6. 동사 기초
  {
    type: 'teach-grammar',
    title: '동사 기초: 현재형 활용',
    description: '빠알리어 동사는 인칭(1/2/3)과 수(단수/복수)에 따라 어미가 변합니다. 경전에서 가장 자주 나오는 것은 3인칭 단수(-ti)입니다.',
    examples: [
      { pali: 'deseti', breakdown: 'dese + ti (3인칭 단수)', meaning: '그는 가르친다', highlight: '-ti' },
      { pali: 'desenti', breakdown: 'dese + nti (3인칭 복수)', meaning: '그들은 가르친다', highlight: '-nti' },
      { pali: 'desemi', breakdown: 'dese + mi (1인칭 단수)', meaning: '나는 가르친다', highlight: '-mi' },
    ],
    table: {
      label: '현재형 활용표',
      rows: [
        { case: '3인칭 단수 (그는)', ending: '-ti', example: 'viharati, deseti', meaning: '머문다, 가르친다' },
        { case: '3인칭 복수 (그들은)', ending: '-nti', example: 'viharanti, desenti', meaning: '머문다, 가르친다' },
        { case: '1인칭 단수 (나는)', ending: '-mi', example: 'viharāmi, desemi', meaning: '머문다, 가르친다' },
        { case: '2인칭 단수 (너는)', ending: '-si', example: 'viharasi, desesi', meaning: '머문다, 가르친다' },
        { case: '명령형 (~하라)', ending: '-tu / -hi', example: 'desetu, brūhi', meaning: '가르치라, 말하라' },
      ],
    },
    tip: '경전에서 -ti로 끝나는 단어를 보면 "동사 현재형 3인칭 단수"입니다. viharati(머문다), deseti(가르친다), passati(본다) 등!',
  },

  // 7. 연성법 기초
  {
    type: 'teach-grammar',
    title: '연성법(Sandhi) 기초 — 단어가 합쳐지는 규칙',
    description: '빠알리어에서 두 단어가 이어질 때 발음 편의상 글자가 바뀌거나 합쳐지는 현상입니다. 영어의 "do not → don\'t"와 비슷합니다. 경전을 읽을 때 원래 단어를 찾아내는 데 필수적입니다.',
    examples: [
      { pali: 'maṅgalamuttamaṃ', breakdown: 'maṅgalaṃ + uttamaṃ', meaning: '최상의 행복을', highlight: 'ṃ+u → mu' },
      { pali: 'paṇḍitānañca', breakdown: 'paṇḍitānaṃ + ca', meaning: '현명한 자들의 + 그리고', highlight: 'ṃ+c → ñc' },
      { pali: "etadavoca", breakdown: 'etaṃ + avoca', meaning: '이것을 말씀하셨다', highlight: 'ṃ+a → da' },
      { pali: 'yoniso', breakdown: 'yoni + so', meaning: '근원적으로', highlight: 'i+s → iso' },
    ],
    tip: '연성법은 규칙을 모두 외우기보다, 경전을 읽으면서 패턴에 익숙해지는 것이 효과적입니다. 분해 연습이 가장 중요합니다!',
  },
]

// ── 기초 문법 퀴즈 ──

function shuffle<T>(arr: T[]): T[] {
  const r = [...arr]
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[r[i], r[j]] = [r[j], r[i]]
  }
  return r
}

/** 기초 문법 퀴즈 생성 */
export function generateGrammarBasicsQuizzes(): QuizStep[] {
  const quizzes: QuizStep[] = [
    // 성별 구분
    {
      type: 'quiz',
      question: '"dhammo"는 어떤 성별의 명사인가요?',
      options: shuffle(['남성', '중성', '여성', '불변어']),
      answer: -1,
      explanation: {
        correct: '-o로 끝나는 주격 단수는 남성 명사입니다.',
        detail: 'dhamma(법) → dhammo (남성 주격 단수)',
        tip: '남성: -o, 중성: -aṃ, 여성: -ā',
      },
    },
    {
      type: 'quiz',
      question: '"rūpaṃ"의 성별은?',
      options: shuffle(['중성', '남성', '여성', '동사']),
      answer: -1,
      explanation: {
        correct: '-aṃ으로 끝나는 주격은 중성 명사입니다.',
        detail: 'rūpa(물질) → rūpaṃ (중성 주격 단수)',
      },
    },
    {
      type: 'quiz',
      question: '"vedanā"의 성별은?',
      options: shuffle(['여성', '남성', '중성', '불변어']),
      answer: -1,
      explanation: {
        correct: '-ā로 끝나는 주격은 여성 명사입니다.',
        detail: 'vedanā(느낌) → 여성 주격 단수',
      },
    },
    // 격 구분
    {
      type: 'quiz',
      question: '"dhammassa"는 어떤 격인가요?',
      options: shuffle(['소유격 (~의)', '주격 (~이)', '목적격 (~을)', '처격 (~에서)']),
      answer: -1,
      explanation: {
        correct: '-assa는 a-어간 남성/중성의 소유격 단수 어미입니다.',
        detail: 'dhamma + ssa → dhammassa = "법의"',
        tip: '소유격은 소유를 나타냅니다: buddhassa dhammo = 붓다의 법',
      },
    },
    {
      type: 'quiz',
      question: '"dhamme"는 어떤 격인가요?',
      options: shuffle(['처격 (~에서)', '주격 (~이)', '소유격 (~의)', '목적격 (~을)']),
      answer: -1,
      explanation: {
        correct: '-e는 a-어간의 처격 단수 어미입니다.',
        detail: 'dhamma + e → dhamme = "법에서"',
      },
    },
    {
      type: 'quiz',
      question: '"viharati"에서 -ti는 무엇을 나타내나요?',
      options: shuffle(['현재 3인칭 단수', '과거형', '명령형', '주격 어미']),
      answer: -1,
      explanation: {
        correct: '-ti는 동사 현재형 3인칭 단수 어미입니다.',
        detail: 'viharati = vi + harati = 머문다 (그가)',
        tip: '경전에서 -ti로 끝나는 단어는 대부분 동사 현재형입니다.',
      },
    },
    {
      type: 'quiz',
      question: '중성 명사의 특징은?',
      options: shuffle(['주격과 목적격이 같다', '격변화가 없다', '주격이 -o로 끝난다', '복수형이 없다']),
      answer: -1,
      explanation: {
        correct: '중성 명사는 주격과 목적격이 동일한 형태(-aṃ)입니다.',
        detail: 'rūpaṃ은 "물질이"(주격)와 "물질을"(목적격) 모두 가능',
      },
    },
    {
      type: 'quiz',
      question: '"paññāya"는 여성 명사의 어떤 격에 쓰이나요?',
      options: shuffle(['조격/여격/탈격/소유격/처격 (여러 격)', '주격만', '목적격만', '호격만']),
      answer: -1,
      explanation: {
        correct: '-āya는 여성 명사의 만능 어미로, 여러 격에 쓰입니다.',
        detail: '조격(~에 의해), 여격(~에게), 탈격(~으로부터), 소유격(~의), 처격(~에서)',
        tip: '문맥을 통해 어떤 격인지 판단합니다.',
      },
    },
  ]

  // answer 인덱스 보정 (셔플된 options에서 정답 위치 찾기)
  const correctedQuizzes = quizzes.map(q => {
    const correctText = q.explanation.correct.includes('-o') ? '남성'
      : q.explanation.correct.includes('-aṃ으로') ? '중성'
      : q.explanation.correct.includes('-ā로') ? '여성'
      : q.explanation.correct.includes('-assa') ? '소유격 (~의)'
      : q.explanation.correct.includes('-e는') ? '처격 (~에서)'
      : q.explanation.correct.includes('-ti는') ? '현재 3인칭 단수'
      : q.explanation.correct.includes('주격과 목적격') ? '주격과 목적격이 같다'
      : q.explanation.correct.includes('-āya') ? '조격/여격/탈격/소유격/처격 (여러 격)'
      : q.options[0]

    return {
      ...q,
      answer: q.options.indexOf(correctText),
    }
  })

  return shuffle(correctedQuizzes)
}
