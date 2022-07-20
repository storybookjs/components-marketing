import { useState } from 'react';

let hasSubmitted = false;

export function useMailingListForm() {
  const [submitStatus, setSubmitStatus] = useState(hasSubmitted);

  return [submitStatus, setSubmitStatus];
}

export const UseMailingListFormDecorator = (story, context) => {
  hasSubmitted = context.parameters.hasSubmitted || false;
  return story();
};
