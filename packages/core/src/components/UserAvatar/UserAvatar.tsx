import React from 'react';

import PersonIcon from '../../assets/icons/PersonIcon';
import { cn } from '../../lib/utils';

/** Auto-derived from props: photo URL → foto, initials text → initials, neither → avatar icon. */
export type UserAvatarType = 'foto' | 'avatar' | 'initials';

export interface UserAvatarProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> {
  /** Display name shown next to the avatar. */
  name: string;
  /** Caption / role shown below the name. */
  caption?: string;
  /** Photo URL — activates the *foto* variant. */
  avatarSrc?: string;
  /** Short initials text (e.g. "MM") — activates the *initials* variant. */
  initials?: string;
  /** Show name + caption beside the avatar circle. Defaults to `true`. */
  showDetails?: boolean;
  /** When provided the component renders as a `<button>` and becomes interactive. */
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
