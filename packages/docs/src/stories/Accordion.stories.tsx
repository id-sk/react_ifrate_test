import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from '@idsk/core';
import { initIDSK } from '@idsk/core/vanilla';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
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
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
      },
      {
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
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

export const WithDescription: Story = {
  args: {
    items: [
      {
        title: 'Nadpis akordeónu',
        description:
          'Popis. Pokiaľ nie je nadpis dostatočne zrejmý a potrebuje vysvetlenie, alebo ak je nadpis príliš dlhý (viac, ako 5 slov), toto je miesto na viacslovný popis.',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
      },
      {
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Akordeón s voliteľným popisom (`description`) pod nadpisom — použite keď nadpis nie je sám osebe dostatočne zrejmý.',
      },
    },
  },
};

export const MultiExpand: Story = {
  args: {
    items: [
      {
        title: 'Nadpis akordeónu',
        children: (
          <p>Akordeón podporuje otvorenie viacerých sekcií súčasne — každá je nezávislá.</p>
        ),
      },
      {
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
      },
      {
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
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
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
        defaultOpen: true,
      },
      {
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
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
        title: 'Nadpis akordeónu',
        children: <p>Otvorenie tejto sekcie automaticky zatvorí ostatné.</p>,
      },
      {
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
      },
      {
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
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
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
      },
      {
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
      },
      {
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
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
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
      },
      {
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
        disabled: true,
      },
      {
        title: 'Nadpis akordeónu',
        children: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ),
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
