import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Radio, RadioGroup } from './Radio';

describe('Radio', () => {
  describe('structure and semantics', () => {
    it('renders with type="radio"', () => {
      render(<Radio label="Jablko" name="fruit" />);
      expect(screen.getByLabelText('Jablko')).toHaveAttribute('type', 'radio');
    });

    it('links label via for/id attributes', () => {
      render(<Radio label="Jablko" name="fruit" id="r-apple" />);
      const input = screen.getByLabelText('Jablko');
      expect(input).toHaveAttribute('id', 'r-apple');
      expect(screen.getByText('Jablko').closest('label')).toHaveAttribute('for', 'r-apple');
    });

    it('auto-generates unique id and links label when no id provided', () => {
      render(<Radio label="Jablko" name="fruit" />);
      const input = screen.getByLabelText('Jablko');
      const inputId = input.getAttribute('id');
      expect(inputId).toBeTruthy();
      expect(screen.getByText('Jablko').closest('label')).toHaveAttribute('for', inputId!);
    });

    it('passes name attribute to input', () => {
      render(<Radio label="Jablko" name="fruit" />);
      expect(screen.getByLabelText('Jablko')).toHaveAttribute('name', 'fruit');
    });

    it('all radios in a group share the same name attribute', () => {
      render(
        <>
          <Radio label="Jablko" name="fruit" value="apple" />
          <Radio label="Banán" name="fruit" value="banana" />
          <Radio label="Pomaranč" name="fruit" value="orange" />
        </>,
      );
      screen.getAllByRole('radio').forEach((input) => {
        expect(input).toHaveAttribute('name', 'fruit');
      });
    });

    it('uses IDSK CSS classes and no GOVUK classes', () => {
      const { container } = render(<Radio label="Jablko" name="fruit" />);
      const allClasses = Array.from(container.querySelectorAll('[class]'))
        .map((el) => el.className)
        .join(' ');
      expect(allClasses).not.toMatch(/govuk/i);
      expect(container.querySelector('.idsk-radio')).toBeInTheDocument();
      expect(container.querySelector('.idsk-radio__input')).toBeInTheDocument();
      expect(container.querySelector('.idsk-radio__label')).toBeInTheDocument();
    });
  });

  describe('hint', () => {
    it('renders hint text linked via aria-describedby', () => {
      render(<Radio label="Jablko" name="fruit" hint="Sladké červené ovocie" id="r1" />);
      const input = screen.getByLabelText('Jablko');
      const hint = screen.getByText('Sladké červené ovocie');
      expect(hint).toHaveAttribute('id', 'r1-hint');
      expect(input).toHaveAttribute('aria-describedby', 'r1-hint');
    });
  });

  describe('error state', () => {
    it('links error message via aria-errormessage and sets aria-invalid', () => {
      render(<Radio label="Jablko" name="fruit" errorMessage="Prosím vyberte" id="r1" />);
      const input = screen.getByLabelText('Jablko');
      const error = screen.getByText('Prosím vyberte');
      expect(error).toHaveAttribute('id', 'r1-error');
      expect(input).toHaveAttribute('aria-errormessage', 'r1-error');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('links hint via aria-describedby and error via aria-errormessage', () => {
      render(
        <Radio label="Jablko" name="fruit" hint="Nápoveda" errorMessage="Chyba výberu" id="r1" />,
      );
      const input = screen.getByLabelText('Jablko');
      expect(input).toHaveAttribute('aria-describedby', 'r1-hint');
      expect(input).toHaveAttribute('aria-errormessage', 'r1-error');
    });
  });

  describe('required state', () => {
    it('sets required attribute on input', () => {
      render(<Radio label="Jablko" name="fruit" required />);
      expect(screen.getByLabelText(/Jablko/)).toBeRequired();
    });

    it('shows aria-hidden asterisk in label', () => {
      render(<Radio label="Jablko" name="fruit" required />);
      const asterisk = screen.getByText('*');
      expect(asterisk.tagName).toBe('SPAN');
      expect(asterisk).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('disabled state', () => {
    it('is disabled when disabled prop is passed', () => {
      render(<Radio label="Jablko" name="fruit" disabled />);
      expect(screen.getByLabelText('Jablko')).toBeDisabled();
    });

    it('is not disabled by default', () => {
      render(<Radio label="Jablko" name="fruit" />);
      expect(screen.getByLabelText('Jablko')).not.toBeDisabled();
    });
  });

  describe('size variants', () => {
    it('applies sm size modifier class', () => {
      const { container } = render(<Radio label="Jablko" name="fruit" size="sm" />);
      expect(container.querySelector('.idsk-radio--sm')).toBeInTheDocument();
    });

    it('does not apply sm class for default size', () => {
      const { container } = render(<Radio label="Jablko" name="fruit" />);
      expect(container.querySelector('.idsk-radio--sm')).not.toBeInTheDocument();
    });
  });
});

describe('RadioGroup', () => {
  describe('structure and semantics', () => {
    it('renders a <fieldset> element', () => {
      const { container } = render(
        <RadioGroup legend="Obľúbené ovocie">
          <Radio label="Jablko" name="fruit" value="apple" />
        </RadioGroup>,
      );
      expect(container.querySelector('fieldset')).toBeInTheDocument();
    });

    it('renders group title inside a <legend> element', () => {
      render(
        <RadioGroup legend="Obľúbené ovocie">
          <Radio label="Jablko" name="fruit" value="apple" />
        </RadioGroup>,
      );
      expect(screen.getByText('Obľúbené ovocie').closest('legend')).not.toBeNull();
    });

    it('is accessible as radiogroup role named by legend', () => {
      render(
        <RadioGroup legend="Obľúbené ovocie">
          <Radio label="Jablko" name="fruit" value="apple" />
        </RadioGroup>,
      );
      expect(screen.getByRole('radiogroup', { name: 'Obľúbené ovocie' })).toBeInTheDocument();
    });

    it('renders all child radio options', () => {
      render(
        <RadioGroup legend="Obľúbené ovocie">
          <Radio label="Jablko" name="fruit" value="apple" />
          <Radio label="Banán" name="fruit" value="banana" />
          <Radio label="Pomaranč" name="fruit" value="orange" />
        </RadioGroup>,
      );
      expect(screen.getAllByRole('radio')).toHaveLength(3);
    });

    it('uses IDSK CSS classes and no GOVUK classes', () => {
      const { container } = render(
        <RadioGroup legend="Obľúbené ovocie">
          <Radio label="Jablko" name="fruit" value="apple" />
        </RadioGroup>,
      );
      const allClasses = Array.from(container.querySelectorAll('[class]'))
        .map((el) => el.className)
        .join(' ');
      expect(allClasses).not.toMatch(/govuk/i);
      expect(container.querySelector('.idsk-radio-group')).toBeInTheDocument();
      expect(container.querySelector('.idsk-radio-group__legend')).toBeInTheDocument();
    });
  });

  describe('hint', () => {
    it('renders group hint linked to fieldset via aria-describedby', () => {
      render(
        <RadioGroup legend="Obľúbené ovocie" hint="Vyberte jednu možnosť">
          <Radio label="Jablko" name="fruit" value="apple" />
        </RadioGroup>,
      );
      const group = screen.getByRole('radiogroup', { name: 'Obľúbené ovocie' });
      const hint = screen.getByText('Vyberte jednu možnosť');
      expect(group).toHaveAttribute('aria-describedby', expect.stringContaining(hint.id));
    });
  });

  describe('error state', () => {
    it('renders error message linked to fieldset via aria-errormessage', () => {
      render(
        <RadioGroup legend="Obľúbené ovocie" errorMessage="Prosím vyberte možnosť">
          <Radio label="Jablko" name="fruit" value="apple" />
        </RadioGroup>,
      );
      const group = screen.getByRole('radiogroup', { name: 'Obľúbené ovocie' });
      const error = screen.getByText('Prosím vyberte možnosť');
      expect(group).toHaveAttribute('aria-errormessage', error.id);
      expect(group).toHaveAttribute('aria-invalid', 'true');
    });

    it('links fieldset hint via aria-describedby and error via aria-errormessage', () => {
      render(
        <RadioGroup legend="Obľúbené ovocie" hint="Nápoveda skupiny" errorMessage="Chyba skupiny">
          <Radio label="Jablko" name="fruit" value="apple" />
        </RadioGroup>,
      );
      const group = screen.getByRole('radiogroup', { name: 'Obľúbené ovocie' });
      expect(group).toHaveAttribute(
        'aria-describedby',
        expect.stringContaining(screen.getByText('Nápoveda skupiny').id),
      );
      expect(group).toHaveAttribute('aria-errormessage', screen.getByText('Chyba skupiny').id);
    });
  });
});
