import React from 'react';
import { Icon } from '@storybook/design-system';
import { styled } from '@storybook/theming';
import { SocialCard } from './SocialCard';

const InverseIcon = styled(Icon)`
  color: #fff;
`;

export default {
  title: 'Cards/SocialCard',
  component: SocialCard,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 230 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    icon: {
      table: { disable: true },
      mapping: {
        InverseIcon: <InverseIcon icon="github" aria-label="Github" />,
      },
    },
  },
};

const Template = (args) => <SocialCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <Icon icon="github" aria-label="Github" />,
  description: 'Join 1440+ contributors building the future of UI development.',
  link: {
    label: 'Star on GitHub',
    href: 'https://github.com/storybookjs/',
  },
  stat: {
    count: '1440+',
    label: 'Contributors',
  },
};

export const Inverse = Template.bind({});
Inverse.args = {
  ...Default.args,
  icon: 'InverseIcon',
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
