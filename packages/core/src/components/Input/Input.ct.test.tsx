/**
 * Playwright component tests for Input.
 * Run: npm run test-ct --workspace=packages/core
 *
 * These tests cover behaviour that requires a real browser engine and cannot
 * be reliably verified in jsdom unit tests:
 *   - hover ring CSS indicator (idsk-hover-outline)
 *   - keyboard focus ring CSS indicator (idsk-focus-outline, IDSK focus ring standard)
 *   - disabled cursor style and Tab-skip in a real browser
 *   - error border colour from IDSK semantic design variables
 *   - mobile full-width scaling at 375 px viewport
 *   - axe-core a11y scan across all relevant component states
 */
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';
import { Input } from './Input';

// ---------------------------------------------------------------------------
// Disabled rules (test-environment false-positives, not component violations):
//   document-title       — CT harness renders without a <title> element
//   page-has-heading-one — best practice; no <h1> in test harness
//   region               — component renders outside <main> by design;
//                          in production it lives inside a landmark
// ---------------------------------------------------------------------------
const envRules = ['document-title', 'page-has-heading-one', 'region'];

// ---------------------------------------------------------------------------
// Hover ring  (AC: vizuálne odlíšenie hover stavu — idsk-hover-outline)
// ---------------------------------------------------------------------------
test.describe('Hover ring', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('input receives a CSS ring on hover', async ({ mount, page }) => {
    await mount(<Input label="Meno" />);
    const input = page.getByRole('textbox');

    const shadowBefore = await input.evaluate((el) => window.getComputedStyle(el).boxShadow);
    await input.hover();
    const shadowAfter = await input.evaluate((el) => window.getComputedStyle(el).boxShadow);

    expect(shadowAfter).not.toBe(shadowBefore);
    expect(shadowAfter).not.toBe('none');
  });
});

// ---------------------------------------------------------------------------
// Focus ring  (AC: vysoko kontrastný a jasne viditeľný focus ring podľa IDSK
//              focus ring štandardu — idsk-focus-outline)
// ---------------------------------------------------------------------------
test.describe('Focus ring', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('Tab-focused input renders a visible CSS focus indicator', async ({ mount, page }) => {
    // Pad the top so clicking at {5,5} lands in empty space, not on the label.
    // Same pattern as Tooltip.ct.test.tsx keyboard focus tests.
    await mount(
      <div style={{ paddingTop: '80px' }}>
        <Input label="Meno" />
      </div>,
    );
    // Click body first to activate keyboard focus mode in all browsers (required for WebKit).
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');
    const input = page.getByRole('textbox');
    await expect(input).toBeFocused();

    const hasFocusStyle = await input.evaluate((el) => {
      const s = window.getComputedStyle(el);
      const hasBoxShadow = s.boxShadow !== 'none' && s.boxShadow !== '';
      const hasOutline =
        s.outlineWidth !== '0px' && s.outlineStyle !== 'none' && s.outlineStyle !== '';

      // Focus ring is on the parent wrapper's ::after pseudo-element
      const wrapper = el.closest('.idsk-input__input-wrapper');
      const after = wrapper ? window.getComputedStyle(wrapper, '::after') : null;
      const hasPseudoBorder =
        after !== null &&
        after.content !== 'none' &&
        after.content !== '' &&
        after.borderWidth !== '0px' &&
        after.borderStyle !== 'none' &&
        after.borderStyle !== '';

      return hasBoxShadow || hasOutline || hasPseudoBorder;
    });
    expect(hasFocusStyle).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Disabled state in browser  (AC: neaktívne pole nesmie byť focusovateľné,
//                              kurzor indikuje neaktívny stav)
// ---------------------------------------------------------------------------
test.describe('Disabled state', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('disabled input is skipped by Tab', async ({ mount, page }) => {
    // Pad the top so clicking at {5,5} lands in empty space, not on the first label.
    await mount(
      <div style={{ paddingTop: '80px' }}>
        <Input label="Aktívne" id="inp-active" />
        <Input label="Neaktívne" id="inp-disabled" disabled />
      </div>,
    );
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');
    await expect(page.locator('#inp-active')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('#inp-disabled')).not.toBeFocused();
  });

  test('disabled input renders with not-allowed cursor', async ({ mount, page }) => {
    await mount(<Input label="Neaktívne" disabled />);
    const cursor = await page
      .getByRole('textbox')
      .evaluate((el) => window.getComputedStyle(el).cursor);
    expect(cursor).toBe('not-allowed');
  });
});

// ---------------------------------------------------------------------------
// Error state visual  (AC: vizuálna indikácia pri chybe — farba hrany zo
//                      IDSK semantic-error-alert premennej)
// ---------------------------------------------------------------------------
test.describe('Error state visual', () => {
  test.use({ viewport: { width: 600, height: 400 } });

  test('error input border colour differs from default input border colour', async ({
    mount,
    page,
  }) => {
    await mount(
      <div>
        <Input id="inp-default" label="Predvolený" />
        <Input id="inp-error" label="Chybový" variant="error" />
      </div>,
    );
    const defaultBorder = await page
      .locator('#inp-default')
      .evaluate((el) => window.getComputedStyle(el).borderTopColor);
    const errorBorder = await page
      .locator('#inp-error')
      .evaluate((el) => window.getComputedStyle(el).borderTopColor);

    expect(errorBorder).not.toBe(defaultBorder);
  });
});

// ---------------------------------------------------------------------------
// Mobile full-width  (AC: na mobilných zariadeniach sa pole škáluje na celú
//                     šírku obrazovky)
// ---------------------------------------------------------------------------
test.describe('Mobile full-width', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('input container fills the full mobile viewport width', async ({ mount, page }) => {
    // Reset body margin so the comparison is against the raw viewport width.
    await page.evaluate(() => {
      document.body.style.margin = '0';
      document.body.style.padding = '0';
    });
    await mount(<Input label="Ulica" />);

    const containerBox = await page.locator('.idsk-input-container').boundingBox();
    const viewportWidth = page.viewportSize()!.width;

    expect(containerBox).not.toBeNull();
    expect(containerBox!.width).toBeCloseTo(viewportWidth, 0);
  });

  test('input element spans the full container width on mobile', async ({ mount, page }) => {
    await page.evaluate(() => {
      document.body.style.margin = '0';
      document.body.style.padding = '0';
    });
    await mount(<Input label="Ulica" />);

    const containerBox = await page.locator('.idsk-input-container').boundingBox();
    const inputBox = await page.getByRole('textbox').boundingBox();

    expect(containerBox).not.toBeNull();
    expect(inputBox).not.toBeNull();
    expect(Math.round(inputBox!.width)).toBe(Math.round(containerBox!.width));
  });
});

// ---------------------------------------------------------------------------
// Automated a11y — axe / WCAG 2.1 in real browser
// Covers: label association, aria-describedby, aria-invalid, required,
//         disabled, colour contrast of all component states.
// ---------------------------------------------------------------------------
test.describe('Automated a11y — axe in browser', () => {
  test.use({ viewport: { width: 600, height: 500 } });

  test('default state has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Input label="Meno" id="axe-default" />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('required state has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Input label="Meno" id="axe-required" required />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('with description (popis) has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Input label="Meno" id="axe-hint" description="Napr. Jana Novotná" />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('error state has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Input label="Meno" id="axe-error" variant="error" errorDescription="Pole je povinné" />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('error state with hint has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Input
          label="Meno"
          id="axe-error-hint"
          variant="error"
          description="Napr. Jana"
          errorDescription="Pole je povinné"
        />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('disabled state has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Input label="Meno" id="axe-disabled" disabled />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('with subheading (podnadpis) has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Input label="Meno" id="axe-subtitle" subheading="Zadajte vaše krstné meno" />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });
});
