import React from 'react';
import { TabletMenu } from './TabletMenu';
import { defaultNavLinks } from './nav-context';

export default {
  title: 'Nav/TabletMenu',
  component: TabletMenu,
};

export const Default = () => <TabletMenu navLinks={defaultNavLinks} />;
