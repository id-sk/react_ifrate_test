/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';

import { axe } from '../../test/axe';
import { Accordion } from './Accordion';

const defaultItems = [
  { id: 'item-1', title: 'Sekcia 1', children: <p>Obsah sekcie 1</p> },
  { id: 'item-2', title: 'Sekcia 2', children: <p>Obsah sekcie 2</p> },
  { id: 'item-3', title: 'Sekcia 3', children: <p>Obsah sekcie 3</p> },
];

describe('Accordion', () => {
  afterEach(() => cleanup());

  // ---------------------------------------------------------------------------
  // HTML structure
  // ---------------------------------------------------------------------------
  describe('HTML structure', () => {
    it('renders root element with idsk-accordion class', () => {
      const { container } = render(<Accordion items={defaultItems} />);
      expect(container.querySelector('.idsk-accordion')).toBeInTheDocument();
    });

    it('has data-idsk="accordion" attribute on root', () => {
      const { container } = render(<Accordion items={defaultItems} />);
      expect(container.querySelector('.idsk-accordion')).toHaveAttribute('data-idsk', 'accordion');
    });

    it('merges custom className without removing base class', () => {
      const { container } = render(<Accordion items={defaultItems} className="my-custom" />);
      const root = container.querySelector('.idsk-accordion');
      expect(root).toHaveClass('idsk-accordion');
      expect(root).toHaveClass('my-custom');
    });

    it('renders the correct number of item wrappers', () => {
      const { container } = render(<Accordion items={defaultItems} />);
      expect(container.querySelectorAll('.idsk-accordion__item')).toHaveLength(3);
    });

    it('uses no GOVUK naming conventions in any class', () => {
      const { container } = render(<Accordion items={defaultItems} />);
      const allClasses = Array.from(container.querySelectorAll('[class]'))
        .map((el) => el.className)
        .join(' ');
      expect(allClasses).not.toMatch(/govuk/i);
    });
  });

  // ---------------------------------------------------------------------------
  // Button trigger (AC: celá plocha hlavičky; natívny <button>)
  // ---------------------------------------------------------------------------
  describe('Button trigger', () => {
    it('renders a native <button> element as trigger for each item', () => {
      render(<Accordion items={defaultItems} />);
      expect(screen.getAllByRole('button')).toHaveLength(3);
    });

    it('every trigger button has type="button"', () => {
      render(<Accordion items={defaultItems} />);
      screen.getAllByRole('button').forEach((btn) => {
        expect(btn).toHaveAttribute('type', 'button');
      });
    });

    it('button accessible name includes the item title', () => {
      render(<Accordion items={defaultItems} />);
      expect(screen.getByRole('button', { name: /Sekcia 1/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Sekcia 2/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Sekcia 3/i })).toBeInTheDocument();
    });

    it('button has class idsk-accordion__button', () => {
      const { container } = render(<Accordion items={defaultItems} />);
      expect(container.querySelectorAll('.idsk-accordion__button')).toHaveLength(3);
    });
  });

  // ---------------------------------------------------------------------------
  // Icon indicator (AC: indikátor skrytý pre čítačky cez aria-hidden)
  // ---------------------------------------------------------------------------
  describe('Icon indicator', () => {
    it('chevron SVG inside button has aria-hidden="true"', () => {
      const { container } = render(<Accordion items={defaultItems} />);
      container.querySelectorAll('.idsk-accordion__chevron').forEach((icon) => {
        expect(icon).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('each item has exactly one chevron icon with class idsk-accordion__chevron', () => {
      const { container } = render(<Accordion items={defaultItems} />);
      expect(container.querySelectorAll('.idsk-accordion__chevron')).toHaveLength(3);
    });
  });

  // ---------------------------------------------------------------------------
  // IDs and ARIA linking (AC: aria-expanded, aria-controls, aria-labelledby)
  // ---------------------------------------------------------------------------
  describe('IDs and ARIA linking', () => {
    it('uses the provided item id on the content panel', () => {
      const { container } = render(
        <Accordion items={[{ id: 'my-panel', title: 'Test', children: 'Content' }]} />,
      );
      expect(container.querySelector('#my-panel')).toBeInTheDocument();
    });

    it('auto-generates a non-empty id when none is provided', () => {
      const { container } = render(<Accordion items={[{ title: 'Test', children: 'Content' }]} />);
      expect(container.querySelector('.idsk-accordion__content')?.id).toBeTruthy();
    });

    it('aria-controls on button matches the content panel id', () => {
      render(<Accordion items={[{ id: 'panel-1', title: 'Test', children: 'Content' }]} />);
      expect(screen.getByRole('button', { name: /Test/i })).toHaveAttribute(
        'aria-controls',
        'panel-1',
      );
    });

    it('content panel does not have aria-labelledby attribute', () => {
      const { container } = render(
        <Accordion items={[{ id: 'panel-1', title: 'Test', children: 'Content' }]} />,
      );
      const panel = container.querySelector('#panel-1');
      expect(panel).not.toHaveAttribute('aria-labelledby');
    });

    it('renders the title inside an h3 element with class idsk-accordion__title', () => {
      const { container } = render(
        <Accordion items={[{ title: 'My Heading', children: 'Content' }]} />,
      );
      const heading = container.querySelector('h3.idsk-accordion__title');
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('My Heading');
    });

    it('button id is derived from the item id (itemId + "-button")', () => {
      render(<Accordion items={[{ id: 'section-a', title: 'Test', children: 'Content' }]} />);
      expect(screen.getByRole('button', { name: /Test/i }).id).toBe('section-a-button');
    });
  });

  // ---------------------------------------------------------------------------
  // Default collapsed state
  // ---------------------------------------------------------------------------
  describe('Default collapsed state', () => {
    it('all content panels have the hidden attribute on initial render', () => {
      const { container } = render(<Accordion items={defaultItems} />);
      container.querySelectorAll('.idsk-accordion__content').forEach((panel) => {
        expect(panel).toHaveAttribute('hidden');
      });
    });

    it('all buttons have aria-expanded="false" on initial render', () => {
      render(<Accordion items={defaultItems} />);
      screen.getAllByRole('button').forEach((btn) => {
        expect(btn).toHaveAttribute('aria-expanded', 'false');
      });
    });
  });

  // ---------------------------------------------------------------------------
  // Expand / collapse (AC: aria-expanded dynamicky indikuje stav)
  // ---------------------------------------------------------------------------
  describe('Expand / collapse', () => {
    it('clicking a button removes the hidden attribute from its content panel', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={defaultItems} />);
      await user.click(screen.getAllByRole('button')[0]);
      expect(container.querySelectorAll('.idsk-accordion__content')[0]).not.toHaveAttribute(
        'hidden',
      );
    });

    it('clicking a button sets aria-expanded to "true"', async () => {
      const user = userEvent.setup();
      render(<Accordion items={defaultItems} />);
      const button = screen.getAllByRole('button')[0];
      await user.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('clicking an expanded button adds back the hidden attribute', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={defaultItems} />);
      const button = screen.getAllByRole('button')[0];
      await user.click(button);
      await user.click(button);
      expect(container.querySelectorAll('.idsk-accordion__content')[0]).toHaveAttribute('hidden');
    });

    it('clicking an expanded button resets aria-expanded to "false"', async () => {
      const user = userEvent.setup();
      render(<Accordion items={defaultItems} />);
      const button = screen.getAllByRole('button')[0];
      await user.click(button);
      await user.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('only the clicked section expands — others stay collapsed', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={defaultItems} />);
      await user.click(screen.getAllByRole('button')[1]);
      const panels = container.querySelectorAll('.idsk-accordion__content');
      expect(panels[0]).toHaveAttribute('hidden');
      expect(panels[1]).not.toHaveAttribute('hidden');
      expect(panels[2]).toHaveAttribute('hidden');
    });
  });

  // ---------------------------------------------------------------------------
  // Multiple sections — independent state
  // (AC: rozbalenie jednej sekcie nesmie automaticky zavrieť inú)
  // ---------------------------------------------------------------------------
  describe('Multiple sections — independent state', () => {
    it('opening one section does not close another already-open section', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={defaultItems} />);
      const [btn1, btn2] = screen.getAllByRole('button');
      await user.click(btn1);
      await user.click(btn2);
      const panels = container.querySelectorAll('.idsk-accordion__content');
      expect(panels[0]).not.toHaveAttribute('hidden');
      expect(panels[1]).not.toHaveAttribute('hidden');
    });

    it('all three sections can be open simultaneously', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={defaultItems} />);
      for (const button of screen.getAllByRole('button')) {
        await user.click(button);
      }
      container.querySelectorAll('.idsk-accordion__content').forEach((panel) => {
        expect(panel).not.toHaveAttribute('hidden');
      });
    });

    it('collapsing one section leaves other open sections unaffected', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={defaultItems} />);
      const [btn1, btn2] = screen.getAllByRole('button');
      await user.click(btn1);
      await user.click(btn2);
      await user.click(btn1); // collapse first
      const panels = container.querySelectorAll('.idsk-accordion__content');
      expect(panels[0]).toHaveAttribute('hidden');
      expect(panels[1]).not.toHaveAttribute('hidden');
    });
  });

  // ---------------------------------------------------------------------------
  // Content rendering
  // ---------------------------------------------------------------------------
  describe('Content rendering', () => {
    it('renders children inside the content panel', () => {
      render(
        <Accordion items={[{ id: 'p1', title: 'Test', children: <span>Obsah testu</span> }]} />,
      );
      expect(screen.getByText('Obsah testu')).toBeInTheDocument();
    });

    it('content panel has idsk-accordion__inner wrapper', () => {
      const { container } = render(<Accordion items={defaultItems} />);
      expect(container.querySelector('.idsk-accordion__inner')).toBeInTheDocument();
    });

    it('content stays in the DOM when hidden — not removed from tree', () => {
      render(<Accordion items={defaultItems} />);
      expect(screen.getByText('Obsah sekcie 1')).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // Accessibility — axe scans (AC: axe scan bez chýb)
  // ---------------------------------------------------------------------------
  describe('Accessibility', () => {
    it('has no a11y violations — all collapsed', async () => {
      const { container } = render(
        <main>
          <Accordion items={defaultItems} />
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations — one section expanded', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <main>
          <Accordion items={defaultItems} />
        </main>,
      );
      await user.click(screen.getAllByRole('button')[0]);
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations — all sections expanded', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <main>
          <Accordion items={defaultItems} />
        </main>,
      );
      for (const button of screen.getAllByRole('button')) {
        await user.click(button);
      }
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  // ---------------------------------------------------------------------------
  // Disabled state  (AC: deaktivovaná sekcia nie je interaktívna)
  // ---------------------------------------------------------------------------
  describe('Disabled state', () => {
    const itemsWithDisabled = [
      { id: 'item-1', title: 'Sekcia 1', children: <p>Obsah sekcie 1</p> },
      { id: 'item-2', title: 'Sekcia 2', children: <p>Obsah sekcie 2</p>, disabled: true },
      { id: 'item-3', title: 'Sekcia 3', children: <p>Obsah sekcie 3</p> },
    ];

    it('disabled button has the disabled HTML attribute', () => {
      render(<Accordion items={itemsWithDisabled} />);
      expect(screen.getByRole('button', { name: /Sekcia 2/i })).toBeDisabled();
    });

    it('non-disabled buttons remain enabled', () => {
      render(<Accordion items={itemsWithDisabled} />);
      expect(screen.getByRole('button', { name: /Sekcia 1/i })).not.toBeDisabled();
      expect(screen.getByRole('button', { name: /Sekcia 3/i })).not.toBeDisabled();
    });

    it('clicking a disabled button does not expand its content', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={itemsWithDisabled} />);
      await user.click(screen.getByRole('button', { name: /Sekcia 2/i }));
      expect(container.querySelectorAll('.idsk-accordion__content')[1]).toHaveAttribute('hidden');
    });

    it('disabled button keeps aria-expanded="false" after click attempt', async () => {
      const user = userEvent.setup();
      render(<Accordion items={itemsWithDisabled} />);
      await user.click(screen.getByRole('button', { name: /Sekcia 2/i }));
      expect(screen.getByRole('button', { name: /Sekcia 2/i })).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    });

    it('enabled sections expand independently when other sections are disabled', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={itemsWithDisabled} />);
      await user.click(screen.getByRole('button', { name: /Sekcia 1/i }));
      expect(container.querySelectorAll('.idsk-accordion__content')[0]).not.toHaveAttribute(
        'hidden',
      );
      expect(container.querySelectorAll('.idsk-accordion__content')[1]).toHaveAttribute('hidden');
    });

    it('all sections can be disabled simultaneously', () => {
      const allDisabled = defaultItems.map((item) => ({ ...item, disabled: true }));
      render(<Accordion items={allDisabled} />);
      screen.getAllByRole('button').forEach((btn) => {
        expect(btn).toBeDisabled();
      });
    });

    it('disabled is not set when the prop is omitted', () => {
      render(<Accordion items={defaultItems} />);
      screen.getAllByRole('button').forEach((btn) => {
        expect(btn).not.toBeDisabled();
      });
    });

    it('has no a11y violations with a mix of enabled and disabled items', async () => {
      const { container } = render(
        <main>
          <Accordion items={itemsWithDisabled} />
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  // ---------------------------------------------------------------------------
  // description prop  (AC: variant s popisom/bez popisu)
  // ---------------------------------------------------------------------------
  describe('description prop', () => {
    it('renders description text inside idsk-accordion__description when provided', () => {
      render(
        <Accordion items={[{ title: 'Sekcia', description: 'Popis sekcie', children: 'Obsah' }]} />,
      );
      expect(screen.getByText('Popis sekcie')).toBeInTheDocument();
    });

    it('wraps description in idsk-accordion__description span', () => {
      const { container } = render(
        <Accordion items={[{ title: 'Sekcia', description: 'Popis', children: 'Obsah' }]} />,
      );
      expect(container.querySelector('.idsk-accordion__description')).toHaveTextContent('Popis');
    });

    it('renders idsk-accordion__meta wrapper when description is present', () => {
      const { container } = render(
        <Accordion items={[{ title: 'Sekcia', description: 'Popis', children: 'Obsah' }]} />,
      );
      expect(container.querySelector('.idsk-accordion__meta')).toBeInTheDocument();
    });

    it('does not render idsk-accordion__meta when description is absent', () => {
      const { container } = render(<Accordion items={[{ title: 'Sekcia', children: 'Obsah' }]} />);
      expect(container.querySelector('.idsk-accordion__meta')).not.toBeInTheDocument();
    });

    it('description remains visible regardless of expanded state', async () => {
      const user = userEvent.setup();
      render(<Accordion items={[{ title: 'Sekcia', description: 'Popis', children: 'Obsah' }]} />);
      expect(screen.getByText('Popis')).toBeInTheDocument();
      await user.click(screen.getByRole('button'));
      expect(screen.getByText('Popis')).toBeInTheDocument();
    });
  });

  // ---------------------------------------------------------------------------
  // defaultOpen prop  (AC: východiskový rozbalený stav)
  // ---------------------------------------------------------------------------
  describe('defaultOpen prop', () => {
    it('section with defaultOpen=true is expanded on initial render', () => {
      const { container } = render(
        <Accordion
          items={[
            { id: 'a', title: 'A', children: 'Obsah A', defaultOpen: true },
            { id: 'b', title: 'B', children: 'Obsah B' },
          ]}
        />,
      );
      expect(container.querySelector('#a')).not.toHaveAttribute('hidden');
      expect(container.querySelector('#b')).toHaveAttribute('hidden');
    });

    it('button with defaultOpen=true has aria-expanded="true"', () => {
      render(
        <Accordion items={[{ id: 'a', title: 'A', children: 'Obsah A', defaultOpen: true }]} />,
      );
      expect(screen.getByRole('button', { name: /A/i })).toHaveAttribute('aria-expanded', 'true');
    });

    it('multiple sections can be defaultOpen simultaneously', () => {
      const { container } = render(
        <Accordion
          items={[
            { id: 'a', title: 'A', children: 'Obsah A', defaultOpen: true },
            { id: 'b', title: 'B', children: 'Obsah B', defaultOpen: true },
            { id: 'c', title: 'C', children: 'Obsah C' },
          ]}
        />,
      );
      expect(container.querySelector('#a')).not.toHaveAttribute('hidden');
      expect(container.querySelector('#b')).not.toHaveAttribute('hidden');
      expect(container.querySelector('#c')).toHaveAttribute('hidden');
    });

    it('defaultOpen=false behaves identically to omitting the prop', () => {
      const { container } = render(
        <Accordion items={[{ id: 'a', title: 'A', children: 'Obsah A', defaultOpen: false }]} />,
      );
      expect(container.querySelector('#a')).toHaveAttribute('hidden');
    });

    it('defaultOpen section can still be collapsed by clicking', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Accordion items={[{ id: 'a', title: 'A', children: 'Obsah A', defaultOpen: true }]} />,
      );
      await user.click(screen.getByRole('button', { name: /A/i }));
      expect(container.querySelector('#a')).toHaveAttribute('hidden');
    });

    it('has no a11y violations with defaultOpen items', async () => {
      const { container } = render(
        <main>
          <Accordion
            items={[
              { id: 'a', title: 'A', children: 'Obsah A', defaultOpen: true },
              { id: 'b', title: 'B', children: 'Obsah B' },
            ]}
          />
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  // ---------------------------------------------------------------------------
  // singleOpen prop  (AC: Single Open mód)
  // ---------------------------------------------------------------------------
  describe('singleOpen prop', () => {
    const singleOpenItems = [
      { id: 'item-1', title: 'Sekcia 1', children: <p>Obsah 1</p> },
      { id: 'item-2', title: 'Sekcia 2', children: <p>Obsah 2</p> },
      { id: 'item-3', title: 'Sekcia 3', children: <p>Obsah 3</p> },
    ];

    it('opening one section closes the previously open section', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={singleOpenItems} singleOpen />);
      const [btn1, btn2] = screen.getAllByRole('button');
      await user.click(btn1);
      await user.click(btn2);
      const panels = container.querySelectorAll('.idsk-accordion__content');
      expect(panels[0]).toHaveAttribute('hidden');
      expect(panels[1]).not.toHaveAttribute('hidden');
    });

    it('only one section can be open at a time', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={singleOpenItems} singleOpen />);
      for (const btn of screen.getAllByRole('button')) {
        await user.click(btn);
      }
      const panels = container.querySelectorAll('.idsk-accordion__content');
      const openCount = Array.from(panels).filter((p) => !p.hasAttribute('hidden')).length;
      expect(openCount).toBe(1);
    });

    it('clicking an open section in singleOpen mode collapses it', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={singleOpenItems} singleOpen />);
      const btn = screen.getAllByRole('button')[0];
      await user.click(btn);
      await user.click(btn);
      expect(container.querySelectorAll('.idsk-accordion__content')[0]).toHaveAttribute('hidden');
    });

    it('without singleOpen prop multiple sections stay open — unchanged default', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={singleOpenItems} />);
      const [btn1, btn2] = screen.getAllByRole('button');
      await user.click(btn1);
      await user.click(btn2);
      const panels = container.querySelectorAll('.idsk-accordion__content');
      expect(panels[0]).not.toHaveAttribute('hidden');
      expect(panels[1]).not.toHaveAttribute('hidden');
    });

    it('has no a11y violations in singleOpen mode', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <main>
          <Accordion items={singleOpenItems} singleOpen />
        </main>,
      );
      await user.click(screen.getAllByRole('button')[0]);
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  // ---------------------------------------------------------------------------
  // showToggleAll prop  (AC: tlačidlo Otvoriť/Zavrieť všetko)
  // ---------------------------------------------------------------------------
  describe('showToggleAll prop', () => {
    it('does not render toggle-all button by default', () => {
      render(<Accordion items={defaultItems} />);
      expect(screen.queryByRole('button', { name: /otvoriť všetko|zavrieť všetko/i })).toBeNull();
    });

    it('renders toggle-all button when showToggleAll=true', () => {
      render(<Accordion items={defaultItems} showToggleAll />);
      expect(screen.getByRole('button', { name: /otvoriť všetko/i })).toBeInTheDocument();
    });

    it('toggle-all button has class idsk-accordion__toggle-all', () => {
      const { container } = render(<Accordion items={defaultItems} showToggleAll />);
      expect(container.querySelector('.idsk-accordion__toggle-all')).toBeInTheDocument();
    });

    it('toggle-all button shows "Otvoriť všetko" when no sections are expanded', () => {
      render(<Accordion items={defaultItems} showToggleAll />);
      expect(screen.getByRole('button', { name: 'Otvoriť všetko' })).toBeInTheDocument();
    });

    it('clicking toggle-all opens all sections', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={defaultItems} showToggleAll />);
      await user.click(screen.getByRole('button', { name: 'Otvoriť všetko' }));
      container.querySelectorAll('.idsk-accordion__content').forEach((panel) => {
        expect(panel).not.toHaveAttribute('hidden');
      });
    });

    it('toggle-all label changes to "Zavrieť všetko" when all sections are open', async () => {
      const user = userEvent.setup();
      render(<Accordion items={defaultItems} showToggleAll />);
      await user.click(screen.getByRole('button', { name: 'Otvoriť všetko' }));
      expect(screen.getByRole('button', { name: 'Zavrieť všetko' })).toBeInTheDocument();
    });

    it('clicking toggle-all again closes all sections', async () => {
      const user = userEvent.setup();
      const { container } = render(<Accordion items={defaultItems} showToggleAll />);
      await user.click(screen.getByRole('button', { name: 'Otvoriť všetko' }));
      await user.click(screen.getByRole('button', { name: 'Zavrieť všetko' }));
      container.querySelectorAll('.idsk-accordion__content').forEach((panel) => {
        expect(panel).toHaveAttribute('hidden');
      });
    });

    it('toggle-all does not affect disabled sections', async () => {
      const user = userEvent.setup();
      const mixedItems = [
        { id: 'a', title: 'A', children: 'Obsah A' },
        { id: 'b', title: 'B', children: 'Obsah B', disabled: true },
        { id: 'c', title: 'C', children: 'Obsah C' },
      ];
      const { container } = render(<Accordion items={mixedItems} showToggleAll />);
      await user.click(screen.getByRole('button', { name: 'Otvoriť všetko' }));
      expect(container.querySelector('#a')).not.toHaveAttribute('hidden');
      expect(container.querySelector('#b')).toHaveAttribute('hidden');
      expect(container.querySelector('#c')).not.toHaveAttribute('hidden');
    });

    it('toggle-all label reflects state of enabled sections only', async () => {
      const user = userEvent.setup();
      const mixedItems = [
        { id: 'a', title: 'A', children: 'Obsah A' },
        { id: 'b', title: 'B', children: 'Obsah B', disabled: true },
      ];
      render(<Accordion items={mixedItems} showToggleAll />);
      await user.click(screen.getByRole('button', { name: 'Otvoriť všetko' }));
      expect(screen.getByRole('button', { name: 'Zavrieť všetko' })).toBeInTheDocument();
    });

    it('does not render toggle-all button when singleOpen=true', () => {
      render(<Accordion items={defaultItems} showToggleAll singleOpen />);
      expect(screen.queryByRole('button', { name: /otvoriť všetko|zavrieť všetko/i })).toBeNull();
    });

    it('has no a11y violations with showToggleAll', async () => {
      const { container } = render(
        <main>
          <Accordion items={defaultItems} showToggleAll />
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
