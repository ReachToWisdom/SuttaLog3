// 단원 목록 + 스텝 데이터 조합
// 퀴즈는 학습 시작 시마다 새로 셔플 (랜덤)
import type { LessonInfo, Step } from './types'
import { VOWELS, ALL_CONSONANTS } from './alphabet'
import { ALL_VERSES, ALL_MANGALA_WORDS } from './mangala-words'
import { ALL_VERSES as RATANA_VERSES, ALL_RATANA_WORDS } from './ratana-words'
import { ALL_VERSES as METTA_VERSES, ALL_METTA_WORDS } from './metta-words'
import { ALL_VERSES as DHAMMACAKKA_VERSES, ALL_DHAMMACAKKA_WORDS } from './dhammacakka-words'
import { ALL_VERSES as ANATTA_VERSES, ALL_ANATTA_WORDS } from './anatta-words'
import { ALL_VERSES as SATIPATTHANA_VERSES, ALL_SATIPATTHANA_WORDS } from './satipatthana-words'
import { generateMixedQuizzes, generateGrammarQuizzes } from './quiz-generator'
import { ALL_ARRANGE_QUIZZES } from './mangala-arrange'
import { MANGALA_GRAMMAR, DHAMMACAKKA_GRAMMAR, ANATTA_GRAMMAR, SATIPATTHANA_GRAMMAR } from './grammar-steps'
import { GRAMMAR_BASICS, generateGrammarBasicsQuizzes } from './grammar-basics'
import { GRAMMAR_ADVANCED } from './grammar-advanced'

/** 중복 제거 단어 수집: 경전 단어 배열에서 고유 단어만 추출 */
function collectUniqueWords(words: import('./types').VerseWord[]): import('./types').VerseWord[] {
  const seen = new Set<string>()
  const result: import('./types').VerseWord[] = []
  for (const w of words) {
    const key = w.pali.toLowerCase()
    if (!seen.has(key)) {
      seen.add(key)
      result.push(w)
    }
  }
  return result
}

/** 배열 셔플 */
function shuffle<T>(arr: T[]): T[] {
  const r = [...arr]
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[r[i], r[j]] = [r[j], r[i]]
  }
  return r
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

// ── 기초 문법 개론 (경전 전 전체 지도) ──
function buildGrammarBasicsSteps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: '기초 문법 개론',
    subtitle: '3성 · 8격 · 격변화 · 동사',
    description: '경전을 읽기 전에 빠알리어 문법의 전체 지도를 한 눈에 봅니다. 3가지 성별, 8가지 격, 기본 격변화표를 먼저 익히면 경전 학습이 훨씬 수월합니다.',
    icon: '📐',
  })

  // 문법 설명 스텝 (메인)
  steps.push(...GRAMMAR_BASICS)

  // 이해도 확인 퀴즈
  steps.push(...generateGrammarBasicsQuizzes())

  return steps
}

// ── 심화 문법 (게송 후, 산문 전) ──
function buildGrammarAdvancedSteps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: '심화 문법',
    subtitle: 'i/u-어간 · 과거형 · 분사 · 복합어',
    description: '게송 경전에서 기초를 다졌으니, 산문 경전 독해에 필요한 추가 문법을 배웁니다. i-어간, u-어간 격변화와 동사 과거형, 분사, 복합어를 학습합니다.',
    icon: '📐',
  })

  // 심화 문법 설명
  steps.push(...GRAMMAR_ADVANCED)

  // 이해도 확인 퀴즈 (기초 문법과 동일한 패턴)
  steps.push(...generateGrammarQuizzes(GRAMMAR_ADVANCED))

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

  // 1단계: 핵심 단어 한눈에 보기
  const mangalaWords = collectUniqueWords(ALL_MANGALA_WORDS)
  steps.push({ type: 'vocab-list', title: '핵심 단어', words: mangalaWords })

  // 2단계: 문법 설명
  steps.push(...MANGALA_GRAMMAR)

  // 3단계: 게송 원문 (단어 터치로 의미 확인)
  for (const verse of ALL_VERSES) {
    steps.push({
      type: 'verse',
      pali: verse.pali,
      pronKo: verse.pronKo,
      translation: verse.translation,
      words: verse.words,
    })
  }

  // 전체 단어 퀴즈 (무작위 혼합, 모든 단어 빠짐없이)
  steps.push(...generateMixedQuizzes(ALL_MANGALA_WORDS))

  // 독해/작문 조립 퀴즈 (셔플)
  steps.push(...shuffle(ALL_ARRANGE_QUIZZES))

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

  // 핵심 단어 한눈에 보기
  const ratanaWords = collectUniqueWords(ALL_RATANA_WORDS)
  steps.push({ type: 'vocab-list', title: '핵심 단어', words: ratanaWords })

  // 게송 원문 (단어 터치로 의미 확인)
  for (const verse of RATANA_VERSES) {
    steps.push({
      type: 'verse',
      pali: verse.pali,
      pronKo: verse.pronKo,
      translation: verse.translation,
      words: verse.words,
    })
  }

  steps.push(...generateMixedQuizzes(ALL_RATANA_WORDS))
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

  // 핵심 단어 한눈에 보기
  const mettaWords = collectUniqueWords(ALL_METTA_WORDS)
  steps.push({ type: 'vocab-list', title: '핵심 단어', words: mettaWords })

  // 게송 원문 (단어 터치로 의미 확인)
  for (const verse of METTA_VERSES) {
    steps.push({
      type: 'verse',
      pali: verse.pali,
      pronKo: verse.pronKo,
      translation: verse.translation,
      words: verse.words,
    })
  }

  steps.push(...generateMixedQuizzes(ALL_METTA_WORDS))
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

  // 1단계: 새 단어 한눈에 보기 (탭으로 자율 학습)
  const newWords = collectUniqueWords(ALL_DHAMMACAKKA_WORDS)
  steps.push({ type: 'vocab-list', title: '핵심 단어', words: newWords })

  // 2단계: 문법 설명 (메인 콘텐츠!)
  steps.push(...DHAMMACAKKA_GRAMMAR)

  // 3단계: 경전 원문 (단어 터치로 의미 확인)
  for (const verse of DHAMMACAKKA_VERSES) {
    steps.push({
      type: 'verse',
      pali: verse.pali,
      pronKo: verse.pronKo,
      translation: verse.translation,
      words: verse.words,
    })
  }

  // 4단계: 문법 퀴즈 (문법 내용 기반)
  steps.push(...generateGrammarQuizzes(DHAMMACAKKA_GRAMMAR))
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

  // 1단계: 새 단어 한눈에 보기 (탭으로 자율 학습)
  const newWords = collectUniqueWords(ALL_ANATTA_WORDS)
  steps.push({ type: 'vocab-list', title: '핵심 단어', words: newWords })

  // 2단계: 문법 설명 (메인 콘텐츠!)
  steps.push(...ANATTA_GRAMMAR)

  // 3단계: 경전 원문 (단어 터치로 의미 확인)
  for (const verse of ANATTA_VERSES) {
    steps.push({
      type: 'verse',
      pali: verse.pali,
      pronKo: verse.pronKo,
      translation: verse.translation,
      words: verse.words,
    })
  }

  // 4단계: 문법 퀴즈 (문법 내용 기반)
  steps.push(...generateGrammarQuizzes(ANATTA_GRAMMAR))
  return steps
}

// ── Part 2: 사념처경 발췌 (문법 중심 구조) ──
function buildSatipatthanaSteps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Mahāsatipaṭṭhāna Sutta',
    subtitle: '사념처경 발췌',
    description: '몸·느낌·마음·법 네 가지 관찰을 설한 수행 경전. 정형문 패턴과 긴 텍스트 독해를 학습합니다.',
    icon: '🧘',
  })

  // 1단계: 새 단어 한눈에 보기 (탭으로 자율 학습)
  const newWords = collectUniqueWords(ALL_SATIPATTHANA_WORDS)
  steps.push({ type: 'vocab-list', title: '핵심 단어', words: newWords })

  // 2단계: 문법 설명 (메인 콘텐츠!)
  steps.push(...SATIPATTHANA_GRAMMAR)

  // 3단계: 경전 원문 (단어 터치로 의미 확인)
  for (const verse of SATIPATTHANA_VERSES) {
    steps.push({
      type: 'verse',
      pali: verse.pali,
      pronKo: verse.pronKo,
      translation: verse.translation,
      words: verse.words,
    })
  }

  // 4단계: 문법 퀴즈 (문법 내용 기반)
  steps.push(...generateGrammarQuizzes(SATIPATTHANA_GRAMMAR))
  return steps
}

// ── 단원 메타 (steps는 학습 시작 시 생성) ──
const LESSON_META = [
  // Part 0: 기초 도구
  { id: 'alphabet', title: '자모와 발음', subtitle: '모음 8 · 자음 33', icon: '🔤', category: 'basic' as const, builder: buildAlphabetSteps },

  // 기초 문법 (경전 전 전체 지도)
  { id: 'grammar-basics', title: '기초 문법 개론', subtitle: '3성 · 8격 · 격변화 · 동사', icon: '📐', category: 'grammar' as const, builder: buildGrammarBasicsSteps },

  // Part 1: 기초 경전
  { id: 'mangala', title: 'Maṅgala Sutta', subtitle: '행복경', icon: '🪷', category: 'gatha' as const, builder: buildMangalaSteps },

  // 선택: 추가 게송 (행복경 완료 후 분기점에서 선택 가능)
  { id: 'ratana', title: 'Ratana Sutta', subtitle: '보배경', icon: '💎', category: 'gatha-extra' as const, builder: buildRatanaSteps },
  { id: 'metta', title: 'Metta Sutta', subtitle: '자비경', icon: '💛', category: 'gatha-extra' as const, builder: buildMettaSteps },

  // 심화 문법 (게송 후, 산문 전)
  { id: 'grammar-advanced', title: '심화 문법', subtitle: 'i/u-어간 · 과거형 · 분사', icon: '📐', category: 'grammar' as const, builder: buildGrammarAdvancedSteps },

  // Part 2: 산문 경전 (독해)
  { id: 'dhammacakka', title: 'Dhammacakkappavattana Sutta', subtitle: '전법륜경', icon: '☸️', category: 'prose' as const, builder: buildDhammacakkaSteps },
  { id: 'anatta', title: 'Anattalakkhaṇa Sutta', subtitle: '무아경', icon: '🔍', category: 'prose' as const, builder: buildAnattaSteps },
  { id: 'satipatthana', title: 'Mahāsatipaṭṭhāna Sutta', subtitle: '사념처경 발췌', icon: '🧘', category: 'prose' as const, builder: buildSatipatthanaSteps },
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
