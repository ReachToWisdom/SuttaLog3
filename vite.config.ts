import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // 새 버전 배포 시 즉시 활성화
        skipWaiting: true,
        clientsClaim: true,
        // 캐시 대상
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      },
      manifest: {
        name: '빠알리 경전 학습',
        short_name: '빠알리학습',
        description: '경전 중심 빠알리어 학습앱',
        theme_color: '#C06B0A',
        background_color: '#FBF8F0',
        display: 'standalone',
        scope: '/SuttaLog3/',
        start_url: '/SuttaLog3/',
        icons: [
          { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' },
        ],
      },
    }),
  ],
  base: '/SuttaLog3/',
  server: {
    port: 3024,
    host: true,
  },
  preview: {
    port: 3024,
  },
})
