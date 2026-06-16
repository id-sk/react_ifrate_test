/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import { axe } from '../../test/axe';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  afterEach(() => {
    cleanup();
  });

  describe('Accessibility', () => {
    it('should have no a11y violations in default state', async () => {
      const { container } = render(<Textarea label="Label" maxLength={200} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have no a11y violations in error state', async () => {
      const { container } = render(
        <Textarea label="Label" variant="error" errorDescription="Error message" maxLength={200} />,
      );
      // aria-valid-attr-value is disabled because axe-core 4.11 cannot resolve
      // aria-errormessage IDREFs in jsdom. The real browser CT test covers this.
      const results = await axe(container, {
        rules: { 'aria-valid-attr-value': { enabled: false } },
      });
      expect(results).toHaveNoViolations();
    });

    it('should have no a11y violations with character count', async () => {
      const { container } = render(<Textarea label="Label" maxLength={100} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
  describe('Structure & HTML', () => {
    it('renders a native <textarea>', () => {
      render(<Textarea maxLength={200} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea.tagName).toBe('TEXTAREA');
    });

    it('wrapper element has class idsk-textarea-container', () => {
      const { container } = render(<Textarea maxLength={200} />);
      expect(container.firstChild).toHaveClass('idsk-textarea-container');
    });

    it('textarea element has base class idsk-textarea', () => {
      render(<Textarea maxLength={200} />);
      expect(screen.getByRole('textbox')).toHaveClass('idsk-textarea');
    });

    it('default variant adds idsk-textarea--default class', () => {
      render(<Textarea maxLength={200} />);
      expect(screen.getByRole('textbox')).toHaveClass('idsk-textarea--default');
    });

    it('supports native rows attribute', () => {
      render(<Textarea rows={5} maxLength={200} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5');
    });

    it('supports wrap attribute to prevent horizontal scrolling', () => {
      render(<Textarea wrap="soft" maxLength={200} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('wrap', 'soft');
    });
  });

  describe('Label Association', () => {
    it('label is associated with textarea via for/id attributes', () => {
      render(<Textarea label="Správa" id="message-textarea" maxLength={200} />);
      const label = screen.getByText('Správa', { exact: false });
      expect(label.closest('label')).toHaveAttribute('for', 'message-textarea');
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'message-textarea');
    });

    it('auto-generates unique id when none provided and wires label', () => {
      render(<Textarea label="Auto ID" maxLength={200} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea.id).toBeTruthy();
      const label = document.querySelector('label');
      expect(label).toHaveAttribute('for', textarea.id);
    });
  });

  describe('Character Count', () => {
    it('renders visual character count in format "0/maxLength" when maxLength is provided', () => {
      render(<Textarea maxLength={100} />);
      expect(screen.getByText('0/100')).toBeInTheDocument();
    });

    it('updates visual character count when typing', async () => {
      const user = userEvent.setup();
      render(<Textarea maxLength={100} />);
      const textarea = screen.getByRole('textbox');
      await user.type(textarea, 'Ahoj');
      expect(screen.getByText('4/100')).toBeInTheDocument();
    });

    it('visual character count has aria-hidden="true"', () => {
      render(<Textarea maxLength={100} />);
      const count = screen.getByText('0/100');
      expect(count).toHaveAttribute('aria-hidden', 'true');
    });

    it('visual character count has class idsk-character-count', () => {
      render(<Textarea maxLength={100} />);
      const count = screen.getByText('0/100');
      expect(count).toHaveClass('idsk-character-count');
    });

    it('SR-only counter has descriptive initial text', () => {
      render(<Textarea maxLength={100} />);
      const srSpan = document.querySelector('.idsk-character-count-sr') as HTMLElement;
      expect(srSpan).toBeInTheDocument();
      expect(srSpan).toHaveTextContent('Napísaných 0 znakov z maximálne 100.');
    });

    it('SR-only counter updates descriptive text when typing', async () => {
      const user = userEvent.setup();
      render(<Textarea maxLength={100} />);
      const textarea = screen.getByRole('textbox');
      await user.type(textarea, 'Ahoj');
      const srSpan = document.querySelector('.idsk-character-count-sr') as HTMLElement;
      expect(srSpan).toHaveTextContent('Napísaných 4 znakov z maximálne 100.');
    });

    it('SR-only counter has aria-live="polite"', () => {
      render(<Textarea maxLength={100} />);
      const srSpan = document.querySelector('.idsk-character-count-sr') as HTMLElement;
      expect(srSpan).toHaveAttribute('aria-live', 'polite');
    });

    it('SR-only counter has class sr-only', () => {
      render(<Textarea maxLength={100} />);
      const srSpan = document.querySelector('.idsk-character-count-sr') as HTMLElement;
      expect(srSpan).toHaveClass('sr-only');
    });

    it('textarea aria-describedby includes SR counter id', () => {
      render(<Textarea maxLength={100} id="test-ta" />);
      const textarea = screen.getByRole('textbox');
      const srSpan = document.querySelector('.idsk-character-count-sr') as HTMLElement;
      expect(textarea.getAttribute('aria-describedby')).toContain(srSpan.id);
    });
  });

  describe('Required / Optional Marking', () => {
    it('textarea has required attribute when required prop is true', () => {
      render(<Textarea label="Správa" required maxLength={200} />);
      expect(screen.getByRole('textbox')).toBeRequired();
    });

    it('required: asterisk span has aria-hidden="true"', () => {
      render(<Textarea label="Správa" required maxLength={200} />);
      const asterisk = document.querySelector('.idsk-textarea__label-required');
      expect(asterisk).toHaveAttribute('aria-hidden', 'true');
    });

    it('optional: renders "(nepovinné pole)" text', () => {
      render(<Textarea label="Správa" maxLength={200} />);
      expect(screen.getByText('(nepovinné pole)')).toBeInTheDocument();
    });
  });

  describe('Hint (inputDescription + aria-describedby)', () => {
    it('renders hint text', () => {
      render(<Textarea label="Správa" inputDescription="Napíšte nám niečo" maxLength={200} />);
      expect(screen.getByText('Napíšte nám niečo')).toBeInTheDocument();
    });

    it('textarea has aria-describedby referencing hint span id', () => {
      render(
        <Textarea label="Správa" id="msg" inputDescription="Napíšte nám niečo" maxLength={200} />,
      );
      const textarea = screen.getByRole('textbox');
      const hintSpan = document.querySelector('.idsk-textarea__description') as HTMLElement;
      expect(textarea.getAttribute('aria-describedby')).toContain(hintSpan.id);
    });
  });

  describe('Error State', () => {
    it('error variant adds idsk-textarea--error class', () => {
      render(<Textarea variant="error" maxLength={200} />);
      expect(screen.getByRole('textbox')).toHaveClass('idsk-textarea--error');
    });

    it('error variant sets aria-invalid="true"', () => {
      render(<Textarea variant="error" maxLength={200} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('renders errorDescription text and links via aria-errormessage', () => {
      render(<Textarea variant="error" errorDescription="Chyba!" id="msg" maxLength={200} />);
      const textarea = screen.getByRole('textbox');
      const errorSpan = document.querySelector('.idsk-textarea__error-description') as HTMLElement;
      expect(screen.getByText('Chyba!')).toBeInTheDocument();
      expect(textarea).toHaveAttribute('aria-errormessage', errorSpan.id);
    });
  });

  describe('Disabled State', () => {
    it('textarea has disabled attribute', () => {
      render(<Textarea disabled maxLength={200} />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('disabled textarea is not reachable via Tab', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Textarea label="Aktívne" id="active" maxLength={200} />
          <Textarea label="Neaktívne" id="disabled-textarea" disabled maxLength={200} />
        </div>,
      );
      await user.tab();
      expect(document.getElementById('active')).toHaveFocus();
      await user.tab();
      expect(document.getElementById('disabled-textarea')).not.toHaveFocus();
    });
  });

  describe('Keyboard Navigation', () => {
    it('Tab moves focus to textarea', async () => {
      const user = userEvent.setup();
      render(<Textarea label="Správa" maxLength={200} />);
      await user.tab();
      expect(screen.getByRole('textbox')).toHaveFocus();
    });
  });

  describe('Placeholder Policy', () => {
    it('placeholder renders on native textarea', () => {
      render(<Textarea placeholder="Vaša spätná väzba..." maxLength={200} />);
      expect(screen.getByPlaceholderText('Vaša spätná väzba...')).toBeInTheDocument();
    });
  });
});
