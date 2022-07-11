import React, { forwardRef } from 'react';
import { Nav } from './Nav';
import { NavContextProvider } from './nav-context';

export default {
  title: 'Nav/Nav',
  component: Nav,
  parameters: {
    chromatic: { viewports: [320, 440, 600, 900] },
    layout: 'fullscreen',
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

const navLinks = {
  home: { url: '/', linkWrapper: FakeGatsbyLink },
  whyStorybook: { url: '/why', linkWrapper: FakeGatsbyLink },
  useCases: { url: '/use-cases', linkWrapper: FakeGatsbyLink },
  caseStudies: { url: '/case-studies', linkWrapper: FakeGatsbyLink },
  componentDriven: { url: 'https://componentdriven.org' },
  getStarted: { url: '/docs', linkWrapper: FakeGatsbyLink },
  guides: { url: '/docs/guides', linkWrapper: FakeGatsbyLink },
  tutorials: { url: 'https://storybook.js.org/tutorials' },
  api: { url: '/docs/api', linkWrapper: FakeGatsbyLink },
  changelog: { url: '/changelog', linkWrapper: FakeGatsbyLink },
  showcase: { url: 'https://storybook.js.org/showcase' },
  projects: { url: 'https://storybook.js.org/showcase/projects' },
  componentGlossary: { url: 'https://storybook.js.org/showcase/glossary' },
  integrations: { url: '/integrations', linkWrapper: FakeGatsbyLink },
  getInvolved: { url: '/get-involved', linkWrapper: FakeGatsbyLink },
  blog: { url: 'https://storybook.js.org/blog' },
};

const Template = (args) => (
  <NavContextProvider value={navLinks}>
    <Nav {...args} />
  </NavContextProvider>
);

export const Default = Template.bind({});

export const Inverse = Template.bind({});
Inverse.args = { inverse: true };
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
