import { cva, type VariantProps } from 'class-variance-authority';
import { Label } from 'radix-ui';

import React, { useId } from 'react';

import { cn } from '../../lib/utils';
import AsteriskIcon from '../../assets/icons/AsteriskIcon.tsx';
import WarningIcon from '../../assets/icons/WarningIcon.tsx';
import { Tooltip, type TooltipProps } from '../Tooltip';

const inputVariants = cva('idsk-input', {
  variants: {
    variant: {
      default: 'idsk-input--default',
      error: 'idsk-input--error',
    },
    size: {
      default: 'idsk-input--lg',
      sm: 'idsk-input--sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  ref?: React.Ref<HTMLInputElement>;
  label?: string;
  labelDescription?: string;
  required?: boolean;
  inputDescription?: string;
  disabled?: boolean;
  errorDescription?: string;
  tooltip?: TooltipProps;
}

/**
 * Input component for text entry.
 */
function Input({
  className,
  variant,
  size,
  type = 'text',
  label,
  labelDescription,
  id,
  required,
  inputDescription,
  disabled,
  errorDescription,
  tooltip,
  ref,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;

  const isError = variant === 'error';

  const ariaDescribedBy = inputDescription ? hintId : undefined;

  return (
    <div className="idsk-input-container">
      {label && (
        <Label.Root htmlFor={inputId} className="idsk-input__label">
          <span className="idsk-input__label-text">
            {label}{' '}
            {required ? (
              <span
                className="idsk-input__label-required"
                aria-hidden={true}
                aria-label="Povinné pole"
              >
                <AsteriskIcon size={7} />
              </span>
            ) : (
              <span className="idsk-input__label-not-required">(nepovinné pole)</span>
            )}
            {tooltip && <Tooltip {...tooltip} />}
          </span>

          {labelDescription && (
            <span className="idsk-input__label-description">{labelDescription}</span>
          )}
        </Label.Root>
      )}
      <div className={cn('idsk-input__input-wrapper')}>
        <input
          id={inputId}
          type={type}
          className={cn(inputVariants({ variant, size, className }))}
          ref={ref}
          required={required}
          disabled={disabled}
          {...props}
          aria-invalid={isError ? true : undefined}
          aria-describedby={ariaDescribedBy}
          aria-errormessage={isError && errorDescription ? errorId : undefined}
        />

        {isError && (
          <span className="idsk-input__input-wrapper__error-icon">
            <WarningIcon size={20} />
          </span>
        )}
      </div>

      {inputDescription && (
        <span id={hintId} className="idsk-input__description">
          {inputDescription}
        </span>
      )}

      {isError && errorDescription && (
        <span id={errorId} className="idsk-input__error-description">
          {errorDescription}
        </span>
      )}
    </div>
  );
}

export { Input, inputVariants };
