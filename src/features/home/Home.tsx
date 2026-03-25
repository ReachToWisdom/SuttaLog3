// 홈 화면 — 프리미엄 학습앱 디자인
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LESSONS } from '../../data/lessons-index'
import { STORAGE_PREFIX } from '../../config'
import { QUOTES } from '../../data/quotes'
import { formatPron, isPronVisible } from '../../utils/pron-display'
import { getMonthStudyDates, getDayLog, type DailyLog } from '../../utils/study-tracker'

/** 단원별 학습 진도 조회 */
function getProgress(lessonId: string): number {
  const val = localStorage.getItem(`${STORAGE_PREFIX}lesson-${lessonId}`)
  return parseFloat(val ?? '0') || 0
}

/** 시간대별 인사 + 이모지 */
function getGreetingInfo(): { text: string; emoji: string; period: string } {
  const h = new Date().getHours()
  if (h < 6) return { text: '새벽 수행의 시간입니다', emoji: '🌙', period: 'dawn' }
  if (h < 12) return { text: '좋은 아침입니다', emoji: '🌅', period: 'morning' }
  if (h < 18) return { text: '좋은 오후입니다', emoji: '☀️', period: 'afternoon' }
  return { text: '고요한 저녁입니다', emoji: '🌿', period: 'evening' }
}

// 원형 진도 SVG 반지름/둘레
const CIRCLE_R = 24
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_R

export default function Home() {
  const navigate = useNavigate()
  const streak = parseInt(
    localStorage.getItem(`${STORAGE_PREFIX}study-streak`) ?? '0', 10,
  ) || 0
  const completed = LESSONS.filter(l => getProgress(l.id) >= 100).length
  const totalPct = LESSONS.length > 0
    ? Math.round(LESSONS.reduce((sum, l) => sum + getProgress(l.id), 0) / LESSONS.length)
    : 0

  // 현재 학습 중인 단원 (미완료 중 첫 번째)
  const currentLesson = LESSONS.find(l => getProgress(l.id) < 100) ?? LESSONS[0]
  const currentPct = getProgress(currentLesson.id)

  // 오늘의 명구
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000,
  )
  const quote = QUOTES[dayOfYear % QUOTES.length]
  const greeting = getGreetingInfo()

  return (
    <div className="pb-24 px-4 pt-6 max-w-lg mx-auto">

      {/* ── 상단 인사 카드 ── */}
      <div
        className="rounded-2xl p-4 mb-5 intro-fade-up"
        style={{
          background: greeting.period === 'dawn'
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
            : greeting.period === 'morning'
              ? 'linear-gradient(135deg, #fceabb 0%, #f8b500 100%)'
              : greeting.period === 'afternoon'
                ? 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
                : 'linear-gradient(135deg, #2c3e50 0%, #3d5866 50%, #2c3e50 100%)',
          color: greeting.period === 'dawn' || greeting.period === 'evening' ? '#fff' : '#1E1B16',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl">{greeting.emoji}</span>
          <div>
            <p className="text-sm opacity-80 font-medium">{greeting.text}</p>
            <h1 className="text-xl font-bold tracking-tight">빠알리어 공부3</h1>
          </div>
        </div>
      </div>

      {/* ── 히어로 카드 — 현재 학습 단원 ── */}
      <button
        onClick={() => navigate(`/learn/${currentLesson.id}`)}
        className="w-full rounded-2xl text-left mb-5 intro-fade-up-delay
                   active:scale-[0.98] transition-transform"
        style={{
          background: 'var(--color-primary-gradient)',
          boxShadow: '0 4px 20px rgba(192, 107, 10, 0.35), 0 0 40px var(--color-primary-glow)',
          border: 'none',
          padding: 0,
        }}
      >
        {/* 배경 장식 원 */}
        <div className="relative overflow-hidden rounded-2xl p-5">
          <div
            className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
          />

          <div className="flex items-center gap-4 relative z-10">
            {/* 원형 진도 SVG */}
            <div className="relative flex-shrink-0">
              <svg width="64" height="64" className="progress-circle">
                <defs>
                  <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <circle
                  cx="32" cy="32" r={CIRCLE_R} fill="none"
                  stroke="rgba(255,255,255,0.2)" strokeWidth="4"
                />
                <circle
                  cx="32" cy="32" r={CIRCLE_R} fill="none"
                  stroke="url(#hero-grad)" strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={CIRCLE_CIRCUMFERENCE}
                  strokeDashoffset={CIRCLE_CIRCUMFERENCE * (1 - currentPct / 100)}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center
                               text-white text-xs font-bold">
                {Math.round(currentPct)}%
              </span>
            </div>

            {/* 단원 정보 */}
            <div className="flex-1 min-w-0">
              <p className="text-[0.7rem] font-semibold uppercase tracking-widest
                            text-white/60 mb-0.5">
                현재 학습 중
              </p>
              <p className="text-lg font-bold text-white truncate leading-tight">
                {currentLesson.icon} {currentLesson.title}
              </p>
              <p className="text-sm text-white/70 mt-0.5 truncate">
                {currentLesson.subtitle}
              </p>
              {/* 진도 바 */}
              <div className="mt-2.5 h-1.5 rounded-full overflow-hidden bg-white/20">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${currentPct}%`,
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.95))',
                  }}
                />
              </div>
            </div>

            {/* 화살표 */}
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20
                            flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="#fff" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </button>

      {/* ── 통계 카드 3칸 ── */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <StatCard
          icon="📚" label="완료 단원" value={`${completed}`}
          iconBg="rgba(192, 107, 10, 0.1)" delay="delay-1"
        />
        <StatCard
          icon="🔥" label="연속 학습" value={`${streak}일`}
          iconBg="rgba(239, 83, 80, 0.1)" delay="delay-2"
        />
        <StatCard
          icon="📖" label="전체 진도" value={`${totalPct}%`}
          iconBg="rgba(46, 125, 50, 0.1)" delay="delay-3"
        />
      </div>

      {/* ── 오늘의 명구 ── */}
      <div
        className="rounded-2xl overflow-hidden intro-fade-up-delay2"
        style={{
          background: 'var(--color-surface-elevated)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--color-border-light)',
        }}
      >
        <div className="flex">
          {/* 왼쪽 황금 수직 라인 */}
          <div
            className="w-1 flex-shrink-0"
            style={{
              background: 'linear-gradient(180deg, var(--color-primary-light), var(--color-primary-dark))',
            }}
          />

          <div className="p-4 flex-1">
            {/* 헤더 */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">🪷</span>
              <span
                className="text-[0.65rem] font-semibold uppercase tracking-wider"
                style={{ color: 'var(--color-primary)' }}
              >
                오늘의 경전 명구
              </span>
            </div>

            {/* 빠알리 텍스트 + 발음 (단어별 1:1 매칭) */}
            {(() => {
              const paliWords = quote.pali.split(' ')
              const pronKoWords = quote.pronKo.split(' ')
              const pronEnWords = quote.pronEn?.split(' ')
              const showPron = isPronVisible()
              return (
                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2">
                  {paliWords.map((word, idx) => (
                    <span key={idx} className="inline-flex flex-col items-center">
                      {/* 빠알리 단어 */}
                      <span
                        className="text-base"
                        style={{
                          fontFamily: 'var(--font-pali)',
                          fontStyle: 'italic',
                          color: 'var(--color-text)',
                          fontWeight: 500,
                        }}
                      >
                        {idx === 0 ? `\u201C${word}` : idx === paliWords.length - 1 ? `${word}\u201D` : word}
                      </span>
                      {/* 한글 발음 (단어별, ON/OFF) */}
                      {showPron && pronKoWords[idx] && (
                        <span className="text-[0.65rem] mt-0.5" style={{ color: 'var(--color-primary)' }}>
                          {formatPron(pronKoWords[idx], pronEnWords?.[idx])}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              )
            })()}

            {/* 한글 번역 */}
            <p className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>
              {quote.ko}
            </p>

            {/* 출처 */}
            <p className="text-[0.65rem]" style={{ color: 'var(--color-text-tertiary)' }}>
              — {quote.source}
            </p>
          </div>
        </div>
      </div>
      {/* ── 학습 캘린더 ── */}
      <StudyCalendar />

      {/* ── 제작자 ── */}
      <div className="mt-8 mb-4 text-center">
        <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
          제작: 혜통
        </p>
        <p className="text-[10px] mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
          교재: De Silva Pali Primer (백도수 편역)
        </p>
      </div>
    </div>
  )
}

/** 통계 카드 컴포넌트 */
function StatCard({ icon, label, value, iconBg, delay }: {
  icon: string; label: string; value: string; iconBg: string; delay: string
}) {
  return (
    <div
      className={`p-3.5 rounded-xl text-center animate-slideUp ${delay}`}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-light)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* 아이콘 원형 배경 */}
      <div
        className="w-10 h-10 rounded-full mx-auto flex items-center justify-center mb-2"
        style={{ background: iconBg }}
      >
        <span className="text-lg">{icon}</span>
      </div>
      {/* 숫자 */}
      <p
        className="text-xl font-bold leading-tight"
        style={{ color: 'var(--color-text)' }}
      >
        {value}
      </p>
      {/* 라벨 */}
      <p
        className="text-[0.65rem] font-medium mt-0.5"
        style={{ color: 'var(--color-text-tertiary)' }}
      >
        {label}
      </p>
    </div>
  )
}

// ── 학습 캘린더 (SuttaLog2 동일) ──
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

function StudyCalendar() {
  const [viewDate, setViewDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState<DailyLog | null>(null)
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const studyDates = getMonthStudyDates(year, month)
  const firstDow = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const today = new Date().toISOString().slice(0, 10)

  return (
    <div className="rounded-2xl p-4 mt-5"
      style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-light)', boxShadow: 'var(--shadow-sm)' }}>
      {/* 월 이동 */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={() => setViewDate(new Date(year, month - 1, 1))}
          className="w-8 h-8 flex items-center justify-center rounded-full active:scale-90"
          style={{ color: 'var(--color-text-secondary)' }}>
          ←
        </button>
        <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>{year}년 {month + 1}월</p>
        <button onClick={() => setViewDate(new Date(year, month + 1, 1))}
          className="w-8 h-8 flex items-center justify-center rounded-full active:scale-90"
          style={{ color: 'var(--color-text-secondary)' }}>
          →
        </button>
      </div>
      {/* 요일 */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {WEEKDAYS.map(d => (
          <div key={d} className="text-center text-[10px] font-semibold py-1"
            style={{ color: d === '일' ? '#EF5350' : d === '토' ? '#42A5F5' : 'var(--color-text-tertiary)' }}>{d}</div>
        ))}
      </div>
      {/* 날짜 */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDow }, (_, i) => <div key={`e${i}`} className="aspect-square" />)}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
          const hasStudy = studyDates.has(dateStr)
          const isToday = dateStr === today
          return (
            <button key={day} onClick={() => setSelectedDay(getDayLog(dateStr))}
              className="aspect-square flex flex-col items-center justify-center rounded-xl text-xs font-medium transition-all active:scale-90"
              style={{
                backgroundColor: hasStudy ? 'color-mix(in srgb, var(--color-primary) 15%, transparent)' : 'transparent',
                border: isToday ? '2px solid var(--color-primary)' : '2px solid transparent',
                color: hasStudy ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                fontWeight: hasStudy ? 700 : 400,
              }}>
              {day}
              {hasStudy && <span className="w-1 h-1 rounded-full mt-0.5" style={{ backgroundColor: 'var(--color-primary)' }} />}
            </button>
          )
        })}
      </div>
      {/* 선택 날짜 상세 */}
      {selectedDay && (
        <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--color-border-light)' }}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold">{selectedDay.date}</p>
            <button onClick={() => setSelectedDay(null)} className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>닫기</button>
          </div>
          <div className="flex gap-3 text-center">
            <div className="flex-1 rounded-xl py-2" style={{ background: 'var(--color-surface-elevated)' }}>
              <p className="text-base font-bold" style={{ color: 'var(--color-primary)' }}>{selectedDay.sessions}</p>
              <p className="text-[10px]" style={{ color: 'var(--color-text-secondary)' }}>학습 횟수</p>
            </div>
            <div className="flex-1 rounded-xl py-2" style={{ background: 'var(--color-surface-elevated)' }}>
              <p className="text-base font-bold" style={{ color: 'var(--color-primary)' }}>{selectedDay.minutes}</p>
              <p className="text-[10px]" style={{ color: 'var(--color-text-secondary)' }}>분</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
