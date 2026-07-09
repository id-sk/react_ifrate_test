import React, { useState } from 'react';
import { Dialog } from 'radix-ui';

import CloseIcon from '../../assets/icons/CloseIcon';
import KeyboardArrowDownIcon from '../../assets/icons/KeyboardArrowDownIcon';
import PersonIcon from '../../assets/icons/PersonIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import { Button } from '../Button';
import { type HeaderUser } from './HeaderMainSection';

// ─── Item types ──────────────────────────────────────────────────────────────

export interface HeaderDrawerActionItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  active?: boolean;
}

export interface HeaderDrawerNavItem {
  label: string;
  href?: string;
  onClick?: () => void;
  hasDropdown?: boolean;
  active?: boolean;
}

// ─── Props ───────────────────────────────────────────────────────────────────

export interface HeaderDrawerProfileDetail {
  label: string;
  value: string;
}

export interface HeaderDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  closeAriaLabel?: string;

  // Profile section
  user?: HeaderUser;
  profileDetails?: HeaderDrawerProfileDetail[];
  loginLabel?: string;
  onLogin?: () => void;
  myZoneLabel?: string;
  onMyZone?: () => void;
  switchRepresentationLabel?: string;
  onSwitchRepresentation?: () => void;
  logoutLabel?: string;
  onLogout?: () => void;

  // Search section
  showSearch?: boolean;
  searchLabel?: string;
  searchButtonAriaLabel?: string;
  onSearch?: (query: string) => void;

  // Action zone
  actionZoneLabel?: string;
  actionItems?: HeaderDrawerActionItem[];

  // Navigation
  navLabel?: string;
  navItems?: HeaderDrawerNavItem[];
}

function ProfileRowContent({ user }: { user: HeaderUser }) {
  return (
    <>
      <div className="idsk-header-drawer__avatar-icon" aria-hidden="true">
        {user.avatarSrc ? (
          <img src={user.avatarSrc} alt="" className="idsk-header-drawer__avatar-photo" />
        ) : (
          <PersonIcon size={25} />
        )}
      </div>
      <div className="idsk-header-drawer__profile-info">
        <span className="idsk-header-drawer__profile-name">{user.name}</span>
        {user.caption && (
          <span className="idsk-header-drawer__profile-caption">{user.caption}</span>
        )}
      </div>
    </>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

const HeaderDrawer = ({
  open,
  onOpenChange,
  closeAriaLabel = 'Zatvoriť menu',
  user,
  profileDetails = [],
  loginLabel = 'Prihlásiť sa',
  onLogin,
  myZoneLabel = 'Moja zóna',
  onMyZone,
  switchRepresentationLabel = 'Prepnúť zastupovanie',
  onSwitchRepresentation,
  logoutLabel = 'Odhlásiť sa',
  onLogout,
  showSearch = true,
  searchLabel = 'Vyhľadávanie',
  searchButtonAriaLabel = 'Hľadať',
  onSearch,
  actionZoneLabel = 'Akčná zóna',
  actionItems = [],
  navLabel = 'Navigácia',
  navItems = [],
}: HeaderDrawerProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchValue);
  };

  const hasActionItems = actionItems.length > 0;
  const hasNavItems = navItems.length > 0;
  const hasContentBelowProfile = showSearch || hasActionItems || hasNavItems;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="idsk-header-drawer__overlay" />
        <Dialog.Content className="idsk-header-drawer">
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          {/* Sticky close bar */}
          <div className="idsk-header-drawer__close-bar">
            <Dialog.Close asChild>
              <Button variant="tertiary" size="md" iconOnly aria-label={closeAriaLabel}>
                <CloseIcon size={25} />
              </Button>
            </Dialog.Close>
          </div>

          {/* Scrollable body */}
          <div className="idsk-header-drawer__body">
            {/* Profile section */}
            <div className="idsk-header-drawer__section">
              <h2 className="idsk-header-drawer__section-title">Profil</h2>
              {user ? (
                <div className="idsk-header-drawer__profile">
                  {user.onClick ? (
                    <button
                      type="button"
                      className="idsk-header-drawer__profile-row idsk-header-drawer__profile-row--interactive idsk-focus-outline idsk-hover-outline"
                      onClick={user.onClick}
                    >
                      <ProfileRowContent user={user} />
                    </button>
                  ) : (
                    <div className="idsk-header-drawer__profile-row">
                      <ProfileRowContent user={user} />
                    </div>
                  )}
                  {profileDetails.length > 0 && (
                    <dl className="idsk-header-drawer__profile-details">
                      {profileDetails.map((detail, i) => (
                        <div key={i} className="idsk-header-drawer__profile-detail-row">
                          <dt className="idsk-header-drawer__profile-detail-label">
                            {detail.label}:
                          </dt>
                          <dd className="idsk-header-drawer__profile-detail-value">
                            {detail.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  <div className="idsk-header-drawer__profile-actions">
                    {onMyZone && (
                      <Button variant="secondary" size="md" className="w-full" onClick={onMyZone}>
                        {myZoneLabel}
                      </Button>
                    )}
                    {onSwitchRepresentation && (
                      <Button
                        variant="tertiary"
                        size="md"
                        className="w-full"
                        onClick={onSwitchRepresentation}
                      >
                        {switchRepresentationLabel}
                      </Button>
                    )}
                    {onLogout && (
                      <Button
                        variant="tertiary"
                        size="md"
                        colorScheme="error"
                        className="w-full"
                        onClick={onLogout}
                      >
                        {logoutLabel}
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full"
                  leftIcon={<PersonIcon size={25} />}
                  onClick={onLogin}
                >
                  {loginLabel}
                </Button>
              )}
            </div>

            {/* Divider after profile */}
            {hasContentBelowProfile && (
              <div className="idsk-header-drawer__divider-wrapper" aria-hidden="true">
                <div className="idsk-header-drawer__divider" />
              </div>
            )}

            {/* Search section */}
            {showSearch && (
              <div className="idsk-header-drawer__section">
                <h2 className="idsk-header-drawer__section-title">{searchLabel}</h2>
                <form className="idsk-header-drawer__search" onSubmit={handleSearch} role="search">
                  <input
                    type="search"
                    className="idsk-header-drawer__search-input"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    aria-label={searchLabel}
                  />
                  <button
                    type="submit"
                    className="idsk-header-drawer__search-submit"
                    aria-label={searchButtonAriaLabel}
                  >
                    <SearchIcon size={25} />
                  </button>
                </form>
              </div>
            )}

            {/* Action zone */}
            {hasActionItems && (
              <div className="idsk-header-drawer__zone">
                <div className="idsk-header-drawer__zone-header">
                  <h2 className="idsk-header-drawer__section-title">{actionZoneLabel}</h2>
                </div>
                <ul className="idsk-header-drawer__items">
                  {actionItems.map((item, i) => {
                    const itemLinkClass = `idsk-header-drawer__item-link${item.active ? ' idsk-header-drawer__item-link--active' : ''}`;
                    return item.href ? (
                      <li key={i} className="idsk-header-drawer__item">
                        <a href={item.href} className={itemLinkClass}>
                          {item.icon && (
                            <span className="idsk-header-drawer__item-icon" aria-hidden="true">
                              {item.icon}
                            </span>
                          )}
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ) : (
                      <li key={i} className="idsk-header-drawer__item">
                        <button type="button" onClick={item.onClick} className={itemLinkClass}>
                          {item.icon && (
                            <span className="idsk-header-drawer__item-icon" aria-hidden="true">
                              {item.icon}
                            </span>
                          )}
                          <span>{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Divider before navigation */}
            {hasNavItems && hasContentBelowProfile && (
              <div className="idsk-header-drawer__divider-wrapper" aria-hidden="true">
                <div className="idsk-header-drawer__divider" />
              </div>
            )}

            {/* Navigation section */}
            {hasNavItems && (
              <div className="idsk-header-drawer__zone">
                <div className="idsk-header-drawer__zone-header">
                  <h2 className="idsk-header-drawer__section-title">{navLabel}</h2>
                </div>
                <ul className="idsk-header-drawer__items">
                  {navItems.map((item, i) => {
                    const linkClass = `idsk-header-drawer__item-link${item.active ? ' idsk-header-drawer__item-link--active' : ''}`;
                    return item.href ? (
                      <li key={i} className="idsk-header-drawer__item">
                        <a href={item.href} className={linkClass}>
                          {item.hasDropdown && (
                            <KeyboardArrowDownIcon
                              size={25}
                              aria-hidden="true"
                              className="idsk-header-drawer__item-arrow"
                            />
                          )}
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ) : (
                      <li key={i} className="idsk-header-drawer__item">
                        <button type="button" onClick={item.onClick} className={linkClass}>
                          {item.hasDropdown && (
                            <KeyboardArrowDownIcon
                              size={25}
                              aria-hidden="true"
                              className="idsk-header-drawer__item-arrow"
                            />
                          )}
                          <span>{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

HeaderDrawer.displayName = 'HeaderDrawer';

export { HeaderDrawer };
