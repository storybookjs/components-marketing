import React from 'react';
import { userEvent, within } from '@storybook/testing-library';
import { styled } from '@storybook/theming';
import { Search } from './Search';

export default {
  title: 'Search',
  component: Search,
};

// To ensure Chromatic captures the full modal
const OpenWrapper = styled.div`
  min-height: 300px;
  max-width: 100vw;
  width: 800px;

  & > * {
    max-width: 250px;
  }
`;

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  framework: 'react',
  version: 6.5,
  apiKey: 'ALGOLIA_API_KEY',
};

export const Inverse = Template.bind({});
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
Inverse.args = { ...Default.args, inverse: true };

const CustomSearch = styled(Search)`
  max-width: 160px;
`;

export const CustomStyles = (args) => <CustomSearch {...args} />;
CustomStyles.args = Default.args;

export const Open = Template.bind({});
Open.args = Default.args;
Open.decorators = [(storyFn) => <OpenWrapper>{storyFn()}</OpenWrapper>];
Open.parameters = {
  chromatic: {
    viewports: [800],
  },
};
Open.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const search = await canvas.findByRole('button', { name: /search docs/i });
  await userEvent.click(search);
};
