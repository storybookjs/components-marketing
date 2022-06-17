import React from 'react';
import { global as designSystemGlobal, loadFontsForStorybook } from '@storybook/design-system';

const { GlobalStyle: StorybookDSGlobalStyle } = designSystemGlobal;

export const parameters = {
  // automatically create action args for all props that start with "on"
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#fff' },
      { name: 'dark', value: '#171C23' },
    ],
  },
  viewport: {
    viewports: {
      smallMobile: {
        name: 'Mobile (Small)',
        styles: {
          width: '320px',
          height: '100%',
        },
      },
      mobile: {
        name: 'Mobile',
        styles: {
          width: '440px',
          height: '100%',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '600px',
          height: '100%',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '900px',
          height: '100%',
        },
      },
    },
  },
};

const withGlobalStyle = (storyFn) => (
  <>
    <StorybookDSGlobalStyle />
    {storyFn()}
  </>
);

export const decorators = [withGlobalStyle];

loadFontsForStorybook();
