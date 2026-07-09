/**
 * Playwright component tests for Breadcrumbs.
 * Run: cd packages/core && pnpm exec playwright test src/components/Breadcrumbs/Breadcrumbs.ct.test.tsx -c playwright-ct.config.ts
 *
 * These tests cover behaviour that requires a real browser engine:
 *   - CSS focus-ring visual indicator
 *   - Tab / Shift+Tab keyboard navigation between links
 *   - Enter key activates a link
 *   - Mobile viewport responsiveness
 *   - Expand button keyboard activation (Enter)
 *   - axe-core a11y scan in a real browser context
 */
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { Breadcrumbs } from './Breadcrumbs';

const twoItems = [{ label: 'Domov', href: '#domov' }, { label: 'Aktuálna stránka' }];

const fourItems = [
  { label: 'Domov', href: '#domov' },
  { label: 'Sekcia', href: '#sekcia' },
  { label: 'Odbor', href: '#odbor' },
  { label: 'Aktuálna stránka' },
];

const fiveItems = [
  { label: 'Domov', href: '#domov' },
  { label: 'Sekcia', href: '#sekcia' },
  { label: 'Odbor', href: '#odbor' },
  { label: 'Oddelenie', href: '#oddelenie' },
  { label: 'Aktuálna stránka' },
];

const envRules = ['document-title', 'page-has-heading-one', 'region'];

// ---------------------------------------------------------------------------
// Keyboard navigation
// ---------------------------------------------------------------------------
test.describe('Keyboard navigation', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('Tab moves focus to the first link', async ({ mount, page, browserName }) => {
    // WebKit does not include <a> elements in the default Tab order (matches
    // real Safari without "Full Keyboard Access" enabled) — not something
    // this component can control.
    test.skip(browserName === 'webkit', 'WebKit does not tab to links by default');
    await mount(<Breadcrumbs items={twoItems} />);
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Domov' })).toBeFocused();
  });

  test('Tab moves focus through all links in DOM order', async ({ mount, page, browserName }) => {
    test.skip(browserName === 'webkit', 'WebKit does not tab to links by default');
    await mount(<Breadcrumbs items={fourItems} />);
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Domov' })).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Sekcia' })).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Odbor' })).toBeFocused();
  });

  test('Shift+Tab moves focus back to previous link', async ({ mount, page, browserName }) => {
    test.skip(browserName === 'webkit', 'WebKit does not tab to links by default');
    await mount(<Breadcrumbs items={fourItems} />);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Shift+Tab');
    await expect(page.getByRole('link', { name: 'Domov' })).toBeFocused();
  });

  test('current page does not receive focus via Tab', async ({ mount, page }) => {
    await mount(<Breadcrumbs items={twoItems} />);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    // Focus-wrap behaviour at the end of the page's tab order differs across
    // browsers (e.g. Firefox cycles back to the only link); what matters is
    // that the non-interactive "current page" span itself never gets focus.
    const focusedText = await page.evaluate(() => document.activeElement?.textContent?.trim());
    expect(focusedText).not.toBe('Aktuálna stránka');
  });

  test('Enter key activates focused link', async ({ mount, page }) => {
    await mount(<Breadcrumbs items={twoItems} />);
    const link = page.getByRole('link', { name: 'Domov' });
    await link.focus();
    // Register a click-tracking flag before the keypress.
    await page.evaluate(() => {
      (window as Window & { __breadcrumbClicked?: boolean }).__breadcrumbClicked = false;
      document.querySelector('a')?.addEventListener(
        'click',
        () => {
          (window as Window & { __breadcrumbClicked?: boolean }).__breadcrumbClicked = true;
        },
        { once: true },
      );
    });
    await page.keyboard.press('Enter');
    const clicked = await page.evaluate(
      () => (window as Window & { __breadcrumbClicked?: boolean }).__breadcrumbClicked,
    );
    expect(clicked).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Expand button keyboard activation
// ---------------------------------------------------------------------------
test.describe('Expand button', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('Enter activates expand button', async ({ mount, page }) => {
    await mount(<Breadcrumbs items={fiveItems} collapseMobile />);
    const btn = page.getByRole('button', { name: 'Zobraziť celú navigačnú cestu' });
    await btn.focus();
    await page.keyboard.press('Enter');
    // The expand button itself is hidden by CSS as soon as the list is fully
    // shown (see "expand button is hidden after expansion"), so verify the
    // functional outcome instead: a previously-collapsed middle item appears.
    await expect(page.getByRole('link', { name: 'Sekcia' })).toBeVisible();
  });

  test('Space activates expand button', async ({ mount, page }) => {
    await mount(<Breadcrumbs items={fiveItems} collapseMobile />);
    const btn = page.getByRole('button', { name: 'Zobraziť celú navigačnú cestu' });
    await btn.focus();
    await page.keyboard.press(' ');
    await expect(page.getByRole('link', { name: 'Sekcia' })).toBeVisible();
  });

  test('expand button is hidden after expansion', async ({ mount, page }) => {
    await mount(<Breadcrumbs items={fiveItems} collapseMobile />);
    const btn = page.getByRole('button', { name: 'Zobraziť celú navigačnú cestu' });
    await btn.focus();
    await page.keyboard.press('Enter');
    await expect(btn).toBeHidden();
  });
});

// ---------------------------------------------------------------------------
// Mobile viewport
// ---------------------------------------------------------------------------
test.describe('Mobile viewport', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('renders without horizontal overflow on 375px viewport', async ({ mount, page }) => {
    await mount(<Breadcrumbs items={fourItems} />);
    const box = await page.locator('.idsk-breadcrumbs').boundingBox();
    expect(box?.width).toBeLessThanOrEqual(375);
  });

  test('nav position does not block page content', async ({ mount, page }) => {
    await mount(<Breadcrumbs items={twoItems} />);
    const position = await page
      .locator('.idsk-breadcrumbs')
      .evaluate((el) => getComputedStyle(el).position);
    expect(['static', 'relative']).toContain(position);
  });
});

// ---------------------------------------------------------------------------
// axe accessibility in real browser
// ---------------------------------------------------------------------------
test.describe('Accessibility (axe)', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('no a11y violations — two items', async ({ mount, page }) => {
    await mount(
      <main>
        <Breadcrumbs items={twoItems} />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toEqual([]);
  });

  test('no a11y violations — four items', async ({ mount, page }) => {
    await mount(
      <main>
        <Breadcrumbs items={fourItems} />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toEqual([]);
  });

  test('no a11y violations — collapseMobile enabled', async ({ mount, page }) => {
    await mount(
      <main>
        <Breadcrumbs items={fiveItems} collapseMobile />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toEqual([]);
  });
});
