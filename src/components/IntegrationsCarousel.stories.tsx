import React from 'react';
import { styled } from '@storybook/theming';
import { IntegrationsCarousel } from './IntegrationsCarousel';
import { AspectRatio } from './AspectRatio';

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
    media: (
      <AspectRatio ratio={`${1202} / ${910}`}>
        <Pane src="figma.svg" alt="" />
      </AspectRatio>
    ),
  },
  {
    name: 'Testing Library',
    image: '/testing-library.png',
    color: '#E3F3FF',
    media: (
      <AspectRatio ratio={`${1202} / ${910}`}>
        <Pane src="medium.svg" alt="" />
      </AspectRatio>
    ),
  },
  {
    name: 'Playwright',
    image: '/playwright.png',
    color: '#2D3751',
    media: (
      <AspectRatio ratio={`${1202} / ${910}`}>
        <Pane src="next.svg" alt="" />
      </AspectRatio>
    ),
  },
  {
    name: 'Cypress',
    image: '/cypress.png',
    color: '#3C3C3C',
    media: (
      <AspectRatio ratio={`${1202} / ${910}`}>
        <Pane src="notion.svg" alt="" />
      </AspectRatio>
    ),
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
