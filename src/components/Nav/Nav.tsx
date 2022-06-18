import React, { FunctionComponent, useContext } from 'react';
import { styled } from '@storybook/theming';
import { Logos } from '@storybook/design-system';
import { pageMargins, spacing, color, breakpoints } from '../shared/styles';
import { NavItem } from './NavItem';
import { Search } from '../Search';
import { Why, Docs, Community } from './menus';
import { TabletMenu } from './TabletMenu';
import { MobileMenu } from './MobileMenu';
import { NavContext } from './nav-context';

const desktopBreakpoint = 1008;

const GlobalSearch = styled(Search)`
  flex: none;
  width: 160px;
  display: none;

  @media (min-width: ${breakpoints[1]}px) {
    display: block;
  }

  @media (min-width: ${desktopBreakpoint}px) {
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

  @media (min-width: ${desktopBreakpoint}px) {
    margin-right: 32px;
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
  border-bottom: 1px solid ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : color.tr10)};
  padding-top: ${spacing.padding.medium}px;
  padding-bottom: ${spacing.padding.medium}px;
`;

const NavContainer = styled.nav`
  ${pageMargins}
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${desktopBreakpoint}px) {
    justify-content: flex-start;
  }
`;

// Tablet nav 600 - desktop
const TabletNav = styled(TabletMenu)`
  display: none;

  @media (min-width: ${breakpoints[1]}px) {
    display: block;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    display: none;
  }
`;

// Mobile nav 0 - 600
const MobileNav = styled(MobileMenu)`
  display: block;

  @media (min-width: ${breakpoints[1]}px) {
    display: none;
  }
`;

interface NavProps {
  inverse?: boolean;
}

const NavLinks = styled.div`
  display: none;
  align-items: center;

  > * {
    margin-right: 9px;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    display: flex;
  }
`;

export const Nav: FunctionComponent<NavProps> = ({ inverse }) => {
  const navLinks = useContext(NavContext);

  return (
    <Wrapper inverse={inverse}>
      <NavContainer>
        <LogoNavItem
          aria-label="home"
          to={navLinks.home.url}
          LinkWrapper={navLinks.home.linkWrapper}
        >
          {inverse ? (
            <StorybookLogoInverse role="presentation" />
          ) : (
            <StorybookLogo role="presentation" />
          )}
        </LogoNavItem>
        <NavLinks>
          <Why inverse={inverse} navLinks={navLinks} />
          <NavItem
            variant={inverse ? 'inverse' : 'default'}
            to={navLinks.showcase.url}
            LinkWrapper={navLinks.showcase.linkWrapper}
          >
            Showcase
          </NavItem>
          <Docs inverse={inverse} navLinks={navLinks} />
          <NavItem
            variant={inverse ? 'inverse' : 'default'}
            to={navLinks.integrations.url}
            LinkWrapper={navLinks.integrations.linkWrapper}
          >
            Integrations
          </NavItem>
          <NavItem
            variant={inverse ? 'inverse' : 'default'}
            to={navLinks.changelog.url}
            LinkWrapper={navLinks.changelog.linkWrapper}
          >
            Changelog
          </NavItem>
          <Community inverse={inverse} navLinks={navLinks} />
        </NavLinks>
        <GlobalSearch framework="react" version={6.5} inverse={inverse} />
        {/* Collapsed navs for tablet and mobile */}
        <TabletNav navLinks={navLinks} />
        <MobileNav navLinks={navLinks} />
      </NavContainer>
    </Wrapper>
  );
};
