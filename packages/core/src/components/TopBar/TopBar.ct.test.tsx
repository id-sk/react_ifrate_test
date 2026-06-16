import { expect, test } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { TopBar } from './TopBar';

test.use({ viewport: { width: 1280, height: 800 } });

test('has idsk-top-bar class on root', async ({ mount }) => {
  const component = await mount(<TopBar />);
  await expect(component).toHaveClass(/idsk-top-bar/);
});

test('panel is hidden when collapsed', async ({ mount }) => {
  const component = await mount(<TopBar />);
  await expect(component.locator('#idsk-top-bar-panel')).toBeHidden();
});

test('clicking toggle expands the panel', async ({ mount }) => {
  const component = await mount(<TopBar />);
  await component.getByRole('button', { name: /Oficiálna stránka/i }).click();
  await expect(component.locator('#idsk-top-bar-panel')).toBeVisible();
});

test('clicking toggle twice collapses the panel again', async ({ mount }) => {
  const component = await mount(<TopBar />);
  const btn = component.getByRole('button', { name: /Oficiálna stránka/i });
  await btn.click();
  await btn.click();
  await expect(component.locator('#idsk-top-bar-panel')).toBeHidden();
});

test('defaultExpanded=true shows panel on mount', async ({ mount }) => {
  const component = await mount(<TopBar defaultExpanded />);
  await expect(component.locator('#idsk-top-bar-panel')).toBeVisible();
});

test('language picker is visible by default', async ({ mount }) => {
  const component = await mount(<TopBar />);
  await expect(component.getByRole('button', { name: /Slovensky/i })).toBeVisible();
});

test('language picker hidden when showLanguagePicker=false', async ({ mount }) => {
  const component = await mount(<TopBar showLanguagePicker={false} />);
  await expect(component.getByRole('button', { name: /Slovensky/i })).toBeHidden();
});

test('renders without overflow on mobile viewport', async ({ mount, page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  const component = await mount(<TopBar defaultExpanded />);
  const box = await component.boundingBox();
  expect(box?.width).toBeLessThanOrEqual(375);
});

test('has no axe violations when collapsed', async ({ mount, page }) => {
  await mount(
    <div>
      <TopBar />
      <main aria-label="Hlavný obsah" />
    </div>,
  );
  const results = await new AxeBuilder({ page })
    .disableRules(['document-title', 'page-has-heading-one', 'region'])
    .analyze();
  expect(results.violations).toEqual([]);
});

test('has no axe violations when expanded', async ({ mount, page }) => {
  await mount(
    <div>
      <TopBar defaultExpanded />
      <main aria-label="Hlavný obsah" />
    </div>,
  );
  const results = await new AxeBuilder({ page })
    .disableRules(['document-title', 'page-has-heading-one', 'region'])
    .analyze();
  expect(results.violations).toEqual([]);
});
