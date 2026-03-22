// 퀴즈 자동 생성 — 모든 단어 빠짐없이, 무작위, 격변화 함정
import type { QuizStep, MatchReverseStep, ArrangeReadingStep, ArrangeWritingStep, Explanation, Distractor } from './types'
import type { VerseWord } from './types'

// ── 격변화 함정 사전 ──
// 동일 어근에서 파생된 다른 격/형태 → 대충 알면 못 맞추게
const CASE_DISTRACTORS: Record<string, { text: string; why: string }[]> = {
  'me': [
    { text: 'mayā', why: 'mayā는 구격(~에 의해)이지 주격(나는)이 아닙니다' },
    { text: 'mama', why: 'mama는 속격(나의)이지 주격(나는)이 아닙니다' },
    { text: 'maṃ', why: 'maṃ은 대격(나를)이지 주격(나는)이 아닙니다' },
  ],
  'sutaṃ': [
    { text: 'sutassa', why: 'sutassa는 속격(들은 것의)입니다' },
    { text: 'sutena', why: 'sutena는 구격(들은 것에 의해)입니다' },
    { text: 'suttaṃ', why: 'suttaṃ은 경전(sutta)의 대격이지, 듣다(suṇāti)의 분사가 아닙니다' },
  ],
  'bhagavā': [
    { text: 'bhagavato', why: 'bhagavato는 속격/여격(세존의/세존에게)입니다' },
    { text: 'bhagavantaṃ', why: 'bhagavantaṃ은 대격(세존을)입니다' },
    { text: 'bhagavatā', why: 'bhagavatā는 구격(세존에 의해)입니다' },
  ],
  'devā': [
    { text: 'devānaṃ', why: 'devānaṃ은 속격(천신들의)이지 주격(천신들이)이 아닙니다' },
    { text: 'devaṃ', why: 'devaṃ은 단수 대격(천신을)입니다' },
    { text: 'devehi', why: 'devehi는 구격(천신들에 의해)입니다' },
  ],
  'maṅgalāni': [
    { text: 'maṅgalaṃ', why: 'maṅgalaṃ은 단수(행복을), maṅgalāni는 복수(행복들을)입니다' },
    { text: 'maṅgalassa', why: 'maṅgalassa는 속격(행복의)입니다' },
    { text: 'maṅgalehi', why: 'maṅgalehi는 구격(행복들에 의해)입니다' },
  ],
  'bālānaṃ': [
    { text: 'bālā', why: 'bālā는 주격(어리석은 이들이)이지 속격이 아닙니다' },
    { text: 'bālaṃ', why: 'bālaṃ은 단수 대격(어리석은 이를)입니다' },
    { text: 'bālehi', why: 'bālehi는 구격(어리석은 이들에 의해)입니다' },
  ],
  'dhammesu': [
    { text: 'dhammaṃ', why: 'dhammaṃ은 단수 대격(법을), dhammesu는 복수 처격(법들에서)입니다' },
    { text: 'dhammā', why: 'dhammā는 복수 주격(법들이)입니다' },
    { text: 'dhammassa', why: 'dhammassa는 단수 속격(법의)입니다' },
  ],
  'cittaṃ': [
    { text: 'cittassa', why: 'cittassa는 속격(마음의)입니다' },
    { text: 'cittena', why: 'cittena는 구격(마음에 의해)입니다' },
    { text: 'cittesu', why: 'cittesu는 복수 처격(마음들에서)입니다' },
  ],
  'kammāni': [
    { text: 'kammaṃ', why: 'kammaṃ은 단수(행위를), kammāni는 복수(행위들)입니다' },
    { text: 'kammassa', why: 'kammassa는 단수 속격(행위의)입니다' },
    { text: 'kammehi', why: 'kammehi는 복수 구격(행위들에 의해)입니다' },
  ],
}

// ── 유틸리티 ──

/** 배열 셔플 (Fisher-Yates) */
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/** 해당 단어를 제외한 나머지 단어에서 랜덤 N개 선택 */
function pickRandom<T>(arr: T[], exclude: T, count: number): T[] {
  const filtered = arr.filter(item => item !== exclude)
  return shuffle(filtered).slice(0, count)
}

// ── 퀴즈 생성 함수들 ──

/** 발음 퀴즈: 글자 보고 → 한글 발음 맞추기 */
export function genPronQuiz(target: VerseWord, allWords: VerseWord[]): QuizStep {
  const wrongOptions = pickRandom(allWords, target, 3).map(w => w.pronKo)
  const options = shuffle([target.pronKo, ...wrongOptions])
  return {
    type: 'quiz',
    question: `"${target.pali}"의 발음은?`,
    options,
    answer: options.indexOf(target.pronKo),
    explanation: {
      correct: `${target.pali}는 "${target.pronKo}"로 발음합니다.`,
      detail: target.grammar ? `문법: ${target.grammar}` : undefined,
    },
    hint: target.meaning,
  }
}

/** 단어 뜻 퀴즈: 빠알리 보고 → 한글 뜻 맞추기 */
export function genMeaningQuiz(target: VerseWord, allWords: VerseWord[]): QuizStep {
  const wrongOptions = pickRandom(allWords, target, 3).map(w => w.meaning)
  const options = shuffle([target.meaning, ...wrongOptions])
  return {
    type: 'quiz',
    question: `"${target.pali}"의 뜻은?`,
    options,
    answer: options.indexOf(target.meaning),
    explanation: {
      correct: `${target.pali} (${target.pronKo}) = "${target.meaning}"`,
      detail: target.grammar ? `문법: ${target.grammar}` : undefined,
      tip: target.grammar?.includes('격')
        ? `격변화에 주의하세요. 같은 단어도 격에 따라 뜻이 달라집니다.`
        : undefined,
    },
  }
}

/** 역방향 퀴즈: 뜻 보고 → 빠알리 맞추기 (격변화 함정) */
export function genReverseQuiz(target: VerseWord, allWords: VerseWord[]): MatchReverseStep {
  // 격변화 함정이 있으면 우선 사용
  const caseTraps = CASE_DISTRACTORS[target.pali]
  let options: string[]
  let explanation: Explanation

  if (caseTraps && caseTraps.length >= 2) {
    // 격변화 함정 2개 + 일반 오답 1개
    const traps = shuffle(caseTraps).slice(0, 2)
    const generalWrong = pickRandom(allWords, target, 1).map(w => w.pali)
    options = shuffle([target.pali, ...traps.map(t => t.text), ...generalWrong])
    explanation = {
      correct: `정답은 "${target.pali}" (${target.grammar})입니다.`,
      detail: traps.map(t => `• ${t.text}: ${t.why}`).join('\n'),
      tip: '같은 어근이라도 격에 따라 형태가 달라집니다.',
    }
  } else {
    // 격변화 함정 없으면 일반 오답
    const wrongOptions = pickRandom(allWords, target, 3).map(w => w.pali)
    options = shuffle([target.pali, ...wrongOptions])
    explanation = {
      correct: `"${target.meaning}" = ${target.pali} (${target.pronKo})`,
      detail: target.grammar ? `문법: ${target.grammar}` : undefined,
    }
  }

  return {
    type: 'match-reverse',
    meaning: target.meaning,
    options,
    answer: options.indexOf(target.pali),
    explanation,
  }
}

/** 독해 조립: 빠알리 문장 → 한글 조각 조립 */
export function genReadingArrange(
  pali: string,
  correctPieces: string[],
  distractors: Distractor[],
): ArrangeReadingStep {
  return {
    type: 'arrange-reading',
    pali,
    pieces: correctPieces,
    distractors,
    explanation: {
      correct: `올바른 순서: ${correctPieces.join(' ')}`,
      detail: distractors.length > 0
        ? `함정 조각 설명:\n${distractors.map(d => `• "${d.text}": ${d.why}`).join('\n')}`
        : undefined,
    },
  }
}

/** 작문 조립: 한글 문장 → 빠알리 조각 조립 */
export function genWritingArrange(
  korean: string,
  correctPieces: string[],
  distractors: Distractor[],
): ArrangeWritingStep {
  return {
    type: 'arrange-writing',
    korean,
    pieces: correctPieces,
    distractors,
    explanation: {
      correct: `올바른 순서: ${correctPieces.join(' ')}`,
      detail: distractors.length > 0
        ? `함정 조각 설명:\n${distractors.map(d => `• "${d.text}": ${d.why}`).join('\n')}`
        : undefined,
      tip: '격변화와 연성법에 주의하세요.',
    },
  }
}

// ── 문법 퀴즈 생성 (산문 경전용) ──

/** TeachGrammarStep의 예시/테이블에서 문법+문장구성 퀴즈 자동 생성 */
export function generateGrammarQuizzes(
  grammarSteps: import('./types').TeachGrammarStep[],
): (QuizStep | ArrangeReadingStep | ArrangeWritingStep)[] {
  const quizzes: (QuizStep | ArrangeReadingStep | ArrangeWritingStep)[] = []

  for (const step of grammarSteps) {
    // 예시에서 퀴즈: 빠알리 → 의미 매칭
    if (step.examples.length >= 4) {
      const target = step.examples[Math.floor(Math.random() * step.examples.length)]
      const wrongs = shuffle(step.examples.filter(e => e !== target))
        .slice(0, 3)
        .map(e => e.meaning)
      const options = shuffle([target.meaning, ...wrongs])
      quizzes.push({
        type: 'quiz',
        question: `"${target.pali}"의 문법적 의미는?`,
        options,
        answer: options.indexOf(target.meaning),
        explanation: {
          correct: `${target.pali} = ${target.breakdown}`,
          detail: `${target.meaning}`,
          tip: step.tip,
        },
      })
    }

    // 테이블에서 퀴즈: 격/형태 → 어미 매칭
    if (step.table && step.table.rows.length >= 4) {
      const row = step.table.rows[Math.floor(Math.random() * step.table.rows.length)]
      const wrongEndings = shuffle(step.table.rows.filter(r => r !== row))
        .slice(0, 3)
        .map(r => r.ending)
      const options = shuffle([row.ending, ...wrongEndings])
      quizzes.push({
        type: 'quiz',
        question: `${step.table.label}에서 ${row.case}의 어미는?`,
        options,
        answer: options.indexOf(row.ending),
        explanation: {
          correct: `${row.case}: ${row.ending} (예: ${row.example} = ${row.meaning})`,
          tip: step.tip,
        },
      })

      // 예시 → 격 판별 퀴즈
      const row2 = step.table.rows[Math.floor(Math.random() * step.table.rows.length)]
      const wrongCases = shuffle(step.table.rows.filter(r => r !== row2))
        .slice(0, 3)
        .map(r => r.case)
      const caseOptions = shuffle([row2.case, ...wrongCases])
      quizzes.push({
        type: 'quiz',
        question: `"${row2.example}"은(는) 어떤 형태입니까?`,
        options: caseOptions,
        answer: caseOptions.indexOf(row2.case),
        explanation: {
          correct: `${row2.example} = ${row2.meaning} (${row2.case}, 어미: ${row2.ending})`,
        },
      })
    }

    // 분해(breakdown) 퀴즈
    if (step.examples.length >= 3) {
      const ex = step.examples[Math.floor(Math.random() * step.examples.length)]
      const wrongBreakdowns = shuffle(step.examples.filter(e => e !== ex))
        .slice(0, 3)
        .map(e => e.breakdown)
      const bdOptions = shuffle([ex.breakdown, ...wrongBreakdowns])
      quizzes.push({
        type: 'quiz',
        question: `"${ex.pali}"의 문법적 분해는?`,
        options: bdOptions,
        answer: bdOptions.indexOf(ex.breakdown),
        explanation: {
          correct: `${ex.pali} = ${ex.breakdown} → "${ex.meaning}"`,
        },
      })
    }

    // 문장 구성 퀴즈: 테이블 데이터로 문법 함정 포함
    // 같은 단어의 다른 격/형태를 함정으로 → 문법 이해 없이 못 풀게
    if (step.table && step.table.rows.length >= 3) {
      const rows = step.table.rows
      // 2~3개 행을 정답으로 선택
      const correctRows = shuffle(rows).slice(0, Math.min(3, rows.length))
      // 나머지 행에서 함정 추출 (같은 단어의 다른 격/형태)
      const trapRows = rows.filter(r => !correctRows.includes(r))

      // 작문 조립: 한글 뜻 보고 → 올바른 빠알리 형태 배열
      // 예: "법이, 법을, 법에서" → [dhammo, dhammaṃ, dhamme]
      // 함정: dhammassa(속격), dhammehi(구격) 등
      quizzes.push({
        type: 'arrange-writing',
        korean: correctRows.map(r => `${r.meaning} (${r.case})`).join(' / '),
        pieces: correctRows.map(r => r.example),
        distractors: trapRows.slice(0, 2).map(r => ({
          text: r.example,
          why: `"${r.example}"은 ${r.case}(${r.ending}) 형태이므로 문맥에 맞지 않습니다`,
        })),
        explanation: {
          correct: correctRows.map(r => `${r.case}: ${r.example} (${r.ending})`).join(' / '),
          detail: `${step.table.label}\n${rows.map(r => `• ${r.case}: ${r.example} = ${r.meaning}`).join('\n')}`,
          tip: '격변화 어미에 주의하세요. 같은 단어라도 문법적 역할에 따라 형태가 달라집니다.',
        },
      })

      // 독해 조립: 빠알리 형태 보고 → 올바른 한글 뜻 순서 배열
      const readRows = shuffle(rows).slice(0, Math.min(3, rows.length))
      const readTraps = rows.filter(r => !readRows.includes(r))
      quizzes.push({
        type: 'arrange-reading',
        pali: readRows.map(r => r.example).join(' / '),
        pieces: readRows.map(r => `${r.meaning} (${r.case})`),
        distractors: readTraps.slice(0, 2).map(r => ({
          text: `${r.meaning} (${r.case})`,
          why: `"${r.example}"(${r.ending})은 ${r.case}이므로 여기에 해당하지 않습니다`,
        })),
        explanation: {
          correct: readRows.map(r => `${r.example} → ${r.meaning}`).join(' / '),
          detail: readRows.map(r => `• ${r.example}: ${r.case}, 어미 ${r.ending}`).join('\n'),
        },
      })
    }

    // 예시 기반 작문 조립: 분해 구조 이해 테스트
    if (step.examples.length >= 3) {
      const exs = shuffle(step.examples).slice(0, 3)
      // 빠알리 분해 보고 → 올바른 빠알리 원형 배열
      const otherExs = step.examples.filter(e => !exs.includes(e))
      quizzes.push({
        type: 'arrange-writing',
        korean: exs.map(e => `${e.meaning}`).join(', '),
        pieces: exs.map(e => e.pali),
        distractors: otherExs.slice(0, 2).map(e => ({
          text: e.pali,
          why: `"${e.pali}"(${e.breakdown})는 "${e.meaning}"이므로 이 문맥의 답이 아닙니다`,
        })),
        explanation: {
          correct: exs.map(e => `${e.meaning} → ${e.pali}`).join(' / '),
          detail: exs.map(e => `• ${e.pali} = ${e.breakdown}`).join('\n'),
          tip: step.tip,
        },
      })
    }
  }

  return shuffle(quizzes)
}

// ── 단원 전체 퀴즈 세트 생성 ──

export interface QuizSet {
  pronQuizzes: QuizStep[]        // 발음 퀴즈 (모든 단어)
  meaningQuizzes: QuizStep[]     // 뜻 퀴즈 (모든 단어)
  reverseQuizzes: MatchReverseStep[]  // 역방향 퀴즈 (모든 단어)
}

/** 모든 단어에 대해 발음+뜻+역방향 퀴즈 세트 생성 (빠짐없이) */
export function generateFullQuizSet(words: VerseWord[]): QuizSet {
  return {
    pronQuizzes: words.map(w => genPronQuiz(w, words)),
    meaningQuizzes: words.map(w => genMeaningQuiz(w, words)),
    reverseQuizzes: words.map(w => genReverseQuiz(w, words)),
  }
}

/** 무작위 혼합 퀴즈 (발음+뜻+역방향 랜덤 섞기, 모든 단어 1번 이상) */
export function generateMixedQuizzes(words: VerseWord[]): (QuizStep | MatchReverseStep)[] {
  const all: (QuizStep | MatchReverseStep)[] = []
  for (const word of words) {
    // 각 단어당 3가지 유형 중 무작위 선택 (최소 1개 보장)
    const quizTypes = shuffle(['pron', 'meaning', 'reverse'] as const)
    // 첫 번째 유형은 반드시 포함 (모든 단어 커버)
    for (const qType of quizTypes.slice(0, 1 + Math.floor(Math.random() * 2))) {
      switch (qType) {
        case 'pron': all.push(genPronQuiz(word, words)); break
        case 'meaning': all.push(genMeaningQuiz(word, words)); break
        case 'reverse': all.push(genReverseQuiz(word, words)); break
      }
    }
  }
  return shuffle(all)
}
