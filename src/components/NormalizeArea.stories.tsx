import React from 'react';
import { styled } from '@storybook/theming';
import { NormalizeArea } from './NormalizeArea';
import { projects } from './ProjectCard/ProjectCard.stories';

const Demo = styled.div`
  background-color: #333;
  padding: 30px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(min(220px, 100%), 1fr));

  img {
    filter: brightness(0) invert(1);
  }
`;

export default {
  title: 'Utilities/NormalizeArea',
  component: NormalizeArea,
  argTypes: {
    height: { control: false },
    width: { control: false },
  },
  decorators: [
    (Story) => (
      <Demo>
        <Story />
      </Demo>
    ),
  ],
  render: (args) => (
    <>
      {projects.map(({ height, logoAlt, logoUrl, width }) => (
        <NormalizeArea key={logoAlt} {...args} height={height} width={width}>
          <img src={logoUrl} alt={logoAlt} />
        </NormalizeArea>
      ))}
    </>
  ),
};

export const Default = {
  args: {
    idealArea: 10000,
  },
};

export const SmallerIdealArea = {
  args: {
    idealArea: 5000,
  },
};

export const LargerIdealArea = {
  args: {
    idealArea: 20000,
  },
};

export const None = {
  render: () => (
    <>
      {projects.map(({ logoAlt, logoUrl }) => (
        <img key={logoAlt} src={logoUrl} alt={logoAlt} style={{ maxWidth: 100 }} />
      ))}
    </>
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
