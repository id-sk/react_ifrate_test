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
  // Login button
  // ---------------------------------------------------------------------------
  describe('Login button', () => {
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
    it('has no a11y violations', async () => {
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
  });
});
