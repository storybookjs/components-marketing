module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.(tsx|js)'],
  staticDirs: ['./static'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
  ],
  features: {
    interactionsDebugger: true,
  },
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: true,
      },
    },
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
};
