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
        skipWaiting: true,
        clientsClaim: true,
        // Network First: 온라인 시 항상 서버에서 최신 가져옴
        // 오프라인 시에만 캐시 사용
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/reachtowisdom\.github\.io\/SuttaLog3\/.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'suttalog3-app',
              expiration: { maxEntries: 50, maxAgeSeconds: 86400 },
              networkTimeoutSeconds: 3,
            },
          },
        ],
        // 정적 파일도 Network First
        navigateFallback: null,
        globPatterns: [],
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
