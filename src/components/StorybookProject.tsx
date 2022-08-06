import React from 'react';
import { styled } from '@storybook/theming';
import { BrowserChrome, BrowserChromeProps } from './BrowserChrome';
import { text, color } from './shared/styles';

interface StorybookProjectProps extends BrowserChromeProps {
  logo: string;
  name: string;
}

const Wrapper = styled.div``;

const Attribution = styled.div<{ inverse?: boolean }>`
  ${text.regularBold};
  display: flex;
  align-items: center;
  margin-top: 12px;
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
`;
const Logo = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

export const StorybookProject = ({
  logo,
  name,
  inverse,
  address,
  showControls,
  image,
  https,
}: StorybookProjectProps) => {
  const browserProps = { address, showControls, image, https };

  return (
    <Wrapper>
      <BrowserChrome inverse={inverse} {...browserProps} />
      <Attribution inverse={inverse}>
        <Logo src={logo} alt="" />
        {name}
      </Attribution>
    </Wrapper>
  );
};
