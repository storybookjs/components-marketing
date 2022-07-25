import React, { forwardRef, ReactNode } from 'react';
import { styled } from '@storybook/theming';
import { useId } from '@floating-ui/react-dom-interactions';
import { color, subheading, typography } from './shared/styles';
import { LinkWithWrapper, LinkWithWrapperProps } from './LinkWithWrapper';

const StackedNavLabel = styled.div`
  ${subheading.small};
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

const StackedNavItemLabel = styled.div`
  white-space: nowrap;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 0;
`;

const PureStackedNavItem = styled(LinkWithWrapper)`
  display: flex;
  align-items: center;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s2}px;
  line-height: 20px;
  text-decoration: none;
  color: ${color.darkest};
  transition: color 150ms ease-out;
  outline: 0;

  svg,
  img {
    flex: none;
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }

  margin-bottom: 12px;
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

interface StackedNavItemProps extends LinkWithWrapperProps {
  icon: ReactNode;
  children: ReactNode;
}

export const StackedNavItem = forwardRef<HTMLAnchorElement, StackedNavItemProps>(
  ({ icon, children, ...props }, ref) => (
    <PureStackedNavItem {...props} ref={ref} role="menuitem">
      {icon}
      <StackedNavItemLabel>{children}</StackedNavItemLabel>
    </PureStackedNavItem>
  )
);
StackedNavItem.displayName = 'StackedNavItem';

interface StackedNavProps {
  label: string;
  children?: ReactNode;
}

export const StackedNav = ({ label, children }: StackedNavProps) => {
  const id = useId();

  return (
    <GroupContainer role="group" aria-label={`StackedNav-label-${id}`}>
      <StackedNavLabel id={`StackedNav-label-${id}`}>{label}</StackedNavLabel>
      {children}
    </GroupContainer>
  );
};
