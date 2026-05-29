import { test, expect } from '@playwright/test';

test.describe('首页测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('页面加载正常', async ({ page }) => {
    await expect(page).toHaveURL('/');
    await page.waitForTimeout(1000);
    const body = await page.content();
    expect(body).toContain('Sean');
  });

  test('Hero区域显示标题', async ({ page }) => {
    await page.waitForTimeout(1000);
    const heroTitle = page.locator('h1').first();
    await expect(heroTitle).toBeVisible();
  });

  test('导航栏存在', async ({ page }) => {
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();
  });

  test('页脚存在', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});
