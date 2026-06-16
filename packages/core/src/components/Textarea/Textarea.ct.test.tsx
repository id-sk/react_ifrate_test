/**
 * Playwright component tests for Textarea.
 * Run: npm run test-ct --workspace=packages/core
 */
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';
import { Textarea } from './Textarea';

const envRules = ['document-title', 'page-has-heading-one', 'region'];

// ---------------------------------------------------------------------------
// Hover ring (AC: vizuálne odlíšenie hover stavu)
// ---------------------------------------------------------------------------
test.describe('Hover ring', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('textarea receives a CSS ring on hover', async ({ mount, page }) => {
    await mount(<Textarea label="Správa" maxLength={200} />);
    const textarea = page.getByRole('textbox');

    const shadowBefore = await textarea.evaluate((el) => window.getComputedStyle(el).boxShadow);
    await textarea.hover();
    const shadowAfter = await textarea.evaluate((el) => window.getComputedStyle(el).boxShadow);

    expect(shadowAfter).not.toBe(shadowBefore);
    expect(shadowAfter).not.toBe('none');
  });
});

// ---------------------------------------------------------------------------
// Focus ring (AC: focus (vysoko kontrastný outline))
// ---------------------------------------------------------------------------
test.describe('Focus ring', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('Tab-focused textarea renders a visible CSS focus indicator', async ({ mount, page }) => {
    await mount(
      <div style={{ paddingTop: '80px' }}>
        <Textarea label="Správa" maxLength={200} />
      </div>,
    );
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');
    const textarea = page.getByRole('textbox');
    await expect(textarea).toBeFocused();

    const hasFocusStyle = await textarea.evaluate((el) => {
      const s = window.getComputedStyle(el);
      const hasBoxShadow = s.boxShadow !== 'none' && s.boxShadow !== '';
      const hasOutline =
        s.outlineWidth !== '0px' && s.outlineStyle !== 'none' && s.outlineStyle !== '';

      // Focus ring is on the parent wrapper's ::before pseudo-element
      const wrapper = el.closest('.idsk-textarea__wrapper');
      const before = wrapper ? window.getComputedStyle(wrapper, '::before') : null;
      const hasPseudoBorder =
        before !== null &&
        before.content !== 'none' &&
        before.content !== '' &&
        before.borderWidth !== '0px' &&
        before.borderStyle !== 'none' &&
        before.borderStyle !== '';

      return hasBoxShadow || hasOutline || hasPseudoBorder;
    });
    expect(hasFocusStyle).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Disabled state (AC: neaktívne pole nie je focusovateľné, kurzor)
// ---------------------------------------------------------------------------
test.describe('Disabled state', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('disabled textarea is skipped by Tab', async ({ mount, page }) => {
    await mount(
      <div style={{ paddingTop: '80px' }}>
        <Textarea label="Aktívna" id="txt-active" maxLength={200} />
        <Textarea label="Neaktívna" id="txt-disabled" disabled maxLength={200} />
      </div>,
    );
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');
    await expect(page.locator('#txt-active')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('#txt-disabled')).not.toBeFocused();
  });

  test('disabled textarea renders with not-allowed cursor', async ({ mount, page }) => {
    await mount(<Textarea label="Neaktívna" disabled maxLength={200} />);
    const cursor = await page
      .getByRole('textbox')
      .evaluate((el) => window.getComputedStyle(el).cursor);
    expect(cursor).toBe('not-allowed');
  });
});

// ---------------------------------------------------------------------------
// Error state visual (AC: chybový stav - červený border)
// ---------------------------------------------------------------------------
test.describe('Error state visual', () => {
  test.use({ viewport: { width: 600, height: 400 } });

  test('error textarea border colour differs from default textarea border colour', async ({
    mount,
    page,
  }) => {
    await mount(
      <div>
        <Textarea id="txt-default" label="Predvolená" maxLength={200} />
        <Textarea id="txt-error" label="Chybová" variant="error" maxLength={200} />
      </div>,
    );
    const defaultBorder = await page
      .locator('#txt-default')
      .evaluate((el) => window.getComputedStyle(el).borderTopColor);
    const errorBorder = await page
      .locator('#txt-error')
      .evaluate((el) => window.getComputedStyle(el).borderTopColor);

    expect(errorBorder).not.toBe(defaultBorder);
  });
});

// ---------------------------------------------------------------------------
// Mobile full-width (AC: automaticky škáluje na celú šírku obrazovky)
// ---------------------------------------------------------------------------
test.describe('Mobile full-width', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('textarea container fills the full mobile viewport width', async ({ mount, page }) => {
    await page.evaluate(() => {
      document.body.style.margin = '0';
      document.body.style.padding = '0';
    });
    await mount(<Textarea label="Správa" maxLength={200} />);

    const containerBox = await page.locator('.idsk-textarea-container').boundingBox();
    const viewportWidth = page.viewportSize()!.width;

    expect(containerBox).not.toBeNull();
    expect(containerBox!.width).toBeCloseTo(viewportWidth, 0);
  });

  test('textarea element spans the full container width on mobile', async ({ mount, page }) => {
    await page.evaluate(() => {
      document.body.style.margin = '0';
      document.body.style.padding = '0';
    });
    await mount(<Textarea label="Správa" maxLength={200} />);

    const containerBox = await page.locator('.idsk-textarea-container').boundingBox();
    const textareaBox = await page.getByRole('textbox').boundingBox();

    expect(containerBox).not.toBeNull();
    expect(textareaBox).not.toBeNull();
    expect(Math.round(textareaBox!.width)).toBe(Math.round(containerBox!.width));
  });
});

// ---------------------------------------------------------------------------
// Automated a11y — axe in browser
// ---------------------------------------------------------------------------
test.describe('Automated a11y — axe in browser', () => {
  test.use({ viewport: { width: 600, height: 500 } });

  test('default state has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Textarea label="Správa" id="axe-default" maxLength={200} />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('required state has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Textarea label="Správa" id="axe-required" required maxLength={200} />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('error state with character count has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Textarea
          label="Správa"
          id="axe-error-char-count"
          variant="error"
          errorDescription="Chyba"
          maxLength={200}
        />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('with subheading and description (hint) has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Textarea
          label="Správa"
          id="axe-hints"
          subheading="Doplňujúci popis labelu"
          description="Pomôcka pre vyplnenie poľa"
          maxLength={200}
        />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });
});
