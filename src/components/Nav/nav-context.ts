import { createContext, ElementType } from 'react';

interface NavItem {
  url: string;
  linkWrapper?: ElementType;
}

export interface NavLinks {
  home: NavItem;
  whyStorybook: NavItem;
  useCases: NavItem;
  caseStudies: NavItem;
  componentDriven: NavItem;
  getStarted: NavItem;
  guides: NavItem;
  tutorials: NavItem;
  api: NavItem;
  changelog: NavItem;
  showcase: NavItem;
  projects: NavItem;
  componentGlossary: NavItem;
  integrations: NavItem;
  getInvolved: NavItem;
  blog: NavItem;
}

export const defaultNavLinks = {
  home: { url: '/' },
  whyStorybook: { url: '/why' },
  useCases: { url: '/use-cases' },
  caseStudies: { url: '/case-studies' },
  componentDriven: { url: 'https://componentdriven.org' },
  getStarted: { url: '/docs' },
  guides: { url: '/docs/guides' },
  tutorials: { url: 'https://storybook.js.org/tutorials' },
  api: { url: '/docs/api' },
  changelog: { url: '/changelog' },
  showcase: { url: 'https://storybook.js.org/showcase' },
  projects: { url: 'https://storybook.js.org/showcase/projects' },
  componentGlossary: { url: 'https://storybook.js.org/showcase/glossary' },
  integrations: { url: '/integrations' },
  getInvolved: { url: '/get-involved' },
  blog: { url: 'https://storybook.js.org/blog' },
};

export const NavContext = createContext<NavLinks>(defaultNavLinks);

export const NavContextProvider = NavContext.Provider;
