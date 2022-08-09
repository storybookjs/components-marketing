import React, { useEffect, useRef, useState } from 'react';
import { styled, css } from '@storybook/theming';
import { Button, Icon } from '@storybook/design-system';
import { motion, AnimatePresence } from 'framer-motion';
import { spacing, color, breakpoints, typography, pageMargins, pageMargin } from './shared/styles';

type Alignment = 'left' | 'right';

const Wrapper = styled.div`
  ${pageMargins};
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 3rem;
  padding-bottom: 4rem;

  @media (min-width: ${breakpoints[2]}px) {
    display: grid;
    justify-content: center;
    align-items: flex-start;
    grid-template-columns: repeat(2, minmax(auto, 50%));
    grid-template-rows: minmax(50vh, max-content);
    gap: 60px;
  }

  @media (min-width: ${breakpoints[3]}px) {
    grid-template-columns: repeat(2, minmax(auto, 500px));
  }
`;

const Title = styled.div<{ inverse?: boolean }>`
  font-weight: ${typography.weight.extrabold};
  font-size: ${typography.size.s3}px;
  line-height: 24px;
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
`;
const Description = styled.div<{ inverse?: boolean }>`
  font-size: ${typography.size.s3};
  line-height: 24px;
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
`;
const IconWrapper = styled.div`
  svg {
    display: block;
    margin-right: 20px;
    height: 40px;
    width: 40px;
    flex: none;
  }
`;

const Feature = styled.button<{ inverse?: boolean }>`
  border: 1px solid ${(props) => (props.inverse ? 'rgba(255 255 255 / 10%)' : color.border)};
  background-color: ${(props) => (props.inverse ? color.midnight : color.lightest)};
  border-radius: ${spacing.borderRadius.small}px;
  text-align: left;
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: center;
  cursor: pointer;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  outline: 0;

  &:hover,
  &:focus {
    border-color: ${color.secondary};
    transform: translate3d(0, -3px, 0);
    box-shadow: ${(props) => (props.inverse ? 'rgba(0 0 0 / 50%)' : 'rgba(0 0 0 8%)')} 0 3px 10px 0;
  }

  &:active,
  &[aria-pressed='true'] {
    border-color: ${color.secondary};
    transform: translate3d(0, 0, 0);
  }
`;

const FeatureList = styled.ul<{ alignment?: Alignment }>`
  order: ${(props) => (props.alignment === 'left' ? 2 : 1)};
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  margin: 0;
  width: 100%;

  li {
    list-style: none;
    margin: 0;
  }
`;

const FeatureMedia = styled.div<{ bgColor: string }>`
  border-radius: ${spacing.borderRadius.default}px;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.bgColor};

  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  a {
    background-color: rgba(0 0 0 / 50%);
    position: absolute;
    top: 20px;
    right: 20px;

    &:hover,
    &:focus,
    &:active {
      background-color: rgba(0 0 0 / 50%);
    }

    svg {
      margin: 0;
    }
  }
`;

const FeatureMediaLarge = styled(FeatureMedia)<{ alignment?: Alignment; lockUpHeight?: number }>`
  order: ${(props) => (props.alignment === 'left' ? 1 : 2)};
  display: none;
  height: 100%;
  overflow: hidden;

  @media (min-width: ${breakpoints[2]}px) {
    display: block;
    ${(props) =>
      props.alignment === 'left'
        ? css`
            margin-left: calc(-${pageMargin}vw - 20px);
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          `
        : css`
            margin-right: calc(-${pageMargin}vw - 20px);
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          `};
  }

  @media (min-width: ${breakpoints[3]}px) {
    ${(props) =>
      props.alignment === 'left'
        ? css`
            margin-left: calc(-${pageMargin * 2}vw - 20px);
          `
        : css`
            margin-right: calc(-${pageMargin * 2}vw - 20px);
          `};
    max-height: ${(props) => props.lockUpHeight}px;
  }

  @media (min-width: 1416px) {
    border-radius: ${spacing.borderRadius.default}px;
  }
`;
FeatureMediaLarge.defaultProps = {
  lockUpHeight: 640,
};

const FeatureMediaSmall = styled(FeatureMedia)`
  display: block;
  aspect-ratio: 1/1;

  @media (min-width: ${breakpoints[2]}px) {
    display: none;
  }
`;

const MediaWrapper = styled.div`
  display: block;

  @media (min-width: ${breakpoints[2]}px) {
    display: none;
  }
`;

const BackdropVideo = styled.video`
  position: absolute;
  top: 0;
  width: 100%;
  transform: scale(1.25);
  filter: blur(10px);
  user-select: none;
`;
const Video = styled.video`
  position: relative;
`;

const MotionDivMobile = styled(motion.div)`
  overflow: hidden;
`;
const MotionDivDesktop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

interface FeatureItem {
  media: string;
  poster: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: { label: string; href: string; LinkWrapper?: React.ComponentType<any> };
}

interface IllustratedFeatureListProps {
  inverse?: boolean;
  features: FeatureItem[];
  bgColor: string;
  alignment?: Alignment;
  lockUpHeight?: number;
}

const variants = {
  enter: (direction: 'up' | 'down') => {
    return { y: direction === 'up' ? '-5%' : '5%', opacity: 0 };
  },
  center: { y: '0%', opacity: 1 },
  exit: (direction: 'up' | 'down') => {
    return {
      zIndex: 0,
      y: direction === 'up' ? '5%' : '-5%',
      opacity: 0,
    };
  },
};

export const IllustratedFeatureList = ({
  inverse,
  features,
  bgColor,
  alignment = 'left',
  lockUpHeight,
  ...props
}: IllustratedFeatureListProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];
  const [direction, setDirection] = useState('down');

  return (
    <Wrapper {...props}>
      {features.map((feature) => (
        <link key={feature.title} rel="preload" as="image" href={feature.poster} />
      ))}
      {/* Desktop video */}
      <FeatureMediaLarge alignment={alignment} bgColor={bgColor} lockUpHeight={lockUpHeight}>
        <AnimatePresence initial={false}>
          <MotionDivDesktop
            key={activeFeature.title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            transition={{ duration: 0.4 }}
          >
            <BackdropVideo src={activeFeature.media} playsInline preload="auto" />
            <Video
              src={activeFeature.media}
              autoPlay
              loop
              playsInline
              preload="auto"
              poster={activeFeature.poster}
            />
          </MotionDivDesktop>
        </AnimatePresence>
        <Button
          size="small"
          appearance="inverse"
          href={activeFeature.link.href}
          ButtonWrapper={activeFeature.link.LinkWrapper}
          isLink
        >
          {activeFeature.link.label} <Icon icon="arrowright" />
        </Button>
      </FeatureMediaLarge>
      <FeatureList alignment={alignment}>
        {features.map((feature, index) => (
          <li key={feature.title}>
            <Feature
              aria-pressed={index === activeIndex ? 'true' : 'false'}
              inverse={inverse}
              onClick={() => {
                setActiveIndex(index);
                setDirection(index > activeIndex ? 'down' : 'up');
              }}
            >
              <IconWrapper>{feature.icon}</IconWrapper>
              <div>
                <Title inverse={inverse}>{feature.title}</Title>
                <Description inverse={inverse}>{feature.description}</Description>
              </div>
            </Feature>
            {/* mobile video */}
            <MediaWrapper>
              <AnimatePresence initial={false}>
                {index === activeIndex && (
                  <MotionDivMobile
                    layout
                    key={feature.title}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto', marginTop: 20 },
                      collapsed: { opacity: 0, height: 0, marginTop: 0 },
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <FeatureMediaSmall bgColor={bgColor}>
                      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                      <video
                        src={feature.media}
                        autoPlay
                        loop
                        playsInline
                        preload="auto"
                        poster={activeFeature.poster}
                      />
                      <Button
                        size="small"
                        appearance="inverse"
                        href={feature.link.href}
                        ButtonWrapper={feature.link.LinkWrapper}
                        isLink
                      >
                        {feature.link.label} <Icon icon="arrowright" />
                      </Button>
                    </FeatureMediaSmall>
                  </MotionDivMobile>
                )}
              </AnimatePresence>
            </MediaWrapper>
          </li>
        ))}
      </FeatureList>
    </Wrapper>
  );
};
