import React from 'react';

import MailIcon from '../../assets/icons/MailIcon';
import MenuIcon from '../../assets/icons/MenuIcon';
import NotificationsIcon from '../../assets/icons/NotificationsIcon';
import PersonIcon from '../../assets/icons/PersonIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import SlovakStateSignIcon from '../../assets/icons/SlovakStateSignIcon';
import { Button } from '../Button';
import { NotificationButton } from '../NotificationButton';
import { UserAvatar } from '../UserAvatar';
import { cn } from '../../lib/utils';

// ─── User / Avatar ───────────────────────────────────────────────────────────

export interface HeaderUser {
  /** Display name shown next to the avatar. */
  name: string;
  /** Caption / role shown below the name. */
  caption?: string;
  /** Photo URL — activates the *foto* variant. */
  avatarSrc?: string;
  /** Short initials (e.g. "MM") — activates the *initials* variant. */
  initials?: string;
  /** Called when the avatar button is clicked. */
  onClick?: () => void;
}

// ─── Props ───────────────────────────────────────────────────────────────────

export interface HeaderMainSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Logo element rendered on the left side.
   * Defaults to the Slovak state sign (Štátny znak SR).
   * Pass `null` to hide the logo.
   */
  logo?: React.ReactNode;
  /** When provided, wraps the logo in an `<a>` tag linking to the homepage. */
  logoHref?: string;
  /** Accessible label for the logo link (e.g. "Odkaz na domovskú stránku Ministerstva…"). */
  logoAriaLabel?: string;
  /** Primary headline next to the logo (org name or service name). */
  orgName?: string;
  /** When `true`, renders `orgName` as an `<h1>` instead of a `<span>`. */
  orgNameAsHeading?: boolean;
  /** Secondary line below the headline. */
  orgSubtitle?: string;

  /** Show the search icon button. Defaults to `true`. */
  showSearch?: boolean;
  onSearch?: () => void;
  searchAriaLabel?: string;

  /** Show mail icon button. Defaults to `false`. */
  showMail?: boolean;
  /** Show a red badge on the mail button. */
  mailHasNew?: boolean;
  onMail?: () => void;
  mailAriaLabel?: string;

  /** Show notifications icon button. Defaults to `false`. */
  showNotifications?: boolean;
  /** Show a red badge on the notifications button. */
  notificationsHasNew?: boolean;
  onNotifications?: () => void;
  notificationsAriaLabel?: string;

  /** Extra elements inserted between the icon buttons and the right-most button. */
  actions?: React.ReactNode;

  /** Label for the mobile menu button (≤520px). Defaults to `'Menu'`. */
  menuLabel?: string;
  /** Called when the mobile menu button is clicked. */
  onMenuClick?: () => void;
  /** Whether the mobile drawer is currently open — sets `aria-expanded` on the menu button. */
  menuDrawerOpen?: boolean;
  /** ID of the mobile drawer element — sets `aria-controls` on the menu button. */
  menuDrawerId?: string;

  /**
   * When provided the login button is hidden and an avatar is shown instead.
   * Explicitly pass `showLogin={true}` to force the login button alongside the avatar.
   */
  user?: HeaderUser;

  /** Show the login button. Defaults to `true` unless `user` is set. */
  showLogin?: boolean;
  loginLabel?: string;
  onLogin?: () => void;
}

// ─── Component ───────────────────────────────────────────────────────────────

const HeaderMainSection = React.forwardRef<HTMLDivElement, HeaderMainSectionProps>(
  (
    {
      className,
      logo = <SlovakStateSignIcon />,
      logoHref,
      logoAriaLabel,
      orgName,
      orgNameAsHeading = false,
      orgSubtitle,
      showSearch = true,
      onSearch,
      searchAriaLabel = 'Hľadať',
      showMail = false,
      mailHasNew,
      onMail,
      mailAriaLabel = 'Správy',
      showNotifications = false,
      notificationsHasNew,
      onNotifications,
      notificationsAriaLabel = 'Notifikácie',
      actions,
      menuLabel = 'Menu',
      onMenuClick,
      menuDrawerOpen,
      menuDrawerId,
      user,
      showLogin,
      loginLabel = 'Prihlásiť sa',
      onLogin,
      ...props
    },
    ref,
  ) => {
    const displayLogin = showLogin ?? !user;

    return (
      <div
        ref={ref}
        data-idsk="header-main-section"
        className={cn('idsk-header-main', className)}
        {...props}
      >
        <div className="idsk-header-main__container">
          {(logo || orgName) && (
            <div className="idsk-header-main__owner">
              {logo && (
                <div className="idsk-header-main__logo">
                  {logoHref ? (
                    <a
                      href={logoHref}
                      aria-label={logoAriaLabel}
                      className="idsk-header-main__logo-link"
                    >
                      {logo}
                    </a>
                  ) : (
                    logo
                  )}
                </div>
              )}
              {orgName && (
                <div className="idsk-header-main__brand">
                  {orgNameAsHeading ? (
                    <h1 className="idsk-header-main__org-name">{orgName}</h1>
                  ) : (
                    <span className="idsk-header-main__org-name">{orgName}</span>
                  )}
                  {orgSubtitle && (
                    <span className="idsk-header-main__org-subtitle">{orgSubtitle}</span>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="idsk-header-main__actions">
            <Button
              variant="secondary"
              size="md"
              className="idsk-header-main__menu-btn"
              onClick={onMenuClick}
              aria-expanded={menuDrawerOpen}
              aria-controls={menuDrawerId}
              aria-haspopup="dialog"
              leftIcon={<MenuIcon size={25} />}
            >
              {menuLabel}
            </Button>

            {showSearch && (
              <NotificationButton
                icon={<SearchIcon size={25} />}
                aria-label={searchAriaLabel}
                onClick={onSearch}
              />
            )}

            {showMail && (
              <NotificationButton
                icon={<MailIcon size={25} />}
                hasNew={mailHasNew}
                newLabel="Nová správa"
                aria-label={mailAriaLabel}
                onClick={onMail}
              />
            )}

            {showNotifications && (
              <NotificationButton
                icon={<NotificationsIcon size={25} />}
                hasNew={notificationsHasNew}
                newLabel="Nová notifikácia"
                aria-label={notificationsAriaLabel}
                onClick={onNotifications}
              />
            )}

            {actions}

            {displayLogin && (
              <Button
                variant="secondary"
                size="md"
                onClick={onLogin}
                leftIcon={<PersonIcon size={25} />}
              >
                {loginLabel}
              </Button>
            )}

            {user && (
              <UserAvatar
                name={user.name}
                caption={user.caption}
                avatarSrc={user.avatarSrc}
                initials={user.initials}
                onClick={user.onClick}
              />
            )}
          </div>
        </div>
      </div>
    );
  },
);

HeaderMainSection.displayName = 'HeaderMainSection';

export { HeaderMainSection };
