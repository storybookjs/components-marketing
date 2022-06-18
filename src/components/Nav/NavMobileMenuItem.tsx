import React, { forwardRef, ComponentPropsWithRef, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { color, subheading, typography } from '../shared/styles';

const NavMobileMenuGroupLabel = styled.div`
  ${subheading.small}
  color: ${color.dark};
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const GroupContainer = styled.div`
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

interface NavMobileMenuGroupProps {
  label: string;
  children?: ReactNode;
}

export const NavMobileMenuGroup = ({ label, children }: NavMobileMenuGroupProps) => (
  <GroupContainer role="group">
    <NavMobileMenuGroupLabel>{label}</NavMobileMenuGroupLabel>
    {children}
  </GroupContainer>
);

export const PureNavMobileMenuItem = styled.a`
  display: flex;
  align-items: center;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s2}px;
  line-height: 20px;
  text-decoration: none;
  color: ${color.darkest};
  transition: color 150ms ease-out;
  outline: 0;

  svg {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }

  margin-bottom: 18px;
  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover,
  &:focus,
  &:active {
    color: ${color.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${color.secondary};
    outline-offset: 4px;
    border-radius: 2px;
  }
`;

export const NavMobileMenuItem = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithRef<typeof PureNavMobileMenuItem> & { icon: ReactNode; children: ReactNode }
>(({ icon, children, ...props }, ref) => (
  <PureNavMobileMenuItem {...props} ref={ref} role="menuitem">
    {icon}
    {children}
  </PureNavMobileMenuItem>
));
NavMobileMenuItem.displayName = 'NavMobileMenuItem';
