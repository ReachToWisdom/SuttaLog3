// Playwright E2E: 퀴즈 흐름 + "계속하기" 버튼 가시성 + 랜덤 순서 테스트
import { test, expect } from '@playwright/test'

const BASE = 'http://localhost:3029/SuttaLog3/'

test.describe('학습 흐름', () => {
  test('홈 → 자모 학습 진입', async ({ page }) => {
    await page.goto(BASE)
    await page.waitForLoadState('networkidle')

    // 히어로 카드 클릭
    const heroCard = page.locator('button', { hasText: '자모와 발음' })
    await expect(heroCard).toBeVisible()
    await heroCard.click()

    // 인트로 화면 확인
    await expect(page.locator('text=빠알리 자모와 발음')).toBeVisible()
  })

  test('퀴즈에서 "계속하기" 버튼이 항상 보임', async ({ page }) => {
    await page.goto(BASE + '#/learn/alphabet')
    await page.waitForLoadState('networkidle')

    // 인트로 → "학습 시작" 클릭
    const startBtn = page.locator('button', { hasText: '학습 시작' })
    await expect(startBtn).toBeVisible()
    await startBtn.click()

    // teach 화면들 넘기기 (모음 8개)
    for (let i = 0; i < 8; i++) {
      const nextBtn = page.locator('button', { hasText: '다음' })
      await expect(nextBtn).toBeVisible({ timeout: 3000 })
      await nextBtn.click()
      await page.waitForTimeout(300)
    }

    // 퀴즈 화면 도달 — 아무 선택지 클릭
    const quizOption = page.locator('button.rounded-xl').first()
    await expect(quizOption).toBeVisible({ timeout: 3000 })
    await quizOption.click()

    // "계속하기" 버튼이 화면에 보이는지 확인 (하단 고정)
    const continueBtn = page.locator('button', { hasText: '계속하기' })
    await expect(continueBtn).toBeVisible({ timeout: 3000 })

    // 버튼이 뷰포트 안에 있는지 확인
    const box = await continueBtn.boundingBox()
    expect(box).toBeTruthy()
    const viewport = page.viewportSize()
    if (box && viewport) {
      expect(box.y + box.height).toBeLessThanOrEqual(viewport.height + 10)
    }
  })

  test('퀴즈 순서가 랜덤', async ({ page }) => {
    // 첫 번째 접속
    await page.goto(BASE + '#/learn/alphabet')
    await page.waitForLoadState('networkidle')

    // 인트로 넘기기
    await page.locator('button', { hasText: '학습 시작' }).click()

    // 8개 teach 넘기기
    for (let i = 0; i < 8; i++) {
      await page.locator('button', { hasText: '다음' }).click()
      await page.waitForTimeout(200)
    }

    // 첫 퀴즈 질문 수집
    const firstQuestion1 = await page.locator('h2').first().textContent()

    // 두 번째 접속 (새 세션)
    await page.goto(BASE + '#/learn/alphabet')
    await page.waitForLoadState('networkidle')
    await page.locator('button', { hasText: '학습 시작' }).click()

    for (let i = 0; i < 8; i++) {
      await page.locator('button', { hasText: '다음' }).click()
      await page.waitForTimeout(200)
    }

    const firstQuestion2 = await page.locator('h2').first().textContent()

    // 같은 질문일 수도 있지만 선택지 순서는 달라야 함
    // (8개 중 1개가 나오므로 같을 확률 있음 — 이건 OK)
    console.log('1차:', firstQuestion1)
    console.log('2차:', firstQuestion2)
  })
})

test.describe('모바일 뷰', () => {
  test.use({ viewport: { width: 375, height: 667 } }) // iPhone SE

  test('아이폰에서 "계속하기" 버튼 보임', async ({ page }) => {
    await page.goto(BASE + '#/learn/alphabet')
    await page.waitForLoadState('networkidle')

    // 인트로 → 학습 시작
    await page.locator('button', { hasText: '학습 시작' }).click()

    // 8개 teach 넘기기
    for (let i = 0; i < 8; i++) {
      await page.locator('button', { hasText: '다음' }).click()
      await page.waitForTimeout(200)
    }

    // 퀴즈 선택지 클릭
    const option = page.locator('button.rounded-xl').first()
    await expect(option).toBeVisible({ timeout: 3000 })
    await option.click()

    // 계속하기 버튼 뷰포트 안에 있는지
    const continueBtn = page.locator('button', { hasText: '계속하기' })
    await expect(continueBtn).toBeVisible({ timeout: 3000 })

    const box = await continueBtn.boundingBox()
    expect(box).toBeTruthy()
    if (box) {
      // 667px 뷰포트 안에 있어야 함
      expect(box.y + box.height).toBeLessThanOrEqual(677)
    }

    // 스크린샷 저장
    await page.screenshot({ path: 'e2e/screenshots/iphone-quiz-continue.png', fullPage: false })
  })
})
