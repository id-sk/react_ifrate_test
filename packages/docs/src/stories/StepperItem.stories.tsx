import React from 'react';
import { StepperItem, type StepperItemProps } from '@idsk/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Core/StepperItem',
  component: StepperItem,
  decorators: [
    (Story) => (
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, width: 400 }}>
        <Story />
      </ol>
    ),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text kroku zobrazený vedľa indikátora',
    },
    stepNumber: {
      control: { type: 'number', min: 1 },
      description: 'Číslo kroku zobrazené v indikátore (pre nadchádzajúce kroky)',
    },
    isCompleted: {
      control: 'boolean',
      description: 'Krok je dokončený — zobrazí zaškrtnutie',
    },
    isActive: {
      control: 'boolean',
      description: 'Krok je aktívny — modrý pill background',
    },
    isSummary: {
      control: 'boolean',
      description: 'Krok je zhrnutie — zobrazí ikonu zoznamu',
    },
    isLast: {
      control: 'boolean',
      description: 'Posledný krok — nezobrazí connector',
    },
  },
  args: {
    label: 'Lorem ipsum dolor sit amet consectetur. Sed at sagittis tortor.',
    stepNumber: 1,
    isCompleted: false,
    isActive: false,
    isSummary: false,
    isLast: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'StepperItem predstavuje jeden krok v zozname Stepper komponentu. Podporuje stavy: nadchádzajúci, dokončený, aktívny a zhrnutie. Môže byť klikateľný (button) alebo statický (div).',
      },
    },
  },
} satisfies Meta<StepperItemProps>;

export default meta;
type Story = StoryObj<StepperItemProps>;

export const Upcoming: Story = {
  parameters: {
    docs: { description: { story: 'Nadchádzajúci krok — vyplnený modrý kruh s číslom.' } },
  },
};

export const Completed: Story = {
  args: { isCompleted: true },
  parameters: {
    docs: { description: { story: 'Dokončený krok — modrý kruh so zaškrtnutím.' } },
  },
};

export const Active: Story = {
  args: { isActive: true },
  parameters: {
    docs: { description: { story: 'Aktívny krok — modrý pill, biely indikátor s modrým číslom.' } },
  },
};

export const Summary: Story = {
  args: { isSummary: true },
  parameters: {
    docs: { description: { story: 'Zhrnutie — kruh s ikonou zoznamu.' } },
  },
};

export const SummaryActive: Story = {
  args: { isSummary: true, isActive: true },
  parameters: {
    docs: { description: { story: 'Aktívne zhrnutie — modrý pill s bielou ikonou.' } },
  },
};

export const Clickable: Story = {
  args: { isCompleted: true, onClick: () => {} },
  parameters: {
    docs: { description: { story: 'Klikateľný krok (dokončený) — renderuje sa ako button.' } },
  },
};

export const WithConnector: Story = {
  args: { isLast: false },
  parameters: {
    docs: { description: { story: 'Krok s konektorom — zvislá čiara nadväzujúca na ďalší krok.' } },
  },
};