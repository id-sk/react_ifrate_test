import React, { useState } from 'react';

import ArrowDropDownIcon from '../../assets/icons/ArrowDropDownIcon';
import ArrowDropUpIcon from '../../assets/icons/ArrowDropUpIcon';
import { Button } from '../Button';
import { LanguagePicker, type LanguageOption } from '../LanguagePicker';
import { cn } from '../../lib/utils';

export interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultExpanded?: boolean;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  govDisclaimer?: string;
  showLanguagePicker?: boolean;
  languages?: LanguageOption[];
  languageValue?: string;
  onLanguageChange?: (value: string) => void;
  showWebsiteListLink?: boolean;
  websiteListLinkLabel?: string;
  websiteListLinkHref?: string;
}

const DEFAULT_GOV_DISCLAIMER =
  'Toto je oficiálna webová stránka orgánu verejnej moci SR. Webové stránky, ktoré využívajú doménu .gov.sk, sú oficiálne webové stránky orgánov verejnej moci alebo elektronických služieb štátu.';

const DEFAULT_LANGUAGES: LanguageOption[] = [
  { value: 'sk', label: 'Slovenčina' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' },
  { value: 'cs', label: 'Čeština' },
  { value: 'hu', label: 'Magyar' },
];

const TopBar = React.forwardRef<HTMLDivElement, TopBarProps>(
  (
    {
      className,
      defaultExpanded = false,
      expanded: controlledExpanded,
      onExpandedChange,
      govDisclaimer = DEFAULT_GOV_DISCLAIMER,
      showLanguagePicker = true,
      languages,
      languageValue,
      onLanguageChange,
      showWebsiteListLink = true,
      websiteListLinkLabel = 'Zoznam adries webových sídiel orgánov verejnej moci.',
      websiteListLinkHref = '#',
      ...props
    },
    ref,
  ) => {
    const [uncontrolledExpanded, setUncontrolledExpanded] = useState(defaultExpanded);
    const isControlled = controlledExpanded !== undefined;
    const isExpanded = isControlled ? controlledExpanded : uncontrolledExpanded;

    function handleToggle() {
      const next = !isExpanded;
      if (!isControlled) setUncontrolledExpanded(next);
      onExpandedChange?.(next);
    }

    return (
      <div
        ref={ref}
        data-idsk="top-bar"
        className={cn('idsk-top-bar', className)}
        {...(isExpanded ? { 'data-expanded': '' } : {})}
        {...props}
      >
        <div className="idsk-top-bar__bar">
          <div className="idsk-top-bar__bar-inner">
            <Button
              variant="tertiary"
              colorScheme="white"
              size="sm"
              className="idsk-top-bar__toggle-btn"
              aria-expanded={isExpanded}
              aria-controls="idsk-top-bar-panel"
              onClick={handleToggle}
              rightIcon={
                isExpanded ? <ArrowDropUpIcon size={25} /> : <ArrowDropDownIcon size={25} />
              }
            >
              <span className="idsk-top-bar__toggle-label--regular">Oficiálna stránka</span>
              <span className="idsk-top-bar__toggle-label--bold"> verejnej správy SR</span>
            </Button>

            {showLanguagePicker && (
              <LanguagePicker
                className="idsk-top-bar__language-btn"
                languages={languages ?? DEFAULT_LANGUAGES}
                value={languageValue}
                defaultValue={(languages ?? DEFAULT_LANGUAGES)[0]?.value}
                onValueChange={onLanguageChange}
                onDark
              />
            )}
          </div>
        </div>

        <div id="idsk-top-bar-panel" className="idsk-top-bar__panel" hidden={!isExpanded}>
          <div className="idsk-top-bar__panel-inner">
            <div className="idsk-top-bar__columns">
              <div className="idsk-top-bar__col">
                <p className="idsk-top-bar__disclaimer">{govDisclaimer}</p>
              </div>
              <div className="idsk-top-bar__col">
                <p className="idsk-top-bar__security-title">Táto stránka je zabezpečená</p>
                <p className="idsk-top-bar__security-body">
                  Buďte pozorní a vždy sa uistite, že zdieľate informácie iba cez zabezpečenú webovú
                  stránku verejnej správy SR. Zabezpečenú webovú stránku spoznáte podľa webovej
                  adresy začínajúcej https://.
                </p>
              </div>
            </div>

            {showWebsiteListLink && (
              <a href={websiteListLinkHref} className="idsk-top-bar__link idsk-focus-outline">
                {websiteListLinkLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  },
);

TopBar.displayName = 'TopBar';

export { TopBar };
