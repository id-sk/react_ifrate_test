import React, { useState } from 'react';

import { cn } from '../../lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  collapseMobile?: boolean;
}

function BreadcrumbLink({ href, label }: { href?: string; label: string }) {
  if (href) {
    return (
      <a href={href} className="idsk-breadcrumbs__link idsk-focus-outline">
        {label}
      </a>
    );
  }
  return <span className="idsk-breadcrumbs__link">{label}</span>;
}

function BreadcrumbSeparator() {
  return (
    <span aria-hidden="true" className="idsk-breadcrumbs__separator">
      <svg
        width="5"
        height="10"
        viewBox="0 0 5 10"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M1 1.5L4 5L1 8.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Breadcrumbs({ items, collapseMobile = false, className, ...props }: BreadcrumbsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!items?.length) return null;

  const lastItem = items[items.length - 1];
  const linkItems = items.slice(0, -1);
  const hasCollapse = collapseMobile && linkItems.length > 2;

  const collapseAttrs = hasCollapse ? { 'data-collapse': '' } : {};
  const expandedAttrs = hasCollapse && isExpanded ? { 'data-expanded': '' } : {};

  return (
    <nav
      aria-label="Omrvinková navigácia"
      data-idsk="breadcrumbs"
      className={cn('idsk-breadcrumbs', className)}
      {...collapseAttrs}
      {...expandedAttrs}
      {...props}
    >
      <ol className="idsk-breadcrumbs__list">
        {linkItems.length > 0 && (
          <li className="idsk-breadcrumbs__item">
            <BreadcrumbLink href={linkItems[0].href} label={linkItems[0].label} />
            <BreadcrumbSeparator />
          </li>
        )}

        {hasCollapse && (
          <li className="idsk-breadcrumbs__item idsk-breadcrumbs__item--expand">
            <button
              type="button"
              className="idsk-breadcrumbs__expand-btn idsk-focus-outline"
              aria-expanded={isExpanded}
              aria-label="Zobraziť celú navigačnú cestu"
              onClick={() => setIsExpanded(true)}
            >
              &hellip;
            </button>
            <BreadcrumbSeparator />
          </li>
        )}

        {linkItems.slice(1, hasCollapse ? -1 : undefined).map((item, index) => (
          <li
            key={item.href ?? `${item.label}-${index}`}
            className={cn(
              'idsk-breadcrumbs__item',
              hasCollapse && 'idsk-breadcrumbs__item--middle',
            )}
          >
            <BreadcrumbLink href={item.href} label={item.label} />
            <BreadcrumbSeparator />
          </li>
        ))}

        {hasCollapse && linkItems.length > 1 && (
          <li className="idsk-breadcrumbs__item">
            <BreadcrumbLink
              href={linkItems[linkItems.length - 1].href}
              label={linkItems[linkItems.length - 1].label}
            />
            <BreadcrumbSeparator />
          </li>
        )}

        <li className="idsk-breadcrumbs__item idsk-breadcrumbs__item--current" aria-current="page">
          {lastItem.label}
        </li>
      </ol>
    </nav>
  );
}

export { Breadcrumbs };
