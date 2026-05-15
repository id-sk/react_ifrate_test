/**
 * Tooltip — WCAG 2.1 compliant contextual help component.
 *
 * IMPORTANT: `content` must be plain text only (max 290 characters).
 * Do NOT pass interactive elements (links, buttons) — this violates
 * WCAG 2.1 SC 1.4.13 and breaks keyboard / screen-reader navigation.
 */

import { Tooltip as RadixTooltip } from 'radix-ui';
import React, { useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import InfoOutlineIcon from '../../assets/icons/InfoOutlineIcon.tsx';

export interface TooltipProps {
  /** Preferred display direction. Falls back automatically when viewport space is insufficient. */
  preferredPosition?: 'top' | 'bottom' | 'left' | 'right';
  /** Visible label rendered to the left of the info icon. */
  label?: string;
  /**
   * Tooltip body text — plain text only, max 290 characters.
   * Do NOT pass interactive elements (links, buttons): this violates WCAG 2.1 SC 1.4.13.
   */
  content: string;
  /** Accessible name for the trigger button, announced by screen readers. */
  ariaLabel?: string;
  /** Additional class names applied to the outer wrapper. */
  className?: string;
  /** Start with the tooltip open — useful for documentation and testing. */
  defaultOpen?: boolean;
}

const MAX_CONTENT_LENGTH = 290;

const Tooltip: React.FC<TooltipProps> = ({
  preferredPosition = 'top',
  label,
  content,
  ariaLabel,
  className,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const [isTouchDevice] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(hover: none) and (pointer: coarse)').matches
      : false,
  );
  // Prevents Radix from reopening via focus/hover immediately after a manual click-to-close.
  const manuallyClosedRef = useRef(false);

  if (process.env.NODE_ENV !== 'production' && content.length > MAX_CONTENT_LENGTH) {
    console.warn(
      `[Tooltip] content exceeds ${MAX_CONTENT_LENGTH} characters (${content.length}). ` +
        'Long tooltips are hard to read — consider shortening the text.',
    );
  }

  const handleOpenChange = (nextOpen: boolean) => {
    // We only allow programmatic opening (via click/keypress) OR closing.
    // Radix triggers onOpenChange(true) on hover or focus.
    // We want to ignore those.
    if (nextOpen && !manuallyClosedRef.current && !open) {
      // If it's trying to open, but it's not from our click (which sets open=true already),
      // we ignore it.
      return;
    }
    setOpen(nextOpen);
    if (!nextOpen) {
      manuallyClosedRef.current = false;
    }
  };

  const handleClick = () => {
    // Prevent Radix from handling the click in its own way if necessary
    const next = !open;
    manuallyClosedRef.current = false; // reset
    setOpen(next);
  };

  const handleBlur = () => {
    manuallyClosedRef.current = false;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // Handle explicitly so the browser's native click-from-keypress doesn't double-toggle.
      e.preventDefault();
      handleClick();
    } else if (e.key === 'Escape') {
      manuallyClosedRef.current = true;
      setOpen(false);
    }
  };

  return (
    <RadixTooltip.Provider delayDuration={200}>
      <RadixTooltip.Root open={open} onOpenChange={handleOpenChange}>
        <div className={cn('idsk-tooltip__wrapper', className)}>
          {label && <span className="idsk-tooltip__label">{label}</span>}

          <RadixTooltip.Trigger asChild>
            <button
              type="button"
              aria-label={ariaLabel}
              aria-expanded={isTouchDevice ? open : undefined}
              onClick={handleClick}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className="idsk-tooltip__trigger"
            >
              <span aria-hidden="true">
                <InfoOutlineIcon size={25} />
                <span className="idsk-tooltip__trigger-text">i</span>
              </span>
            </button>
          </RadixTooltip.Trigger>
        </div>

        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={preferredPosition}
            avoidCollisions
            collisionPadding={10}
            sideOffset={8}
            className="idsk-tooltip__content"
            onPointerDownOutside={() => setOpen(false)}
          >
            {content}
            <RadixTooltip.Arrow asChild className="idsk-tooltip__arrow" width={25} height={18}>
              <svg
                width="25"
                height="18"
                viewBox="0 0 25 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7223 16.5C13.5676 18.5 10.6808 18.5 9.5261 16.5L-0.000174975 -5.78326e-07L24.2485 0L14.7223 16.5Z"
                  fill="currentColor"
                />
              </svg>
            </RadixTooltip.Arrow>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

Tooltip.displayName = 'Tooltip';

export { Tooltip };
