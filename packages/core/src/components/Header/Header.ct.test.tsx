/**
 * Playwright component tests for Header.
 * Run: cd packages/core && pnpm exec playwright test src/components/Header/Header.ct.test.tsx -c playwright-ct.config.ts
 *
 * These tests cover behaviour that requires a real browser engine:
 *   - CSS class application per variant
 *   - Sticky positioning
 *   - Mobile viewport rendering
 *   - axe-core a11y scan in a real browser context
 */
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { Header } from './Header';

const envRules = ['document-title', 'page-has-heading-one', 'region'];

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------
test.describe('Rendering', () => {
  test('renders a <header> element', async ({ mount }) => {
    const component = await mount(<Header />);
    // An empty <header> has a zero-size box, so `toBeVisible` (which requires
    // non-zero dimensions) doesn't apply here — assert it's attached with the
    // right tag instead.
    await expect(component).toBeAttached();
    await expect(component).toHaveJSProperty('tagName', 'HEADER');
  });

  test('renders children', async ({ mount }) => {
    const component = await mount(<Header>Obsah hlavičky</Header>);
    await expect(component.getByText('Obsah hlavičky')).toBeVisible();
  });

  test('default variant has idsk-header--default class', async ({ mount }) => {
    const component = await mount(<Header variant="default" />);
    await expect(component).toHaveClass(/idsk-header--default/);
  });

  test('transparent variant has idsk-header--transparent class', async ({ mount }) => {
    const component = await mount(<Header variant="transparent" />);
    await expect(component).toHaveClass(/idsk-header--transparent/);
  });

  test('sticky prop has idsk-header--sticky class', async ({ mount }) => {
    const component = await mount(<Header sticky />);
    await expect(component).toHaveClass(/idsk-header--sticky/);
  });
});

// ---------------------------------------------------------------------------
// Mobile viewport
// ---------------------------------------------------------------------------
test.describe('Mobile viewport', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('renders without horizontal overflow on 375px viewport', async ({ mount, page }) => {
    await mount(<Header>Hlavička</Header>);
    const box = await page.locator('.idsk-header').boundingBox();
    expect(box?.width).toBeLessThanOrEqual(375);
  });
});

// ---------------------------------------------------------------------------
// axe accessibility in real browser
// ---------------------------------------------------------------------------
test.describe('Accessibility (axe)', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('no a11y violations — default', async ({ mount, page }) => {
    await mount(
      <div>
        <Header aria-label="Hlavná hlavička" />
        <main />
      </div>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toEqual([]);
  });

  test('no a11y violations — transparent variant', async ({ mount, page }) => {
    await mount(
      <div>
        <Header variant="transparent" aria-label="Hlavná hlavička" />
        <main />
      </div>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toEqual([]);
  });
});
