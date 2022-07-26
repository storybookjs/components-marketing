import React, { FC } from 'react';
import { styled } from '@storybook/theming';
import { color, text } from '../shared/styles';

export const Text = styled.div<{ inverse?: boolean }>`
  ${text.regular};
  white-space: nowrap;
  color: ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.5)' : color.dark)};
`;

export const MailingListSubscriberCount: FC<{ count: number; inverse?: boolean }> = ({
  inverse,
  count,
}) => <Text inverse={inverse}>{numberWithCommas(count)} developers and counting</Text>;

function numberWithCommas(value: number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
