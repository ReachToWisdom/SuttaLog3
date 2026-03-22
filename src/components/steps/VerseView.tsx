// 경전 원문 표시 — 원문 바로 밑에 발음 + 단어별 터치 팝업
import { useState } from 'react'
import type { VerseStep, VerseWord } from '../../data/types'
import { speakPali } from '../../utils/pali-tts'
import { formatPron, isPronVisible } from '../../utils/pron-display'

interface Props {
  step: VerseStep
  onNext: () => void
  onBack?: () => void
}

export default function VerseView({ step, onNext, onBack }: Props) {
  const [activeWord, setActiveWord] = useState<VerseWord | null>(null)
  const showPron = isPronVisible()

  const handleWordTap = (word: VerseWord) => {
    setActiveWord(word)
    const soundOn = localStorage.getItem('suttalog3-sound') !== 'off'
    if (soundOn) speakPali(word.pali)
  }

  const handleListenAll = () => {
    const soundOn = localStorage.getItem('suttalog3-sound') !== 'off'
    if (soundOn) speakPali(step.pali)
  }

  return (
    <div className="step-enter flex flex-col min-h-[calc(100vh-60px)]">
      <div className="flex-1 px-4 py-6 overflow-y-auto pb-48">
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

        {/* 경전 원문 + 발음 (바로 밑에) */}
        <div
          className="p-6 rounded-2xl mb-5 card-shadow"
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

          {/* 원문 + 발음 (단어별 1:1 매칭) */}
          <div className="flex flex-wrap gap-x-3 gap-y-3 justify-center text-center">
            {step.words.map((word, idx) => (
              <span
                key={idx}
                onClick={() => handleWordTap(word)}
                className="inline-flex flex-col items-center cursor-pointer px-1 py-0.5 rounded-lg transition-all duration-200"
                style={{
                  background: activeWord?.pali === word.pali ? 'var(--color-primary-glow)' : 'transparent',
                }}
              >
                {/* 빠알리 단어 */}
                <span
                  className="pali-text text-xl"
                  style={{
                    color: activeWord?.pali === word.pali ? 'var(--color-primary-dark)' : 'var(--color-text)',
                    fontWeight: activeWord?.pali === word.pali ? 700 : 400,
                  }}
                >
                  {word.pali}
                </span>
                {/* 한글 발음 (바로 아래, ON/OFF) */}
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
        <div className="pl-4 py-2 mb-5 rounded-r-lg"
          style={{ borderLeft: '2px solid var(--color-primary-light)' }}>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text)' }}>
            {step.translation}
          </p>
        </div>
      </div>

      {/* 하단 고정: 선택된 단어 패널 */}
      {activeWord && (
        <div className="fixed bottom-[72px] left-0 right-0 z-10 reveal-down" style={{ maxWidth: '100%' }}>
          <div className="mx-4 p-4 rounded-2xl card-shadow"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-primary-light)', boxShadow: 'var(--shadow-xl)' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="pali-text text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                {activeWord.pali}
              </span>
              <button onClick={() => speakPali(activeWord.pali)}
                className="w-9 h-9 flex items-center justify-center rounded-full audio-ripple"
                style={{ background: 'var(--color-primary-glow)', color: 'var(--color-primary)' }}>
                🔊
              </button>
            </div>
            <p className="text-base font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
              {activeWord.meaning}
            </p>
            {activeWord.grammar && (
              <span className="badge badge-primary text-xs">{activeWord.grammar}</span>
            )}
            {showPron && (
              <div className="mt-2.5 pt-2.5 flex items-center gap-2"
                style={{ borderTop: '1px solid var(--color-border-light)' }}>
                <span className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--color-text-tertiary)' }}>발음</span>
                <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                  {formatPron(activeWord.pronKo, activeWord.pronEn)}
                </span>
              </div>
            )}
            <button onClick={() => setActiveWord(null)}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full text-xs"
              style={{ color: 'var(--color-text-tertiary)' }}>✕</button>
          </div>
        </div>
      )}

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
