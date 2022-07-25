import React, { ComponentProps, FunctionComponent, ReactNode } from 'react';
import { useId } from '@floating-ui/react-dom-interactions';
import { styled } from '@storybook/theming';
import { Link, LinkProps, Icon } from '@storybook/design-system';
import { text, color } from '../shared/styles';

const SubNavLinkListContainer = styled.nav`
  ${text.regular};
  color: ${color.dark};
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;

  a {
    margin-left: 10px;
  }
`;

export type SubNavLinkItem = {
  icon: ComponentProps<typeof Icon>['icon'];
  LinkWrapper?: LinkProps['LinkWrapper'];
  href: string;
  label: string;
};

interface SubNavLinkListProps {
  label: string;
  items: SubNavLinkItem[];
}

export const SubNavLinkList: FunctionComponent<SubNavLinkListProps> = ({ label, items }) => {
  const id = useId();

  return (
    <SubNavLinkListContainer aria-labelledby={id}>
      <div id={id}>{label}</div>
      {items.map((item) => (
        <Link key={item.label} tertiary containsIcon href={item.href} aria-label={item.label}>
          <Icon icon={item.icon} aria-hidden />
        </Link>
      ))}
    </SubNavLinkListContainer>
  );
};
