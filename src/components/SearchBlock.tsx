import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { ColoredIcons } from '@storybook/design-system';
import { Search } from './Search';
import { breakpoints, spacing } from './shared/styles';
import { SupportFeature } from './SupportFeature';

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

export interface SearchBlockProps {
  version: string;
  apiKey: string;
}

export const SearchBlock: FC<SearchBlockProps> = ({ version, apiKey }) => {
  return (
    <SearchFeature
      image={<ColoredIcons.Search aria-label="search" />}
      title="Search the docs"
      desc="There’s probably an article for your issue already."
      layout="horizontal"
    >
      <StyledSearch framework="react" version={version} apiKey={apiKey} />
    </SearchFeature>
  );
};
