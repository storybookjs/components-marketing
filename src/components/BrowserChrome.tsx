import React from 'react';
import { useId } from '@floating-ui/react-dom-interactions';
import { styled } from '@storybook/theming';

interface AddressBarProps {
  inverse?: boolean;
  address?: string;
  clipId?: string;
  https?: boolean;
}

export interface BrowserChromeProps {
  inverse?: boolean;
  address?: string;
  showControls?: boolean;
  image: string;
  expand: 'width' | 'height';
  https?: boolean;
}

const SVG = styled.svg`
  display: block;
`;

const AddressBar = ({ inverse, address, clipId, https = true }: AddressBarProps) => (
  <g>
    <rect
      width="194"
      height="20"
      x="542.5"
      y="26"
      fill={inverse ? '#fff' : '#000'}
      fillOpacity="0.1"
      rx="5"
    />
    {https ? (
      <g clipPath={`url(#${clipId})`}>
        <g fill={inverse ? '#fff' : '#333'}>
          <path d="M598.215 36.716a.715.715 0 01-.357.619v1.167a.357.357 0 01-.715 0v-1.167a.715.715 0 111.072-.619z" />
          <path
            fillRule="evenodd"
            d="M594.643 33.86a2.858 2.858 0 015.715 0v.713h1.071c.197 0 .357.16.357.358v5.714c0 .197-.16.357-.357.357h-7.857a.357.357 0 01-.357-.357V34.93c0-.197.16-.357.357-.357h1.071v-.714zm5 .713v-.714a2.142 2.142 0 10-4.285 0v.714h4.285zm1.429.715h-7.143v5h7.143v-5z"
            clipRule="evenodd"
          />
        </g>
      </g>
    ) : (
      <g fill={inverse ? '#fff' : '#333'}>
        <path d="M597.5 34.2149C597.697 34.2149 597.857 34.3748 597.857 34.572V37.072C597.857 37.2693 597.697 37.4292 597.5 37.4292C597.303 37.4292 597.143 37.2693 597.143 37.072V34.572C597.143 34.3748 597.303 34.2149 597.5 34.2149Z" />
        <path d="M598.036 38.5006C598.036 38.7965 597.796 39.0363 597.5 39.0363C597.204 39.0363 596.964 38.7965 596.964 38.5006C596.964 38.2047 597.204 37.9649 597.5 37.9649C597.796 37.9649 598.036 38.2047 598.036 38.5006Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M597.648 31.7467C597.686 31.7642 597.722 31.7886 597.753 31.8195C597.776 31.8425 597.795 31.8683 597.811 31.896L602.45 39.7475C602.551 39.9173 602.494 40.1363 602.325 40.2367C602.266 40.2715 602.201 40.2875 602.137 40.2863H592.863C592.83 40.2869 592.796 40.2828 592.763 40.2738C592.72 40.2621 592.681 40.2427 592.646 40.2172C592.604 40.1869 592.571 40.1488 592.547 40.1062C592.522 40.0634 592.507 40.015 592.502 39.9634C592.498 39.9208 592.501 39.8773 592.513 39.835C592.522 39.8019 592.535 39.7708 592.553 39.7423L597.189 31.896C597.205 31.8683 597.224 31.8425 597.247 31.8195C597.278 31.7886 597.314 31.7642 597.353 31.7467C597.4 31.7251 597.45 31.7148 597.5 31.7148C597.55 31.7148 597.6 31.7251 597.648 31.7467ZM597.5 32.7741L593.483 39.572H601.517L597.5 32.7741Z"
        />
      </g>
    )}
    <text
      x="611.884"
      y="40.108"
      fill={inverse ? '#fff' : '#000'}
      fontSize={12}
      fontFamily='"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    >
      {address}
    </text>
  </g>
);

const Controls = ({
  inverse,
  clip1Id,
  clip2Id,
}: {
  inverse?: boolean;
  clip1Id: string;
  clip2Id: string;
}) => (
  <g>
    <g clipPath={`url(#${clip1Id})`}>
      <path
        fill={inverse ? '#fff' : '#333'}
        d="M123.589 31.84a.43.43 0 010 .607l-3.126 3.125h10.108a.429.429 0 110 .857h-10.108l3.126 3.126a.43.43 0 01-.606.606l-3.857-3.857a.427.427 0 010-.607l3.857-3.857a.428.428 0 01.606 0z"
      />
    </g>
    <g clipPath={`url(#${clip2Id})`}>
      <path
        fill={inverse ? '#fff' : '#333'}
        d="M148.411 31.84a.428.428 0 01.606 0l3.857 3.857a.427.427 0 010 .607l-3.857 3.857a.428.428 0 11-.606-.606l3.126-3.126h-10.108a.429.429 0 110-.857h10.108l-3.126-3.126a.43.43 0 010-.606z"
      />
    </g>
    <g>
      <path
        fill={inverse ? '#fff' : '#333'}
        d="M169.078 30.428h-.079a5.571 5.571 0 105.494 6.5.428.428 0 10-.845-.142 4.709 4.709 0 01-4.649 3.928 4.714 4.714 0 010-9.43h.005a4.713 4.713 0 014.195 2.572h-1.628a.429.429 0 100 .857H174.142a.429.429 0 00.429-.428v-2.572a.429.429 0 00-.858 0v1.316a5.565 5.565 0 00-4.635-2.6z"
      />
    </g>
  </g>
);

export const BrowserChrome = ({
  inverse,
  showControls,
  address,
  image,
  expand = 'height',
  https,
}: BrowserChromeProps) => {
  const clip1Id = useId();
  const clip2Id = useId();
  const clip3Id = useId();
  const patternId = useId();
  const filterId = useId();
  const imageProps = expand === 'width' ? { width: '1198' } : { height: '797' };

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 1280 920"
    >
      <g>
        <g filter={`url(#${filterId})`}>
          <rect
            width="1200"
            height="830"
            x="40"
            y="20"
            fill={inverse ? '#1D1F24' : '#fff'}
            fillOpacity="0.8"
            rx="8"
          />
          <rect
            width="1199"
            height="829"
            x="40.5"
            y="20.5"
            stroke={inverse ? '#fff' : '#000'}
            strokeOpacity="0.1"
            rx="7.5"
          />
        </g>
        <path
          fill={`url(#${patternId})`}
          d="M41 52h1198v790c0 3.866-3.13 7-7 7H48a7 7 0 01-7-7V52z"
        />
        {showControls && <Controls inverse={inverse} clip1Id={clip1Id} clip2Id={clip2Id} />}
        <g>
          <circle cx="58" cy="36" r="5" fill="#FC521F" />
          <circle cx="76" cy="36" r="5" fill="#FFAE00" />
          <circle cx="94" cy="36" r="5" fill="#66BF3C" />
        </g>
        <path fill={inverse ? '#fff' : '#000'} fillOpacity="0.1" d="M41 51H1239V52H41z" />
        {showControls && (
          <AddressBar address={address} inverse={inverse} clipId={clip3Id} https={https} />
        )}
      </g>
      <defs>
        <filter
          id={filterId}
          width="1280"
          height="920"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4745_74943" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend in2="effect1_dropShadow_4745_74943" result="effect2_dropShadow_4745_74943" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="20" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend in2="effect2_dropShadow_4745_74943" result="effect3_dropShadow_4745_74943" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="40" />
          <feGaussianBlur stdDeviation="15" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend in2="effect3_dropShadow_4745_74943" result="effect4_dropShadow_4745_74943" />
          <feBlend in="SourceGraphic" in2="effect4_dropShadow_4745_74943" result="shape" />
        </filter>
        <pattern id={patternId} x="0" y="0" width="1" height="1">
          <image {...imageProps} href={image} />
        </pattern>
        <clipPath id={clip1Id}>
          <path fill="#fff" d="M0 0H12V12H0z" transform="translate(119 30)" />
        </clipPath>
        <clipPath id={clip2Id}>
          <path fill="#fff" d="M0 0H12V12H0z" transform="translate(141 30)" />
        </clipPath>
        <clipPath id={clip3Id}>
          <path fill="#fff" d="M0 0H10V10H0z" transform="translate(592.5 31)" />
        </clipPath>
      </defs>
    </SVG>
  );
};
