/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, it, expect, vi } from 'vitest';

import { axe } from '../../test/axe';
import { StepperItem } from './StepperItem';

const wrap = (ui: React.ReactElement) => render(<ol>{ui}</ol>);

describe('StepperItem', () => {
  afterEach(() => {
    cleanup();
  });

  const base = { label: 'Test krok', stepNumber: 2 };

  it('renders the label', () => {
    wrap(<StepperItem {...base} />);
    expect(screen.getByText('Test krok')).toBeInTheDocument();
  });

  it('renders step number for upcoming step', () => {
    wrap(<StepperItem {...base} />);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders as div when not clickable', () => {
    wrap(<StepperItem {...base} />);
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('renders as button when onClick provided', () => {
    wrap(<StepperItem {...base} onClick={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick when button clicked', async () => {
    const handler = vi.fn();
    wrap(<StepperItem {...base} onClick={handler} />);
    await userEvent.click(screen.getByRole('button'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('sets aria-current="step" when active', () => {
    wrap(<StepperItem {...base} isActive />);
    expect(screen.getByRole('listitem')).toHaveAttribute('aria-current', 'step');
  });

  it('does not set aria-current when not active', () => {
    wrap(<StepperItem {...base} />);
    expect(screen.getByRole('listitem')).not.toHaveAttribute('aria-current');
  });

  it('applies --upcoming class by default', () => {
    wrap(<StepperItem {...base} />);
    expect(screen.getByRole('listitem')).toHaveClass('idsk-stepper__item--upcoming');
  });

  it('applies --completed class', () => {
    wrap(<StepperItem {...base} isCompleted />);
    expect(screen.getByRole('listitem')).toHaveClass('idsk-stepper__item--completed');
  });

  it('applies --active class', () => {
    wrap(<StepperItem {...base} isActive />);
    expect(screen.getByRole('listitem')).toHaveClass('idsk-stepper__item--active');
  });

  it('applies --summary class', () => {
    wrap(<StepperItem {...base} isSummary />);
    expect(screen.getByRole('listitem')).toHaveClass('idsk-stepper__item--summary');
  });

  it('applies --col-end class', () => {
    wrap(<StepperItem {...base} isColEnd />);
    expect(screen.getByRole('listitem')).toHaveClass('idsk-stepper__item--col-end');
  });

  it('renders CheckIcon (svg) for completed step, not number', () => {
    const { container } = wrap(<StepperItem {...base} isCompleted />);
    expect(container.querySelector('.idsk-stepper__indicator svg')).toBeInTheDocument();
    expect(container.querySelector('.idsk-stepper__number')).toBeNull();
  });

  it('renders ListAltIcon (svg) for summary step, not number', () => {
    const { container } = wrap(<StepperItem {...base} isSummary />);
    expect(container.querySelector('.idsk-stepper__indicator svg')).toBeInTheDocument();
    expect(container.querySelector('.idsk-stepper__number')).toBeNull();
  });

  it('renders top and bottom connector lines', () => {
    const { container } = wrap(<StepperItem {...base} />);
    expect(container.querySelector('.idsk-stepper__line--top')).toBeInTheDocument();
    expect(container.querySelector('.idsk-stepper__line--bottom')).toBeInTheDocument();
  });

  it('merges extra className onto li', () => {
    wrap(<StepperItem {...base} className="extra" />);
    expect(screen.getByRole('listitem')).toHaveClass('extra');
  });

  it('forwards extra HTML attributes to li', () => {
    wrap(<StepperItem {...base} data-testid="step-item" />);
    expect(screen.getByTestId('step-item')).toBeInTheDocument();
  });

  it('indicator span has aria-hidden="true"', () => {
    const { container } = wrap(<StepperItem {...base} />);
    const indicator = container.querySelector('.idsk-stepper__indicator');
    expect(indicator).toHaveAttribute('aria-hidden', 'true');
  });

  it('label text is rendered inside idsk-stepper__label span', () => {
    const { container } = wrap(<StepperItem {...base} />);
    expect(container.querySelector('.idsk-stepper__label')).toHaveTextContent('Test krok');
  });

  // ---------------------------------------------------------------------------
  // Accessibility
  // ---------------------------------------------------------------------------
  describe('Accessibility', () => {
    it('has no a11y violations — upcoming step', async () => {
      const { container } = render(
        <ol>
          <StepperItem {...base} />
        </ol>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations — active step', async () => {
      const { container } = render(
        <ol>
          <StepperItem {...base} isActive />
        </ol>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations — completed clickable step', async () => {
      const { container } = render(
        <ol>
          <StepperItem {...base} isCompleted onClick={vi.fn()} />
        </ol>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations — summary step', async () => {
      const { container } = render(
        <ol>
          <StepperItem {...base} isSummary />
        </ol>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
