// 단원 목록 + 스텝 데이터 조합
// 퀴즈는 학습 시작 시마다 새로 셔플 (랜덤)
// 교재(빠알리 프라이머 2024) 과 순서 기준 재편성
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

// ══════════════════════════════════════════
// 교재 1과: 자모와 발음
// ══════════════════════════════════════════
function buildLesson01(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: '1과: 빠알리 자모와 발음',
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

// ══════════════════════════════════════════
// 교재 2과: 목적격
// PRIMER_GRAMMAR[0]
// ══════════════════════════════════════════
function buildLesson02(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '2과: 목적격',
    subtitle: '~을/를 (-ṃ/-e)',
    description: '동작의 대상을 나타내는 목적격을 배웁니다. 1과에서 배운 주격(-o)과 비교하면서 익히세요.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR[0])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR[0]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 3과: 구격
// PRIMER_GRAMMAR[1]
// ══════════════════════════════════════════
function buildLesson03(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '3과: 구격',
    subtitle: '~에 의해, ~(으)로 (-ena/-ehi)',
    description: '행위의 수단·도구·원인을 나타내는 구격을 배웁니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR[1])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR[1]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 4과: 여격·탈격
// PRIMER_GRAMMAR[2]
// ══════════════════════════════════════════
function buildLesson04(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '4과: 여격·탈격',
    subtitle: '~에게 (-ssa) · ~로부터 (-ā/-smā)',
    description: '여격은 "~에게" 주는 대상, 탈격은 "~로부터" 떠나는 기점을 나타냅니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR[2])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR[2]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 5과: 소유격
// PRIMER_GRAMMAR[3]
// ══════════════════════════════════════════
function buildLesson05(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '5과: 소유격',
    subtitle: '~의 (-ssa/-ānaṃ)',
    description: '소유·소속을 나타내는 소유격을 배웁니다. 형태는 여격과 같지만 의미가 다릅니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR[3])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR[3]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 6과: 처소격
// PRIMER_GRAMMAR[4]
// ══════════════════════════════════════════
function buildLesson06(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '6과: 처소격',
    subtitle: '~에서 (-e/-smiṃ/-esu)',
    description: '장소·시간·조건을 나타내는 처소격을 배웁니다. 경전 서문의 "Jetavane viharati"가 대표적.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR[4])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR[4]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 7과: 호격
// PRIMER_GRAMMAR[5]
// ══════════════════════════════════════════
function buildLesson07(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '7과: 호격',
    subtitle: '~이여 (-a/-ā)',
    description: '부르는 대상을 나타내는 호격을 배웁니다. 경전에서 bhikkhave(비구들이여)가 가장 흔합니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR[5])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR[5]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 8과: 전체 격변화 정리
// PRIMER_GRAMMAR[6]
// ══════════════════════════════════════════
function buildLesson08(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '8과: a-어간 남성 전체 격변화',
    subtitle: '단수+복수 한 테이블로 정리',
    description: '2~7과에서 배운 격변화를 전체 정리합니다. 격변화 기초 퀴즈도 함께 풀어봅니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR[6])
  steps.push(...generateGrammarBasicsQuizzes())
  return steps
}

// ══════════════════════════════════════════
// 교재 9과: 절대분사
// PRIMER_GRAMMAR_2[12]: 절대분사 (-tvā/-ya)
// ══════════════════════════════════════════
function buildLesson09(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '9과: 절대분사',
    subtitle: '-tvā/-tvāna: ~하고 나서',
    description: '두 동작을 연결하는 절대분사를 배웁니다. "법을 듣고 나서 기뻐했다"처럼 동작의 선후를 표현합니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR_2[12])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR_2[12]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 10과: 부정사
// PRIMER_GRAMMAR_2[13]: 부정사 (-tuṃ)
// ══════════════════════════════════════════
function buildLesson10(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '10과: 부정사',
    subtitle: '-tuṃ: ~하기 위해',
    description: '"~하기 위해, ~하려고"를 뜻하는 부정사를 배웁니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR_2[13])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR_2[13]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 11과: a-어간 중성명사
// PRIMER_GRAMMAR[9-10]: a-어간 중성 단수/복수
// ══════════════════════════════════════════
function buildLesson11(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '11과: a-어간 중성명사',
    subtitle: '중성 격변화 (주격 = 목적격)',
    description: 'a-어간 중성명사는 남성과 거의 같지만, 주격·목적격·호격만 다릅니다. dukkhaṃ, sukhaṃ, cittaṃ 등이 대표적입니다.',
    icon: '📐',
  })
  steps.push(...PRIMER_GRAMMAR.slice(9, 11))
  steps.push(...generateGrammarQuizzes(PRIMER_GRAMMAR.slice(9, 11)))
  return steps
}

// ══════════════════════════════════════════
// 교재 12~13과: 동사 현재형
// PRIMER_GRAMMAR[7-8]: 동사 현재형 기본/10선
// ══════════════════════════════════════════
function buildLesson1213(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '12~13과: 동사 현재형',
    subtitle: '인칭·수에 따른 활용변화',
    description: '빠알리어 동사 현재형의 인칭·수별 활용을 배우고, 경전에서 가장 자주 나오는 동사 10개를 익힙니다.',
    icon: '📐',
  })
  steps.push(...PRIMER_GRAMMAR.slice(7, 9))
  steps.push(...generateGrammarQuizzes(PRIMER_GRAMMAR.slice(7, 9)))
  return steps
}

// ══════════════════════════════════════════
// ★ 행복경 삽입 (+ 연성법 보충설명)
// ══════════════════════════════════════════
function buildMangalaSteps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Maṅgala Sutta',
    subtitle: '행복경 · 길상경',
    description: '부처님께서 가장 높은 행복(maṅgala)이 무엇인지 설하신 경전. 짧은 게송 12개로 구성되어 빠알리어 입문에 가장 적합합니다.',
    icon: '🪷',
  })

  // 보충 문법 설명 (연성법 등)
  steps.push(...MANGALA_GRAMMAR)

  // 게송 원문
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

  // 퀴즈
  steps.push(...generateMixedQuizzes(ALL_MANGALA_WORDS))
  steps.push(...shuffle(ALL_ARRANGE_QUIZZES))
  steps.push(...generateFillBlankQuizzes(ALL_VERSES))
  steps.push(...generateSentenceQuizzes(ALL_VERSES))
  steps.push(...pickBankQuestions('mangala', 10))

  return steps
}

// ══════════════════════════════════════════
// 교재 14과: 미래형
// PRIMER_GRAMMAR_2[7]: 미래형 (-ssa-)
// ══════════════════════════════════════════
function buildLesson14(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '14과: 미래형',
    subtitle: '-ssa-: ~할 것이다',
    description: '미래형은 어근에 -ssa-를 삽입하여 "~할 것이다"를 나타냅니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR_2[7])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR_2[7]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 15과: 원망형
// PRIMER_GRAMMAR_2[9]: 원망형/조건법 (-eyya)
// ══════════════════════════════════════════
function buildLesson15(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '15과: 원망형',
    subtitle: '-eyya: ~할 수 있다/~해야 한다',
    description: '원망형은 소망·가능·의무를, 조건법은 반사실적 가정을 나타냅니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR_2[9])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR_2[9]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 16과: 명령형
// PRIMER_GRAMMAR_2[8]: 명령형 (-tu/-hi)
// ══════════════════════════════════════════
function buildLesson16(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '16과: 명령형',
    subtitle: '-tu/-hi: ~하라, ~하시오',
    description: '명령형은 명령·요청·기원을 표현합니다. ehi bhikkhu(오라, 비구여)가 대표적입니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR_2[8])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR_2[8]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 17과: 과거형
// PRIMER_GRAMMAR[14-15]: 과거형 Aorist 기본/불규칙
// ══════════════════════════════════════════
function buildLesson17(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '17과: 과거형',
    subtitle: 'Aorist: 과거를 나타내는 동사',
    description: '과거를 나타내는 Aorist 형태와 경전에서 자주 나오는 불규칙 과거형을 배웁니다.',
    icon: '📐',
  })
  steps.push(...PRIMER_GRAMMAR.slice(14, 16))
  steps.push(...generateGrammarQuizzes(PRIMER_GRAMMAR.slice(14, 16)))
  return steps
}

// ══════════════════════════════════════════
// 교재 18과: ā-어간 여성명사
// PRIMER_GRAMMAR[11-12]: ā-어간 여성 단수/복수
// ══════════════════════════════════════════
function buildLesson18(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '18과: ā-어간 여성명사',
    subtitle: '여성 격변화 (-ā)',
    description: '-ā로 끝나는 여성 명사의 격변화를 배웁니다. paññā(지혜), saddhā(믿음) 등이 대표적입니다.',
    icon: '📐',
  })
  steps.push(...PRIMER_GRAMMAR.slice(11, 13))
  steps.push(...generateGrammarQuizzes(PRIMER_GRAMMAR.slice(11, 13)))
  return steps
}

// ══════════════════════════════════════════
// ★ 보배경 삽입 (선택)
// ══════════════════════════════════════════
function buildRatanaSteps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Ratana Sutta',
    subtitle: '보배경',
    description: '삼보(불·법·승)의 공덕을 찬탄하는 경전. 행복경과 비슷한 게송 형식으로 기초 단어를 확장합니다.',
    icon: '💎',
  })

  // 보충 문법 설명
  steps.push(...RATANA_GRAMMAR)

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

// ══════════════════════════════════════════
// ★ 자비경 삽입 (선택)
// ══════════════════════════════════════════
function buildMettaSteps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Metta Sutta',
    subtitle: '자비경',
    description: '자비(mettā)의 수행법을 설한 경전. 짧고 아름다운 게송으로 빠알리어 어휘력을 넓힙니다.',
    icon: '💛',
  })

  // 보충 문법 설명
  steps.push(...METTA_GRAMMAR)

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

// ══════════════════════════════════════════
// 교재 19과: 과거분사
// PRIMER_GRAMMAR_2[5]: 과거분사 (-ta/-na)
// ══════════════════════════════════════════
function buildLesson19(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '19과: 과거분사',
    subtitle: '-ta/-na: ~된, ~한',
    description: '과거분사는 수동적 완료를 나타내며 형용사처럼 명사를 수식합니다. evaṃ me sutaṃ의 sutaṃ이 대표적입니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR_2[5])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR_2[5]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 20과: i-어간 여성명사
// PRIMER_GRAMMAR[17]: i-어간 여성 명사
// ══════════════════════════════════════════
function buildLesson20(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '20과: i-어간 여성명사',
    subtitle: 'i-여성 격변화 (-iyā)',
    description: '-i로 끝나는 여성 명사의 격변화를 배웁니다. bhūmi(땅), ratti(밤) 등이 대표적입니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR[17])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR[17]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 21과: 현재분사
// PRIMER_GRAMMAR_2[4]: 현재분사 (-anta/-māna)
// ══════════════════════════════════════════
function buildLesson21(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '21과: 현재분사',
    subtitle: '-anta/-māna: ~하고 있는',
    description: '현재분사는 "~하고 있는"이라는 형용사 역할을 합니다. 수식하는 명사와 성·수·격이 일치합니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR_2[4])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR_2[4]]))
  return steps
}

// ══════════════════════════════════════════
// 교재 22과: 미래수동분사
// PRIMER_GRAMMAR_2[6]: 미래수동분사 (-tabba/-anīya)
// ══════════════════════════════════════════
function buildLesson22(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '22과: 미래수동분사',
    subtitle: '-tabba/-anīya: ~되어야 할',
    description: '"~되어야 할, ~할 만한"을 뜻하는 미래수동분사를 배웁니다. 전법륜경의 sevitabba가 대표적입니다.',
    icon: '📐',
  })
  steps.push(PRIMER_GRAMMAR_2[6])
  steps.push(...generateGrammarQuizzes([PRIMER_GRAMMAR_2[6]]))
  return steps
}

// ══════════════════════════════════════════
// ★ 전법륜경 삽입 (+ 보충설명)
// ══════════════════════════════════════════
function buildDhammacakkaSteps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Dhammacakkappavattana Sutta',
    subtitle: '전법륜경',
    description: '부처님의 첫 설법. 사성제와 팔정도를 설하신 산문 경전으로, 명사 격변화와 동사 활용을 본격적으로 학습합니다.',
    icon: '☸️',
  })

  // 보충 문법 설명
  steps.push(...DHAMMACAKKA_GRAMMAR)

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

  steps.push(...generateGrammarQuizzes(DHAMMACAKKA_GRAMMAR))
  steps.push(...generateFillBlankQuizzes(DHAMMACAKKA_VERSES))
  steps.push(...generateSentenceQuizzes(DHAMMACAKKA_VERSES))
  steps.push(...pickBankQuestions('dhammacakka', 10))
  return steps
}

// ══════════════════════════════════════════
// 교재 23과: 사역형 + 수동태
// PRIMER_GRAMMAR_2[10-11]: 사역형/수동태
// ══════════════════════════════════════════
function buildLesson23(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '23과: 사역형과 수동태',
    subtitle: '-āpeti/-eti · -iya-/-ya-',
    description: '사역형("~하게 하다")과 수동태("~되다")를 배웁니다.',
    icon: '📐',
  })
  steps.push(...PRIMER_GRAMMAR_2.slice(10, 12))
  steps.push(...generateGrammarQuizzes(PRIMER_GRAMMAR_2.slice(10, 12)))
  return steps
}

// ══════════════════════════════════════════
// 교재 24~29과: i/u-어간 격변화 + 자음어간
// PRIMER_GRAMMAR[16]: i-어간 남성/중성
// PRIMER_GRAMMAR[18-19]: u-어간 남성/여성
// PRIMER_GRAMMAR_2[14-15]: 자음어간 명사
// ══════════════════════════════════════════
function buildLesson2429(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '24~29과: i/u-어간 · 자음어간 격변화',
    subtitle: '다양한 어간의 명사',
    description: 'i-어간(남성/중성), u-어간(남성/여성), 자음어간(-ant/-mant/-vant, -in/-ar) 명사의 격변화를 배웁니다.',
    icon: '📐',
  })
  // i-어간 남성/중성
  steps.push(PRIMER_GRAMMAR[16])
  // u-어간 남성, u-어간 여성
  steps.push(...PRIMER_GRAMMAR.slice(18, 20))
  // 자음어간 명사 2스텝
  steps.push(...PRIMER_GRAMMAR_2.slice(14, 16))
  steps.push(...generateGrammarQuizzes([
    PRIMER_GRAMMAR[16],
    ...PRIMER_GRAMMAR.slice(18, 20),
    ...PRIMER_GRAMMAR_2.slice(14, 16),
  ]))
  return steps
}

// ══════════════════════════════════════════
// ★ 무아경 삽입 (+ 보충설명)
// ══════════════════════════════════════════
function buildAnattaSteps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Anattalakkhaṇa Sutta',
    subtitle: '무아경',
    description: '오온(五蘊)이 무아(anattā)임을 설하신 두 번째 설법. 분사(현재분사/과거분사)와 반복 구문 패턴을 학습합니다.',
    icon: '🔍',
  })

  // 보충 문법 설명
  steps.push(...ANATTA_GRAMMAR)

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

  steps.push(...generateGrammarQuizzes(ANATTA_GRAMMAR))
  steps.push(...generateFillBlankQuizzes(ANATTA_VERSES))
  steps.push(...generateSentenceQuizzes(ANATTA_VERSES))
  steps.push(...pickBankQuestions('anatta', 10))
  return steps
}

// ══════════════════════════════════════════
// 교재 30~32과: 형용사·대명사·복합어·연성법·총정리
// PRIMER_GRAMMAR[13]: 형용사
// PRIMER_GRAMMAR_2[0-3]: 대명사 4종
// PRIMER_GRAMMAR_3 전체: 복합어~총정리
// ══════════════════════════════════════════
function buildLesson3032(): Step[] {
  const steps: Step[] = []
  steps.push({
    type: 'intro',
    title: '30~32과: 형용사·대명사·복합어·총정리',
    subtitle: '문법 완성',
    description: '형용사, 대명사(인칭/지시/관계/의문), 복합어, 연성법, 접두사/접미사, 수사, 비교급, 불변어, 문법 총정리입니다.',
    icon: '📐',
  })
  // 형용사
  steps.push(PRIMER_GRAMMAR[13])
  // 대명사 4종 (인칭/지시/관계/의문)
  steps.push(...PRIMER_GRAMMAR_2.slice(0, 4))
  // 복합어, 연성법, 접두사/접미사, 수사/비교/불변어, 총정리
  steps.push(...PRIMER_GRAMMAR_3)
  steps.push(...generateGrammarQuizzes([
    PRIMER_GRAMMAR[13],
    ...PRIMER_GRAMMAR_2.slice(0, 4),
    ...PRIMER_GRAMMAR_3,
  ]))
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

// ══════════════════════════════════════════
// ★ 사념처경 1부 — 신념처 (서문 + 몸 관찰)
// ══════════════════════════════════════════
function buildSatipatthana1Steps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Mahāsatipaṭṭhāna Sutta (1부)',
    subtitle: '사념처경 · 신념처',
    description: '서문(유일한 길) + 신념처(몸 관찰): 호흡관찰, 자세관찰, 분명한 앎, 부정관(32신체), 요소관찰(4대), 9묘지관.',
    icon: '🧘',
  })

  // 보충 문법 설명
  steps.push(...SATIPATTHANA_GRAMMAR)

  pushVerseEntries(steps, KAYA_VERSES)

  steps.push(...generateGrammarQuizzes(SATIPATTHANA_GRAMMAR))
  steps.push(...generateFillBlankQuizzes(toVerseData(KAYA_VERSES)))
  steps.push(...generateSentenceQuizzes(toVerseData(KAYA_VERSES)))
  steps.push(...pickBankQuestions('satipatthana-1', 10))
  return steps
}

// ══════════════════════════════════════════
// ★ 사념처경 2부 — 수/심/법념처 + 결론
// ══════════════════════════════════════════
function buildSatipatthana2Steps(): Step[] {
  const steps: Step[] = []

  steps.push({
    type: 'intro',
    title: 'Mahāsatipaṭṭhāna Sutta (2부)',
    subtitle: '사념처경 · 수심법념처',
    description: '수념처(느낌 관찰) + 심념처(마음 관찰) + 법념처(오개·오온·육입처·칠각지·사성제·팔정도) + 결론.',
    icon: '🧘',
  })

  pushVerseEntries(steps, DHAMMA_VERSES)

  steps.push(...generateFillBlankQuizzes(toVerseData(DHAMMA_VERSES)))
  steps.push(...generateSentenceQuizzes(toVerseData(DHAMMA_VERSES)))
  steps.push(...pickBankQuestions('satipatthana-2', 10))
  return steps
}

// ══════════════════════════════════════════
// 단원 메타 — 교재 과 순서 기준
// ══════════════════════════════════════════
const LESSON_META = [
  // 교재 1과
  { id: 'primer-01', title: '1과: 자모와 발음', subtitle: '모음 8 · 자음 33', icon: '🔤', category: 'grammar' as const, builder: buildLesson01 },

  // 교재 2~8과
  { id: 'primer-02', title: '2과: 목적격', subtitle: '~을/를 (-ṃ/-e)', icon: '📐', category: 'grammar' as const, builder: buildLesson02 },
  { id: 'primer-03', title: '3과: 구격', subtitle: '~에 의해 (-ena/-ehi)', icon: '📐', category: 'grammar' as const, builder: buildLesson03 },
  { id: 'primer-04', title: '4과: 여격·탈격', subtitle: '~에게·~로부터', icon: '📐', category: 'grammar' as const, builder: buildLesson04 },
  { id: 'primer-05', title: '5과: 소유격', subtitle: '~의 (-ssa/-ānaṃ)', icon: '📐', category: 'grammar' as const, builder: buildLesson05 },
  { id: 'primer-06', title: '6과: 처소격', subtitle: '~에서 (-e/-esu)', icon: '📐', category: 'grammar' as const, builder: buildLesson06 },
  { id: 'primer-07', title: '7과: 호격', subtitle: '~이여 (-a/-ā)', icon: '📐', category: 'grammar' as const, builder: buildLesson07 },
  { id: 'primer-08', title: '8과: 전체 격변화 정리', subtitle: '단수+복수 총정리', icon: '📐', category: 'grammar' as const, builder: buildLesson08 },

  // 교재 9과
  { id: 'primer-09', title: '9과: 절대분사', subtitle: '-tvā/-tvāna', icon: '📐', category: 'grammar' as const, builder: buildLesson09 },

  // 교재 10과
  { id: 'primer-10', title: '10과: 부정사', subtitle: '-tuṃ', icon: '📐', category: 'grammar' as const, builder: buildLesson10 },

  // 교재 11과
  { id: 'primer-11', title: '11과: a-어간 중성명사', subtitle: '중성 격변화', icon: '📐', category: 'grammar' as const, builder: buildLesson11 },

  // 교재 12~13과
  { id: 'primer-12-13', title: '12~13과: 동사 현재형', subtitle: '활용변화', icon: '📐', category: 'grammar' as const, builder: buildLesson1213 },

  // ★ 행복경 삽입 (+ 연성법 보충설명)
  { id: 'mangala', title: 'Maṅgala Sutta', subtitle: '행복경', icon: '🪷', category: 'gatha' as const, builder: buildMangalaSteps },

  // 교재 14과
  { id: 'primer-14', title: '14과: 미래형', subtitle: '-ssa-', icon: '📐', category: 'grammar' as const, builder: buildLesson14 },

  // 교재 15과
  { id: 'primer-15', title: '15과: 원망형', subtitle: '-eyya', icon: '📐', category: 'grammar' as const, builder: buildLesson15 },

  // 교재 16과
  { id: 'primer-16', title: '16과: 명령형', subtitle: '-tu/-hi', icon: '📐', category: 'grammar' as const, builder: buildLesson16 },

  // 교재 17과
  { id: 'primer-17', title: '17과: 과거형', subtitle: 'Aorist', icon: '📐', category: 'grammar' as const, builder: buildLesson17 },

  // 교재 18과
  { id: 'primer-18', title: '18과: ā-어간 여성명사', subtitle: '여성 격변화', icon: '📐', category: 'grammar' as const, builder: buildLesson18 },

  // ★ 보배경/자비경 삽입 (선택)
  { id: 'ratana', title: 'Ratana Sutta', subtitle: '보배경 (선택)', icon: '💎', category: 'gatha-extra' as const, builder: buildRatanaSteps },
  { id: 'metta', title: 'Metta Sutta', subtitle: '자비경 (선택)', icon: '💛', category: 'gatha-extra' as const, builder: buildMettaSteps },

  // 교재 19과
  { id: 'primer-19', title: '19과: 과거분사', subtitle: '-ta/-na', icon: '📐', category: 'grammar' as const, builder: buildLesson19 },

  // 교재 20과
  { id: 'primer-20', title: '20과: i-어간 여성명사', subtitle: 'i-여성 격변화', icon: '📐', category: 'grammar' as const, builder: buildLesson20 },

  // 교재 21과
  { id: 'primer-21', title: '21과: 현재분사', subtitle: '-anta/-māna', icon: '📐', category: 'grammar' as const, builder: buildLesson21 },

  // 교재 22과
  { id: 'primer-22', title: '22과: 미래수동분사', subtitle: '-tabba/-anīya', icon: '📐', category: 'grammar' as const, builder: buildLesson22 },

  // ★ 전법륜경 삽입 (+ 보충설명)
  { id: 'dhammacakka', title: 'Dhammacakkappavattana Sutta', subtitle: '전법륜경', icon: '☸️', category: 'prose' as const, builder: buildDhammacakkaSteps },

  // 교재 23과
  { id: 'primer-23', title: '23과: 사역형', subtitle: '-āpeti/-eti', icon: '📐', category: 'grammar' as const, builder: buildLesson23 },

  // 교재 24~29과
  { id: 'primer-24-29', title: '24~29과: i/u-어간 격변화', subtitle: '다양한 어간', icon: '📐', category: 'grammar' as const, builder: buildLesson2429 },

  // ★ 무아경 삽입
  { id: 'anatta', title: 'Anattalakkhaṇa Sutta', subtitle: '무아경', icon: '🔍', category: 'prose' as const, builder: buildAnattaSteps },

  // 교재 30~32과 + 복합어 + 수사 + 연성법 + 총정리
  { id: 'primer-30-32', title: '30~32과: 형용사·대명사·복합어·총정리', subtitle: '문법 완성', icon: '📐', category: 'grammar' as const, builder: buildLesson3032 },

  // ★ 사념처경 1부/2부 삽입
  { id: 'satipatthana-1', title: 'Mahāsatipaṭṭhāna Sutta (1부)', subtitle: '사념처경 · 신념처', icon: '🧘', category: 'prose' as const, builder: buildSatipatthana1Steps },
  { id: 'satipatthana-2', title: 'Mahāsatipaṭṭhāna Sutta (2부)', subtitle: '사념처경 · 수심법념처', icon: '🧘', category: 'prose' as const, builder: buildSatipatthana2Steps },
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
