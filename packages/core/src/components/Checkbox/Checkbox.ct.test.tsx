import { expect, test } from '@playwright/experimental-ct-react';
import { Checkbox, CheckboxGroup } from './Checkbox';
import AxeBuilder from '@axe-core/playwright';

test.use({ viewport: { width: 500, height: 500 } });

const envRules = ['document-title', 'page-has-heading-one', 'region', 'landmark-one-main'];

test('checkbox should not have accessibility violations', async ({ mount, page }) => {
  await mount(
    <CheckboxGroup legend="Obľúbené ovocie" hint="Vyberte aspoň jednu možnosť">
      <Checkbox label="Jablko" name="fruit" value="apple" hint="Sladké červené ovocie" />
      <Checkbox label="Banán" name="fruit" value="banana" required />
      <Checkbox label="Pomaranč" name="fruit" value="orange" errorMessage="Chyba výberu" />
    </CheckboxGroup>,
  );

  const accessibilityScanResults = await new AxeBuilder({ page }).disableRules(envRules).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('checkbox can be toggled via keyboard (Space)', async ({ mount }) => {
  const component = await mount(<Checkbox label="Click me" />);
  const checkbox = component.locator('input[type="checkbox"]');

  await expect(checkbox).not.toBeChecked();

  await checkbox.focus();
  await component.press(' ');

  await expect(checkbox).toBeChecked();

  await component.press(' ');
  await expect(checkbox).not.toBeChecked();
});

test('checkbox supports focus and disabled states', async ({ mount }) => {
  const component = await mount(
    <div>
      <Checkbox label="Enabled" />
      <Checkbox label="Disabled" disabled />
    </div>,
  );

  const disabled = component.locator('input[disabled]');

  await expect(disabled).toBeDisabled();

  const input = component.locator('input').first();
  await input.focus();

  // Checking if focus ring is present (this depends on the CSS, but we can check if it has focus)
  await expect(input).toBeFocused();
});
