import React from 'react';

import { cn } from '../../lib/utils';
import { HeaderMenuItem } from '../HeaderMenuItem';
import type { HeaderMenuDropdownItem, HeaderMenuItemProps } from '../HeaderMenuItem';

export type { HeaderMenuDropdownItem };

export interface WebsiteNavigationItem extends Pick<
  HeaderMenuItemProps,
  'variant' | 'active' | 'onClick' | 'open' | 'defaultOpen' | 'onOpenChange'
> {
  /** Unique key — falls back to `label|href` when omitted. */
  id?: string;
  /** Label text. */
  label: string;
  /** Navigation target URL (only for `variant="link"`). */
  href?: string;
  /** Items shown in the dropdown panel (only for `variant="dropdown"`). */
  dropdownItems?: HeaderMenuDropdownItem[];
}

export interface WebsiteNavigationProps extends React.HTMLAttributes<HTMLElement> {
  /** Navigation items to render. */
  items: WebsiteNavigationItem[];
  /** Accessible label for the `<nav>` landmark. */
  ariaLabel?: string;
}

const WebsiteNavigation = React.forwardRef<HTMLElement, WebsiteNavigationProps>(
  ({ className, items, ariaLabel = 'Hlavná navigácia', ...props }, ref) => (
    <nav
      ref={ref}
      data-idsk="website-navigation"
      className={cn('idsk-website-nav', className)}
      aria-label={ariaLabel}
      {...props}
    >
      <div className="idsk-website-nav__container">
        {items.map((item) => {
          const itemKey = item.id ?? `${item.label}|${item.href ?? ''}`;
          return (
            <HeaderMenuItem
              key={itemKey}
              href={item.href}
              variant={item.variant}
              active={item.active}
              onClick={item.onClick}
              dropdownItems={item.dropdownItems}
              open={item.open}
              defaultOpen={item.defaultOpen}
              onOpenChange={item.onOpenChange}
            >
              {item.label}
            </HeaderMenuItem>
          );
        })}
      </div>
    </nav>
  ),
);

WebsiteNavigation.displayName = 'WebsiteNavigation';

export { WebsiteNavigation };
