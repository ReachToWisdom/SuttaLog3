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
