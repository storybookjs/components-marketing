import React from 'react';
import { useId } from '@floating-ui/react-dom-interactions';
import { Icon } from '@storybook/design-system';
import { styled } from '@storybook/theming';
import { color } from './shared/styles';

const Frame = styled.div<{ inverse: boolean }>`
  display: block;
  background: ${(props) => (props.inverse ? 'rgb(29 31 36 / 80%)' : '#efefef')};
  border: 1px solid
    ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 10px 20px 0px rgba(0, 0, 0, 0.1),
    0px 20px 40px 0px rgba(0, 0, 0, 0.05), 0px 40px 30px 0px rgba(0, 0, 0, 0.05);
`;

const AddressBar = styled.div<{ inverse: boolean }>`
  border-bottom: 1px solid
    ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')};
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  position: relative;
`;

const Address = styled.div<{ inverse: boolean }>`
  background-color: ${(props) =>
    props.inverse ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
  border-radius: 2.5px;
  font-size: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 2px 25px;
  line-height: 1;

  svg {
    color: ${(props) => (props.inverse ? color.lightest : color.darkest)};
    display: block;
    width: 5px;
    height: 5px;
    margin-right: 3px;
  }
`;

const Controls = ({ inverse, showControls }: { inverse?: boolean; showControls?: boolean }) => {
  const clip1Id = useId();
  const clip2Id = useId();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="6" fill="none" viewBox="0 0 122 12">
      {showControls && (
        <g>
          <g clipPath={`url(#${clip1Id})`}>
            <path
              fill={inverse ? '#fff' : '#333'}
              d="M70.589 1.84a.429.429 0 010 .606l-3.126 3.126h10.108a.429.429 0 110 .857H67.463l3.126 3.126a.429.429 0 01-.606.606l-3.858-3.857a.429.429 0 010-.606l3.858-3.858a.429.429 0 01.606 0z"
            />
          </g>
          <g clipPath={`url(#${clip2Id})`}>
            <path
              fill={inverse ? '#fff' : '#333'}
              d="M95.411 1.84a.429.429 0 01.606 0l3.858 3.858a.428.428 0 010 .606l-3.858 3.857a.429.429 0 11-.606-.606l3.126-3.126H88.429a.429.429 0 110-.857h10.108L95.41 2.446a.429.429 0 010-.606z"
            />
          </g>
          <path
            fill={inverse ? '#fff' : '#333'}
            d="M116.078.428h-.079a5.571 5.571 0 105.494 6.5.428.428 0 10-.845-.143 4.709 4.709 0 01-4.649 3.928 4.714 4.714 0 010-9.428h.005a4.713 4.713 0 014.195 2.571h-1.628a.429.429 0 100 .857H121.142a.429.429 0 00.429-.428V1.713a.429.429 0 00-.858 0V3.03a5.565 5.565 0 00-4.635-2.6z"
          />
        </g>
      )}
      <circle cx="5" cy="6" r="5" fill="#FC521F" />
      <circle cx="23" cy="6" r="5" fill="#FFAE00" />
      <circle cx="41" cy="6" r="5" fill="#66BF3C" />
      <defs>
        <clipPath id={clip1Id}>
          <path fill={inverse ? '#333' : '#fff'} d="M0 0H12V12H0z" transform="translate(66)" />
        </clipPath>
        <clipPath id={clip2Id}>
          <path fill={inverse ? '#333' : '#fff'} d="M0 0H12V12H0z" transform="translate(88)" />
        </clipPath>
      </defs>
    </svg>
  );
};

interface ToolBarProps {
  inverse?: boolean;
  address?: string;
  showControls?: boolean;
  https?: boolean;
}

const ToolBar = ({ showControls, inverse, address, https = true }: ToolBarProps) => (
  <AddressBar inverse={inverse}>
    <Controls inverse={inverse} showControls={showControls} />
    {showControls && (
      <Address inverse={inverse}>
        {https && <Icon icon="lock" />}
        {address}
      </Address>
    )}
  </AddressBar>
);

const Website = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export interface BrowserChromeProps {
  inverse?: boolean;
  address?: string;
  showControls?: boolean;
  image: { width: number; height: number; src: string };
  https?: boolean;
}

export const BrowserChrome = ({
  inverse,
  showControls,
  address,
  image,
  https = true,
}: BrowserChromeProps) => {
  return (
    <Frame inverse={inverse}>
      <ToolBar inverse={inverse} address={address} https={https} showControls={showControls} />
      <Website src={image.src} alt="" width={image.width} height={image.height} loading="lazy" />
    </Frame>
  );
};
