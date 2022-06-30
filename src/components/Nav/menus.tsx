import React, { ComponentProps } from 'react';
import { NavMenu, NavMenuItem } from '../NavMenu';
import { ColoredIcon } from '../ColoredIcon';
import { NavLinks } from './nav-context';

interface Menu extends ComponentProps<typeof NavMenu> {
  navLinks: NavLinks;
}

export const Why = ({ inverse, navLinks }: Menu) => (
  <NavMenu label="Why" inverse={inverse}>
    <NavMenuItem
      icon={<ColoredIcon icon="storybook" color="primary" />}
      description="Learn why frontend devs use Storybook to ship UIs."
      to={navLinks.whyStorybook.url}
      LinkWrapper={navLinks.whyStorybook.linkWrapper}
    >
      Why Storybook?
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="lightning" color="gold" />}
      description="Learn why frontend devs use Storybook to ship UIs."
      to={navLinks.useCases.url}
      LinkWrapper={navLinks.useCases.linkWrapper}
    >
      Use cases
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="graphline" color="green" />}
      description="Learn why frontend devs use Storybook to ship UIs."
      to={navLinks.caseStudies.url}
      LinkWrapper={navLinks.caseStudies.linkWrapper}
    >
      Case studies
    </NavMenuItem>
  </NavMenu>
);

export const Docs = ({ inverse, navLinks }: Menu) => (
  <NavMenu label="Docs" inverse={inverse}>
    <NavMenuItem
      icon={<ColoredIcon icon="globe" color="secondary" />}
      description="How to develop, test, and document UIs with Storybook"
      to={navLinks.getStarted.url}
      LinkWrapper={navLinks.getStarted.linkWrapper}
    >
      Get started
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="book" color="green" />}
      description="Learn everything you need to know to use Storybook"
      to={navLinks.guides.url}
      LinkWrapper={navLinks.guides.linkWrapper}
    >
      Guides
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="compass" color="gold" />}
      description="Follow guided walkthroughs on for Storybook’s key workflows"
      to={navLinks.tutorials.url}
      LinkWrapper={navLinks.tutorials.linkWrapper}
    >
      Tutorials
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="location" color="seafoam" />}
      description="Reference every object and method in Storybook’s API"
      to={navLinks.api.url}
      LinkWrapper={navLinks.api.linkWrapper}
    >
      API
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="verified" color="green" />}
      description="Release notes for all major and minor Storybook versions"
      to={navLinks.changelog.url}
      LinkWrapper={navLinks.changelog.linkWrapper}
    >
      Changelog
    </NavMenuItem>
  </NavMenu>
);

export const Community = ({ inverse, navLinks }: Menu) => (
  <NavMenu label="Community" inverse={inverse}>
    <NavMenuItem
      icon={<ColoredIcon icon="starhollow" color="gold" />}
      description="Join thousands of frontend devs to learn and share"
      to={navLinks.getInvolved.url}
      LinkWrapper={navLinks.getInvolved.linkWrapper}
    >
      Get involved
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="rss" color="purple" />}
      description="News and updates from the Storybook team"
      to={navLinks.blog.url}
      LinkWrapper={navLinks.blog.linkWrapper}
    >
      Blog and updates
    </NavMenuItem>
  </NavMenu>
);

export const mobileGroups = (navLinks: NavLinks) => [
  {
    label: 'Why',
    items: [
      {
        label: 'Why Storybook',
        link: navLinks.whyStorybook,
        icon: <ColoredIcon icon="storybook" color="primary" />,
      },

      {
        label: 'Use cases',
        link: navLinks.useCases,
        icon: <ColoredIcon icon="lightning" color="gold" />,
      },
      {
        label: 'Case studies',
        link: navLinks.caseStudies,
        icon: <ColoredIcon icon="graphline" color="green" />,
      },
      {
        label: 'Component-driven UI',
        link: navLinks.componentDriven,
        icon: <ColoredIcon icon="componentdriven" color="purple" />,
      },
    ],
  },
  {
    label: 'Docs',
    items: [
      {
        label: 'Get started',
        link: navLinks.getStarted,
        icon: <ColoredIcon icon="globe" color="secondary" />,
      },
      {
        label: 'Guides',
        link: navLinks.guides,
        icon: <ColoredIcon icon="book" color="green" />,
      },

      {
        label: 'Tutorials',
        link: navLinks.tutorials,
        icon: <ColoredIcon icon="compass" color="gold" />,
      },

      {
        label: 'API',
        link: navLinks.api,
        icon: <ColoredIcon icon="location" color="seafoam" />,
      },

      {
        label: 'Changelog',
        link: navLinks.changelog,
        icon: <ColoredIcon icon="check" color="green" />,
      },
    ],
  },
  {
    label: 'Showcase',
    items: [
      {
        label: 'Explore',
        link: navLinks.showcase,
        icon: <ColoredIcon icon="admin" color="green" />,
      },
      {
        label: 'Projects',
        link: navLinks.projects,
        icon: <ColoredIcon icon="book" color="primary" />,
      },

      {
        label: 'Component glossary',
        link: navLinks.componentGlossary,
        icon: <ColoredIcon icon="component" color="secondary" />,
      },
    ],
  },
  {
    label: 'Community',
    items: [
      {
        label: 'Integrations',
        link: navLinks.integrations,
        icon: <ColoredIcon icon="grid" color="seafoam" />,
      },
      {
        label: 'Get involved',
        link: navLinks.getInvolved,
        icon: <ColoredIcon icon="starhollow" color="gold" />,
      },

      {
        label: 'Blog',
        link: navLinks.blog,
        icon: <ColoredIcon icon="rss" color="purple" />,
      },
    ],
  },
];
