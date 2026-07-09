import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import React from 'react';

import { cn } from '../../lib/utils';

const buttonVariants = cva('idsk-button', {
  variants: {
    variant: {
      primary: 'idsk-button--primary',
      secondary: 'idsk-button--secondary',
      tertiary: 'idsk-button--tertiary',
      tertiaryNoPadding: 'idsk-button--tertiary-nopadding',
    },
    colorScheme: {
      primary: 'idsk-button--color-primary',
      error: 'idsk-button--color-error',
      success: 'idsk-button--color-success',
      white: 'idsk-button--color-white',
    },
    size: {
      sm: 'idsk-button--sm',
      md: 'idsk-button--md',
      lg: 'idsk-button--lg',
    },
    iconOnly: {
      true: 'idsk-button--icon-only',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'lg',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
  /**
   * Ak je pravda, tlačidlo sa bude vykresľovať ako podradená komponenta (pomocou Radix UI Slot).
   * Užitočné na vykresľovanie tlačidla ako odkazu alebo iného prvku pri zachovaní štýlov.
   */
  asChild?: boolean;
  /** Ikona vykresľovaná pred označením tlačidla. Automaticky obalená v aria-hidden. */
  leftIcon?: React.ReactNode;
  /** Ikona vykresľovaná za označením tlačidla. Automaticky obalená v aria-hidden. */
  rightIcon?: React.ReactNode;
  /**
   * Vykresľuje tlačidlo so samými ikonami (bez viditeľného textu). Rovnaké odsadenie zo všetkých strán.
   * Vyžaduje `aria-label` pre dostupnosť, keď nie je prítomný žiadny viditeľný text.
   */
  iconOnly?: boolean;
}

/**
 * Button component for user interaction.
 *
 * It supports different variants, sizes, and can be rendered as a different element using `asChild`.
 */
function Button({
  className,
  variant,
  colorScheme,
  size,
  iconOnly,
  asChild = false,
  children,
  onClick,
  leftIcon,
  rightIcon,
  ref,
  ...props
}: ButtonProps) {
  // Prevent accidental double-click activations (e.g. accidental form re-submissions).
  // A 300 ms guard window blocks subsequent clicks after the first one fires.
  const preventingRef = React.useRef(false);
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (preventingRef.current) return;
      preventingRef.current = true;
      setTimeout(() => {
        preventingRef.current = false;
      }, 300);
      onClick?.(e);
    },
    [onClick],
  );

  const Comp = asChild ? Slot.Root : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, colorScheme, size, iconOnly, className }))}
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={handleClick}
      draggable={asChild ? 'false' : undefined}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {leftIcon != null && <span aria-hidden="true">{leftIcon}</span>}
          {children != null && <span>{children}</span>}
          {rightIcon != null && <span aria-hidden="true">{rightIcon}</span>}
        </>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
