import React, { useId } from 'react';
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Tooltip, type TooltipProps } from '../Tooltip';

const radioVariants = cva('idsk-radio', {
  variants: {
    size: {
      default: '',
      sm: 'idsk-radio--sm',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface RadioProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof radioVariants> {
  ref?: React.Ref<HTMLInputElement>;
  label: React.ReactNode;
  hint?: React.ReactNode;
  errorMessage?: React.ReactNode;
  containerClassName?: string;
  labelClassName?: string;
  tooltip?: TooltipProps;
}

function Radio({
  id,
  label,
  hint,
  errorMessage,
  required,
  className,
  containerClassName,
  labelClassName,
  size,
  tooltip,
  ref,
  ...props
}: RadioProps) {
  const generatedId = useId();
  const radioId = id || generatedId;
  const hintId = `${radioId}-hint`;
  const errorId = `${radioId}-error`;

  const ariaDescribedBy = [props['aria-describedby'], hint ? hintId : null]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cn(radioVariants({ size }), containerClassName)}>
      <input
        {...props}
        ref={ref}
        type="radio"
        id={radioId}
        required={required}
        aria-invalid={errorMessage ? 'true' : undefined}
        aria-describedby={ariaDescribedBy || undefined}
        aria-errormessage={errorMessage ? errorId : undefined}
        className={cn('idsk-radio__input', className)}
      />
      <label htmlFor={radioId} className={cn('idsk-radio__label', labelClassName)}>
        {label}
        {required && (
          <span aria-hidden="true" className="idsk-radio__required">
            *
          </span>
        )}
        {tooltip && <Tooltip {...tooltip} />}
      </label>
      {hint && (
        <div id={hintId} className="idsk-radio__hint">
          {hint}
        </div>
      )}
      {errorMessage && (
        <div id={errorId} className="idsk-radio__error-message">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export interface RadioGroupProps {
  legend: React.ReactNode;
  hint?: React.ReactNode;
  errorMessage?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
  tooltip?: TooltipProps;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  legend,
  hint,
  errorMessage,
  children,
  className,
  required,
  tooltip,
}) => {
  const generatedId = useId();
  const hintId = `${generatedId}-hint`;
  const errorId = `${generatedId}-error`;

  const ariaDescribedBy = hint ? hintId : undefined;

  return (
    <fieldset
      role="radiogroup"
      className={cn('idsk-radio-group', className)}
      aria-invalid={errorMessage ? 'true' : undefined}
      aria-describedby={ariaDescribedBy}
      aria-errormessage={errorMessage ? errorId : undefined}
    >
      <legend className="idsk-radio-group__legend">
        <span className="idsk-radio-group__legend-content">
          {legend}
          {required && (
            <span aria-hidden="true" className="idsk-radio__required">
              *
            </span>
          )}
          {tooltip && <Tooltip {...tooltip} />}
        </span>
      </legend>
      {hint && (
        <div id={hintId} className="idsk-radio-group__hint">
          {hint}
        </div>
      )}
      {errorMessage && (
        <div id={errorId} className="idsk-radio-group__error-message">
          {errorMessage}
        </div>
      )}
      <div className="idsk-radio-group__items">{children}</div>
    </fieldset>
  );
};

export { Radio, RadioGroup };
