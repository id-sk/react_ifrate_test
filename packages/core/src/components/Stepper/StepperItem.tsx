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
  isLast?: boolean;
  isColEnd?: boolean;
  onClick?: () => void;
}

function StepperItem({
  label,
  stepNumber,
  isCompleted = false,
  isActive = false,
  isSummary = false,
  isLast = false,
  isColEnd = false,
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

  const stepContent = (
    <>
      <span className="idsk-stepper__indicator" aria-hidden="true">
        {indicatorContent}
      </span>
      <span className="idsk-stepper__label">{label}</span>
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
      {!isLast && <div className="idsk-stepper__connector" aria-hidden="true" />}
    </li>
  );
}

export { StepperItem };