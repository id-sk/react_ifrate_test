import { defineConfig, devices } from '@playwright/test';

/**
 * E2E config for testing the static `test-vanilla.html` demo page directly
 * (no bundler, no component mounting) — used for no-JS / progressive
 * enhancement scenarios that the CT config cannot exercise.
 */
export default defineConfig({
  testDir: './e2e',
  timeout: 10 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  webServer: {
    command: 'python3 -m http.server 4173',
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
