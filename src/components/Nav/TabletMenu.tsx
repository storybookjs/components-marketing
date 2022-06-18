import React, { useMemo } from 'react';
import { CollapsedNav } from '../CollapsedNav';
import { mobileGroups } from './menus';
import { NavLinks } from './nav-context';

interface TabletMenuProps {
  className?: string;
  navLinks: NavLinks;
}

export const TabletMenu = ({ className, navLinks }: TabletMenuProps) => {
  const mobileGroupsWithLinks = useMemo(() => mobileGroups(navLinks), [navLinks]);

  return <CollapsedNav className={className} groups={mobileGroupsWithLinks} />;
};
