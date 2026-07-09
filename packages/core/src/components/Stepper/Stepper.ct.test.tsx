/**
 * Playwright component tests for Stepper.
 * Run: cd packages/core && npx playwright test src/components/Stepper/Stepper.ct.test.tsx -c playwright-ct.config.ts
 *
 * Tests verify browser-specific behaviour:
 *   - keyboard Tab focus and activation of the toggle and step buttons
 *   - CSS focus ring visibility
 *   - touch target minimum size (WCAG 2.5.5 / Apple HIG 44×44 dp)
 *   - axe-core automated a11y scan in a real browser
 */
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { Stepper } from './Stepper';

const envRules = ['document-title', 'page-has-heading-one', 'region'];

const defaultSteps = [{ label: 'Osobné údaje' }, { label: 'Adresa' }, { label: 'Potvrdenie' }];

// ---------------------------------------------------------------------------
// Keyboard navigation
// ---------------------------------------------------------------------------
test.describe('Keyboard navigation', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('Tab focuses the toggle button first', async ({ mount, page }) => {
    await mount(
      <div style={{ padding: '80px' }}>
        <Stepper steps={defaultSteps} activeStep={2} onStepClick={() => {}} />
      </div>,
    );
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');
    const toggle = page.getByRole('button').first();
    await expect(toggle).toBeFocused();
  });

  test('Enter on toggle opens the dropdown', async ({ mount, page }) => {
    await mount(
      <div style={{ padding: '80px' }}>
        <Stepper steps={defaultSteps} activeStep={2} onStepClick={() => {}} />
      </div>,
    );
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await expect(page.locator('.idsk-stepper__dropdown')).toBeVisible();
  });

  test('Enter key on step button activates it', async ({ mount, page }) => {
    let clickedIndex = -1;
    await mount(
      <div style={{ padding: '80px' }}>
        <Stepper
          steps={defaultSteps}
          activeStep={2}
          defaultExpanded
          onStepClick={(i) => {
            clickedIndex = i;
          }}
        />
      </div>,
    );
    // The dropdown (with clickable step buttons) is rendered before the toggle
    // button in DOM order for screen-reader navigation, so the first completed
    // step (index 0) is the first `button` on the page, not the second.
    const stepBtn = page.getByRole('button').nth(0);
    await stepBtn.focus();
    await page.keyboard.press('Enter');
    expect(clickedIndex).toBe(0);
  });

  test('Space key on step button activates it', async ({ mount, page }) => {
    let clickedIndex = -1;
    await mount(
      <div style={{ padding: '80px' }}>
        <Stepper
          steps={defaultSteps}
          activeStep={2}
          defaultExpanded
          onStepClick={(i) => {
            clickedIndex = i;
          }}
        />
      </div>,
    );
    // The dropdown (with clickable step buttons) is rendered before the toggle
    // button in DOM order for screen-reader navigation, so the first completed
    // step (index 0) is the first `button` on the page, not the second.
    const stepBtn = page.getByRole('button').nth(0);
    await stepBtn.focus();
    await stepBtn.press(' ');
    expect(clickedIndex).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// Focus ring
// ---------------------------------------------------------------------------
test.describe('Focus ring', () => {
  test.use({ viewport: { width: 800, height: 400 } });

  test('focused toggle button renders a visible CSS focus indicator', async ({ mount, page }) => {
    await mount(
      <div style={{ padding: '80px' }}>
        <Stepper steps={defaultSteps} activeStep={2} onStepClick={() => {}} />
      </div>,
    );
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');

    const btn = page.getByRole('button').first();
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
        after.borderStyle !== 'none';
      return hasOutline || hasBoxShadow || hasPseudoBorder;
    });
    expect(hasFocusStyle).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Touch target size (WCAG 2.5.5 / Apple HIG 44×44 dp)
// ---------------------------------------------------------------------------
test.describe('Touch target size', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('toggle header meets minimum touch target height (48px)', async ({ mount, page }) => {
    await mount(
      <div style={{ padding: '20px' }}>
        <Stepper steps={defaultSteps} activeStep={2} />
      </div>,
    );
    const btn = page.getByRole('button').first();
    const box = await btn.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.height).toBeGreaterThanOrEqual(44);
  });
});

// ---------------------------------------------------------------------------
// Automated a11y — axe / WCAG in a real browser
// ---------------------------------------------------------------------------
test.describe('Automated a11y — axe in browser', () => {
  test.use({ viewport: { width: 800, height: 500 } });

  test('collapsed stepper has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Stepper steps={defaultSteps} activeStep={0} />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('expanded stepper has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Stepper steps={defaultSteps} activeStep={1} defaultExpanded />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('expanded stepper with clickable steps has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Stepper steps={defaultSteps} activeStep={2} onStepClick={() => {}} defaultExpanded />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('expanded stepper with summary step has no a11y violations', async ({ mount, page }) => {
    const steps = [
      { label: 'Krok 1' },
      { label: 'Krok 2' },
      { label: 'Zhrnutie', isSummary: true as const },
    ];
    await mount(
      <main>
        <Stepper steps={steps} activeStep={1} defaultExpanded />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });
});
