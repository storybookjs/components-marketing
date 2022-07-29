import React from 'react';
import { animation } from '@storybook/design-system';
import { css, styled } from '@storybook/theming';
import { AspectRatio } from '../AspectRatio';
import { spacing, color } from '../shared/styles';
import { LinkWithWrapper } from '../LinkWithWrapper';

interface LinkCardProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  href: string;
  LinkWrapper?: React.ComponentType<any>;
}

const offsetStyles = css`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledAspectRatio = styled(AspectRatio, {
  shouldForwardProp: (prop) =>
    !['alwaysSlideOnMobile', 'as', 'disableSlide', 'isLoading', 'ratio'].includes(prop),
})<
  Pick<LinkCardProps, 'isLoading'> & {
    as?: React.ComponentType;
  }
>`
  position: relative;
  z-index: 2;

  ${(props) =>
    props.isLoading &&
    css`
      ${animation.inlineGlow}
    `}
`;

const BlockLink = styled(LinkWithWrapper, {
  shouldForwardProp: (prop) => !['backgroundColor', 'isLoading'].includes(prop),
})<Pick<LinkCardProps, 'backgroundColor' | 'isLoading'>>`
  color: inherit;
  display: block;
  text-decoration: none;
  background-color: ${(props) => (props.isLoading ? color.light : props.backgroundColor)};
  border: 1px solid ${color.border};
  border-radius: ${spacing.borderRadius.small}px;
  overflow: hidden;
  ${offsetStyles}

  & > * {
    ${offsetStyles}
  }
`;

export const LinkCard = ({
  backgroundColor = color.lightest,
  children,
  isLoading,
  href,
  LinkWrapper,
}: LinkCardProps) => (
  <StyledAspectRatio isLoading={isLoading} ratio="4/3">
    <BlockLink
      href={href}
      LinkWrapper={LinkWrapper}
      backgroundColor={backgroundColor}
      isLoading={isLoading}
    >
      {children}
    </BlockLink>
  </StyledAspectRatio>
);
