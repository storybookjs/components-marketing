import React from 'react';
import { styles } from '@storybook/design-system';
import { styled } from '@storybook/theming';

const Wrapper = styled.a<{ inverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 64px;
  cursor: pointer;
  padding: 0 12px;

  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  white-space: nowrap;
  text-decoration: none;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  transition: background-color 0.2s ease, color 0.2s ease;

  /* @storybook/design-system styles are missing some darker colors for inverse mode */
  background-color: ${(props) => (props.inverse ? styles.color.light : styles.color.darker)};
  color: ${(props) => (props.inverse ? '#18181b' : styles.color.lightest)};

  &:hover {
    background-color: ${(props) => (props.inverse ? styles.color.lightest : styles.color.darkest)};
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px #0d64ca,
      inset 0 0 0 4px ${(props) => (props.inverse ? styles.color.darkest : styles.color.lightest)};
    outline: none;
  }
`;

export const GetStartedCTA = ({ inverse }: { inverse: boolean }) => (
  <Wrapper
    inverse={inverse}
    href="https://storybook.js.org/docs"
    rel="noopener"
    target="_blank"
  >
    Get Started
  </Wrapper>
);
