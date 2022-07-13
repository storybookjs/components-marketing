import React, { ComponentProps, FunctionComponent, ReactNode } from 'react';
import { useId } from '@floating-ui/react-dom-interactions';
import { styled } from '@storybook/theming';
import { LinkTabs } from '@storybook/design-system';
import { breakpoints } from '../shared/styles';

const Tabs = styled(LinkTabs)`
  display: none;

  @media (min-width: ${breakpoints[0]}px) {
    display: flex;
  }
`;

// const TabsSelect = styled(Select)`
//   display: block;

//   @media (min-width: ${breakpoints[0]}px) {
//     display: none;
//   }
// `;

interface SubNavTabsProps {
  items: ComponentProps<typeof LinkTabs>['items'];
  label: string;
}

export const SubNavTabs: FunctionComponent<SubNavTabsProps> = ({ label, items }) => {
  const id = useId();

  return (
    <>
      <Tabs role="navigation" aria-label={label} items={items} />
    </>
  );
};
