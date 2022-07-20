import React from 'react';
import { MailingListSignup } from './MailingListSignup';
// eslint-disable-next-line jest/no-mocks-import
import { UseMailingListFormDecorator } from '../../__mocks__/useMailingListForm.mock';

export default {
  component: MailingListSignup,
  title: 'MailingList/Signup',
  decorators: [UseMailingListFormDecorator],
};

export const Default = () => <MailingListSignup />;

export const HasSubmitted = () => <MailingListSignup />;

HasSubmitted.parameters = {
  hasSubmitted: true,
};
