import React, { ComponentProps } from 'react';
import { styled, css } from '@storybook/theming';
import { Button } from '@storybook/design-system';
import { color, spacing, text } from './shared/styles';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Integration = styled(Button)<{ inverse?: boolean }>`
  border-radius: ${spacing.borderRadius.small}px;
  padding: 8px;

  ${(props) =>
    props.inverse &&
    css`
      box-shadow: rgb(255 255 255 / 10%) 0 0 0 1px inset;

      &:hover,
      &:active,
      &:focus,
      &:active:focus:hover {
        box-shadow: ${color.secondary} 0 0 0 1px inset;
      }
    `}

  span {
    display: block;
  }

  img {
    display: block;
    width: 24px;
    height: 24px;
  }
`;
Integration.defaultProps = {
  appearance: 'outline',
  isLink: true,
  containsIcon: true,
};

const OverflowLabel = styled.div<{ inverse?: boolean }>`
  ${text.regular};
  color: ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.5)' : color.mediumdark)};
`;

interface IntegrationProps extends ComponentProps<typeof Button> {
  image: string;
}

interface IntegrationsListProps {
  inverse?: boolean;
  integrations: IntegrationProps[];
  overflowLabel: string;
}

export const IntegrationsList = ({
  inverse,
  integrations,
  overflowLabel,
  ...props
}: IntegrationsListProps) => (
  <Wrapper {...props}>
    {integrations.map(({ name, image, ...integration }) => (
      <Integration inverse={inverse} key={name} {...integration}>
        <img src={image} alt={name} />
      </Integration>
    ))}
    <OverflowLabel inverse={inverse}>{overflowLabel}</OverflowLabel>
  </Wrapper>
);
