import React, { useMemo } from 'react';
import { CollapsedNav } from '../CollapsedNav';
import { mobileGroups } from './menus';
import { Links } from '../links-context';

interface TabletMenuProps {
  className?: string;
  navLinks: Links;
  inverse?: boolean;
  monochrome?: boolean;
}

export const TabletMenu = ({ className, inverse, monochrome, navLinks }: TabletMenuProps) => {
  const mobileGroupsWithLinks = useMemo(() => mobileGroups(navLinks), [navLinks]);

  return (
    <CollapsedNav
      inverse={inverse}
      monochrome={monochrome}
      className={className}
      groups={mobileGroupsWithLinks}
    />
  );
};
