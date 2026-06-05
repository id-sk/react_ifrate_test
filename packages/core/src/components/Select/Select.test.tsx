/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Select } from './Select';

const defaultOptions = [
  { value: 'sk', label: 'Slovensko' },
  { value: 'cz', label: 'Česká republika' },
  { value: 'at', label: 'Rakúsko' },
];

describe('Select', () => {
  describe('Structure & HTML', () => {
    it('trigger has role combobox', () => {
      render(<Select options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('wrapper has class idsk-select-container', () => {
      const { container } = render(<Select options={defaultOptions} />);
      expect(container.firstChild).toHaveClass('idsk-select-container');
    });

    it('trigger has base class idsk-select', () => {
      render(<Select options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toHaveClass('idsk-select');
    });

    it('default variant adds idsk-select--default class', () => {
      render(<Select options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toHaveClass('idsk-select--default');
    });

    it('renders options from options prop when dropdown is open', async () => {
      const user = userEvent.setup();
      render(<Select options={defaultOptions} />);
      await user.click(screen.getByRole('combobox'));
      expect(screen.getByRole('option', { name: 'Slovensko' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Česká republika' })).toBeInTheDocument();
    });

    it('selecting an option emits the correct value', async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(<Select options={defaultOptions} onValueChange={onValueChange} />);
      await user.click(screen.getByRole('combobox'));
      await user.click(screen.getByRole('option', { name: 'Slovensko' }));
      expect(onValueChange).toHaveBeenCalledWith('sk');
    });

    it('renders a chevron icon wrapper', () => {
      const { container } = render(<Select options={defaultOptions} />);
      expect(container.querySelector('.idsk-select__chevron')).toBeInTheDocument();
    });

    it('chevron has aria-hidden="true"', () => {
      const { container } = render(<Select options={defaultOptions} />);
      expect(container.querySelector('.idsk-select__chevron')).toHaveAttribute(
        'aria-hidden',
        'true',
      );
    });
  });

  describe('Placeholder', () => {
    it('shows placeholder text in trigger when no value is selected', () => {
      render(<Select placeholder="Vyberte krajinu" options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toHaveTextContent('Vyberte krajinu');
    });

    it('first selectable option is the first real option (not a placeholder option)', async () => {
      const user = userEvent.setup();
      render(<Select placeholder="Vyberte krajinu" options={defaultOptions} />);
      await user.click(screen.getByRole('combobox'));
      expect(screen.getAllByRole('option')[0]).toHaveTextContent('Slovensko');
    });

    it('adds idsk-select--empty class when placeholder is shown initially', () => {
      render(<Select placeholder="Vyberte krajinu" options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toHaveClass('idsk-select--empty');
    });

    it('removes idsk-select--empty class after selecting a real value', async () => {
      const user = userEvent.setup();
      render(<Select placeholder="Vyberte krajinu" options={defaultOptions} />);
      await user.click(screen.getByRole('combobox'));
      await user.click(screen.getByRole('option', { name: 'Slovensko' }));
      expect(screen.getByRole('combobox')).not.toHaveClass('idsk-select--empty');
    });
  });

  describe('Option Groups', () => {
    it('renders group labels from groups prop when dropdown is open', async () => {
      const user = userEvent.setup();
      const groups = [
        { label: 'Európa', options: [{ value: 'sk', label: 'Slovensko' }] },
        { label: 'Amerika', options: [{ value: 'us', label: 'USA' }] },
      ];
      render(<Select groups={groups} />);
      await user.click(screen.getByRole('combobox'));
      expect(screen.getByText('Európa')).toBeInTheDocument();
      expect(screen.getByText('Amerika')).toBeInTheDocument();
    });
  });

  describe('Label Association', () => {
    it('label is associated with trigger via for/id attributes', () => {
      render(<Select label="Krajina" id="country-select" options={defaultOptions} />);
      const label = document.querySelector('label');
      expect(label).toHaveAttribute('for', 'country-select');
      expect(screen.getByRole('combobox')).toHaveAttribute('id', 'country-select');
    });

    it('auto-generates unique id when none provided and wires label', () => {
      render(<Select label="Krajina" options={defaultOptions} />);
      const trigger = screen.getByRole('combobox');
      expect(trigger.id).toBeTruthy();
      expect(document.querySelector('label')).toHaveAttribute('for', trigger.id);
    });

    it('does not render a label element when label prop is omitted', () => {
      render(<Select options={defaultOptions} />);
      expect(document.querySelector('label')).toBeNull();
    });
  });

  describe('Required / Optional Marking', () => {
    it('required: asterisk span has aria-hidden="true"', () => {
      render(<Select label="Krajina" required options={defaultOptions} />);
      expect(document.querySelector('.idsk-select__label-required')).toHaveAttribute(
        'aria-hidden',
        'true',
      );
    });

    it('required: trigger is marked as required via aria-required', () => {
      render(<Select label="Krajina" required options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toBeRequired();
    });

    it('optional: renders "(nepovinné pole)" text', () => {
      render(<Select label="Krajina" options={defaultOptions} />);
      expect(screen.getByText('(nepovinné pole)')).toBeInTheDocument();
    });

    it('optional: trigger is not marked as required', () => {
      render(<Select label="Krajina" options={defaultOptions} />);
      expect(screen.getByRole('combobox')).not.toBeRequired();
    });
  });

  describe('Label Description', () => {
    it('renders labelDescription text', () => {
      render(
        <Select label="Krajina" labelDescription="Vyberte vašu krajinu" options={defaultOptions} />,
      );
      expect(screen.getByText('Vyberte vašu krajinu')).toBeInTheDocument();
    });

    it('absent when labelDescription is not provided', () => {
      render(<Select label="Krajina" options={defaultOptions} />);
      expect(document.querySelector('.idsk-select__label-description')).toBeNull();
    });
  });

  describe('Hint (inputDescription + aria-describedby)', () => {
    it('renders hint text', () => {
      render(
        <Select label="Krajina" inputDescription="Napr. Slovensko" options={defaultOptions} />,
      );
      expect(screen.getByText('Napr. Slovensko')).toBeInTheDocument();
    });

    it('trigger has aria-describedby referencing hint span id', () => {
      render(
        <Select
          label="Krajina"
          id="country"
          inputDescription="Napr. Slovensko"
          options={defaultOptions}
        />,
      );
      const trigger = screen.getByRole('combobox');
      const hint = document.querySelector('.idsk-select__description') as HTMLElement;
      expect(hint).toBeInTheDocument();
      expect(trigger.getAttribute('aria-describedby')).toContain(hint.id);
    });

    it('absent when inputDescription is not provided', () => {
      render(<Select options={defaultOptions} />);
      expect(document.querySelector('.idsk-select__description')).toBeNull();
    });

    it('no aria-describedby when neither hint nor error present', () => {
      render(<Select options={defaultOptions} />);
      expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-describedby');
    });
  });

  describe('Error State', () => {
    it('error variant adds idsk-select--error class', () => {
      render(<Select variant="error" options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toHaveClass('idsk-select--error');
    });

    it('error variant sets aria-invalid="true"', () => {
      render(<Select variant="error" options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('default variant does not set aria-invalid', () => {
      render(<Select options={defaultOptions} />);
      expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-invalid');
    });

    it('error variant renders warning icon', () => {
      const { container } = render(<Select variant="error" options={defaultOptions} />);
      expect(container.querySelector('.idsk-select__error-icon')).toBeInTheDocument();
    });

    it('error icon has aria-hidden="true"', () => {
      const { container } = render(<Select variant="error" options={defaultOptions} />);
      expect(container.querySelector('.idsk-select__error-icon')).toHaveAttribute(
        'aria-hidden',
        'true',
      );
    });

    it('renders errorDescription text', () => {
      render(
        <Select variant="error" errorDescription="Pole je povinné" options={defaultOptions} />,
      );
      expect(screen.getByText('Pole je povinné')).toBeInTheDocument();
    });

    it('errorDescription not rendered in default state', () => {
      render(<Select errorDescription="hidden" options={defaultOptions} />);
      expect(screen.queryByText('hidden')).toBeNull();
    });

    it('trigger has aria-describedby referencing error span id', () => {
      render(
        <Select
          variant="error"
          errorDescription="Pole je povinné"
          id="country"
          options={defaultOptions}
        />,
      );
      const trigger = screen.getByRole('combobox');
      const errorSpan = document.querySelector('.idsk-select__error-description') as HTMLElement;
      expect(errorSpan).toBeInTheDocument();
      expect(trigger.getAttribute('aria-describedby')).toContain(errorSpan.id);
    });
  });

  describe('Combined aria-describedby (hint + error)', () => {
    it('references both hint and error IDs when both are present', () => {
      render(
        <Select
          variant="error"
          inputDescription="Napr. Slovensko"
          errorDescription="Pole je povinné"
          id="country"
          options={defaultOptions}
        />,
      );
      const trigger = screen.getByRole('combobox');
      const hint = document.querySelector('.idsk-select__description') as HTMLElement;
      const error = document.querySelector('.idsk-select__error-description') as HTMLElement;
      const describedBy = trigger.getAttribute('aria-describedby') ?? '';
      expect(describedBy).toContain(hint.id);
      expect(describedBy).toContain(error.id);
    });
  });

  describe('Disabled State', () => {
    it('trigger has disabled attribute', () => {
      render(<Select disabled options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toBeDisabled();
    });

    it('disabled trigger is not reachable via Tab', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Select label="Aktívne" id="active" options={defaultOptions} />
          <Select label="Neaktívne" id="disabled-select" disabled options={defaultOptions} />
        </div>,
      );
      await user.tab();
      expect(document.getElementById('active')).toHaveFocus();
      await user.tab();
      expect(document.getElementById('disabled-select')).not.toHaveFocus();
    });
  });

  describe('Size Variants', () => {
    it('large (default) adds idsk-select--lg class', () => {
      render(<Select options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toHaveClass('idsk-select--lg');
    });

    it('small size adds idsk-select--sm class', () => {
      render(<Select size="sm" options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toHaveClass('idsk-select--sm');
    });
  });

  describe('Autocomplete', () => {
    it('passes autoComplete attribute to the trigger', () => {
      render(<Select autoComplete="country" options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toHaveAttribute('autocomplete', 'country');
    });
  });

  describe('Name attribute', () => {
    it('accepts a name prop and renders the trigger without error', () => {
      render(<Select name="country" options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe('Keyboard Navigation', () => {
    it('Tab moves focus to trigger', async () => {
      const user = userEvent.setup();
      render(<Select label="Krajina" options={defaultOptions} />);
      await user.tab();
      expect(screen.getByRole('combobox')).toHaveFocus();
    });

    it('Shift+Tab removes focus from trigger', async () => {
      const user = userEvent.setup();
      render(<Select label="Krajina" options={defaultOptions} />);
      screen.getByRole('combobox').focus();
      await user.tab({ shift: true });
      expect(screen.getByRole('combobox')).not.toHaveFocus();
    });
  });

  describe('Controlled value', () => {
    it('reflects the controlled value as displayed label text', () => {
      render(<Select value="cz" onChange={() => {}} options={defaultOptions} />);
      expect(screen.getByRole('combobox')).toHaveTextContent('Česká republika');
    });

    it('controlled empty value shows idsk-select--empty class', () => {
      render(
        <Select value="" onChange={() => {}} placeholder="Vyberte" options={defaultOptions} />,
      );
      expect(screen.getByRole('combobox')).toHaveClass('idsk-select--empty');
    });

    it('controlled non-empty value does not show idsk-select--empty', () => {
      render(<Select value="sk" onChange={() => {}} options={defaultOptions} />);
      expect(screen.getByRole('combobox')).not.toHaveClass('idsk-select--empty');
    });
  });
});
