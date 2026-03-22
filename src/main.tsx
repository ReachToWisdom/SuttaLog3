import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// 서비스 워커 완전 삭제 + 모든 캐시 삭제 (매번 실행)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.forEach(reg => reg.unregister())
  })
}
if ('caches' in window) {
  caches.keys().then(keys => {
    keys.forEach(key => caches.delete(key))
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
