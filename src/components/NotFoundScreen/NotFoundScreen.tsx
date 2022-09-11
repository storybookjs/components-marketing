import React from 'react';
import { css, styled } from '@storybook/theming';
import { Link, Icon, ColoredIcons } from '@storybook/design-system';
import { Search } from '../Search';
import { breakpoints, marketing, text, color, spacing, pageMargins } from '../shared/styles';
import { PuzzlePieces } from './PuzzlePieces';
import { SupportFeature } from './SupportFeature';

const Content = styled.div<{ includeSpacing?: boolean }>`
  ${(props) =>
    props.includeSpacing &&
    css`
      ${pageMargins}
      padding-top: 5rem;
      padding-bottom: 5rem;
    `};
`;

const Hero = styled.div`
  max-width: 460px;
  margin: 0 auto 5rem auto;
  position: relative;
`;
const Copy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;
const Title = styled.h1`
  ${marketing.hero1};
  color: ${color.midnight};
`;
const Description = styled.p`
  ${text.large};
  margin: 0;
  text-align: center;
  color: ${color.darker};
`;

const SupportOptions = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: ${breakpoints[2]}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SearchFeature = styled(SupportFeature)`
  @media (min-width: ${breakpoints[2]}px) {
    grid-column: 1 / span 2;
  }
`;
const StyledSearch = styled(Search)`
  button {
    border-radius: ${spacing.borderRadius.small}px;
    height: 40px !important;

    &:hover,
    &:active,
    &:focus {
      height: 40px;
    }
  }
`;

const DiscordIcon = styled(Icon)`
  color: '#5A65EA';
`;
const GithubIcon = styled(Icon)`
  color: '#333333';
`;

interface NotFoundScreenProps {
  repoUrl: string;
  latestVersionString: string;
  apiKey: string;
  includeSpacing?: boolean;
}

export function NotFoundScreen({
  repoUrl,
  latestVersionString,
  apiKey,
  includeSpacing = true,
  ...props
}: NotFoundScreenProps) {
  return (
    <Content includeSpacing={includeSpacing} {...props}>
      <Hero>
        <PuzzlePieces />
        <Copy>
          <Title>404</Title>
          <Description>
            The page you were looking for couldn’t be found. It may have moved. Try double-checking
            the link or going back.
          </Description>
        </Copy>
      </Hero>

      <SupportOptions>
        <SearchFeature
          image={<ColoredIcons.Search aria-label="search" />}
          title="Search the docs"
          desc="There’s probably an article for your issue already."
          layout="horizontal"
        >
          <StyledSearch framework="react" version={latestVersionString} apiKey={apiKey} />
        </SearchFeature>
        <SupportFeature
          image={<DiscordIcon icon="discord" aria-label="Discord" />}
          title="Ask a question in #support chat"
          desc="Resolve issues with community help. A maintainer is usually online."
        >
          <Link withArrow href="https://discord.gg/storybook">
            Chat now
          </Link>
        </SupportFeature>
        <SupportFeature
          image={<GithubIcon icon="github" aria-label="Github" />}
          title="File an issue on GitHub"
          desc="Please report issues, someone else may have the same issue."
        >
          <Link withArrow href={repoUrl}>
            View GitHub issues
          </Link>
        </SupportFeature>
      </SupportOptions>
    </Content>
  );
}
