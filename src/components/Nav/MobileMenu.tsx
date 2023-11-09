import React, { useMemo, useState } from 'react';
import { styled } from '@storybook/theming';
import { Icon } from '@storybook/design-system';
import { Drawer } from '../Drawer';
import { Search } from '../Search';
import { mobileGroups } from './menus';
import { StackedNav, StackedNavItem } from '../StackedNav';
import { IconButton } from '../IconButton';
import { Links } from '../links-context';

const GlobalSearch = styled(Search)`
  margin-bottom: 24px;
`;

interface MobileMenuProps {
  className?: string;
  navLinks: Links;
  inverse?: boolean;
  monochrome?: boolean;
  version: string;
  apiKey: string;
}

export const MobileMenu = ({
  className,
  navLinks,
  inverse,
  monochrome,
  version,
  apiKey,
}: MobileMenuProps) => {
  const [open, setOpen] = useState(false);
  const mobileGroupsWithLinks = useMemo(() => mobileGroups(navLinks), [navLinks]);

  return (
    <>
      <IconButton
        inverse={inverse}
        monochrome={monochrome}
        aria-label="Open site nav"
        onClick={() => setOpen(true)}
        className={className}
      >
        <Icon icon="menualt" />
      </IconButton>
      <Drawer open={open} setOpen={setOpen} label="nav links">
        <GlobalSearch apiKey={apiKey} version={version} />
        {mobileGroupsWithLinks.map((group) => (
          <StackedNav key={group.label} label={group.label}>
            {group.items.map((item) => (
              <StackedNavItem
                key={item.label}
                icon={item.icon}
                href={item.link.url}
                LinkWrapper={item.link.linkWrapper}
                onClick={() => {
                  setOpen(false);
                }}
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
