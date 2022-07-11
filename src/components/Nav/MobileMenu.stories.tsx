import React from 'react';
import { MobileMenu } from './MobileMenu';
import { defaultNavLinks } from './nav-context';

export default {
  title: 'Nav/MobileMenu',
  component: MobileMenu,
};

export const Default = () => <MobileMenu navLinks={defaultNavLinks} />;
