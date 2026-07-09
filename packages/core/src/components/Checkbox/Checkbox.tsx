import React, { useEffect, useId, useRef } from 'react';
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import CheckIcon from '../../assets/icons/CheckIcon.tsx';
import RemoveIcon from '../../assets/icons/RemoveIcon.tsx';
import { Tooltip, type TooltipProps } from '../Tooltip';

const checkboxVariants = cva('idsk-checkbox', {
  variants: {
    size: {
      default: '',
      sm: 'idsk-checkbox--sm',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface CheckboxProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkboxVariants> {
  ref?: React.Ref<HTMLInputElement>;
  label: React.ReactNode;
  hint?: React.ReactNode;
  errorMessage?: React.ReactNode;
  containerClassName?: string;
  labelClassName?: string;
  tooltip?: TooltipProps;
  indeterminate?: boolean;
}

function Checkbox({
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
  indeterminate,
  checked,
  ref,
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id || generatedId;
  const hintId = `${checkboxId}-hint`;
  const errorId = `${checkboxId}-error`;
  const internalRef = useRef<HTMLInputElement>(null);

  // Synchronize indeterminate state
  useEffect(() => {
    const element = internalRef.current;
    if (element) {
      element.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  // Merge refs
  const setRefs = (node: HTMLInputElement) => {
    (internalRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
    }
  };

  const ariaDescribedBy = [props['aria-describedby'], hint ? hintId : null]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cn(checkboxVariants({ size }), containerClassName)}>
      <input
        {...props}
        ref={setRefs}
        type="checkbox"
        id={checkboxId}
        required={required}
        checked={checked}
        aria-invalid={errorMessage ? 'true' : undefined}
        aria-describedby={ariaDescribedBy || undefined}
        aria-errormessage={errorMessage ? errorId : undefined}
        className={cn('idsk-checkbox__input', className)}
      />
      <label htmlFor={checkboxId} className={cn('idsk-checkbox__label', labelClassName)}>
        {label}
        {required && (
          <span aria-hidden="true" className="idsk-checkbox__required">
            *
          </span>
        )}
        {tooltip && <Tooltip {...tooltip} />}
      </label>
      <span aria-hidden="true" className="idsk-checkbox__indicator idsk-checkbox__indicator--check">
        <CheckIcon size={size === 'sm' ? 16 : 25} />
      </span>
      <span
        aria-hidden="true"
        className="idsk-checkbox__indicator idsk-checkbox__indicator--indeterminate"
      >
        <RemoveIcon size={size === 'sm' ? 16 : 25} />
      </span>
      {hint && (
        <div id={hintId} className="idsk-checkbox__hint">
          {hint}
        </div>
      )}
      {errorMessage && (
        <div id={errorId} className="idsk-checkbox__error-message" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export interface CheckboxGroupProps {
  legend: React.ReactNode;
  hint?: React.ReactNode;
  errorMessage?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
  tooltip?: TooltipProps;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
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
      className={cn('idsk-checkbox-group', className)}
      aria-invalid={errorMessage ? 'true' : undefined}
      aria-describedby={ariaDescribedBy}
      aria-errormessage={errorMessage ? errorId : undefined}
    >
      <legend className="idsk-checkbox-group__legend">
        <span className="idsk-checkbox-group__legend-content">
          {legend}
          {required && (
            <span aria-hidden="true" className="idsk-checkbox__required">
              *
            </span>
          )}
          {tooltip && <Tooltip {...tooltip} />}
        </span>
      </legend>
      {hint && (
        <div id={hintId} className="idsk-checkbox-group__hint">
          {hint}
        </div>
      )}
      {errorMessage && (
        <div id={errorId} className="idsk-checkbox-group__error-message" role="alert">
          {errorMessage}
        </div>
      )}
      <div className="idsk-checkbox-group__items">{children}</div>
    </fieldset>
  );
};

export { Checkbox, CheckboxGroup };
