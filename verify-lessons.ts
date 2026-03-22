// 단원 빌더 검증 스크립트
// 각 lesson의 steps 생성 여부와 타입 분포를 확인
import { getLessonById, LESSONS } from './src/data/lessons-index.js'
import type { Step } from './src/data/types.js'

// ── 설정 ──

/** 검증 대상 lesson ID 목록 */
const LESSON_IDS = [
  'alphabet',
  'grammar-basics',
  'mangala',
  'ratana',
  'metta',
  'grammar-advanced',
  'dhammacakka',
  'anatta',
  'satipatthana',
]

/** 산문 경전(prose): arrange-reading/writing 대신 teach-grammar 기반 퀴즈를 사용 */
const PROSE_IDS = new Set(['dhammacakka', 'anatta', 'satipatthana'])

// ── 유틸 ──

/** Step 타입별 개수 집계 */
function countStepTypes(steps: Step[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const step of steps) {
    counts[step.type] = (counts[step.type] ?? 0) + 1
  }
  return counts
}

/** 타입 분포 포맷 출력 */
function formatCounts(counts: Record<string, number>): string {
  return Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([type, count]) => `${type}:${count}`)
    .join(', ')
}

// ── 검증 함수 ──

interface CheckResult {
  id: string
  passed: boolean
  issues: string[]
}

/** 단일 lesson 검증 */
function verifyLesson(id: string): CheckResult {
  const issues: string[] = []

  // 1. getLessonById 호출 가능 여부
  let lesson: ReturnType<typeof getLessonById>
  try {
    lesson = getLessonById(id)
  } catch (err) {
    return {
      id,
      passed: false,
      issues: [`getLessonById 호출 중 예외 발생: ${err}`],
    }
  }

  if (!lesson) {
    return {
      id,
      passed: false,
      issues: ['getLessonById가 undefined를 반환함'],
    }
  }

  const { steps } = lesson

  // 2. steps 배열 존재 및 비어 있지 않은지 확인
  if (!Array.isArray(steps)) {
    issues.push('steps가 배열이 아님')
    return { id, passed: false, issues }
  }
  if (steps.length === 0) {
    issues.push('steps가 비어 있음')
    return { id, passed: false, issues }
  }

  const counts = countStepTypes(steps)

  // 3. 첫 step이 intro인지 확인
  if (steps[0].type !== 'intro') {
    issues.push(`첫 step이 intro가 아님: ${steps[0].type}`)
  }

  // 4. quiz 또는 teach-grammar 파생 퀴즈가 존재하는지 확인
  const hasAnyQuiz =
    (counts['quiz'] ?? 0) > 0 ||
    (counts['arrange-reading'] ?? 0) > 0 ||
    (counts['arrange-writing'] ?? 0) > 0 ||
    (counts['match-reverse'] ?? 0) > 0

  if (!hasAnyQuiz) {
    issues.push('퀴즈 step이 하나도 없음 (quiz / arrange / match-reverse 모두 0)')
  }

  // 5. 산문 경전 전용 검증
  if (PROSE_IDS.has(id)) {
    // 5-1. teach 타입이 없는지 확인 (vocab-list로 대체됨)
    if ((counts['teach'] ?? 0) > 0) {
      issues.push(`산문 경전에 teach 타입이 있음 (vocab-list로 대체되어야 함): ${counts['teach']}개`)
    }

    // 5-2. vocab-list가 있는지 확인
    if ((counts['vocab-list'] ?? 0) === 0) {
      issues.push('산문 경전에 vocab-list 스텝이 없음')
    }

    // 5-3. teach-grammar가 있는지 확인
    if ((counts['teach-grammar'] ?? 0) === 0) {
      issues.push('산문 경전에 teach-grammar 스텝이 없음')
    }

    // 5-4. arrange-reading/writing 포함 여부 출력 (있으면 주목)
    const hasArrange =
      (counts['arrange-reading'] ?? 0) > 0 ||
      (counts['arrange-writing'] ?? 0) > 0
    if (hasArrange) {
      issues.push(
        `[INFO] 산문 경전에 arrange 퀴즈 포함: ` +
        `arrange-reading:${counts['arrange-reading'] ?? 0}, arrange-writing:${counts['arrange-writing'] ?? 0}`,
      )
    }
  }

  // 6. 게송 경전(행복경)은 arrange-reading/writing이 있어야 함
  if (id === 'mangala') {
    if ((counts['arrange-reading'] ?? 0) === 0) {
      issues.push('행복경에 arrange-reading 스텝이 없음')
    }
    if ((counts['arrange-writing'] ?? 0) === 0) {
      issues.push('행복경에 arrange-writing 스텝이 없음')
    }
  }

  // 7. verse step이 있는지 확인 (alphabet, grammar-* 제외)
  const needsVerse = !['alphabet', 'grammar-basics', 'grammar-advanced'].includes(id)
  if (needsVerse && (counts['verse'] ?? 0) === 0) {
    issues.push('verse step이 없음')
  }

  // 오류가 아닌 INFO 메시지는 통과로 처리
  const realIssues = issues.filter(i => !i.startsWith('[INFO]'))
  return { id, passed: realIssues.length === 0, issues }
}

// ── 메인 실행 ──

console.log('='.repeat(60))
console.log('  단원(lesson) 빌더 검증 보고서')
console.log('='.repeat(60))
console.log()

// LESSONS 목록 출력
console.log(`[전체 단원 목록] LESSONS 배열 길이: ${LESSONS.length}`)
for (const lesson of LESSONS) {
  console.log(`  - ${lesson.id} (${lesson.title}) [category: ${lesson.category}]`)
}
console.log()

// 개별 검증 실행
let passCount = 0
let failCount = 0
const results: CheckResult[] = []

for (const id of LESSON_IDS) {
  const result = verifyLesson(id)
  results.push(result)

  // getLessonById 재호출 (step 상세 출력용)
  const lesson = getLessonById(id)
  const steps = lesson?.steps ?? []
  const counts = countStepTypes(steps)

  const status = result.passed ? '✓ PASS' : '✗ FAIL'
  console.log(`[${status}] ${id} (총 ${steps.length}개 스텝)`)
  console.log(`  타입 분포: ${formatCounts(counts)}`)

  if (result.issues.length > 0) {
    for (const issue of result.issues) {
      const prefix = issue.startsWith('[INFO]') ? '  INFO' : '  문제'
      console.log(`  ${prefix}: ${issue}`)
    }
  }
  console.log()

  if (result.passed) passCount++
  else failCount++
}

// ── 최종 요약 ──

console.log('='.repeat(60))
console.log('  최종 결과 요약')
console.log('='.repeat(60))
console.log(`  통과: ${passCount}/${LESSON_IDS.length}`)
console.log(`  실패: ${failCount}/${LESSON_IDS.length}`)

if (failCount > 0) {
  console.log()
  console.log('  [실패 목록]')
  for (const r of results.filter(r => !r.passed)) {
    console.log(`  - ${r.id}`)
    for (const issue of r.issues.filter(i => !i.startsWith('[INFO]'))) {
      console.log(`      ${issue}`)
    }
  }
  process.exit(1)
} else {
  console.log()
  console.log('  모든 단원 빌더가 정상적으로 동작합니다.')
  process.exit(0)
}
