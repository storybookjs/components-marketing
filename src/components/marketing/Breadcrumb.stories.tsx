import React from 'react';
import { Breadcrumb } from './Breadcrumb';

export default {
  component: Breadcrumb,
  title: 'Marketing/Breadcrumb',
};

const StoryLinkWrapper = ({ children, to, ...rest }) => (
  <a href={to} {...rest}>
    {children}
  </a>
);

export const Default = () => (
  <div style={{ paddingTop: '2rem' }}>
    <Breadcrumb linkWrapper={StoryLinkWrapper}>View full catalog</Breadcrumb>
  </div>
);
