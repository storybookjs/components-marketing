import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { Icon } from '@storybook/design-system';
import { Menu } from './Menu';

const logos = {
  ember: '/logo-ember.svg',
  html: '/logo-html.svg',
  preact: '/logo-preact.svg',
  svelte: '/logo-svelte.svg',
  react: '/logo-react.svg',
  vue: '/logo-vue.svg',
  angular: '/logo-angular.svg',
  webComponents: '/logo-web-components.svg',
};

export default {
  component: Menu,
  title: 'Menu',
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
};

const ImgIcon = ({ src }) => <img src={src} alt="" style={{ width: 12, height: 12 }} />;

const Template = (args) => (
  <div style={{ height: 600 }}>
    <Menu label="Why" {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: 'Copy canvas link',
      link: { url: '/why-storybook' },
    },
    {
      label: 'Open canvas in new tab',
      link: { url: '/use-cases' },
    },
    {
      label: 'Wrapped Text Item Wrapped Text Item Wrapped Text Item',
      link: { url: 'case-studies' },
    },
  ],
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const menuButton = canvas.getByRole('button', { name: /Why/i });
  await userEvent.click(menuButton);
  await userEvent.keyboard('{arrowdown}');
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  items: [
    {
      icon: <Icon icon="copy" />,
      label: 'Copy canvas link',
      link: { url: '/why-storybook' },
    },
    {
      icon: <Icon icon="sharealt" />,
      label: 'Open canvas in new tab',
      link: { url: '/use-cases' },
    },
    {
      icon: <Icon icon="expand" />,
      label: 'Wrapped Text Item Wrapped Text Item Wrapped Text Item',
      link: { url: 'case-studies' },
    },
  ],
};
WithIcon.play = Default.play;

export const Grouped = Template.bind({});
Grouped.args = {
  items: [
    {
      label: 'Core',
      items: [
        {
          label: 'React',
          icon: <ImgIcon src={logos.react} />,
          link: { url: '/react' },
        },
        {
          label: 'Vue',
          icon: <ImgIcon src={logos.vue} />,
          link: { url: '/vue' },
        },
        {
          label: 'Angular',
          icon: <ImgIcon src={logos.angular} />,
          link: { url: '/angular' },
        },
        {
          label: 'Web Components',
          icon: <ImgIcon src={logos.webComponents} />,
          link: { url: '/web-components' },
        },
      ],
    },
    {
      label: 'Community',
      items: [
        { label: 'Ember', icon: <ImgIcon src={logos.ember} />, link: { url: '/ember' } },
        { label: 'HTML', icon: <ImgIcon src={logos.html} />, link: { url: '/html' } },
        { label: 'Svelte', icon: <ImgIcon src={logos.svelte} />, link: { url: '/svelte' } },
        { label: 'Preact', icon: <ImgIcon src={logos.preact} />, link: { url: '/preact' } },
      ],
    },
  ],
};
Grouped.play = Default.play;

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  primary: true,
};
Primary.play = Default.play;
