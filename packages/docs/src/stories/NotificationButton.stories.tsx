import type { Meta, StoryObj } from '@storybook/react-vite';

import { NotificationButton } from '@idsk/core';
import MailIcon from '../../../core/src/assets/icons/MailIcon';
import NotificationsIcon from '../../../core/src/assets/icons/NotificationsIcon';

const meta = {
  title: 'Core/NotificationButton',
  component: NotificationButton,
  parameters: {
    docs: {
      description: {
        component:
          'Ikonové tlačidlo s voliteľným červeným badge indikátorom novej notifikácie. Ikona sa odovzdáva ako prop — môže to byť zvon, email, alebo ľubovoľná iná ikona.',
      },
    },
  },
  argTypes: {
    hasNew: { control: 'boolean' },
    newLabel: { control: 'text' },
    'aria-label': { control: 'text' },
  },
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bell: Story = {
  name: 'Zvonček — bez notifikácie',
  args: {
    icon: <NotificationsIcon size={25} />,
    hasNew: false,
    'aria-label': 'Notifikácie',
  },
};

export const BellWithNew: Story = {
  name: 'Zvonček — nová notifikácia',
  args: {
    icon: <NotificationsIcon size={25} />,
    hasNew: true,
    newLabel: 'Nová notifikácia',
    'aria-label': 'Notifikácie',
  },
};

export const Mail: Story = {
  name: 'Email — bez notifikácie',
  args: {
    icon: <MailIcon size={25} />,
    hasNew: false,
    'aria-label': 'Správy',
  },
};

export const MailWithNew: Story = {
  name: 'Email — nová správa',
  args: {
    icon: <MailIcon size={25} />,
    hasNew: true,
    newLabel: 'Nová správa',
    'aria-label': 'Správy',
  },
};
