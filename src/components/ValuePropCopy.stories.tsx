import { Link } from '@storybook/design-system';
import React from 'react';
import { ValuePropCopy } from './ValuePropCopy';

export default {
  title: 'ValuePropCopy',
  component: ValuePropCopy,
};

const Template = (args) => <ValuePropCopy {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Build UI components and pages in isolation',
  description:
    'Implement components and pages without needing to fuss with data, APIs, or business logic.',
};

export const WithLinks = Template.bind({});
WithLinks.args = {
  ...Default.args,
  links: (
    <>
      <Link containsIcon withArrow href="/why-storybook">
        Why build UIs in isolation?
      </Link>
      <Link containsIcon withArrow href="/integrations">
        How does this fit in my tech stack?
      </Link>
    </>
  ),
};

export const WithMeta = Template.bind({});
WithMeta.args = {
  ...Default.args,
  meta: (
    <div
      style={{ lineHeight: '32px', border: '1px dashed black', textAlign: 'center', padding: 8 }}
    >
      meta
    </div>
  ),
};

export const WitLinksAndMeta = Template.bind({});
WitLinksAndMeta.args = {
  ...WithLinks.args,
  meta: WithMeta.args.meta,
};

export const Inverse = Template.bind({});
Inverse.args = {
  ...WithLinks.args,
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
