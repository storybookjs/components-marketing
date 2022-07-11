import React from 'react';
import { Icon } from '@storybook/design-system';
import { StackedNav, StackedNavItem } from './StackedNav';

export default {
  title: 'Nav/StackedNav',
  component: StackedNav,
};

export const Default = () => (
  <StackedNav label="Why">
    <StackedNavItem to="/why" icon={<Icon icon="storybook" />}>
      Why Storybook
    </StackedNavItem>
    <StackedNavItem to="/use-cases" icon={<Icon icon="lightning" />}>
      Use cases
    </StackedNavItem>
    <StackedNavItem to="/case-studies" icon={<Icon icon="graphline" />}>
      Case studies
    </StackedNavItem>
    <StackedNavItem to="/cdd" icon={<Icon icon="componentdriven" />}>
      Component-driven UI
    </StackedNavItem>
  </StackedNav>
);
