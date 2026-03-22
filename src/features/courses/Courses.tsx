// 과목 화면 — 문법 목차 + 경전 목차 이중 표시
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LESSONS } from '../../data/lessons-index'
import { STORAGE_PREFIX } from '../../config'

type ViewMode = 'path' | 'grammar'

function getProgress(lessonId: string): number {
  const val = localStorage.getItem(`${STORAGE_PREFIX}lesson-${lessonId}`)
  return parseFloat(val ?? '0') || 0
}

// ── 경전 학습 경로 (교재 순서 + 경전 실전) ──
const PATH_SECTIONS = [
  {
    title: '교재 1과 · 발음',
    color: '#6B7280',
    lessons: ['primer-01'],
  },
  {
    title: '교재 2~8과 · a-어간 남성',
    color: '#5B21B6',
    lessons: ['primer-02-08'],
  },
  {
    title: '교재 9~13과 · 절대분사·부정사·중성·동사',
    color: '#5B21B6',
    lessons: ['primer-09', 'primer-10', 'primer-11', 'primer-12-13'],
  },
  {
    title: '★ 행복경',
    color: 'var(--color-primary)',
    subtitle: 'a-어간+동사+절대분사 실전',
    lessons: ['mangala'],
  },
  {
    title: '교재 14~18과 · 미래·원망·명령·과거·여성',
    color: '#5B21B6',
    lessons: ['primer-14', 'primer-15', 'primer-16', 'primer-17', 'primer-18'],
  },
  {
    title: '★ 보배경·자비경 (선택)',
    color: '#D97706',
    subtitle: '여성+명령+과거형 실전',
    lessons: ['ratana', 'metta'],
  },
  {
    title: '교재 19~22과 · 분사',
    color: '#5B21B6',
    lessons: ['primer-19', 'primer-20', 'primer-21', 'primer-22'],
  },
  {
    title: '★ 전법륜경',
    color: '#7C3AED',
    subtitle: '분사+격변화 실전',
    lessons: ['dhammacakka'],
  },
  {
    title: '교재 23~29과 · 사역·i/u-어간',
    color: '#5B21B6',
    lessons: ['primer-23', 'primer-24-29'],
  },
  {
    title: '★ 무아경',
    color: '#7C3AED',
    subtitle: '다양한 어간+분사 실전',
    lessons: ['anatta'],
  },
  {
    title: '교재 30~32과 · 형용사·대명사·복합어·총정리',
    color: '#5B21B6',
    lessons: ['primer-30-32'],
  },
  {
    title: '★ 사념처경',
    color: '#7C3AED',
    subtitle: '문법 완성 후 최종 독해',
    lessons: ['satipatthana-1', 'satipatthana-2'],
  },
]

// ── 문법 학습 경로 (교재 32과 전체, 경전과 매칭) ──
const GRAMMAR_SECTIONS = [
  {
    title: '발음',
    color: '#6B7280',
    icon: '🔤',
    items: [
      { label: '1과: 자모와 발음 (모음 8 + 자음 33)', lesson: 'primer-01', status: '1과' },
    ],
  },
  {
    title: 'a-어간 남성 격변화 (2~8과)',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '2과: a-어간 남성 주격', lesson: 'primer-02-08', status: '2~8과' },
      { label: '3과: a-어간 남성 목적격', lesson: 'primer-02-08', status: '2~8과' },
      { label: '4과: a-어간 남성 구격', lesson: 'primer-02-08', status: '2~8과' },
      { label: '5과: a-어간 남성 여격·탈격', lesson: 'primer-02-08', status: '2~8과' },
      { label: '6과: a-어간 남성 소유격', lesson: 'primer-02-08', status: '2~8과' },
      { label: '7과: a-어간 남성 처소격·호격', lesson: 'primer-02-08', status: '2~8과' },
      { label: '8과: a-어간 남성 전체 정리', lesson: 'primer-02-08', status: '2~8과' },
    ],
  },
  {
    title: '절대분사 · 부정사 · 중성 · 동사 (9~13과)',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '9과: 절대분사 (-tvā/-tvāna)', lesson: 'primer-09', status: '9과' },
      { label: '10과: 부정사 (-tuṃ)', lesson: 'primer-10', status: '10과' },
      { label: '11과: a-어간 중성명사', lesson: 'primer-11', status: '11과' },
      { label: '12과: 동사 현재형 활용', lesson: 'primer-12-13', status: '12~13과' },
      { label: '13과: 특수 동사 (atthi/karoti)', lesson: 'primer-12-13', status: '12~13과' },
    ],
  },
  {
    title: '★ 행복경 실전',
    color: 'var(--color-primary)',
    icon: '🪷',
    items: [
      { label: '행복경 + 연성법 보충', lesson: 'mangala', status: '행복경' },
    ],
  },
  {
    title: '동사 응용형 (14~17과)',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '14과: 미래형 (-ssa-)', lesson: 'primer-14', status: '14과' },
      { label: '15과: 원망형 (-eyya)', lesson: 'primer-15', status: '15과' },
      { label: '16과: 명령형 (-tu/-hi)', lesson: 'primer-16', status: '16과' },
      { label: '17과: 과거형 (Aorist)', lesson: 'primer-17', status: '17과' },
    ],
  },
  {
    title: '여성명사 (18과)',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '18과: ā-어간 여성명사 격변화', lesson: 'primer-18', status: '18과' },
    ],
  },
  {
    title: '★ 보배경·자비경 실전 (선택)',
    color: '#D97706',
    icon: '💎',
    items: [
      { label: '보배경', lesson: 'ratana', status: '보배경' },
      { label: '자비경', lesson: 'metta', status: '자비경' },
    ],
  },
  {
    title: '분사 (19~22과)',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '19과: 과거분사 (-ta/-na)', lesson: 'primer-19', status: '19과' },
      { label: '20과: i-어간 여성명사', lesson: 'primer-20', status: '20과' },
      { label: '21과: 현재분사 (-anta/-māna)', lesson: 'primer-21', status: '21과' },
      { label: '22과: 미래수동분사 (-tabba/-anīya)', lesson: 'primer-22', status: '22과' },
    ],
  },
  {
    title: '★ 전법륜경 실전',
    color: '#7C3AED',
    icon: '☸️',
    items: [
      { label: '전법륜경 + 문법 보충', lesson: 'dhammacakka', status: '전법륜경' },
    ],
  },
  {
    title: '사역 · i/u-어간 (23~29과)',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '23과: 사역형 (-āpeti)', lesson: 'primer-23', status: '23과' },
      { label: '24과: u-어간 여성명사', lesson: 'primer-24-29', status: '24~29과' },
      { label: '25과: i-어간 남성명사', lesson: 'primer-24-29', status: '24~29과' },
      { label: '26과: ī-어간 남성명사', lesson: 'primer-24-29', status: '24~29과' },
      { label: '27과: u-어간 남성명사', lesson: 'primer-24-29', status: '24~29과' },
      { label: '28과: u/ar-어간 남성명사', lesson: 'primer-24-29', status: '24~29과' },
      { label: '29과: i-어간 중성명사', lesson: 'primer-24-29', status: '24~29과' },
    ],
  },
  {
    title: '★ 무아경 실전',
    color: '#7C3AED',
    icon: '🔍',
    items: [
      { label: '무아경 + 문법 보충', lesson: 'anatta', status: '무아경' },
    ],
  },
  {
    title: '형용사 · 대명사 · 복합어 · 총정리 (30~32과)',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '30과: -vantu/-mantu 형용사', lesson: 'primer-30-32', status: '30~32과' },
      { label: '31과: 대명사 (인칭/지시)', lesson: 'primer-30-32', status: '30~32과' },
      { label: '32과: 대명사 (관계/의문)', lesson: 'primer-30-32', status: '30~32과' },
      { label: '복합어 · 접두사 · 접미사', lesson: 'primer-30-32', status: '30~32과' },
      { label: '수사 · 비교급 · 최상급', lesson: 'primer-30-32', status: '30~32과' },
      { label: '연성법 상세', lesson: 'primer-30-32', status: '30~32과' },
      { label: '격변화·동사 총정리', lesson: 'primer-30-32', status: '30~32과' },
    ],
  },
  {
    title: '★ 사념처경 실전',
    color: '#7C3AED',
    icon: '🧘',
    items: [
      { label: '사념처경 1부 (신념처)', lesson: 'satipatthana-1', status: '사념처경' },
      { label: '사념처경 2부 (수심법념처)', lesson: 'satipatthana-2', status: '사념처경' },
    ],
  },
]

/** 원형 SVG 진도 */
function CircleProgress({ pct }: { pct: number }) {
  const r = 16
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" className="shrink-0">
      <circle cx="20" cy="20" r={r} fill="none" stroke="var(--color-border-light)" strokeWidth="3" />
      {pct > 0 && (
        <circle cx="20" cy="20" r={r} fill="none"
          stroke={pct >= 100 ? 'var(--color-accent)' : 'var(--color-primary)'}
          strokeWidth="3" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={offset}
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 0.4s ease' }}
        />
      )}
      <text x="20" y="20" textAnchor="middle" dominantBaseline="central"
        fill={pct >= 100 ? 'var(--color-accent)' : 'var(--color-text-secondary)'}
        fontSize="10" fontWeight="600">
        {pct >= 100 ? '✓' : `${Math.round(pct)}%`}
      </text>
    </svg>
  )
}

export default function Courses() {
  const navigate = useNavigate()
  const [viewMode, setViewMode] = useState<ViewMode>('path')

  return (
    <div className="pb-20 px-4 pt-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
        목차
      </h1>

      {/* 탭 전환: 경전 경로 / 문법 경로 */}
      <div className="flex gap-2 mb-6 p-1 rounded-xl"
        style={{ background: 'var(--color-border-light)' }}>
        <TabButton
          active={viewMode === 'path'}
          onClick={() => setViewMode('path')}
          label="📚 경전 경로"
        />
        <TabButton
          active={viewMode === 'grammar'}
          onClick={() => setViewMode('grammar')}
          label="📐 문법 경로"
        />
      </div>

      {viewMode === 'path' ? (
        <PathView navigate={navigate} />
      ) : (
        <GrammarView navigate={navigate} />
      )}
    </div>
  )
}

function TabButton({ active, onClick, label }: {
  active: boolean; onClick: () => void; label: string
}) {
  return (
    <button
      onClick={onClick}
      className="flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all"
      style={{
        background: active ? 'var(--color-surface)' : 'transparent',
        color: active ? 'var(--color-primary)' : 'var(--color-text-tertiary)',
        boxShadow: active ? 'var(--shadow-sm)' : 'none',
      }}
    >
      {label}
    </button>
  )
}

/** 경전 경로 뷰 */
function PathView({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div>
      {PATH_SECTIONS.map((section, si) => (
        <div key={si} className="mb-6">
          {/* 섹션 헤더 */}
          <div className="flex items-center gap-3 mb-3 px-1">
            <div className="w-1 h-5 rounded-full" style={{ background: section.color }} />
            <div>
              <h2 className="text-sm font-bold" style={{ color: 'var(--color-text-secondary)' }}>
                {section.title}
              </h2>
              {section.subtitle && (
                <p className="text-[10px]" style={{ color: 'var(--color-text-tertiary)' }}>
                  {section.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* 연결선 + 단원 카드 */}
          <div className="flex flex-col gap-3 ml-3 pl-4"
            style={{ borderLeft: `2px solid ${section.color}22` }}>
            {section.lessons.map((lid) => {
              const lesson = LESSONS.find(l => l.id === lid)
              if (!lesson) return null
              const pct = getProgress(lid)
              const done = pct >= 100

              return (
                <div key={lid} className="relative">
                  {/* 연결 점 */}
                  <div
                    className="absolute -left-[21px] top-5 w-3 h-3 rounded-full border-2"
                    style={{
                      borderColor: section.color,
                      background: done ? section.color : 'var(--color-bg)',
                    }}
                  />

                  <button
                    onClick={() => navigate(`/learn/${lid}`)}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all card-shadow active:scale-[0.98]"
                    style={{
                      background: 'var(--color-surface)',
                      border: done ? '2px solid var(--color-accent)' : '1px solid var(--color-border-light)',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'var(--color-primary-glow)' }}
                    >
                      <span className="text-xl">{lesson.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="pali-text font-bold truncate text-[15px]"
                        style={{ color: 'var(--color-text)' }}>
                        {lesson.title}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-tertiary)' }}>
                        {lesson.subtitle}
                      </p>
                      {pct > 0 && !done && (
                        <div className="mt-1.5 h-1.5 rounded-full overflow-hidden"
                          style={{ background: 'var(--color-border-light)' }}>
                          <div className="h-full rounded-full progress-bar-gradient"
                            style={{ width: `${pct}%` }} />
                        </div>
                      )}
                    </div>
                    <div className="shrink-0">
                      {done ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{ background: 'rgba(46,125,50,0.1)', color: 'var(--color-accent)', border: '1px solid rgba(46,125,50,0.2)' }}>
                          완료
                        </span>
                      ) : pct > 0 ? (
                        <CircleProgress pct={pct} />
                      ) : (
                        <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>미학습</span>
                      )}
                    </div>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

/** 문법 경로 뷰 */
function GrammarView({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div>
      {GRAMMAR_SECTIONS.map((section, si) => (
        <div key={si} className="mb-6">
          {/* 섹션 헤더 */}
          <div className="flex items-center gap-3 mb-3 px-1">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `color-mix(in srgb, ${section.color} 12%, transparent)` }}
            >
              <span className="text-base">{section.icon}</span>
            </div>
            <h2 className="text-sm font-bold" style={{ color: 'var(--color-text-secondary)' }}>
              {section.title}
            </h2>
          </div>

          {/* 항목 목록 */}
          <div className="flex flex-col gap-2">
            {section.items.map((item, ii) => {
              const pct = getProgress(item.lesson)
              const done = pct >= 100
              const inProgress = pct > 0 && !done

              return (
                <button
                  key={ii}
                  onClick={() => navigate(`/learn/${item.lesson}`)}
                  className="w-full flex items-center gap-3 p-3.5 rounded-xl text-left transition-all active:scale-[0.98]"
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border-light)',
                  }}
                >
                  {/* 상태 아이콘 */}
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                    style={{
                      background: done ? 'var(--color-accent)' : inProgress ? 'var(--color-primary-glow)' : 'var(--color-border-light)',
                      color: done ? '#fff' : inProgress ? 'var(--color-primary)' : 'var(--color-text-tertiary)',
                    }}
                  >
                    {done ? '✓' : inProgress ? '→' : (ii + 1)}
                  </div>

                  {/* 내용 */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                      {item.label}
                    </p>
                    <p className="text-[10px] mt-0.5" style={{ color: 'var(--color-text-tertiary)' }}>
                      📖 {item.status}에서 학습
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
