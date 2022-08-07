import React from 'react';
import { styled } from '@storybook/theming';
import { BrowserChrome } from './BrowserChrome';

export default {
  title: 'Utilities/BrowserChrome',
  component: BrowserChrome,
  parameters: {
    layout: 'padded',
  },
};

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
`;

const Template = (args) => (
  <Wrapper>
    <BrowserChrome {...args} image={{ src: '/storybook-site.png', width: 2840, height: 1710 }} />
    <BrowserChrome {...args} image={{ src: '/blog.png', width: 2840, height: 1450 }} />
    <BrowserChrome {...args} image={{ src: '/tutorials-site.png', width: 2042, height: 1710 }} />
    <BrowserChrome {...args} image={{ src: '/componentdriven.png', width: 1710, height: 1710 }} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  image: '/site-screenshot.png',
};

export const WithControls = Template.bind({});
WithControls.args = {
  showControls: true,
  address: 'storybook.js.org',
  image: '/site-screenshot.png',
};

export const NoHttps = Template.bind({});
NoHttps.args = {
  showControls: true,
  https: false,
  address: 'storybook.js.org',
  image: '/site-screenshot.png',
};

export const Inverse = Template.bind({});
Inverse.args = {
  ...Default.args,
  inverse: true,
};

export const InverseWithControls = Template.bind({});
InverseWithControls.args = {
  ...WithControls.args,
  inverse: true,
};

export const InverseNoHttps = Template.bind({});
InverseNoHttps.args = {
  ...NoHttps.args,
  inverse: true,
};
