import React from 'react';

import { cn } from '../../lib/utils';

export interface StepperLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Aktuálna hodnota (napr. aktuálny krok, 1-indexovaný). */
  value: number;
  /** Minimálna hodnota. Predvolene 1. */
  min?: number;
  /** Maximálna hodnota (napr. celkový počet krokov). */
  max: number;
  /** Dostupný popis pre lištu priebehu. */
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
