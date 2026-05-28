import React from 'react';

import { cn } from '../../lib/utils';

export interface StepperStepCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Current step number (1-based). */
  step: number;
  /** Total number of steps. */
  total: number;
}

function StepperStepCounter({ step, total, className, ...props }: StepperStepCounterProps) {
  return (
    <span className={cn('idsk-stepper-step-counter', className)} {...props}>
      <span className="idsk-stepper-step-counter__label">Krok</span>
      <span className="idsk-stepper-step-counter__value">{step}/{total}</span>
    </span>
  );
}

export { StepperStepCounter };