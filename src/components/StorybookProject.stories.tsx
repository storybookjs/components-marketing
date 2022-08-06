import React from 'react';
import { StorybookProject } from './StorybookProject';

export default {
  title: 'Cards/StorybookProject',
  component: StorybookProject,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => (
  <div style={{ display: 'grid', gap: 20, gridTemplateColumns: '1fr 1fr' }}>
    <StorybookProject {...args} name="D2IQ" logo="d2iq.png" image="d2iq-sb.png" expand="width" />
    <StorybookProject
      {...args}
      name="Microsoft"
      logo="/microsoft.png"
      image="/fluent-sb.png"
      expand="width"
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  image: '/site-screenshot.png',
  name: 'Microsoft',
  logo: '/microsoft-logo.png',
};

export const Inverse = Template.bind({});
Inverse.args = {
  ...Default.args,
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
