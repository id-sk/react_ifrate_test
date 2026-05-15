import { Input, Tooltip } from '@idsk/core';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Core/Tooltip',
  component: Tooltip,
  argTypes: {
    preferredPosition: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description:
        'Preferovaný smer zobrazenia. Automaticky sa prispôsobí dostupnému miestu vo viewporte.',
    },
    label: {
      control: 'text',
      description: 'Viditeľný popis vľavo od ikony',
    },
    content: {
      control: 'text',
      description: 'Text tooltipu — iba čistý text, max. 290 znakov',
    },
    ariaLabel: {
      control: 'text',
      description: 'Prístupný popis tlačidla pre čítačky obrazovky',
    },
  },
  args: {
    preferredPosition: 'top',
    label: 'Dátum narodenia',
    content: 'Zadajte dátum v tvare DD.MM.RRRR. Napríklad: 01.01.1990.',
    ariaLabel: 'Nápoveda k dátumu narodenia',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

/**
 * Základný stav — tooltip sa zobrazí po kliknutí alebo nabehnutí na ikonu „i".
 */
export const Default: Story = {
  name: 'Základný',
};

/**
 * Tooltip zobrazený hore (predvolené).
 */
export const PositionTop: Story = {
  name: 'Pozícia — hore',
  args: { preferredPosition: 'top' },
};

/**
 * Tooltip zobrazený dole.
 */
export const PositionBottom: Story = {
  name: 'Pozícia — dole',
  args: { preferredPosition: 'bottom' },
};

/**
 * Tooltip zobrazený vľavo.
 */
export const PositionLeft: Story = {
  name: 'Pozícia — vľavo',
  args: { preferredPosition: 'left' },
};

/**
 * Tooltip zobrazený vpravo.
 */
export const PositionRight: Story = {
  name: 'Pozícia — vpravo',
  args: { preferredPosition: 'right' },
};

/**
 * Obsah blízko limitu 290 znakov.
 */
export const LongContent: Story = {
  name: 'Dlhý obsah (blízko limitu)',
  args: {
    content:
      'Zadajte vaše rodné číslo presne tak, ako je uvedené na občianskom preukaze alebo cestovnom pase. Rodné číslo sa skladá z 10 číslic a môže obsahovať lomku. Príklad: 900101/1234.',
  },
};

/**
 * Všetky štyri smery vedľa seba.
 */
export const AllPositions: Story = {
  name: 'Všetky smery',
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'flex-start' }}
    >
      <Tooltip {...args} preferredPosition="top" label="Hore" ariaLabel="Nápoveda hore" />
      <Tooltip {...args} preferredPosition="bottom" label="Dole" ariaLabel="Nápoveda dole" />
      <Tooltip {...args} preferredPosition="left" label="Vľavo" ariaLabel="Nápoveda vľavo" />
      <Tooltip {...args} preferredPosition="right" label="Vpravo" ariaLabel="Nápoveda vpravo" />
    </div>
  ),
};

/**
 * Mobilný viewport — tooltip sa otvára na ťuknutie (toggle) a zostáva otvorený.
 */
export const Mobile: Story = {
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '375px', padding: '24px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Integrácia s komplexným formulárom — tooltip pri textovom poli, radio buttonoch a selecte.
 */
export const FormIntegration: Story = {
  name: 'Formulár — integrácia',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '610px' }}>
      {/* Text input s tooltipom */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Tooltip
          label="Rodné číslo"
          content="Zadajte rodné číslo vo formáte RRMMDD/XXXX. Nájdete ho na občianskom preukaze."
          ariaLabel="Nápoveda k rodnému číslu"
          preferredPosition="top"
        />
        <Input placeholder="900101/1234" aria-label="Rodné číslo" />
      </div>

      {/* Radio group s tooltipom */}
      <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <legend style={{ float: 'left', fontWeight: 600 }}>Pohlavie</legend>
          <Tooltip
            label=""
            content="Pohlavie je potrebné pre správne spracovanie rodného čísla."
            ariaLabel="Nápoveda k pohláviu"
            preferredPosition="right"
          />
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="radio" name="gender" value="male" /> Muž
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="radio" name="gender" value="female" /> Žena
          </label>
        </div>
      </fieldset>

      {/* Select s tooltipom */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Tooltip
          label="Krajina pôvodu"
          content="Vyberte krajinu, v ktorej ste sa narodili, nie krajinu vášho aktuálneho bydliska."
          ariaLabel="Nápoveda k krajine pôvodu"
          preferredPosition="top"
        />
        <select
          aria-label="Krajina pôvodu"
          style={{
            padding: '8px 12px',
            borderRadius: '4px',
            border: '2px solid #1a1a1a',
            width: '100%',
          }}
        >
          <option value="">Vyberte krajinu...</option>
          <option value="sk">Slovenská republika</option>
          <option value="cz">Česká republika</option>
          <option value="at">Rakúsko</option>
          <option value="hu">Maďarsko</option>
        </select>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};
