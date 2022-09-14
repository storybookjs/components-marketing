import React from 'react';
import { ColoredIcons } from '@storybook/design-system';
import { IllustratedFeatureList } from './IllustratedFeatureList';
import { SectionLede } from './SectionLede';

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
    media: 'spot-testing.m4v',
    poster: 'spot-testing.png',
  },
  {
    icon: <ColoredIcons.Pixel />,
    title: 'Visual test appearance',
    description: 'Pinpoint UI changes down to the pixel.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: 'visual-testing.m4v',
    poster: 'visual-testing.png',
  },
  {
    icon: <ColoredIcons.Interact />,
    title: 'Interaction test behavior',
    description: 'Simulate user behavior and assert in the browser.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: 'interaction-testing.m4v',
    poster: 'interaction-testing.png',
  },
  {
    icon: <ColoredIcons.Accessibility />,
    title: 'Accessibility test',
    description: 'Check stories for WCAG and ARIA issues.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: 'accessibility-testing.mp4',
    poster: 'accessibility-testing.png',
  },
  {
    icon: <ColoredIcons.Code />,
    title: 'Snapshot test markup',
    description: 'Detect regressions in DOM markup.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: 'snapshot-testing.m4v',
    poster: 'snapshot-testing.png',
  },
  {
    icon: <ColoredIcons.Projects />,
    title: 'Reuse tests in other test tools',
    description: 'Write stories once to reuse across your test suite.',
    link: { label: 'Learn about UI Tests', href: '#' },
    media: 'reuse-testing.m4v',
    poster: 'reuse-testing.png',
  },
];

const shortFeatures = [
  {
    icon: <ColoredIcons.Search />,
    title: 'Find any component or page in your app',
    description: 'Storybook is a single source of truth for UI.',
    link: { label: 'Learn about search', href: '#' },
    media: 'homepage-search-stories-lg.mp4',
    poster: 'homepage-search-stories-poster-lg.jpg',
  },
  {
    icon: <ColoredIcons.Document />,
    title: 'Generate UI docs automatically',
    description: 'Write Markdown and build custom docs.',
    link: { label: 'Learn about docs addon', href: '#' },
    media: 'homepage-component-document-lg.mp4',
    poster: 'homepage-component-document-poster-lg.jpg',
  },
  {
    icon: <ColoredIcons.Overlap />,
    title: 'Reuse components across pages and apps',
    description: 'Every story is a use case that you can reuse.',
    link: { label: 'Learn about reuse', href: '#' },
    media: 'homepage-reuse-components-across-apps-lg.mp4',
    poster: 'homepage-reuse-components-across-apps-poster-lg.jpg',
  },
  {
    icon: <ColoredIcons.Branch />,
    title: 'Track component history and versions',
    description: 'QA unexpected bugs by going back in time.',
    link: { label: 'Learn about versioning', href: '#' },
    media: 'homepage-component-history-lg.mp4',
    poster: 'homepage-component-history-poster-lg.jpg',
  },
];

export const Default = Template.bind({});
Default.args = {
  features,
  bgColor: '#FDDD9C',
};

export const CustomLockUpHeight = Template.bind({});
CustomLockUpHeight.args = {
  features,
  bgColor: '#FDDD9C',
  lockUpHeight: 800,
};

export const RightAligned = Template.bind({});
RightAligned.args = {
  features: shortFeatures,
  bgColor: '#c3eeaf',
  alignment: 'right',
  inverse: true,
};
RightAligned.parameters = {
  backgrounds: { default: 'dark' },
};

export const ShortList = Template.bind({});
ShortList.args = {
  features: shortFeatures,
  bgColor: '#c3eeaf',
};

export const Inverse = Template.bind({});
Inverse.args = {
  ...Default.args,
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};

export const SectionLayout = (args) => (
  <div>
    <SectionLede
      // eslint-disable-next-line react/destructuring-assignment
      inverse={args.inverse}
      heading="Test UIs with less effort and no flake"
      copy="Stories capture the “known good” states of UI components. They’re a pragmatic, reproducible way to keep track of UI edge cases. Reuse stories to power automated tests."
    />
    <IllustratedFeatureList {...args} />
  </div>
);
SectionLayout.args = {
  ...Default.args,
  inverse: true,
};
SectionLayout.parameters = {
  backgrounds: { default: 'dark' },
  chromatic: { disableSnapshot: true },
};
