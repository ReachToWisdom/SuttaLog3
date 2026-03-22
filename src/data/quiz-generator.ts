// 퀴즈 자동 생성 — 모든 단어 빠짐없이, 무작위, 격변화 함정
import type { QuizStep, MatchReverseStep, ArrangeReadingStep, ArrangeWritingStep, FillBlankStep, Explanation, Distractor } from './types'
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
  // 동사 인칭 변화
  'viharati': [
    { text: 'viharanti', why: 'viharanti는 복수(~들이 머무시다)이지 단수가 아닙니다' },
    { text: 'vihari', why: 'vihari는 과거형(머무셨다)이지 현재형이 아닙니다' },
    { text: 'viharāma', why: 'viharāma는 1인칭 복수(우리는 머문다)입니다' },
  ],
  // a-어간 남성 전체 (dhamma)
  'dhammo': [
    { text: 'dhammaṃ', why: 'dhammaṃ은 대격(법을)이지 주격(법이)이 아닙니다' },
    { text: 'dhammena', why: 'dhammena는 구격(법에 의해)입니다' },
    { text: 'dhammassa', why: 'dhammassa는 속격(법의)입니다' },
  ],
  'dhammaṃ': [
    { text: 'dhammo', why: 'dhammo는 주격(법이)이지 대격(법을)이 아닙니다' },
    { text: 'dhamme', why: 'dhamme는 처격(법에서)입니다' },
    { text: 'dhammena', why: 'dhammena는 구격(법에 의해)입니다' },
  ],
  // tathāgata 격변화
  'tathāgatena': [
    { text: 'tathāgato', why: 'tathāgato는 주격(여래가)이지 구격이 아닙니다' },
    { text: 'tathāgatassa', why: 'tathāgatassa는 속격(여래의)입니다' },
    { text: 'tathāgataṃ', why: 'tathāgataṃ은 대격(여래를)입니다' },
  ],
  'tathāgato': [
    { text: 'tathāgatena', why: 'tathāgatena는 구격(여래에 의해)입니다' },
    { text: 'tathāgatassa', why: 'tathāgatassa는 속격(여래의)입니다' },
    { text: 'tathāgataṃ', why: 'tathāgataṃ은 대격(여래를)입니다' },
  ],
  // dukkha 격변화
  'dukkhaṃ': [
    { text: 'dukkhassa', why: 'dukkhassa는 속격(고통의)입니다' },
    { text: 'dukkhena', why: 'dukkhena는 구격(고통에 의해)입니다' },
    { text: 'dukkhe', why: 'dukkhe는 처격(고통에서)입니다' },
  ],
  // magga (도)
  'maggo': [
    { text: 'maggaṃ', why: 'maggaṃ은 대격(길을)이지 주격(길이)이 아닙니다' },
    { text: 'maggena', why: 'maggena는 구격(길에 의해)입니다' },
    { text: 'maggassa', why: 'maggassa는 속격(길의)입니다' },
  ],
  // bhikkhu 호격/주격
  'bhikkhave': [
    { text: 'bhikkhū', why: 'bhikkhū는 주격(비구들이)이지 호격이 아닙니다' },
    { text: 'bhikkhunaṃ', why: 'bhikkhunaṃ은 속격(비구들의)입니다' },
    { text: 'bhikkhūhi', why: 'bhikkhūhi는 구격(비구들에 의해)입니다' },
  ],

  // ── 무아경 핵심 단어 ──
  'rūpaṃ': [
    { text: 'rūpassa', why: 'rūpassa는 속격(물질의)이지 주격이 아닙니다' },
    { text: 'rūpena', why: 'rūpena는 구격(물질에 의해)입니다' },
    { text: 'rūpe', why: 'rūpe는 처격(물질에서)입니다' },
  ],
  'vedanā': [
    { text: 'vedanāya', why: 'vedanāya는 여격/처격(느낌에/느낌에서)입니다' },
    { text: 'vedanaṃ', why: 'vedanaṃ은 대격(느낌을)입니다' },
    { text: 'vedanāsu', why: 'vedanāsu는 복수 처격(느낌들에서)입니다' },
  ],
  'saññā': [
    { text: 'saññāya', why: 'saññāya는 여격/처격(인식에서)입니다' },
    { text: 'saññaṃ', why: 'saññaṃ은 대격(인식을)입니다' },
    { text: 'saññāsu', why: 'saññāsu는 복수 처격(인식들에서)입니다' },
  ],
  'saṅkhārā': [
    { text: 'saṅkhāre', why: 'saṅkhāre는 대격 복수(형성들을)입니다' },
    { text: 'saṅkhāresu', why: 'saṅkhāresu는 처격 복수(형성들에서)입니다' },
    { text: 'saṅkhārehi', why: 'saṅkhārehi는 구격 복수(형성들에 의해)입니다' },
  ],
  'viññāṇaṃ': [
    { text: 'viññāṇassa', why: 'viññāṇassa는 속격(의식의)입니다' },
    { text: 'viññāṇena', why: 'viññāṇena는 구격(의식에 의해)입니다' },
    { text: 'viññāṇe', why: 'viññāṇe는 처격(의식에서)입니다' },
  ],
  'anattā': [
    { text: 'attā', why: 'attā는 "자아"이고, anattā는 "무아(자아가 아닌)"입니다 — 정반대!' },
    { text: 'anattaṃ', why: 'anattaṃ은 대격(무아를)이지 주격이 아닙니다' },
    { text: 'anattatā', why: 'anattatā는 추상명사(무아성)입니다' },
  ],
  'aniccaṃ': [
    { text: 'niccaṃ', why: 'niccaṃ은 "영원한"이고, aniccaṃ은 "무상한"입니다 — 정반대!' },
    { text: 'aniccā', why: 'aniccā는 여성/복수형이지 중성 단수가 아닙니다' },
    { text: 'aniccena', why: 'aniccena는 구격(무상한 것에 의해)입니다' },
  ],

  // ── 사념처경 핵심 단어 ──
  'kāye': [
    { text: 'kāyo', why: 'kāyo는 주격(몸이)이지 처격(몸에서)이 아닙니다' },
    { text: 'kāyaṃ', why: 'kāyaṃ은 대격(몸을)입니다' },
    { text: 'kāyassa', why: 'kāyassa는 속격(몸의)입니다' },
  ],
  'satiṃ': [
    { text: 'sati', why: 'sati는 주격(새김이)이지 대격(새김을)이 아닙니다' },
    { text: 'satiyā', why: 'satiyā는 구격/여격(새김에 의해/새김을 위해)입니다' },
    { text: 'satimā', why: 'satimā는 "새김을 가진"이라는 형용사입니다' },
  ],
  'taṇhā': [
    { text: 'taṇhaṃ', why: 'taṇhaṃ은 대격(갈애를)입니다' },
    { text: 'taṇhāya', why: 'taṇhāya는 여격/구격(갈애에 의해)입니다' },
    { text: 'taṇhāsu', why: 'taṇhāsu는 복수 처격(갈애들에서)입니다' },
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

// ── 실용 퀴즈 생성 (수행 중심 — 학문적 분석 없이 뜻 이해에 집중) ──

/** 문법 예시에서 "이 단어/문장의 뜻은?" 퀴즈 생성 */
export function generateGrammarQuizzes(
  grammarSteps: import('./types').TeachGrammarStep[],
): (QuizStep | ArrangeReadingStep | ArrangeWritingStep)[] {
  const quizzes: (QuizStep | ArrangeReadingStep | ArrangeWritingStep)[] = []

  for (const step of grammarSteps) {
    // 뜻 퀴즈: "이 빠알리 표현의 뜻은?"
    if (step.examples.length >= 4) {
      const target = step.examples[Math.floor(Math.random() * step.examples.length)]
      const wrongs = shuffle(step.examples.filter(e => e !== target))
        .slice(0, 3)
        .map(e => e.meaning)
      const options = shuffle([target.meaning, ...wrongs])
      quizzes.push({
        type: 'quiz',
        question: `"${target.pali}"의 뜻은?`,
        options,
        answer: options.indexOf(target.meaning),
        explanation: {
          correct: `${target.pali} = "${target.meaning}"`,
          detail: target.breakdown,
          tip: step.tip,
        },
      })
    }

    // 테이블에서 퀴즈: "이 단어의 뜻은?"
    if (step.table && step.table.rows.length >= 4) {
      const row = step.table.rows[Math.floor(Math.random() * step.table.rows.length)]
      const wrongMeanings = shuffle(step.table.rows.filter(r => r !== row))
        .slice(0, 3)
        .map(r => r.meaning)
      const options = shuffle([row.meaning, ...wrongMeanings])
      quizzes.push({
        type: 'quiz',
        question: `"${row.example}"의 뜻은?`,
        options,
        answer: options.indexOf(row.meaning),
        explanation: {
          correct: `${row.example} = "${row.meaning}"`,
          tip: step.tip,
        },
      })
    }

    // 역방향: 뜻 보고 빠알리 맞추기
    if (step.examples.length >= 3) {
      const ex = step.examples[Math.floor(Math.random() * step.examples.length)]
      const wrongPalis = shuffle(step.examples.filter(e => e !== ex))
        .slice(0, 3)
        .map(e => e.pali)
      const paliOptions = shuffle([ex.pali, ...wrongPalis])
      quizzes.push({
        type: 'quiz',
        question: `"${ex.meaning}"에 해당하는 빠알리는?`,
        options: paliOptions,
        answer: paliOptions.indexOf(ex.pali),
        explanation: {
          correct: `"${ex.meaning}" = ${ex.pali}`,
        },
      })
    }

    // ── 문법 맥락 퀴즈 (헷갈리기 쉬운 쌍/형태 구분) ──

    // 테이블에서: 같은 어근의 다른 형태 구분
    // "buddhassa"와 "buddhaṃ"의 차이는?
    if (step.table && step.table.rows.length >= 3) {
      const rows = shuffle([...step.table.rows])
      const r1 = rows[0]
      const r2 = rows[1]
      if (r1.example !== r2.example) {
        const options = shuffle([
          `"${r1.example}"은 "${r1.meaning}", "${r2.example}"은 "${r2.meaning}"`,
          `"${r1.example}"은 "${r2.meaning}", "${r2.example}"은 "${r1.meaning}"`,
          `둘 다 "${r1.meaning}"`,
          `둘 다 "${r2.meaning}"`,
        ])
        const correct = options[0]
        quizzes.push({
          type: 'quiz',
          question: `"${r1.example}"과 "${r2.example}"의 차이는?`,
          options: shuffle(options),
          answer: shuffle(options).indexOf(correct),
          explanation: {
            correct: `${r1.example} = ${r1.meaning} (${r1.ending})\n${r2.example} = ${r2.meaning} (${r2.ending})`,
            tip: '같은 어근이라도 어미에 따라 뜻이 달라집니다.',
          },
        })
        // answer 재계산
        const q = quizzes[quizzes.length - 1] as QuizStep
        q.answer = q.options.indexOf(correct)
      }
    }

    // 예시에서: 반대/유사 쌍 구분
    // "anattā vs attā", "aniccaṃ vs niccaṃ" 등
    if (step.examples.length >= 2) {
      for (let i = 0; i < step.examples.length - 1; i++) {
        const e1 = step.examples[i]
        const e2 = step.examples[i + 1]
        // 비슷한 형태인지 확인 (3글자 이상 공통)
        const common = e1.pali.slice(0, 3) === e2.pali.slice(0, 3) ||
                       e1.pali.includes(e2.pali) || e2.pali.includes(e1.pali)
        if (common && e1.meaning !== e2.meaning) {
          const options = shuffle([e1.meaning, e2.meaning,
            ...shuffle(step.examples.filter(e => e !== e1 && e !== e2)).slice(0, 2).map(e => e.meaning)
          ].slice(0, 4))
          quizzes.push({
            type: 'quiz',
            question: `"${e1.pali}"은(는) "${e2.pali}"과 어떻게 다릅니까?\n"${e1.pali}"의 뜻은?`,
            options,
            answer: options.indexOf(e1.meaning),
            explanation: {
              correct: `${e1.pali} = "${e1.meaning}"\n${e2.pali} = "${e2.meaning}"`,
              detail: `${e1.breakdown}\n${e2.breakdown}`,
              tip: '비슷해 보이지만 접두사/어미/격에 따라 뜻이 완전히 달라집니다.',
            },
          })
          break // 한 쌍만
        }
      }
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

// ── verse 데이터 타입 ──
export interface VerseData {
  pali: string
  translation: string
  words: VerseWord[]
}

// ── 빈칸 채우기 퀴즈 생성 ──

/** verse에서 CASE_DISTRACTORS에 해당하는 단어를 빈칸으로 만든 퀴즈 생성 */
export function generateFillBlankQuizzes(verses: VerseData[]): FillBlankStep[] {
  const quizzes: FillBlankStep[] = []

  for (const verse of verses) {
    for (const word of verse.words) {
      const distractors = CASE_DISTRACTORS[word.pali]
      if (!distractors || distractors.length < 3) continue

      // 문장에서 해당 단어를 ___로 대체
      const sentence = verse.pali.replace(word.pali, '___')
      // 단어가 문장에 실제로 있는지 확인
      if (sentence === verse.pali) continue

      // 정답 + 오답 3개
      const wrongOptions = shuffle(distractors).slice(0, 3).map(d => d.text)
      const options = shuffle([word.pali, ...wrongOptions])

      quizzes.push({
        type: 'fill-blank',
        sentence,
        translation: verse.translation,
        blank: word.pali,
        options,
        answer: options.indexOf(word.pali),
        explanation: {
          correct: `정답: "${word.pali}" (${word.grammar ?? ''})`,
          detail: distractors.slice(0, 3).map(d => `• ${d.text}: ${d.why}`).join('\n'),
          tip: '같은 어근이라도 격에 따라 형태가 달라집니다. 문맥을 보고 판단하세요.',
        },
      })
    }
  }

  return shuffle(quizzes)
}

// ── 문장 작문 퀴즈 생성 (verse 기반) ──

/** 짧은 구절만 선택하여 한글→빠알리 문장 작문 퀴즈 생성 */
export function generateSentenceQuizzes(verses: VerseData[]): ArrangeWritingStep[] {
  const quizzes: ArrangeWritingStep[] = []

  // 실제 pali 텍스트 단어 수로 필터 (3~8단어, 번역 50자 이하)
  const shortVerses = verses.filter(v => {
    const paliWordCount = v.pali.split(/\s+/).length
    return paliWordCount >= 3 && paliWordCount <= 8 && v.translation.length <= 50
  })

  for (const verse of shortVerses) {
    // 실제 pali 단어를 조각으로 사용 (WORDS 배열이 아닌 본문 기준)
    const pieces = verse.pali.split(/\s+/).filter(w => w.length > 0)

    // CASE_DISTRACTORS에서 함정 수집
    const allDistractors: Distractor[] = []
    for (const word of verse.words) {
      const traps = CASE_DISTRACTORS[word.pali]
      if (traps) {
        // 이미 정답에 있는 단어는 제외
        const filtered = traps.filter(t => !pieces.includes(t.text))
        for (const trap of filtered.slice(0, 1)) {
          allDistractors.push({ text: trap.text, why: trap.why })
        }
      }
    }

    quizzes.push({
      type: 'arrange-writing',
      korean: verse.translation,
      pieces,
      distractors: allDistractors.slice(0, 3),
      explanation: {
        correct: `올바른 순서: ${pieces.join(' ')}`,
        detail: verse.words.slice(0, 8).map(w => `• ${w.pali} = ${w.meaning}`).join('\n'),
        tip: '격변화와 어순에 주의하세요.',
      },
    })
  }

  return shuffle(quizzes)
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
