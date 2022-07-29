import React from 'react';
import { styled } from '@storybook/theming';
import { getPlaceholderImgUrl } from '../../../.storybook/getPlaceholderImgUrl';
import { LinkCard } from './LinkCard';

const Demo = styled.div`
  max-width: 20rem;
`;

export default {
  title: 'Cards/Card',
  component: LinkCard,
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
    authorName: 'Author Name',
    children: <img src={getPlaceholderImgUrl(400, 300)} alt="" />,
  },
};

export const WithBackgroundColor = {
  args: {
    ...Default.args,
    backgroundColor: 'rebeccapurple',
    children: undefined,
  },
};

export const Loading = {
  ...Default,
  args: {
    ...Default.args,
    children: undefined,
    isLoading: true,
  },
};
