import React, { forwardRef } from 'react';
import { Icon } from '@storybook/design-system';
import { Nav } from './Nav';
import { LinksContextProvider, defaultLinks } from '../links-context';
import { Eyebrow } from '../Eyebrow';
import { SubNav, SubNavBreadcrumb, SubNavRight, SubNavCTA } from '../SubNav';

export default {
  title: 'Nav/Nav',
  component: Nav,
  parameters: {
    chromatic: { viewports: [320, 440, 600, 1000] },
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
  ...defaultLinks,
  home: { url: '/', linkWrapper: FakeGatsbyLink },
  whyStorybook: { url: '/why', linkWrapper: FakeGatsbyLink },
  componentDriven: { url: 'https://componentdriven.org' },
  guides: { url: '/docs', linkWrapper: FakeGatsbyLink },
  tutorials: { url: 'https://storybook.js.org/tutorials' },
  changelog: { url: '/releases', linkWrapper: FakeGatsbyLink },
  telemetry: { url: '/telemetry', linkWrapper: FakeGatsbyLink },
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
  <LinksContextProvider value={navLinks}>
    <Nav apiKey="ALGOLIA_API_KEY" {...args} />
  </LinksContextProvider>
);

export const Default = Template.bind({});

export const Inverse = Template.bind({});
Inverse.args = { inverse: true, activeSection: 'integrations' };
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};

export const ActiveItem = Template.bind({});
ActiveItem.args = { activeSection: 'why' };

export const ActiveMenu = Template.bind({});
ActiveMenu.args = { activeSection: 'docs' };

export const Monochrome = Template.bind({});
Monochrome.args = { inverse: true, monochrome: true, activeSection: 'community' };
Monochrome.parameters = {
  backgrounds: {
    default: 'custom',
    values: [
      {
        name: 'custom',
        value: '#339F00',
      },
    ],
  },
};

export const FullStack = () => (
  <LinksContextProvider value={navLinks}>
    <Eyebrow
      label="Storybook Lazy Compilation for Webpack"
      link="https://storybook.js.org/blog/storybook-lazy-compilation-for-webpack/"
      githubStarCount={73724}
    />
    <Nav apiKey="ALGOLIA_API_KEY" framework="react" version="6.5" activeSection="showcase" />
    <SubNav>
      <SubNavBreadcrumb tertiary href="/back">
        <Icon icon="arrowleft" />
        Back to blog
      </SubNavBreadcrumb>
      <SubNavRight>
        <SubNavCTA href="/back">
          <Icon icon="add" />
          Add your integration
        </SubNavCTA>
      </SubNavRight>
    </SubNav>
  </LinksContextProvider>
);
