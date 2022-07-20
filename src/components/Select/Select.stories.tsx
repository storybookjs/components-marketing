import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { Icon } from '@storybook/design-system';
import { Select } from './Select';
import { Option, OptionGroup } from './Option';
import logoEmber from '../../../.storybook/static/logo-ember.svg';
import logoHtml from '../../../.storybook/static/logo-html.svg';
import logoPreact from '../../../.storybook/static/logo-preact.svg';
import logoSvelte from '../../../.storybook/static/logo-svelte.svg';
import logoReact from '../../../.storybook/static/logo-react.svg';
import logoVue from '../../../.storybook/static/logo-vue.svg';
import logoAngular from '../../../.storybook/static/logo-angular.svg';
import logoWebComponents from '../../../.storybook/static/logo-web-components.svg';

export default {
  component: Select,
  title: 'Select',
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
};

const ImgIcon = ({ src }) => <img src={src} alt="" style={{ width: 12, height: 12 }} />;

const frameworksByType = {
  core: [
    {
      name: 'React',
      icon: <ImgIcon src={logoReact} />,
    },
    {
      name: 'Vue',
      icon: <ImgIcon src={logoVue} />,
    },
    {
      name: 'Angular',
      icon: <ImgIcon src={logoAngular} />,
    },
    {
      name: 'Web Components',
      icon: <ImgIcon src={logoWebComponents} />,
    },
  ],
  community: [
    { name: 'Ember', icon: <ImgIcon src={logoEmber} /> },
    { name: 'HTML', icon: <ImgIcon src={logoHtml} /> },
    { name: 'Svelte', icon: <ImgIcon src={logoSvelte} /> },
    { name: 'Preact', icon: <ImgIcon src={logoPreact} /> },
  ],
};

const versionsType = {
  stable: [
    { name: '6.5 (latest)' },
    { name: '6.4' },
    { name: '6.3' },
    { name: '6.2' },
    { name: '6.1' },
    { name: '6.0' },
  ],
  'pre-release': [{ name: '7.0 (future)' }],
};

const Template = ({ label, value, options, ...args }) => (
  <Select label={label} value={value} onChange={() => {}} {...args}>
    {Object.keys(options).map((type) => (
      <OptionGroup key={type} label={type}>
        {options[type].map(({ name, icon }) => (
          <Option key={name} label={name} value={name} icon={icon} />
        ))}
      </OptionGroup>
    ))}
  </Select>
);

export const Default = () => (
  <Select label="Section" value="" onChange={() => {}}>
    <Option label="Get Started" value="get-started" />
    <Option label="Tutorials" value="tutorials" />
    <Option label="API" value="api" />
  </Select>
);
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole('combobox');
  await userEvent.click(select);
};

export const WithIcon = () => (
  <Select label="Section" value="" onChange={() => {}}>
    <Option label="Get Started" value="get-started" icon={<Icon icon="globe" />} />
    <Option label="Tutorials" value="tutorials" icon={<Icon icon="compass" />} />
    <Option label="API" value="api" icon={<Icon icon="location" />} />
  </Select>
);
WithIcon.play = Default.play;

export const OptionGroups = Template.bind({});
OptionGroups.args = {
  label: 'Version:',
  options: versionsType,
};
OptionGroups.play = Default.play;

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Version:',
  value: '6.4',
  options: versionsType,
};

export const OptionGroupsWithIcon = Template.bind({});
OptionGroupsWithIcon.args = {
  label: 'Framework:',
  options: frameworksByType,
};
OptionGroupsWithIcon.play = Default.play;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Framework:',
  options: frameworksByType,
  primary: true,
};
Primary.play = Default.play;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Framework:',
  options: frameworksByType,
  showLabel: true,
};
WithLabel.play = Default.play;
