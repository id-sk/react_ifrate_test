/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { HeaderMenuItem } from './HeaderMenuItem';

const DROPDOWN_ITEMS = [
  { label: 'Podstránka 1', href: '/sluzby/1' },
  { label: 'Podstránka 2', href: '/sluzby/2' },
];

describe('HeaderMenuItem', () => {
  afterEach(() => cleanup());

  describe('dropdown variant — assistive technology activation', () => {
    it('opens the panel on a bare click event with no preceding pointerdown', () => {
      // Simulates assistive tech (JAWS/NVDA/VoiceOver) activation, which can dispatch
      // a "click" directly without the pointerdown Radix's Trigger listens for.
      render(
        <HeaderMenuItem variant="dropdown" dropdownItems={DROPDOWN_ITEMS}>
          Sekcia
        </HeaderMenuItem>,
      );

      const trigger = screen.getByRole('button', { name: 'Sekcia' });
      expect(trigger).toHaveAttribute('aria-expanded', 'false');

      fireEvent.click(trigger);

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('does not double-toggle when pointerdown already opened the menu', () => {
      render(
        <HeaderMenuItem variant="dropdown" dropdownItems={DROPDOWN_ITEMS}>
          Sekcia
        </HeaderMenuItem>,
      );

      const trigger = screen.getByRole('button', { name: 'Sekcia' });

      fireEvent.pointerDown(trigger, { button: 0 });
      fireEvent.click(trigger);

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('closes the panel on a second bare click event', () => {
      render(
        <HeaderMenuItem variant="dropdown" dropdownItems={DROPDOWN_ITEMS}>
          Sekcia
        </HeaderMenuItem>,
      );

      const trigger = screen.getByRole('button', { name: 'Sekcia' });

      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');

      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
