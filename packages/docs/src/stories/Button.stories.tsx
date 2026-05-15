import { Button, type ButtonProps } from '@idsk/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

type IconComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { size?: number | string }
>;

// Eagerly load all icons from core at Vite build time
const iconModules = import.meta.glob<{ default: IconComponent }>(
  '../../../core/src/assets/icons/*.tsx',
  { eager: true },
);

const iconRegistry = Object.fromEntries(
  Object.entries(iconModules).map(([path, mod]) => {
    const name = path.split('/').pop()!.replace('.tsx', '');
    return [name, mod.default];
  }),
) as Record<string, IconComponent>;

const iconNames = Object.keys(iconRegistry).sort();

type ButtonStoryArgs = ButtonProps & {
  startIconName?: string;
  endIconName?: string;
};

function resolveIcon(name: string | undefined): React.ReactElement | undefined {
  if (!name) return undefined;
  const Icon = iconRegistry[name];
  return Icon ? <Icon /> : undefined;
}

const meta = {
  title: 'Core/Button',
  component: Button,
  render: ({ startIconName, endIconName, ...args }: ButtonStoryArgs) => (
    <Button {...args} startIcon={resolveIcon(startIconName)} endIcon={resolveIcon(endIconName)} />
  ),
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'tertiaryNoPadding'],
      description: 'Vizuálny štýl tlačidla',
      table: { defaultValue: { summary: 'primary' } },
    },
    colorScheme: {
      control: { type: 'select' },
      options: ['primary', 'error', 'success', 'white'],
      description: 'Farebná schéma tlačidla',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Veľkosť tlačidla',
      table: { defaultValue: { summary: 'lg' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Deaktivované tlačidlo',
    },
    asChild: {
      control: 'boolean',
      description: 'Vykresliť ako potomok (napr. odkaz)',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Obsah tlačidla',
    },
    startIconName: {
      control: { type: 'select' },
      options: [undefined, ...iconNames],
      description: 'Ikona pred textom',
      table: { category: 'Icons' },
    },
    endIconName: {
      control: { type: 'select' },
      options: [undefined, ...iconNames],
      description: 'Ikona za textom',
      table: { category: 'Icons' },
    },
    startIcon: { table: { disable: true } },
    endIcon: { table: { disable: true } },
    iconOnly: {
      control: 'boolean',
      description: 'Tlačidlo len s ikonkou – bez viditeľného textu. Vyžaduje aria-label.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    children: 'Tlačidlo',
    variant: 'primary',
    size: 'lg',
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Základný komponent tlačidla pre interakciu s používateľom. Podporuje varianty primary, secondary, tertiary a tertiary bez paddingu, farebné schémy, veľkosti a ikony pred/za textom.',
      },
    },
  },
} satisfies Meta<ButtonStoryArgs>;

export default meta;
type Story = StoryObj<ButtonStoryArgs>;

/* ─── Primary ─── */
export const Primary = { args: { variant: 'primary', children: 'Primary' } } satisfies Story;
export const PrimarySuccess = {
  args: { variant: 'primary', colorScheme: 'success', children: 'Primary Success' },
} satisfies Story;
export const PrimaryDisabled = {
  args: { variant: 'primary', disabled: true, children: 'Primary Disabled' },
} satisfies Story;

/* ─── Secondary ─── */
export const Secondary = { args: { variant: 'secondary', children: 'Secondary' } } satisfies Story;
export const SecondaryError = {
  args: { variant: 'secondary', colorScheme: 'error', children: 'Secondary Error' },
} satisfies Story;
export const SecondarySuccess = {
  args: { variant: 'secondary', colorScheme: 'success', children: 'Secondary Success' },
} satisfies Story;
export const SecondaryDisabled = {
  args: { variant: 'secondary', disabled: true, children: 'Secondary Disabled' },
} satisfies Story;

/* ─── Tertiary ─── */
export const Tertiary = { args: { variant: 'tertiary', children: 'Tertiary' } } satisfies Story;
export const TertiaryError = {
  args: { variant: 'tertiary', colorScheme: 'error', children: 'Tertiary Error' },
} satisfies Story;
export const TertiarySuccess = {
  args: { variant: 'tertiary', colorScheme: 'success', children: 'Tertiary Success' },
} satisfies Story;
export const TertiaryDisabled = {
  args: { variant: 'tertiary', disabled: true, children: 'Tertiary Disabled' },
} satisfies Story;
export const TertiaryWhite = {
  args: { variant: 'tertiary', colorScheme: 'white', children: 'Tertiary White' },
  decorators: [
    (Story) => (
      <div
        style={{
          background: '#1d2433',
          padding: '2rem',
          borderRadius: '8px',
          display: 'inline-block',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Story;

/* ─── Tertiary No Padding ─── */
export const TertiaryNoPadding = {
  args: { variant: 'tertiaryNoPadding', children: 'Tertiary No Padding' },
} satisfies Story;

/* ─── Sizes ─── */
export const SizeSM = { args: { size: 'sm', children: 'Small' } } satisfies Story;
export const SizeMD = { args: { size: 'md', children: 'Medium' } } satisfies Story;
export const SizeLG = { args: { size: 'lg', children: 'Large' } } satisfies Story;

/* ─── With icons ─── */
export const WithStartIcon = {
  args: {
    children: 'Odoslať',
    startIconName: 'SendIcon',
  },
} satisfies Story;

export const WithEndIcon = {
  args: {
    children: 'Stiahnuť',
    endIconName: 'DownloadIcon',
  },
} satisfies Story;

export const WithBothIcons = {
  args: {
    children: 'Pridať',
    startIconName: 'AddIcon',
    endIconName: 'ArrowForwardIcon',
  },
} satisfies Story;

/* ─── Icon only ─── */
export const IconOnly = {
  args: {
    iconOnly: true,
    startIconName: 'SendIcon',
    'aria-label': 'Odoslať',
    children: undefined,
  },
} satisfies Story;

export const IconOnlySecondary = {
  args: {
    iconOnly: true,
    variant: 'secondary',
    startIconName: 'AddIcon',
    'aria-label': 'Pridať',
    children: undefined,
  },
} satisfies Story;

export const IconOnlySM = {
  args: {
    iconOnly: true,
    size: 'sm',
    startIconName: 'SearchIcon',
    'aria-label': 'Hľadať',
    children: undefined,
  },
} satisfies Story;

/* ─── AsChild ─── */
export const AsChild = {
  args: {
    asChild: true,
    children: <a href="https://example.com">Link tlačidlo</a>,
  },
} satisfies Story;

/* ─── Mobile ─── */
export const Mobile: Story = {
  args: { children: 'Tlačidlo' },
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
