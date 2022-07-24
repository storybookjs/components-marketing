import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { Link, Logos } from '@storybook/design-system';
import { color, pageMargins, breakpoints, typography, text } from '../shared/styles';

const Label = styled.div<{ inverse?: boolean }>`
  font-size: ${typography.size.s2}px;
  line-height: 20px;
  color: ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.5)' : color.dark)};
  margin-bottom: 8px;
`;

const Attribution = styled.div<{ inverse?: boolean }>`
  ${text.regular};
  color: ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.5)' : color.dark)};
  margin-top: 2rem;

  @media (min-width: ${breakpoints[2]}px) {
    margin-top: 0;
    margin-left: auto;
  }
`;

const ServiceLogo = styled.a`
  display: inline-block;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }

  svg {
    height: 20px;
    width: auto;
    display: block;
    transition: all 150ms ease-out;
  }
`;

const ServiceWrapper = styled.div`
  text-align: left;
  flex: none;
`;

const Service = ({ inverse, label, href, logo }: ServiceProps) => (
  <ServiceWrapper>
    <Label inverse={inverse}>{label}</Label>
    <ServiceLogo href={href}>{logo}</ServiceLogo>
  </ServiceWrapper>
);

interface ServiceProps {
  label: string;
  href: string;
  logo: React.ReactNode;
  inverse?: boolean;
}

export const ServicesWrapper = styled.div`
  ${pageMargins};
  padding-top: 4rem;
  padding-bottom: 64px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${breakpoints[2]}px) {
    flex-direction: row;
    padding-top: 4.5rem;
  }
`;

const Divider = styled.hr<{ inverse?: boolean }>`
  border: 0;
  width: 1px;
  height: 48px;
  margin: 0 15px;
  background-color: ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : color.tr10)};
  flex: none;

  @media (min-width: ${breakpoints[2]}px) {
    margin: 0 30px;
  }
`;

const ServicesGroup = styled.div`
  flex: none;
  display: flex;
  align-items: center;

  @media (min-width: ${breakpoints[2]}px) {
    margin-right: 30px;
  }
`;

export const Services: FC<{ inverse?: boolean }> = ({ inverse }) => (
  <ServicesWrapper>
    <ServicesGroup>
      <Service
        inverse={inverse}
        label="Open source software"
        href="https://storybook.js.org/"
        logo={
          inverse ? (
            <Logos.StorybookInverted title="Storybook" />
          ) : (
            <Logos.Storybook title="Storybook" />
          )
        }
      />
      <Divider inverse={inverse} />
      <Service
        inverse={inverse}
        label="Maintained by"
        href="https://www.chromatic.com/"
        logo={
          inverse ? (
            <Logos.ChromaticInverted title="Chromatic" />
          ) : (
            <Logos.Chromatic title="Chromatic" />
          )
        }
      />
    </ServicesGroup>
    <Attribution inverse={inverse}>
      Special thanks to{' '}
      <Link tertiary inverse={inverse} href="https://www.netlify.com/" rel="noindex nofollow">
        Netlify
      </Link>{' '}
      and{' '}
      <Link tertiary inverse={inverse} href="https://circleci.com/" rel="noindex nofollow">
        CircleCI
      </Link>
    </Attribution>
  </ServicesWrapper>
);
