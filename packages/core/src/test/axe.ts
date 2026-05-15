import axeCore from 'axe-core';
import type { AxeResults, RunOptions } from 'axe-core';
import { expect } from 'vitest';

export async function axe(
  container: Element | Document,
  options?: RunOptions,
): Promise<AxeResults> {
  return options ? axeCore.run(container, options) : axeCore.run(container);
}

expect.extend({
  toHaveNoViolations(results: AxeResults) {
    const { violations } = results;
    if (violations.length === 0) {
      return { pass: true, message: () => 'Expected accessibility violations but found none' };
    }
    const message = violations
      .map(
        (v) =>
          `[${v.impact}] ${v.id}: ${v.description}\n  ${v.nodes.map((n) => n.html).join('\n  ')}`,
      )
      .join('\n\n');
    return {
      pass: false,
      message: () => `Found ${violations.length} accessibility violation(s):\n\n${message}`,
    };
  },
});

declare module 'vitest' {
  interface Assertion {
    toHaveNoViolations(): Promise<void>;
  }
  interface AsymmetricMatchersContaining {
    toHaveNoViolations(): Promise<void>;
  }
}
