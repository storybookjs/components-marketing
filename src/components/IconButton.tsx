import { styled } from '@storybook/theming';
import { spacing, color } from './shared/styles';

export const IconButton = styled.button<{ inverse?: boolean }>`
  color: ${(props) => (props.inverse ? color.lightest : '#7a858e')};
  border-radius: ${spacing.borderRadius.small}px;
  border: 0;
  outline: 0;
  background-color: transparent;
  transition: background-color 150ms ease-out, color 150ms ease-out;
  width: 24px;
  height: 24px;
  padding: 5px;

  svg {
    width: 14px;
    height: 14px;
    display: block;
  }

  &:hover,
  &:focus {
    background-color: rgba(30, 167, 253, 0.14);
    color: ${color.secondary};
  }

  &:active {
    background-color: rgba(30, 167, 253, 0.07);
    color: ${color.secondary};
  }
`;
