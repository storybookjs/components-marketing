import React, { ComponentProps } from 'react';
import { NavMenu, NavMenuItem } from '../NavMenu';
import { ColoredIcon } from '../ColoredIcon';
import { Links } from '../links-context';

interface Menu extends ComponentProps<typeof NavMenu> {
  navLinks: Links;
}

export const Why = ({ inverse, navLinks }: Menu) => (
  <NavMenu label="Why" inverse={inverse}>
    <NavMenuItem
      icon={<ColoredIcon icon="storybook" color="primary" />}
      description="Learn why frontend devs use Storybook to ship UIs."
      href={navLinks.whyStorybook.url}
      LinkWrapper={navLinks.whyStorybook.linkWrapper}
    >
      Why Storybook?
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="lightning" color="gold" />}
      description="Learn why frontend devs use Storybook to ship UIs."
      href={navLinks.useCases.url}
      LinkWrapper={navLinks.useCases.linkWrapper}
    >
      Use cases
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="graphline" color="green" />}
      description="Learn why frontend devs use Storybook to ship UIs."
      href={navLinks.caseStudies.url}
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
      href={navLinks.getStarted.url}
      LinkWrapper={navLinks.getStarted.linkWrapper}
    >
      Get started
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="book" color="green" />}
      description="Learn everything you need to know to use Storybook"
      href={navLinks.guides.url}
      LinkWrapper={navLinks.guides.linkWrapper}
    >
      Guides
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="compass" color="gold" />}
      description="Follow guided walkthroughs on for Storybook’s key workflows"
      href={navLinks.tutorials.url}
      LinkWrapper={navLinks.tutorials.linkWrapper}
    >
      Tutorials
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="location" color="seafoam" />}
      description="Reference every object and method in Storybook’s API"
      href={navLinks.api.url}
      LinkWrapper={navLinks.api.linkWrapper}
    >
      API
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="verified" color="green" />}
      description="Release notes for all major and minor Storybook versions"
      href={navLinks.changelog.url}
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
      href={navLinks.getInvolved.url}
      LinkWrapper={navLinks.getInvolved.linkWrapper}
    >
      Get involved
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="rss" color="purple" />}
      description="News and updates from the Storybook team"
      href={navLinks.blog.url}
      LinkWrapper={navLinks.blog.linkWrapper}
    >
      Blog and updates
    </NavMenuItem>
  </NavMenu>
);

export const mobileGroups = (links: Links) => [
  {
    label: 'Why',
    items: [
      {
        label: 'Why Storybook',
        link: links.whyStorybook,
        icon: <ColoredIcon icon="storybook" color="primary" />,
      },

      {
        label: 'Use cases',
        link: links.useCases,
        icon: <ColoredIcon icon="lightning" color="gold" />,
      },
      {
        label: 'Case studies',
        link: links.caseStudies,
        icon: <ColoredIcon icon="graphline" color="green" />,
      },
      {
        label: 'Component-driven UI',
        link: links.componentDriven,
        icon: <ColoredIcon icon="componentdriven" color="purple" />,
      },
    ],
  },
  {
    label: 'Docs',
    items: [
      {
        label: 'Get started',
        link: links.getStarted,
        icon: <ColoredIcon icon="globe" color="secondary" />,
      },
      {
        label: 'Guides',
        link: links.guides,
        icon: <ColoredIcon icon="book" color="green" />,
      },

      {
        label: 'Tutorials',
        link: links.tutorials,
        icon: <ColoredIcon icon="compass" color="gold" />,
      },

      {
        label: 'API',
        link: links.api,
        icon: <ColoredIcon icon="location" color="seafoam" />,
      },

      {
        label: 'Changelog',
        link: links.changelog,
        icon: <ColoredIcon icon="check" color="green" />,
      },
    ],
  },
  {
    label: 'Showcase',
    items: [
      {
        label: 'Explore',
        link: links.showcase,
        icon: <ColoredIcon icon="admin" color="green" />,
      },
      {
        label: 'Projects',
        link: links.projects,
        icon: <ColoredIcon icon="book" color="primary" />,
      },

      {
        label: 'Component glossary',
        link: links.componentGlossary,
        icon: <ColoredIcon icon="component" color="secondary" />,
      },
    ],
  },
  {
    label: 'Community',
    items: [
      {
        label: 'Integrations',
        link: links.integrations,
        icon: <ColoredIcon icon="grid" color="seafoam" />,
      },
      {
        label: 'Get involved',
        link: links.getInvolved,
        icon: <ColoredIcon icon="starhollow" color="gold" />,
      },

      {
        label: 'Blog',
        link: links.blog,
        icon: <ColoredIcon icon="rss" color="purple" />,
      },
    ],
  },
];
