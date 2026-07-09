import React from 'react';

import { cn } from '../../lib/utils';

export interface NotificationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Ikona na zobrazenie v tlačidle. */
  icon: React.ReactNode;
  /** Keď je pravda, vykreslí sa červený bodkový odznak signalizujúci novú notifikáciu. */
  hasNew?: boolean;
  /** Text pridaný k aria-label, keď je prítomný odznak. */
  newLabel?: string;
}

const NotificationButton = React.forwardRef<HTMLButtonElement, NotificationButtonProps>(
  (
    {
      className,
      icon,
      hasNew = false,
      newLabel = 'Nová notifikácia',
      'aria-label': ariaLabel,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type="button"
      data-idsk="notification-button"
      className={cn('idsk-notification-btn idsk-focus-outline idsk-hover-outline', className)}
      aria-label={hasNew && ariaLabel ? `${ariaLabel} - ${newLabel}` : ariaLabel}
      {...props}
    >
      {/* icon-wrap is the 25×25 positioning context for the badge */}
      <span className="idsk-notification-btn__icon-wrap">
        <span aria-hidden="true" className="idsk-notification-btn__icon">
          {icon}
        </span>
        {hasNew && <span className="idsk-notification-btn__badge" aria-hidden="true" />}
      </span>
    </button>
  ),
);

NotificationButton.displayName = 'NotificationButton';

export { NotificationButton };
