// SSOT: 모든 설정값/상수를 이 파일에서만 정의

// ── Firebase 설정 (share_setting/FIREBASE.md 기준) ──
export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDDNRL69ugkKb6mJPnJb2kQud0_3b97viA',
  authDomain: 'panditarama-video.firebaseapp.com',
  projectId: 'panditarama-video',
  storageBucket: 'panditarama-video.firebasestorage.app',
  messagingSenderId: '504794613271',
  appId: '1:504794613271:web:ac565d6c6e82d9b72c7e52',
} as const

// ── 동기화 설정 ──
export const FIRESTORE_COLLECTION = 'suttalog3-users'
export const STORAGE_PREFIX = 'suttalog3-'
export const SYNC_EXTRA_KEYS = [
  'suttalog3-study-streak',
  'suttalog3-study-last-date',
  'suttalog3-sound',
  'suttalog3-writing',
  'suttalog3-pronunciation',
  'suttalog3-sandhi',
  'suttalog3-pron-en',
] as const

// 동기화 시 prefix 기반으로 동적 수집되는 키 패턴 (에빙하우스 반복 횟수)
export const SYNC_PREFIX_PATTERNS = [
  `${STORAGE_PREFIX}repeat-`,
] as const

// ── 학습 설정 ──
export const HEARTS_MAX = 3
export const SYNC_DEBOUNCE_MS = 3000
export const EBBINGHAUS_REPEAT_COUNT = 3

// ── 라우트 ──
export const ROUTES = {
  HOME: '/',
  COURSES: '/courses',
  REVIEW: '/review',
  PROFILE: '/profile',
  LEARN: '/learn/:lessonId',
} as const

// ── 앱 정보 ──
export const APP_NAME = '빠알리 경전 학습'
export const APP_VERSION = '0.1.0'
