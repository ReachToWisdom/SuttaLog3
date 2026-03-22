// 경전 원문 표시 — 원문 + 번역 + 문법 분석 + 단어 풀이
import { useState } from 'react'
import type { VerseStep, VerseWord } from '../../data/types'
import { speakPali } from '../../utils/pali-tts'
import { isPronVisible } from '../../utils/pron-display'
import { trackWordView } from '../../utils/word-tracker'

interface Props {
  step: VerseStep
  onNext: () => void
  onBack?: () => void
}

export default function VerseView({ step, onNext, onBack }: Props) {
  const [grammarOpen, setGrammarOpen] = useState(true)
  const [glossaryOpen, setGlossaryOpen] = useState(false)
  const [highlightIdx, setHighlightIdx] = useState<number | null>(null)
  const showPron = isPronVisible()

  const handleWordTap = (word: VerseWord, idx: number) => {
    setHighlightIdx(prev => prev === idx ? null : idx)
    trackWordView(word.pali)
    const soundOn = localStorage.getItem('suttalog3-sound') !== 'off'
    if (soundOn) speakPali(word.pali)
  }

  const handleListenAll = () => {
    const soundOn = localStorage.getItem('suttalog3-sound') !== 'off'
    if (soundOn) speakPali(step.pali)
  }

  return (
    <div className="step-enter flex flex-col min-h-[calc(100vh-60px)]">
      <div className="flex-1 px-4 py-6 overflow-y-auto pb-24">
        {/* 노트 뱃지 */}
        {step.note && (
          <div className="mb-4">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: 'var(--color-primary-glow)',
                color: 'var(--color-primary)',
                border: '1px solid var(--color-primary-light)',
              }}
            >
              📖 {step.note}
            </span>
          </div>
        )}

        {/* 경전 원문 + 발음 */}
        <div
          className="p-6 rounded-2xl mb-4 card-shadow"
          style={{
            background: 'linear-gradient(180deg, var(--color-surface-elevated) 0%, var(--color-surface) 100%)',
            border: '1px solid var(--color-border-light)',
          }}
        >
          {/* 장식 라인 */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px" style={{ background: 'var(--color-primary-light)' }} />
            <span className="text-xs tracking-widest" style={{ color: 'var(--color-primary)' }}>
              ✦ PĀḶI ✦
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--color-primary-light)' }} />
          </div>

          {/* 원문 + 발음 (단어별 1:1 매칭, 탭 시 하이라이트) */}
          <div className="flex flex-wrap gap-x-3 gap-y-3 justify-center text-center">
            {step.words.map((word, idx) => (
              <span
                key={idx}
                onClick={() => handleWordTap(word, idx)}
                className="inline-flex flex-col items-center cursor-pointer px-1 py-0.5 rounded-lg transition-all duration-200"
                style={{
                  background: highlightIdx === idx ? 'var(--color-primary-glow)' : 'transparent',
                }}
              >
                <span
                  className="pali-text text-xl"
                  style={{
                    color: highlightIdx === idx ? 'var(--color-primary-dark)' : 'var(--color-text)',
                    fontWeight: highlightIdx === idx ? 700 : 400,
                  }}
                >
                  {word.pali}
                </span>
                {showPron && (
                  <span className="text-xs mt-0.5" style={{ color: 'var(--color-primary)' }}>
                    {word.pronKo}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* 한국어 번역 */}
        <div className="pl-4 py-2 mb-4 rounded-r-lg"
          style={{ borderLeft: '2px solid var(--color-primary-light)' }}>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text)' }}>
            {step.translation}
          </p>
        </div>

        {/* 📝 문법 포인트 (문장 구조/핵심 문법/복합어 분석) */}
        {step.grammarNotes && step.grammarNotes.length > 0 && (
          <div
            className="rounded-xl overflow-hidden card-shadow mb-3"
            style={{ border: '1px solid var(--color-border-light)' }}
          >
            <button
              onClick={() => setGrammarOpen(prev => !prev)}
              className="w-full flex items-center justify-between px-4 py-3 text-left"
              style={{ background: 'var(--color-surface-elevated)' }}
            >
              <span className="text-xs font-bold tracking-wide" style={{ color: 'var(--color-primary)' }}>
                📝 문법 포인트
              </span>
              <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                {grammarOpen ? '접기 ▲' : '펼치기 ▼'}
              </span>
            </button>

            {grammarOpen && (
              <div className="px-4 py-3 flex flex-col gap-2.5" style={{ background: 'var(--color-surface)' }}>
                {step.grammarNotes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span
                      className="text-xs font-bold mt-0.5 shrink-0"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      •
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 📖 단어 풀이 (접기/펼치기, 기본 접힘) */}
        <div
          className="rounded-xl overflow-hidden card-shadow"
          style={{ border: '1px solid var(--color-border-light)' }}
        >
          <button
            onClick={() => setGlossaryOpen(prev => !prev)}
            className="w-full flex items-center justify-between px-4 py-3 text-left"
            style={{ background: 'var(--color-surface-elevated)' }}
          >
            <span className="text-xs font-bold tracking-wide" style={{ color: 'var(--color-text-secondary)' }}>
              📖 단어 풀이
            </span>
            <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
              {glossaryOpen ? '접기 ▲' : '펼치기 ▼'}
            </span>
          </button>

          {glossaryOpen && (
            <div className="px-4 py-2 flex flex-col gap-1" style={{ background: 'var(--color-surface)' }}>
              {step.words.map((word, idx) => (
                <div
                  key={idx}
                  onClick={() => handleWordTap(word, idx)}
                  className="flex items-start gap-2 py-1.5 px-2 rounded-lg cursor-pointer transition-all"
                  style={{
                    background: highlightIdx === idx ? 'var(--color-primary-glow)' : 'transparent',
                  }}
                >
                  <span
                    className="pali-text text-sm font-semibold shrink-0"
                    style={{
                      color: 'var(--color-primary)',
                      minWidth: '5rem',
                    }}
                  >
                    {word.pali}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm" style={{ color: 'var(--color-text)' }}>
                      {word.meaning}
                    </span>
                    {word.grammar && (
                      <span className="text-[11px] ml-1.5" style={{ color: 'var(--color-text-tertiary)' }}>
                        ({word.grammar})
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 z-20 px-4 py-3"
        style={{ background: 'linear-gradient(0deg, var(--color-bg) 80%, transparent 100%)' }}>
        <div className="flex gap-3 max-w-lg mx-auto">
          {onBack && (
            <button onClick={onBack} className="btn-secondary py-3 px-4">
              ←
            </button>
          )}
          <button onClick={handleListenAll}
            className="btn-secondary flex-1 flex items-center justify-center gap-2 py-3">
            <span>🔊</span><span>전체 듣기</span>
          </button>
          <button onClick={onNext} className="btn-primary flex-1 py-3">다음 →</button>
        </div>
      </div>
    </div>
  )
}
