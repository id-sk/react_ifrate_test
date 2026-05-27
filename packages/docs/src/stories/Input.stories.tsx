import { Input } from '@idsk/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Core/Input',
  component: Input,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'error'],
      description: 'Vizuálny štýl vstupu',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm'],
      description: 'Veľkosť vstupu',
    },
    label: {
      control: 'text',
      description: 'Text pre label (štítok) vstupu',
    },
    labelDescription: {
      control: 'text',
      description: 'Doplňujúci text pre label (podnadpis)',
    },
    required: {
      control: 'boolean',
      description: 'Či je pole povinné',
    },
    disabled: {
      control: 'boolean',
      description: 'Či je pole zakázané (disabled)',
    },
    inputDescription: {
      control: 'text',
      description: 'Doplňujúci text pod vstupným poľom (popis)',
    },
    errorDescription: {
      control: 'text',
      description: 'Text chyby zobrazený pri variante error',
    },
    tooltip: {
      control: 'object',
      description: 'Voliteľný tooltip zobrazený pri labeli (TooltipProps)',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Typ vstupu',
    },
  },
  args: {
    variant: 'default',
    label: 'Label',
    placeholder: 'Napr. Placeholder',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

const desktopDecorator: Story['decorators'] = [
  (Story) => (
    <div style={{ width: '610px' }}>
      <Story />
    </div>
  ),
];

/**
 * Povinné / nepovinné pole — hviezdička vs. "(nepovinné pole)"
 */
export const Required: Story = {
  name: 'Povinné',
  args: {
    label: 'Povinné pole',
    required: true,
  },
  decorators: desktopDecorator,
};

export const Optional: Story = {
  name: 'Nepovinné',
  args: {
    label: 'Nepovinné pole',
    required: false,
  },
  decorators: desktopDecorator,
};

/**
 * Pole s podnadpisom (labelDescription)
 */
export const WithSubheading: Story = {
  name: 'S podnadpisom',
  args: {
    label: 'Pole s podnadpisom',
    labelDescription: 'Toto je podnadpis (vysvetľujúci text pod labelom)',
  },
  decorators: desktopDecorator,
};

/**
 * Pole s pomocným popisom pod vstupom (inputDescription)
 */
export const WithDescription: Story = {
  name: 'S popisom',
  args: {
    label: 'Pole s popisom',
    placeholder: 'Napr. Placeholder',
    inputDescription: 'Toto je popis (pomocný text pod vstupným poľom)',
  },
  decorators: desktopDecorator,
};

/**
 * Pole s tooltipom pri labeli — zobrazí info ikonu s nápovedom
 */
export const WithTooltip: Story = {
  name: 'S tooltipom',
  args: {
    label: 'Pole s tooltipom',
    required: true,
    tooltip: {
      label: '',
      content: 'Toto je nápoveda k poľu. Vysvetľuje, čo má používateľ zadať.',
      ariaLabel: 'Nápoveda k poľu',
      preferredPosition: 'top',
    },
  },
  decorators: desktopDecorator,
};

/**
 * Chybový stav — zobrazí ikonu varovania a popis chyby
 */
export const Error: Story = {
  name: 'Chybový stav',
  args: {
    label: 'Pole s chybou',
    required: true,
    variant: 'error',
    errorDescription: 'Toto pole je povinné',
  },
  decorators: desktopDecorator,
};

/**
 * Zakázané (disabled) pole
 */
export const Disabled: Story = {
  name: 'Zakázané (disabled)',
  args: {
    label: 'Zakázané pole',
    placeholder: 'Napr. Placeholder',
    disabled: true,
  },
  decorators: desktopDecorator,
};

/**
 * Veľkostné varianty: sm / default / lg
 */
export const Sizes: Story = {
  name: 'Veľkosti',
  decorators: desktopDecorator,
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Input {...args} size="sm" label="Malé pole (sm)" />
      <Input {...args} size="default" label="Štandardné pole (default)" />
    </div>
  ),
};

/**
 * Kompletný desktop variant so všetkými prvkami
 */
export const Desktop: Story = {
  name: 'Desktop — kompletný',
  args: {
    label: 'Názov textového poľa',
    labelDescription: 'Toto je podnadpis (vysvetľujúci text pod labelom)',
    placeholder: 'Napr. Placeholder',
    inputDescription: 'Toto je popis (pomocný text pod vstupným poľom)',
    variant: 'error',
    errorDescription: 'Toto je popis chyby',
    required: true,
  },
  decorators: desktopDecorator,
};

export const Mobile: Story = {
  args: {
    label: 'Názov textového poľa',
    labelDescription: 'Toto je podnadpis (vysvetľujúci text pod labelom)',
    placeholder: 'Napr. Placeholder',
    inputDescription: 'Toto je popis (pomocný text pod vstupným poľom)',
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
