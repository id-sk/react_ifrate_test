import React from 'react';

import { cn } from '../../lib/utils';
import { HeaderMenuItem } from '../HeaderMenuItem';
import type { HeaderMenuDropdownItem, HeaderMenuItemProps } from '../HeaderMenuItem';

export type { HeaderMenuDropdownItem };

export interface WebsiteNavigationItem extends Pick<
  HeaderMenuItemProps,
  'variant' | 'active' | 'onClick' | 'open' | 'defaultOpen' | 'onOpenChange'
> {
  /** Jedinečný kľúč — vracia sa na `label|href` ak je vynechaný. */
  id?: string;
  /** Text štítka. */
  label: string;
  /** Cieľová URL navigácie (len pre `variant="link"`). */
  href?: string;
  /** Položky zobrazené v rozbaľovacom paneli (len pre `variant="dropdown"`). */
  dropdownItems?: HeaderMenuDropdownItem[];
}

export interface WebsiteNavigationProps extends React.HTMLAttributes<HTMLElement> {
  /** Položky navigácie na vykreslenie. */
  items: WebsiteNavigationItem[];
  /** Prístupný popis pre `<nav>` orientačný bod. */
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
        <ul className="idsk-website-nav__list">
          {items.map((item) => {
            const itemKey = item.id ?? `${item.label}|${item.href ?? ''}`;
            return (
              <li key={itemKey} className="idsk-website-nav__list-item">
                <HeaderMenuItem
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
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  ),
);

WebsiteNavigation.displayName = 'WebsiteNavigation';

export { WebsiteNavigation };
