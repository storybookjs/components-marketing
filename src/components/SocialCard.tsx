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
  margin-bottom: 20px;
`;

const Stat = styled(Cardinal)<{ inverse?: boolean }>`
  padding: 0;
  ${(props) =>
    props.inverse &&
    css`
      & > div:nth-child(1) {
        color: rgba(255 255 255 / 70%);
      }

      & > div:nth-child(2) {
        color: rgba(255 255 255 / 50%);
      }
    `};
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
      inverse={inverse}
      size="small"
      count={stat.count}
      text={stat.label}
      noPlural
      status="neutral"
    />
  </Wrapper>
);
