import React, { useState, ComponentProps, ReactNode, useEffect, useRef } from 'react';
import { styled, css } from '@storybook/theming';
import { Button } from '@storybook/design-system';
import { useInView, motion } from 'framer-motion';
import { color, spacing, text } from './shared/styles';

const IntegrationsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const Media = styled(motion.figure)`
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
  animationDisabled?: boolean;
}

export const IntegrationsCarousel = ({
  inverse,
  integrations,
  overflowLabel,
  animationDisabled = false,
  ...props
}: IntegrationsCarouselProps) => {
  const [animate, setAnimate] = useState(!animationDisabled);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIntegration = integrations[activeIndex];
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!animate || !isInView) {
      return () => {};
    }

    const id = setTimeout(() => {
      const nextIndex = activeIndex === integrations.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }, 4000);

    return () => {
      clearTimeout(id);
    };
  }, [activeIndex, integrations, animate, isInView]);

  return (
    <div ref={ref} {...props}>
      <Media>{activeIntegration.media}</Media>
      <IntegrationsWrapper>
        {integrations.map(({ media, name, image, ...integration }, index) => (
          <Integration
            inverse={inverse}
            key={name}
            active={name === activeIntegration.name}
            onClick={() => {
              setActiveIndex(index);
              setAnimate(false);
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
