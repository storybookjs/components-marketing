import React from 'react';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/design-system';

const Wrapper = styled.div<{ inverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    `1px solid ${props.inverse ? 'rgba(255, 255, 255, 0.2)' : styles.color.border}`};
  height: 32px;
  border-radius: 64px;
  cursor: pointer;
  gap: 10px;
  padding: 0 8px;
`;

const Svg = styled.svg<{ inverse?: boolean }>`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  white-space: nowrap;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  cursor: pointer;
  user-select: none;
  color: ${(props) => (props.inverse ? styles.color.lightest : '#24292f')};
  width: 14;
  height: 14;
  display: inline-block;
  vertical-align: text-top;
  fill: currentColor;
  overflow: visible;
`;

const Star = styled.a`
  box-sizing: content-box;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  white-space: nowrap;
  text-decoration: none;
  position: relative;
  display: inline-flex;
  height: 14px;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  vertical-align: bottom;
  user-select: none;
`;

const Count = styled.a<{ inverse?: boolean }>`
  box-sizing: content-box;
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  text-decoration: none;
  height: 14px;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  vertical-align: bottom;
  cursor: pointer;
  user-select: none;
  color: ${(props) => (props.inverse ? styles.color.lightest : '#24292f')};
  transition: color 0.2s ease;

  &:focus,
  &:hover {
    color: ${(props) => (props.inverse ? styles.color.lightest : '#0969da')};
  }
`;

export const GithubButton = ({ starCount, inverse }: { starCount: number; inverse: boolean }) => (
  <Wrapper className="chromatic-ignore" inverse={inverse}>
    <Star
      href="https://github.com/storybookjs/storybook"
      rel="noopener"
      target="_blank"
      aria-label="Star Storybook on GitHub"
    >
      <Svg
        viewBox="0 0 16 16"
        width="14"
        height="14"
        className="octicon octicon-mark-github"
        aria-hidden="true"
        inverse={inverse}
      >
        <path
          fillRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        />
      </Svg>
    </Star>
    <Count
      href="https://github.com/storybookjs/storybook/stargazers"
      rel="noopener"
      target="_blank"
      aria-label={`${starCount} stargazers on GitHub`}
      inverse={inverse}
    >
      {starCount.toLocaleString()}
    </Count>
  </Wrapper>
);
