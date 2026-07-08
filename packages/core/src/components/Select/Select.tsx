import { cva, type VariantProps } from 'class-variance-authority';
import { Label, Select as RadixSelect } from 'radix-ui';
import React, { useId, useState } from 'react';

import { cn } from '../../lib/utils';
import AsteriskIcon from '../../assets/icons/AsteriskIcon.tsx';
import ExpandMoreIcon from '../../assets/icons/ExpandMoreIcon.tsx';
import WarningIcon from '../../assets/icons/WarningIcon.tsx';
import { Tooltip, type TooltipProps } from '../Tooltip';

const selectVariants = cva('idsk-select', {
  variants: {
    variant: {
      default: 'idsk-select--default',
      error: 'idsk-select--error',
    },
    size: {
      default: 'idsk-select--lg',
      sm: 'idsk-select--sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

/** A single option rendered inside the Select dropdown. */
export interface SelectOption {
  value?: string;
  label: string;
  disabled?: boolean;
}

/** A labelled group of options (equivalent to HTML `<optgroup>`). */
export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

/** Props for the Select component. */
export interface SelectProps extends VariantProps<typeof selectVariants> {
  ref?: React.Ref<HTMLButtonElement>;
  id?: string;
  className?: string;
  label?: string;
  labelDescription?: string;
  required?: boolean;
  disabled?: boolean;
  inputDescription?: string;
  errorDescription?: string;
  tooltip?: TooltipProps;
  placeholder?: string;
  options?: SelectOption[];
  groups?: SelectOptionGroup[];
  name?: string;
  autoComplete?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** @deprecated Use onValueChange instead. Kept for back-compat; not invoked by the custom select. */
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

function Select({
  className,
  variant,
  size,
  label,
  labelDescription,
  id,
  required,
  inputDescription,
  disabled,
  errorDescription,
  tooltip,
  placeholder,
  options,
  groups,
  value,
  defaultValue,
  onValueChange,
  onChange,
  name,
  autoComplete,
  open,
  defaultOpen,
  onOpenChange,
  ref,
}: SelectProps) {
  if (process.env.NODE_ENV !== 'production' && onChange) {
    console.warn(
      '[idsk/Select] The `onChange` prop is deprecated and is never called. Use `onValueChange` instead.',
    );
  }
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const hintId = `${selectId}-hint`;
  const errorId = `${selectId}-error`;

  const isError = variant === 'error';
  const isControlled = value !== undefined;

  const [uncontrolledIsEmpty, setUncontrolledIsEmpty] = useState(
    defaultValue === undefined || defaultValue === '',
  );

  const isValueEmpty = isControlled ? value === '' : uncontrolledIsEmpty;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) setUncontrolledIsEmpty(false);
    onValueChange?.(newValue);
  };

  // Radix Select does not treat '' as a valid value — map to undefined (show placeholder)
  const radixValue = isControlled ? (value === '' ? undefined : value) : undefined;
  const radixDefaultValue =
    defaultValue === undefined || defaultValue === '' ? undefined : defaultValue;

  const ariaDescribedBy = inputDescription ? hintId : undefined;

  return (
    <div className="idsk-select-container">
      {label && (
        <Label.Root htmlFor={selectId} className="idsk-select__label">
          <span className="idsk-select__label-text">
            {label}{' '}
            {required ? (
              <span className="idsk-select__label-required" aria-hidden={true}>
                <AsteriskIcon size={7} />
              </span>
            ) : (
              <span className="idsk-select__label-not-required">(nepovinné pole)</span>
            )}
            {tooltip && <Tooltip {...tooltip} />}
          </span>
          {labelDescription && (
            <span className="idsk-select__label-description">{labelDescription}</span>
          )}
        </Label.Root>
      )}

      <div className="idsk-select__wrapper">
        <RadixSelect.Root
          value={isControlled ? radixValue : undefined}
          defaultValue={radixDefaultValue}
          onValueChange={handleValueChange}
          disabled={disabled}
          required={required}
          name={name}
          open={open}
          defaultOpen={defaultOpen}
          onOpenChange={onOpenChange}
        >
          <RadixSelect.Trigger
            id={selectId}
            ref={ref}
            className={cn(
              selectVariants({ variant, size }),
              isValueEmpty && 'idsk-select--empty',
              className,
            )}
            aria-invalid={isError ? true : undefined}
            aria-describedby={ariaDescribedBy}
            aria-errormessage={isError && errorDescription ? errorId : undefined}
            aria-required={required || undefined}
            {...(autoComplete ? { autoComplete } : {})}
          >
            <RadixSelect.Value placeholder={placeholder} className="idsk-select__value" />

            {isError && (
              <span className="idsk-select__error-icon" aria-hidden="true">
                <WarningIcon size={20} />
              </span>
            )}

            <RadixSelect.Icon asChild>
              <span className="idsk-select__chevron" aria-hidden="true">
                <ExpandMoreIcon size={20} />
              </span>
            </RadixSelect.Icon>
          </RadixSelect.Trigger>

          <RadixSelect.Portal>
            <RadixSelect.Content
              className="idsk-select__dropdown"
              position="popper"
              side="bottom"
              avoidCollisions={false}
              sideOffset={2}
            >
              <RadixSelect.Viewport className="idsk-select__dropdown-viewport">
                {groups
                  ? groups.map((group) => (
                      <RadixSelect.Group key={group.label}>
                        <RadixSelect.Label className="idsk-select__group-label">
                          {group.label}
                        </RadixSelect.Label>
                        {group.options.map((option) => (
                          <RadixSelect.Item
                            key={option.value ?? option.label}
                            value={option.value ?? option.label}
                            disabled={option.disabled}
                            className="idsk-select__item"
                          >
                            <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                          </RadixSelect.Item>
                        ))}
                      </RadixSelect.Group>
                    ))
                  : options?.map((option) => (
                      <RadixSelect.Item
                        key={option.value ?? option.label}
                        value={option.value ?? option.label}
                        disabled={option.disabled}
                        className="idsk-select__item"
                      >
                        <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                      </RadixSelect.Item>
                    ))}
              </RadixSelect.Viewport>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </div>

      {inputDescription && (
        <span id={hintId} className="idsk-select__description">
          {inputDescription}
        </span>
      )}

      {isError && errorDescription && (
        <span id={errorId} className="idsk-select__error-description">
          {errorDescription}
        </span>
      )}
    </div>
  );
}

export { Select, selectVariants };
