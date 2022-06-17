import React from 'react';
import { styled } from '@storybook/theming';
import { marketing } from './components/shared/styles';

export default {
  title: 'Typography/Styles',
};

const MarketingBase = styled.p<{ variant: keyof typeof marketing }>(
  { marginBottom: 20 },
  (props) => marketing[props.variant]
);
export const Code = () => (
  <>
    <MarketingBase variant="hero1">Marketing / Hero 1</MarketingBase>
    <MarketingBase variant="hero2">Marketing / Hero 2</MarketingBase>
    <MarketingBase variant="heading">Marketing / Heading</MarketingBase>
    <MarketingBase variant="subheading">Marketing / Subheading</MarketingBase>
    <MarketingBase variant="textLarge">Marketing / Text / Large</MarketingBase>
    <MarketingBase variant="textLargeBold">Marketing / Text / Large Bold</MarketingBase>
    <MarketingBase variant="textSmall">Marketing / Text / Small</MarketingBase>
  </>
);
