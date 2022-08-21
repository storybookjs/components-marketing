import React from 'react';
import { styled } from '@storybook/theming';
import { IntegrationsCarousel } from './IntegrationsCarousel';

const Wrapper = styled.div`
  max-width: 600px;
`;

const Pane = styled.img`
  display: block;
  width: 100%;
`;

const integrations = [
  {
    name: 'Jest',
    image: '/jest.png',
    color: '#99424F',
    media: <Pane src="figma.svg" alt="" />,
  },
  {
    name: 'Testing Library',
    image: '/testing-library.png',
    color: '#E3F3FF',
    media: <Pane src="medium.svg" alt="" />,
  },
  {
    name: 'Playwright',
    image: '/playwright.png',
    color: '#2D3751',
    media: <Pane src="next.svg" alt="" />,
  },
  {
    name: 'Cypress',
    image: '/cypress.png',
    color: '#3C3C3C',
    media: <Pane src="notion.svg" alt="" />,
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

const Template = (args) => (
  <Wrapper>
    <IntegrationsCarousel {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  integrations: 'Default',
  overflowLabel: '+ and more',
  aspectRatio: 1202 / 910,
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
