import { test, expect } from '@playwright/test';

test.describe('项目详情页测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects/yourentool');
  });

  test('页面加载正常', async ({ page }) => {
    await expect(page).toHaveURL('/projects/yourentool');
    await page.waitForTimeout(1000);
  });

  test('显示项目标题', async ({ page }) => {
    await page.waitForTimeout(1000);
    const pageContent = await page.content();
    expect(pageContent).toContain('游刃');
  });

  test('BACK链接存在', async ({ page }) => {
    await page.waitForTimeout(1000);
    const backLink = page.getByRole('link', { name: /BACK|返回/ });
    await expect(backLink.first()).toBeVisible();
  });
});

test.describe('404页面测试', () => {
  test('访问不存在的项目显示404', async ({ page }) => {
    await page.goto('/projects/nonexistent-project');
    await page.waitForTimeout(1000);
    const pageContent = await page.content();
    expect(pageContent).toContain('404');
  });
});
