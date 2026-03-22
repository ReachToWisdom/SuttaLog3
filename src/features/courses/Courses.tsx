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

// ── 학습 경로 (문법 + 경전 통합) ──
const PATH_SECTIONS = [
  {
    title: '빠알리 발음',
    color: '#6B7280',
    subtitle: '모음 8자 · 자음 33자 · 장단모음',
    lessons: ['primer-01'],
  },
  {
    title: '남성명사 격변화',
    color: '#5B21B6',
    subtitle: '~이/가, ~을/를, ~에 의해, ~에게, ~로부터, ~의, ~에서, ~이여',
    lessons: ['primer-02-08'],
  },
  {
    title: '문장 만들기',
    color: '#5B21B6',
    subtitle: '절대분사(~하고 나서) · 부정사(~하기 위해) · 중성명사 · 동사 현재형',
    lessons: ['primer-09', 'primer-10', 'primer-11', 'primer-12-13'],
  },
  {
    title: '🪷 행복경 독해',
    color: 'var(--color-primary)',
    subtitle: '배운 문법을 경전에서 실전 확인 + 연성법',
    lessons: ['mangala'],
  },
  {
    title: '동사 시제 변화',
    color: '#5B21B6',
    subtitle: '미래형(~할 것이다) · 원망형(~해야 한다) · 명령형(~하라) · 과거형(~했다)',
    lessons: ['primer-14', 'primer-15', 'primer-16', 'primer-17'],
  },
  {
    title: '여성명사 격변화',
    color: '#5B21B6',
    subtitle: 'ā-어간 여성명사 (~이/가, ~을/를, ~의 ...)',
    lessons: ['primer-18'],
  },
  {
    title: '💎 보배경 · 💛 자비경 (선택)',
    color: '#D97706',
    subtitle: '여성명사 · 명령형 · 과거형 실전',
    lessons: ['ratana', 'metta'],
  },
  {
    title: '분사 (동사에서 파생된 형용사)',
    color: '#5B21B6',
    subtitle: '과거분사(~된) · 현재분사(~하는) · 미래수동분사(~해야 할)',
    lessons: ['primer-19', 'primer-20', 'primer-21', 'primer-22'],
  },
  {
    title: '☸️ 전법륜경 독해',
    color: '#7C3AED',
    subtitle: '사성제 · 팔정도 — 분사와 격변화 실전',
    lessons: ['dhammacakka'],
  },
  {
    title: '사역형 · 다양한 명사 격변화',
    color: '#5B21B6',
    subtitle: '사역형(~하게 하다) · i-어간 · u-어간 명사',
    lessons: ['primer-23', 'primer-24-29'],
  },
  {
    title: '🔍 무아경 독해',
    color: '#7C3AED',
    subtitle: '오온 · 삼상 — 다양한 어간과 분사 실전',
    lessons: ['anatta'],
  },
  {
    title: '형용사 · 대명사 · 복합어 · 총정리',
    color: '#5B21B6',
    subtitle: '형용사 격변화 · 대명사 · 복합어 · 접두사 · 수사 · 문법 총정리',
    lessons: ['primer-30-32'],
  },
  {
    title: '🧘 사념처경 독해',
    color: '#7C3AED',
    subtitle: '몸 · 느낌 · 마음 · 법 관찰 — 최종 독해',
    lessons: ['satipatthana-1', 'satipatthana-2'],
  },
]

// ── 문법 학습 경로 (문법별 세부 목록) ──
const GRAMMAR_SECTIONS = [
  {
    title: '빠알리 발음',
    color: '#6B7280',
    icon: '🔤',
    items: [
      { label: '모음 8자 (a, ā, i, ī, u, ū, e, o)', lesson: 'primer-01', status: '발음' },
      { label: '자음 33자 (ka~ṃ)', lesson: 'primer-01', status: '발음' },
    ],
  },
  {
    title: '남성명사 — ~이/가부터 ~이여까지',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '주격: ~은/는/이/가 (naro, devā)', lesson: 'primer-02-08', status: '명사' },
      { label: '목적격: ~을/를 (naraṃ, deve)', lesson: 'primer-02-08', status: '명사' },
      { label: '구격: ~에 의해, ~(으)로 (narena)', lesson: 'primer-02-08', status: '명사' },
      { label: '여격·탈격: ~에게, ~로부터 (narassa, narā)', lesson: 'primer-02-08', status: '명사' },
      { label: '소유격: ~의 (narassa)', lesson: 'primer-02-08', status: '명사' },
      { label: '처소격·호격: ~에서, ~이여 (nare, nara!)', lesson: 'primer-02-08', status: '명사' },
      { label: '전체 격변화 정리 (단수+복수)', lesson: 'primer-02-08', status: '명사' },
    ],
  },
  {
    title: '문장 만들기',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '절대분사: ~하고 나서 (katvā, gantvā)', lesson: 'primer-09', status: '문장' },
      { label: '부정사: ~하기 위해 (gantuṃ, kātuṃ)', lesson: 'primer-10', status: '문장' },
      { label: '중성명사 격변화 (rūpaṃ, dukkhaṃ)', lesson: 'primer-11', status: '문장' },
      { label: '동사 현재형 (viharati, gacchati)', lesson: 'primer-12-13', status: '동사' },
      { label: '특수 동사 (atthi=있다, karoti=하다)', lesson: 'primer-12-13', status: '동사' },
    ],
  },
  {
    title: '🪷 행복경 독해',
    color: 'var(--color-primary)',
    icon: '🪷',
    items: [
      { label: '행복경 원문 + 연성법(단어 합쳐지는 규칙)', lesson: 'mangala', status: '경전' },
    ],
  },
  {
    title: '동사 시제 — 과거·미래·명령',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '미래형: ~할 것이다 (gamissati)', lesson: 'primer-14', status: '동사' },
      { label: '원망형: ~해야 한다 (gaccheyya)', lesson: 'primer-15', status: '동사' },
      { label: '명령형: ~하라 (gaccha, brūhi)', lesson: 'primer-16', status: '동사' },
      { label: '과거형: ~했다 (agacchi, acintayuṃ)', lesson: 'primer-17', status: '동사' },
    ],
  },
  {
    title: '여성명사 격변화',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: 'ā-어간 여성 (paññā=지혜, vedanā=느낌)', lesson: 'primer-18', status: '명사' },
    ],
  },
  {
    title: '💎 보배경 · 💛 자비경 독해 (선택)',
    color: '#D97706',
    icon: '💎',
    items: [
      { label: '보배경 — 삼보 찬탄', lesson: 'ratana', status: '경전' },
      { label: '자비경 — 자비 수행', lesson: 'metta', status: '경전' },
    ],
  },
  {
    title: '분사 — 동사에서 만든 형용사',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '과거분사: ~된 (kata=행한, gata=간)', lesson: 'primer-19', status: '분사' },
      { label: 'i-어간 여성명사 (jāti=태어남)', lesson: 'primer-20', status: '명사' },
      { label: '현재분사: ~하는 (gacchanto=가는)', lesson: 'primer-21', status: '분사' },
      { label: '미래수동분사: ~해야 할 (sevitabbā=가까이해야 할)', lesson: 'primer-22', status: '분사' },
    ],
  },
  {
    title: '☸️ 전법륜경 독해',
    color: '#7C3AED',
    icon: '☸️',
    items: [
      { label: '사성제 · 팔정도 — 격변화와 분사 실전', lesson: 'dhammacakka', status: '경전' },
    ],
  },
  {
    title: '사역형 · 다양한 명사',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '사역형: ~하게 하다 (-āpeti)', lesson: 'primer-23', status: '동사' },
      { label: 'u-어간 여성명사 (dhātu=요소)', lesson: 'primer-24-29', status: '명사' },
      { label: 'i-어간 남성명사 (aggi=불)', lesson: 'primer-24-29', status: '명사' },
      { label: 'ī-어간 남성명사 (senānī=장수)', lesson: 'primer-24-29', status: '명사' },
      { label: 'u-어간 남성명사 (bhikkhu=비구)', lesson: 'primer-24-29', status: '명사' },
      { label: 'u/ar-어간 (satthā=스승, mātā=어머니)', lesson: 'primer-24-29', status: '명사' },
      { label: 'i-어간 중성명사 (akkhi=눈)', lesson: 'primer-24-29', status: '명사' },
    ],
  },
  {
    title: '🔍 무아경 독해',
    color: '#7C3AED',
    icon: '🔍',
    items: [
      { label: '오온 · 삼상 — 다양한 어간과 분사 실전', lesson: 'anatta', status: '경전' },
    ],
  },
  {
    title: '형용사 · 대명사 · 복합어',
    color: '#5B21B6',
    icon: '📐',
    items: [
      { label: '형용사 격변화 (-vantu/-mantu)', lesson: 'primer-30-32', status: '문법' },
      { label: '대명사: 나/너/그/이/어떤 (ahaṃ, so, yo)', lesson: 'primer-30-32', status: '문법' },
      { label: '복합어: 여러 단어가 하나로', lesson: 'primer-30-32', status: '문법' },
      { label: '접두사 (a-=부정, sam-=함께)', lesson: 'primer-30-32', status: '문법' },
      { label: '접미사 (-tā=추상, -ka=행위자)', lesson: 'primer-30-32', status: '문법' },
      { label: '수사 (eka=1, dvi=2, cattāri=4)', lesson: 'primer-30-32', status: '문법' },
      { label: '연성법 상세 (단어가 합쳐지는 규칙)', lesson: 'primer-30-32', status: '문법' },
      { label: '격변화·동사 총정리', lesson: 'primer-30-32', status: '문법' },
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
