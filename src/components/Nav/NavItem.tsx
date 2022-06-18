import { styled } from '@storybook/theming';
import { text, spacing, color } from '../shared/styles';
import { LinkWithWrapper, LinkWithWrapperProps } from '../LinkWithWrapper';

type NavItemVariant = 'default' | 'primary' | 'inverse';

const colorMap = {
  default: color.dark,
  primary: color.secondary,
  inverse: color.lightest,
};

export const NavItem = styled(LinkWithWrapper)<LinkWithWrapperProps & { variant?: NavItemVariant }>`
  ${text.regularBold};
  display: inline-flex;
  align-items: center;
  text-align: center;
  padding: 6px 8px;
  color: ${(props) => colorMap[props.variant]};
  text-decoration: none;
  border-radius: ${spacing.borderRadius.small}px;
  transition: background-color 150ms ease-out, color 150ms ease-out;
  outline: 0;

  &:hover,
  &:focus {
    color: ${color.secondary};
    background-color: rgba(30, 167, 253, 0.14);
  }

  &:active {
    color: ${color.secondary};
    background-color: rgba(30, 167, 253, 0.07);
  }
`;
NavItem.defaultProps = {
  variant: 'default',
};
