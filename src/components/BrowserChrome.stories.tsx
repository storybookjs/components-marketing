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
    <BrowserChrome {...args} image="/storybook-site.png" />
    <BrowserChrome {...args} image="/blog.png" />
    <BrowserChrome {...args} image="/tutorials-site.png" expand="width" />
    <BrowserChrome {...args} image="/componentdriven.png" expand="width" />
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
