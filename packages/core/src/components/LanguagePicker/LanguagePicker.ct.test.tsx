import { expect, test } from '@playwright/experimental-ct-react';

import { LanguagePicker } from './LanguagePicker';

const LANGUAGES = [
  { value: 'sk', label: 'Slovenčina' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' },
  { value: 'cs', label: 'Čeština' },
  { value: 'hu', label: 'Magyar' },
];

test.describe('LanguagePicker', () => {
  test('renders trigger with the default language label', async ({ mount }) => {
    const component = await mount(<LanguagePicker defaultValue="sk" languages={LANGUAGES} />);
    await expect(component.getByRole('button')).toContainText('Slovenčina');
  });

  test('opens dropdown when trigger is clicked', async ({ mount, page }) => {
    await mount(<LanguagePicker defaultValue="sk" languages={LANGUAGES} />);
    await page.getByRole('button').click();
    await expect(page.getByRole('menuitem', { name: 'English' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Deutsch' })).toBeVisible();
  });

  test('selects a language and updates the trigger label', async ({ mount, page }) => {
    await mount(<LanguagePicker defaultValue="sk" languages={LANGUAGES} />);
    await page.getByRole('button').click();
    await page.getByRole('menuitem', { name: 'English' }).click();
    await expect(page.getByRole('button')).toContainText('English');
  });

  test('closes dropdown on Escape key', async ({ mount, page }) => {
    await mount(<LanguagePicker defaultValue="sk" languages={LANGUAGES} />);
    await page.getByRole('button').click();
    await expect(page.getByRole('menuitem', { name: 'English' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('menuitem', { name: 'English' })).not.toBeVisible();
  });

  test('adds trigger--open class when dropdown is open', async ({ mount, page }) => {
    await mount(<LanguagePicker defaultValue="sk" languages={LANGUAGES} />);
    await page.getByRole('button').click();
    await expect(page.getByRole('button')).toHaveClass(/idsk-language-picker__trigger--open/);
  });
});
