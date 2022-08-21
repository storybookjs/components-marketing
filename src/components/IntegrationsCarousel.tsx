import React, { useState, ComponentProps, ReactNode, useEffect, useRef } from 'react';
import { styled, css } from '@storybook/theming';
import { Button } from '@storybook/design-system';
import { AnimatePresence, useInView, motion } from 'framer-motion';
import { color, spacing, text } from './shared/styles';

const IntegrationsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const MediaWrapper = styled.div<{ aspectRatio: number }>`
  position: relative;
  height: 0;
  padding-bottom: ${(props) => 100 / props.aspectRatio}%;
`;

const Media = styled(motion.figure)`
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  aspectRatio?: number;
}

const mediaVariants = {
  initial: (direction: 1 | -1) => ({ x: direction === 1 ? '10%' : '-10%', opacity: 0 }),
  animate: { x: 0, opacity: 1 },
  exit: (direction: 1 | -1) => ({ x: direction === 1 ? '-10%' : '10%', opacity: 0 }),
};

export const IntegrationsCarousel = ({
  inverse,
  integrations,
  overflowLabel,
  animationDisabled = false,
  aspectRatio = 1,
  ...props
}: IntegrationsCarouselProps) => {
  const [animate, setAnimate] = useState(!animationDisabled);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
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
      <MediaWrapper aspectRatio={aspectRatio}>
        <AnimatePresence initial={false} custom={direction}>
          <Media
            key={activeIntegration.name}
            custom={direction}
            variants={mediaVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.6, 0.2, 0.1, 0.9] }}
          >
            {activeIntegration.media}
          </Media>
        </AnimatePresence>
      </MediaWrapper>
      <IntegrationsWrapper>
        {integrations.map(({ media, name, image, ...integration }, index) => (
          <Integration
            inverse={inverse}
            key={name}
            active={name === activeIntegration.name}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
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
