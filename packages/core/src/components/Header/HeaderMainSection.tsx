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
  /** Zobrazované meno vedľa avatara. */
  name: string;
  /** Popisok / funkcia zobrazená pod menom. */
  caption?: string;
  /** URL fotografie — aktivuje variant *foto*. */
  avatarSrc?: string;
  /** Krátke iniciály (napr. „MM“) — aktivuje variant *initials*. */
  initials?: string;
  /** Volané pri kliknutí na tlačidlo avatara. */
  onClick?: () => void;
}

// ─── Props ───────────────────────────────────────────────────────────────────

export interface HeaderMainSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Logo zobrazené vľavo.
   * Predvolene štátny znak SR.
   * Odovzdaním `null` logo skryjete.
   */
  logo?: React.ReactNode;
  /** Keď je zadané, logo sa obalí do značky `<a>` odkazujúcej na domovskú stránku. */
  logoHref?: string;
  /** Prístupný popis odkazu na logo (napr. „Odkaz na domovskú stránku Ministerstva…“). */
  logoAriaLabel?: string;
  /** Hlavný nadpis vedľa loga (názov organizácie alebo služby). */
  orgName?: string;
  /** Keď je `true`, vykreslí `orgName` ako `<h1>` namiesto `<span>`. */
  orgNameAsHeading?: boolean;
  /** Doplnkový riadok pod hlavným nadpisom. */
  orgSubtitle?: string;

  /** Zobraziť tlačidlo vyhľadávania. Predvolene `true`. */
  showSearch?: boolean;
  onSearch?: () => void;
  searchAriaLabel?: string;

  /** Zobraziť tlačidlo ikony pošty. Predvolene `false`. */
  showMail?: boolean;
  /** Zobraziť červený odznak na tlačidle pošty. */
  mailHasNew?: boolean;
  onMail?: () => void;
  mailAriaLabel?: string;

  /** Zobraziť tlačidlo ikony notifikácií. Predvolene `false`. */
  showNotifications?: boolean;
  /** Zobraziť červený odznak na tlačidle notifikácií. */
  notificationsHasNew?: boolean;
  onNotifications?: () => void;
  notificationsAriaLabel?: string;

  /** Ďalšie prvky vložené medzi ikonové tlačidlá a krajné tlačidlo. */
  actions?: React.ReactNode;

  /** Text mobilného tlačidla menu (≤520px). Predvolene `'Menu'`. */
  menuLabel?: string;
  /** Volané pri kliknutí na mobilné tlačidlo menu. */
  onMenuClick?: () => void;
  /** Či je mobilná zásuvka aktuálne otvorená — nastavuje `aria-expanded` na tlačidle menu. */
  menuDrawerOpen?: boolean;
  /** ID prvku mobilnej zásuvky — nastavuje `aria-controls` na tlačidle menu. */
  menuDrawerId?: string;

  /**
   * Keď je zadané, tlačidlo prihlásenia sa skryje a namiesto neho sa zobrazí avatar.
   * Explicitným zadaním `showLogin={true}` vynútite tlačidlo prihlásenia popri avatare.
   */
  user?: HeaderUser;

  /** Zobraziť tlačidlo prihlásenia. Predvolene `true`, pokiaľ nie je zadané `user`. */
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
