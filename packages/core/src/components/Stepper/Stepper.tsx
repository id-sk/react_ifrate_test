import React, { useId, useRef, useState } from 'react';

import { cn } from '../../lib/utils';
import { StepperItem } from './StepperItem';
import { StepperLoader } from './StepperLoader';
import { StepperStepCounter } from './StepperStepCounter';
import ExpandMoreIcon from '../../assets/icons/ExpandMoreIcon.tsx';
import ExpandLessIcon from '../../assets/icons/ExpandLessIcon.tsx';

export interface StepItem {
  label: string;
  isSummary?: boolean;
}

export interface StepperProps extends React.HTMLAttributes<HTMLElement> {
  steps: StepItem[];
  /** 0-indexed current step. */
  activeStep: number;
  /** When provided, completed steps become clickable navigation buttons. */
  onStepClick?: (index: number) => void;
  /** Whether the step list starts expanded. Defaults to false. */
  defaultExpanded?: boolean;
}

function Stepper({
  steps,
  activeStep,
  onStepClick,
  defaultExpanded = false,
  className,
  ...props
}: StepperProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const listId = useId();
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const total = steps.length;
  const clampedActive = Math.max(0, Math.min(activeStep, total - 1));
  const colMidpoint = Math.ceil(total / 2);

  const [maxReachedStep, setMaxReachedStep] = useState(clampedActive);
  const [prevClampedActive, setPrevClampedActive] = useState(clampedActive);
  if (clampedActive !== prevClampedActive) {
    setPrevClampedActive(clampedActive);
    setMaxReachedStep((prev) => Math.max(prev, clampedActive));
  }

  return (
    <nav aria-label="Kroky formuláru" className={cn('idsk-stepper', className)} {...props}>
      <div className="idsk-stepper__header">
        <button
          ref={toggleBtnRef}
          type="button"
          className="idsk-stepper__toggle-btn"
          aria-expanded={isExpanded}
          aria-controls={listId}
          aria-label={isExpanded ? 'Skryť zoznam krokov' : 'Zobraziť zoznam krokov'}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <span className="idsk-stepper__toggle-icon" aria-hidden="true">
            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </span>
        </button>
        <div className="idsk-stepper__header-content">
          <StepperStepCounter step={clampedActive + 1} total={total} />
          <StepperLoader
            value={clampedActive + 1}
            max={total}
            label={`Krok ${clampedActive + 1} z ${total}`}
          />
        </div>
      </div>

      <div
        id={listId}
        className="idsk-stepper__dropdown"
        hidden={!isExpanded}
        aria-hidden={!isExpanded}
        role="region"
        aria-labelledby={`${listId}-title`}
      >
        <h3 id={`${listId}-title`} className="idsk-stepper__dropdown-title">
          Prejsť na krok:
        </h3>
        <ol className="idsk-stepper__list">
          {steps.map((step, index) => {
            const isCompleted = index < clampedActive;
            const isActive = index === clampedActive;
            const isLast = index === total - 1;
            const isColEnd = index === colMidpoint - 1 && !isLast;
            const isColStart = index === colMidpoint;
            const canClick =
              onStepClick !== undefined && !isActive && (step.isSummary || index <= maxReachedStep);

            return (
              <StepperItem
                key={step.label}
                label={step.label}
                stepNumber={index + 1}
                isCompleted={isCompleted}
                isActive={isActive}
                isSummary={step.isSummary}
                isColEnd={isColEnd}
                isColStart={isColStart}
                onClick={
                  canClick
                    ? () => {
                        onStepClick(index);
                        setIsExpanded(false);
                        toggleBtnRef.current?.focus();
                      }
                    : undefined
                }
              />
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export { Stepper };
