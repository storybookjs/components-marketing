import React from 'react';
import { styled } from '@storybook/theming';
import { Badge, Icon, Link } from '@storybook/design-system';
import { text, color, spacing, breakpoints } from './shared/styles';
import { GithubButton } from './GithubButton';

const GithubButtonWrapper = styled.div`
  margin-left: ${spacing.padding.medium}px;
  flex: none;
`;

const EyebrowLink = styled(Link)<{ inverse?: boolean }>`
  ${text.storybookMedium}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  && {
    ${(props) => ({
      color: props.inverse ? color.lightest : color.darker,
    })}
  }
`;

const EyebrowCallout = styled(Link)<{ inverse?: boolean }>`
  ${text.storybookMedium}

  && {
    ${(props) => ({ color: props.inverse ? color.lightest : color.dark })}
  }
`;

const EyebrowContainer = styled.div<{
  inverse?: boolean;
}>`
  position: relative;
  z-index: 20;
  display: none;
  align-items: center;
  padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
  background-color: ${(props) => (props.inverse ? 'rgba(0, 0, 0, 0.1)' : color.blueLight)};
  box-shadow: ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : color.tr10)} 0 -1px 0px 0px
    inset;

  ${EyebrowLink} {
    margin-left: ${spacing.padding.small}px;
    margin-right: auto;
  }

  ${EyebrowCallout} {
    display: none;
    text-align: right;
  }

  @media (min-width: ${breakpoints[0]}px) {
    display: flex;
  }

  @media (min-width: ${breakpoints[2]}px) {
    ${EyebrowCallout} {
      display: inline-flex;
    }
  }
`;

interface EyebrowProps {
  label: string;
  link: string;
  githubStarCount: number;
  inverse?: boolean;
}

export const Eyebrow = ({ label, link, inverse, githubStarCount }: EyebrowProps) => (
  <EyebrowContainer inverse={inverse}>
    <Badge status="positive">New</Badge>
    <EyebrowLink inverse={inverse} secondary={!inverse} href={link} withArrow>
      {label}
    </EyebrowLink>
    <EyebrowCallout
      inverse={inverse}
      secondary={!inverse}
      href="https://www.chromatic.com?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook"
    >
      <Icon icon="chromatic" aria-hidden />
      Visual test with Chromatic
    </EyebrowCallout>
    <GithubButtonWrapper>
      <GithubButton starCount={githubStarCount} />
    </GithubButtonWrapper>
  </EyebrowContainer>
);
