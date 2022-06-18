import React from 'react';
import { Icon } from '@storybook/design-system';
import { Menu, MenuItem } from './Menu';

export default {
  component: Menu,
  title: 'Menu',
};

export const Default = () => (
  <Menu>
    <MenuItem>Copy canvas link</MenuItem>
    <MenuItem>Open canvas in new tab</MenuItem>
    <MenuItem>Wrapped Text Item Wrapped Text Item Wrapped Text Item</MenuItem>
  </Menu>
);

export const WithIcon = () => (
  <Menu>
    <MenuItem icon={<Icon icon="copy" />}>Copy canvas link</MenuItem>
    <MenuItem icon={<Icon icon="sharealt" />}>Open canvas in new tab</MenuItem>
    <MenuItem icon={<Icon icon="expand" />}>
      Wrapped Text Item Wrapped Text Item Wrapped Text Item
    </MenuItem>
  </Menu>
);
