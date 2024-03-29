import React, { ComponentProps, FunctionComponent, useMemo } from 'react';
import { styled } from '@storybook/theming';
import { LinkTabs } from '@storybook/design-system';
import { breakpoints } from '../shared/styles';
import { Menu } from '../Menu';

const Tabs = styled(LinkTabs)`
  display: none;

  @media (min-width: ${breakpoints[2]}px) {
    display: flex;
  }
`;

const TabsMenu = styled(Menu)`
  flex: none;
  display: inline-flex;
  margin-top: 4px;
  margin-bottom: 4px;

  @media (min-width: ${breakpoints[2]}px) {
    display: none;
  }
`;

interface SubNavTabsProps {
  items: ComponentProps<typeof LinkTabs>['items'];
  label: string;
}

export const SubNavTabs: FunctionComponent<SubNavTabsProps> = ({ label, items }) => {
  const activeItem = useMemo(() => items.find((item) => item.isActive), [items]);
  const menuItems = useMemo(
    () =>
      items.map((item) => ({
        label: item.label,
        link: { url: item.href, linkWrapper: item.LinkWrapper },
      })),
    [items]
  );

  return (
    <>
      <Tabs role="navigation" aria-label={label} items={items} />
      <TabsMenu items={menuItems} label={activeItem.label} />
    </>
  );
};
