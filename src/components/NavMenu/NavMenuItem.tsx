import React, { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { text, color } from '../shared/styles';
import { LinkWithWrapper, LinkWithWrapperProps } from '../LinkWithWrapper';

const NavMenuItemTitle = styled.div`
  ${text.regularBold}
  color: ${color.darkest};
`;

const NavMenuItemDescription = styled.div`
  ${text.regular}
  color: ${color.darkest};
`;

const PureMenuItem = styled(LinkWithWrapper, {
  shouldForwardProp: (propName) => propName !== 'hasIcon',
})<LinkWithWrapperProps & { hasIcon?: boolean }>`
  ${text.small};
  color: ${color.darkest};
  text-decoration: none;

  display: flex;
  align-items: flex-start;

  padding-top: 10px;
  padding-right: 7px;
  padding-bottom: 10px;
  padding-left: ${(props) => (props.hasIcon ? '10px' : '15px')};

  &:hover,
  &:focus,
  &:active {
    ${NavMenuItemTitle} {
      color: ${color.secondary};
    }
  }

  &:focus-visible {
    outline: 2px solid ${color.secondary};
    border-radius: 5px;

    ${NavMenuItemTitle} {
      color: ${color.secondary};
    }
  }

  svg {
    flex: none;
    width: 20px;
    height: 20px;
    margin-right: 15px;
    margin-top: 4px;
  }
`;

interface NavMenuItemProps {
  icon?: ReactNode;
  description: string;
}

export const NavMenuItem = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithRef<typeof PureMenuItem> & NavMenuItemProps
>(({ icon, children, description, ...props }, ref) => (
  <PureMenuItem {...props} hasIcon={!!icon} ref={ref} role="menuitem">
    {icon}
    <div>
      <NavMenuItemTitle>{children}</NavMenuItemTitle>
      <NavMenuItemDescription>{description}</NavMenuItemDescription>
    </div>
  </PureMenuItem>
));
NavMenuItem.displayName = 'NavMenuItem';
