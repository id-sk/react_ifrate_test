/**
 * @vitest-environment jsdom
 */
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { axe } from '../../test/axe';
import { Tooltip } from './Tooltip';

// Radix UI requires ResizeObserver — must be a proper class, not an arrow function
class ResizeObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
global.ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver;

function mockMatchMedia(isTouchDevice: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: isTouchDevice && query === '(hover: none) and (pointer: coarse)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

const defaultProps = {
  label: 'Dátum narodenia',
  content: 'Zadajte dátum v tvare DD.MM.RRRR',
  ariaLabel: 'Nápoveda k dátumu narodenia',
};

describe('Tooltip', () => {
  beforeEach(() => {
    mockMatchMedia(false);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // ---------------------------------------------------------------------------
  // Structure & HTML
  // ---------------------------------------------------------------------------
  describe('Structure & HTML', () => {
    it('renders the label text', () => {
      render(<Tooltip {...defaultProps} />);
      expect(screen.getByText('Dátum narodenia')).toBeInTheDocument();
    });

    it('renders a <button type="button"> as the trigger', () => {
      render(<Tooltip {...defaultProps} />);
      const btn = screen.getByRole('button');
      expect(btn.tagName).toBe('BUTTON');
      expect(btn).toHaveAttribute('type', 'button');
    });

    it('renders the "i" character inside an aria-hidden span', () => {
      render(<Tooltip {...defaultProps} />);
      const btn = screen.getByRole('button');
      const iconSpan = btn.querySelector('span[aria-hidden="true"]');
      expect(iconSpan).toBeInTheDocument();
      expect(iconSpan?.textContent).toBe('i');
    });

    it('wrapper contains label span then trigger button in order', () => {
      const { container } = render(<Tooltip {...defaultProps} />);
      const wrapper = container.querySelector('.idsk-tooltip__wrapper');
      expect(wrapper).toBeInTheDocument();
      const children = Array.from(wrapper?.children ?? []);
      expect(children[0]).toHaveClass('idsk-tooltip__label');
      expect(children[1].tagName).toBe('BUTTON');
    });
  });

  // ---------------------------------------------------------------------------
  // Accessibility — ARIA
  // ---------------------------------------------------------------------------
  describe('Accessibility — ARIA', () => {
    it('trigger button has aria-label', () => {
      render(<Tooltip {...defaultProps} />);
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-label',
        'Nápoveda k dátumu narodenia',
      );
    });

    it('tooltip content has role="tooltip" when open', async () => {
      const user = userEvent.setup();
      render(<Tooltip {...defaultProps} />);
      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });
    });

    it('tooltip content displays the content text when open', async () => {
      const user = userEvent.setup();
      render(<Tooltip {...defaultProps} />);
      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toHaveTextContent('Zadajte dátum v tvare DD.MM.RRRR');
      });
    });

    it('trigger has aria-describedby pointing to the tooltip content id when open', async () => {
      const user = userEvent.setup();
      render(<Tooltip {...defaultProps} />);
      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        const btn = screen.getByRole('button');
        const describedById = btn.getAttribute('aria-describedby');
        expect(describedById).toBeTruthy();
        expect(tooltip.id).toBeTruthy();
        expect(describedById).toContain(tooltip.id);
      });
    });

    it('does not set aria-expanded on desktop', () => {
      render(<Tooltip {...defaultProps} />);
      expect(screen.getByRole('button')).not.toHaveAttribute('aria-expanded');
    });

    it('sets aria-expanded="false" on touch device when closed', async () => {
      mockMatchMedia(true);
      render(<Tooltip {...defaultProps} />);
      await waitFor(() => {
        expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('sets aria-expanded="true" on touch device when open', async () => {
      mockMatchMedia(true);
      const user = userEvent.setup();
      render(<Tooltip {...defaultProps} />);
      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('"i" span inside trigger has aria-hidden="true"', () => {
      render(<Tooltip {...defaultProps} />);
      const iconSpan = screen.getByRole('button').querySelector('span');
      expect(iconSpan).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // ---------------------------------------------------------------------------
  // Open / Close behaviour
  // ---------------------------------------------------------------------------
  describe('Open / Close behaviour', () => {
    it('tooltip is not visible initially', () => {
      render(<Tooltip {...defaultProps} />);
      expect(screen.queryByRole('tooltip')).toBeNull();
    });

    it('clicking trigger opens tooltip', async () => {
      const user = userEvent.setup();
      render(<Tooltip {...defaultProps} />);
      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });
    });

    it('closes when pointer down fires outside the tooltip', async () => {
      render(<Tooltip {...defaultProps} />);
      const btn = screen.getByRole('button');
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
      act(() => {
        fireEvent.pointerDown(document.body);
      });
      await waitFor(() => expect(document.querySelector('.idsk-tooltip__content')).toBeNull());
    });

    it('clicking trigger again closes tooltip', async () => {
      render(<Tooltip {...defaultProps} />);
      const btn = screen.getByRole('button');
      // Use fireEvent (synchronous, no timer side-effects from userEvent event sequences).
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => {
        expect(document.querySelector('.idsk-tooltip__content')).toHaveAttribute(
          'data-state',
          'instant-open',
        );
      });
      act(() => {
        fireEvent.click(btn);
      });
      // In JSDOM no CSS animations run, so Radix unmounts content immediately on close.
      await waitFor(() => {
        expect(document.querySelector('.idsk-tooltip__content')).toBeNull();
      });
    });
  });

  // ---------------------------------------------------------------------------
  // Keyboard navigation
  // ---------------------------------------------------------------------------
  describe('Keyboard navigation', () => {
    it('Tab moves focus to the trigger button', async () => {
      const user = userEvent.setup();
      render(<Tooltip {...defaultProps} />);
      await user.tab();
      expect(screen.getByRole('button')).toHaveFocus();
    });

    it('Enter opens the tooltip', async () => {
      render(<Tooltip {...defaultProps} />);
      const btn = screen.getByRole('button');
      // fireEvent.keyDown fires synchronously — no timer interference from Radix's
      // 200ms focus delay. Our handleKeyDown intercepts Enter to toggle open.
      act(() => {
        fireEvent.keyDown(btn, { key: 'Enter' });
      });
      await waitFor(() => {
        expect(document.querySelector('.idsk-tooltip__content')).toBeInTheDocument();
      });
    });

    it('Space opens the tooltip', async () => {
      render(<Tooltip {...defaultProps} />);
      const btn = screen.getByRole('button');
      act(() => {
        fireEvent.keyDown(btn, { key: ' ' });
      });
      await waitFor(() => {
        expect(document.querySelector('.idsk-tooltip__content')).toBeInTheDocument();
      });
    });

    it('Escape closes an open tooltip', async () => {
      render(<Tooltip {...defaultProps} />);
      const btn = screen.getByRole('button');
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
      act(() => {
        fireEvent.keyDown(btn, { key: 'Escape' });
      });
      // In JSDOM no CSS animations run, so Radix unmounts content immediately on close.
      await waitFor(() => {
        expect(document.querySelector('.idsk-tooltip__content')).toBeNull();
      });
    });

    it('Escape does nothing when tooltip is already closed', async () => {
      const user = userEvent.setup();
      render(<Tooltip {...defaultProps} />);
      screen.getByRole('button').focus();
      await user.keyboard('{Escape}');
      expect(screen.queryByRole('tooltip')).toBeNull();
    });

    it('Enter closes an open tooltip (toggle)', async () => {
      render(<Tooltip {...defaultProps} />);
      const btn = screen.getByRole('button');
      act(() => {
        fireEvent.keyDown(btn, { key: 'Enter' });
      });
      await waitFor(() =>
        expect(document.querySelector('.idsk-tooltip__content')).toBeInTheDocument(),
      );
      act(() => {
        fireEvent.keyDown(btn, { key: 'Enter' });
      });
      await waitFor(() => expect(document.querySelector('.idsk-tooltip__content')).toBeNull());
    });

    it('Space closes an open tooltip (toggle)', async () => {
      render(<Tooltip {...defaultProps} />);
      const btn = screen.getByRole('button');
      act(() => {
        fireEvent.keyDown(btn, { key: ' ' });
      });
      await waitFor(() =>
        expect(document.querySelector('.idsk-tooltip__content')).toBeInTheDocument(),
      );
      act(() => {
        fireEvent.keyDown(btn, { key: ' ' });
      });
      await waitFor(() => expect(document.querySelector('.idsk-tooltip__content')).toBeNull());
    });
  });

  // ---------------------------------------------------------------------------
  // Hover behaviour
  // ---------------------------------------------------------------------------
  describe('Hover behaviour', () => {
    it('does not open on pointerenter', async () => {
      render(<Tooltip {...defaultProps} />);
      const btn = screen.getByRole('button');

      // Simulate hover
      act(() => {
        fireEvent.pointerEnter(btn);
      });

      // Wait a bit to ensure it doesn't open even after Radix's default delay
      await new Promise((r) => setTimeout(r, 300));

      expect(screen.queryByRole('tooltip')).toBeNull();
    });
  });

  // ---------------------------------------------------------------------------
  // Mobile / touch behaviour
  // ---------------------------------------------------------------------------
  describe('Mobile / touch behaviour', () => {
    it('click opens tooltip on touch device', async () => {
      mockMatchMedia(true);
      const user = userEvent.setup();
      render(<Tooltip {...defaultProps} />);
      await user.click(screen.getByRole('button'));
      await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
    });

    it('tooltip stays open after click on touch device — does not auto-close on hover events', async () => {
      mockMatchMedia(true);
      render(<Tooltip {...defaultProps} />);
      const btn = screen.getByRole('button');
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
      // Mouse leave should NOT close the tooltip on touch (only explicit click/tap should)
      act(() => {
        fireEvent.pointerLeave(btn);
      });
      await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
    });

    it('closes when clicking outside on touch device', async () => {
      mockMatchMedia(true);
      render(<Tooltip {...defaultProps} />);
      const btn = screen.getByRole('button');
      act(() => {
        fireEvent.click(btn);
      });
      await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
      act(() => {
        fireEvent.pointerDown(document.body);
      });
      await waitFor(() => expect(document.querySelector('.idsk-tooltip__content')).toBeNull());
    });
  });

  // ---------------------------------------------------------------------------
  // Positioning
  // ---------------------------------------------------------------------------
  describe('Positioning', () => {
    // Radix renders a visually-hidden aria span with role="tooltip" separately from
    // the visible floating content div. The data-side attribute lives on the visible
    // content element (.idsk-tooltip__content), not on the aria span.
    it('uses "top" as default preferredPosition', async () => {
      const user = userEvent.setup();
      render(<Tooltip {...defaultProps} />);
      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        const content = document.querySelector('.idsk-tooltip__content');
        expect(content).toHaveAttribute('data-side', 'top');
      });
    });

    it.each(['top', 'bottom', 'left', 'right'] as const)(
      'respects preferredPosition="%s"',
      async (position) => {
        const user = userEvent.setup();
        render(<Tooltip {...defaultProps} preferredPosition={position} />);
        await user.click(screen.getByRole('button'));
        await waitFor(() => {
          const content = document.querySelector('.idsk-tooltip__content');
          expect(content).toHaveAttribute('data-side', position);
        });
      },
    );
  });

  // ---------------------------------------------------------------------------
  // Automated a11y — axe / WCAG 2.1
  // ---------------------------------------------------------------------------
  describe('Automated a11y — axe / WCAG 2.1', () => {
    // `region` rule requires every element to be inside a landmark (main, nav, …).
    // In unit-test renders there is no landmark wrapper — this is a test-environment
    // false positive, not a real violation (in production Tooltip lives inside <main>).
    const axeOptions = { rules: { region: { enabled: false } } };

    it('has no a11y violations when closed', async () => {
      render(<Tooltip {...defaultProps} />);
      const results = await axe(document.body, axeOptions);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y violations when open', async () => {
      const user = userEvent.setup();
      render(<Tooltip {...defaultProps} />);
      await user.click(screen.getByRole('button'));
      await waitFor(() => expect(screen.getByRole('tooltip')).toBeInTheDocument());
      const results = await axe(document.body, axeOptions);
      expect(results).toHaveNoViolations();
    });
  });

  // ---------------------------------------------------------------------------
  // Content validation
  // ---------------------------------------------------------------------------
  describe('Content validation', () => {
    it('does not warn for content within 290 characters', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(<Tooltip {...defaultProps} content={'A'.repeat(290)} />);
      expect(warnSpy).not.toHaveBeenCalled();
    });

    it('warns in dev when content exceeds 290 characters', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      render(<Tooltip {...defaultProps} content={'A'.repeat(291)} />);
      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('290 characters'));
    });
  });
});
