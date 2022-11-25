import { styles } from '@storybook/design-system';
import { css } from '@storybook/theming';

export const {
  background,
  spacing,
  typography,
  breakpoint,
  pageMargin,
  pageMargins,
  hoverEffect,
  zIndex,
  headers,
  subheading,
  text,
  code,
} = styles as any;

export const color = {
  midnight: '#171C23',
  ...styles.color,
};

export const breakpoints = [440, 600, 900, 1200];

export const shadows = {
  tooltip: css`
    box-shadow: 0px 0px 15px ${color.tr5}, 0px 1px 2px ${color.tr10};
  `,
};

export const marketing = {
  hero1: css({
    fontSize: 56,
    fontWeight: typography.weight.bold,
    lineHeight: '70px',
    letterSpacing: '-0.01em',
  }),
  hero2: css({
    fontSize: typography.size.l2, // 40
    fontWeight: typography.weight.bold,
    lineHeight: '48px',
    letterSpacing: '-0.01em',
  }),
  heading: css({
    fontSize: typography.size.l1, // 32
    fontWeight: typography.weight.bold,
    lineHeight: '40px',
    letterSpacing: '-0.01em',
  }),
  subheading: css({
    fontSize: typography.size.m2, // 24
    fontWeight: typography.weight.bold,
    lineHeight: '32px',
  }),
  textLarge: css({
    fontSize: typography.size.s3, // 16
    fontWeight: typography.weight.regular,
    lineHeight: '28px',
  }),
  textLargeBold: css({
    fontSize: typography.size.s3, // 16
    fontWeight: typography.weight.bold,
    lineHeight: '28px',
  }),
  textSmall: css({
    fontSize: typography.size.s2, // 14
    fontWeight: typography.weight.regular,
    lineHeight: '20px',
  }),
};
