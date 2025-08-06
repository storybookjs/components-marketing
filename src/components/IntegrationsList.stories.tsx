import React from 'react';
import { IntegrationsList } from './IntegrationsList';

export default {
  title: 'IntegrationsList',
  component: IntegrationsList,
};

const integrations = [
  {
    name: 'React',
    image: '/logo-react.svg',
    href: 'https://storybook.js.org/docs/get-started/install?renderer=react',
  },
  {
    name: 'Vue',
    image: '/logo-vue.svg',
    href: 'https://storybook.js.org/docs/get-started/install?renderer=vue',
  },
  {
    name: 'Angular',
    image: '/logo-angular.svg',
    href: 'https://storybook.js.org/docs/get-started/install?renderer=angular',
  },
  {
    name: 'Web Components',
    image: '/logo-web-components.svg',
    href: 'https://storybook.js.org/docs/get-started/install?renderer=web-components',
  },
  {
    name: 'HTML',
    image: '/logo-html.svg',
    href: 'https://storybook.js.org/docs/get-started/install?renderer=html',
  },
];

const Template = (args) => <IntegrationsList {...args} />;

export const Default = Template.bind({});
Default.args = {
  integrations,
  overflowLabel: '+ 7',
};

export const Inverse = Template.bind({});
Inverse.args = {
  ...Default.args,
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
