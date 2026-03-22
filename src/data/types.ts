// 학습 스텝 타입 정의

// ── 공통 해설 ──
export interface Explanation {
  correct: string    // 정답 해설
  detail?: string    // 상세 문법 설명 (선택)
  tip?: string       // 암기 팁 (선택)
}

// ── 함정 선택지 (격변화/접미어 차이) ──
export interface Distractor {
  text: string       // 선택지 텍스트
  why?: string       // 왜 오답인지 (해설용)
}

// ── 스텝 타입 ──

/** 단원 시작 소개 */
export interface IntroStep {
  type: 'intro'
  title: string
  subtitle: string
  description: string
  icon: string
}

/** 단어/발음 카드 학습 */
export interface TeachStep {
  type: 'teach'
  word: string           // 빠알리어
  pronKo: string         // 한글 발음
  pronEn?: string        // 영어 발음 (설정에서 ON 시 표시)
  meaning: string        // 뜻
  grammar?: string       // 문법 태그 (예: "주격 남성 단수")
  root?: string          // 어근
  icon?: string
  verseLine?: string     // 이 단어가 나오는 경전 구절
  verseLineKo?: string   // 구절 한글 번역
}

/** 4지선다 퀴즈 (발음/단어 뜻) */
export interface QuizStep {
  type: 'quiz'
  question: string
  options: string[]
  answer: number         // 정답 인덱스
  explanation: Explanation
  hint?: string
}

/** 음성 듣고 맞추기 */
export interface MatchListenStep {
  type: 'match-listen'
  word: string           // 재생할 빠알리어
  options: string[]      // 선택지 (빠알리어 or 한글 발음)
  answer: number
  explanation: Explanation
}

/** 뜻 보고 빠알리어 맞추기 */
export interface MatchReverseStep {
  type: 'match-reverse'
  meaning: string        // 보여줄 한글 뜻
  options: string[]      // 빠알리어 선택지 (격변화 함정 포함)
  answer: number
  explanation: Explanation
}

/** 독해 조립: 빠알리어 보고 → 한글 조각으로 문장 조립 */
export interface ArrangeReadingStep {
  type: 'arrange-reading'
  pali: string           // 빠알리 원문
  pieces: string[]       // 한글 조각 (정답 순서)
  distractors: Distractor[]  // 함정 조각 (격 차이 등)
  explanation: Explanation
}

/** 작문 조립: 한글 보고 → 빠알리어 조각으로 문장 조립 */
export interface ArrangeWritingStep {
  type: 'arrange-writing'
  korean: string         // 한글 원문
  pieces: string[]       // 빠알리어 조각 (정답 순서)
  distractors: Distractor[]  // 함정 조각 (접미어/격 변화)
  explanation: Explanation
}

/** 경전 원문 표시 + 단어별 터치 */
export interface VerseStep {
  type: 'verse'
  pali: string
  pronKo: string
  translation: string
  words: VerseWord[]     // 단어별 정보
  note?: string
}

export interface VerseWord {
  pali: string
  pronKo: string
  pronEn?: string        // 영어 발음 (설정에서 ON 시 표시)
  meaning: string
  grammar?: string
  /** 복습 우선순위: true면 다음 단원에서도 복습 대상 */
  important?: boolean
}

/** 문법 설명 스텝 */
export interface TeachGrammarStep {
  type: 'teach-grammar'
  title: string            // 예: "격변화: 처격 (-yaṃ)"
  description: string      // 문법 설명
  examples: GrammarExample[]
  table?: GrammarTable     // 격변화 테이블 (선택)
  tip?: string             // 암기 팁
  relatedLesson?: string   // "행복경에서도 나왔습니다" 연결
}

export interface GrammarExample {
  pali: string             // 예: "bārāṇasiyaṃ"
  breakdown: string        // 예: "bārāṇasī + yaṃ"
  meaning: string          // 예: "바라나시에서"
  highlight?: string       // 강조 부분 (예: "yaṃ")
}

export interface GrammarTable {
  label: string            // 예: "ī 어간 여성 명사 격변화"
  rows: { case: string; ending: string; example: string; meaning: string }[]
}

// ── 유니온 타입 ──
export type Step =
  | IntroStep
  | TeachStep
  | TeachGrammarStep
  | QuizStep
  | MatchListenStep
  | MatchReverseStep
  | ArrangeReadingStep
  | ArrangeWritingStep
  | VerseStep

// ── 단원 메타데이터 ──
export interface LessonInfo {
  id: string
  title: string
  subtitle: string
  icon: string
  category: 'basic' | 'grammar' | 'gatha' | 'gatha-extra' | 'dhammapada' | 'prose'
  steps: Step[]
}

// ── 자모 데이터 ──
export interface PaliLetter {
  roman: string          // 로마자 (예: "ca")
  pronKo: string         // 한글 발음 (예: "짜")
  pronDesc?: string      // 발음 설명 (예: "영어 ch와 비슷하지만 더 짧게")
  example?: string       // 예시 단어
  examplePronKo?: string // 예시 단어 한글 발음
  exampleMeaning?: string // 예시 뜻
}
