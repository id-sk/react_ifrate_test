/**
 * Verifies the no-JavaScript fallback for the vanilla Accordion: with
 * scripting disabled, `vanilla.js` never runs to collapse sections, so the
 * static markup must render every section open by default.
 *
 * Run: cd packages/core && pnpm exec playwright test -c playwright-e2e.config.ts
 */
import { expect, test } from '@playwright/test';

test.use({ javaScriptEnabled: false });

test('accordion sections are open by default when JavaScript is disabled', async ({ page }) => {
  await page.goto('/test-vanilla.html');

  const contents = page.locator('.idsk-accordion__content');
  await expect(contents).toHaveCount(2);
  await expect(contents.nth(0)).toBeVisible();
  await expect(contents.nth(1)).toBeVisible();

  await expect(contents.nth(0)).not.toHaveAttribute('hidden', '');
  await expect(contents.nth(1)).not.toHaveAttribute('hidden', '');
});
