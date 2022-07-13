import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { Icon } from '@storybook/design-system';
import { Menu } from './Menu';

export default {
  component: Menu,
  title: 'Menu',
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => (
  <div style={{ height: 200 }}>
    <Menu label="Why" {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: 'Copy canvas link',
      href: '/why-storybook',
    },
    {
      label: 'Open canvas in new tab',
      href: '/use-cases',
    },
    {
      label: 'Wrapped Text Item Wrapped Text Item Wrapped Text Item',
      href: 'case-studies',
    },
  ],
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const menuButton = canvas.getByRole('button', { name: /Why/i });
  await userEvent.click(menuButton);
  await userEvent.keyboard('{arrowdown}');
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  items: [
    {
      icon: <Icon icon="copy" />,
      label: 'Copy canvas link',
      href: '/why-storybook',
    },
    {
      icon: <Icon icon="sharealt" />,
      label: 'Open canvas in new tab',
      href: '/use-cases',
    },
    {
      icon: <Icon icon="expand" />,
      label: 'Wrapped Text Item Wrapped Text Item Wrapped Text Item',
      href: 'case-studies',
    },
  ],
};
WithIcon.play = Default.play;

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  primary: true,
};
Primary.play = Default.play;
