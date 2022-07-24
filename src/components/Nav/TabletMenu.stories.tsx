import React from 'react';
import { TabletMenu } from './TabletMenu';
import { defaultLinks } from '../links-context';

export default {
  title: 'Nav/TabletMenu',
  component: TabletMenu,
};

export const Default = () => <TabletMenu navLinks={defaultLinks} />;
