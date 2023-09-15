module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.(tsx|js)'],
  staticDirs: ['./static'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm'
  ],

  features: {
    interactionsDebugger: true,
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    config.resolve.alias['./useMailingListForm'] = require.resolve(
      '../src/__mocks__/useMailingListForm.mock.js'
    );

    return config;
  },

  framework: {
    name: '@storybook/react-webpack5',

    options: {
      builder: {
        fsCache: true
      }
    }
  },

  docs: {
    autodocs: true
  }
};
