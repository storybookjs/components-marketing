import React from 'react';
import { styled } from '@storybook/theming';
import { getPlaceholderImgUrl } from '../../../.storybook/getPlaceholderImgUrl';
import { ProjectCard } from './ProjectCard';

const Wrapper = styled.div`
  max-width: 20rem;
`;

const Grid = styled.div`
  padding: 30px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(min(220px, 100%), 1fr));
`;

export default {
  title: 'Cards/ProjectCard',
  component: ProjectCard,
  excludeStories: ['projects'],
};

export const projects = [
  {
    name: 'Design System',
    accentColor: {
      hex: '#4c35f5',
    },
    height: 288,
    width: 746,
    logoAlt: 'Monday.com',
    logoUrl: 'https://media.graphassets.com/BBM6cBTiTuLlPvAGtXab',
    projectUrl: 'https://storybook.js.org/showcase/mondaycom-vibe-design-system',
  },
  {
    name: 'Polaris',
    accentColor: {
      hex: '#377e62',
    },
    height: 33,
    width: 118,
    logoAlt: 'Shopify',
    logoUrl: 'https://media.graphassets.com/GNpyBL6rTJyyruBSsG4v',
    projectUrl: 'https://storybook.js.org/showcase/shopify-polaris-react',
  },
  {
    name: 'React Spectrum',
    accentColor: {
      hex: '#e03422',
    },
    height: 32,
    width: 130,
    logoAlt: 'Adobe',
    logoUrl: 'https://media.graphassets.com/voJpj5ySbjALyJ7RUlfw',
    projectUrl: 'https://storybook.js.org/showcase/adobe-spectrum-web-components',
  },
  {
    name: 'Psammead',
    accentColor: {
      hex: '#8F1F19',
    },
    height: 32,
    width: 120,
    logoAlt: 'BBC',
    logoUrl: 'https://media.graphassets.com/To5iQm5VRRGdr5upBBml',
    projectUrl: 'https://storybook.js.org/showcase/bbc-psammead',
  },
  {
    name: 'UI React',
    accentColor: {
      hex: '#000000',
    },
    height: 99,
    width: 284,
    logoAlt: 'Audi',
    logoUrl: 'https://media.graphassets.com/rdYLCbE5Qgm5xGeUfxxJ',
    projectUrl: 'https://storybook.js.org/showcase/audi-ui-react',
  },
  {
    name: 'Gutenberg',
    accentColor: {
      hex: '#3171A6',
    },
    height: 80,
    width: 80,
    logoAlt: 'WordPress',
    logoUrl: 'https://media.graphassets.com/b6N8K1VSuym28UndT2wW',
    projectUrl: 'https://storybook.js.org/showcase/wordpress-gutenberg',
  },
];

const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <Wrapper>
      <Story />
    </Wrapper>
  ),
];
Default.args = {
  ...projects[0],
};

export const HugeLogo = Template.bind({});
HugeLogo.decorators = Default.decorators;
HugeLogo.args = {
  ...Default.args,
  logoUrl: getPlaceholderImgUrl(1200, 900),
  width: 1200,
  height: 900,
};

export const PortraitLogo = Template.bind({});
PortraitLogo.decorators = Default.decorators;
PortraitLogo.args = {
  ...Default.args,
  logoUrl: getPlaceholderImgUrl(90, 120),
  width: 120,
  height: 90,
};

export const NoLogo = Template.bind({});
NoLogo.args = {
  ...Default.args,
  logoUrl: undefined,
};

export const NormalizedLogos = () => (
  <Grid>
    {projects.map((project) => (
      <ProjectCard key={project.logoAlt} {...project} />
    ))}
  </Grid>
);
