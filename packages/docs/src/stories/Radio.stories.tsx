import { Radio, RadioGroup } from '@idsk/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Core/Radio',
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['default', 'sm'],
      description: 'Veľkosť radio buttonu',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: 'text',
      description: 'Text popisku',
    },
    hint: {
      control: 'text',
      description: 'Pomocný text',
    },
    errorMessage: {
      control: 'text',
      description: 'Chybová správa',
    },
    disabled: {
      control: 'boolean',
      description: 'Či je radio button zakázaný',
    },
    required: {
      control: 'boolean',
      description: 'Či je pole povinné',
    },
  },
  args: {
    label: 'Radio label',
    name: 'radio-story',
    size: 'default',
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Komponent radio buttonu pre výber jednej možnosti zo skupiny. Podporuje rôzne veľkosti a doplnkové texty.',
      },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Velky: Story = {
  args: {
    label: 'Menovka',
    hint: 'Pomôcka',
    size: 'default',
    tooltip: { content: 'Vysvetlenie pre túto možnosť' },
  },
};

export const Maly: Story = {
  args: {
    label: 'Menovka',
    hint: 'Pomôcka',
    size: 'sm',
    tooltip: { content: 'Vysvetlenie pre túto možnosť' },
  },
};

export const S_PomocnymTextom: Story = {
  args: {
    label: 'Radio s pomocným textom',
    hint: 'Toto je pomocný text pre radio button.',
  },
};

export const S_Chybou: Story = {
  args: {
    label: 'Radio s chybou',
    errorMessage: 'Toto je chybová správa.',
  },
};

export const Povinny: Story = {
  args: {
    label: 'Povinný radio button',
    required: true,
  },
};

export const Zakazany: Story = {
  args: {
    label: 'Zakázaný radio button',
    disabled: true,
  },
};

export const Skupina: Story = {
  render: () => (
    <RadioGroup legend="Obľúbené ovocie" hint="Vyberte jednu možnosť">
      <Radio label="Jablko" name="fruit" value="apple" />
      <Radio label="Banán" name="fruit" value="banana" />
      <Radio label="Pomaranč" name="fruit" value="orange" />
    </RadioGroup>
  ),
};

export const SkupinaS_Chybou: Story = {
  render: () => (
    <RadioGroup legend="Obľúbené ovocie" errorMessage="Musíte vybrať jednu možnosť">
      <Radio label="Jablko" name="fruit-error" value="apple" />
      <Radio label="Banán" name="fruit-error" value="banana" />
      <Radio label="Pomaranč" name="fruit-error" value="orange" />
    </RadioGroup>
  ),
};

export const Mobile: Story = {
  args: { label: 'Radio label', hint: 'Pomôcka' },
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
