import React from 'react';
import { GetStartedCTA } from './GetStartedCTA';

export default {
  title: 'GetStartedCTA',
  component: GetStartedCTA,
};

export const Basic = (args) => <GetStartedCTA inverse={false} />;

export const Inverse = (args) => <GetStartedCTA inverse />;
