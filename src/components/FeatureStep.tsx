import React, { forwardRef } from 'react';
import { styled } from '@storybook/theming';
import { Icon, IconType } from '@storybook/design-system';
import { color, marketing, text, typography } from './shared/styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
  margin-top: 3rem;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
`;

const Guide = styled.div<{ inverse?: boolean }>`
  background: ${(props) =>
    props.inverse
      ? 'linear-gradient(rgba(255 255 255 / 0%), rgba(255 255 255 / 10%))'
      : 'linear-gradient(rgba(0 0 0 / 0%), rgba(0 0 0 / 10%))'};
  width: 2px;
  height: 106px;
  margin-bottom: 6px;
`;

const StepIconWrapper = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  padding: 10px;
  margin-bottom: 1.5rem;
  background-color: ${color.green};
  color: ${color.lightest};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${color.lightest};
    width: 24px;
    height: 24px;
  }
`;

export const StepIcon = forwardRef<HTMLDivElement, { icon: IconType }>(
  ({ icon = 'check', ...props }, ref) => (
    <StepIconWrapper ref={ref} {...props}>
      <Icon icon={icon} />
    </StepIconWrapper>
  )
);
StepIcon.displayName = 'StepIcon';

const Heading = styled.h3<{ inverse?: boolean }>`
  font-size: ${typography.size.m2}px;
  font-weight: ${typography.weight.bold};
  line-height: 28px;
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
  text-align: center;
  margin-bottom: 1rem;
`;

const Description = styled.div<{ inverse?: boolean }>`
  ${marketing.textLarge};
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
  letter-spacing: -0.4px;
  text-align: center;
  margin-bottom: 1.25rem;
`;

const LinkWrapper = styled.div`
  ${text.largeBold};
`;

interface FeatureStepProps {
  inverse?: boolean;
  icon?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  link: React.ReactNode;
}

export const FeatureStep = ({
  icon = <StepIcon icon="check" />,
  inverse,
  title,
  description,
  link,
  ...props
}: FeatureStepProps) => (
  <Wrapper {...props}>
    <Guide inverse={inverse} />
    {icon}
    <Heading inverse={inverse}>{title}</Heading>
    <Description inverse={inverse}>{description}</Description>
    <LinkWrapper>{link}</LinkWrapper>
  </Wrapper>
);
