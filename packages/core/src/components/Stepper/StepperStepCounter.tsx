import React from 'react';

import { cn } from '../../lib/utils';

export interface StepperStepCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Číslo aktuálneho kroku (1-indexovaný). */
  step: number;
  /** Celkový počet krokov. */
  total: number;
}

function StepperStepCounter({ step, total, className, ...props }: StepperStepCounterProps) {
  return (
    <span className={cn('idsk-stepper-step-counter', className)} {...props}>
      <span className="idsk-stepper-step-counter__label">Krok</span>
      <span className="idsk-stepper-step-counter__value">
        {step}/{total}
      </span>
    </span>
  );
}

export { StepperStepCounter };
