import { Checkbox, CheckboxGroup } from '@idsk/core';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta = {
  title: 'Core/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['default', 'sm'],
      description: 'Veľkosť checkboxu',
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
      description: 'Či je checkbox zakázaný',
    },
    required: {
      control: 'boolean',
      description: 'Či je pole povinné',
    },
  },
  args: {
    label: 'Checkbox label',
    size: 'default',
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Komponent checkboxu pre výber jednej alebo viacerých možností. Podporuje rôzne veľkosti a doplnkové texty.',
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Velky: Story = {
  args: {
    label: 'Veľký checkbox',
    size: 'default',
  },
};

export const Maly: Story = {
  args: {
    label: 'Malý checkbox',
    size: 'sm',
  },
};

export const MalyDlhyText: Story = {
  args: {
    label:
      'Malý checkbox s veľmi dlhým textom, ktorý by sa mal taktiež správne zalamovať. Odsadenie by malo byť menšie ako pri veľkom checkboxe (34px namiesto 44px).',
    size: 'sm',
  },
};

export const S_PomocnymTextom: Story = {
  args: {
    label: 'Checkbox s pomocným textom',
    hint: 'Toto je pomocný text pre checkbox.',
  },
};

export const DlhyPomocnyText: Story = {
  args: {
    label: 'Checkbox s dlhým pomocným textom',
    hint: 'Toto je veľmi dlhý pomocný text, ktorý by sa mal správne zalamovať pod labelom checkboxu. Mal by dodržiavať rovnaké odsadenie od ľavého okraja ako samotný label.',
  },
};

export const Tooltip: Story = {
  args: {
    label: 'Checkbox s tooltipom',
    hint: 'Toto je pomocný text pre checkbox.',
    tooltip: {
      content: 'Toto je nápoveda k checkboxu. Vysvetľuje, čo sa stane, ak je vybraný.',
      preferredPosition: 'top',
    },
  },
};

export const S_Chybou: Story = {
  args: {
    label: 'Checkbox s chybou',
    errorMessage: 'Toto je chybová správa.',
  },
};

export const Povinny: Story = {
  args: {
    label: 'Povinný checkbox',
    required: true,
  },
};

export const Zakazany: Story = {
  args: {
    label: 'Zakázaný checkbox',
    disabled: true,
  },
};

export const DlhyText: Story = {
  args: {
    label:
      'Toto je veľmi dlhý text pre label checkboxu, ktorý by sa mal správne zalomiť na viacerých riadkoch, ak je kontajner príliš úzky. Overujeme, či odsadenie od samotného checkboxu zostáva zachované aj pri dlhšom texte.',
  },
};

export const ViacriadkovyText: Story = {
  args: {
    label: (
      <span>
        Prvý riadok labelu
        <br />
        Druhý riadok labelu s dlhším textom, aby sme videli správanie
        <br />
        Tretí riadok
      </span>
    ),
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true,
  },
};

function IndeterminateImplementaciaDemo() {
  const [checked, setChecked] = React.useState([true, false]);

  const allChecked = checked.every(Boolean);
  const isIndeterminate = checked.some(Boolean) && !allChecked;

  return (
    <CheckboxGroup legend="Príklad implementácie Indeterminate stavu">
      <Checkbox
        label="Vybrať všetko"
        checked={allChecked}
        indeterminate={isIndeterminate}
        onChange={(e) => setChecked([e.target.checked, e.target.checked])}
      />
      <div className="idsk-checkbox-group__subgroup">
        <Checkbox
          label="Možnosť A"
          checked={checked[0]}
          onChange={(e) => setChecked([e.target.checked, checked[1]])}
        />
        <Checkbox
          label="Možnosť B"
          checked={checked[1]}
          onChange={(e) => setChecked([checked[0], e.target.checked])}
        />
      </div>
    </CheckboxGroup>
  );
}

export const IndeterminateImplementacia: Story = {
  render: () => <IndeterminateImplementaciaDemo />,
};

export const Skupina: Story = {
  render: () => (
    <CheckboxGroup legend="Obľúbené ovocie" hint="Vyberte aspoň jednu možnosť">
      <Checkbox label="Jablko" name="fruit" value="apple" />
      <Checkbox label="Banán" name="fruit" value="banana" />
      <Checkbox label="Pomaranč" name="fruit" value="orange" />
    </CheckboxGroup>
  ),
};

export const Mobile: Story = {
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
