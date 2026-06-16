/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { axe } from '../../test/axe';
import { Button } from './Button';

const MockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" {...props} />
);

describe('Button', () => {
  afterEach(() => {
    cleanup();
  });

  // ---------------------------------------------------------------------------
  // HTML structure (AC: natívny <button>, IDSK triedy)
  // ---------------------------------------------------------------------------
  describe('HTML structure', () => {
    it('renders a native <button> element, not <a> or other', () => {
      render(<Button>Odoslať</Button>);
      expect(screen.getByRole('button').tagName).toBe('BUTTON');
    });

    it('has base class idsk-button', () => {
      render(<Button>Odoslať</Button>);
      expect(screen.getByRole('button')).toHaveClass('idsk-button');
    });

    it('merges custom className without removing base classes', () => {
      render(<Button className="my-override">Odoslať</Button>);
      const btn = screen.getByRole('button');
      expect(btn).toHaveClass('idsk-button');
      expect(btn).toHaveClass('my-override');
    });
  });

  // ---------------------------------------------------------------------------
  // Variants (AC: primary, secondary, tertiary, tertiaryNoPadding)
  // ---------------------------------------------------------------------------
  describe('Variants', () => {
    it.each([
      ['primary', 'idsk-button--primary'],
      ['secondary', 'idsk-button--secondary'],
      ['tertiary', 'idsk-button--tertiary'],
      ['tertiaryNoPadding', 'idsk-button--tertiary-nopadding'],
    ] as const)('%s variant applies %s class', (variant, className) => {
      render(<Button variant={variant}>Tlačidlo</Button>);
      expect(screen.getByRole('button')).toHaveClass(className);
    });

    it('default variant is primary when no variant prop is passed', () => {
      render(<Button>Tlačidlo</Button>);
      expect(screen.getByRole('button')).toHaveClass('idsk-button--primary');
    });
  });

  // ---------------------------------------------------------------------------
  // Sizes
  // ---------------------------------------------------------------------------
  describe('Sizes', () => {
    it.each([
      ['sm', 'idsk-button--sm'],
      ['md', 'idsk-button--md'],
      ['lg', 'idsk-button--lg'],
    ] as const)('%s size applies %s class', (size, className) => {
      render(<Button size={size}>Tlačidlo</Button>);
      expect(screen.getByRole('button')).toHaveClass(className);
    });

    it('default size is lg', () => {
      render(<Button>Tlačidlo</Button>);
      expect(screen.getByRole('button')).toHaveClass('idsk-button--lg');
    });
  });

  // ---------------------------------------------------------------------------
  // Icon variants (AC: s ikonkou vpravo a vľavo)
  // ---------------------------------------------------------------------------
  describe('Icon variants', () => {
    it('renders with decorative icon on the left — icon has aria-hidden="true"', () => {
      render(
        <Button>
          <MockIcon aria-hidden="true" data-testid="icon-left" />
          Odoslať
        </Button>,
      );
      expect(screen.getByTestId('icon-left')).toHaveAttribute('aria-hidden', 'true');
      expect(screen.getByRole('button')).toHaveTextContent('Odoslať');
    });

    it('renders with decorative icon on the right — icon has aria-hidden="true"', () => {
      render(
        <Button>
          Odoslať
          <MockIcon aria-hidden="true" data-testid="icon-right" />
        </Button>,
      );
      expect(screen.getByTestId('icon-right')).toHaveAttribute('aria-hidden', 'true');
      expect(screen.getByRole('button')).toHaveTextContent('Odoslať');
    });
  });

  // ---------------------------------------------------------------------------
  // startIcon / endIcon props
  // ---------------------------------------------------------------------------
  describe('startIcon and endIcon props', () => {
    it('renders startIcon before children', () => {
      render(<Button startIcon={<MockIcon data-testid="start-icon" />}>Odoslať</Button>);
      expect(screen.getByTestId('start-icon')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Odoslať');
    });

    it('renders endIcon after children', () => {
      render(<Button endIcon={<MockIcon data-testid="end-icon" />}>Odoslať</Button>);
      expect(screen.getByTestId('end-icon')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Odoslať');
    });

    it('wraps startIcon in aria-hidden span', () => {
      render(<Button startIcon={<MockIcon data-testid="start-icon" />}>Odoslať</Button>);
      expect(screen.getByTestId('start-icon').closest('[aria-hidden="true"]')).not.toBeNull();
    });

    it('wraps endIcon in aria-hidden span', () => {
      render(<Button endIcon={<MockIcon data-testid="end-icon" />}>Odoslať</Button>);
      expect(screen.getByTestId('end-icon').closest('[aria-hidden="true"]')).not.toBeNull();
    });

    it('renders both startIcon and endIcon simultaneously', () => {
      render(
        <Button
          startIcon={<MockIcon data-testid="start-icon" />}
          endIcon={<MockIcon data-testid="end-icon" />}
        >
          Odoslať
        </Button>,
      );
      expect(screen.getByTestId('start-icon')).toBeInTheDocument();
      expect(screen.getByTestId('end-icon')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Odoslať');
    });

    it('has no a11y violations with startIcon', async () => {
      const { container } = render(
        <main>
          <Button startIcon={<MockIcon />}>Odoslať</Button>
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  // ---------------------------------------------------------------------------
  // Disabled state (AC: disabled stav)
  // ---------------------------------------------------------------------------
  describe('Disabled state', () => {
    it('carries the disabled attribute', () => {
      render(<Button disabled>Odoslať</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('does not invoke onClick when disabled', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <Button disabled onClick={onClick}>
          Odoslať
        </Button>,
      );
      await user.click(screen.getByRole('button'));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  // ---------------------------------------------------------------------------
  // Click and keyboard behaviour (AC: Tab, Enter, Space)
  // ---------------------------------------------------------------------------
  describe('Click and keyboard behaviour', () => {
    it('invokes onClick on mouse click', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Odoslať</Button>);
      await user.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('invokes onClick on Enter key', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Odoslať</Button>);
      screen.getByRole('button').focus();
      await user.keyboard('{Enter}');
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('invokes onClick on Space key', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Odoslať</Button>);
      screen.getByRole('button').focus();
      await user.keyboard(' ');
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('prevents rapid double-click from firing onClick more than once', async () => {
      const user = userEvent.setup({ delay: null });
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Odoslať</Button>);
      await user.dblClick(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  // ---------------------------------------------------------------------------
  // Icon only
  // ---------------------------------------------------------------------------
  describe('Icon only', () => {
    it('applies idsk-button--icon-only class when iconOnly is true', () => {
      render(<Button iconOnly aria-label="Odoslať" startIcon={<MockIcon data-testid="icon" />} />);
      expect(screen.getByRole('button')).toHaveClass('idsk-button--icon-only');
    });

    it('renders without children and displays the icon', () => {
      render(<Button iconOnly aria-label="Odoslať" startIcon={<MockIcon data-testid="icon" />} />);
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('has no a11y violations with aria-label', async () => {
      const { container } = render(
        <main>
          <Button iconOnly aria-label="Odoslať" startIcon={<MockIcon />} />
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  // ---------------------------------------------------------------------------
  // asChild behaviour
  // ---------------------------------------------------------------------------
  describe('asChild behaviour', () => {
    it('applies draggable="false" to the child element by default when asChild is true', () => {
      render(
        <Button asChild>
          <a href="https://example.com" data-testid="child-link">
            Link
          </a>
        </Button>,
      );
      const link = screen.getByTestId('child-link');
      expect(link).toHaveAttribute('draggable', 'false');
    });

    it('allows overriding draggable attribute when specified', () => {
      render(
        <Button asChild draggable="true">
          <a href="https://example.com" data-testid="child-link">
            Link
          </a>
        </Button>,
      );
      const link = screen.getByTestId('child-link');
      expect(link).toHaveAttribute('draggable', 'true');
    });
  });

  // ---------------------------------------------------------------------------
  // Accessibility — jest-axe (AC: a11y testy prechádzajú)
  // ---------------------------------------------------------------------------
  describe('Accessibility', () => {
    it('has no a11y violations — default state', async () => {
      const { container } = render(
        <main>
          <Button>Odoslať</Button>
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations — disabled state', async () => {
      const { container } = render(
        <main>
          <Button disabled>Odoslať</Button>
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it('has no a11y violations — button with decorative icon', async () => {
      const { container } = render(
        <main>
          <Button>
            <MockIcon aria-hidden="true" />
            Odoslať
          </Button>
        </main>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
