import React from 'react';

import { cn } from '../../lib/utils';
import CheckIcon from '../../assets/icons/CheckIcon.tsx';
import ListAltIcon from '../../assets/icons/ListAltIcon.tsx';

export interface StepperItemProps extends React.HTMLAttributes<HTMLLIElement> {
  label: string;
  stepNumber: number;
  isCompleted?: boolean;
  isActive?: boolean;
  isSummary?: boolean;
  isColEnd?: boolean;
  isColStart?: boolean;
  onClick?: () => void;
}

function StepperItem({
  label,
  stepNumber,
  isCompleted = false,
  isActive = false,
  isSummary = false,
  isColEnd = false,
  isColStart = false,
  onClick,
  className,
  ...props
}: StepperItemProps) {
  const isClickable = !!onClick;

  const indicatorContent = isSummary ? (
    <ListAltIcon />
  ) : isCompleted ? (
    <CheckIcon />
  ) : (
    <span className="idsk-stepper__number">{stepNumber}</span>
  );

  const shouldAddSrInfo = !isActive && !isSummary;
  const stepStateLabel = isCompleted ? 'dokončený' : 'nedokončený';

  const stepContent = (
    <>
      {shouldAddSrInfo && <span className="sr-only">{stepNumber}. krok, </span>}
      <span className="idsk-stepper__indicator-col" aria-hidden="true">
        <span className="idsk-stepper__line idsk-stepper__line--top" />
        <span className="idsk-stepper__indicator">{indicatorContent}</span>
        <span className="idsk-stepper__line idsk-stepper__line--bottom" />
      </span>
      <span className="idsk-stepper__label">{label}</span>
      {shouldAddSrInfo && <span className="sr-only">, {stepStateLabel}</span>}
    </>
  );

  return (
    <li
      aria-current={isActive ? 'step' : undefined}
      className={cn(
        'idsk-stepper__item',
        isCompleted && 'idsk-stepper__item--completed',
        isActive && 'idsk-stepper__item--active',
        !isCompleted && !isActive && 'idsk-stepper__item--upcoming',
        isSummary && 'idsk-stepper__item--summary',
        isColEnd && 'idsk-stepper__item--col-end',
        isColStart && 'idsk-stepper__item--col-start',
        className,
      )}
      {...props}
    >
      {isClickable ? (
        <button type="button" className="idsk-stepper__step" onClick={onClick}>
          {stepContent}
        </button>
      ) : (
        <div className="idsk-stepper__step">{stepContent}</div>
      )}
    </li>
  );
}

export { StepperItem };
