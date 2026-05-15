import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Checkbox, CheckboxGroup } from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly with label', () => {
    render(<Checkbox label="Option 1" />);
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
  });

  it('renders with unique id and links to label', () => {
    render(<Checkbox label="Option 1" id="custom-id" />);
    const input = screen.getByLabelText('Option 1');
    expect(input).toHaveAttribute('id', 'custom-id');
  });

  it('renders hint and links with aria-describedby', () => {
    render(<Checkbox label="Option 1" hint="This is a hint" id="test-id" />);
    const input = screen.getByLabelText('Option 1');
    const hint = screen.getByText('This is a hint');
    expect(hint).toHaveAttribute('id', 'test-id-hint');
    expect(input).toHaveAttribute('aria-describedby', 'test-id-hint');
  });

  it('renders error message and links with aria-describedby and aria-invalid', () => {
    render(<Checkbox label="Option 1" errorMessage="Error occurred" id="test-id" />);
    const input = screen.getByLabelText('Option 1');
    const error = screen.getByText('Error occurred');
    expect(error).toHaveAttribute('id', 'test-id-error');
    expect(input).toHaveAttribute('aria-describedby', 'test-id-error');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows asterisk when required', () => {
    render(<Checkbox label="Option 1" required />);
    const asterisk = screen.getByText('*');
    expect(asterisk).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByLabelText(/Option 1/)).toBeRequired();
  });

  it('is disabled when disabled prop is passed', () => {
    render(<Checkbox label="Option 1" disabled />);
    expect(screen.getByLabelText('Option 1')).toBeDisabled();
  });

  it('supports indeterminate state', () => {
    const { rerender } = render(<Checkbox label="Option 1" indeterminate />);
    const input = screen.getByLabelText('Option 1') as HTMLInputElement;
    expect(input.indeterminate).toBe(true);

    rerender(<Checkbox label="Option 1" indeterminate={false} />);
    expect(input.indeterminate).toBe(false);
  });
});

describe('CheckboxGroup', () => {
  it('renders within a fieldset with legend', () => {
    render(
      <CheckboxGroup legend="Choose options">
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
      </CheckboxGroup>,
    );
    expect(screen.getByRole('group', { name: 'Choose options' })).toBeInTheDocument();
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  it('links fieldset hint via aria-describedby', () => {
    render(
      <CheckboxGroup legend="Choose options" hint="Group hint">
        <Checkbox label="Option 1" />
      </CheckboxGroup>,
    );
    const group = screen.getByRole('group', { name: 'Choose options' });
    const hint = screen.getByText('Group hint');
    expect(group).toHaveAttribute('aria-describedby', expect.stringContaining(hint.id));
  });

  it('links fieldset error message via aria-describedby', () => {
    render(
      <CheckboxGroup legend="Choose options" errorMessage="Group error">
        <Checkbox label="Option 1" />
      </CheckboxGroup>,
    );
    const group = screen.getByRole('group', { name: 'Choose options' });
    const error = screen.getByText('Group error');
    expect(group).toHaveAttribute('aria-describedby', expect.stringContaining(error.id));
  });
});
