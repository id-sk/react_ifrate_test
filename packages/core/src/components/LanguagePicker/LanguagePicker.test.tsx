/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { LanguagePicker } from './LanguagePicker';

const LANGUAGES = [
  { value: 'sk', label: 'Slovenčina' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' },
  { value: 'cs', label: 'Čeština' },
  { value: 'hu', label: 'Magyar' },
];

describe('LanguagePicker', () => {
  afterEach(() => cleanup());

  describe('Structure', () => {
    it('renders a trigger button', () => {
      render(<LanguagePicker defaultValue="sk" languages={LANGUAGES} />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('displays the label of the selected language', () => {
      render(<LanguagePicker defaultValue="sk" languages={LANGUAGES} />);
      expect(screen.getByRole('button')).toHaveTextContent('Slovenčina');
    });

    it('displays raw value when no matching language is found', () => {
      render(<LanguagePicker defaultValue="Slovensky" />);
      expect(screen.getByRole('button')).toHaveTextContent('Slovensky');
    });

    it('selects the first language by default when no defaultValue is given', () => {
      render(<LanguagePicker languages={LANGUAGES} />);
      expect(screen.getByRole('button')).toHaveTextContent('Slovenčina');
    });

    it('applies custom className to the trigger', () => {
      render(<LanguagePicker className="my-class" defaultValue="sk" languages={LANGUAGES} />);
      expect(screen.getByRole('button')).toHaveClass('my-class');
    });

    it('applies idsk-button--color-white when onDark and dropdown is closed', () => {
      render(<LanguagePicker onDark defaultValue="sk" languages={LANGUAGES} />);
      expect(screen.getByRole('button')).toHaveClass('idsk-button--color-white');
    });

    it('does not apply idsk-button--color-white when onDark but dropdown is open', () => {
      const { container } = render(
        <LanguagePicker onDark open defaultValue="sk" languages={LANGUAGES} />,
      );
      expect(container.querySelector('button')).not.toHaveClass('idsk-button--color-white');
    });

    it('applies trigger--open class when open', () => {
      const { container } = render(<LanguagePicker open defaultValue="sk" languages={LANGUAGES} />);
      expect(container.querySelector('button')).toHaveClass('idsk-language-picker__trigger--open');
    });
  });

  describe('Dropdown behaviour', () => {
    it('shows menu items when the trigger is clicked', async () => {
      const user = userEvent.setup();
      render(<LanguagePicker defaultValue="sk" languages={LANGUAGES} />);
      await user.click(screen.getByRole('button'));
      expect(screen.getByRole('menuitem', { name: 'English' })).toBeInTheDocument();
      expect(screen.getByRole('menuitem', { name: 'Deutsch' })).toBeInTheDocument();
    });

    it('calls onValueChange with the selected language value', async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(
        <LanguagePicker defaultValue="sk" languages={LANGUAGES} onValueChange={onValueChange} />,
      );
      await user.click(screen.getByRole('button'));
      await user.click(screen.getByRole('menuitem', { name: 'English' }));
      expect(onValueChange).toHaveBeenCalledWith('en');
    });

    it('updates the trigger label after selection (uncontrolled)', async () => {
      const user = userEvent.setup();
      render(<LanguagePicker defaultValue="sk" languages={LANGUAGES} />);
      await user.click(screen.getByRole('button'));
      await user.click(screen.getByRole('menuitem', { name: 'English' }));
      expect(screen.getByRole('button')).toHaveTextContent('English');
    });

    it('keeps the trigger label when a controlled value is set', async () => {
      const user = userEvent.setup();
      render(<LanguagePicker value="sk" languages={LANGUAGES} />);
      await user.click(screen.getByRole('button'));
      await user.click(screen.getByRole('menuitem', { name: 'English' }));
      expect(screen.getByRole('button')).toHaveTextContent('Slovenčina');
    });
  });

  describe('Controlled open state', () => {
    it('respects controlled open=true', () => {
      render(<LanguagePicker open languages={LANGUAGES} defaultValue="sk" />);
      expect(screen.getByRole('menuitem', { name: 'English' })).toBeInTheDocument();
    });

    it('calls onOpenChange when the trigger is clicked', async () => {
      const user = userEvent.setup();
      const onOpenChange = vi.fn();
      render(
        <LanguagePicker
          open={false}
          languages={LANGUAGES}
          defaultValue="sk"
          onOpenChange={onOpenChange}
        />,
      );
      await user.click(screen.getByRole('button'));
      expect(onOpenChange).toHaveBeenCalledWith(true);
    });
  });
});
