import { test, expect } from '@playwright/test';

test.describe('响应式布局测试', () => {
  test('首页在不同视口正常显示', async ({ page }) => {
    // 测试桌面端
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForTimeout(1000);
    let body = await page.content();
    expect(body).toContain('Sean');

    // 测试移动端
    await page.setViewportSize({ width: 393, height: 851 });
    await page.reload();
    await page.waitForTimeout(1000);
    body = await page.content();
    expect(body).toContain('Sean');
  });
});
