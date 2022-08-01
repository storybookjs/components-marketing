import React from 'react';
import { styled } from '@storybook/theming';
import { BrowserChrome, BrowserChromeProps } from './BrowserChrome';
import { text } from './shared/styles';

interface StorybookProjectProps extends BrowserChromeProps {
  logo: string;
  name: string;
}

const Wrapper = styled.div``;

const Attribution = styled.div`
  ${text.regularBold};
  display: flex;
  align-items: center;
  margin-left: 3%;
  margin-top: -8px;
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
  expand,
  https,
}: StorybookProjectProps) => {
  const browserProps = { address, showControls, image, expand, https };

  return (
    <Wrapper>
      <BrowserChrome inverse={inverse} {...browserProps} />
      <Attribution>
        <Logo src={logo} alt="" />
        {name}
      </Attribution>
    </Wrapper>
  );
};
