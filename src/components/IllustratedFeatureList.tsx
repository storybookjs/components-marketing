import React, { useState } from 'react';
import { styled } from '@storybook/theming';
import { Button, Icon } from '@storybook/design-system';
import { motion, AnimatePresence } from 'framer-motion';
import { spacing, color, breakpoints, typography, pageMargins, pageMargin } from './shared/styles';

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
    grid-template-columns: repeat(2, minmax(auto, 500px));
    grid-template-rows: minmax(50vh, max-content);
    gap: 60px;
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

const FeatureList = styled.ul`
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

const FeatureMediaLarge = styled(FeatureMedia)`
  display: none;
  height: 100%;

  @media (min-width: ${breakpoints[2]}px) {
    display: block;
    margin-left: calc(-${pageMargin}vw - 20px);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media (min-width: ${breakpoints[3]}px) {
    margin-left: calc(-${pageMargin * 2}vw - 20px);
    max-height: 640px;
  }

  @media (min-width: 1416px) {
    border-top-left-radius: ${spacing.borderRadius.default}px;
    border-bottom-left-radius: ${spacing.borderRadius.default}px;
  }
`;

const FeatureMediaSmall = styled(FeatureMedia)`
  display: block;
  aspect-ratio: 1/1;

  @media (min-width: ${breakpoints[2]}px) {
    display: none;
  }
`;

interface FeatureItem {
  media: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: { label: string; href: string; LinkWrapper?: React.ComponentType<any> };
}

interface IllustratedFeatureListProps {
  inverse?: boolean;
  features: FeatureItem[];
  bgColor: string;
  alignment?: 'left' | 'right';
}

export const IllustratedFeatureList = ({
  inverse,
  features,
  bgColor,
  alignment = 'left',
  ...props
}: IllustratedFeatureListProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <Wrapper {...props}>
      {/* Desktop video */}
      <FeatureMediaLarge bgColor={bgColor}>
        {activeFeature.media}
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
      <FeatureList>
        {features.map((feature, index) => (
          <li key={feature.title}>
            <Feature
              aria-pressed={index === activeIndex ? 'true' : 'false'}
              inverse={inverse}
              onClick={() => setActiveIndex(index)}
            >
              <IconWrapper>{feature.icon}</IconWrapper>
              <div>
                <Title inverse={inverse}>{feature.title}</Title>
                <Description inverse={inverse}>{feature.description}</Description>
              </div>
            </Feature>
            {/* mobile video */}
            <AnimatePresence initial={false}>
              {index === activeIndex && (
                <motion.div
                  layout
                  key={feature.title}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  style={{ overflow: 'hidden' }}
                  variants={{
                    open: { opacity: 1, height: 'auto', marginTop: 20 },
                    collapsed: { opacity: 0, height: 0, marginTop: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <FeatureMediaSmall bgColor={bgColor}>
                    {feature.media}
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
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </FeatureList>
    </Wrapper>
  );
};
