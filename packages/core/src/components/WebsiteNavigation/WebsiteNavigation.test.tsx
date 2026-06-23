/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { axe } from '../../test/axe';
import { WebsiteNavigation } from './WebsiteNavigation';

const ITEMS = [
  { label: 'Domov', href: '/' },
  { label: 'Služby', href: '/sluzby' },
  { label: 'O nás', href: '/o-nas' },
];

const ITEMS_WITH_DROPDOWN = [
  { label: 'Domov', href: '/' },
  {
    label: 'Služby',
    variant: 'dropdown' as const,
    dropdownItems: [
      { label: 'Podstránka 1', href: '/sluzby/1' },
      { label: 'Podstránka 2', href: '/sluzby/2' },
    ],
  },
];

describe('WebsiteNavigation', () => {
  afterEach(() => cleanup());

  // ---------------------------------------------------------------------------
  // Semantic HTML structure (AC: <nav> s <ul>/<li>/<a> štruktúrou)
  // ---------------------------------------------------------------------------
  describe('Semantic HTML structure', () => {
    it('renders a <nav> landmark element', () => {
      render(<WebsiteNavigation items={ITEMS} />);
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('nav has default aria-label', () => {
      render(<WebsiteNavigation items={ITEMS} />);
      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Hlavná navigácia');
    });

    it('nav has custom aria-label when provided', () => {
      render(<WebsiteNavigation items={ITEMS} ariaLabel="Hlavné menu" />);
      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Hlavné menu');
    });

    it('renders a <ul> list inside the nav', () => {
      const { container } = render(<WebsiteNavigation items={ITEMS} />);
      const list = container.querySelector('nav ul');
      expect(list).toBeInTheDocument();
      expect(list?.tagName).toBe('UL');
    });

    it('renders each item inside a <li> element', () => {
      const { container } = render(<WebsiteNavigation items={ITEMS} />);
      const listItems = container.querySelectorAll('nav ul li');
      expect(listItems).toHaveLength(ITEMS.length);
    });

    it('renders link items as <a> tags inside <li>', () => {
      const { container } = render(<WebsiteNavigation items={ITEMS} />);
      const links = container.querySelectorAll('nav ul li a');
      expect(links.length).toBeGreaterThanOrEqual(ITEMS.length);
    });

    it('ul has idsk-website-nav__list class', () => {
      const { container } = render(<WebsiteNavigation items={ITEMS} />);
      expect(container.querySelector('.idsk-website-nav__list')).toBeInTheDocument();
    });

    it('each li has idsk-website-nav__list-item class', () => {
      const { container } = render(<WebsiteNavigation items={ITEMS} />);
      const listItems = container.querySelectorAll('.idsk-website-nav__list-item');
      expect(listItems).toHaveLength(ITEMS.length);
    });

    it('nav has data-idsk attribute', () => {
      const { container } = render(<WebsiteNavigation items={ITEMS} />);
      expect(container.querySelector('[data-idsk="website-navigation"]')).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // Items rendering
  // ---------------------------------------------------------------------------
  describe('Items rendering', () => {
    it('renders all item labels', () => {
      render(<WebsiteNavigation items={ITEMS} />);
      ITEMS.forEach((item) => {
        expect(screen.getByText(item.label)).toBeInTheDocument();
      });
    });

    it('renders link items with correct href', () => {
      render(<WebsiteNavigation items={ITEMS} />);
      expect(screen.getByRole('link', { name: 'Domov' })).toHaveAttribute('href', '/');
      expect(screen.getByRole('link', { name: 'Služby' })).toHaveAttribute('href', '/sluzby');
    });

    it('renders active item with aria-current="page"', () => {
      render(
        <WebsiteNavigation
          items={[{ label: 'Domov', href: '/', active: true }, ...ITEMS.slice(1)]}
        />,
      );
      expect(screen.getByRole('link', { name: 'Domov' })).toHaveAttribute('aria-current', 'page');
    });

    it('supports up to 5 items in the first navigation level', () => {
      const fiveItems = Array.from({ length: 5 }, (_, i) => ({
        label: `Položka ${i + 1}`,
        href: `/${i + 1}`,
      }));
      const { container } = render(<WebsiteNavigation items={fiveItems} />);
      expect(container.querySelectorAll('.idsk-website-nav__list-item')).toHaveLength(5);
    });

    it('renders dropdown item as a button (not a link) inside <li>', () => {
      const { container } = render(<WebsiteNavigation items={ITEMS_WITH_DROPDOWN} />);
      const dropdownLi = container.querySelectorAll('.idsk-website-nav__list-item')[1];
      expect(dropdownLi.querySelector('button')).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // Dropdown ARIA (AC: tlačidlá otvárajúce menu majú aria-haspopup a aria-expanded)
  // ---------------------------------------------------------------------------
  describe('Dropdown ARIA attributes', () => {
    it('dropdown trigger has aria-haspopup attribute', () => {
      render(<WebsiteNavigation items={ITEMS_WITH_DROPDOWN} />);
      const trigger = screen.getByRole('button', { name: 'Služby' });
      expect(trigger).toHaveAttribute('aria-haspopup');
    });

    it('dropdown trigger has aria-expanded=false when closed', () => {
      render(<WebsiteNavigation items={ITEMS_WITH_DROPDOWN} />);
      const trigger = screen.getByRole('button', { name: 'Služby' });
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('dropdown trigger has aria-expanded=true when open', () => {
      const { container } = render(
        <WebsiteNavigation
          items={[
            { label: 'Domov', href: '/' },
            {
              label: 'Služby',
              variant: 'dropdown' as const,
              open: true,
              dropdownItems: [{ label: 'Podstránka 1', href: '/sluzby/1' }],
            },
          ]}
        />,
      );
      // Radix marks surrounding content aria-hidden when the dropdown is open,
      // so we query the trigger directly from the container.
      const trigger = container.querySelector(
        '[data-idsk="header-menu-item"][aria-expanded="true"]',
      );
      expect(trigger).toBeInTheDocument();
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  });

  // ---------------------------------------------------------------------------
  // Click handlers
  // ---------------------------------------------------------------------------
  describe('Click handlers', () => {
    it('calls onClick for button-type nav item', () => {
      const onClick = vi.fn();
      render(<WebsiteNavigation items={[{ label: 'Akcia', onClick }]} />);
      screen.getByRole('button', { name: 'Akcia' }).click();
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  // ---------------------------------------------------------------------------
  // Accessibility (AC: všetky a11y testy musia prechádzať)
  // ---------------------------------------------------------------------------
  describe('Accessibility', () => {
    it('has no a11y violations with link items', async () => {
      const { container } = render(
        <div>
          <header>
            <WebsiteNavigation items={ITEMS} />
          </header>
          <main />
        </div>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations with active item', async () => {
      const { container } = render(
        <div>
          <header>
            <WebsiteNavigation
              items={[{ label: 'Domov', href: '/', active: true }, ...ITEMS.slice(1)]}
            />
          </header>
          <main />
        </div>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
