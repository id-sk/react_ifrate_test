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
   * If true, the button will be rendered as a child component (using Radix UI Slot).
   * Useful for rendering the button as a link or other element while maintaining styles.
   */
  asChild?: boolean;
  /** Icon rendered before the button label. Wrapped in aria-hidden automatically. */
  startIcon?: React.ReactNode;
  /** Icon rendered after the button label. Wrapped in aria-hidden automatically. */
  endIcon?: React.ReactNode;
  /**
   * Renders a square icon-only button (no visible text). Equal padding on all sides.
   * Requires `aria-label` for accessibility when no visible text is present.
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
  startIcon,
  endIcon,
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
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {startIcon != null && <span aria-hidden="true">{startIcon}</span>}
          {children != null && <span>{children}</span>}
          {endIcon != null && <span aria-hidden="true">{endIcon}</span>}
        </>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
