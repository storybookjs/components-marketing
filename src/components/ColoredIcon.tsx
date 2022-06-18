import { styled } from '@storybook/theming';
import { Icon } from '@storybook/design-system';
import { color } from './shared/styles';

export const ColoredIcon = styled(Icon)<{ color: keyof typeof color }>`
  color: ${(props) => color[props.color]};
`;
