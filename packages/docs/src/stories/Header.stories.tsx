import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button, Header, HeaderMainSection, TopBar } from '@idsk/core';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component:
          'Hlavička stránky — molekula zložená z TopBar-u a HeaderMainSection (logo, akcie). TopBar je prvý prvok zobrazený na samom vrchu, HeaderMainSection obsahuje logo organizácie a akčnú zónu.',
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Štandardná hlavička s TopBar-om a sekciou s logom, názvom organizácie a prihlásením. */
export const Default: Story = {
  args: {},
  render: (args) => (
    <Header {...args}>
      <TopBar />
      <HeaderMainSection orgName="Názov organizácie" orgSubtitle="Podnadpis" />
    </Header>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Kompletná hlavička — TopBar nasledovaný sekciou s názvom organizácie, vyhľadávaním a prihlásením.',
      },
    },
  },
};

/** Rozbalený TopBar spolu s hlavnou sekciou. */
export const WithExpandedTopBar: Story = {
  name: 'S rozbaleným TopBar-om',
  args: {},
  render: (args) => (
    <Header {...args}>
      <TopBar defaultExpanded />
      <HeaderMainSection orgName="Názov organizácie" orgSubtitle="Podnadpis" />
    </Header>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Hlavička s rozbaleným informačným pruhom — zobrazuje text o oficiálnosti stránky.',
      },
    },
  },
};

/** Vlastné akcie vložené medzi vyhľadávanie a tlačidlo prihlásenia. */
export const WithCustomActions: Story = {
  name: 'S vlastnými akciami',
  args: {},
  render: (args) => (
    <Header {...args}>
      <TopBar />
      <HeaderMainSection
        orgName="Názov organizácie"
        orgSubtitle="Podnadpis"
        actions={
          <Button variant="tertiary" size="md">
            Tlačidlo
          </Button>
        }
      />
    </Header>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Slot `actions` umožňuje vložiť ľubovoľné prvky (napr. textové tlačidlá, ikony) medzi vyhľadávanie a prihlásenie.',
      },
    },
  },
};

/** Hlavička bez vyhľadávania a bez tlačidla prihlásenia. */
export const MinimalActions: Story = {
  name: 'Minimálne akcie',
  args: {},
  render: (args) => (
    <Header {...args}>
      <TopBar />
      <HeaderMainSection
        orgName="Názov organizácie"
        orgSubtitle="Podnadpis"
        showSearch={false}
        showLogin={false}
      />
    </Header>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Verzia bez vyhľadávacieho tlačidla a bez prihlásenia — len logo a názov.',
      },
    },
  },
};

/** Transparentná hlavička na farebnom pozadí. */
export const Transparent: Story = {
  args: { variant: 'transparent' },
  render: (args) => (
    <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #4a7fb5 100%)', padding: 0 }}>
      <Header {...args}>
        <TopBar />
        <HeaderMainSection orgName="Názov organizácie" orgSubtitle="Podnadpis" />
      </Header>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Transparentný variant — vhodný na hero sekcie alebo farebné pozadia.',
      },
    },
  },
};

/** Varianta pre prihláseného užívateľa — avatar, mail, notifikácie namiesto login tlačidla. */
export const LoggedIn: Story = {
  name: 'Prihlásený užívateľ',
  args: {},
  render: (args) => (
    <Header {...args}>
      <TopBar />
      <HeaderMainSection
        orgName="Názov služby"
        orgSubtitle="Názov organizácie"
        showMail
        showNotifications
        notificationsHasNew
        user={{ name: 'Meno', caption: 'Popisný text' }}
        actions={
          <Button variant="tertiary" size="md">
            Tlačidlo
          </Button>
        }
      />
    </Header>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Prihlásený stav — avatar s menom namiesto login tlačidla, mail a notifikácie v akčnej zóne.',
      },
    },
  },
};

/** Varianta pre prihláseného užívateľa s profilovou fotkou. */
export const LoggedInWithPhoto: Story = {
  name: 'Prihlásený — s fotkou',
  args: {},
  render: (args) => (
    <Header {...args}>
      <TopBar />
      <HeaderMainSection
        orgName="Názov služby"
        orgSubtitle="Názov organizácie"
        showMail
        mailHasNew
        showNotifications
        user={{
          name: 'Meno',
          caption: 'Popisný text',
          avatarSrc: 'https://i.pravatar.cc/40',
        }}
      />
    </Header>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Prihlásený stav s profilovou fotkou a mail badge indikátorom.',
      },
    },
  },
};

/** Prilepená hlavička pri scrollovaní. */
export const Sticky: Story = {
  args: { sticky: true },
  render: (args) => (
    <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #e5e7eb' }}>
      <Header {...args}>
        <TopBar />
        <HeaderMainSection orgName="Názov organizácie" orgSubtitle="Podnadpis" />
      </Header>
      <div style={{ padding: '1rem', height: '600px', color: '#6b7280' }}>
        Obsah stránky — posúvajte pre overenie sticky správania.
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Sticky variant — hlavička zostáva viditeľná pri scrollovaní stránky.',
      },
    },
  },
};
