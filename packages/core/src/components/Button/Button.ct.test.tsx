/**
 * Playwright component tests for Button.
 * Run: cd packages/core && npx playwright test src/components/Button/Button.ct.test.tsx -c playwright-ct.config.ts
 *
 * These tests verify browser-specific behaviour that cannot be reliably tested in jsdom:
 *   - keyboard Tab focus, Enter / Space activation
 *   - CSS focus ring visibility (high-contrast)
 *   - disabled state not reachable via keyboard
 *   - touch target minimum size (WCAG 2.5.5 / Apple HIG 44×44 dp)
 *   - double-click prevention in a real browser
 *   - no hover CSS on touch / mobile devices
 *   - axe-core automated a11y scan in a real browser
 */
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { Button } from './Button';

const envRules = ['document-title', 'page-has-heading-one', 'region'];

// ---------------------------------------------------------------------------
// Keyboard navigation (AC: Tab focus, Enter a Space aktivácia)
// ---------------------------------------------------------------------------
test.describe('Keyboard navigation', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('Tab focuses the button', async ({ mount, page }) => {
    await mount(
      <div style={{ paddingTop: '80px' }}>
        <Button>Odoslať</Button>
      </div>,
    );
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button')).toBeFocused();
  });

  test('Enter key activates the button', async ({ mount, page }) => {
    let clickCount = 0;
    await mount(
      <div style={{ paddingTop: '80px' }}>
        <Button
          onClick={() => {
            clickCount++;
          }}
        >
          Odoslať
        </Button>
      </div>,
    );
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button')).toBeFocused();
    await page.keyboard.press('Enter');
    expect(clickCount).toBe(1);
  });

  test('Space key activates the button', async ({ mount, page }) => {
    let clickCount = 0;
    await mount(
      <Button
        onClick={() => {
          clickCount++;
        }}
      >
        Odoslať
      </Button>,
    );
    // Use locator.press() to dispatch Space directly on the element — more reliable
    // than page.keyboard.press() which can race with CT's IPC bridge on Chromium.
    await page.getByRole('button').focus();
    await page.getByRole('button').press(' ');
    expect(clickCount).toBe(1);
  });

  test('disabled button is skipped by Tab', async ({ mount, page }) => {
    await mount(
      <div style={{ paddingTop: '80px', display: 'flex', gap: '8px' }}>
        <Button id="btn-active">Aktívne</Button>
        <Button id="btn-disabled" disabled>
          Neaktívne
        </Button>
      </div>,
    );
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');
    await expect(page.locator('#btn-active')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('#btn-disabled')).not.toBeFocused();
  });
});

// ---------------------------------------------------------------------------
// Focus ring (AC: vysoko kontrastný a jasne viditeľný focus state)
// ---------------------------------------------------------------------------
test.describe('Focus ring', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('focused button renders a visible CSS focus indicator (outline or box-shadow)', async ({
    mount,
    page,
  }) => {
    await mount(
      <div style={{ paddingTop: '80px' }}>
        <Button>Odoslať</Button>
      </div>,
    );
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');
    const btn = page.getByRole('button');
    await expect(btn).toBeFocused();

    const hasFocusStyle = await btn.evaluate((el) => {
      const s = window.getComputedStyle(el);
      const after = window.getComputedStyle(el, '::after');

      const hasOutline =
        s.outlineWidth !== '0px' && s.outlineStyle !== 'none' && s.outlineStyle !== '';
      const hasBoxShadow = s.boxShadow !== 'none' && s.boxShadow !== '';
      const hasPseudoBorder =
        after.content !== 'none' &&
        after.content !== '' &&
        after.borderWidth !== '0px' &&
        after.borderStyle !== 'none' &&
        after.borderStyle !== '';

      return hasOutline || hasBoxShadow || hasPseudoBorder;
    });
    expect(hasFocusStyle).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Touch target size (AC: minimálna veľkosť interaktívnej plochy na mobile)
// WCAG 2.5.5 (Level AAA) / Apple HIG minimum: 44×44 dp
// ---------------------------------------------------------------------------
test.describe('Touch target size', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('lg button is at least 44×44 dp', async ({ mount, page }) => {
    await mount(<Button size="lg">Odoslať</Button>);
    const box = await page.getByRole('button').boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeGreaterThanOrEqual(44);
    expect(box!.height).toBeGreaterThanOrEqual(44);
  });
});

// ---------------------------------------------------------------------------
// Double-click prevention (AC: prevencia proti dvojkliku)
// ---------------------------------------------------------------------------
test.describe('Double-click prevention', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('rapid double-click fires onClick only once', async ({ mount, page }) => {
    let clickCount = 0;
    await mount(
      <Button
        onClick={() => {
          clickCount++;
        }}
      >
        Odoslať
      </Button>,
    );
    await page.getByRole('button').dblclick();
    expect(clickCount).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// Mobile touch — no hover on touch devices
// (AC: zrušený hover stav na mobile)
// Requires CSS hover styles to be guarded with @media (hover: hover).
// ---------------------------------------------------------------------------
test.describe('Mobile touch — hover state absent', () => {
  test.use({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
  });

  test('simulated touch hover does not change button background', async ({ mount, page }) => {
    await mount(<Button>Odoslať</Button>);
    const btn = page.getByRole('button');

    const bgBefore = await btn.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    await btn.hover();
    const bgAfter = await btn.evaluate((el) => window.getComputedStyle(el).backgroundColor);

    // Background must not change: hover CSS must be guarded with @media (hover: hover)
    expect(bgAfter).toBe(bgBefore);
  });
});

// ---------------------------------------------------------------------------
// Automated a11y — axe / WCAG in a real browser
// (AC: všetky relevantné a11y testy prechádzajú)
//
// Inline SVG is used directly (no MockIcon component) because Playwright CT
// cannot serialize locally-defined function components passed as children.
// ---------------------------------------------------------------------------
test.describe('Automated a11y — axe in browser', () => {
  test.use({ viewport: { width: 600, height: 400 } });

  test('default button has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Button>Odoslať</Button>
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('disabled button has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Button disabled>Odoslať</Button>
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('button with decorative icon has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Button>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="6" />
          </svg>
          Odoslať
        </Button>
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });
});
