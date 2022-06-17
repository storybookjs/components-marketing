import { styles } from '@storybook/design-system';
import { css } from '@storybook/theming';

const { typography } = styles;

const marketing = {
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

export default {
  ...styles,
  marketing,
};
