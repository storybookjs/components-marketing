import { styled } from '@storybook/theming';
import { Button, Link, Subheading } from '@storybook/design-system';
import {
  background,
  color,
  typography,
  pageMargins,
  subheading,
  breakpoints,
} from '../shared/styles';

const inverseBorder = 'rgba(255, 255, 255, 0.1)';

export const FooterWrapper = styled.footer<{ inverse?: boolean }>`
  background-color: ${(props) => (props.inverse ? '#0E0C2A' : background.app)};
  border-top: 1px solid ${(props) => (props.inverse ? inverseBorder : color.border)};
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (min-width: ${breakpoints[2]}px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const Upper = styled.div`
  ${pageMargins};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints[2]}px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const Title = styled(Subheading)`
  ${subheading.regular};
  line-height: 20px;
  display: block;
  color: ${color.mediumdark};
  margin-bottom: 16px;
`;

export const Subscribe = styled.div`
  flex: 1 1 300px;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  form {
    margin-bottom: 16px;
  }

  @media (min-width: ${breakpoints[1]}px) {
    flex-direction: row;
    align-items: center;

    form {
      margin-bottom: 0;
      margin-right: 20px;
    }
  }

  @media (min-width: ${breakpoints[2]}px) {
    margin-right: 30px;
  }
`;

export const IconLink = styled(Button)`
  &:not(:last-child) {
    margin-right: 15px;
  }

  ${(props) =>
    props.appearance === 'inverseOutline' &&
    `
        box-shadow:(255, 255, 255, 0.1) 0 0 0 1px inset;
        color: (255, 255, 255, 0.1);

        &:hover {
          box-shadow:(255, 255, 255, 0.1) 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: (255, 255, 255, 0.1);
          box-shadow:(255, 255, 255, 0.1) 0 0 0 1px inset;
          color: ${color.darkest};
        }
    `};
`;
IconLink.defaultProps = {
  isLink: true,
  containsIcon: true,
};

export const SocialLinks = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const Column = styled.div`
  > a {
    line-height: 20px;
    display: block;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Lower = styled.div`
  ${pageMargins};
  padding-top: 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 32px;

  @media (min-width: ${breakpoints[1]}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints[2]}px) {
    grid-template-columns: repeat(3, 1fr) max-content;
    padding-top: 4rem;
    grid-row-gap: 24px;
  }
`;

export const FooterLink = styled(Link)`
  font-size: ${typography.size.s2}px;
`;
FooterLink.defaultProps = {
  tertiary: true,
};
