import React, { useMemo, useState } from 'react';
import { styled } from '@storybook/theming';
import { Icon } from '@storybook/design-system';
import { Drawer } from '../Drawer';
import { Search } from '../Search';
import { mobileGroups } from './menus';
import { StackedNav, StackedNavItem } from '../StackedNav';
import { IconButton } from '../IconButton';
import { NavLinks } from './nav-context';

const GlobalSearch = styled(Search)`
  margin-bottom: 24px;
`;

interface MobileMenuProps {
  className?: string;
  navLinks: NavLinks;
}

export const MobileMenu = ({ className, navLinks }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);
  const mobileGroupsWithLinks = useMemo(() => mobileGroups(navLinks), [navLinks]);

  return (
    <>
      <IconButton aria-label="Open site nav" onClick={() => setOpen(true)} className={className}>
        <Icon icon="menualt" />
      </IconButton>
      <Drawer open={open} setOpen={setOpen} label="nav links">
        <GlobalSearch framework="react" version={6.5} />
        {mobileGroupsWithLinks.map((group) => (
          <StackedNav key={group.label} label={group.label}>
            {group.items.map((item) => (
              <StackedNavItem
                key={item.label}
                icon={item.icon}
                to={item.link.url}
                LinkWrapper={item.link.linkWrapper}
              >
                {item.label}
              </StackedNavItem>
            ))}
          </StackedNav>
        ))}
      </Drawer>
    </>
  );
};
