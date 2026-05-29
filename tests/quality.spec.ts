import { expect, test } from '@playwright/test';

const pages = ['/', '/projects', '/projects/yourentool'];
const viewports = [
  { width: 1440, height: 900 },
  { width: 393, height: 851 },
];

test.describe('上线质量检查', () => {
  for (const path of pages) {
    test(`${path} 页面有有效标题且无 hydration 错误`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') {
          consoleErrors.push(message.text());
        }
      });

      await page.goto(path, { waitUntil: 'domcontentloaded' });
      await expect(page).toHaveTitle(/Sean Walter \| Project Showcase/);

      expect(
        consoleErrors.filter((error) =>
          /hydrated|hydration|Invalid HTML tag nesting/i.test(error)
        )
      ).toEqual([]);
    });
  }

  for (const viewport of viewports) {
    test(`首页在 ${viewport.width}x${viewport.height} 无横向溢出`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/', { waitUntil: 'domcontentloaded' });

      const dimensions = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));

      expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
    });
  }

  test('项目列表搜索和分类筛选返回符合预期的项目', async ({ page }) => {
    await page.goto('/projects', { waitUntil: 'domcontentloaded' });

    await page.getByPlaceholder('Search projects...').click();
    await page.keyboard.type('python');
    await expect(page.locator('h3')).toHaveCount(4);
    await expect(page.getByRole('heading', { name: /TestPilot Agent/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /VoyageAI/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /RAG/ })).toBeVisible();

    await page.getByRole('button', { name: 'Clear search' }).click();
    await expect(page.locator('h3')).toHaveCount(11);
    await page.getByRole('button', { name: 'AI/ML' }).click();
    await expect(page.getByRole('heading', { name: /TestPilot Agent/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /VoyageAI/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Coze/ })).toBeVisible();
    await expect(page.getByText('Tauri')).not.toBeVisible();
  });
});
