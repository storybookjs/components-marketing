import React from 'react';
import { Icon } from '@storybook/design-system';
import { CollapsedNav } from './CollapsedNav';

export default {
  title: 'Nav/CollapsedNav',
  component: CollapsedNav,
};

export const Default = () => (
  <CollapsedNav
    groups={[
      {
        label: 'Why',
        items: [
          {
            label: 'Why Storybook',
            link: { url: '/something' },
            icon: <Icon icon="storybook" />,
          },

          {
            label: 'Use cases',
            link: { url: '/something' },
            icon: <Icon icon="lightning" />,
          },
          {
            label: 'Case studies',
            link: { url: '/something' },
            icon: <Icon icon="graphline" />,
          },
          {
            label: 'Component-driven UI',
            link: { url: '/something' },
            icon: <Icon icon="componentdriven" />,
          },
        ],
      },
      {
        label: 'Docs',
        items: [
          {
            label: 'Get started',
            link: { url: '/something' },
            icon: <Icon icon="globe" />,
          },
          {
            label: 'Guides',
            link: { url: '/something' },
            icon: <Icon icon="book" />,
          },

          {
            label: 'Tutorials',
            link: { url: '/something' },
            icon: <Icon icon="compass" />,
          },

          {
            label: 'API',
            link: { url: '/something' },
            icon: <Icon icon="location" />,
          },

          {
            label: 'Changelog',
            link: { url: '/something' },
            icon: <Icon icon="check" />,
          },
        ],
      },
    ]}
  />
);
