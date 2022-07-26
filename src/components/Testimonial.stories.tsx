import React from 'react';
import { Testimonial } from './Testimonial';

// import ChromaticLogoSVG from '../../images/logos/user/logo-chromatic.svg';

export default {
  title: 'Testimonial',
  component: Testimonial,
};

export const Default = () => (
  <Testimonial
    text={
      <span>
        “Storybook is an absolutely fantastic app that helps to keep us organized and our customers
        happy.”
      </span>
    }
    avatarUrl="https://avatars1.githubusercontent.com/u/263385?s=88&v=4"
    name="Dominic Nguyen"
    jobTitle="Product designer"
    logo="./air-bnb.svg"
  />
);

export const Inverse = () => (
  <Testimonial
    text={
      <span>
        “Storybook is an absolutely fantastic app that helps to keep us organized and our customers
        happy.”
      </span>
    }
    avatarUrl="https://avatars1.githubusercontent.com/u/263385?s=88&v=4"
    name="Dominic Nguyen"
    jobTitle="Product designer"
    logo="./air-bnb.svg"
  />
);
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
