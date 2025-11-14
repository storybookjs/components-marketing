import React from 'react';
import { styled } from '@storybook/theming';
import { Avatar } from '@storybook/design-system';
import { color, typography, pageMargins, breakpoints, marketing } from './shared/styles';

const Wrapper = styled.div`
  ${pageMargins};
  margin: 0;
`;

const Inner = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (min-width: ${breakpoints[1]}px) {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }
`;

const Quote = styled.blockquote<{ inverse?: boolean }>`
  ${marketing.textLarge};

  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${typography.size.m1}px;
    line-height: 32px;
  }
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 2rem;
  max-width: 590px;
  text-align: center;
`;

const Cite = styled.cite`
  display: flex;
  align-items: stretch;
  font-style: normal;
`;

const Meta = styled.div`
  margin-left: 12px;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div<{ inverse?: boolean }>`
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
`;

const JobTitle = styled.div<{ inverse?: boolean }>`
  font-size: ${typography.size.s1}px;
  color: ${(props) => (props.inverse ? color.medium : color.mediumdark)};
`;

const Logo = styled.div<{ inverse?: boolean }>`
  border-left: 1px solid
    ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')};
  margin-left: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;

  @media (min-width: ${breakpoints[1]}px) {
    margin-left: 50px;
    padding-left: 40px;
  }

  img {
    display: inline-block;
    width: auto;
    max-height: 30px;
  }
`;

interface TestimonialProps {
  text: React.ReactNode;
  avatarUrl: string;
  name: string;
  jobTitle: string;
  logo: string;
  inverse?: boolean;
  companyName?: string;
}

export const Testimonial = ({
  inverse,
  text,
  avatarUrl,
  name,
  jobTitle,
  logo,
  companyName,
  ...props
}: TestimonialProps) => (
  <Wrapper {...props}>
    <Inner>
      <Quote inverse={inverse}>{text}</Quote>
      <Cite>
        <Author>
          <Avatar size="large" username={name} src={avatarUrl} />
          <Meta>
            <Name inverse={inverse}>{name}</Name>
            <JobTitle inverse={inverse}>{jobTitle}</JobTitle>
          </Meta>
        </Author>
        <Logo inverse={inverse}>
          <img src={logo} alt={companyName} loading="lazy" />
        </Logo>
      </Cite>
    </Inner>
  </Wrapper>
);
