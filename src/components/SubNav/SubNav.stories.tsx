import React from 'react';
import { Icon } from '@storybook/design-system';
import {
  SubNav,
  SubNavDivider,
  SubNavBreadcrumb,
  SubNavCTA,
  SubNavRightAddon,
  SubNavSelects,
} from './SubNav';
import { SubNavLinkList, SubNavLinkItem } from './SubNavLinkList';
import { SubNavTabs } from './SubNavTabs';
import { Select, Option, OptionGroup } from '../Select';
import { WithLabel, WithValue } from '../Select/Select.stories';

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

const frameworkOptions = WithLabel.args.options;
const versionOptions = WithValue.args.options;

const FrameworkSelect = () => (
  <Select label="Framework:" value="React" showLabel primary onChange={() => {}}>
    {Object.keys(frameworkOptions).map((type) => (
      <OptionGroup key={type} label={type}>
        {frameworkOptions[type].map(({ name, icon }) => (
          <Option key={name} label={name} value={name} icon={icon} />
        ))}
      </OptionGroup>
    ))}
  </Select>
);

const VersionSelect = () => (
  <Select label="Version:" value="6.5 (latest)" showLabel primary onChange={() => {}}>
    {Object.keys(versionOptions).map((type) => (
      <OptionGroup key={type} label={type}>
        {versionOptions[type].map(({ name, icon }) => (
          <Option key={name} label={name} value={name} icon={icon} />
        ))}
      </OptionGroup>
    ))}
  </Select>
);

export const TabLinklist = () => (
  <SubNav>
    <SubNavTabs label="Docs nav" items={docsItems} />
    <SubNavRightAddon>
      <SubNavLinkList label="Get support:" items={supportItems} />
    </SubNavRightAddon>
  </SubNav>
);

export const TabCTA = () => (
  <SubNav>
    <SubNavTabs label="Addon catalog nav" items={catalogItems} />
    <SubNavRightAddon>
      <SubNavCTA href="/back">
        <Icon icon="add" />
        Add your project
      </SubNavCTA>
    </SubNavRightAddon>
  </SubNav>
);

export const TabMenusLinklist = () => (
  <SubNav>
    <SubNavTabs label="Docs nav" items={docsItems} />
    <SubNavDivider />
    <SubNavSelects>
      <FrameworkSelect />
      <VersionSelect />
    </SubNavSelects>
    <SubNavRightAddon>
      <SubNavLinkList label="Get support:" items={supportItems} />
    </SubNavRightAddon>
  </SubNav>
);

export const BreadcrumbLinklist = () => (
  <SubNav>
    <SubNavBreadcrumb tertiary href="/back">
      <Icon icon="arrowleft" />
      Back to blog
    </SubNavBreadcrumb>
    <SubNavRightAddon>
      <SubNavLinkList label="Join the community:" items={communityItems} />
    </SubNavRightAddon>
  </SubNav>
);

export const BreadcrumbCTA = () => (
  <SubNav>
    <SubNavBreadcrumb tertiary href="/back">
      <Icon icon="arrowleft" />
      Back to integrations
    </SubNavBreadcrumb>
    <SubNavRightAddon>
      <SubNavCTA href="/back">
        <Icon icon="add" />
        Add your integration
      </SubNavCTA>
    </SubNavRightAddon>
  </SubNav>
);

export const BreadcrumbMenuLinklist = () => (
  <SubNav>
    <SubNavBreadcrumb tertiary href="/back">
      <Icon icon="arrowleft" />
      Back to Visual Testing Handbook
    </SubNavBreadcrumb>
    <SubNavDivider />
    <SubNavSelects>
      <FrameworkSelect />
      <VersionSelect />
    </SubNavSelects>
    <SubNavRightAddon>
      <SubNavLinkList label="Get support:" items={supportItems} />
    </SubNavRightAddon>
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
