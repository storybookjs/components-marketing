import React, { FunctionComponent, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { text, color } from './shared/styles';

const PureMenuItem = styled.li<{ hasIcon?: boolean }>`
  ${text.small};
  color: ${color.darkest};

  display: flex;
  align-items: center;
  height: 32px;

  padding-top: 10px;
  padding-right: 7px;
  padding-bottom: 10px;
  padding-left: ${(props) => (props.hasIcon ? '10px' : '15px')};

  svg {
    flex: none;
    color: #7a858e;
    width: 12px;
    height: 12px;
    margin-right: 10px;
  }
`;

const MenuItemLabel = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MenuItem: FunctionComponent<{ icon?: ReactNode }> = ({ icon, children }) => (
  <PureMenuItem hasIcon={!!icon}>
    {icon}
    <MenuItemLabel>{children}</MenuItemLabel>
  </PureMenuItem>
);

export const Menu = styled.ul`
  padding: 0;
  width: 200px;

  background: ${color.lightest};
  border-radius: 4px;

  box-shadow: 0px 0px 15px ${color.tr5}, 0px 1px 2px ${color.tr10};
`;
