import { Button, Cardinal, Icon } from '@storybook/design-system';
import React from 'react';
import { SectionLede } from './SectionLede';

export default {
  title: 'SectionLede',
  component: SectionLede,
};

const Template = (args) => <SectionLede {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Test UIs with less effort and no flake',
  copy: 'Stories capture the “known good” states of UI components. They’re a pragmatic, reproducible way to keep track of UI edge cases. Reuse stories to power automated tests.',
};

export const WithActions = Template.bind({});
WithActions.args = {
  heading: 'Build UIs without the grunt work',
  copy: 'Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.',
  actions: (
    <>
      <Button appearance="secondary">Get started</Button>
      <Button appearance="outline">
        <Icon icon="play" /> Watch video
      </Button>
    </>
  ),
};

export const WithMeta = Template.bind({});
WithMeta.args = {
  heading: 'Develop durable user interfaces',
  copy: 'Storybook provides a workshop to build UIs in isolation. It helps you develop hard-to-reach states and edge cases without needing to run the whole app.',
  meta: (
    <div
      style={{ lineHeight: '32px', border: '1px dashed black', textAlign: 'center', padding: 8 }}
    >
      meta
    </div>
  ),
};

export const WithActionsAndMeta = Template.bind({});
WithActionsAndMeta.args = {
  ...WithActions.args,
  meta: WithMeta.args.meta,
};

export const Inverse = Template.bind({});
Inverse.args = {
  heading: 'Document UI for your team to reuse',
  copy: 'Storybook brings together UI, examples, and documentation in one place. That helps your team adopt existing UI patterns.',
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
