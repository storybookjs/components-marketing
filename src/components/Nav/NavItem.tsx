import { styled, css } from '@storybook/theming';
import { text, spacing, color } from '../shared/styles';
import { LinkWithWrapper, LinkWithWrapperProps } from '../LinkWithWrapper';

type NavItemVariant = 'default' | 'primary' | 'inverse';

const colorMap = {
  default: color.dark,
  primary: color.secondary,
  inverse: color.lightest,
};

export const NavItem = styled(LinkWithWrapper, { shouldForwardProp: (prop) => prop !== 'active' })<
  LinkWithWrapperProps & { variant?: NavItemVariant; monochrome?: boolean; active?: boolean }
>`
  ${text.regularBold};
  display: inline-flex;
  align-items: center;
  text-align: center;
  padding: 6px 8px;
  color: ${(props) => (props.monochrome ? color.lightest : colorMap[props.variant])};
  text-decoration: none;
  border-radius: ${spacing.borderRadius.small}px;
  transition: background-color 150ms ease-out, color 150ms ease-out;
  outline: 0;

  ${(props) =>
    props.active &&
    props.variant !== 'inverse' &&
    css`
      color: ${props.monochrome ? color.lightest : color.secondary};
      background-color: ${props.monochrome
        ? 'rgba(255, 255, 255, 0.14)'
        : 'rgba(30, 167, 253, 0.07)'};
    `};

  ${(props) =>
    props.monochrome
      ? css`
          &:hover,
          &:focus {
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
          &:focus {
            color: ${color.secondary};
            background-color: rgba(30, 167, 253, 0.14);
          }

          &:active {
            color: ${color.secondary};
            background-color: rgba(30, 167, 253, 0.07);
          }
        `}
`;
NavItem.defaultProps = {
  variant: 'default',
};
