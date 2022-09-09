import React from 'react';
import { NavItem } from './NavItem';

export default {
  title: 'Nav/NavItem',
  component: NavItem,
};

const Template = (args) => <NavItem {...args}>Showcase</NavItem>;

export const Default = Template.bind({});
export const Primary = Template.bind({});
Primary.args = { variant: 'primary' };

export const Inverse = Template.bind({});
Inverse.args = { variant: 'inverse' };
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};

export const Monochrome = Template.bind({});
Monochrome.args = { monochrome: true };
Monochrome.parameters = Inverse.parameters;

export const ActiveRoute = Template.bind({});
ActiveRoute.args = { active: true };
ActiveRoute.parameters = Inverse.parameters;

export const MonoChromeActiveRoute = Template.bind({});
MonoChromeActiveRoute.args = { active: true, monochrome: true };
MonoChromeActiveRoute.parameters = Inverse.parameters;

export const Hover = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };

export const Active = Template.bind({});
Active.parameters = { pseudo: { active: true } };
