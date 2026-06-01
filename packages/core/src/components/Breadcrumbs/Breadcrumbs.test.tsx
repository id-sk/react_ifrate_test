/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';

import { axe } from '../../test/axe';
import { Breadcrumbs } from './Breadcrumbs';

const twoItems = [{ label: 'Domov', href: '/' }, { label: 'Aktuálna stránka' }];

const fourItems = [
  { label: 'Domov', href: '/' },
  { label: 'Sekcia', href: '/sekcia' },
  { label: 'Odbor', href: '/sekcia/odbor' },
  { label: 'Aktuálna stránka' },
];

const fiveItems = [
  { label: 'Domov', href: '/' },
  { label: 'Sekcia', href: '/sekcia' },
  { label: 'Odbor', href: '/sekcia/odbor' },
  { label: 'Oddelenie', href: '/sekcia/odbor/oddelenie' },
  { label: 'Aktuálna stránka' },
];

describe('Breadcrumbs', () => {
  afterEach(() => cleanup());

  // ---------------------------------------------------------------------------
  // HTML structure
  // ---------------------------------------------------------------------------
  describe('HTML structure', () => {
    it('renders a <nav> element as root', () => {
      render(<Breadcrumbs items={twoItems} />);
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('nav has aria-label="Omrvinková navigácia"', () => {
      render(<Breadcrumbs items={twoItems} />);
      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Omrvinková navigácia');
    });

    it('renders an <ol> list inside nav', () => {
      const { container } = render(<Breadcrumbs items={twoItems} />);
      expect(container.querySelector('nav > ol')).toBeInTheDocument();
    });

    it('renders <li> elements for each item', () => {
      const { container } = render(<Breadcrumbs items={twoItems} />);
      expect(container.querySelectorAll('li.idsk-breadcrumbs__item')).toHaveLength(2);
    });

    it('renders root with idsk-breadcrumbs class', () => {
      const { container } = render(<Breadcrumbs items={twoItems} />);
      expect(container.querySelector('.idsk-breadcrumbs')).toBeInTheDocument();
    });

    it('merges custom className without removing base class', () => {
      const { container } = render(<Breadcrumbs items={twoItems} className="my-class" />);
      const nav = container.querySelector('.idsk-breadcrumbs');
      expect(nav).toHaveClass('idsk-breadcrumbs');
      expect(nav).toHaveClass('my-class');
    });

    it('returns null for empty items array', () => {
      const { container } = render(<Breadcrumbs items={[]} />);
      expect(container.firstChild).toBeNull();
    });
  });

  // ---------------------------------------------------------------------------
  // Links — all clickable items must be native <a> elements
  // ---------------------------------------------------------------------------
  describe('Links', () => {
    it('renders link items as native <a> elements', () => {
      render(<Breadcrumbs items={twoItems} />);
      expect(screen.getByRole('link', { name: 'Domov' })).toBeInTheDocument();
    });

    it('links have correct href', () => {
      render(<Breadcrumbs items={twoItems} />);
      expect(screen.getByRole('link', { name: 'Domov' })).toHaveAttribute('href', '/');
    });

    it('renders correct number of links (all items except current page)', () => {
      render(<Breadcrumbs items={fourItems} />);
      expect(screen.getAllByRole('link')).toHaveLength(3);
    });
  });

  // ---------------------------------------------------------------------------
  // Current page
  // ---------------------------------------------------------------------------
  describe('Current page', () => {
    it('last item has aria-current="page"', () => {
      const { container } = render(<Breadcrumbs items={twoItems} />);
      const current = container.querySelector('[aria-current="page"]');
      expect(current).toBeInTheDocument();
      expect(current).toHaveTextContent('Aktuálna stránka');
    });

    it('current page is not an <a> element', () => {
      const { container } = render(<Breadcrumbs items={twoItems} />);
      const current = container.querySelector('[aria-current="page"]');
      expect(current?.tagName.toLowerCase()).not.toBe('a');
    });

    it('current page is not a link in the accessibility tree', () => {
      render(<Breadcrumbs items={twoItems} />);
      expect(screen.queryByRole('link', { name: 'Aktuálna stránka' })).toBeNull();
    });

    it('current page has idsk-breadcrumbs__item--current class', () => {
      const { container } = render(<Breadcrumbs items={twoItems} />);
      expect(container.querySelector('.idsk-breadcrumbs__item--current')).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // Separators
  // ---------------------------------------------------------------------------
  describe('Separators', () => {
    it('all separator spans have aria-hidden="true"', () => {
      const { container } = render(<Breadcrumbs items={fourItems} />);
      const separators = container.querySelectorAll('.idsk-breadcrumbs__separator');
      expect(separators.length).toBeGreaterThan(0);
      separators.forEach((sep) => {
        expect(sep).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('separator SVGs have aria-hidden="true"', () => {
      const { container } = render(<Breadcrumbs items={fourItems} />);
      const svgs = container.querySelectorAll('.idsk-breadcrumbs__separator svg');
      svgs.forEach((svg) => {
        expect(svg).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('current page item has no trailing separator', () => {
      const { container } = render(<Breadcrumbs items={twoItems} />);
      const current = container.querySelector('.idsk-breadcrumbs__item--current');
      expect(current?.querySelector('.idsk-breadcrumbs__separator')).toBeNull();
    });
  });

  // ---------------------------------------------------------------------------
  // collapseMobile prop
  // ---------------------------------------------------------------------------
  describe('collapseMobile', () => {
    it('renders expand button when collapseMobile and >2 link items', () => {
      render(<Breadcrumbs items={fiveItems} collapseMobile />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('expand button has aria-expanded="false" initially', () => {
      render(<Breadcrumbs items={fiveItems} collapseMobile />);
      expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
    });

    it('expand button has accessible label', () => {
      render(<Breadcrumbs items={fiveItems} collapseMobile />);
      expect(
        screen.getByRole('button', { name: 'Zobraziť celú navigačnú cestu' }),
      ).toBeInTheDocument();
    });

    it('clicking expand button sets aria-expanded="true"', async () => {
      const user = userEvent.setup();
      render(<Breadcrumbs items={fiveItems} collapseMobile />);
      await user.click(screen.getByRole('button'));
      expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
    });

    it('does not render expand button when collapseMobile and ≤2 link items', () => {
      render(<Breadcrumbs items={twoItems} collapseMobile />);
      expect(screen.queryByRole('button')).toBeNull();
    });

    it('middle items are present in the DOM when collapseMobile is enabled', () => {
      const { container } = render(<Breadcrumbs items={fiveItems} collapseMobile />);
      expect(container.querySelectorAll('.idsk-breadcrumbs__item--middle').length).toBeGreaterThan(
        0,
      );
    });
  });

  // ---------------------------------------------------------------------------
  // Accessibility
  // ---------------------------------------------------------------------------
  describe('Accessibility', () => {
    it('has no a11y violations with two items', async () => {
      const { container } = render(
        <main>
          <Breadcrumbs items={twoItems} />
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations with four items', async () => {
      const { container } = render(
        <main>
          <Breadcrumbs items={fourItems} />
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations with collapseMobile enabled', async () => {
      const { container } = render(
        <main>
          <Breadcrumbs items={fiveItems} collapseMobile />
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
