/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { axe } from '../../test/axe';
import { TopBar } from './TopBar';

describe('TopBar', () => {
  afterEach(() => cleanup());

  // ---------------------------------------------------------------------------
  // HTML structure
  // ---------------------------------------------------------------------------
  describe('HTML structure', () => {
    it('renders root with idsk-top-bar class', () => {
      const { container } = render(<TopBar />);
      expect(container.querySelector('.idsk-top-bar')).toBeInTheDocument();
    });

    it('renders the toggle button with visible label', () => {
      render(<TopBar />);
      const btn = screen.getByRole('button', { name: /Oficiálna stránka/i });
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveTextContent('verejnej správy SR');
    });

    it('renders the language picker by default', () => {
      render(<TopBar />);
      expect(screen.getByRole('button', { name: /Slovenčina/i })).toBeInTheDocument();
    });

    it('hides the language picker when showLanguagePicker=false', () => {
      render(<TopBar showLanguagePicker={false} />);
      expect(screen.queryByRole('button', { name: /Slovensky/i })).toBeNull();
    });

    it('renders custom language label', () => {
      render(<TopBar languages={[{ value: 'en', label: 'English' }]} />);
      expect(screen.getByRole('button', { name: /English/i })).toBeInTheDocument();
    });

    it('forwards extra HTML attributes to the root div', () => {
      const { container } = render(<TopBar data-testid="topbar" />);
      expect(container.querySelector('[data-testid="topbar"]')).toBeInTheDocument();
    });

    it('merges custom className without removing base class', () => {
      const { container } = render(<TopBar className="my-class" />);
      const el = container.querySelector('.idsk-top-bar');
      expect(el).toHaveClass('idsk-top-bar');
      expect(el).toHaveClass('my-class');
    });
  });

  // ---------------------------------------------------------------------------
  // Expanded / collapsed state
  // ---------------------------------------------------------------------------
  describe('Expanded state', () => {
    it('panel is hidden by default (collapsed)', () => {
      const { container } = render(<TopBar />);
      expect(container.querySelector('#idsk-top-bar-panel')).toHaveAttribute('hidden');
    });

    it('toggle button has aria-expanded=false when collapsed', () => {
      render(<TopBar />);
      expect(screen.getByRole('button', { name: /Oficiálna stránka/i })).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    });

    it('clicking toggle button expands the panel', () => {
      const { container } = render(<TopBar />);
      fireEvent.click(screen.getByRole('button', { name: /Oficiálna stránka/i }));
      expect(container.querySelector('#idsk-top-bar-panel')).not.toHaveAttribute('hidden');
      expect(screen.getByRole('button', { name: /Oficiálna stránka/i })).toHaveAttribute(
        'aria-expanded',
        'true',
      );
    });

    it('clicking toggle button again collapses the panel', () => {
      vi.useFakeTimers();
      const { container } = render(<TopBar />);
      const btn = screen.getByRole('button', { name: /Oficiálna stránka/i });
      fireEvent.click(btn);
      vi.advanceTimersByTime(400);
      fireEvent.click(btn);
      vi.useRealTimers();
      expect(container.querySelector('#idsk-top-bar-panel')).toHaveAttribute('hidden');
      expect(btn).toHaveAttribute('aria-expanded', 'false');
    });

    it('sets data-expanded attribute on root when expanded', () => {
      const { container } = render(<TopBar />);
      fireEvent.click(screen.getByRole('button', { name: /Oficiálna stránka/i }));
      expect(container.querySelector('.idsk-top-bar')).toHaveAttribute('data-expanded');
    });

    it('defaultExpanded=true starts in expanded state', () => {
      const { container } = render(<TopBar defaultExpanded />);
      expect(container.querySelector('#idsk-top-bar-panel')).not.toHaveAttribute('hidden');
    });

    it('calls onExpandedChange when toggled', () => {
      const onExpandedChange = vi.fn();
      render(<TopBar onExpandedChange={onExpandedChange} />);
      fireEvent.click(screen.getByRole('button', { name: /Oficiálna stránka/i }));
      expect(onExpandedChange).toHaveBeenCalledWith(true);
    });

    it('respects controlled expanded=true prop', () => {
      const { container } = render(<TopBar expanded={true} />);
      expect(container.querySelector('#idsk-top-bar-panel')).not.toHaveAttribute('hidden');
    });
  });

  // ---------------------------------------------------------------------------
  // Panel content
  // ---------------------------------------------------------------------------
  describe('Panel content', () => {
    it('shows default gov disclaimer text when expanded', () => {
      render(<TopBar defaultExpanded />);
      expect(screen.getByText(/Toto je oficiálna webová stránka/i)).toBeInTheDocument();
    });

    it('shows custom govDisclaimer when expanded', () => {
      render(<TopBar defaultExpanded govDisclaimer="Vlastný text upozornenia." />);
      expect(screen.getByText('Vlastný text upozornenia.')).toBeInTheDocument();
    });

    it('shows security notice title when expanded', () => {
      render(<TopBar defaultExpanded />);
      expect(screen.getByText('Táto stránka je zabezpečená')).toBeInTheDocument();
    });

    it('shows website list link by default when expanded', () => {
      render(<TopBar defaultExpanded />);
      expect(screen.getByRole('link', { name: /Zoznam adries/i })).toBeInTheDocument();
    });

    it('hides website list link when showWebsiteListLink=false', () => {
      render(<TopBar defaultExpanded showWebsiteListLink={false} />);
      expect(screen.queryByRole('link', { name: /Zoznam adries/i })).toBeNull();
    });

    it('renders custom website list link label and href', () => {
      render(
        <TopBar
          defaultExpanded
          websiteListLinkLabel="Vlastný odkaz"
          websiteListLinkHref="/odkaz"
        />,
      );
      const link = screen.getByRole('link', { name: 'Vlastný odkaz' });
      expect(link).toHaveAttribute('href', '/odkaz');
    });
  });

  // ---------------------------------------------------------------------------
  // Language picker
  // ---------------------------------------------------------------------------
  describe('Language picker', () => {
    it('calls onLanguageChange when a language is selected', async () => {
      const user = userEvent.setup();
      const onLanguageChange = vi.fn();
      render(
        <TopBar
          onLanguageChange={onLanguageChange}
          languages={[
            { value: 'sk', label: 'Slovenčina' },
            { value: 'en', label: 'English' },
          ]}
        />,
      );
      await user.click(screen.getByRole('button', { name: /Slovenčina/i }));
      await user.click(screen.getByRole('menuitem', { name: /English/i }));
      expect(onLanguageChange).toHaveBeenCalledWith('en');
    });
  });

  // ---------------------------------------------------------------------------
  // ARIA attributes (AC compliance)
  // ---------------------------------------------------------------------------
  describe('ARIA attributes', () => {
    it('toggle button has aria-controls pointing to the panel', () => {
      render(<TopBar />);
      expect(screen.getByRole('button', { name: /Oficiálna stránka/i })).toHaveAttribute(
        'aria-controls',
        'idsk-top-bar-panel',
      );
    });

    it('panel element id matches aria-controls value', () => {
      const { container } = render(<TopBar />);
      expect(container.querySelector('#idsk-top-bar-panel')).toBeInTheDocument();
    });

    it('language picker trigger has aria-haspopup="listbox"', () => {
      render(<TopBar />);
      const langBtn = screen.getByRole('button', { name: /Slovenčina/i });
      expect(langBtn).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('language picker trigger has aria-expanded', () => {
      render(<TopBar />);
      const langBtn = screen.getByRole('button', { name: /Slovenčina/i });
      expect(langBtn).toHaveAttribute('aria-expanded');
    });
  });

  // ---------------------------------------------------------------------------
  // Accessibility
  // ---------------------------------------------------------------------------
  describe('Accessibility', () => {
    it('has no a11y violations when collapsed', async () => {
      const { container } = render(
        <div>
          <TopBar />
          <main />
        </div>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations when expanded', async () => {
      const { container } = render(
        <div>
          <TopBar defaultExpanded />
          <main />
        </div>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
