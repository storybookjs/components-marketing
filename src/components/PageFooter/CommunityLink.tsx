import React from 'react';
import { Icon, Link, icons } from '@storybook/design-system';

export const CommunityLink = ({ href, icon, name }: Props) => (
  <Link tertiary href={href}>
    <Icon icon={icon} /> {name}
  </Link>
);

interface Props {
  href: string;
  icon: keyof typeof icons;
  name: string;
}
