// 단어 목록 — 한 화면에 모아 보기, 탭하여 자율 학습
import { useState } from 'react'
import type { VocabListStep } from '../../data/types'
import { formatPron } from '../../utils/pron-display'
import { speakPali } from '../../utils/pali-tts'
import { trackWordView } from '../../utils/word-tracker'

interface Props {
  step: VocabListStep
  onNext: () => void
  onBack?: () => void
}

export default function VocabListView({ step, onNext, onBack }: Props) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  const toggle = (idx: number) => {
    if (expandedIdx !== idx) {
      // 열 때만 카운팅
      trackWordView(step.words[idx].pali)
    }
    setExpandedIdx(prev => prev === idx ? null : idx)
  }

  const handleSpeak = (word: string) => {
    const soundOn = localStorage.getItem('suttalog3-sound') !== 'off'
    if (soundOn) speakPali(word)
  }

  return (
    <div className="step-enter px-4 py-6 flex flex-col gap-4 pb-24">
      {/* 헤더 */}
      <div className="text-center intro-fade-up">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            background: 'var(--color-primary-glow)',
            color: 'var(--color-primary)',
            border: '1px solid var(--color-primary-light)',
          }}
        >
          📝 {step.title}
        </span>
        <p className="text-xs mt-2" style={{ color: 'var(--color-text-tertiary)' }}>
          단어를 탭하면 상세 정보를 볼 수 있습니다
        </p>
      </div>

      {/* 단어 목록 */}
      <div className="flex flex-col gap-2 max-w-lg mx-auto w-full">
        {step.words.map((word, idx) => {
          const isOpen = expandedIdx === idx
          return (
            <div key={idx} className="intro-fade-up">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all active:scale-[0.98]"
                style={{
                  background: isOpen ? 'var(--color-primary-glow)' : 'var(--color-surface)',
                  border: isOpen
                    ? '1.5px solid var(--color-primary-light)'
                    : '1px solid var(--color-border-light)',
                }}
              >
                {/* 번호 */}
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold"
                  style={{
                    background: isOpen ? 'var(--color-primary)' : 'var(--color-border-light)',
                    color: isOpen ? '#fff' : 'var(--color-text-tertiary)',
                  }}
                >
                  {idx + 1}
                </span>

                {/* 빠알리어 + 뜻 */}
                <div className="flex-1 min-w-0">
                  <span className="pali-text font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                    {word.pali}
                  </span>
                  <span className="text-xs ml-2" style={{ color: 'var(--color-text-secondary)' }}>
                    {word.meaning}
                  </span>
                </div>

                {/* 열기/닫기 표시 */}
                <span className="text-xs shrink-0" style={{ color: 'var(--color-text-tertiary)' }}>
                  {isOpen ? '▲' : '▼'}
                </span>
              </button>

              {/* 상세 패널 */}
              {isOpen && (
                <div
                  className="mx-2 mt-1 p-3 rounded-lg flex flex-col gap-2"
                  style={{ background: 'var(--color-surface-elevated)' }}
                >
                  {/* 발음 */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider"
                        style={{ color: 'var(--color-text-tertiary)' }}>발음</span>
                      <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                        {formatPron(word.pronKo, word.pronEn)}
                      </p>
                    </div>
                    <button
                      onClick={() => handleSpeak(word.pali)}
                      className="w-8 h-8 flex items-center justify-center rounded-full"
                      style={{ background: 'var(--color-primary-glow)', color: 'var(--color-primary)' }}
                    >
                      🔊
                    </button>
                  </div>

                  {/* 문법 태그 */}
                  {word.grammar && (
                    <span className="badge badge-primary text-[10px] px-2 py-0.5 self-start">
                      {word.grammar}
                    </span>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* 하단 버튼 */}
      <div className="flex gap-3 max-w-lg mx-auto w-full mt-2">
        {onBack && (
          <button onClick={onBack} className="btn-secondary flex-1 py-3.5 text-base">
            ← 이전
          </button>
        )}
        <button onClick={onNext} className="btn-primary flex-1 py-3.5 text-base">
          다음 →
        </button>
      </div>
    </div>
  )
}
