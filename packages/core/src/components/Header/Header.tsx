import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const headerVariants = cva('idsk-header', {
  variants: {
    variant: {
      default: 'idsk-header--default',
      transparent: 'idsk-header--transparent',
    },
    sticky: {
      true: 'idsk-header--sticky',
    },
  },
  defaultVariants: {
    variant: 'default',
    sticky: false,
  },
});

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof headerVariants> {}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, variant, sticky, children, ...props }, ref) => (
    <header
      ref={ref}
      data-idsk="header"
      className={cn(headerVariants({ variant, sticky, className }))}
      {...props}
    >
      {children}
    </header>
  ),
);

Header.displayName = 'Header';

export { Header };
