import React from 'react';
import { styled } from '@storybook/theming';
import { Link } from '@storybook/design-system';

import { PageFooter } from './PageFooter';
import { Logos } from '@storybook/design-system';

const LogotypeWrapper = styled(Link)`
  margin-bottom: 1rem;
  display: block;

  svg {
    height: 28px;
    width: auto;
    display: block;
    position: static;

    transition: all 150ms ease-out;
    transform: translate3d(0, 0, 0);
    &:hover {
      transform: translate3d(0, -1px, 0);
    }
    &:active {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const DemoSubscribeForm = styled.div`
  outline: 1px dotted;
  padding: 1rem;
`;

const navLinksData = [
  { title: 'Docs', href: '/' },
  { title: 'Tutorials', href: '/' },
  { title: 'Releases', href: '/' },
];

const navLinks = navLinksData.map(({ title, href }) => (
  <Link tertiary key={title} href={href}>
    {title}
  </Link>
));

export default {
  title: 'PageFooter',
  component: PageFooter,
};

export const Default = () => (
  <PageFooter
    navLinks={navLinks}
    storybookLogoLink={
      <LogotypeWrapper to="/">
        <Logos.Storybook title="Storybook" />
      </LogotypeWrapper>
    }
    subscribeForm={<DemoSubscribeForm>SubscribeForm</DemoSubscribeForm>}
    tutorialsLink="/"
  />
);
