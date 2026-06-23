/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { axe } from '../../test/axe';
import { Header } from './Header';
import { HeaderMainSection } from './HeaderMainSection';

describe('Header', () => {
  afterEach(() => cleanup());

  // ---------------------------------------------------------------------------
  // HTML structure
  // ---------------------------------------------------------------------------
  describe('HTML structure', () => {
    it('renders a <header> element as root', () => {
      render(<Header />);
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('root has idsk-header class', () => {
      const { container } = render(<Header />);
      expect(container.querySelector('.idsk-header')).toBeInTheDocument();
    });

    it('merges custom className without removing base class', () => {
      const { container } = render(<Header className="my-class" />);
      const el = container.querySelector('.idsk-header');
      expect(el).toHaveClass('idsk-header');
      expect(el).toHaveClass('my-class');
    });

    it('renders children inside the header', () => {
      render(<Header>obsah</Header>);
      expect(screen.getByText('obsah')).toBeInTheDocument();
    });

    it('forwards extra HTML attributes to the <header> element', () => {
      const { container } = render(<Header aria-label="Hlavná hlavička" />);
      expect(container.querySelector('header')).toHaveAttribute('aria-label', 'Hlavná hlavička');
    });
  });

  // ---------------------------------------------------------------------------
  // Variants
  // ---------------------------------------------------------------------------
  describe('Variants', () => {
    it('default variant adds idsk-header--default class', () => {
      const { container } = render(<Header variant="default" />);
      expect(container.querySelector('.idsk-header--default')).toBeInTheDocument();
    });

    it('transparent variant adds idsk-header--transparent class', () => {
      const { container } = render(<Header variant="transparent" />);
      expect(container.querySelector('.idsk-header--transparent')).toBeInTheDocument();
    });

    it('sticky prop adds idsk-header--sticky class', () => {
      const { container } = render(<Header sticky />);
      expect(container.querySelector('.idsk-header--sticky')).toBeInTheDocument();
    });

    it('no sticky class when sticky is false', () => {
      const { container } = render(<Header sticky={false} />);
      expect(container.querySelector('.idsk-header--sticky')).toBeNull();
    });
  });

  // ---------------------------------------------------------------------------
  // hasNavigation state (AC: hasNavigation: boolean — zobrazenie/skrytie menu)
  // ---------------------------------------------------------------------------
  describe('hasNavigation state', () => {
    it('does not add no-navigation class by default', () => {
      const { container } = render(<Header />);
      expect(container.querySelector('.idsk-header--no-navigation')).toBeNull();
    });

    it('does not add no-navigation class when hasNavigation=true', () => {
      const { container } = render(<Header hasNavigation={true} />);
      expect(container.querySelector('.idsk-header--no-navigation')).toBeNull();
    });

    it('adds idsk-header--no-navigation class when hasNavigation=false', () => {
      const { container } = render(<Header hasNavigation={false} />);
      expect(container.querySelector('.idsk-header--no-navigation')).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // Accessibility
  // ---------------------------------------------------------------------------
  describe('Accessibility', () => {
    it('has no a11y violations (default)', async () => {
      const { container } = render(
        <div>
          <Header aria-label="Hlavná hlavička" />
          <main />
        </div>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations (transparent variant)', async () => {
      const { container } = render(
        <div>
          <Header variant="transparent" aria-label="Hlavná hlavička" />
          <main />
        </div>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});

// =============================================================================
// HeaderMainSection
// =============================================================================
describe('HeaderMainSection', () => {
  afterEach(() => cleanup());

  // ---------------------------------------------------------------------------
  // HTML structure
  // ---------------------------------------------------------------------------
  describe('HTML structure', () => {
    it('renders a div with idsk-header-main class', () => {
      const { container } = render(<HeaderMainSection />);
      expect(container.querySelector('.idsk-header-main')).toBeInTheDocument();
    });

    it('has data-idsk attribute', () => {
      const { container } = render(<HeaderMainSection />);
      expect(container.querySelector('[data-idsk="header-main-section"]')).toBeInTheDocument();
    });

    it('renders org name', () => {
      render(<HeaderMainSection orgName="Ministerstvo financií" />);
      expect(screen.getByText('Ministerstvo financií')).toBeInTheDocument();
    });

    it('renders org subtitle', () => {
      render(<HeaderMainSection orgName="Org" orgSubtitle="Slovenská republika" />);
      expect(screen.getByText('Slovenská republika')).toBeInTheDocument();
    });

    it('does not render subtitle when omitted', () => {
      const { container } = render(<HeaderMainSection orgName="Org" />);
      expect(container.querySelector('.idsk-header-main__org-subtitle')).toBeNull();
    });

    it('renders logo slot', () => {
      render(<HeaderMainSection logo={<img src="logo.svg" alt="Logo" />} />);
      expect(screen.getByAltText('Logo')).toBeInTheDocument();
    });

    it('merges custom className', () => {
      const { container } = render(<HeaderMainSection className="extra" />);
      expect(container.querySelector('.idsk-header-main')).toHaveClass('extra');
    });
  });

  // ---------------------------------------------------------------------------
  // Logo link (AC: Logo funguje ako odkaz na domovskú stránku s alt textom)
  // ---------------------------------------------------------------------------
  describe('Logo link', () => {
    it('does not wrap logo in a link when logoHref is not provided', () => {
      const { container } = render(<HeaderMainSection />);
      expect(container.querySelector('.idsk-header-main__logo-link')).toBeNull();
    });

    it('wraps logo in <a> element when logoHref is provided', () => {
      const { container } = render(<HeaderMainSection logoHref="/" />);
      const link = container.querySelector('.idsk-header-main__logo-link');
      expect(link).toBeInTheDocument();
      expect(link?.tagName).toBe('A');
      expect(link).toHaveAttribute('href', '/');
    });

    it('sets aria-label on the logo link for screen readers', () => {
      render(
        <HeaderMainSection
          logoHref="/"
          logoAriaLabel="Odkaz na domovskú stránku Ministerstva financií"
        />,
      );
      expect(
        screen.getByRole('link', { name: 'Odkaz na domovskú stránku Ministerstva financií' }),
      ).toBeInTheDocument();
    });

    it('logo link contains the logo content', () => {
      render(
        <HeaderMainSection
          logo={<img src="logo.svg" alt="" />}
          logoHref="/"
          logoAriaLabel="Domov"
        />,
      );
      const link = screen.getByRole('link', { name: 'Domov' });
      expect(link.querySelector('img')).toBeInTheDocument();
    });

    it('logo link has correct href for custom URL', () => {
      render(<HeaderMainSection logoHref="/domov" logoAriaLabel="Domov" />);
      expect(screen.getByRole('link', { name: 'Domov' })).toHaveAttribute('href', '/domov');
    });
  });

  // ---------------------------------------------------------------------------
  // orgName as heading (AC: portálový názov musí byť <h1>)
  // ---------------------------------------------------------------------------
  describe('orgName as heading', () => {
    it('renders orgName as <span> by default', () => {
      const { container } = render(<HeaderMainSection orgName="Portál" />);
      expect(container.querySelector('span.idsk-header-main__org-name')).toBeInTheDocument();
      expect(container.querySelector('h1.idsk-header-main__org-name')).toBeNull();
    });

    it('renders orgName as <h1> when orgNameAsHeading is true', () => {
      const { container } = render(<HeaderMainSection orgName="Portál" orgNameAsHeading />);
      expect(container.querySelector('h1.idsk-header-main__org-name')).toBeInTheDocument();
      expect(container.querySelector('span.idsk-header-main__org-name')).toBeNull();
    });

    it('h1 contains the orgName text', () => {
      render(<HeaderMainSection orgName="Portál verejnej správy" orgNameAsHeading />);
      expect(
        screen.getByRole('heading', { level: 1, name: 'Portál verejnej správy' }),
      ).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // Mobile menu button — aria-controls & aria-expanded & aria-haspopup
  // (AC: Tlačidlo pre mobilné menu ovláda viditeľnosť navigácie cez aria-controls)
  // ---------------------------------------------------------------------------
  describe('Mobile menu button ARIA', () => {
    it('menu button has aria-haspopup="dialog"', () => {
      const { container } = render(<HeaderMainSection />);
      const menuBtn = container.querySelector('.idsk-header-main__menu-btn');
      expect(menuBtn).toHaveAttribute('aria-haspopup', 'dialog');
    });

    it('menu button does not have aria-controls without menuDrawerId', () => {
      const { container } = render(<HeaderMainSection />);
      const menuBtn = container.querySelector('.idsk-header-main__menu-btn');
      expect(menuBtn).not.toHaveAttribute('aria-controls');
    });

    it('sets aria-controls when menuDrawerId is provided', () => {
      const { container } = render(<HeaderMainSection menuDrawerId="mobile-nav" />);
      const menuBtn = container.querySelector('.idsk-header-main__menu-btn');
      expect(menuBtn).toHaveAttribute('aria-controls', 'mobile-nav');
    });

    it('sets aria-expanded=false when menuDrawerOpen is false', () => {
      const { container } = render(<HeaderMainSection menuDrawerOpen={false} />);
      const menuBtn = container.querySelector('.idsk-header-main__menu-btn');
      expect(menuBtn).toHaveAttribute('aria-expanded', 'false');
    });

    it('sets aria-expanded=true when menuDrawerOpen is true', () => {
      const { container } = render(<HeaderMainSection menuDrawerOpen={true} />);
      const menuBtn = container.querySelector('.idsk-header-main__menu-btn');
      expect(menuBtn).toHaveAttribute('aria-expanded', 'true');
    });

    it('calls onMenuClick when menu button is clicked', () => {
      const onMenuClick = vi.fn();
      const { container } = render(<HeaderMainSection onMenuClick={onMenuClick} />);
      const menuBtn = container.querySelector<HTMLButtonElement>('.idsk-header-main__menu-btn')!;
      fireEvent.click(menuBtn);
      expect(onMenuClick).toHaveBeenCalledTimes(1);
    });
  });

  // ---------------------------------------------------------------------------
  // Search button
  // ---------------------------------------------------------------------------
  describe('Search button', () => {
    it('renders search button by default', () => {
      render(<HeaderMainSection />);
      expect(screen.getByRole('button', { name: 'Hľadať' })).toBeInTheDocument();
    });

    it('hides search button when showSearch=false', () => {
      render(<HeaderMainSection showSearch={false} />);
      expect(screen.queryByRole('button', { name: 'Hľadať' })).toBeNull();
    });

    it('calls onSearch when search button clicked', () => {
      const onSearch = vi.fn();
      render(<HeaderMainSection onSearch={onSearch} />);
      fireEvent.click(screen.getByRole('button', { name: 'Hľadať' }));
      expect(onSearch).toHaveBeenCalledTimes(1);
    });

    it('uses custom searchAriaLabel', () => {
      render(<HeaderMainSection searchAriaLabel="Vyhľadávanie" />);
      expect(screen.getByRole('button', { name: 'Vyhľadávanie' })).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // Login / logged-in states
  // (AC: isLoggedIn — zobrazenie mena používateľa vs. tlačidlo Prihlásiť)
  // ---------------------------------------------------------------------------
  describe('Logged-out state', () => {
    it('renders login button by default', () => {
      render(<HeaderMainSection />);
      expect(screen.getByRole('button', { name: /Prihlásiť sa/i })).toBeInTheDocument();
    });

    it('hides login button when showLogin=false', () => {
      render(<HeaderMainSection showLogin={false} />);
      expect(screen.queryByRole('button', { name: /Prihlásiť sa/i })).toBeNull();
    });

    it('uses custom loginLabel', () => {
      render(<HeaderMainSection loginLabel="Login" />);
      expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
    });
  });

  describe('Logged-in state (user provided)', () => {
    it('hides login button when user is provided', () => {
      render(<HeaderMainSection user={{ name: 'Ján Novák' }} />);
      expect(screen.queryByRole('button', { name: /Prihlásiť sa/i })).toBeNull();
    });

    it('displays user name in the avatar area', () => {
      render(<HeaderMainSection user={{ name: 'Ján Novák' }} />);
      expect(screen.getByText('Ján Novák')).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // Actions slot
  // ---------------------------------------------------------------------------
  describe('Actions slot', () => {
    it('renders custom actions', () => {
      render(<HeaderMainSection actions={<button>Vlastné</button>} />);
      expect(screen.getByRole('button', { name: 'Vlastné' })).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // Accessibility
  // ---------------------------------------------------------------------------
  describe('Accessibility', () => {
    it('has no a11y violations (default)', async () => {
      const { container } = render(
        <div>
          <header aria-label="Hlavička">
            <HeaderMainSection orgName="Org" orgSubtitle="Podnadpis" />
          </header>
          <main />
        </div>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations with logo link and orgName as h1', async () => {
      const { container } = render(
        <div>
          <header aria-label="Hlavička">
            <HeaderMainSection
              logoHref="/"
              logoAriaLabel="Odkaz na domovskú stránku"
              orgName="Portál"
              orgNameAsHeading
            />
          </header>
          <main />
        </div>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations with aria-controls on menu button', async () => {
      const { container } = render(
        <div>
          <header aria-label="Hlavička">
            <HeaderMainSection menuDrawerId="mobile-nav" menuDrawerOpen={false} />
          </header>
          <main />
        </div>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
