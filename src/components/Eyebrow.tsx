import React from 'react';
import { styled } from '@storybook/theming';
import { Badge, Link } from '@storybook/design-system';
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

const EyebrowCallout = styled.a<{ inverse?: boolean }>`
  ${text.storybookMedium}
  transition: transform 150ms ease-out;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }

  ${(props) => ({ color: props.inverse ? color.lightest : color.dark })}
`;

const StorybookDayLink = styled.a`
  margin-left: ${spacing.padding.medium}px;
  line-height: 1;
  transition: transform 150ms ease-out;
  text-decoration: none;
  display: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }

  @media (min-width: ${breakpoints[2]}px) {
    display: block;
  }
`;

const EyebrowContainer = styled.div<{
  inverse?: boolean;
}>`
  display: none;
  align-items: center;
  padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
  background-color: ${(props) => (props.inverse ? 'rgba(0, 0, 0, 0.3)' : color.blueLight)};
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
      display: inline-block;
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
      href="https://www.chromatic.com?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook"
    >
      Visual test with Chromatic
    </EyebrowCallout>
    <GithubButtonWrapper>
      <GithubButton starCount={githubStarCount} />
    </GithubButtonWrapper>
  </EyebrowContainer>
);
