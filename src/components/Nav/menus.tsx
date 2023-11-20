import React, { ComponentProps } from 'react';
import { NavMenu, NavMenuItem } from '../NavMenu';
import { ColoredIcon } from '../ColoredIcon';
import { Links } from '../links-context';

interface Menu extends ComponentProps<typeof NavMenu> {
  navLinks: Links;
}

export const Community = ({ active, inverse, monochrome, navLinks }: Menu) => (
  <NavMenu label="Community" inverse={inverse} monochrome={monochrome} active={active}>
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
    <NavMenuItem
      icon={<ColoredIcon icon="bookmarkhollow" color="seafoam" />}
      description="Browse job board for roles that use Storybook"
      href={navLinks.jobsBoard.url}
      LinkWrapper={navLinks.jobsBoard.linkWrapper}
    >
      Find jobs
    </NavMenuItem>
    <NavMenuItem
      icon={<ColoredIcon icon="globe" color="secondary" />}
      description="Submit talks to conferences about Storybook"
      href={navLinks.conferenceBoard.url}
      LinkWrapper={navLinks.conferenceBoard.linkWrapper}
    >
      Speak at conferences
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
      {
        label: 'Jobs board',
        link: links.jobsBoard,
        icon: <ColoredIcon icon="bookmarkhollow" color="seafoam" />,
      },
      {
        label: 'Conference board',
        link: links.conferenceBoard,
        icon: <ColoredIcon icon="globe" color="secondary" />,
      },
    ],
  },
  {
    label: 'Chromatic',
    items: [
      {
        label: 'Visual testing',
        link: links.chromatic,
        icon: <ColoredIcon icon="chromatic" color="orange" />,
      },
      {
        label: 'Enterprise',
        link: links.enterprise,
        icon: <ColoredIcon icon="admin" color="midnight" />,
      },
    ],
  },
];
