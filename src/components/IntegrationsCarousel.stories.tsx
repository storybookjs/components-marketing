import React from 'react';
import { styled } from '@storybook/theming';
import { IntegrationsCarousel } from './IntegrationsCarousel';

const IntegrationDemo = styled.div<{ bg: string }>`
  width: 400px;
  height: 300px;
  border: 1px dashed #999;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const integrations = [
  {
    name: 'Jest',
    image: '/jest.png',
    color: '#99424F',
    media: <IntegrationDemo bg="#99424F">Jest</IntegrationDemo>,
  },
  {
    name: 'Testing Library',
    image: '/testing-library.png',
    color: '#E3F3FF',
    media: <IntegrationDemo bg="#E3F3FF">Testing Library</IntegrationDemo>,
  },
  {
    name: 'Playwright',
    image: '/playwright.png',
    color: '#2D3751',
    media: <IntegrationDemo bg="#2D3751">Playwright</IntegrationDemo>,
  },
  {
    name: 'Cypress',
    image: '/cypress.png',
    color: '#3C3C3C',
    media: <IntegrationDemo bg="#3C3C3C">Cypress</IntegrationDemo>,
  },
  {
    name: 'Jasmine',
    image: '/jasmine.png',
    color: '#8A4182',
    media: <IntegrationDemo bg="#8A4182">Jasmine</IntegrationDemo>,
  },
];

export default {
  title: 'IntegrationsCarousel',
  component: IntegrationsCarousel,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    integrations: {
      table: { disable: true },
      mapping: { Default: integrations },
    },
  },
};

const Template = (args) => <IntegrationsCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  integrations: 'Default',
  overflowLabel: '+ and more',
};
Default.parameters = {
  chromatic: { disableSnapshot: true },
};

export const Inverse = Template.bind({});
Inverse.args = {
  ...Default.args,
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: 'dark' },
  chromatic: { disableSnapshot: true },
};

export const AnimationDisabled = Template.bind({});
AnimationDisabled.args = {
  ...Default.args,
  animationDisabled: true,
};
