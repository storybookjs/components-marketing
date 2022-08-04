import React, { useState, ComponentProps, ReactNode, useEffect, useRef } from 'react';
import { styled, css } from '@storybook/theming';
import { Button } from '@storybook/design-system';
import { animate, useMotionValue } from 'framer-motion';
import { color, spacing, text } from './shared/styles';

const IntegrationsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const Media = styled.figure`
  margin: 0;
`;

const Integration = styled(Button)<{ inverse?: boolean; active?: boolean; color: string }>`
  border-radius: ${spacing.borderRadius.small}px;
  padding: 8px;
  background-color: ${(props) => props.color || 'transparent'};

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

  ${(props) =>
    props.active
      ? css`
          box-shadow: ${color.secondary} 0 0 0 1px inset;
        `
      : css`
          opacity: 0.5;
        `}

  span {
    display: block;
  }

  img {
    display: block;
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;
Integration.defaultProps = {
  appearance: 'outline',
  containsIcon: true,
};

const OverflowLabel = styled.div<{ inverse?: boolean }>`
  ${text.regular};
  color: ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.5)' : color.mediumdark)};
`;

interface IntegrationProps extends ComponentProps<typeof Button> {
  image: string;
  index: number;
  color: string;
}

interface IntegrationsCarouselProps {
  inverse?: boolean;
  integrations: (IntegrationProps & { media: ReactNode })[];
  overflowLabel: string;
}

export const IntegrationsCarousel = ({
  inverse,
  integrations,
  overflowLabel,
  ...props
}: IntegrationsCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIntegration = integrations[activeIndex];
  const animation = useRef(null);
  const progress = useMotionValue(activeIndex);

  useEffect(() => {
    animation.current = animate(progress, activeIndex, {
      duration: 2,
      onComplete: () => {
        if (activeIndex === integrations.length - 1) {
          setActiveIndex(0);
        } else {
          setActiveIndex(activeIndex + 1);
        }
      },
    });

    return () => animation.current.stop();
  }, [activeIndex, integrations, progress]);

  return (
    <div {...props}>
      <Media>{activeIntegration.media}</Media>
      <IntegrationsWrapper>
        {integrations.map(({ media, name, image, ...integration }, index) => (
          <Integration
            inverse={inverse}
            key={name}
            active={name === activeIntegration.name}
            onClick={() => {
              setActiveIndex(index);
              if (animation.current.isAnimating()) {
                animation.current.stop();
              }
            }}
            {...integration}
          >
            <img src={image} alt={name} />
          </Integration>
        ))}
        <OverflowLabel inverse={inverse}>{overflowLabel}</OverflowLabel>
      </IntegrationsWrapper>
    </div>
  );
};
