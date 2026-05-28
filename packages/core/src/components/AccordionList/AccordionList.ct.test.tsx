/**
 * Playwright component tests for AccordionList.
 * Run: cd packages/core && pnpm exec playwright test src/components/AccordionList/AccordionList.ct.test.tsx -c playwright-ct.config.ts
 *
 * These tests cover behaviour that requires a real browser engine:
 *   - Toggle-all button expands / collapses all sections
 *   - Icon rotation on the toggle-all button
 *   - CSS focus-ring visual indicator
 *   - Tab / Shift+Tab keyboard navigation
 *   - Mobile viewport responsiveness
 *   - axe-core a11y scan in a real browser context
 */
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';
import { AccordionList } from './AccordionList';

const defaultItems = [
  { id: 'item-1', title: 'Sekcia 1', children: <p>Obsah sekcie 1</p> },
  { id: 'item-2', title: 'Sekcia 2', children: <p>Obsah sekcie 2</p> },
  { id: 'item-3', title: 'Sekcia 3', children: <p>Obsah sekcie 3</p> },
];

// Rules that are false-positives in the CT harness environment
const envRules = ['document-title', 'page-has-heading-one', 'region'];

// ---------------------------------------------------------------------------
// Toggle-all button  (AC: tlačidlo Otvoriť/Zavrieť všetky)
// ---------------------------------------------------------------------------
test.describe('Toggle-all button', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('opens all sections when clicked from collapsed state', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await page.getByRole('button', { name: 'Otvoriť všetky' }).click();
    await expect(page.locator('#item-1')).toBeVisible();
    await expect(page.locator('#item-2')).toBeVisible();
    await expect(page.locator('#item-3')).toBeVisible();
  });

  test('label changes to "Zavrieť všetky" after opening all', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await page.getByRole('button', { name: 'Otvoriť všetky' }).click();
    await expect(page.getByRole('button', { name: 'Zavrieť všetky' })).toBeVisible();
  });

  test('closes all sections when clicked from fully expanded state', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await page.getByRole('button', { name: 'Otvoriť všetky' }).click();
    await page.getByRole('button', { name: 'Zavrieť všetky' }).click();
    await expect(page.locator('#item-1')).toBeHidden();
    await expect(page.locator('#item-2')).toBeHidden();
    await expect(page.locator('#item-3')).toBeHidden();
  });

  test('sets data-all-expanded="true" when all are open', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await page.getByRole('button', { name: 'Otvoriť všetky' }).click();
    await expect(page.getByRole('button', { name: 'Zavrieť všetky' })).toHaveAttribute(
      'data-all-expanded',
      'true',
    );
  });

  test('individual section toggle updates the toggle-all label', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await page.getByRole('button', { name: 'Sekcia 1' }).click();
    await page.getByRole('button', { name: 'Sekcia 2' }).click();
    await page.getByRole('button', { name: 'Sekcia 3' }).click();
    await expect(page.getByRole('button', { name: 'Zavrieť všetky' })).toBeVisible();
  });

  test('does not render toggle button in singleOpen mode', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} singleOpen />);
    await expect(page.getByRole('button', { name: /otvoriť všetky/i })).not.toBeAttached();
  });
});

// ---------------------------------------------------------------------------
// Icon rotation on toggle-all  (AC: chevron rotuje pri rozbalení)
// ---------------------------------------------------------------------------
test.describe('Toggle-all icon rotation', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('chevron rotates 180deg when all are expanded', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await page.getByRole('button', { name: 'Otvoriť všetky' }).click();
    await page.waitForTimeout(250);
    const rotateValue = await page
      .locator('.idsk-accordion-list__toggle-icon')
      .evaluate((el) => window.getComputedStyle(el).rotate);
    expect(rotateValue).toMatch(/180/);
  });

  test('chevron returns to default rotation when collapsed', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await page.getByRole('button', { name: 'Otvoriť všetky' }).click();
    await page.getByRole('button', { name: 'Zavrieť všetky' }).click();
    await page.waitForTimeout(250);
    const rotateValue = await page
      .locator('.idsk-accordion-list__toggle-icon')
      .evaluate((el) => window.getComputedStyle(el).rotate);
    expect(rotateValue).not.toMatch(/^180/);
  });
});

// ---------------------------------------------------------------------------
// Keyboard navigation  (AC: Tab prepína focus medzi tlačidlami)
// ---------------------------------------------------------------------------
test.describe('Keyboard navigation — Tab / Shift+Tab', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('Tab moves focus from toggle-all to first accordion button', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await page.getByRole('button', { name: 'Otvoriť všetky' }).focus();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'Sekcia 1' })).toBeFocused();
  });

  test('Shift+Tab from first accordion button returns to toggle-all', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await page.getByRole('button', { name: 'Sekcia 1' }).focus();
    await page.keyboard.press('Shift+Tab');
    await expect(page.getByRole('button', { name: 'Otvoriť všetky' })).toBeFocused();
  });

  test('Enter on toggle-all expands all sections', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await page.getByRole('button', { name: 'Otvoriť všetky' }).focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#item-1')).toBeVisible();
  });

  test('Space on toggle-all expands all sections', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await page.getByRole('button', { name: 'Otvoriť všetky' }).focus();
    await page.keyboard.press(' ');
    await expect(page.locator('#item-1')).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Focus visual indicator  (AC: focus ring na toggle-all tlačidle)
// ---------------------------------------------------------------------------
test.describe('Focus visual indicator', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('toggle-all button has a visible CSS focus indicator when focused', async ({
    mount,
    page,
  }) => {
    await mount(
      <div style={{ padding: '40px' }}>
        <AccordionList title="Nadpis" items={defaultItems} />
      </div>,
    );
    const btn = page.getByRole('button', { name: 'Otvoriť všetky' });
    await btn.focus();
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
// Active visual state  (AC: active stav na toggle-all tlačidle)
// ---------------------------------------------------------------------------
test.describe('Active visual state', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('toggle-all button background changes on mousedown', async ({ mount, page }) => {
    await mount(
      <div style={{ padding: '40px' }}>
        <AccordionList title="Nadpis" items={defaultItems} />
      </div>,
    );
    const btn = page.getByRole('button', { name: 'Otvoriť všetky' });
    const box = await btn.boundingBox();
    if (!box) throw new Error('Button bounding box not found');

    const initialBg = await btn.evaluate((el) => window.getComputedStyle(el).backgroundColor);

    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();

    const activeBg = await btn.evaluate((el) => window.getComputedStyle(el).backgroundColor);

    await page.mouse.up();

    expect(activeBg).not.toBe(initialBg);
  });
});

// ---------------------------------------------------------------------------
// Mobile responsiveness  (AC: správne zalamuje na mobilných zariadeniach)
// ---------------------------------------------------------------------------
test.describe('Mobile responsiveness', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('renders without horizontal content overflow on mobile', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await expect(page.locator('.idsk-accordion-list')).toBeVisible();

    const overflows = await page.evaluate(() => {
      const el = document.querySelector('.idsk-accordion-list');
      return el ? el.scrollWidth > el.clientWidth : false;
    });
    expect(overflows).toBe(false);
  });

  test('toggle-all button is tappable on mobile', async ({ mount, page }) => {
    await mount(<AccordionList title="Nadpis" items={defaultItems} />);
    await page.getByRole('button', { name: 'Otvoriť všetky' }).click();
    await expect(page.locator('#item-1')).toBeVisible();
  });

  test('header wraps without overflow on narrow viewport', async ({ mount, page }) => {
    await mount(
      <AccordionList title="Dlhší nadpis sekcie pre testovanie zalamovanie" items={defaultItems} />,
    );
    const overflows = await page.evaluate(() => {
      const el = document.querySelector('.idsk-accordion-list__header');
      return el ? el.scrollWidth > el.clientWidth : false;
    });
    expect(overflows).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Automated a11y — axe / WCAG  (AC: axe scan bez chýb)
// ---------------------------------------------------------------------------
test.describe('Automated a11y — axe in browser', () => {
  test.use({ viewport: { width: 800, height: 600 } });

  test('has no a11y violations — all collapsed', async ({ mount, page }) => {
    await mount(
      <main>
        <AccordionList title="Nadpis" items={defaultItems} />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('has no a11y violations — all expanded', async ({ mount, page }) => {
    await mount(
      <main>
        <AccordionList title="Nadpis" items={defaultItems} />
      </main>,
    );
    await page.getByRole('button', { name: 'Otvoriť všetky' }).click();
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('has no a11y violations — singleOpen mode', async ({ mount, page }) => {
    await mount(
      <main>
        <AccordionList title="Nadpis" items={defaultItems} singleOpen />
      </main>,
    );
    await page.getByRole('button', { name: 'Sekcia 1' }).click();
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('has no a11y violations — with disabled item', async ({ mount, page }) => {
    const items = [
      defaultItems[0],
      { ...defaultItems[1], disabled: true },
      defaultItems[2],
    ];
    await mount(
      <main>
        <AccordionList title="Nadpis" items={items} />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });
});
