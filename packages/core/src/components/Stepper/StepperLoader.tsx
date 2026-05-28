import React from 'react';

import { cn } from '../../lib/utils';

export interface StepperLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current value (e.g. current step, 1-based). */
  value: number;
  /** Minimum value. Defaults to 1. */
  min?: number;
  /** Maximum value (e.g. total steps). */
  max: number;
  /** Accessible label for the progress bar. */
  label?: string;
}

function StepperLoader({ value, min = 1, max, label, className, ...props }: StepperLoaderProps) {
  const percent = max > 0 ? (value / max) * 100 : 0;

  return (
    <div
      className={cn('idsk-stepper-loader', className)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-label={label}
      {...props}
    >
      <div className="idsk-stepper-loader__fill" style={{ width: `${percent}%` }} />
    </div>
  );
}

export { StepperLoader };