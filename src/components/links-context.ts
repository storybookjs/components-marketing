import React, { createContext, ElementType } from 'react';

export interface LinkItem {
  url: string;
  linkWrapper?: React.ComponentType<any>;
}

export interface Links {
  home: LinkItem;
  whyStorybook: LinkItem;
  useCases: LinkItem;
  caseStudies: LinkItem;
  componentDriven: LinkItem;
  getStarted: LinkItem;
  guides: LinkItem;
  tutorials: LinkItem;
  api: LinkItem;
  changelog: LinkItem;
  telemetry: LinkItem;
  showcase: LinkItem;
  projects: LinkItem;
  componentGlossary: LinkItem;
  integrations: LinkItem;
  getInvolved: LinkItem;
  blog: LinkItem;
  hiring: LinkItem;
}

export const defaultLinks = {
  home: { url: '/' },
  whyStorybook: { url: '/why' },
  useCases: { url: '/use-cases' },
  caseStudies: { url: '/case-studies' },
  componentDriven: { url: 'https://componentdriven.org' },
  getStarted: { url: '/docs' },
  guides: { url: '/docs/guides' },
  tutorials: { url: 'https://storybook.js.org/tutorials' },
  api: { url: '/docs/api' },
  changelog: { url: 'https://storybook.js.org/changelog' },
  telemetry: { url: 'https://storybook.js.org/telemetry' },
  showcase: { url: 'https://storybook.js.org/showcase' },
  projects: { url: 'https://storybook.js.org/showcase/projects' },
  componentGlossary: { url: 'https://storybook.js.org/showcase/glossary' },
  integrations: { url: '/integrations' },
  getInvolved: { url: '/get-involved' },
  blog: { url: 'https://storybook.js.org/blog' },
  hiring: { url: 'https://www.chromatic.com/company/jobs' },
};

export const LinksContext = createContext<Links>(defaultLinks);

export const LinksContextProvider = LinksContext.Provider;