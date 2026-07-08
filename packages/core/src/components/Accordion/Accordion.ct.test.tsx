/**
 * Playwright component tests for Accordion.
 * Run: cd packages/core && pnpm exec playwright test src/components/Accordion/Accordion.ct.test.tsx -c playwright-ct.config.ts
 *
 * These tests cover behaviour that requires a real browser engine:
 *   - CSS focus-ring visual indicator (computed styles)
 *   - Tab / Shift+Tab keyboard navigation between buttons
 *   - Enter / Space keyboard activation
 *   - Mobile viewport responsiveness and overflow
 *   - axe-core a11y scan in a real browser context
 */
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';
import { Accordion } from './Accordion';

const defaultItems = [
  { id: 'item-1', title: 'Sekcia 1', children: <p>Obsah sekcie 1</p> },
  { id: 'item-2', title: 'Sekcia 2', children: <p>Obsah sekcie 2</p> },
  { id: 'item-3', title: 'Sekcia 3', children: <p>Obsah sekcie 3</p> },
];

// Rules that are false-positives in the CT harness environment
const envRules = ['document-title', 'page-has-heading-one', 'region'];

// ---------------------------------------------------------------------------
// Keyboard toggle — Enter and Space  (AC: Enter alebo Medzerník zbalí/rozbalí)
// ---------------------------------------------------------------------------
test.describe('Keyboard toggle', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('Enter key expands a collapsed section', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    await page.getByRole('button').first().focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('button').first()).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#item-1')).toBeVisible();
  });

  test('Space key expands a collapsed section', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    await page.getByRole('button').first().focus();
    await page.keyboard.press(' ');
    await expect(page.getByRole('button').first()).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#item-1')).toBeVisible();
  });

  test('Enter key collapses an expanded section', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    const button = page.getByRole('button').first();
    await button.focus();
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#item-1')).toBeHidden();
  });

  test('Space key collapses an expanded section', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    const button = page.getByRole('button').first();
    await button.focus();
    await page.keyboard.press(' ');
    await page.keyboard.press(' ');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#item-1')).toBeHidden();
  });
});

// ---------------------------------------------------------------------------
// Tab / Shift+Tab navigation  (AC: Tab prepína focus medzi hlavičkami)
// ---------------------------------------------------------------------------
test.describe('Keyboard navigation — Tab / Shift+Tab', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('Tab moves focus from first to second button', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    await page.getByRole('button').first().focus();
    await expect(page.getByRole('button').first()).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button').nth(1)).toBeFocused();
  });

  test('Tab moves focus from second to third button', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    await page.getByRole('button').nth(1).focus();
    await expect(page.getByRole('button').nth(1)).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button').nth(2)).toBeFocused();
  });

  test('Shift+Tab moves focus backward from second to first button', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    await page.getByRole('button').nth(1).focus();
    await expect(page.getByRole('button').nth(1)).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await expect(page.getByRole('button').first()).toBeFocused();
  });
});

// ---------------------------------------------------------------------------
// Focus visual indicator  (AC: vysoko kontrastný focus ring pri navigácii klávesnicou)
// ---------------------------------------------------------------------------
test.describe('Keyboard focus visual indicator', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('focused button has a visible CSS focus indicator (outline or box-shadow)', async ({
    mount,
    page,
  }) => {
    await mount(
      <div style={{ padding: '40px' }}>
        <Accordion items={defaultItems} />
      </div>,
    );
    const button = page.getByRole('button').first();
    await button.focus();
    await expect(button).toBeFocused();

    const hasFocusStyle = await button.evaluate((el) => {
      const s = window.getComputedStyle(el);
      // Focus ring is on the parent item's ::after pseudo-element
      const item = el.closest('.idsk-accordion__item');
      const after = item ? window.getComputedStyle(item, '::after') : null;
      const hasOutline =
        s.outlineWidth !== '0px' && s.outlineStyle !== 'none' && s.outlineStyle !== '';
      const hasBoxShadow = s.boxShadow !== 'none' && s.boxShadow !== '';
      const hasPseudoBorder =
        after !== null &&
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
// Multiple sections in browser  (AC: nezávislý stav sekcií)
// ---------------------------------------------------------------------------
test.describe('Multiple sections — independent state', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('opening one section does not close another', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    await page.getByRole('button').first().click();
    await page.getByRole('button').nth(1).click();
    await expect(page.locator('#item-1')).toBeVisible();
    await expect(page.locator('#item-2')).toBeVisible();
  });

  test('all three sections can be open at the same time', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    const buttons = page.getByRole('button');
    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      await buttons.nth(i).click();
    }
    await expect(page.locator('#item-1')).toBeVisible();
    await expect(page.locator('#item-2')).toBeVisible();
    await expect(page.locator('#item-3')).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Mobile responsiveness  (AC: správne zalamuje na mobilných zariadeniach)
// ---------------------------------------------------------------------------
test.describe('Mobile responsiveness', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('accordion renders without horizontal content overflow on mobile', async ({
    mount,
    page,
  }) => {
    await mount(<Accordion items={defaultItems} />);
    await expect(page.locator('.idsk-accordion')).toBeVisible();

    const overflows = await page.evaluate(() => {
      const el = document.querySelector('.idsk-accordion');
      return el ? el.scrollWidth > el.clientWidth : false;
    });
    expect(overflows).toBe(false);
  });

  test('buttons are tappable on mobile viewport (click works)', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    await page.getByRole('button').first().click();
    await expect(page.getByRole('button').first()).toHaveAttribute('aria-expanded', 'true');
  });

  test('expanded content is visible on mobile', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    await page.getByRole('button').first().click();
    await expect(page.locator('#item-1')).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Automated a11y — axe / WCAG  (AC: axe scan bez chýb)
//
// Disabled rules (test-environment false-positives, not component violations):
//   document-title       — CT harness renders without a <title> element
//   page-has-heading-one — best practice; no <h1> in test harness
//   region               — component rendered outside a <main> in some cases
// ---------------------------------------------------------------------------
test.describe('Automated a11y — axe in browser', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('has no a11y violations — all collapsed', async ({ mount, page }) => {
    await mount(
      <main>
        <Accordion items={defaultItems} />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('has no a11y violations — one section expanded', async ({ mount, page }) => {
    await mount(
      <main>
        <Accordion items={defaultItems} />
      </main>,
    );
    await page.getByRole('button').first().click();
    await expect(page.locator('#item-1')).toBeVisible();
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('has no a11y violations — all sections expanded', async ({ mount, page }) => {
    await mount(
      <main>
        <Accordion items={defaultItems} />
      </main>,
    );
    const buttons = page.getByRole('button');
    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      await buttons.nth(i).click();
    }
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Icon rotation  (AC: indikátor mení orientáciu pri rozbalení)
// ---------------------------------------------------------------------------
test.describe('Icon rotation', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('chevron has 180deg rotation when section is expanded', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    await page.getByRole('button').first().click();
    await expect(page.getByRole('button').first()).toHaveAttribute('aria-expanded', 'true');
    // Wait for the 200ms CSS transition to settle before reading computed style
    await page.waitForTimeout(250);
    const rotateValue = await page
      .locator('.idsk-accordion__chevron')
      .first()
      .evaluate((el) => window.getComputedStyle(el).rotate);
    expect(rotateValue).toMatch(/180/);
  });

  test('chevron has no rotation when section is collapsed', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} />);
    await page.getByRole('button').first().click();
    await page.getByRole('button').first().click();
    await expect(page.getByRole('button').first()).toHaveAttribute('aria-expanded', 'false');
    await page.waitForTimeout(250);
    const rotateValue = await page
      .locator('.idsk-accordion__chevron')
      .first()
      .evaluate((el) => window.getComputedStyle(el).rotate);
    expect(rotateValue).not.toMatch(/^180/);
  });
});

// ---------------------------------------------------------------------------
// Hover visual state  (AC: vizuálna zmena pri hover)
// ---------------------------------------------------------------------------
test.describe('Hover visual state', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('button shows hover ring when hovered', async ({ mount, page }) => {
    await mount(
      <div style={{ padding: '40px' }}>
        <Accordion items={defaultItems} />
      </div>,
    );
    const button = page.getByRole('button').first();

    const initialShadow = await button.evaluate((el) => window.getComputedStyle(el).boxShadow);

    await button.hover();

    const hoveredShadow = await button.evaluate((el) => window.getComputedStyle(el).boxShadow);

    expect(hoveredShadow).not.toBe(initialShadow);
  });
});

// ---------------------------------------------------------------------------
// Active visual state  (AC: active stav)
// ---------------------------------------------------------------------------
test.describe('Active visual state', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('button background changes on mousedown', async ({ mount, page }) => {
    await mount(
      <div style={{ padding: '40px' }}>
        <Accordion items={defaultItems} />
      </div>,
    );
    const button = page.getByRole('button').first();
    const box = await button.boundingBox();
    if (!box) throw new Error('Button bounding box not found');

    const initialBg = await button.evaluate((el) => window.getComputedStyle(el).backgroundColor);

    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();

    const activeBg = await button.evaluate((el) => window.getComputedStyle(el).backgroundColor);

    await page.mouse.up();

    expect(activeBg).not.toBe(initialBg);
  });
});

// ---------------------------------------------------------------------------
// defaultOpen in browser  (AC: predvolene rozbalený stav)
// ---------------------------------------------------------------------------
test.describe('defaultOpen in browser', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('section with defaultOpen is visible without interaction', async ({ mount, page }) => {
    await mount(
      <Accordion
        items={[
          { id: 'item-1', title: 'Sekcia 1', children: <p>Obsah 1</p>, defaultOpen: true },
          { id: 'item-2', title: 'Sekcia 2', children: <p>Obsah 2</p> },
        ]}
      />,
    );
    await expect(page.locator('#item-1')).toBeVisible();
    await expect(page.locator('#item-2')).toBeHidden();
  });

  test('defaultOpen section has aria-expanded="true" on load', async ({ mount, page }) => {
    await mount(
      <Accordion
        items={[{ id: 'item-1', title: 'Sekcia 1', children: <p>Obsah</p>, defaultOpen: true }]}
      />,
    );
    await expect(page.getByRole('button').first()).toHaveAttribute('aria-expanded', 'true');
  });

  test('has no a11y violations with defaultOpen', async ({ mount, page }) => {
    await mount(
      <main>
        <Accordion
          items={[
            { id: 'item-1', title: 'Sekcia 1', children: <p>Obsah 1</p>, defaultOpen: true },
            { id: 'item-2', title: 'Sekcia 2', children: <p>Obsah 2</p> },
          ]}
        />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// singleOpen in browser  (AC: Single Open mód)
// ---------------------------------------------------------------------------
test.describe('singleOpen in browser', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  const singleOpenItems = [
    { id: 'item-1', title: 'Sekcia 1', children: <p>Obsah 1</p> },
    { id: 'item-2', title: 'Sekcia 2', children: <p>Obsah 2</p> },
    { id: 'item-3', title: 'Sekcia 3', children: <p>Obsah 3</p> },
  ];

  test('opening section 2 closes section 1 in singleOpen mode', async ({ mount, page }) => {
    await mount(<Accordion items={singleOpenItems} singleOpen />);
    await page.getByRole('button').first().click();
    await expect(page.locator('#item-1')).toBeVisible();
    await page.getByRole('button').nth(1).click();
    await expect(page.locator('#item-1')).toBeHidden();
    await expect(page.locator('#item-2')).toBeVisible();
  });

  test('only one section is visible at a time in singleOpen mode', async ({ mount, page }) => {
    await mount(<Accordion items={singleOpenItems} singleOpen />);
    const buttons = page.getByRole('button');
    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      await buttons.nth(i).click();
    }
    const visibleCount = await page.locator('.idsk-accordion__content:not([hidden])').count();
    expect(visibleCount).toBe(1);
  });

  test('has no a11y violations in singleOpen mode', async ({ mount, page }) => {
    await mount(
      <main>
        <Accordion items={singleOpenItems} singleOpen />
      </main>,
    );
    await page.getByRole('button').first().click();
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// showToggleAll in browser  (AC: tlačidlo Otvoriť/Zavrieť všetko)
// ---------------------------------------------------------------------------
test.describe('showToggleAll in browser', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('toggle-all button opens all sections', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} showToggleAll />);
    await page.getByRole('button', { name: 'Otvoriť všetko' }).click();
    await expect(page.locator('#item-1')).toBeVisible();
    await expect(page.locator('#item-2')).toBeVisible();
    await expect(page.locator('#item-3')).toBeVisible();
  });

  test('toggle-all label changes to "Zavrieť všetko" after opening all', async ({
    mount,
    page,
  }) => {
    await mount(<Accordion items={defaultItems} showToggleAll />);
    await page.getByRole('button', { name: 'Otvoriť všetko' }).click();
    await expect(page.getByRole('button', { name: 'Zavrieť všetko' })).toBeVisible();
  });

  test('toggle-all closes all sections when all are open', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} showToggleAll />);
    await page.getByRole('button', { name: 'Otvoriť všetko' }).click();
    await page.getByRole('button', { name: 'Zavrieť všetko' }).click();
    await expect(page.locator('#item-1')).toBeHidden();
    await expect(page.locator('#item-2')).toBeHidden();
    await expect(page.locator('#item-3')).toBeHidden();
  });

  test('individual section toggles update the toggle-all label', async ({ mount, page }) => {
    await mount(<Accordion items={defaultItems} showToggleAll />);
    const buttons = page.getByRole('button').filter({ hasNotText: /otvoriť|zavrieť/i });
    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      await buttons.nth(i).click();
    }
    await expect(page.getByRole('button', { name: 'Zavrieť všetko' })).toBeVisible();
  });

  test('has no a11y violations with showToggleAll', async ({ mount, page }) => {
    await mount(
      <main>
        <Accordion items={defaultItems} showToggleAll />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Disabled state  (AC: deaktivovaná sekcia nie je interaktívna)
// ---------------------------------------------------------------------------
const itemsWithDisabled = [
  { id: 'item-1', title: 'Sekcia 1', children: <p>Obsah sekcie 1</p> },
  { id: 'item-2', title: 'Sekcia 2', children: <p>Obsah sekcie 2</p>, disabled: true },
  { id: 'item-3', title: 'Sekcia 3', children: <p>Obsah sekcie 3</p> },
];

test.describe('Disabled state', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('disabled button has the disabled attribute', async ({ mount, page }) => {
    await mount(<Accordion items={itemsWithDisabled} />);
    await expect(page.locator('.idsk-accordion__button').nth(1)).toBeDisabled();
  });

  test('disabled section does not expand on click', async ({ mount, page }) => {
    await mount(<Accordion items={itemsWithDisabled} />);
    await page.locator('.idsk-accordion__button').nth(1).click({ force: true });
    await expect(page.locator('#item-2')).toBeHidden();
  });

  test('enabled sections work normally alongside disabled ones', async ({ mount, page }) => {
    await mount(<Accordion items={itemsWithDisabled} />);
    await page.getByRole('button', { name: 'Sekcia 1' }).click();
    await expect(page.locator('#item-1')).toBeVisible();
    await expect(page.locator('#item-2')).toBeHidden();
  });

  test('Tab skips disabled button — focus jumps from first to third', async ({ mount, page }) => {
    await mount(<Accordion items={itemsWithDisabled} />);
    await page.locator('.idsk-accordion__button').first().focus();
    await expect(page.locator('.idsk-accordion__button').first()).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('.idsk-accordion__button').nth(2)).toBeFocused();
  });

  test('has no a11y violations with disabled items', async ({ mount, page }) => {
    await mount(
      <main>
        <Accordion items={itemsWithDisabled} />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });
});
