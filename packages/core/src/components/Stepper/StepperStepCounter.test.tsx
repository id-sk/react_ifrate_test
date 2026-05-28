/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { StepperStepCounter } from './StepperStepCounter';

describe('StepperStepCounter', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders a span with base class', () => {
    render(<StepperStepCounter step={1} total={5} />);
    expect(document.querySelector('.idsk-stepper-step-counter')).toBeInTheDocument();
  });

  it('renders "Krok" label', () => {
    render(<StepperStepCounter step={2} total={4} />);
    expect(screen.getByText('Krok')).toBeInTheDocument();
  });

  it('renders step/total value', () => {
    render(<StepperStepCounter step={2} total={4} />);
    expect(screen.getByText('2/4')).toBeInTheDocument();
  });

  it('renders correct step and total for various combinations', () => {
    const { rerender } = render(<StepperStepCounter step={1} total={3} />);
    expect(screen.getByText('1/3')).toBeInTheDocument();

    rerender(<StepperStepCounter step={3} total={3} />);
    expect(screen.getByText('3/3')).toBeInTheDocument();

    rerender(<StepperStepCounter step={7} total={15} />);
    expect(screen.getByText('7/15')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    render(<StepperStepCounter step={1} total={3} className="extra-class" />);
    const el = document.querySelector('.idsk-stepper-step-counter');
    expect(el).toHaveClass('idsk-stepper-step-counter');
    expect(el).toHaveClass('extra-class');
  });

  it('forwards additional HTML attributes', () => {
    render(<StepperStepCounter step={1} total={3} data-testid="counter" />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  it('combined text content contains "Krok" and step/total', () => {
    render(<StepperStepCounter step={2} total={5} />);
    const el = document.querySelector('.idsk-stepper-step-counter')!;
    expect(el.textContent).toMatch(/Krok/);
    expect(el.textContent).toMatch(/2\/5/);
  });
});