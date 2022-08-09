import React from 'react';
import { styled } from '@storybook/theming';
import { HorizontalScroll } from './HorizontalScroll';

export default {
  title: 'Utilities/HorizontalScroll',
  component: HorizontalScroll,
  parameters: {
    layout: 'padded',
  },
};

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ddd;
  border-radius: 5px;
`;

const Template = () => (
  <HorizontalScroll>
    {new Array(10).fill(0).map((_, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <Box key={idx} />
    ))}
  </HorizontalScroll>
);

export const Default = Template.bind({});
