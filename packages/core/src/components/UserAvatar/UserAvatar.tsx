import React from 'react';

import PersonIcon from '../../assets/icons/PersonIcon';
import { cn } from '../../lib/utils';

/** Automaticky určený z props: URL fotografie → foto, iniciály → initials, žiadne → ikona avatara. */
export type UserAvatarType = 'foto' | 'avatar' | 'initials';

export interface UserAvatarProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> {
  /** Zobrazované meno vedľa avatara. */
  name: string;
  /** Podnadpis / úloha zobrazená pod menom. */
  caption?: string;
  /** URL fotografie — aktivuje variant *foto*. */
  avatarSrc?: string;
  /** Krátke iniciály (napr. "MM") — aktivuje variant *initials*. */
  initials?: string;
  /** Zobraziť meno + podnadpis vedľa kruhu avatara. Predvolene `true`. */
  showDetails?: boolean;
  /** Ak je poskytnute, komponent sa vykresľuje ako `<button>` a stáva sa interaktívnym. */
  onClick?: () => void;
}

function deriveType(avatarSrc?: string, initials?: string): UserAvatarType {
  if (avatarSrc) return 'foto';
  if (initials) return 'initials';
  return 'avatar';
}

const UserAvatar = React.forwardRef<HTMLButtonElement, UserAvatarProps>(
  (
    { className, name, caption, avatarSrc, initials, showDetails = true, onClick, ...props },
    ref,
  ) => {
    const type = deriveType(avatarSrc, initials);
    const isInteractive = !!onClick;

    const circle = (
      <span className="idsk-user-avatar__circle" aria-hidden="true">
        {type === 'foto' && <img src={avatarSrc} alt="" className="idsk-user-avatar__photo" />}
        {type === 'avatar' && (
          <span className="idsk-user-avatar__icon">
            <PersonIcon size={25} />
          </span>
        )}
        {type === 'initials' && <span className="idsk-user-avatar__initials">{initials}</span>}
      </span>
    );

    const details = showDetails && (
      <span className="idsk-user-avatar__details">
        <span className="idsk-user-avatar__name">{name}</span>
        {caption && <span className="idsk-user-avatar__caption">{caption}</span>}
      </span>
    );

    if (isInteractive) {
      return (
        <button
          ref={ref}
          type="button"
          className={cn(
            'idsk-user-avatar',
            'idsk-user-avatar--interactive',
            'idsk-focus-outline',
            'idsk-hover-outline',
            className,
          )}
          onClick={onClick}
          aria-label={!showDetails ? name : undefined}
          {...props}
        >
          {circle}
          {details}
        </button>
      );
    }

    return (
      <div
        className={cn('idsk-user-avatar', className)}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {circle}
        {details}
      </div>
    );
  },
);

UserAvatar.displayName = 'UserAvatar';

export { UserAvatar };
