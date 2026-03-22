# Tasks — SuttaLog3

## 현재 진행: 문법 교재 중심 학습 경로 재편성

### Step 1: LESSON_META 재편성 ✅
- [x] lessons-index.ts의 단원을 교재 과 단위로 분할
- [x] 교재 1~13과 → 행복경 → 14~18과 → 보배경/자비경 → 19~22과 → 전법륜경 → 23~29과 → 무아경 → 30~32과+총정리 → 사념처경

### Step 2: 문법 예문을 경전 원문으로 통합 ✅
- [x] grammar-primer.ts: 예문 경전으로 교체 (행복경+전법륜경+무아경)
- [x] grammar-primer-2.ts: 예문 경전으로 교체 (전법륜경+무아경+사념처경)
- [x] grammar-primer-3.ts: 예문 경전으로 교체 (모든 경전)

### Step 3: 경전 보충설명 자동 삽입 ✅ (기존 grammar-steps.ts로 구현됨)
- [x] 행복경: MANGALA_GRAMMAR (연성법 등)
- [x] 전법륜경: DHAMMACAKKA_GRAMMAR
- [x] 무아경: ANATTA_GRAMMAR
- [x] 사념처경: SATIPATTHANA_GRAMMAR

### Step 4: 명사 도표화 자료 반영
- [ ] data/210803 PDF의 격변화표를 문법 설명에 반영
- [ ] 각 어간별 격변화 도표와 대조

### Step 5: 목차(Courses.tsx) 재편성
- [ ] PATH_SECTIONS: 교재 과 + 경전 ★ 표시
- [ ] GRAMMAR_SECTIONS: 교재 32과 전체

### Step 6: 빌드 + 배포 + 검증
- [ ] 타입 체크 + 빌드
- [ ] Playwright 전체 경로 순서 확인
- [ ] GitHub Pages 배포
- [ ] 명세서 갱신
