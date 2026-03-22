import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// 이전 서비스 워커의 오래된 캐시 정리 (1회성)
if ('serviceWorker' in navigator) {
  const CACHE_CLEARED_KEY = 'suttalog3-cache-v2'
  if (!localStorage.getItem(CACHE_CLEARED_KEY)) {
    // 이전 서비스 워커 해제 + 캐시 삭제
    navigator.serviceWorker.getRegistrations().then(regs => {
      regs.forEach(reg => reg.unregister())
    })
    caches.keys().then(keys => {
      keys.forEach(key => caches.delete(key))
    })
    localStorage.setItem(CACHE_CLEARED_KEY, '1')
    // 정리 후 새로고침하여 깨끗한 상태로 시작
    setTimeout(() => location.reload(), 300)
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
