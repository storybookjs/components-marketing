import React from 'react';
import { SearchBlock } from './SearchBlock';

export default {
  title: 'SearchBlock',
  component: SearchBlock,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <SearchBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  version: '6.5',
  apiKey: 'API_KEY',
};
