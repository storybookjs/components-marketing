import React, { forwardRef, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { useId } from '@floating-ui/react-dom-interactions';
import { background, color, subheading, typography } from '../shared/styles';
import { LinkWithWrapper, LinkWithWrapperProps } from '../LinkWithWrapper';

const MenuGroupLabel = styled.div`
  ${subheading.small};
  background-color: ${background.app};
  color: ${color.dark};
  text-transform: uppercase;
  padding: 10px 15px;
`;

const GroupContainer = styled.div``;

const MenuItemLabel = styled.div`
  white-space: nowrap;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 0;
`;

const PureMenuItem = styled(LinkWithWrapper)`
  display: flex;
  align-items: center;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s2}px;
  line-height: 20px;
  text-decoration: none;
  color: ${color.darkest};
  transition: color 150ms ease-out;
  outline: 0;
  padding: 10px 15px;

  svg,
  img {
    flex: none;
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }

  &:hover,
  &:focus,
  &:active {
    background: rgba(30, 167, 253, 0.14);
  }
`;

interface MenuItemProps extends LinkWithWrapperProps {
  icon: ReactNode;
  children: ReactNode;
}

export const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
  ({ icon, children, ...props }, ref) => (
    <PureMenuItem {...props} ref={ref} role="menuitem">
      {icon}
      <MenuItemLabel>{children}</MenuItemLabel>
    </PureMenuItem>
  )
);
MenuItem.displayName = 'MenuItem';

interface MenuProps {
  label: string;
  children?: ReactNode;
}

export const MenuGroup = ({ label, children }: MenuProps) => {
  const id = useId();

  return (
    <GroupContainer role="group" aria-label={`Menu-group-label-${id}`}>
      <MenuGroupLabel id={`Menu-group-label-${id}`}>{label}</MenuGroupLabel>
      {children}
    </GroupContainer>
  );
};
