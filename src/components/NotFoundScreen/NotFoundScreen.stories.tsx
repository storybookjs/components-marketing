import React from 'react';

import { NotFoundScreen } from './NotFoundScreen';

export default {
  title: 'Screens/NotFoundScreen',
  component: NotFoundScreen,
};

export const Default = () => (
  <NotFoundScreen repoUrl="repo_link" latestVersionString="6.5" apiKey="api_key" />
);

export const NoSpacing = () => (
  <NotFoundScreen
    includeSpacing={false}
    repoUrl="repo_link"
    latestVersionString="6.5"
    apiKey="api_key"
  />
);
