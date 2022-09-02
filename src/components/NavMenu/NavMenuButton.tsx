import React, { ComponentProps, forwardRef } from 'react';
import { styled, css } from '@storybook/theming';
import { Icon } from '@storybook/design-system';
import { text, spacing, color } from '../shared/styles';

const ExpandableIcon = styled(Icon)`
  margin-left: 5px;
  margin-right: 0;
  width: 10px;
  height: 10px;
`;

const PureNavMenuButton = styled.button<{
  inverse?: boolean;
  monochrome?: boolean;
  open?: boolean;
}>`
  ${text.regularBold};
  display: inline-flex;
  align-items: center;
  text-align: center;
  padding: 6px 8px;
  color: ${(props) => (props.inverse ? color.lightest : color.dark)};
  text-decoration: none;
  border-radius: ${spacing.borderRadius.small}px;
  background-color: transparent;
  transition: background-color 150ms ease-out, color 150ms ease-out;
  outline: 0;
  border: 0;
  cursor: pointer;

  ${(props) =>
    props.open &&
    props.monochrome &&
    css`
      color: ${color.lightest};
      background-color: rgba(255, 255, 255, 0.14);
    `};

  ${(props) =>
    props.open &&
    !props.monochrome &&
    css`
      color: ${color.secondary};
      background-color: rgba(30, 167, 253, 0.14);
    `};

  ${(props) =>
    props.monochrome
      ? css`
          &:hover,
          &:focus,
          &:focus-within {
            color: ${color.lightest};
            background-color: rgba(255, 255, 255, 0.14);
          }

          &:active {
            color: ${color.lightest};
            background-color: rgba(255, 255, 255, 0.07);
          }
        `
      : css`
          &:hover,
          &:focus,
          &:focus-within {
            color: ${color.secondary};
            background-color: rgba(30, 167, 253, 0.14);
          }

          &:active {
            color: ${color.secondary};
            background-color: rgba(30, 167, 253, 0.07);
          }
        `}
`;

type NavMenuButtonProps = ComponentProps<typeof PureNavMenuButton> & {
  inverse?: boolean;
  monochrome?: boolean;
};

export const NavMenuButton = forwardRef<HTMLButtonElement, NavMenuButtonProps>(
  ({ inverse, monochrome, open, children, ...props }, ref) => (
    <PureNavMenuButton inverse={inverse} monochrome={monochrome} ref={ref} open={open} {...props}>
      {children}
      {open ? <ExpandableIcon icon="arrowup" /> : <ExpandableIcon icon="arrowdown" />}
    </PureNavMenuButton>
  )
);
NavMenuButton.displayName = 'NavMenuButton';
