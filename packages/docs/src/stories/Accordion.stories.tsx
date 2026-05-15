import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from '@idsk/core';
import { initIDSK } from '@idsk/core/vanilla';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [
    (Story) => {
      useEffect(() => {
        // Inicializácia vanilla skriptov po renderi v Storybooku
        initIDSK();
      }, []);
      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Prvá sekcia',
        children: <p>Obsah prvej sekcie akordeónu.</p>,
      },
      {
        title: 'Druhá sekcia',
        children: <p>Obsah druhej sekcie akordeónu.</p>,
      },
    ],
  },
};

export const Mobile: Story = {
  args: {
    ...Default.args,
  },
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '375px' }}>
        <Story />
      </div>
    ),
  ],
};
