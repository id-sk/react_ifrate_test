import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from '@idsk/core';
import { initIDSK } from '@idsk/core/vanilla';

const meta: Meta<typeof Accordion> = {
  title: 'Core/Accordion',
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
  parameters: {
    docs: {
      description: {
        story: 'Základný akordeón s dvoma alebo viacerými sekciami.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Mobilné zobrazenie akordeóna na úzkych obrazovkách.',
      },
    },
  },
};

export const WithHint: Story = {
  args: {
    items: [
      {
        title: 'Sekcia s popisom',
        hint: 'Popis. Pokiaľ nadpis nie je dostatočne zrejmý, toto miesto slúži na vysvetlenie.',
        children: <p>Obsah sekcie s popisom.</p>,
      },
      {
        title: 'Sekcia bez popisu',
        children: <p>Obsah sekcie bez popisu.</p>,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Akordeón s voliteľným popisom (`hint`) pod nadpisom — použite keď nadpis nie je sám osebe dostatočne zrejmý.',
      },
    },
  },
};

export const MultiExpand: Story = {
  args: {
    items: [
      {
        title: 'Prvá sekcia',
        children: (
          <p>Akordeón podporuje otvorenie viacerých sekcií súčasne — každá je nezávislá.</p>
        ),
      },
      {
        title: 'Druhá sekcia',
        children: <p>Obsah druhej sekcie.</p>,
      },
      {
        title: 'Tretia sekcia',
        children: <p>Obsah tretej sekcie.</p>,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Akordeón so viacerými sekciami — rozbalenie jednej sekcie neuzavrie ostatné. Všetky sekcie môžu byť otvorené naraz.',
      },
    },
  },
};

export const WithDefaultOpen: Story = {
  args: {
    items: [
      {
        title: 'Predvolene rozbalená sekcia',
        children: <p>Táto sekcia je rozbalená hneď po načítaní stránky.</p>,
        defaultOpen: true,
      },
      {
        title: 'Predvolene zbalená sekcia',
        children: <p>Táto sekcia je zbalená a musí sa kliknúť na jej otvorenie.</p>,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Akordeón s predvolene rozbalenou sekciou — použite `defaultOpen: true` na položke. Sekciu možno kedykoľvek zatvoriť.',
      },
    },
  },
};

export const SingleOpen: Story = {
  args: {
    singleOpen: true,
    items: [
      {
        title: 'Prvá sekcia',
        children: <p>Otvorenie tejto sekcie automaticky zatvorí ostatné.</p>,
      },
      {
        title: 'Druhá sekcia',
        children: <p>Obsah druhej sekcie.</p>,
      },
      {
        title: 'Tretia sekcia',
        children: <p>Obsah tretej sekcie.</p>,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Akordeón v režime `singleOpen` — v danom okamihu môže byť otvorená iba jedna sekcia. Otvorenie novej sekcie automaticky zatvorí predchádzajúcu.',
      },
    },
  },
};

export const WithToggleAll: Story = {
  args: {
    showToggleAll: true,
    items: [
      {
        title: 'Prvá sekcia',
        children: <p>Obsah prvej sekcie.</p>,
      },
      {
        title: 'Druhá sekcia',
        children: <p>Obsah druhej sekcie.</p>,
      },
      {
        title: 'Tretia sekcia',
        children: <p>Obsah tretej sekcie.</p>,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Akordeón s tlačidlom „Otvoriť všetko / Zavrieť všetko". Tlačidlo synchrónne ovláda všetky sekcie v skupine.',
      },
    },
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      {
        title: 'Prvá sekcia (aktívna)',
        children: <p>Táto sekcia je dostupná a môže byť rozbalená.</p>,
      },
      {
        title: 'Druhá sekcia (neaktívna)',
        children: <p>Tento obsah nie je prístupný.</p>,
        disabled: true,
      },
      {
        title: 'Tretia sekcia (aktívna)',
        children: <p>Táto sekcia je tiež dostupná.</p>,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Akordeón s deaktivovanou sekciou. Tlačidlo deaktivovanej sekcie má atribút `disabled` — nie je klikateľné ani dosažiteľné cez Tab.',
      },
    },
  },
};
