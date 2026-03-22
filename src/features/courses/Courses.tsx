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

// ── 경전 학습 경로 (경전 순서) ──
const PATH_SECTIONS = [
  {
    title: 'Part 0 · 기초 도구',
    color: '#6B7280',
    lessons: ['alphabet'],
  },
  {
    title: '기초 문법',
    color: '#5B21B6',
    subtitle: '경전 학습 전 전체 지도: 3성·8격·격변화·동사',
    lessons: ['grammar-basics'],
  },
  {
    title: 'Part 1 · 게송 경전 (기초)',
    color: 'var(--color-primary)',
    lessons: ['mangala'],
  },
  {
    title: '추가 게송 (선택)',
    color: '#D97706',
    subtitle: '행복경 완료 후 기초를 더 다지고 싶을 때',
    lessons: ['ratana', 'metta'],
  },
  {
    title: '심화 문법',
    color: '#5B21B6',
    subtitle: '산문 경전 독해에 필요한 추가 문법',
    lessons: ['grammar-advanced'],
  },
  {
    title: 'Part 2 · 산문 경전 (독해)',
    color: '#7C3AED',
    lessons: ['dhammacakka', 'anatta', 'satipatthana'],
  },
]

// ── 문법 학습 경로 (문법 순서) ──
const GRAMMAR_SECTIONS = [
  {
    title: '1단계 · 발음',
    color: '#6B7280',
    icon: '🔤',
    items: [
      { label: '모음 8자 + 자음 33자', lesson: 'alphabet', status: '자모와 발음' },
      { label: '장단모음, 기식음/무기식음', lesson: 'alphabet', status: '자모와 발음' },
    ],
  },
  {
    title: '2단계 · 기초 문법 (전체 지도)',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '3성 개념 (남성/중성/여성)', lesson: 'grammar-basics', status: '기초 문법' },
      { label: '8격 전체 조감도', lesson: 'grammar-basics', status: '기초 문법' },
      { label: 'a-어간 남성/중성/여성 격변화표', lesson: 'grammar-basics', status: '기초 문법' },
      { label: '동사 현재형 + 연성법 기초', lesson: 'grammar-basics', status: '기초 문법' },
    ],
  },
  {
    title: '3단계 · 경전 실전 (연성법)',
    color: 'var(--color-primary)',
    icon: '🔗',
    items: [
      { label: '연성법 16가지 패턴', lesson: 'mangala', status: '행복경에서 실전' },
      { label: '불변어 (부사/접속사)', lesson: 'mangala', status: '행복경에서 실전' },
    ],
  },
  {
    title: '4단계 · 심화 문법',
    color: '#7C3AED',
    icon: '📐',
    items: [
      { label: 'i-어간, u-어간 격변화', lesson: 'grammar-advanced', status: '심화 문법' },
      { label: '동사 과거형, 분사', lesson: 'grammar-advanced', status: '심화 문법' },
      { label: '복합어 구조', lesson: 'grammar-advanced', status: '심화 문법' },
    ],
  },
  {
    title: '5단계 · 독해',
    color: 'var(--color-accent)',
    icon: '📖',
    items: [
      { label: '산문 문장 구조 + 동사활용', lesson: 'dhammacakka', status: '전법륜경' },
      { label: '오온 분석 반복 구문', lesson: 'anatta', status: '무아경' },
      { label: '수행 관찰 정형문', lesson: 'satipatthana', status: '사념처경' },
      { label: '사성제·팔정도 용어', lesson: 'dhammacakka', status: '전법륜경' },
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
