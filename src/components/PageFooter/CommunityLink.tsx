import React, { FunctionComponent, ComponentProps } from 'react';
import { Icon, Link, icons } from '@storybook/design-system';

export const CommunityLink = ({ href, icon, name }: CommunityLinkProps) => (
  <Link tertiary href={href}>
    <Icon icon={icon} /> {name}
  </Link>
);

interface CommunityLinkProps extends Pick<ComponentProps<typeof Icon>, 'icon'> {
  href: string;
  name: string;
}
