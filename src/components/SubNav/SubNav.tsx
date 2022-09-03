import React, { FunctionComponent, ReactNode } from 'react';
import { styled, css } from '@storybook/theming';
import { Link } from '@storybook/design-system';
import { typography, text, pageMargins, color, breakpoints } from '../shared/styles';

const NavContainer = styled.div`
  ${pageMargins}
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div<{ inverse?: boolean }>`
  box-shadow: ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : color.tr10)} 0 -1px 0px 0px
    inset;
`;

interface SubNavProps {
  inverse?: boolean;
  children: ReactNode;
}

export const SubNavDivider = styled.hr<{ inverse?: boolean }>`
  border: none;
  background-color: ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : color.tr10)};
  width: 1px;
  height: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: ${breakpoints[2]}px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export const SubNavBreadcrumb = styled(Link)`
  ${text.regularBold};
  margin-top: 10px;
  margin-bottom: 10px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
SubNavBreadcrumb.defaultProps = {
  tertiary: true,
};

export const SubNavCTA = styled(Link)`
  ${text.regularBold};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubNavMenus = styled.div`
  flex: none;
  display: flex;
  align-items: center;

  & > button {
    margin-right: 12px;
  }

  & > button:last-child {
    margin-right: 0;
  }

  @media (min-width: ${breakpoints[1]}px) {
    & > button:last-child {
      margin-right: 12px;
    }
  }
`;
export const SubNavMenuLabel = styled.div<{ hidden?: boolean }>`
  font-size: ${typography.size.s2}px;
  line-height: 20px;
  color: ${color.dark};
  display: none;

  @media (min-width: ${breakpoints[2]}px) {
    display: block;
  }
`;

export const SubNavRight = styled.div`
  flex: none;
  display: none;
  margin-left: auto;

  @media (min-width: ${breakpoints[1]}px) {
    display: block;
  }
`;

export const SubNav: FunctionComponent<SubNavProps> = ({ children, inverse }) => {
  return (
    <Wrapper inverse={inverse}>
      <NavContainer>{children}</NavContainer>
    </Wrapper>
  );
};
