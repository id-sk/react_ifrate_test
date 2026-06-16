import { cva, type VariantProps } from 'class-variance-authority';
import { Label } from 'radix-ui';

import React, { useId, useState } from 'react';

import { cn } from '../../lib/utils';
import AsteriskIcon from '../../assets/icons/AsteriskIcon.tsx';
import WarningIcon from '../../assets/icons/WarningIcon.tsx';
import { Tooltip, type TooltipProps } from '../Tooltip';

const textareaVariants = cva('idsk-textarea', {
  variants: {
    variant: {
      default: 'idsk-textarea--default',
      error: 'idsk-textarea--error',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
  ref?: React.Ref<HTMLTextAreaElement>;
  label?: string;
  subheading?: string;
  required?: boolean;
  description?: string;
  disabled?: boolean;
  errorDescription?: string;
  tooltip?: TooltipProps;
  maxLength: number;
}

/**
 * Textarea component for multi-line text entry.
 */
function Textarea({
  className,
  variant,
  label,
  subheading,
  id,
  required,
  description,
  disabled,
  errorDescription,
  tooltip,
  maxLength,
  value,
  defaultValue,
  onChange,
  ref,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id || generatedId;
  const hintId = `${textareaId}-hint`;
  const errorId = `${textareaId}-error`;
  const counterSrId = `${textareaId}-counter-sr`;

  const isError = variant === 'error';

  // For uncontrolled usage, track char count via state; for controlled, derive from value directly.
  const [uncontrolledCount, setUncontrolledCount] = useState(
    () => String(defaultValue ?? '').length,
  );

  const charCount = value !== undefined ? String(value).length : uncontrolledCount;

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (value === undefined) {
      setUncontrolledCount(event.target.value.length);
    }
    onChange?.(event);
  };

  const ariaDescribedByParts = [
    description ? hintId : null,
    maxLength !== undefined ? counterSrId : null,
  ].filter(Boolean) as string[];

  const ariaDescribedBy =
    ariaDescribedByParts.length > 0 ? ariaDescribedByParts.join(' ') : undefined;

  return (
    <div className="idsk-textarea-container">
      {label && (
        <Label.Root htmlFor={textareaId} className="idsk-textarea__label">
          <span className="idsk-textarea__label-text">
            {label}{' '}
            {required ? (
              <span className="idsk-textarea__label-required" aria-hidden={true}>
                <AsteriskIcon size={7} />
              </span>
            ) : (
              <span className="idsk-textarea__label-not-required">(nepovinné pole)</span>
            )}
            {tooltip && <Tooltip {...tooltip} />}
          </span>

          {subheading && <span className="idsk-textarea__subheading">{subheading}</span>}
        </Label.Root>
      )}
      <div className={cn('idsk-textarea__wrapper')}>
        <textarea
          id={textareaId}
          className={cn(textareaVariants({ variant, className }))}
          ref={ref}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          onChange={handleOnChange}
          value={value}
          defaultValue={defaultValue}
          {...props}
          aria-invalid={isError ? true : undefined}
          aria-describedby={ariaDescribedBy}
          aria-errormessage={isError && errorDescription ? errorId : undefined}
        />

        {isError && (
          <span className="idsk-textarea__wrapper__error-icon">
            <WarningIcon size={20} />
          </span>
        )}

        {maxLength !== undefined && (
          <>
            <span className="idsk-character-count" aria-hidden="true">
              {charCount}/{maxLength}
            </span>
            <span id={counterSrId} className="idsk-character-count-sr sr-only" aria-live="polite">
              Napísaných {charCount} znakov z maximálne {maxLength}.
            </span>
          </>
        )}
      </div>

      <div className="idsk-textarea__footer">
        <div className="idsk-textarea__footer-left">
          {description && (
            <span id={hintId} className="idsk-textarea__description">
              {description}
            </span>
          )}

          {isError && errorDescription && (
            <span id={errorId} className="idsk-textarea__error-description">
              {errorDescription}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export { Textarea, textareaVariants };
