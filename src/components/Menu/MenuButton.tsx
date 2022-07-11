import React, { ComponentProps, forwardRef } from 'react';
import { styled, css } from '@storybook/theming';
import { Icon } from '@storybook/design-system';
import { darken } from 'polished';
import { text, spacing, color } from '../shared/styles';

const ExpandableIcon = styled(Icon)`
  margin-left: 5px;
  margin-right: 0;
  width: 10px;
  height: 10px;
`;

const PureMenuButton = styled.button<{ primary?: boolean; open?: boolean }>`
  ${text.regularBold};
  display: inline-flex;
  align-items: center;
  text-align: center;
  padding: 6px 8px;
  color: ${(props) => (props.primary ? color.secondary : color.dark)};
  text-decoration: none;
  border-radius: ${spacing.borderRadius.small}px;
  background-color: transparent;
  transition: transform 150ms ease-out, color 150ms ease-out;
  outline: 0;
  border: 0;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    transform: translateY(-1px);
    color: ${(props) => darken(0.07, props.primary ? color.secondary : color.dark)};
  }
  &:active {
    transform: translateY(0);
    color: ${(props) => darken(0.1, props.primary ? color.secondary : color.dark)};
  }

  ${(props) =>
    props.open &&
    css`
      color: ${darken(0.1, props.primary ? color.secondary : color.dark)};
    `};
`;

type MenuButtonProps = ComponentProps<typeof PureMenuButton> & {
  primary?: boolean;
};

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ primary, open, children, ...props }, ref) => (
    <PureMenuButton primary={primary} ref={ref} open={open} {...props}>
      {children}
      {open ? <ExpandableIcon icon="arrowup" /> : <ExpandableIcon icon="arrowdown" />}
    </PureMenuButton>
  )
);
MenuButton.displayName = 'MenuButton';
