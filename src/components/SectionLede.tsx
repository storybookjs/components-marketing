import React from 'react';
import { styled } from '@storybook/theming';
import { color, marketing, breakpoints, pageMargins } from './shared/styles';

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${breakpoints[2]}px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ContentContainer = styled.div`
  ${pageMargins};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SectionHeading = styled.h2<{ inverse?: boolean }>`
  ${marketing.hero2};
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
  flex: 1 1 auto;
  min-width: 0;
  max-width: 540px;
  text-align: center;

  @media (min-width: ${breakpoints[2]}px) {
    ${marketing.hero1};
    padding-right: 60px;
    text-align: left;
  }
`;

const LedeParagraph = styled.p<{ inverse?: boolean }>`
  ${marketing.textLarge};
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
  margin-top: 0.875rem;
  margin-bottom: 0;
  text-align: center;

  @media (min-width: ${breakpoints[2]}px) {
    text-align: left;
  }
`;

const LedeRight = styled.div`
  flex: 1 1 auto;
  max-width: 480px;
  min-width: 0;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints[2]}px) {
    justify-content: flex-start;
  }

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

interface SectionLedeProps {
  heading: string;
  copy: string;
  actions?: React.ReactNode;
  meta?: React.ReactNode;
  inverse?: boolean;
}

export const SectionLede = ({
  meta,
  inverse,
  heading,
  copy,
  actions,
  ...props
}: SectionLedeProps) => (
  <ContentContainer {...props}>
    <ContentWrapper>
      <SectionHeading inverse={inverse}>{heading}</SectionHeading>
      <LedeRight>
        <LedeParagraph inverse={inverse}>{copy}</LedeParagraph>
        {actions && <Actions>{actions}</Actions>}
        {meta}
      </LedeRight>
    </ContentWrapper>
  </ContentContainer>
);
