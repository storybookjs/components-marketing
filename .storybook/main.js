const config = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        fsCache: true,
      },
    },
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.(tsx|js)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: true,
  },
  features: {
    interactionsDebugger: true,
  },
  staticDirs: ['./static'],
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

export default config;
