/**
 * Playwright component tests for Select.
 *
 * Covers behaviour that requires a real browser:
 *   - hover ring (idsk-hover-outline)
 *   - keyboard focus ring on wrapper ::after (IDSK focus ring standard)
 *   - disabled cursor style and Tab-skip
 *   - error border colour from IDSK semantic variables
 *   - mobile full-width scaling at 375 px viewport
 *   - axe-core a11y scan across all component states
 */
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';
import { Select } from './Select';

const options = [
  { value: 'sk', label: 'Slovensko' },
  { value: 'cz', label: 'Česká republika' },
  { value: 'at', label: 'Rakúsko' },
];

const envRules = ['document-title', 'page-has-heading-one', 'region'];

// ---------------------------------------------------------------------------
// Hover ring
// ---------------------------------------------------------------------------
test.describe('Hover ring', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('select receives a CSS ring on hover', async ({ mount, page }) => {
    await mount(<Select label="Krajina" options={options} />);
    const select = page.getByRole('combobox');

    const shadowBefore = await select.evaluate((el) => window.getComputedStyle(el).boxShadow);
    await select.hover();
    const shadowAfter = await select.evaluate((el) => window.getComputedStyle(el).boxShadow);

    expect(shadowAfter).not.toBe(shadowBefore);
    expect(shadowAfter).not.toBe('none');
  });
});

// ---------------------------------------------------------------------------
// Focus ring
// ---------------------------------------------------------------------------
test.describe('Focus ring', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('Tab-focused select renders a visible focus indicator on wrapper ::after', async ({
    mount,
    page,
  }) => {
    await mount(
      <div style={{ paddingTop: '80px' }}>
        <Select label="Krajina" options={options} />
      </div>,
    );
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');
    const select = page.getByRole('combobox');
    await expect(select).toBeFocused();

    const hasFocusStyle = await select.evaluate((el) => {
      const wrapper = el.closest('.idsk-select__wrapper');
      const after = wrapper ? window.getComputedStyle(wrapper, '::after') : null;
      return (
        after !== null &&
        after.content !== 'none' &&
        after.content !== '' &&
        after.borderWidth !== '0px' &&
        after.borderStyle !== 'none' &&
        after.borderStyle !== ''
      );
    });
    expect(hasFocusStyle).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Disabled state
// ---------------------------------------------------------------------------
test.describe('Disabled state', () => {
  test.use({ viewport: { width: 600, height: 300 } });

  test('disabled select is skipped by Tab', async ({ mount, page }) => {
    await mount(
      <div style={{ paddingTop: '80px' }}>
        <Select label="Aktívne" id="sel-active" options={options} />
        <Select label="Neaktívne" id="sel-disabled" disabled options={options} />
      </div>,
    );
    await page.locator('body').click({ position: { x: 5, y: 5 } });
    await page.keyboard.press('Tab');
    await expect(page.locator('#sel-active')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('#sel-disabled')).not.toBeFocused();
  });

  test('disabled select renders with not-allowed cursor', async ({ mount, page }) => {
    await mount(<Select label="Neaktívne" disabled options={options} />);
    const cursor = await page
      .getByRole('combobox')
      .evaluate((el) => window.getComputedStyle(el).cursor);
    expect(cursor).toBe('not-allowed');
  });
});

// ---------------------------------------------------------------------------
// Error border colour
// ---------------------------------------------------------------------------
test.describe('Error state visual', () => {
  test.use({ viewport: { width: 600, height: 400 } });

  test('error select border colour differs from default', async ({ mount, page }) => {
    await mount(
      <div>
        <Select id="sel-default" label="Predvolený" options={options} />
        <Select id="sel-error" label="Chybový" variant="error" options={options} />
      </div>,
    );
    const defaultBorder = await page
      .locator('#sel-default')
      .evaluate((el) => window.getComputedStyle(el).borderTopColor);
    const errorBorder = await page
      .locator('#sel-error')
      .evaluate((el) => window.getComputedStyle(el).borderTopColor);

    expect(errorBorder).not.toBe(defaultBorder);
  });
});

// ---------------------------------------------------------------------------
// Mobile full-width
// ---------------------------------------------------------------------------
test.describe('Mobile full-width', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('select container fills the full mobile viewport width', async ({ mount, page }) => {
    await page.evaluate(() => {
      document.body.style.margin = '0';
      document.body.style.padding = '0';
    });
    await mount(<Select label="Krajina" options={options} />);

    const containerBox = await page.locator('.idsk-select-container').boundingBox();
    const viewportWidth = page.viewportSize()!.width;

    expect(containerBox).not.toBeNull();
    expect(containerBox!.width).toBeCloseTo(viewportWidth, 0);
  });

  test('select element spans the full container width on mobile', async ({ mount, page }) => {
    await page.evaluate(() => {
      document.body.style.margin = '0';
      document.body.style.padding = '0';
    });
    await mount(<Select label="Krajina" options={options} />);

    const containerBox = await page.locator('.idsk-select-container').boundingBox();
    const selectBox = await page.getByRole('combobox').boundingBox();

    expect(containerBox).not.toBeNull();
    expect(selectBox).not.toBeNull();
    expect(Math.round(selectBox!.width)).toBe(Math.round(containerBox!.width));
  });
});

// ---------------------------------------------------------------------------
// Keyboard navigation
// ---------------------------------------------------------------------------
test.describe('Keyboard navigation', () => {
  test.use({ viewport: { width: 600, height: 600 } });

  test('Space opens the dropdown', async ({ mount, page }) => {
    await mount(<Select label="Krajina" options={options} />);
    await page.getByRole('combobox').focus();
    await page.keyboard.press('Space');
    await expect(page.getByRole('listbox')).toBeVisible();
  });

  test('Escape closes an open dropdown', async ({ mount, page }) => {
    await mount(<Select label="Krajina" options={options} />);
    await page.getByRole('combobox').click();
    await expect(page.getByRole('listbox')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('listbox')).not.toBeVisible();
  });

  test('ArrowDown then Enter selects an option and closes the dropdown', async ({
    mount,
    page,
  }) => {
    await mount(<Select label="Krajina" placeholder="Vyberte" options={options} />);
    const trigger = page.getByRole('combobox');
    await trigger.click();
    await expect(page.getByRole('listbox')).toBeVisible();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(page.getByRole('listbox')).not.toBeVisible();
    // placeholder should be replaced by an option label
    await expect(trigger).not.toContainText('Vyberte');
  });
});

// ---------------------------------------------------------------------------
// Automated a11y — axe / WCAG 2.1 AA
// ---------------------------------------------------------------------------
test.describe('Automated a11y — axe in browser', () => {
  test.use({ viewport: { width: 600, height: 500 } });

  test('default state has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Select label="Krajina" id="axe-default" options={options} />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('required state has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Select
          label="Krajina"
          id="axe-required"
          required
          placeholder="Vyberte krajinu"
          options={options}
        />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('with hint has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Select
          label="Krajina"
          id="axe-hint"
          inputDescription="Napr. Slovensko"
          options={options}
        />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('error state has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Select
          label="Krajina"
          id="axe-error"
          variant="error"
          errorDescription="Vyberte platnú krajinu"
          options={options}
        />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('error state with hint has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Select
          label="Krajina"
          id="axe-error-hint"
          variant="error"
          inputDescription="Napr. Slovensko"
          errorDescription="Vyberte platnú krajinu"
          options={options}
        />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('disabled state has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Select label="Krajina" id="axe-disabled" disabled options={options} />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });

  test('with labelDescription has no a11y violations', async ({ mount, page }) => {
    await mount(
      <main>
        <Select
          label="Krajina"
          id="axe-subtitle"
          labelDescription="Vyberte krajinu pôvodu"
          options={options}
        />
      </main>,
    );
    const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
    expect(results.violations).toHaveLength(0);
  });
});
