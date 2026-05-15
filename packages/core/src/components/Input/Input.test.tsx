/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  describe('Structure & HTML', () => {
    it('renders a native <input type="text">', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      expect(input.tagName).toBe('INPUT');
      expect(input).toHaveAttribute('type', 'text');
    });

    it('wrapper element has class idsk-input-container', () => {
      const { container } = render(<Input />);
      expect(container.firstChild).toHaveClass('idsk-input-container');
    });

    it('input element has base class idsk-input', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toHaveClass('idsk-input');
    });

    it('default variant adds idsk-input--default class', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toHaveClass('idsk-input--default');
    });
  });

  describe('Label Association', () => {
    it('label is associated with input via for/id attributes', () => {
      render(<Input label="Meno" id="name-input" />);
      const label = screen.getByText('Meno', { exact: false });
      expect(label.closest('label')).toHaveAttribute('for', 'name-input');
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'name-input');
    });

    it('auto-generates unique id when none provided and wires label', () => {
      render(<Input label="Auto ID" />);
      const input = screen.getByRole('textbox');
      expect(input.id).toBeTruthy();
      const label = document.querySelector('label');
      expect(label).toHaveAttribute('for', input.id);
    });

    it('does not render a label element when label prop is omitted', () => {
      render(<Input />);
      expect(screen.queryByRole('label')).toBeNull();
    });
  });

  describe('Required / Optional Marking', () => {
    it('required: asterisk span has aria-hidden="true"', () => {
      render(<Input label="Meno" required />);
      const asterisk = document.querySelector('.idsk-input__label-required');
      expect(asterisk).toHaveAttribute('aria-hidden', 'true');
    });

    it('required: input has required attribute', () => {
      render(<Input label="Meno" required />);
      expect(screen.getByRole('textbox')).toBeRequired();
    });

    it('optional: renders "(nepovinné pole)" text', () => {
      render(<Input label="Meno" />);
      expect(screen.getByText('(nepovinné pole)')).toBeInTheDocument();
    });

    it('optional: input does not have required attribute', () => {
      render(<Input label="Meno" />);
      expect(screen.getByRole('textbox')).not.toBeRequired();
    });
  });

  describe('Label Description (Subtitle)', () => {
    it('renders labelDescription text', () => {
      render(<Input label="Meno" labelDescription="Zadajte vaše krstné meno" />);
      expect(screen.getByText('Zadajte vaše krstné meno')).toBeInTheDocument();
    });

    it('absent when labelDescription is not provided', () => {
      render(<Input label="Meno" />);
      expect(document.querySelector('.idsk-input__label-description')).toBeNull();
    });
  });

  describe('Hint (inputDescription + aria-describedby)', () => {
    it('renders hint text', () => {
      render(<Input label="Meno" inputDescription="Napr. Jana" />);
      expect(screen.getByText('Napr. Jana')).toBeInTheDocument();
    });

    it('input has aria-describedby referencing hint span id', () => {
      render(<Input label="Meno" id="meno" inputDescription="Napr. Jana" />);
      const input = screen.getByRole('textbox');
      const hintSpan = document.querySelector('.idsk-input__description') as HTMLElement;
      expect(hintSpan).toBeInTheDocument();
      expect(input.getAttribute('aria-describedby')).toContain(hintSpan.id);
    });

    it('absent when inputDescription is not provided', () => {
      render(<Input label="Meno" />);
      expect(document.querySelector('.idsk-input__description')).toBeNull();
    });

    it('no aria-describedby when neither hint nor error description present', () => {
      render(<Input label="Meno" />);
      expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-describedby');
    });
  });

  describe('Error State', () => {
    it('error variant adds idsk-input--error class', () => {
      render(<Input variant="error" />);
      expect(screen.getByRole('textbox')).toHaveClass('idsk-input--error');
    });

    it('error variant sets aria-invalid="true"', () => {
      render(<Input variant="error" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('default variant does not set aria-invalid', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
    });

    it('error variant renders error icon', () => {
      render(<Input variant="error" />);
      expect(document.querySelector('.idsk-input__input-wrapper__error-icon')).toBeInTheDocument();
    });

    it('renders errorDescription text', () => {
      render(<Input variant="error" errorDescription="Pole je povinné" />);
      expect(screen.getByText('Pole je povinné')).toBeInTheDocument();
    });

    it('errorDescription not rendered in default state', () => {
      render(<Input errorDescription="hidden" />);
      expect(screen.queryByText('hidden')).toBeNull();
    });

    it('input has aria-describedby referencing error span id', () => {
      render(<Input variant="error" errorDescription="Pole je povinné" id="meno" />);
      const input = screen.getByRole('textbox');
      const errorSpan = document.querySelector('.idsk-input__error-description') as HTMLElement;
      expect(errorSpan).toBeInTheDocument();
      expect(input.getAttribute('aria-describedby')).toContain(errorSpan.id);
    });
  });

  describe('Combined aria-describedby (hint + error)', () => {
    it('references both hint and error IDs when both are present', () => {
      render(
        <Input
          variant="error"
          inputDescription="Napr. Jana"
          errorDescription="Pole je povinné"
          id="meno"
        />,
      );
      const input = screen.getByRole('textbox');
      const hintSpan = document.querySelector('.idsk-input__description') as HTMLElement;
      const errorSpan = document.querySelector('.idsk-input__error-description') as HTMLElement;
      const describedBy = input.getAttribute('aria-describedby') ?? '';
      expect(describedBy).toContain(hintSpan.id);
      expect(describedBy).toContain(errorSpan.id);
    });
  });

  describe('Disabled State', () => {
    it('input has disabled attribute', () => {
      render(<Input disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('disabled input is not reachable via Tab', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Input label="Aktívne" id="active" />
          <Input label="Neaktívne" id="disabled-input" disabled />
        </div>,
      );
      await user.tab();
      expect(document.getElementById('active')).toHaveFocus();
      await user.tab();
      expect(document.getElementById('disabled-input')).not.toHaveFocus();
    });
  });

  describe('Size Variants', () => {
    it('large size adds idsk-input--lg class', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toHaveClass('idsk-input--lg');
    });

    it('small size adds idsk-input--sm class', () => {
      render(<Input size="sm" />);
      expect(screen.getByRole('textbox')).toHaveClass('idsk-input--sm');
    });
  });

  describe('Autocomplete', () => {
    it('passes autoComplete attribute to native input', () => {
      render(<Input autoComplete="given-name" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'given-name');
    });
  });

  describe('Keyboard Navigation', () => {
    it('Tab moves focus to input', async () => {
      const user = userEvent.setup();
      render(<Input label="Meno" />);
      await user.tab();
      expect(screen.getByRole('textbox')).toHaveFocus();
    });

    it('Shift+Tab removes focus from input', async () => {
      const user = userEvent.setup();
      render(<Input label="Meno" />);
      screen.getByRole('textbox').focus();
      await user.tab({ shift: true });
      expect(screen.getByRole('textbox')).not.toHaveFocus();
    });
  });

  describe('Placeholder Policy', () => {
    it('placeholder renders on native input', () => {
      render(<Input placeholder="Jana Novotná" />);
      expect(screen.getByPlaceholderText('Jana Novotná')).toBeInTheDocument();
    });

    it('label is still present when placeholder is provided', () => {
      render(<Input label="Meno" placeholder="Jana Novotná" />);
      expect(screen.getByText('Meno', { exact: false })).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Jana Novotná')).toBeInTheDocument();
    });
  });

  describe('Tooltip', () => {
    it.todo('supports tooltip variant');
    it.todo('renders without tooltip when tooltip prop is omitted');
  });
});
