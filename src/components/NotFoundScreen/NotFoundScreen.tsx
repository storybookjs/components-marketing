import React from 'react';
import { css, styled } from '@storybook/theming';
import { Link, Icon } from '@storybook/design-system';
import { marketing, text, color, pageMargins } from '../shared/styles';
import { PuzzlePieces } from './PuzzlePieces';
import { SupportFeature, SupportFeatureGrid } from '../SupportFeature';
import { SearchBlock } from '../SearchBlock';

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

const DiscordIcon = styled(Icon)`
  color: #5a65ea;
`;
const GithubIcon = styled(Icon)`
  color: #333333;
`;

const StyledSupportFeatureGrid = styled(SupportFeatureGrid)`
  max-width: 800px;
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

      <StyledSupportFeatureGrid>
        <SearchBlock version={latestVersionString} apiKey={apiKey} />
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
      </StyledSupportFeatureGrid>
    </Content>
  );
}
