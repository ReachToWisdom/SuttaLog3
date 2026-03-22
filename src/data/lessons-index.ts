// 단원 목록 + 스텝 데이터 조합
// 퀴즈는 학습 시작 시마다 새로 셔플 (랜덤)
import type { LessonInfo, Step } from './types'
import { VOWELS, ALL_CONSONANTS } from './alphabet'
import { ALL_VERSES, ALL_MANGALA_WORDS } from './mangala-words'
import { ALL_VERSES as RATANA_VERSES, ALL_RATANA_WORDS } from './ratana-words'
import { ALL_VERSES as METTA_VERSES, ALL_METTA_WORDS } from './metta-words'
import { ALL_VERSES as DHAMMACAKKA_VERSES } from './dhammacakka-words'
import { ALL_VERSES as ANATTA_VERSES } from './anatta-words'
import { KAYA_VERSES } from './satipatthana-kaya'
import { DHAMMA_VERSES } from './satipatthana-dhamma'
import { generateMixedQuizzes, generateGrammarQuizzes, generateFillBlankQuizzes, generateSentenceQuizzes } from './quiz-generator'
import { ALL_ARRANGE_QUIZZES } from './mangala-arrange'
import { MANGALA_GRAMMAR, DHAMMACAKKA_GRAMMAR, ANATTA_GRAMMAR, SATIPATTHANA_GRAMMAR, RATANA_GRAMMAR, METTA_GRAMMAR } from './grammar-steps'
import { generateGrammarBasicsQuizzes } from './grammar-basics'
import { PRIMER_GRAMMAR } from './grammar-primer'
import { PRIMER_GRAMMAR_2 } from './grammar-primer-2'
import { PRIMER_GRAMMAR_3 } from './grammar-primer-3'
import { QUESTION_BANK } from './question-bank'

/** 배열 셔플 */
function shuffle<T>(arr: T[]): T[] {
  const r = [...arr]
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[r[i], r[j]] = [r[j], r[i]]
  }
  return r
}

/** 문제은행에서 해당 단원의 랜덤 N문제 추출 */
function pickBankQuestions(lessonId: string, count = 10): Step[] {
  const bank = QUESTION_BANK.find(b => b.lessonId === lessonId)
  if (!bank) return []
  return shuffle(bank.questions).slice(0, count) as Step[]
}

// ── Part 0: 자모 발음 단원 (매번 새로 생성) ──
function buildAlphabetSteps(): Step[] {
  const steps: Step[] = []

  // 소개
  steps.push({
    type: 'intro',
    title: '빠알리 자모와 발음',
    subtitle: '모음 8자 + 자음 33자',
    description: '빠알리어의 각 글자가 어떻게 발음되는지 배웁니다. 음성학 이론 없이, 글자와 발음 매칭에 집중합니다.',
    icon: '🔤',
  })

  // 모음 학습
  for (const v of VOWELS) {
    steps.push({
      type: 'teach',
      word: v.roman,
      pronKo: v.pronKo,
      meaning: v.pronDesc ?? v.pronKo,
      icon: '🔊',
      verseLine: v.example
        ? `예: ${v.example} [${v.examplePronKo ?? ''}]`
        : undefined,
      verseLineKo: v.exampleMeaning,
    })
  }

  // 모음 퀴즈 (셔플)
  const vowelQuizzes: Step[] = VOWELS.map(v => {
    const wrongOptions = shuffle(VOWELS.filter(w => w.roman !== v.roman))
      .slice(0, 3)
      .map(w => w.pronKo)
    const options = shuffle([...wrongOptions, v.pronKo])
    return {
      type: 'quiz' as const,
      question: `"${v.roman}"의 발음은?`,
      options,
      answer: options.indexOf(v.pronKo),
      explanation: {
        correct: `${v.roman}은 "${v.pronKo}"로 발음합니다.`,
        detail: v.pronDesc,
        tip: v.roman === 'ā' || v.roman === 'ī' || v.roman === 'ū'
          ? '위에 줄(macron)이 있으면 길게 발음합니다.'
          : undefined,
      },
    }
  })
  steps.push(...shuffle(vowelQuizzes))

  // 자음 학습 (5개씩 그룹)
  const consonantGroups = [
    ALL_CONSONANTS.slice(0, 5),
    ALL_CONSONANTS.slice(5, 10),
    ALL_CONSONANTS.slice(10, 15),
    ALL_CONSONANTS.slice(15, 20),
    ALL_CONSONANTS.slice(20, 25),
    ALL_CONSONANTS.slice(25),
  ]

  for (const group of consonantGroups) {
    // 학습
    for (const c of group) {
      steps.push({
        type: 'teach',
        word: c.roman,
        pronKo: c.pronKo,
        meaning: c.pronDesc ?? c.pronKo,
        icon: '🔊',
        verseLine: c.example
          ? `예: ${c.example} [${c.examplePronKo ?? ''}]`
          : undefined,
        verseLineKo: c.exampleMeaning,
      })
    }

    // 그룹별 퀴즈 (셔플)
    const groupQuizzes: Step[] = group.map(c => {
      const wrongOptions = shuffle(ALL_CONSONANTS.filter(w => w.roman !== c.roman))
        .slice(0, 3)
        .map(w => w.pronKo)
      const options = shuffle([...wrongOptions, c.pronKo])
      return {
        type: 'quiz' as const,
        question: `"${c.roman}"의 발음은?`,
        options,
        answer: options.indexOf(c.pronKo),
        explanation: {
          correct: `${c.roman}은 "${c.pronKo}"로 발음합니다.`,
          detail: c.pronDesc,
        },
      }
    })
    steps.push(...shuffle(groupQuizzes))
  }

  return steps
}

// ── 기초 문법 (L2~6: 행복경 전) ──
function buildGrammarBasicsSteps(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '기초 문법',
    subtitle: '3성 · 8격 · 격변화 · 동사 현재형',
    description: '경전을 읽기 위한 기본 문법입니다. 명사의 성별과 격변화, 동사 현재형을 배웁니다.',
    icon: '📐',
  })
  // Primer L2~6만
  steps.push(...PRIMER_GRAMMAR)
  steps.push(...generateGrammarBasicsQuizzes())
  return steps
}

// ── 추가학습 1 (L7~12: 전법륜경 전) ──
function buildGrammarExtra1Steps(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '추가학습: 과거형 · i/u-어간',
    subtitle: '산문 경전 준비',
    description: '과거형(Aorist)과 i-어간, u-어간 명사를 배웁니다. 전법륜경 독해에 필요한 문법입니다.',
    icon: '📐',
  })
  // Primer L7~12 (grammar-primer-2.ts 전반부가 아니라, primer에서 L7~10까지)
  // PRIMER_GRAMMAR에 L2~10이 있고, PRIMER_GRAMMAR_2에 L11~22가 있음
  // L7~10은 PRIMER_GRAMMAR의 후반부 (과거형, i-어간, u-어간)
  // 이미 PRIMER_GRAMMAR에 다 포함되어 있으므로 별도 분리 불필요
  // 대신 PRIMER_GRAMMAR_2의 전반부(L11~15: 대명사, 분사)를 여기 배치
  steps.push(...PRIMER_GRAMMAR_2.slice(0, 7)) // 대명사 3 + 분사 3 + 의문대명사 1
  return steps
}

// ── 추가학습 2 (L16~22: 무아경 전) ──
function buildGrammarExtra2Steps(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '추가학습: 미래형 · 수동 · 절대분사',
    subtitle: '독해 심화 준비',
    description: '미래형, 명령형, 희구법, 사역형, 수동태, 절대분사, 자음어간 명사를 배웁니다.',
    icon: '📐',
  })
  steps.push(...PRIMER_GRAMMAR_2.slice(7)) // L16~22
  return steps
}

// ── 추가학습 3 (L23~32: 사념처경 후) ──
function buildGrammarExtra3Steps(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '추가학습: 복합어 · 연성법 · 총정리',
    subtitle: '문법 완성',
    description: '복합어(Samāsa), 연성법 상세, 접두사/접미사, 수사, 문법 총정리입니다.',
    icon: '📐',
  })
  steps.push(...PRIMER_GRAMMAR_3)
  return steps
}


// ── Part 1: 행복경 단원 (매번 새로 생성) ──
function buildMangalaSteps(): Step[] {
  const steps: Step[] = []

  // 소개
  steps.push({
    type: 'intro',
    title: 'Maṅgala Sutta',
    subtitle: '행복경 · 길상경',
    description: '부처님께서 가장 높은 행복(maṅgala)이 무엇인지 설하신 경전. 짧은 게송 12개로 구성되어 빠알리어 입문에 가장 적합합니다.',
    icon: '🪷',
  })

  // 1단계: 문법 설명
  steps.push(...MANGALA_GRAMMAR)

  // 2단계: 게송 원문 (문법 글로서리 기본 표시)
  for (const verse of ALL_VERSES) {
    steps.push({
      type: 'verse',
      pali: verse.pali,
      pronKo: verse.pronKo,
      translation: verse.translation,
      words: verse.words,
      grammarNotes: verse.grammarNotes,
    })
  }

  // 전체 단어 퀴즈 (무작위 혼합, 모든 단어 빠짐없이)
  steps.push(...generateMixedQuizzes(ALL_MANGALA_WORDS))

  // 독해/작문 조립 퀴즈 (셔플)
  steps.push(...shuffle(ALL_ARRANGE_QUIZZES))

  // 빈칸 채우기 + 문장 완성
  steps.push(...generateFillBlankQuizzes(ALL_VERSES))
  steps.push(...generateSentenceQuizzes(ALL_VERSES))

  // 문제은행 (독해 문법 문제 랜덤 10개)
  steps.push(...pickBankQuestions('mangala', 10))

  return steps
}

// ── 추가 게송: 보배경 ──
function buildRatanaSteps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Ratana Sutta',
    subtitle: '보배경',
    description: '삼보(불·법·승)의 공덕을 찬탄하는 경전. 행복경과 비슷한 게송 형식으로 기초 단어를 확장합니다.',
    icon: '💎',
  })

  // 1단계: 문법 설명
  steps.push(...RATANA_GRAMMAR)

  // 2단계: 게송 원문 (문법 글로서리 기본 표시)
  for (const verse of RATANA_VERSES) {
    steps.push({
      type: 'verse',
      pali: verse.pali,
      pronKo: verse.pronKo,
      translation: verse.translation,
      words: verse.words,
      grammarNotes: verse.grammarNotes,
    })
  }

  steps.push(...generateMixedQuizzes(ALL_RATANA_WORDS))
  steps.push(...generateFillBlankQuizzes(RATANA_VERSES))
  steps.push(...generateSentenceQuizzes(RATANA_VERSES))
  return steps
}

// ── 추가 게송: 자비경 ──
function buildMettaSteps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Metta Sutta',
    subtitle: '자비경',
    description: '자비(mettā)의 수행법을 설한 경전. 짧고 아름다운 게송으로 빠알리어 어휘력을 넓힙니다.',
    icon: '💛',
  })

  // 1단계: 문법 설명
  steps.push(...METTA_GRAMMAR)

  // 2단계: 게송 원문 (문법 글로서리 기본 표시)
  for (const verse of METTA_VERSES) {
    steps.push({
      type: 'verse',
      pali: verse.pali,
      pronKo: verse.pronKo,
      translation: verse.translation,
      words: verse.words,
      grammarNotes: verse.grammarNotes,
    })
  }

  steps.push(...generateMixedQuizzes(ALL_METTA_WORDS))
  steps.push(...generateFillBlankQuizzes(METTA_VERSES))
  steps.push(...generateSentenceQuizzes(METTA_VERSES))
  return steps
}

// ── Part 2: 전법륜경 (문법 중심 구조) ──
function buildDhammacakkaSteps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Dhammacakkappavattana Sutta',
    subtitle: '전법륜경',
    description: '부처님의 첫 설법. 사성제와 팔정도를 설하신 산문 경전으로, 명사 격변화와 동사 활용을 본격적으로 학습합니다.',
    icon: '☸️',
  })

  // 1단계: 문법 설명 (메인 콘텐츠!)
  steps.push(...DHAMMACAKKA_GRAMMAR)

  // 2단계: 경전 원문 (문법 글로서리 기본 표시)
  for (const verse of DHAMMACAKKA_VERSES) {
    steps.push({
      type: 'verse',
      pali: verse.pali,
      pronKo: verse.pronKo,
      translation: verse.translation,
      words: verse.words,
      grammarNotes: verse.grammarNotes,
    })
  }

  // 4단계: 문법 퀴즈 (문법 내용 기반)
  steps.push(...generateGrammarQuizzes(DHAMMACAKKA_GRAMMAR))

  // 5단계: 빈칸 채우기 + 문장 작문 (경전 문장 기반)
  steps.push(...generateFillBlankQuizzes(DHAMMACAKKA_VERSES))
  steps.push(...generateSentenceQuizzes(DHAMMACAKKA_VERSES))
  steps.push(...pickBankQuestions('dhammacakka', 10))
  return steps
}

// ── Part 2: 무아경 (문법 중심 구조) ──
function buildAnattaSteps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Anattalakkhaṇa Sutta',
    subtitle: '무아경',
    description: '오온(五蘊)이 무아(anattā)임을 설하신 두 번째 설법. 분사(현재분사/과거분사)와 반복 구문 패턴을 학습합니다.',
    icon: '🔍',
  })

  // 1단계: 문법 설명 (메인 콘텐츠!)
  steps.push(...ANATTA_GRAMMAR)

  // 2단계: 경전 원문 (문법 글로서리 기본 표시)
  for (const verse of ANATTA_VERSES) {
    steps.push({
      type: 'verse',
      pali: verse.pali,
      pronKo: verse.pronKo,
      translation: verse.translation,
      words: verse.words,
      grammarNotes: verse.grammarNotes,
    })
  }

  // 4단계: 문법 퀴즈 (문법 내용 기반)
  steps.push(...generateGrammarQuizzes(ANATTA_GRAMMAR))

  // 5단계: 빈칸 채우기 + 문장 작문 (경전 문장 기반)
  steps.push(...generateFillBlankQuizzes(ANATTA_VERSES))
  steps.push(...generateSentenceQuizzes(ANATTA_VERSES))
  steps.push(...pickBankQuestions('anatta', 10))
  return steps
}

/** 중첩 구조 verses를 VerseData[]로 변환 */
function toVerseData(verses: any[]): import('./quiz-generator').VerseData[] {
  return verses.map(entry => {
    const v = 'verse' in entry ? entry.verse : entry
    return { pali: v.pali, translation: v.translation, words: entry.words }
  })
}

// ── 사념처경 공통: verse 삽입 헬퍼 ──
function pushVerseEntries(steps: Step[], verses: any[]) {
  for (const entry of verses) {
    const v = 'verse' in entry ? entry.verse : entry
    const w = entry.words
    steps.push({
      type: 'verse',
      pali: v.pali,
      pronKo: v.pronKo,
      translation: v.translation,
      words: w,
      grammarNotes: ('grammarNotes' in v) ? (v as any).grammarNotes : undefined,
    })
  }
}

// ── Part 4-1: 사념처경 1부 — 신념처 (서문 + 몸 관찰) ──
function buildSatipatthana1Steps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Mahāsatipaṭṭhāna Sutta (1부)',
    subtitle: '사념처경 · 신념처',
    description: '서문(유일한 길) + 신념처(몸 관찰): 호흡관찰, 자세관찰, 분명한 앎, 부정관(32신체), 요소관찰(4대), 9묘지관.',
    icon: '🧘',
  })

  // 문법 설명
  steps.push(...SATIPATTHANA_GRAMMAR)

  // 신념처 원문 (KAYA_VERSES)
  pushVerseEntries(steps, KAYA_VERSES)

  // 문법 퀴즈 + 빈칸 + 문장
  steps.push(...generateGrammarQuizzes(SATIPATTHANA_GRAMMAR))
  steps.push(...generateFillBlankQuizzes(toVerseData(KAYA_VERSES)))
  steps.push(...generateSentenceQuizzes(toVerseData(KAYA_VERSES)))
  steps.push(...pickBankQuestions('satipatthana-1', 10))
  return steps
}

// ── Part 4-2: 사념처경 2부 — 수/심/법념처 + 결론 ──
function buildSatipatthana2Steps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Mahāsatipaṭṭhāna Sutta (2부)',
    subtitle: '사념처경 · 수심법념처',
    description: '수념처(느낌 관찰) + 심념처(마음 관찰) + 법념처(오개·오온·육입처·칠각지·사성제·팔정도) + 결론.',
    icon: '🧘',
  })

  // 수/심/법념처 원문 (DHAMMA_VERSES)
  pushVerseEntries(steps, DHAMMA_VERSES)

  // 빈칸 + 문장
  steps.push(...generateFillBlankQuizzes(toVerseData(DHAMMA_VERSES)))
  steps.push(...generateSentenceQuizzes(toVerseData(DHAMMA_VERSES)))
  steps.push(...pickBankQuestions('satipatthana-2', 10))
  return steps
}

// ── 단원 메타 (steps는 학습 시작 시 생성) ──
const LESSON_META = [
  // Part 0: 기초
  { id: 'alphabet', title: '자모와 발음', subtitle: '모음 8 · 자음 33', icon: '🔤', category: 'basic' as const, builder: buildAlphabetSteps },
  { id: 'grammar-basics', title: '기초 문법', subtitle: '3성 · 8격 · 격변화 · 동사', icon: '📐', category: 'grammar' as const, builder: buildGrammarBasicsSteps },

  // Part 1: 게송 경전
  { id: 'mangala', title: 'Maṅgala Sutta', subtitle: '행복경', icon: '🪷', category: 'gatha' as const, builder: buildMangalaSteps },
  { id: 'ratana', title: 'Ratana Sutta', subtitle: '보배경 (선택)', icon: '💎', category: 'gatha-extra' as const, builder: buildRatanaSteps },
  { id: 'metta', title: 'Metta Sutta', subtitle: '자비경 (선택)', icon: '💛', category: 'gatha-extra' as const, builder: buildMettaSteps },

  // 추가학습 1: 전법륜경 준비
  { id: 'grammar-extra1', title: '추가학습: 대명사 · 분사', subtitle: '전법륜경 준비', icon: '📐', category: 'grammar' as const, builder: buildGrammarExtra1Steps },

  // Part 2: 전법륜경
  { id: 'dhammacakka', title: 'Dhammacakkappavattana Sutta', subtitle: '전법륜경', icon: '☸️', category: 'prose' as const, builder: buildDhammacakkaSteps },

  // 추가학습 2: 무아경 준비
  { id: 'grammar-extra2', title: '추가학습: 미래형 · 수동 · 절대분사', subtitle: '무아경 준비', icon: '📐', category: 'grammar' as const, builder: buildGrammarExtra2Steps },

  // Part 3: 무아경
  { id: 'anatta', title: 'Anattalakkhaṇa Sutta', subtitle: '무아경', icon: '🔍', category: 'prose' as const, builder: buildAnattaSteps },

  // Part 4: 사념처경 (2분할)
  { id: 'satipatthana-1', title: 'Mahāsatipaṭṭhāna Sutta (1부)', subtitle: '사념처경 · 신념처', icon: '🧘', category: 'prose' as const, builder: buildSatipatthana1Steps },
  { id: 'satipatthana-2', title: 'Mahāsatipaṭṭhāna Sutta (2부)', subtitle: '사념처경 · 수심법념처', icon: '🧘', category: 'prose' as const, builder: buildSatipatthana2Steps },

  // 추가학습 3: 문법 완성
  { id: 'grammar-extra3', title: '추가학습: 복합어 · 연성법 · 총정리', subtitle: '문법 완성', icon: '📐', category: 'grammar' as const, builder: buildGrammarExtra3Steps },
]

// 단원 목록 (steps는 빈 배열 — getLessonById에서 실시간 생성)
export const LESSONS: LessonInfo[] = LESSON_META.map(m => ({
  id: m.id,
  title: m.title,
  subtitle: m.subtitle,
  icon: m.icon,
  category: m.category,
  steps: [], // 목록 표시용 — 실제 steps는 getLessonById에서 생성
}))

/** ID로 단원 검색 — 매번 새로운 퀴즈 순서 생성 */
export function getLessonById(id: string): LessonInfo | undefined {
  const meta = LESSON_META.find(m => m.id === id)
  if (!meta) return undefined
  return {
    id: meta.id,
    title: meta.title,
    subtitle: meta.subtitle,
    icon: meta.icon,
    category: meta.category,
    steps: meta.builder(), // 매번 새로 생성 → 퀴즈 순서 랜덤
  }
}
