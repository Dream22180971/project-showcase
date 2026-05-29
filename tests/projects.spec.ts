import { test, expect } from '@playwright/test';

test.describe('项目列表页测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
  });

  test('页面加载正常', async ({ page }) => {
    await expect(page).toHaveURL('/projects');
    await page.waitForTimeout(1000);
  });

  test('显示项目列表', async ({ page }) => {
    await page.waitForTimeout(1000);
    const pageContent = await page.content();
    expect(pageContent).toContain('PROJECTS');
  });

  test('搜索框存在', async ({ page }) => {
    await page.waitForTimeout(1000);
    const searchInput = page.getByPlaceholder(/Search|搜索/);
    await expect(searchInput.first()).toBeVisible();
  });
});
