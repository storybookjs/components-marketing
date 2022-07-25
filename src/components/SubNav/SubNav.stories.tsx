import React from 'react';
import { Icon } from '@storybook/design-system';
import {
  SubNav,
  SubNavDivider,
  SubNavBreadcrumb,
  SubNavCTA,
  SubNavRight,
  SubNavMenus,
} from './SubNav';
import { SubNavLinkList, SubNavLinkItem } from './SubNavLinkList';
import { SubNavTabs } from './SubNavTabs';
import { Menu } from '../Menu';
import { Grouped } from '../Menu/Menu.stories';

export default {
  title: 'SubNav/SubNav',
  component: SubNav,
  parameters: {
    chromatic: { viewports: [320, 440, 600, 900] },
    layout: 'fullscreen',
  },
};

const docsItems = [
  { key: '1', label: 'Get started', href: '/activity' },
  { key: '2', label: 'Guides', href: '/components', isActive: true },
  { key: '3', label: 'Tutorials', href: '/changes' },
  { key: '4', label: 'API', href: '/changes' },
];

const catalogItems = [
  { key: '1', label: 'Overview', href: '/overview' },
  { key: '2', label: 'Projects', href: '/projects' },
  { key: '3', label: 'Glossary', href: '/glossary' },
  { key: '4', label: 'About', href: '/about', isActive: true },
];

const supportItems: SubNavLinkItem[] = [
  {
    icon: 'github',
    href: 'http://github.com/storybookjs',
    label: 'Github',
  },
  {
    icon: 'discord',
    href: 'https://discord.gg/storybook',
    label: 'Discord',
  },
  {
    icon: 'youtube',
    href: 'https://www.youtube.com/channel/UCr7Quur3eIyA_oe8FNYexfg',
    label: 'Youtube',
  },
];

const communityItems: SubNavLinkItem[] = [
  ...supportItems,
  {
    icon: 'twitter',
    href: 'https://twitter.com/storybookjs/',
    label: 'Twitter',
  },
];

const frameworkOptions = Grouped.args.items;
const versionOptions = [
  {
    label: 'stable',
    items: [
      { label: '6.5', link: { url: '/6-5' } },
      { label: '6.4', link: { url: '/6-4' } },
      { label: '6.3', link: { url: '/6-3' } },
      { label: '6.2', link: { url: '/6-2' } },
      { label: '6.1', link: { url: '/6-1' } },
      { label: '6.0', link: { url: '/6-0' } },
    ],
  },
  {
    label: 'pre-release',
    items: [{ label: '7.0 (future)', link: { url: '/7-0' } }],
  },
];

const FrameworkSelect = () => (
  <Menu label={frameworkOptions[0].items[0].label} items={frameworkOptions} primary />
);

const VersionSelect = () => (
  <Menu label={versionOptions[0].items[0].label} items={versionOptions} primary />
);

export const TabLinklist = () => (
  <SubNav>
    <SubNavTabs label="Docs nav" items={docsItems} />
    <SubNavRight>
      <SubNavLinkList label="Get support:" items={supportItems} />
    </SubNavRight>
  </SubNav>
);

export const TabCTA = () => (
  <SubNav>
    <SubNavTabs label="Addon catalog nav" items={catalogItems} />
    <SubNavRight>
      <SubNavCTA href="/back">
        <Icon icon="add" />
        Add your project
      </SubNavCTA>
    </SubNavRight>
  </SubNav>
);

export const TabMenusLinklist = () => (
  <SubNav>
    <SubNavTabs label="Docs nav" items={docsItems} />
    <SubNavDivider />
    <SubNavMenus>
      <FrameworkSelect />
      <VersionSelect />
    </SubNavMenus>
    <SubNavRight>
      <SubNavLinkList label="Get support:" items={supportItems} />
    </SubNavRight>
  </SubNav>
);

export const BreadcrumbLinklist = () => (
  <SubNav>
    <SubNavBreadcrumb tertiary href="/back">
      <Icon icon="arrowleft" />
      Back to blog
    </SubNavBreadcrumb>
    <SubNavRight>
      <SubNavLinkList label="Join the community:" items={communityItems} />
    </SubNavRight>
  </SubNav>
);

export const BreadcrumbCTA = () => (
  <SubNav>
    <SubNavBreadcrumb tertiary href="/back">
      <Icon icon="arrowleft" />
      Back to integrations
    </SubNavBreadcrumb>
    <SubNavRight>
      <SubNavCTA href="/back">
        <Icon icon="add" />
        Add your integration
      </SubNavCTA>
    </SubNavRight>
  </SubNav>
);

export const BreadcrumbMenuLinklist = () => (
  <SubNav>
    <SubNavBreadcrumb tertiary href="/back">
      <Icon icon="arrowleft" />
      Back to Visual Testing Handbook
    </SubNavBreadcrumb>
    <SubNavDivider />
    <SubNavMenus>
      <FrameworkSelect />
      <VersionSelect />
    </SubNavMenus>
    <SubNavRight>
      <SubNavLinkList label="Get support:" items={supportItems} />
    </SubNavRight>
  </SubNav>
);

// type=tab, area=docs, dropdowns=true, inverse=false, tabExpanded=false, viewport=desktop
// type=tab, area=docs, dropdowns=true, inverse=false, viewport=tablet, tabExpanded=false
// type=tab, area=docs, dropdowns=true, inverse=false, tabExpanded=true, viewport=mobile
// type=tab, area=docs, dropdowns=true, inverse=false, tabExpanded=false, viewport=mobile

// type=tab, area=cta, dropdowns=false, inverse=true, tabExpanded=false, viewport=desktop
// type=tab, area=cta, dropdowns=false, inverse=false, tabExpanded=false, viewport=desktop

// type=breadcrumb, area=cta, dropdowns=false, inverse=false, tabExpanded=false, viewport=desktop

// type=tab, area=community, dropdowns=false, inverse=false, tabExpanded=false, viewport=desktop
// type=breadcrumb, area=community, dropdowns=false, inverse=false, tabExpanded=false, viewport=desktop

// type=breadcrumb, area=docs, dropdowns=false, inverse=true, tabExpanded=false, viewport=desktop
// type=breadcrumb, area=docs, dropdowns=false, inverse=false, tabExpanded=false, viewport=desktop
// type=breadcrumb, area=docs, dropdowns=true, inverse=false, tabExpanded=false, viewport=desktop
