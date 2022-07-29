import * as React from 'react';
import { styled } from '@storybook/theming';

interface NormalizeAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Typically an `img` or `svg` */
  children: React.ReactNode;
  /** Natural height of child, in pixels */
  height: number;
  /** In square pixels */
  idealArea: number;
  /** Natural width of child, in pixels */
  width: number;
}

/**
 * See:
 *  https://nicksherman.com/size-by-area/ &
 *  https://piperhaywood.com/images-consistent-surface-area/
 */
export const NormalizeArea = styled('div', {
  shouldForwardProp: (prop) => !['height', 'idealArea', 'width'].includes(prop),
})<NormalizeAreaProps>`
  align-items: center;
  display: flex;
  justify-content: center;

  & > * {
    --width: ${(props) => props.width};
    --height: ${(props) => props.height};
    --ideal-area: ${(props) => props.idealArea};
    --area: calc(var(--width) * var(--height));
    --ratio: calc(var(--ideal-area) / var(--area));
    --pass01: calc(calc(var(--ratio) + calc(var(--ratio) / var(--ratio))) / 2);
    --pass02: calc(calc(var(--pass01) + calc(var(--ratio) / var(--pass01))) / 2);
    --pass03: calc(calc(var(--pass02) + calc(var(--ratio) / var(--pass02))) / 2);
    --pass04: calc(calc(var(--pass03) + calc(var(--ratio) / var(--pass03))) / 2);
    --pass05: calc(calc(var(--pass04) + calc(var(--ratio) / var(--pass04))) / 2);
    --pass06: calc(calc(var(--pass05) + calc(var(--ratio) / var(--pass05))) / 2);
    --pass07: calc(calc(var(--pass06) + calc(var(--ratio) / var(--pass06))) / 2);
    --pass08: calc(calc(var(--pass07) + calc(var(--ratio) / var(--pass07))) / 2);
    width: calc(var(--width) * var(--pass08) / 2 * 1px);
  }
`;
