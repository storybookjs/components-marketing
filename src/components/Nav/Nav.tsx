import React, { FunctionComponent, useContext } from 'react';
import { styled } from '@storybook/theming';
import { Logos } from '@storybook/design-system';
import { pageMargins, spacing, color, breakpoints } from '../shared/styles';
import { NavItem } from './NavItem';
import { Search } from '../Search';
import { Community } from './menus';
import { TabletMenu } from './TabletMenu';
import { MobileMenu } from './MobileMenu';
import { LinksContext } from '../links-context';

const navBreakpoints = {
  desktop: 978,
  tablet: breakpoints[1],
  mobile: breakpoints[0],
};

const GlobalSearch = styled(Search)<{ monochrome?: boolean }>`
  ${(props) => props.monochrome && ` --search-keys-bg: rgba(255, 255, 255, 0.1);`}

  flex: none;
  width: 160px;
  display: none;

  @media (min-width: ${navBreakpoints.tablet}px) {
    display: block;
  }

  @media (min-width: ${navBreakpoints.tablet}px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: ${navBreakpoints.desktop}px) {
    position: relative;
    left: initial;
    transform: initial;

    margin-left: auto;
  }
`;

const LogoNavItem = styled(NavItem)`
  background-color: transparent;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    outline: 2px solid ${color.secondary};
  }

  @media (min-width: ${navBreakpoints.desktop}px) {
    margin-right: 24px;
  }
`;

const StorybookLogo = styled(Logos.Storybook)`
  height: 20px;
  display: block;
`;
const StorybookLogoInverse = styled(Logos.StorybookInverted)`
  height: 20px;
  display: block;
`;

const Wrapper = styled.div<{ inverse?: boolean }>`
  box-shadow: ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : color.tr10)} 0 -1px 0px 0px
    inset;
  padding-top: ${spacing.padding.medium}px;
  padding-bottom: ${spacing.padding.medium}px;
`;

const NavContainer = styled.nav`
  ${pageMargins}
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${navBreakpoints.desktop}px) {
    justify-content: flex-start;
  }
`;

// Tablet nav 600 - desktop
const TabletNav = styled(TabletMenu)`
  display: none;

  @media (min-width: ${navBreakpoints.tablet}px) {
    display: block;
  }

  @media (min-width: ${navBreakpoints.desktop}px) {
    display: none;
  }
`;

// Mobile nav 0 - 600
const MobileNav = styled(MobileMenu)`
  display: block;

  @media (min-width: ${navBreakpoints.tablet}px) {
    display: none;
  }
`;

interface NavProps {
  inverse?: boolean;
  monochrome?: boolean;
  version: string;
  apiKey: string;
  activeSection?: 'home' | 'why' | 'docs' | 'integrations' | 'showcase' | 'community';
}

const NavLinks = styled.div`
  display: none;
  align-items: center;

  > * {
    margin-right: 9px;
  }

  @media (min-width: ${navBreakpoints.desktop}px) {
    display: flex;
  }
`;

export const Nav: FunctionComponent<NavProps> = ({
  inverse,
  monochrome,
  version = '6.5',
  apiKey,
  activeSection = 'home',
}) => {
  const navLinks = useContext(LinksContext);

  return (
    <Wrapper inverse={inverse}>
      <NavContainer>
        <LogoNavItem
          aria-label="home"
          href={navLinks.home.url}
          LinkWrapper={navLinks.home.linkWrapper}
        >
          {inverse ? (
            <StorybookLogoInverse role="presentation" />
          ) : (
            <StorybookLogo role="presentation" />
          )}
        </LogoNavItem>
        <NavLinks>
          <NavItem
            active={activeSection === 'why'}
            monochrome={monochrome}
            variant={inverse ? 'inverse' : 'default'}
            href={navLinks.whyStorybook.url}
            LinkWrapper={navLinks.whyStorybook.linkWrapper}
          >
            Why
          </NavItem>
          <NavItem
            active={activeSection === 'showcase'}
            monochrome={monochrome}
            variant={inverse ? 'inverse' : 'default'}
            href={navLinks.showcase.url}
            LinkWrapper={navLinks.showcase.linkWrapper}
          >
            Showcase
          </NavItem>
          <NavItem
            active={activeSection === 'docs'}
            monochrome={monochrome}
            variant={inverse ? 'inverse' : 'default'}
            href={navLinks.guides.url}
            LinkWrapper={navLinks.showcase.linkWrapper}
          >
            Docs
          </NavItem>
          <NavItem
            active={activeSection === 'integrations'}
            monochrome={monochrome}
            variant={inverse ? 'inverse' : 'default'}
            href={navLinks.integrations.url}
            LinkWrapper={navLinks.integrations.linkWrapper}
          >
            Integrations
          </NavItem>
          <Community
            inverse={inverse}
            monochrome={monochrome}
            navLinks={navLinks}
            active={activeSection === 'community'}
          />
          <NavItem
            monochrome={monochrome}
            variant={inverse ? 'inverse' : 'default'}
            href={navLinks.enterprise.url}
            LinkWrapper={navLinks.enterprise.linkWrapper}
          >
            Enterprise
          </NavItem>
        </NavLinks>
        <GlobalSearch monochrome={monochrome} apiKey={apiKey} version={version} inverse={inverse} />
        {/* Collapsed navs for tablet and mobile */}
        <TabletNav navLinks={navLinks} inverse={inverse} monochrome={monochrome} />
        <MobileNav
          navLinks={navLinks}
          inverse={inverse}
          monochrome={monochrome}
          apiKey={apiKey}
          version={version}
        />
      </NavContainer>
    </Wrapper>
  );
};
