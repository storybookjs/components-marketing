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
    <StorybookProject
      {...args}
      name="D2IQ"
      logo="d2iq.png"
      image={{ src: '/d2iq-sb.png', width: 957, height: 681 }}
    />
    <StorybookProject
      {...args}
      name="Microsoft"
      logo="/microsoft.png"
      image={{ src: '/fluent-sb.png', width: 956, height: 692 }}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
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
