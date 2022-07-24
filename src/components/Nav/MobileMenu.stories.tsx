import React from 'react';
import { MobileMenu } from './MobileMenu';
import { defaultLinks } from '../links-context';

export default {
  title: 'Nav/MobileMenu',
  component: MobileMenu,
};

export const Default = () => <MobileMenu navLinks={defaultLinks} />;
