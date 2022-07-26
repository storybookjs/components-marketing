import { Link } from '@storybook/design-system';
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
    href: 'https://storybook.js.org/docs/react/get-started/introduction',
  },
  {
    name: 'Vue',
    image: '/logo-vue.svg',
    href: 'https://storybook.js.org/docs/web-components/get-started/introduction',
  },
  {
    name: 'Angular',
    image: '/logo-angular.svg',
    href: 'https://storybook.js.org/docs/vue/get-started/introduction',
  },
  {
    name: 'Web Components',
    image: '/logo-web-components.svg',
    href: 'https://storybook.js.org/docs/angular/get-started/introduction',
  },
  {
    name: 'HTML',
    image: '/logo-html.svg',
    href: 'https://storybook.js.org/docs/html/get-started/introduction',
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
