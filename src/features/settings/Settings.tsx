// 설정 화면 — 소리/동기화/초기화
import { useState } from 'react'
import { STORAGE_PREFIX, APP_VERSION } from '../../config'
import { isSyncConfigured, syncLogin, syncLogout, pullFromCloud, pushToCloud } from '../../utils/sync'

export default function Settings() {
  const [sound, setSound] = useState(localStorage.getItem(`${STORAGE_PREFIX}sound`) !== 'off')
  const [pronShow, setPronShow] = useState(localStorage.getItem(`${STORAGE_PREFIX}pronunciation`) !== 'off')
  const [pronEn, setPronEn] = useState(localStorage.getItem(`${STORAGE_PREFIX}pron-en`) === 'on')
  const [syncing, setSyncing] = useState(false)

  const toggleSound = () => {
    const next = !sound
    setSound(next)
    localStorage.setItem(`${STORAGE_PREFIX}sound`, next ? 'on' : 'off')
  }

  const togglePronShow = () => {
    const next = !pronShow
    setPronShow(next)
    localStorage.setItem(`${STORAGE_PREFIX}pronunciation`, next ? 'on' : 'off')
  }

  const togglePronEn = () => {
    const next = !pronEn
    setPronEn(next)
    localStorage.setItem(`${STORAGE_PREFIX}pron-en`, next ? 'on' : 'off')
  }

  const handleLogin = async () => {
    try {
      setSyncing(true)
      await syncLogin()
      await pullFromCloud()
    } catch (e) {
      console.error('로그인 실패:', e)
    } finally {
      setSyncing(false)
    }
  }

  const handleLogout = async () => {
    try {
      await syncLogout()
    } catch (e) {
      console.error('로그아웃 실패:', e)
    }
  }

  const handleSync = async () => {
    try {
      setSyncing(true)
      await pushToCloud()
      await pullFromCloud()
    } catch (e) {
      console.error('동기화 실패:', e)
    } finally {
      setSyncing(false)
    }
  }

  const [confirmReset, setConfirmReset] = useState(false)

  const handleReset = () => {
    if (!confirmReset) {
      setConfirmReset(true)
      return
    }
    // suttalog3-로 시작하는 모든 키 삭제 (하나씩)
    const keysToDelete = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith('suttalog3')) keysToDelete.push(key)
    }
    keysToDelete.forEach(k => localStorage.removeItem(k))

    // 홈으로 이동
    window.location.replace(window.location.pathname + '#/')
  }

  return (
    <div className="pb-20 px-4 pt-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
        설정
      </h1>

      {/* 소리 */}
      <SettingRow label="소리" description="TTS 발음 재생">
        <ToggleButton on={sound} onToggle={toggleSound} />
      </SettingRow>

      {/* 발음 표시 */}
      <div className="mt-3">
        <SettingRow label="발음 표시" description="경전 원문 밑에 한글 발음 표시">
          <ToggleButton on={pronShow} onToggle={togglePronShow} />
        </SettingRow>
      </div>

      {/* 영어 발음 병기 */}
      <div className="mt-3">
        <SettingRow label="영어 발음 병기" description="한글 발음 옆에 영어 발음 표시">
          <ToggleButton on={pronEn} onToggle={togglePronEn} />
        </SettingRow>
      </div>

      {/* 동기화 */}
      {isSyncConfigured() && (
        <div className="mt-6">
          <h2 className="text-sm font-semibold mb-3"
            style={{ color: 'var(--color-text-secondary)' }}>
            클라우드 동기화
          </h2>

          <div className="flex gap-3 mb-3">
            <button onClick={handleLogin} className="btn-secondary flex-1" disabled={syncing}>
              Google 로그인
            </button>
            <button onClick={handleLogout} className="btn-ghost flex-1">
              로그아웃
            </button>
          </div>

          <button onClick={handleSync} className="btn-secondary w-full" disabled={syncing}>
            {syncing ? '동기화 중...' : '🔄 지금 동기화'}
          </button>
        </div>
      )}

      {/* 초기화 */}
      <div className="mt-8">
        <button onClick={handleReset} className="w-full p-3 rounded-xl border text-center"
          style={{
            borderColor: 'var(--color-error)',
            color: confirmReset ? '#fff' : 'var(--color-error)',
            background: confirmReset ? 'var(--color-error)' : 'transparent',
          }}>
          {confirmReset ? '정말 초기화하시겠습니까? (다시 누르면 실행)' : '진도 초기화'}
        </button>
        {confirmReset && (
          <button onClick={() => setConfirmReset(false)}
            className="w-full mt-2 p-2 text-sm text-center"
            style={{ color: 'var(--color-text-tertiary)' }}>
            취소
          </button>
        )}
      </div>

      {/* 앱 정보 */}
      <div className="mt-8 text-center">
        <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
          빠알리어 공부3 v{APP_VERSION}
        </p>
        <p className="text-xs mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
          제작: 혜통
        </p>
      </div>
    </div>
  )
}

function SettingRow({ label, description, children }: {
  label: string; description: string; children: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border"
      style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border-light)' }}>
      <div>
        <p className="font-medium" style={{ color: 'var(--color-text)' }}>{label}</p>
        <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>{description}</p>
      </div>
      {children}
    </div>
  )
}

function ToggleButton({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="w-12 h-7 rounded-full transition-all relative"
      style={{
        background: on ? 'var(--color-accent)' : 'var(--color-border)',
      }}
    >
      <div className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-all"
        style={{ left: on ? '22px' : '2px' }} />
    </button>
  )
}
