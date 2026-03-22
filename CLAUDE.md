# SuttaLog3 — 경전 중심 빠알리어 학습앱

> **"문법책이 아니라, 경전이 교재다"**

## 기술 스택

- React 19 + TypeScript + Vite 8 + Tailwind CSS 4
- Firebase (Firestore + Google Auth) / GitHub Pages 배포
- PWA (vite-plugin-pwa, autoUpdate)
- 포트: 3024 (dev) / 배포: reachtowisdom.github.io/SuttaLog3/

## 학습 구조

```
Part 0: 자모 발음 (모음 8 + 자음 33)
기초 문법 개론 (3성/8격/격변화/동사 전체 지도)
Part 1: 행복경 (연성법 + 기초 단어)
  → [분기] 보배경/자비경 (선택) or 전법륜경
심화 문법 (i/u-어간, 과거형, 분사, 복합어)
Part 2: 전법륜경 → 무아경 → 사념처경
```

## 스텝 타입 (11가지)

| 타입 | 용도 |
|------|------|
| intro | 단원 소개 |
| teach | 단어 카드 (빠알리+발음+뜻+문법) |
| teach-grammar | 문법 설명 (테이블+예문+팁+이전 단원 연결) |
| quiz | 4지선다 (발음/뜻) |
| match-reverse | 뜻→빠알리 (격변화 함정) |
| arrange-reading | 독해 조립 (빠알리→한글 조각) |
| arrange-writing | 작문 조립 (한글→빠알리 조각) |
| fill-blank | 빈칸 채우기 (문장에서 격 형태 선택) |
| verse | 경전 원문 (단어별 1:1 발음 + 문법 노트 + 단어 풀이) |
| vocab-list | 단어 목록 한 화면 보기 |
| match-listen | 음성 듣고 맞추기 |

## 핵심 규칙

1. **SSOT**: 설정값/상수는 config, 명구는 quotes.ts, 발음 표시는 pron-display.ts
2. **발음 표시**: 원문 각 단어 바로 아래 1:1 매칭, 설정에서 ON/OFF
3. **퀴즈 랜덤**: getLessonById()가 매번 새로 셔플
4. **이어하기**: 스텝 진도 localStorage 자동 저장
5. **리뷰 모드**: 진도 기록 없이 아무 단원 열기
6. **코드 주석 한국어**, 에러 처리 필수
7. **파일 200줄 제한**

## 폴더 구조

```
src/
├── config/index.ts          # SSOT 중앙 설정
├── data/
│   ├── types.ts             # 모든 타입 정의
│   ├── alphabet.ts          # 자모 41자 + 발음
│   ├── quotes.ts            # 경전 명구 (SSOT)
│   ├── grammar-steps.ts     # 경전별 문법 설명
│   ├── grammar-basics.ts    # 기초 문법 개론
│   ├── grammar-advanced.ts  # 심화 문법
│   ├── quiz-generator.ts    # 퀴즈 자동 생성
│   ├── lessons-index.ts     # 단원 목록 + 빌더
│   ├── mangala-words.ts     # 행복경
│   ├── ratana-words.ts      # 보배경
│   ├── metta-words.ts       # 자비경
│   ├── dhammacakka-words.ts # 전법륜경
│   ├── anatta-words.ts      # 무아경
│   ├── satipatthana-words.ts# 사념처경
│   └── dhammapada-words.ts  # 법구경
├── components/
│   ├── BottomNav.tsx         # 5탭 (홈/목차/복습/기록/설정)
│   ├── ProgressBar.tsx       # 상단 진도 바
│   ├── ExplanationBox.tsx    # 해설 + 하단 고정 버튼
│   └── steps/               # 11가지 스텝 렌더러
├── features/
│   ├── home/Home.tsx         # 홈 (명구+통계+히어로)
│   ├── courses/Courses.tsx   # 목차 (경전경로/문법경로 탭)
│   ├── review/Review.tsx     # 복습 (오답/랜덤/약한단어/리뷰)
│   ├── stats/Stats.tsx       # 기록 (차트/평균/히트맵)
│   ├── settings/Settings.tsx # 설정
│   └── learn/
│       ├── LearnEngine.tsx   # 학습 엔진
│       ├── CompletionView.tsx# 완료 화면
│       └── BranchView.tsx    # 분기점 화면
└── utils/
    ├── pali-tts.ts           # 음성 (데바나가리→힌디TTS)
    ├── pron-display.ts       # 발음 표시 유틸
    ├── sync.ts               # Firebase 동기화
    ├── wrong-tracker.ts      # 오답/단어 통계
    ├── study-tracker.ts      # 학습 시간 기록
    └── word-tracker.ts       # 단어 조회 추적
```

## 자기 검증

위 규칙을 위반하는 코드를 작성하려 할 때:
1. 즉시 중단하고 "⚠️ SPEC 위반: [항목]" 경고 출력
2. 사용자에게 승인 요청
3. 승인 없이 진행 금지
