import React from 'react';
import { Icon, Link } from '@storybook/design-system';
import { SupportFeature, SupportFeatureGrid } from './SupportFeature';

export default {
  title: 'SupportFeature',
  component: SupportFeature,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <SupportFeature {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: <Icon icon="discord" aria-label="Discord" />,
  title: 'Ask a question in #support chat',
  desc: 'Resolve issues with community help. A maintainer is usually online.',
  children: (
    <Link withArrow href="https://discord.gg/storybook">
      Chat now
    </Link>
  ),
};

export const MultipleLinks = Template.bind({});
MultipleLinks.args = {
  ...Default.args,
  children: (
    <>
      <Link withArrow href="https://discord.gg/storybook">
        Get logo
      </Link>
      <Link withArrow href="https://discord.gg/storybook">
        View design system
      </Link>
    </>
  ),
};

export const HorizontalLayout = Template.bind({});
HorizontalLayout.args = {
  ...Default.args,
  layout: 'horizontal',
  children: <div style={{ border: '1px dotted black', height: 32 }} />,
};

export const GridLayout = (args) => (
  <SupportFeatureGrid>
    <SupportFeature {...args} />
    <SupportFeature {...args} />
  </SupportFeatureGrid>
);
GridLayout.args = Default.args;
