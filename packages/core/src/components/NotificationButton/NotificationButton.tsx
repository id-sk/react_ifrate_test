import React from 'react';

import { cn } from '../../lib/utils';

export interface NotificationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to display inside the button. */
  icon: React.ReactNode;
  /** When true a red badge dot is rendered to signal a new notification. */
  hasNew?: boolean;
  /** Screen-reader text appended when a badge is present (visually hidden). */
  newLabel?: string;
}

const NotificationButton = React.forwardRef<HTMLButtonElement, NotificationButtonProps>(
  ({ className, icon, hasNew = false, newLabel = 'Nová notifikácia', ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      data-idsk="notification-button"
      className={cn('idsk-notification-btn idsk-focus-outline idsk-hover-outline', className)}
      {...props}
    >
      {/* icon-wrap is the 25×25 positioning context for the badge */}
      <span className="idsk-notification-btn__icon-wrap">
        <span aria-hidden="true" className="idsk-notification-btn__icon">
          {icon}
        </span>
        {hasNew && <span className="idsk-notification-btn__badge" aria-hidden="true" />}
      </span>
      {/* visually hidden label so screen readers know there's a new item */}
      {hasNew && <span className="sr-only">{newLabel}</span>}
    </button>
  ),
);

NotificationButton.displayName = 'NotificationButton';

export { NotificationButton };
