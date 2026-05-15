import { expect, test } from '@playwright/experimental-ct-react';
import { Radio, RadioGroup } from './Radio';
import AxeBuilder from '@axe-core/playwright';

test.use({ viewport: { width: 500, height: 500 } });

const envRules = ['document-title', 'page-has-heading-one', 'region', 'landmark-one-main'];

test('radio group should not have accessibility violations', async ({ mount, page }) => {
  await mount(
    <RadioGroup legend="Obľúbené ovocie" hint="Vyberte jednu možnosť">
      <Radio label="Jablko" name="fruit" value="apple" hint="Sladké červené ovocie" />
      <Radio label="Banán" name="fruit" value="banana" required />
      <Radio label="Pomaranč" name="fruit" value="orange" />
    </RadioGroup>,
  );
  const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
  expect(results.violations).toEqual([]);
});

test('radio group with error state should not have accessibility violations', async ({
  mount,
  page,
}) => {
  await mount(
    <RadioGroup legend="Obľúbené ovocie" errorMessage="Prosím vyberte možnosť">
      <Radio label="Jablko" name="fruit2" value="apple" />
      <Radio label="Banán" name="fruit2" value="banana" />
    </RadioGroup>,
  );
  const results = await new AxeBuilder({ page }).disableRules(envRules).analyze();
  expect(results.violations).toEqual([]);
});

test('radio can be selected with Space key', async ({ mount }) => {
  const component = await mount(
    <RadioGroup legend="Testovacia skupina">
      <Radio label="Možnosť A" name="space-test" value="a" />
      <Radio label="Možnosť B" name="space-test" value="b" />
    </RadioGroup>,
  );
  const first = component.locator('input[type="radio"]').first();
  await expect(first).not.toBeChecked();
  await first.focus();
  await first.press(' ');
  await expect(first).toBeChecked();
});

test('arrow keys navigate and auto-select between radio options', async ({ mount }) => {
  const component = await mount(
    <RadioGroup legend="Testovacia skupina">
      <Radio label="Možnosť A" name="arrow-test" value="a" />
      <Radio label="Možnosť B" name="arrow-test" value="b" />
      <Radio label="Možnosť C" name="arrow-test" value="c" />
    </RadioGroup>,
  );
  const radios = component.locator('input[type="radio"]');
  const first = radios.nth(0);
  const second = radios.nth(1);
  const third = radios.nth(2);

  await first.focus();
  await first.press(' ');
  await expect(first).toBeChecked();

  await first.press('ArrowDown');
  await expect(second).toBeChecked();
  await expect(second).toBeFocused();

  await second.press('ArrowDown');
  await expect(third).toBeChecked();
  await expect(third).toBeFocused();

  await third.press('ArrowUp');
  await expect(second).toBeChecked();
  await expect(second).toBeFocused();
});

test('tab focuses first radio when none is selected', async ({ mount, page }) => {
  const component = await mount(
    <div>
      <button id="before-btn">Pred skupinou</button>
      <RadioGroup legend="Ovocie">
        <Radio label="Jablko" name="tab-test" value="apple" />
        <Radio label="Banán" name="tab-test" value="banana" />
      </RadioGroup>
    </div>,
  );
  await component.locator('#before-btn').focus();
  await page.keyboard.press('Tab');
  await expect(component.locator('input[type="radio"]').first()).toBeFocused();
});

test('tab focuses the pre-selected radio when entering a group', async ({ mount, page }) => {
  const component = await mount(
    <div>
      <button id="before-btn2">Pred skupinou</button>
      <RadioGroup legend="Ovocie">
        <Radio label="Jablko" name="tab-sel-test" value="apple" />
        <Radio label="Banán" name="tab-sel-test" value="banana" defaultChecked />
      </RadioGroup>
    </div>,
  );
  await component.locator('#before-btn2').focus();
  await page.keyboard.press('Tab');
  await expect(component.locator('input[type="radio"]').nth(1)).toBeFocused();
});

test('disabled radio is not focusable', async ({ mount }) => {
  const component = await mount(
    <RadioGroup legend="Testovacia skupina">
      <Radio label="Aktívna" name="disabled-test" value="active" />
      <Radio label="Neaktívna" name="disabled-test" value="disabled" disabled />
    </RadioGroup>,
  );
  const disabled = component.locator('input[disabled]');
  await expect(disabled).toBeDisabled();
  await disabled.focus();
  await expect(disabled).not.toBeFocused();
});

test('enabled radio receives visible focus', async ({ mount }) => {
  const component = await mount(
    <RadioGroup legend="Testovacia skupina">
      <Radio label="Možnosť A" name="focus-test" value="a" />
    </RadioGroup>,
  );
  const input = component.locator('input[type="radio"]').first();
  await input.focus();
  await expect(input).toBeFocused();
});
