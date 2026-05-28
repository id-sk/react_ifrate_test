/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';

import { axe } from '../../test/axe';
import { AccordionList } from './AccordionList';

const defaultItems = [
  { id: 'item-1', title: 'Sekcia 1', children: <p>Obsah sekcie 1</p> },
  { id: 'item-2', title: 'Sekcia 2', children: <p>Obsah sekcie 2</p> },
  { id: 'item-3', title: 'Sekcia 3', children: <p>Obsah sekcie 3</p> },
];

describe('AccordionList', () => {
  afterEach(() => cleanup());

  // ---------------------------------------------------------------------------
  // HTML structure
  // ---------------------------------------------------------------------------
  describe('HTML structure', () => {
    it('renders root element with idsk-accordion-list class', () => {
      const { container } = render(<AccordionList title="Nadpis" items={defaultItems} />);
      expect(container.querySelector('.idsk-accordion-list')).toBeInTheDocument();
    });

    it('merges custom className without removing base class', () => {
      const { container } = render(
        <AccordionList title="Nadpis" items={defaultItems} className="my-custom" />,
      );
      const root = container.querySelector('.idsk-accordion-list');
      expect(root).toHaveClass('idsk-accordion-list', 'my-custom');
    });

    it('renders the header element', () => {
      const { container } = render(<AccordionList title="Nadpis" items={defaultItems} />);
      expect(container.querySelector('.idsk-accordion-list__header')).toBeInTheDocument();
    });

    it('renders the title text', () => {
      render(<AccordionList title="Môj nadpis" items={defaultItems} />);
      expect(screen.getByText('Môj nadpis')).toBeInTheDocument();
    });

    it('renders the toggle button by default', () => {
      render(<AccordionList title="Nadpis" items={defaultItems} />);
      expect(screen.getByRole('button', { name: /otvoriť všetky/i })).toBeInTheDocument();
    });

    it('does not render toggle button when singleOpen is true', () => {
      render(<AccordionList title="Nadpis" items={defaultItems} singleOpen />);
      expect(screen.queryByRole('button', { name: /otvoriť všetky/i })).not.toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // Toggle-all behaviour
  // ---------------------------------------------------------------------------
  describe('toggle-all', () => {
    it('expands all items when clicked from collapsed state', async () => {
      const user = userEvent.setup();
      render(<AccordionList title="Nadpis" items={defaultItems} />);

      await user.click(screen.getByRole('button', { name: /otvoriť všetky/i }));

      defaultItems.forEach((item) => {
        const content = screen.getByText(item.children.props.children as string);
        expect(content).toBeVisible();
      });
    });

    it('collapses all items when clicked from fully expanded state', async () => {
      const user = userEvent.setup();
      render(<AccordionList title="Nadpis" items={defaultItems} />);

      await user.click(screen.getByRole('button', { name: /otvoriť všetky/i }));
      await user.click(screen.getByRole('button', { name: /zavrieť všetky/i }));

      expect(screen.queryByRole('button', { name: /otvoriť všetky/i })).toBeInTheDocument();
    });

    it('shows "Zavrieť všetky" label when all are expanded', async () => {
      const user = userEvent.setup();
      render(<AccordionList title="Nadpis" items={defaultItems} />);

      await user.click(screen.getByRole('button', { name: /otvoriť všetky/i }));
      expect(screen.getByRole('button', { name: /zavrieť všetky/i })).toBeInTheDocument();
    });

    it('sets data-all-expanded="true" when all are expanded', async () => {
      const user = userEvent.setup();
      render(<AccordionList title="Nadpis" items={defaultItems} />);

      const btn = screen.getByRole('button', { name: /otvoriť všetky/i });
      expect(btn).toHaveAttribute('data-all-expanded', 'false');

      await user.click(btn);
      expect(screen.getByRole('button', { name: /zavrieť všetky/i })).toHaveAttribute(
        'data-all-expanded',
        'true',
      );
    });

    it('skips disabled items when determining all-expanded state', async () => {
      const user = userEvent.setup();
      const items = [
        { id: 'a', title: 'Aktívna', children: <p>Obsah A</p> },
        { id: 'b', title: 'Neaktívna', children: <p>Obsah B</p>, disabled: true },
      ];
      render(<AccordionList title="Nadpis" items={items} />);

      await user.click(screen.getByRole('button', { name: /otvoriť všetky/i }));
      expect(screen.getByRole('button', { name: /zavrieť všetky/i })).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // defaultOpen
  // ---------------------------------------------------------------------------
  describe('defaultOpen', () => {
    it('expands items with defaultOpen on initial render', () => {
      const items = [
        { id: 'a', title: 'Predvolene otvorená', children: <p>Obsah A</p>, defaultOpen: true },
        { id: 'b', title: 'Predvolene zatvorená', children: <p>Obsah B</p> },
      ];
      render(<AccordionList title="Nadpis" items={items} />);
      expect(screen.getByText('Obsah A')).toBeVisible();
    });

    it('shows "Zavrieť všetky" when all items have defaultOpen', () => {
      const items = defaultItems.map((item) => ({ ...item, defaultOpen: true }));
      render(<AccordionList title="Nadpis" items={items} />);
      expect(screen.getByRole('button', { name: /zavrieť všetky/i })).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // Accessibility
  // ---------------------------------------------------------------------------
  describe('accessibility', () => {
    it('has no axe violations in default state', async () => {
      const { container } = render(<AccordionList title="Nadpis" items={defaultItems} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no axe violations when all items are expanded', async () => {
      const user = userEvent.setup();
      const { container } = render(<AccordionList title="Nadpis" items={defaultItems} />);
      await user.click(screen.getByRole('button', { name: /otvoriť všetky/i }));
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
