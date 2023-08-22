import React, { forwardRef } from 'react';
import { Footer } from './Footer';
import { LinksContextProvider } from '../links-context';

export default {
  title: 'Footer/Footer',
  component: Footer,
  parameters: {
    chromatic: { viewports: [320, 440, 600, 900] },
    layout: 'fullscreen',
  },
  args: {
    subscriberCount: 5363,
  },
};

const FakeGatsbyLink = forwardRef<HTMLAnchorElement, { to: string }>(
  ({ children, to, ...props }, ref) => (
    <a href={to} ref={ref} {...props}>
      {children}
    </a>
  )
);
FakeGatsbyLink.displayName = 'FakeGatsbyLink';

const links = {
  home: { url: '/', linkWrapper: FakeGatsbyLink },
  whyStorybook: { url: '/why', linkWrapper: FakeGatsbyLink },
  componentDriven: { url: 'https://componentdriven.org' },
  guides: { url: '/docs', linkWrapper: FakeGatsbyLink },
  tutorials: { url: 'https://storybook.js.org/tutorials' },
  changelog: { url: '/releases', linkWrapper: FakeGatsbyLink },
  telemetry: { url: '/telemetry', linkWrapper: FakeGatsbyLink },
  status: { url: 'https://storybook.js.org/status' },
  showcase: { url: 'https://storybook.js.org/showcase' },
  projects: { url: 'https://storybook.js.org/showcase/projects' },
  componentGlossary: { url: 'https://storybook.js.org/showcase/glossary' },
  integrations: { url: '/integrations', linkWrapper: FakeGatsbyLink },
  getInvolved: { url: '/community', linkWrapper: FakeGatsbyLink },
  blog: { url: 'https://storybook.js.org/blog' },
  hiring: { url: 'https://www.chromatic.com/company/jobs' },
  jobsBoard: {
    url: 'https://chromatic-ui.notion.site/Storybook-Jobs-Board-950e001e4a114a39980a5b09c3a3b3e1?pvs=4',
  },
  conferenceBoard: {
    url: 'https://chromatic-ui.notion.site/Give-a-conference-talk-about-Storybook-e8d8e78d4d0a448a811a8d927194c527?pvs=4',
  },
};

const Template = (args) => (
  <LinksContextProvider value={links}>
    <Footer {...args} />
  </LinksContextProvider>
);

export const Default = Template.bind({});

export const Inverse = Template.bind({});
Inverse.args = { inverse: true };
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
