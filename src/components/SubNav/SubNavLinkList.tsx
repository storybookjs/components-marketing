import React, { ComponentProps, FunctionComponent, ReactNode } from 'react';
import { useId } from '@floating-ui/react-dom-interactions';
import { styled } from '@storybook/theming';
import { Link, LinkProps, Icon } from '@storybook/design-system';
import { text, color } from '../shared/styles';

const SubNavLinkListContainer = styled('nav', {
  shouldForwardProp: (prop) => !['inverse'].includes(prop),
})<Pick<SubNavLinkListProps, 'inverse'>>`
  ${text.regular};
  color: ${(props) => (props.inverse ? color.light : color.dark)};
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;

  a {
    margin-left: 10px;
  }
`;

const StyledIcon = styled(Icon, {
  shouldForwardProp: (prop) => !['inverse'].includes(prop),
})<Pick<SubNavLinkListProps, 'inverse'>>`
  color: ${(props) => (props.inverse ? color.light : color.dark)};
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
  inverse?: boolean;
}

export const SubNavLinkList: FunctionComponent<SubNavLinkListProps> = ({
  label,
  items,
  inverse,
}) => {
  const id = useId();

  return (
    <SubNavLinkListContainer aria-labelledby={id} inverse={inverse}>
      <div id={id}>{label}</div>
      {items.map((item) => (
        <Link key={item.label} tertiary containsIcon href={item.href} aria-label={item.label}>
          <StyledIcon icon={item.icon} aria-hidden inverse={inverse} />
        </Link>
      ))}
    </SubNavLinkListContainer>
  );
};
