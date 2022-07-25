module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.(tsx|js)'],
  staticDirs: ['./static'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    '@storybook/addon-interactions',
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

    return config;
  },
};
