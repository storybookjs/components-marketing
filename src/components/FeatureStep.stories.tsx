import React from 'react';
import { Link } from '@storybook/design-system';
import { styled } from '@storybook/theming';
import { FeatureStep, StepIcon } from './FeatureStep';

const MergeIcon = styled(StepIcon)`
  background: linear-gradient(180deg, #cf60ff 0%, #af44ff 100%);

  svg {
    margin-right: -2px;
  }
`;

export default {
  title: 'FeatureStep',
  component: FeatureStep,
  argTypes: {
    icon: {
      table: { disable: true },
      mapping: {
        MergeIcon: <MergeIcon icon="merge" />,
      },
    },
  },
};

const Template = (args) => <FeatureStep {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'UI Review',
  description:
    'Request feedback from teammates to verify the UI implementation. Discuss UI changes together then assign reviewers for final sign off.',
  link: (
    <Link containsIcon withArrow href="/why-storybook">
      Why build UIs in isolation?
    </Link>
  ),
};

export const Inverse = Template.bind({});
Inverse.args = {
  ...Default.args,
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  ...Inverse.args,
  icon: 'MergeIcon',
};
CustomIcon.parameters = {
  backgrounds: { default: 'dark' },
};
