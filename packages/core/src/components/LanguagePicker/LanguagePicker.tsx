import { DropdownMenu } from 'radix-ui';
import React, { useState } from 'react';

import ArrowDropDownIcon from '../../assets/icons/ArrowDropDownIcon';
import ArrowDropUpIcon from '../../assets/icons/ArrowDropUpIcon';
import { cn } from '../../lib/utils';

export interface LanguageOption {
  value: string;
  label: string;
}

export interface LanguagePickerProps {
  className?: string;
  languages?: LanguageOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onDark?: boolean;
}

const LanguagePicker = React.forwardRef<HTMLButtonElement, LanguagePickerProps>(
  (
    {
      className,
      languages = [],
      value,
      defaultValue,
      onValueChange,
      open,
      defaultOpen = false,
      onOpenChange,
      onDark = false,
    },
    ref,
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isOpen = open ?? uncontrolledOpen;
    const pointerHandledRef = React.useRef(false);

    const [uncontrolledValue, setUncontrolledValue] = useState(
      defaultValue ?? languages[0]?.value ?? '',
    );
    const currentValue = value ?? uncontrolledValue;
    const currentLabel = languages.find((l) => l.value === currentValue)?.label ?? currentValue;

    function handleOpenChange(nextOpen: boolean) {
      if (open === undefined) setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    }

    function handleSelect(langValue: string) {
      if (value === undefined) setUncontrolledValue(langValue);
      onValueChange?.(langValue);
    }

    return (
      <DropdownMenu.Root open={isOpen} onOpenChange={handleOpenChange}>
        <DropdownMenu.Trigger
          ref={ref}
          aria-haspopup="listbox"
          className={cn(
            'idsk-button idsk-button--tertiary idsk-button--sm',
            onDark && !isOpen ? 'idsk-button--color-white' : '',
            isOpen && 'idsk-language-picker__trigger--open',
            className,
          )}
          onPointerDown={() => {
            pointerHandledRef.current = true;
          }}
          onClick={() => {
            // Radix's DropdownMenu.Trigger only reacts to onPointerDown/onKeyDown.
            // Assistive tech (JAWS/NVDA/VoiceOver) can activate a button by dispatching
            // a bare "click" with no preceding pointerdown, which Radix then ignores.
            if (!pointerHandledRef.current) handleOpenChange(!isOpen);
            pointerHandledRef.current = false;
          }}
        >
          <span className="idsk-button__text" lang={currentValue}>
            {currentLabel}
          </span>
          <span className="idsk-button__icon" aria-hidden="true">
            {isOpen ? <ArrowDropUpIcon size={25} /> : <ArrowDropDownIcon size={25} />}
          </span>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="idsk-language-picker__dropdown"
            align="end"
            sideOffset={5}
            collisionPadding={8}
          >
            {languages.map((lang) => (
              <DropdownMenu.Item
                key={lang.value}
                role="menuitemradio"
                aria-checked={lang.value === currentValue}
                lang={lang.value}
                className="idsk-language-picker__item"
                {...(lang.value === currentValue ? { 'data-selected': '' } : {})}
                onSelect={() => handleSelect(lang.value)}
              >
                {lang.label}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
);

LanguagePicker.displayName = 'LanguagePicker';

export { LanguagePicker };
