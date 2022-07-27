import React, { useState } from 'react';
import { styled } from '@storybook/theming';
import { Button, Icon } from '@storybook/design-system';
import { spacing, color, breakpoints, text, typography, pageMargins } from './shared/styles';

const Wrapper = styled.div`
  ${pageMargins};
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 3rem;
  margin-bottom: 4rem;

  @media (min-width: ${breakpoints[2]}px) {
    flex-direction: row;
    align-items: flex-start;
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
    box-shadow: ${(props) => (props.inverse ? 'rgba(255 255 255 / 8%)' : 'rgba(0 0 0 8%)')} 0 3px
      10px 0;
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

  flex: 1;
  max-width: 500px;
  min-width: 0;

  li {
    list-style: none;
    margin: 0;
  }
`;

const FeatureMedia = styled.div`
  flex: 1;
  max-width: 500px;
  min-width: 0;
  border-radius: ${spacing.borderRadius.default}px;
  position: relative;
  overflow: hidden;

  margin-bottom: 20px;

  @media (min-width: ${breakpoints[2]}px) {
    margin-bottom: 0;
    margin-left: -100px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media (min-width: ${breakpoints[3]}px) {
    margin-left: 0;
    border-top-left-radius: ${spacing.borderRadius.default}px;
    border-bottom-left-radius: ${spacing.borderRadius.default}px;
  }

  video {
    display: block;
    width: 100% !important;
    height: auto !important;
  }

  a {
    color: ${color.lightest};
    background-color: rgba(0 0 0 / 10%);
    position: absolute;
    top: 20px;
    right: 20px;

    &:hover,
    &:focus,
    &:active {
      background-color: rgba(0 0 0 / 10%);
    }
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
  icon?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  features: FeatureItem[];
}

export const IllustratedFeatureList = ({
  inverse,
  title,
  description,
  features,
  ...props
}: IllustratedFeatureListProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <Wrapper {...props}>
      <FeatureMedia>
        {activeFeature.media}
        <Button
          size="small"
          appearance="inversePrimary"
          href={activeFeature.link.href}
          ButtonWrapper={activeFeature.link.LinkWrapper}
          isLink
        >
          {activeFeature.link.label} <Icon icon="arrowright" />
        </Button>
      </FeatureMedia>
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
          </li>
        ))}
      </FeatureList>
    </Wrapper>
  );
};
