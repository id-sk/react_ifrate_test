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
export const Primary = {
  args: { variant: 'primary', children: 'Primary' },
  parameters: {
    docs: {
      description: {
        story: 'Hlavné tlačidlo pre primárne akcie na stránke. Používajte ho iba raz na každej obrazovke.',
      },
    },
  },
} satisfies Story;
export const PrimarySuccess = {
  args: { variant: 'primary', colorScheme: 'success', children: 'Primary Success' },
  parameters: {
    docs: {
      description: {
        story: 'Primary variant so zelenou farebnou schémou (success).',
      },
    },
  },
} satisfies Story;
export const PrimaryDisabled = {
  args: { variant: 'primary', disabled: true, children: 'Primary Disabled' },
  parameters: {
    docs: {
      description: {
        story: 'Zakázaný stav primary tlačidla.',
      },
    },
  },
} satisfies Story;

/* ─── Secondary ─── */
export const Secondary = {
  args: { variant: 'secondary', children: 'Secondary' },
  parameters: {
    docs: {
      description: {
        story: 'Sekundárne tlačidlo pre doplnkové akcie vedľa primárneho tlačidla.',
      },
    },
  },
} satisfies Story;
export const SecondaryError = {
  args: { variant: 'secondary', colorScheme: 'error', children: 'Secondary Error' },
  parameters: {
    docs: {
      description: {
        story: 'Secondary variant s červenou farebnou schémou (error).',
      },
    },
  },
} satisfies Story;
export const SecondarySuccess = {
  args: { variant: 'secondary', colorScheme: 'success', children: 'Secondary Success' },
  parameters: {
    docs: {
      description: {
        story: 'Secondary variant so zelenou farebnou schémou (success).',
      },
    },
  },
} satisfies Story;
export const SecondaryDisabled = {
  args: { variant: 'secondary', disabled: true, children: 'Secondary Disabled' },
  parameters: {
    docs: {
      description: {
        story: 'Zakázaný stav secondary tlačidla.',
      },
    },
  },
} satisfies Story;

/* ─── Tertiary ─── */
export const Tertiary = {
  args: { variant: 'tertiary', children: 'Tertiary' },
  parameters: {
    docs: {
      description: {
        story: 'Terciárne tlačidlo pre menej dôležité akcie. Zobrazuje sa ako textový odkaz s podčiarknutím pri hover.',
      },
    },
  },
} satisfies Story;
export const TertiaryError = {
  args: { variant: 'tertiary', colorScheme: 'error', children: 'Tertiary Error' },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary variant s červenou farebnou schémou (error).',
      },
    },
  },
} satisfies Story;
export const TertiarySuccess = {
  args: { variant: 'tertiary', colorScheme: 'success', children: 'Tertiary Success' },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary variant so zelenou farebnou schémou (success).',
      },
    },
  },
} satisfies Story;
export const TertiaryDisabled = {
  args: { variant: 'tertiary', disabled: true, children: 'Tertiary Disabled' },
  parameters: {
    docs: {
      description: {
        story: 'Zakázaný stav tertiary tlačidla.',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: 'Tertiary variant s bielou farebnou schémou pre tmavé pozadia.',
      },
    },
  },
} satisfies Story;

/* ─── Tertiary No Padding ─── */
export const TertiaryNoPadding = {
  args: { variant: 'tertiaryNoPadding', children: 'Tertiary No Padding' },
  parameters: {
    docs: {
      description: {
        story: 'Variant bez paddingu pre vkladanie tlačidla priamo do textu alebo do iných komponentov.',
      },
    },
  },
} satisfies Story;

/* ─── Sizes ─── */
export const SizeSM = {
  args: { size: 'sm', children: 'Small' },
  parameters: {
    docs: {
      description: {
        story: 'Malá veľkosť (sm) tlačidla.',
      },
    },
  },
} satisfies Story;
export const SizeMD = {
  args: { size: 'md', children: 'Medium' },
  parameters: {
    docs: {
      description: {
        story: 'Stredná veľkosť (md) tlačidla.',
      },
    },
  },
} satisfies Story;
export const SizeLG = {
  args: { size: 'lg', children: 'Large' },
  parameters: {
    docs: {
      description: {
        story: 'Veľká veľkosť (lg) — predvolená.',
      },
    },
  },
} satisfies Story;

/* ─── With icons ─── */
export const WithStartIcon = {
  args: {
    children: 'Odoslať',
    startIconName: 'SendIcon',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ikona pred textom tlačidla pomocou prop startIcon. Ikony sú automaticky zabalené do aria-hidden spanu.',
      },
    },
  },
} satisfies Story;

export const WithEndIcon = {
  args: {
    children: 'Stiahnuť',
    endIconName: 'DownloadIcon',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ikona za textom tlačidla pomocou prop endIcon.',
      },
    },
  },
} satisfies Story;

export const WithBothIcons = {
  args: {
    children: 'Pridať',
    startIconName: 'AddIcon',
    endIconName: 'ArrowForwardIcon',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ikony pred aj za textom tlačidla.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Tlačidlo len s ikonkou bez viditeľného textu. Vyžaduje aria-label.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Secondary variant tlačidla len s ikonkou.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Malé tlačidlo len s ikonkou (veľkosť sm).',
      },
    },
  },
} satisfies Story;

/* ─── AsChild ─── */
export const AsChild = {
  args: {
    asChild: true,
    children: <a href="https://example.com">Link tlačidlo</a>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Prop asChild umožňuje vykresliť tlačidlo ako iný element (napr. <a>) pri zachovaní všetkých štýlov. Využíva Radix UI Slot.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Mobilné zobrazenie tlačidla na úzkych obrazovkách.',
      },
    },
  },
};
