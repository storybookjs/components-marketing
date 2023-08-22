import React, { createContext, ElementType } from 'react';

export interface LinkItem {
  url: string;
  linkWrapper?: React.ComponentType<any>;
}

export interface Links {
  home: LinkItem;
  whyStorybook: LinkItem;
  componentDriven: LinkItem;
  guides: LinkItem;
  tutorials: LinkItem;
  changelog: LinkItem;
  telemetry: LinkItem;
  status: LinkItem;
  showcase: LinkItem;
  projects: LinkItem;
  componentGlossary: LinkItem;
  integrations: LinkItem;
  getInvolved: LinkItem;
  blog: LinkItem;
  hiring: LinkItem;
  enterprise: LinkItem;
  chromatic: LinkItem;
  jobsBoard: LinkItem;
  conferenceBoard: LinkItem;
}

export const defaultLinks = {
  home: { url: 'https://storybook.js.org/' },
  whyStorybook: { url: 'https://storybook.js.org/docs/react/get-started/why-storybook' },
  componentDriven: { url: 'https://componentdriven.org' },
  guides: { url: 'https://storybook.js.org/docs' },
  tutorials: { url: 'https://storybook.js.org/tutorials' },
  changelog: { url: 'https://storybook.js.org/releases' },
  telemetry: { url: 'https://storybook.js.org/telemetry' },
  status: { url: 'https://storybook.js.org/status' },
  showcase: { url: 'https://storybook.js.org/showcase' },
  projects: { url: 'https://storybook.js.org/showcase/projects' },
  componentGlossary: { url: 'https://storybook.js.org/showcase/glossary' },
  integrations: { url: 'https://storybook.js.org/integrations' },
  getInvolved: { url: 'https://storybook.js.org/community' },
  blog: { url: 'https://storybook.js.org/blog' },
  hiring: { url: 'https://www.chromatic.com/company/jobs' },
  jobsBoard: {
    url: 'https://chromatic-ui.notion.site/Storybook-Jobs-Board-950e001e4a114a39980a5b09c3a3b3e1?pvs=4',
  },
  conferenceBoard: {
    url: 'https://chromatic-ui.notion.site/Give-a-conference-talk-about-Storybook-e8d8e78d4d0a448a811a8d927194c527?pvs=4',
  },
  enterprise: {
    url: 'https://www.chromatic.com/sales?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook',
  },
  chromatic: {
    url: 'https://www.chromatic.com/?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook',
  },
};

export const LinksContext = createContext<Links>(defaultLinks);

export const LinksContextProvider = LinksContext.Provider;
