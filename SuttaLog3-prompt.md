# SuttaLog3 — 경전 중심 빠알리어 학습앱

## 핵심 철학

**"문법책이 아니라 경전이 교재다"**

- 모든 학습은 실제 빠알리 경전 원문에서 출발
- 문법은 경전 문장 안에서 만났을 때 설명
- 같은 문법이 다른 경전에서 반복 등장하면 그때마다 다시 설명 (의도적 반복 허용)
- 부족한 내용은 다른 장에서 중복/보충 가능

## 구조

### Part 0: 기초 도구 (유일한 예외 — 경전 진입 전 필수)

경전을 읽기 위한 최소 도구만 가르침:

1. **빠알리 자모** (41자): 모음 8 + 자음 33
2. **발음 규칙**: 장단모음, 기식음/무기식음, 비음, 이중자음
3. **연성법(sandhi)** 핵심 패턴 10가지
4. 이것만 마치면 **즉시 경전으로 진입**

### Part 1~N: 경전 단원

각 단원 = **하나의 경전 또는 게송**이 교재

#### 단원 구성 (필수):

```
1. 경전 원문 제시
   - 빠알리 원문 (단어별 터치 → 뜻/문법 팝업)
   - 한글 번역
   - 음성 재생 (전체 + 단어별)

2. 단어 분해
   - 원문의 핵심 단어를 하나씩 카드로 학습
   - 어근(dhātu), 접두사/접미사, 격변화, 동사활용
   - teach 타입 스텝 사용

3. 문장 구조 분석
   - 주어/동사/목적어 역할 설명
   - 격(case)의 역할을 이 문장에서 직접 보여줌
   - teach-grammar 타입 스텝 사용

4. 문법 포인트
   - 이 경전에서 처음 만나는 문법 상세 설명
   - 이전 단원에서 나왔던 문법도 간략 복습 가능
     ("1단원 Maṅgala Sutta에서 처음 배운 주격이 여기서도 나옵니다")

5. 연습 문제 — 해당 경전 기반
   - quiz: 단어 뜻 맞추기
   - match-listen: 음성 듣고 맞추기
   - match-reverse: 뜻 보고 빠알리 맞추기
   - arrange: 경전 문장 배열
   - writing: 경전 단어 필기 연습

6. 암송
   - verse 타입으로 원문 전체 표시
   - 단어별 터치 → 발음/뜻
   - 빈칸 채우기 (암기 테스트)
```

### 경전 선정 (순서 — 짧고 자주 인용되는 것부터)

```
1. Maṅgala Sutta (행복경/길상경) — 짧은 게송, 기초 어휘 풍부
2. Ratana Sutta (보배경) — 반복 구문 많아 패턴 학습에 좋음
3. Metta Sutta (자비경) — 동사활용 풍부
4. Dhammapada 핵심 게송 20선 — 다양한 문법 총정리
5. Satipaṭṭhāna Sutta 서분 — 산문 입문
6. Anattalakkhaṇa Sutta (무아상경) — 격변화 심화
7. Āditta Sutta (불타는 경) — 짧은 산문
8. Mahāparinibbāna Sutta 핵심 구절 — 긴 텍스트 도전
```

이 순서는 제안이며, 실제 교재 작성 시 조정 가능.

### 의도적 반복 원칙

- 격변화가 Ch.1에서 나왔어도 Ch.5에서 다시 나오면 **다시 설명**
- 단, "Ch.1 Maṅgala Sutta에서 처음 배웠고, 여기서 다시 만납니다" 식으로 연결
- **반복할수록 설명은 짧아지고, 응용은 깊어짐**
- 같은 단어가 다른 경전에서 다른 격/형태로 나오면 비교 설명

---

## 기술 스택 (SuttaLog2와 동일)

```
- React 19 + TypeScript
- Vite (빌드)
- Tailwind CSS 4
- React Router (HashRouter)
- Firebase (Firestore + Google Auth)
- GitHub Pages 배포 (GitHub Actions)
```

## 포트 설정

```
dev server: 3024
```

## SuttaLog2에서 가져올 기능 (전부)

### 1. 학습 UI 엔진 (GrammarLearn.tsx 구조 재사용)

9가지 Step Type 모두 지원:

| Type | 용도 |
|------|------|
| intro | 단원 시작 (경전 소개) |
| teach | 단어 카드 (빠알리 + 발음 + 뜻 + 문법태그 + 음성) |
| teach-grammar | 문법 설명 (예문 박스 + 설명 목록) |
| quiz | 4지선다 퀴즈 |
| match-listen | 음성 듣고 맞추기 |
| match-reverse | 뜻 보고 빠알리 맞추기 |
| arrange | 문장/구절 배열 |
| writing | 손글씨 쓰기 (WritingCanvas) |
| verse | 경전 원문 표시 (단어별 터치 + 음성) |

### 2. 게임화 시스템

- **하트(연꽃) 3개**: 오답 시 감소, 0이면 게임오버 → 처음부터
- **연속 학습 불꽃**: 매일 학습 시 streak 증가
- **진도 표시**: 프로그레스 바 + 도트 + 스텝 번호
- **완료 화면**: 정답 수 + 남은 하트 + 경과 시간

### 3. 홈 화면

- 시간대별 인사 메시지
- 히어로 카드 (현재 학습 중인 경전 + 진도 원형 프로그레스)
- 통계 3칸 (완료 경전 수 / 연속 학습일 / 오늘 학습 시간)
- 오늘의 경전 명구 (날짜 기반 로테이션)

### 4. 과목 화면

- 경전별 목록 (카테고리 접이식)
- 카테고리 예시: Part 0 기초, 게송 경전, 법구경, 산문 경전
- 과별 진도 표시 (원형 프로그레스 / 완료 체크 / 잠금)
- 검색 필터링

### 5. 복습 화면

- 완료한 경전 목록
- "랜덤 복습 시작" 버튼
- 개별 경전 선택 복습

### 6. 설정 화면

- 쓰기 모드 ON/OFF
- 소리 ON/OFF
- **클라우드 동기화** (Google 로그인 + 업로드/다운로드)
- 진도 초기화
- 앱 정보

### 7. WritingCanvas

- 펜 크기 3단계 (2, 4, 7px)
- 안내선 토글
- 되돌리기 / 지우기
- 네이티브 이벤트 (passive: false — 터치 스크롤 방지)
- DPR 보정

### 8. 음성 (TTS)

- 빠알리 로마자 → 데바나가리 변환 → Hindi TTS
- 재생 속도 0.6
- 소리 설정 연동

### 9. 테마

- 라이트/다크 모드 (CSS 변수)
- 갈색 프라이머리 (#C06B0A / #E8993A)
- 애니메이션: 스텝 전환, 하트 떨림, 퀴즈 결과, 완료 바운스

### 10. 하단 네비게이션

- 4탭: 홈 / 과목 / 복습 / 프로필
- 학습 중일 때 숨김

### 11. Firebase 동기화

```
- 설정: D:/DevBrowser/share_setting/FIREBASE.md 참조
- 컬렉션명: suttalog3-users (SuttaLog2와 분리)
- Google OAuth (signInWithPopup)
- 진도 충돌: 더 높은 값 유지
- 디바운스 3초 자동 push
- Firestore 규칙 추가 + 배포 필요
```

### 12. GitHub Pages 배포

```
- 리포지토리: ReachToWisdom/SuttaLog3
- base: '/SuttaLog3/'
- GitHub Actions 자동 빌드+배포
- 설정: D:/DevBrowser/share_setting/GITHUB_PAGES.md 참조
```

---

## 데이터 구조

### 경전 단원 데이터 (TypeScript)

```typescript
// 예시: Maṅgala Sutta 단원
export const MANGALA_SUTTA: StepType[] = [
  {
    type: 'intro',
    title: 'Maṅgala Sutta',
    subtitle: '행복경 · 길상경',
    description: '부처님께서 가장 높은 행복(maṅgala)이 무엇인지 설하신 경전',
    icon: '🪷'
  },
  {
    type: 'verse',
    pali: 'Evaṃ me sutaṃ',
    pronKo: '에왕 메 수땅',
    translation: '이와 같이 나는 들었다',
    highlight: ['Evaṃ', 'me', 'sutaṃ'],
    note: '모든 경전의 시작 공식구'
  },
  {
    type: 'teach',
    word: 'Evaṃ',
    pronKo: '에왕',
    meaning: '이와 같이',
    icon: '📖',
    grammar: '부사 (indeclinable)',
    verseLine: 'Evaṃ me sutaṃ',
    verseLineKo: '이와 같이 나는 들었다'
  },
  {
    type: 'quiz',
    question: '"Evaṃ me sutaṃ"에서 "me"의 뜻은?',
    options: ['나는', '나에게', '나의', '나를'],
    answer: 0,
    hint: '주격 1인칭 단수'
  },
  {
    type: 'writing',
    instruction: '경전 첫 단어를 써보세요',
    answer: 'Evaṃ',
    hint: '이와 같이',
    pronKo: '에왕'
  },
  // ... 경전 전체를 이 패턴으로 구성
]
```

### Lesson 메타데이터

```typescript
export const LESSONS: LessonInfo[] = [
  // Part 0: 기초
  { id: 'alphabet', title: '자모와 발음', subtitle: '모음 8 · 자음 33', icon: '🔤', category: 'basic' },
  { id: 'sandhi', title: '연성법', subtitle: '소리 변화 규칙', icon: '🔗', category: 'basic' },
  // Part 1~: 경전
  { id: 'mangala', title: 'Maṅgala Sutta', subtitle: '행복경', icon: '🪷', category: 'gatha' },
  { id: 'ratana', title: 'Ratana Sutta', subtitle: '보배경', icon: '💎', category: 'gatha' },
  { id: 'metta', title: 'Metta Sutta', subtitle: '자비경', icon: '💛', category: 'gatha' },
  // ...
]
```

---

## 산출물

1. **PRD.md** 작성
2. **Tasks.md** 작성
3. 프로젝트 초기 세팅 (Vite + React + TS + Tailwind)
4. SuttaLog2에서 UI 엔진 코드 복사 + 리팩터링
5. Part 0 (자모 + 발음 + 연성법) 교재 데이터
6. 첫 번째 경전 (Maṅgala Sutta) 교재 데이터
7. Firebase 동기화 연동
8. GitHub Pages 배포

**먼저 PRD.md를 작성해주세요.**
