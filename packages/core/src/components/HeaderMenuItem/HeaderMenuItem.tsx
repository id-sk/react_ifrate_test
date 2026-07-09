import { cva, type VariantProps } from 'class-variance-authority';
import { DropdownMenu } from 'radix-ui';
import React, { useState } from 'react';

import KeyboardArrowDownIcon from '../../assets/icons/KeyboardArrowDownIcon';
import KeyboardArrowUpIcon from '../../assets/icons/KeyboardArrowUpIcon';
import { cn } from '../../lib/utils';

const headerMenuItemVariants = cva('idsk-header-menu-item', {
  variants: {
    variant: {
      link: 'idsk-header-menu-item--link',
      dropdown: 'idsk-header-menu-item--dropdown',
    },
    active: {
      true: 'idsk-header-menu-item--active',
    },
  },
  defaultVariants: {
    variant: 'link',
  },
});

export interface HeaderMenuDropdownItem {
  /** Unique key — falls back to `label` when omitted. */
  id?: string;
  /** Label shown in the dropdown panel. */
  label: string;
  /** When provided, the item renders as an `<a>` tag. */
  href?: string;
  /** Called when this item is selected. */
  onClick?: () => void;
}

export interface HeaderMenuItemProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof headerMenuItemVariants> {
  /** Navigation target URL. When provided and `variant="link"`, renders an `<a>` tag. */
  href?: string;
  /** Items shown in the dropdown panel (only for `variant="dropdown"`). */
  dropdownItems?: HeaderMenuDropdownItem[];
  /** Controlled open state of the dropdown. */
  open?: boolean;
  /** Default open state (uncontrolled). */
  defaultOpen?: boolean;
  /** Called when the dropdown open state changes. */
  onOpenChange?: (open: boolean) => void;
}

const HeaderMenuItem = React.forwardRef<HTMLElement, HeaderMenuItemProps>(
  (
    {
      className,
      variant,
      active,
      href,
      children,
      onClick,
      dropdownItems = [],
      open,
      defaultOpen = false,
      onOpenChange,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isOpen = open ?? uncontrolledOpen;
    const pointerHandledRef = React.useRef(false);

    function handleOpenChange(next: boolean) {
      if (open === undefined) setUncontrolledOpen(next);
      onOpenChange?.(next);
    }

    if (variant === 'dropdown') {
      return (
        <DropdownMenu.Root open={isOpen} onOpenChange={handleOpenChange}>
          <DropdownMenu.Trigger
            ref={ref as React.Ref<HTMLButtonElement>}
            data-idsk="header-menu-item"
            className={cn(
              headerMenuItemVariants({ variant, active, className }),
              isOpen && 'idsk-header-menu-item--open',
            )}
            aria-current={active ? 'page' : undefined}
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
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
          >
            <span className="idsk-header-menu-item__content">
              <span className="idsk-header-menu-item__label">{children}</span>
              <span className="idsk-header-menu-item__icon" aria-hidden="true">
                {isOpen ? <KeyboardArrowUpIcon size={25} /> : <KeyboardArrowDownIcon size={25} />}
              </span>
            </span>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="idsk-header-menu-item__panel"
              align="start"
              sideOffset={5}
            >
              {dropdownItems.map((item) => {
                const key = item.id ?? item.label;
                return (
                  <DropdownMenu.Item
                    key={key}
                    className="idsk-header-menu-item__panel-item"
                    asChild={!!item.href}
                    onSelect={() => item.onClick?.()}
                  >
                    {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
                  </DropdownMenu.Item>
                );
              })}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      );
    }

    const classes = cn(headerMenuItemVariants({ variant, active, className }));

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          aria-current={active ? 'page' : undefined}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          data-idsk="header-menu-item"
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          <span className="idsk-header-menu-item__content">
            <span className="idsk-header-menu-item__label">{children}</span>
          </span>
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        className={classes}
        aria-current={active ? 'page' : undefined}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        data-idsk="header-menu-item"
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        <span className="idsk-header-menu-item__content">
          <span className="idsk-header-menu-item__label">{children}</span>
        </span>
      </button>
    );
  },
);

HeaderMenuItem.displayName = 'HeaderMenuItem';

export { HeaderMenuItem, headerMenuItemVariants };
