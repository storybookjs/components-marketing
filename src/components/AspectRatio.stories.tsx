import React from 'react';
import { styled } from '@storybook/theming';
import { getPlaceholderImgUrl } from '../../.storybook/getPlaceholderImgUrl';
import { AspectRatio } from './AspectRatio';

const Demo = styled.div`
  max-width: 20rem;

  & > * {
    background-color: #eee;
  }
`;

export default {
  title: 'Utilities/AspectRatio',
  component: AspectRatio,
  argTypes: {
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <Demo>
        <Story />
      </Demo>
    ),
  ],
};

export const Default = {
  args: {
    children: <img src={getPlaceholderImgUrl(1000, 1000)} alt="" />,
    ratio: '4/3',
  },
};

export const TallRatio = {
  args: {
    ...Default.args,
    ratio: '3/4',
  },
};
