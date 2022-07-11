import React, { forwardRef, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { text, color } from '../shared/styles';
import { LinkWithWrapper, LinkWithWrapperProps } from '../LinkWithWrapper';

const PureMenuItem = styled(LinkWithWrapper, { shouldForwardProp: (prop) => prop !== 'hasIcon' })<{
  hasIcon?: boolean;
}>`
  ${text.small};
  color: ${color.darkest};

  display: flex;
  align-items: center;
  height: 32px;

  padding-top: 10px;
  padding-right: 7px;
  padding-bottom: 10px;
  padding-left: ${(props) => (props.hasIcon ? '10px' : '15px')};

  text-decoration: none;
  transition: color 150ms ease-out;

  &:hover,
  &:focus,
  &:active {
    color: ${color.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${color.secondary};
    border-radius: 2px;
  }

  svg {
    flex: none;
    color: #7a858e;
    width: 12px;
    height: 12px;
    margin-right: 10px;
  }
`;

const MenuItemTitle = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export interface MenuIemProps extends LinkWithWrapperProps {
  icon?: ReactNode;
}

export const MenuItem = forwardRef<HTMLAnchorElement, MenuIemProps>(
  ({ icon, children, ...props }, ref) => (
    <PureMenuItem hasIcon={!!icon} ref={ref} {...props}>
      {icon}
      <MenuItemTitle>{children}</MenuItemTitle>
    </PureMenuItem>
  )
);
MenuItem.displayName = 'MenuItem';
