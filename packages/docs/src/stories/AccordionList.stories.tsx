import type { Meta, StoryObj } from '@storybook/react-vite';
import { AccordionList } from '@idsk/core';

const meta = {
  title: 'Components/AccordionList',
  component: AccordionList,
} satisfies Meta<typeof AccordionList>;

export default meta;
type Story = StoryObj<typeof AccordionList>;

export const Default: Story = {
  args: {
    title: 'Nadpis',
    items: [
      {
        title: 'Prvá sekcia',
        children: <p>Obsah prvej sekcie akordeónu.</p>,
      },
      {
        title: 'Druhá sekcia',
        children: <p>Obsah druhej sekcie akordeónu.</p>,
      },
      {
        title: 'Tretia sekcia',
        children: <p>Obsah tretej sekcie akordeónu.</p>,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Accordion list so záhlavím obsahujúcim nadpis a tlačidlo „Otvoriť všetky / Zavrieť všetky".',
      },
    },
  },
};

export const WithDefaultOpen: Story = {
  args: {
    title: 'Nadpis',
    items: [
      {
        title: 'Predvolene rozbalená sekcia',
        children: <p>Táto sekcia je rozbalená hneď po načítaní stránky.</p>,
        defaultOpen: true,
      },
      {
        title: 'Predvolene zbalená sekcia',
        children: <p>Táto sekcia sa musí kliknúť na otvorenie.</p>,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion list s predvolene rozbalenou sekciou pomocou `defaultOpen: true`.',
      },
    },
  },
};

export const SingleOpen: Story = {
  args: {
    title: 'Nadpis',
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
          'Accordion list v režime `singleOpen` — tlačidlo „Otvoriť všetky" je skryté, keďže v danom okamihu môže byť otvorená iba jedna sekcia.',
      },
    },
  },
};

export const WithDisabled: Story = {
  args: {
    title: 'Nadpis',
    items: [
      {
        title: 'Aktívna sekcia',
        children: <p>Táto sekcia je dostupná a môže byť rozbalená.</p>,
      },
      {
        title: 'Neaktívna sekcia',
        children: <p>Tento obsah nie je prístupný.</p>,
        disabled: true,
      },
      {
        title: 'Ďalšia aktívna sekcia',
        children: <p>Táto sekcia je tiež dostupná.</p>,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Accordion list s deaktivovanou sekciou. Tlačidlo „Otvoriť všetky" ignoruje deaktivované položky.',
      },
    },
  },
};
