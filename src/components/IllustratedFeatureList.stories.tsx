/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { ColoredIcons } from '@storybook/design-system';
import { IllustratedFeatureList } from './IllustratedFeatureList';

export default {
  title: 'IllustratedFeatureList',
  component: IllustratedFeatureList,
  parameters: {
    chromatic: { viewports: [440, 600, 900, 1200, 1600] },
  },
};

const Template = (args) => <IllustratedFeatureList {...args} />;

const features = [
  {
    icon: <ColoredIcons.Eye />,
    title: 'Spot test',
    description: 'Stories are tests you can debug in dev and QA.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: <video src="spot-testing.m4v" autoPlay loop />,
  },
  {
    icon: <ColoredIcons.Pixel />,
    title: 'Visual test appearance',
    description: 'Pinpoint UI changes down to the pixel.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: <video src="visual-testing.m4v" autoPlay loop />,
  },
  {
    icon: <ColoredIcons.Interact />,
    title: 'Interaction test behavior',
    description: 'Simulate user behavior and assert in the browser.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: <video src="interaction-testing.m4v" autoPlay loop />,
  },
  {
    icon: <ColoredIcons.Accessibility />,
    title: 'Accessibility test',
    description: 'Check stories for WCAG and ARIA issues.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: <video src="accessibility-testing.m4v" autoPlay loop />,
  },
  {
    icon: <ColoredIcons.Code />,
    title: 'Snapshot test markup',
    description: 'Detect regressions in DOM markup.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: <video src="snapshot-testing.m4v" autoPlay loop />,
  },
  {
    icon: <ColoredIcons.Projects />,
    title: 'Reuse tests in other test tools',
    description: 'Write stories once to reuse across your test suite.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: <video src="reuse-testing.m4v" autoPlay loop />,
  },
];

export const Default = Template.bind({});
Default.args = {
  features,
  bgColor: '#fed992',
};

export const CustomLockUpHeight = Template.bind({});
CustomLockUpHeight.args = {
  features,
  bgColor: '#fed992',
  lockUpHeight: 800,
};

export const RightAligned = Template.bind({});
RightAligned.args = {
  features,
  bgColor: '#fed992',
  alignment: 'right',
};

export const ShortList = Template.bind({});
ShortList.args = {
  features: features.slice(0, 3),
  bgColor: '#fed992',
};

export const Inverse = Template.bind({});
Inverse.args = {
  ...Default.args,
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
/* eslint-enable jsx-a11y/media-has-caption */
