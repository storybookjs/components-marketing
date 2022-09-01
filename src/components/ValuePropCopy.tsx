import React from 'react';
import { styled } from '@storybook/theming';
import { color, typography, breakpoints, marketing, text } from './shared/styles';

const Wrapper = styled.div`
  @media (min-width: ${breakpoints[1]}px) {
    max-width: 320px;
  }
`;

const Heading = styled.h3<{ inverse?: boolean }>`
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
  margin: 0;

  font-size: ${typography.size.m1}px;
  font-weight: ${typography.weight.bold};
  line-height: 28px;

  @media (min-width: ${breakpoints[2]}px) {
    max-width: 320px;
    ${marketing.subheading};
  }
`;

const Description = styled.p<{ inverse?: boolean }>`
  ${marketing.textLarge};
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
  margin-top: 20px;
  margin-bottom: 0px;
`;

const Links = styled.div`
  ${text.largeBold};
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`;

const Meta = styled.div`
  margin-top: 20px;
`;

interface ValuePropCopyProps {
  heading: React.ReactNode;
  description: React.ReactNode;
  links?: React.ReactNode;
  meta?: React.ReactNode;
  inverse?: boolean;
}

export const ValuePropCopy = ({
  inverse,
  heading,
  description,
  links,
  meta,
  ...props
}: ValuePropCopyProps) => (
  <Wrapper {...props}>
    <Heading inverse={inverse}>{heading}</Heading>
    <Description inverse={inverse}>{description}</Description>
    {links && <Links>{links}</Links>}
    {meta && <Meta>{meta}</Meta>}
  </Wrapper>
);
