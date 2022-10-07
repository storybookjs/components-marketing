import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { ColoredIcons } from '@storybook/design-system';
import { Search } from './Search';
import { breakpoints, spacing, typography, text, color } from './shared/styles';

const Image = styled.div`
  margin-right: 20px;
  flex: none;

  svg,
  img {
    display: block;
    width: 40px;
    height: auto;
  }
`;
const Title = styled.h2`
  ${text.largeBold};
  color: ${color.darkest};
  margin-bottom: 0.25rem;
`;
const Desc = styled.div`
  ${text.large};
  color: #586368;
`;
const Meta = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints[2]}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`
  padding: 30px;
  border-radius: ${spacing.borderRadius.small}px;
  border: 1px solid ${color.border};
  display: flex;

  @media (min-width: ${breakpoints[2]}px) {
    grid-column: 1 / span 2;
  }
`;

const SupportFeatureGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;
  margin: 0 auto;

  @media (min-width: ${breakpoints[2]}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SearchWrapper = styled.div`
  flex: 1 1 auto;
  margin-top: 1rem;

  @media (min-width: ${breakpoints[2]}px) {
    margin-top: 0;
    margin-left: 30px;
    max-width: 280px;
  }
`;
const StyledSearch = styled(Search)`
  button {
    font-size: ${typography.size.s2}px;
    border-radius: ${spacing.borderRadius.small}px;
    height: 40px !important;

    &:hover,
    &:active,
    &:focus {
      height: 40px;
    }
  }
`;

export interface SearchBlockProps {
  version: string;
  apiKey: string;
}

export const SearchBlock: FC<SearchBlockProps> = ({ version, apiKey }) => {
  return (
    <Wrapper>
      <Image>
        <ColoredIcons.Search aria-label="search" />
      </Image>
      <Meta>
        <div>
          <Title>Search the docs</Title>
          <Desc>There’s probably an article for your issue already.</Desc>
        </div>
        <SearchWrapper>
          <StyledSearch framework="react" version={version} apiKey={apiKey} />
        </SearchWrapper>
      </Meta>
    </Wrapper>
  );
};
