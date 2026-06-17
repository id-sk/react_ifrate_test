import type { Meta, StoryObj } from '@storybook/react-vite';

import { TopBar } from '@idsk/core';

const LANGUAGES = [
  { value: 'sk', label: 'Slovenčina' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' },
  { value: 'cs', label: 'Čeština' },
  { value: 'hu', label: 'Magyar' },
];

const meta = {
  title: 'Organisms/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'TopBar je horný informačný pruh, ktorý sa zobrazuje na vrchu každej stránky verejnej správy. Obsahuje tlačidlo na rozbalenie informácií o oficiálnosti stránky a výber jazyka.',
      },
    },
  },
  argTypes: {
    defaultExpanded: {
      control: 'boolean',
      description: 'Počiatočný stav rozbalenia (nekontrolovaný)',
    },
    govDisclaimer: {
      control: 'text',
      description: 'Text upozornenia o oficiálnej stránke (ľavý stĺpec)',
    },
    showLanguagePicker: {
      control: 'boolean',
      description: 'Zobrazenie výberu jazyka',
    },
    showWebsiteListLink: {
      control: 'boolean',
      description: 'Zobrazenie odkazu na zoznam webových sídiel',
    },
  },
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {
  name: 'Zbalený (Expanded=off)',
  args: {
    defaultExpanded: false,
    showLanguagePicker: true,
    languages: LANGUAGES,

    showWebsiteListLink: true,
  },
};

export const Expanded: Story = {
  name: 'Rozbalený (Expanded=on)',
  args: {
    defaultExpanded: true,
    showLanguagePicker: true,
    languages: LANGUAGES,

    showWebsiteListLink: true,
  },
};

export const WithoutLanguagePicker: Story = {
  name: 'Bez výberu jazyka',
  args: {
    defaultExpanded: true,
    showLanguagePicker: false,
    showWebsiteListLink: true,
  },
};

export const CustomDisclaimer: Story = {
  name: 'Vlastný text upozornenia',
  args: {
    defaultExpanded: true,
    govDisclaimer:
      'Toto je webová stránka Ministerstva vnútra SR. Webové stránky s doménou .gov.sk sú overené stránky štátnych orgánov.',
    showLanguagePicker: true,
    showWebsiteListLink: true,
  },
};
