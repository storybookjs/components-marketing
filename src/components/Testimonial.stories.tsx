import React from 'react';
import { Testimonial } from './Testimonial';

// import ChromaticLogoSVG from '../../images/logos/user/logo-chromatic.svg';

export default {
  title: 'Testimonial',
  component: Testimonial,
};

const Template = (args) => <Testimonial {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: (
    <span>
      “Storybook is an absolutely fantastic app that helps to keep us organized and our customers
      happy.”
    </span>
  ),
  avatarUrl: 'https://avatars1.githubusercontent.com/u/263385?s=88&v=4',
  name: 'John Doe',
  jobTitle: 'Job title',
  logo: './atomic-design.svg',
};

export const Inverse = Template.bind({});
Inverse.args = {
  ...Default.args,
  inverse: true,
  logo: './air-bnb.svg',
};
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
