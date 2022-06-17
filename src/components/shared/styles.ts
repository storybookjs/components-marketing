import { styles } from '@storybook/design-system';
import { css } from '@storybook/theming';

export const {
  background,
  color,
  spacing,
  typography,
  breakpoint,
  pageMargin,
  pageMargins,
  hoverEffect,
  zIndex,
} = styles;

export const breakpoints = [440, 600, 900];

// Typography styles
export const headers = {
  hero1: css({
    fontSize: typography.size.l3,
    fontWeight: typography.weight.bold,
  }),
  hero2: css({
    fontSize: typography.size.l2,
    fontWeight: typography.weight.bold,
  }),
  h1: css({
    fontSize: typography.size.l1,
    fontWeight: typography.weight.bold,
  }),
  h2: css({
    fontSize: typography.size.m3,
    fontWeight: typography.weight.bold,
  }),
  h3: css({
    fontSize: typography.size.m2,
    fontWeight: typography.weight.bold,
  }),
  h4: css({
    fontSize: typography.size.m1,
    fontWeight: typography.weight.bold,
  }),
  h5: css({
    fontSize: typography.size.s3,
    fontWeight: typography.weight.bold,
  }),
  h6: css({
    fontSize: typography.size.s2,
    fontWeight: typography.weight.bold,
  }),
};

export const subheading = {
  regular: css({
    fontSize: 13,
    fontWeight: typography.weight.extrabold,
    lineHeight: '18px',
    letterSpacing: '0.38em',
  }),
  small: css({
    fontSize: 11,
    fontWeight: typography.weight.extrabold,
    lineHeight: '15px',
    letterSpacing: '0.38em',
  }),
};

export const text = {
  storybookMediumBold: css({
    fontSize: 13,
    fontWeight: typography.weight.bold,
    lineHeight: '18px',
  }),
  storybookMedium: css({
    fontSize: 13,
    fontWeight: typography.weight.regular,
    lineHeight: '18px',
  }),
  largeBold: css({
    fontSize: typography.size.s3,
    fontWeight: typography.weight.bold,
    lineHeight: '24px',
  }),
  small: css({
    fontSize: typography.size.s1,
    fontWeight: typography.weight.regular,
    lineHeight: '18px',
  }),
  regularBold: css({
    fontSize: typography.size.s2,
    fontWeight: typography.weight.bold,
    lineHeight: '20px',
  }),
  smallBold: css({
    fontSize: typography.size.s1,
    fontWeight: typography.weight.bold,
    lineHeight: '18px',
  }),
  large: css({
    fontSize: typography.size.s3,
    fontWeight: typography.weight.regular,
    lineHeight: '24px',
  }),
  regular: css({
    fontSize: typography.size.s2,
    fontWeight: typography.weight.regular,
    lineHeight: '20px',
  }),
};

export const code = {
  regular: css({
    fontFamily: typography.type.code,
    fontSize: typography.size.s2,
    fontWeight: typography.weight.regular,
    lineHeight: '17px',
  }),

  small: css({
    fontFamily: typography.type.code,
    fontSize: typography.size.s1,
    fontWeight: typography.weight.regular,
    lineHeight: '14px',
  }),
};

export const marketing = {
  hero1: css({
    fontSize: 56,
    fontWeight: typography.weight.bold,
    lineHeight: '70px',
  }),
  hero2: css({
    fontSize: typography.size.l2, // 40
    fontWeight: typography.weight.bold,
    lineHeight: '48px',
  }),
  heading: css({
    fontSize: typography.size.l1, // 32
    fontWeight: typography.weight.bold,
    lineHeight: '40px',
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
