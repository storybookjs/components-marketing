import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { Logos } from '@storybook/design-system';
import { NavMenu } from './NavMenu';
import { NavMenuItem } from './NavMenuItem';
import { ColoredIcon } from '../ColoredIcon';

export default {
  component: NavMenu,
  title: 'Nav/NavMenu',
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = ({ items, ...args }) => (
  <NavMenu label="Why" {...args}>
    {items.map((item) => (
      <NavMenuItem key={item.to} icon={item.icon} description={item.description} to={item.to}>
        {item.title}
      </NavMenuItem>
    ))}
  </NavMenu>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: 'Why Storybook?',
      description: 'Learn why frontend devs use Storybook to ship UIs.',
      to: '/why-storybook',
    },

    {
      title: 'Use cases',
      description: 'Learn why frontend devs use Storybook to ship UIs.',
      to: '/use-cases',
    },

    {
      title: 'Case studies',
      description: 'Learn why frontend devs use Storybook to ship UIs.',
      to: 'case-studies',
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
      icon: <Logos.StorybookIcon />,
      title: 'Why Storybook?',
      description: 'Learn why frontend devs use Storybook to ship UIs.',
      to: '/why-storybook',
    },
    {
      icon: <ColoredIcon icon="lightning" color="gold" />,
      title: 'Use cases',
      description: 'Learn why frontend devs use Storybook to ship UIs.',
      to: '/use-cases',
    },
    {
      icon: <ColoredIcon icon="graphline" color="green" />,
      title: 'Case studies',
      description: 'Learn why frontend devs use Storybook to ship UIs.',
      to: 'case-studies',
    },
  ],
};
WithIcon.play = Default.play;

export const Inverse = Template.bind({});
Inverse.args = {
  ...WithIcon.args,
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
Inverse.play = Default.play;
