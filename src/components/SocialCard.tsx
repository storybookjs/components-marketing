import React from 'react';
import { styled, css } from '@storybook/theming';
import { Button, Cardinal } from '@storybook/design-system';
import { color, marketing } from './shared/styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  svg {
    display: block;
    width: 48px;
    height: 48px;
  }
`;

const Description = styled.p<{ inverse?: boolean }>`
  ${marketing.textLarge};
  letter-spacing: -0.58px;
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
  margin-top: 24px;
  margin-bottom: 20px;
`;

const LinkButton = styled(Button)`
  margin-bottom: 24px;
`;

const Stat = styled(Cardinal)<{ inverse?: boolean }>`
  padding: 0;
`;

interface SocialCardProps {
  inverse?: boolean;
  icon: React.ReactNode;
  description: string;
  link?: {
    label: string;
    href: string;
  };
  stat: {
    count: string;
    label: string;
  };
}

export const SocialCard = ({
  inverse,
  icon,
  description,
  link,
  stat,
  ...props
}: SocialCardProps) => (
  <Wrapper {...props}>
    {icon}
    <Description inverse={inverse}>{description}</Description>
    <LinkButton
      appearance={inverse ? 'inverseOutline' : 'outline'}
      size="medium"
      isLink
      href={link.href}
    >
      {link.label}
    </LinkButton>
    <Stat
      size="small"
      count={stat.count}
      text={stat.label}
      noPlural
      status={inverse ? 'inverse' : 'neutral'}
    />
  </Wrapper>
);
