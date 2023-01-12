import React, { FunctionComponent } from 'react';
import { controlOrMetaKey, shortcutToHumanString } from '@storybook/api/shortcut';
import { css, Global, styled } from '@storybook/theming';
import { styles } from '@storybook/design-system';
import { DocSearch } from '@docsearch/react';

const algoliaDocSearchConfig = {
  appId: '6L6UWBTLCK',
  indexName: 'storybook-js',
};

interface SearchProps {
  framework: string;
  version: string;
  className?: string | undefined;
  inverse?: boolean;
  apiKey: string;
}

const Wrapper = styled.div<{ inverse?: boolean }>`
  position: relative;

  ${(props) =>
    css`
      --search-button-border: ${props.inverse ? 'rgba(255, 255, 255, 0.2)' : styles.color.border};
      --search-button-color: ${props.inverse ? styles.color.lightest : styles.color.dark};
      --search-keys-bg: ${props.inverse ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
      --search-keys-color: ${props.inverse ? styles.color.lightest : styles.color.dark};
    `}
`;

const Placeholder = styled.div`
  flex: none;
  margin-right: 0;
`;

export const classNames = {
  BUTTON: '.DocSearch-Button',
  ICON: '.DocSearch-Button .DocSearch-Search-Icon',
  PLACEHOLDER: '.DocSearch-Button-Placeholder',
};

const idleButtonStyles = css`
  background: transparent;
  box-shadow: var(--search-button-border) 0 0 0 1px inset;
  color: var(--search-button-color);
  height: 32px;
`;

const keyStyles = css`
  align-items: center;
  background: none;
  box-shadow: none;
  color: var(--search-keys-color);
  display: inline-flex;
  font-family: inherit;
  font-size: 10px;
  line-height: 10px;
  justify-content: center;
  padding: 0;
  user-select: none;
  width: auto;
`;

const Keys = styled.div`
  pointer-events: none;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-8px);
  background: var(--search-keys-bg);
  border-radius: 2px;
  display: flex;
  align-items: center;
  padding: 3px 6px;
`;

const Key = styled.kbd`
  ${keyStyles}
`;

// Designed to match Input from @storybook/design-system
const docSearchStyles = css`
  :root {
    --docsearch-primary-color: ${styles.color.secondary};
    --docsearch-muted-color: ${styles.color.dark};
  }

  ${classNames.BUTTON} {
    ${idleButtonStyles}
    font-size: 13px;
    line-height: 18px;
    margin: 0;
    padding: 7px 59px 7px 12px;
    width: 100%;

    &:focus,
    &:focus:hover {
      ${idleButtonStyles}
      box-shadow: ${styles.color.secondary} 0 0 0 1px inset;
    }

    &:hover {
      ${idleButtonStyles}
    }
  }

  ${classNames.ICON} {
    color: currentColor;
    height: 12px;
    margin-right: 6px;
    width: 12px;
  }

  ${classNames.PLACEHOLDER} {
    font-size: 1em;
    padding: 0;
    display: block;
  }

  .DocSearch-Button-Keys {
    display: none;
  }

  .DocSearch-Commands-Key {
    ${keyStyles}
  }

  .DocSearch-Label {
    margin-left: 2px;
  }
`;

const Shortcut: React.FC<{ keys: string[] }> = ({ keys }) => (
  <Keys>
    {keys.map((key, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Key key={index}>{shortcutToHumanString([key])}</Key>
    ))}
  </Keys>
);

const label = 'Search docs';

export const Search: FunctionComponent<SearchProps> = ({
  framework,
  version,
  inverse,
  className,
  apiKey,
}) => (
  <>
    {/* <GlobalStyle />  why do we need this? */}
    <Global styles={docSearchStyles} />
    {apiKey ? (
      <Wrapper className={className} inverse={inverse}>
        <DocSearch
          apiKey={apiKey}
          {...algoliaDocSearchConfig}
          placeholder={label}
          searchParameters={{
            // prettier-ignore
            facetFilters: [
                ['tags:docs', 'tags:recipes'],
                [`framework:${framework}`, 'framework:agnostic'],
                [`version:${version}, 'version:agnostic']`
              ],
          }}
          translations={{
            button: {
              buttonAriaLabel: label,
              buttonText: label,
            },
          }}
        />
        <Shortcut keys={[controlOrMetaKey(), 'K']} />
      </Wrapper>
    ) : (
      <>
        {/* Placeholder to preserve styling given the input is missing. */}
        <Placeholder className={className} />
      </>
    )}
  </>
);
