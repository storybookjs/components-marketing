/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { ColoredIcons } from '@storybook/design-system';
import { IllustratedFeatureList } from './IllustratedFeatureList';

export default {
  title: 'IllustratedFeatureList',
  component: IllustratedFeatureList,
};

const Template = (args) => <IllustratedFeatureList {...args} />;

const features = [
  {
    icon: <ColoredIcons.Eye />,
    title: 'Spot test',
    description: 'Stories are tests you can debug in dev and QA.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: <video src="spot-testing.m4v" autoPlay />,
  },
  {
    icon: <ColoredIcons.Pixel />,
    title: 'Visual test appearance',
    description: 'Pinpoint UI changes down to the pixel.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: <video src="visual-testing.m4v" autoPlay />,
  },
  {
    icon: <ColoredIcons.Interact />,
    title: 'Interaction test behavior',
    description: 'Simulate user behavior and assert in the browser.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: <video src="interaction-testing.m4v" autoPlay />,
  },
  {
    icon: <ColoredIcons.Accessibility />,
    title: 'Accessibility test',
    description: 'Check stories for WCAG and ARIA issues.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: <video src="accessibility-testing.m4v" autoPlay />,
  },
  {
    icon: <ColoredIcons.Code />,
    title: 'Snapshot test markup',
    description: 'Detect regressions in DOM markup.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: <video src="snapshot-testing.m4v" autoPlay />,
  },
  {
    icon: <ColoredIcons.Projects />,
    title: 'Reuse tests in other test tools',
    description: 'Write stories once to reuse across your test suite.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: <video src="reuse-testing.m4v" autoPlay />,
  },
];

export const Default = Template.bind({});
Default.args = {
  features,
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
