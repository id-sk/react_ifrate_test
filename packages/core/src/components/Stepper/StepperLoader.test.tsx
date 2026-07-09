/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { StepperLoader } from './StepperLoader';

describe('StepperLoader', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders an element with role progressbar', () => {
    render(<StepperLoader value={1} max={3} />);
    expect(document.querySelector('[role="progressbar"]')).toBeInTheDocument();
  });

  it('has base class idsk-stepper-loader', () => {
    render(<StepperLoader value={1} max={3} />);
    expect(document.querySelector('.idsk-stepper-loader')).toBeInTheDocument();
  });

  it('sets aria-valuenow, aria-valuemin, aria-valuemax', () => {
    render(<StepperLoader value={2} min={1} max={5} />);
    const el = document.querySelector('.idsk-stepper-loader');
    expect(el).toHaveAttribute('aria-valuenow', '2');
    expect(el).toHaveAttribute('aria-valuemin', '1');
    expect(el).toHaveAttribute('aria-valuemax', '5');
  });

  it('sets aria-label when label prop is provided', () => {
    render(<StepperLoader value={1} max={3} label="Krok 1 z 3" />);
    expect(document.querySelector('.idsk-stepper-loader')).toHaveAttribute(
      'aria-label',
      'Krok 1 z 3',
    );
  });

  it('fill width is 0% when value is 0', () => {
    render(<StepperLoader value={0} max={5} />);
    const fill = document.querySelector('.idsk-stepper-loader__fill') as HTMLElement;
    expect(fill.style.width).toBe('0%');
  });

  it('fill width is 100% when value equals max', () => {
    render(<StepperLoader value={5} max={5} />);
    const fill = document.querySelector('.idsk-stepper-loader__fill') as HTMLElement;
    expect(fill.style.width).toBe('100%');
  });

  it('fill width is 50% for value=1 max=2', () => {
    render(<StepperLoader value={1} max={2} />);
    const fill = document.querySelector('.idsk-stepper-loader__fill') as HTMLElement;
    expect(fill.style.width).toBe('50%');
  });

  it('merges custom className', () => {
    render(<StepperLoader value={1} max={3} className="extra" />);
    const el = document.querySelector('.idsk-stepper-loader');
    expect(el).toHaveClass('idsk-stepper-loader');
    expect(el).toHaveClass('extra');
  });

  it('defaults min to 1', () => {
    render(<StepperLoader value={2} max={4} />);
    expect(document.querySelector('.idsk-stepper-loader')).toHaveAttribute('aria-valuemin', '1');
  });

  it('does not set aria-label when label prop is not provided', () => {
    render(<StepperLoader value={1} max={3} />);
    expect(document.querySelector('.idsk-stepper-loader')).not.toHaveAttribute('aria-label');
  });

  it('fill width is 0% when max is 0 (division by zero guard)', () => {
    render(<StepperLoader value={0} max={0} />);
    const fill = document.querySelector('.idsk-stepper-loader__fill') as HTMLElement;
    expect(fill.style.width).toBe('0%');
  });

  it('forwards extra HTML attributes', () => {
    render(<StepperLoader value={1} max={3} data-testid="loader" />);
    expect(document.querySelector('[data-testid="loader"]')).toBeInTheDocument();
  });
});
