import React, { useRef, useEffect, FC } from 'react';
import { styled } from '@storybook/theming';
import { Formik, FormikValues } from 'formik';
import { useId } from '@floating-ui/react-dom-interactions';
import { Button, Input, styles } from '@storybook/design-system';
import { useMailingListForm } from './useMailingListForm';

const MailingListFormUIWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const EmailInput = styled(Input)`
  flex: 1;
  && input {
    border-top-left-radius: ${styles.spacing.borderRadius.small}px;
    border-bottom-left-radius: ${styles.spacing.borderRadius.small}px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

const SendButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: ${styles.spacing.borderRadius.small}px;
  border-bottom-right-radius: ${styles.spacing.borderRadius.small}px;
`;

interface MailingListFormUIProps {
  handleBlur: (e: React.ChangeEvent<any>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  isSubmitting?: boolean;
  value: string;
  placeholder?: string;
}

const MailingListFormUI: FC<MailingListFormUIProps> = ({
  handleBlur,
  handleChange,
  isSubmitting,
  value = '',
  placeholder = 'Get news emailed to you',
  ...rest
}) => {
  const id = useId();

  return (
    <MailingListFormUIWrapper {...rest}>
      <EmailInput
        id={id}
        icon="email"
        type="email"
        name="email"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        autoCapitalize="off"
        autoCorrect="off"
        label="Your email"
        hideLabel
      />

      <SendButton appearance="secondary" type="submit" isUnclickable={isSubmitting}>
        Subscribe
      </SendButton>
    </MailingListFormUIWrapper>
  );
};

const MailingListConfirm = styled.div`
  font-size: ${styles.typography.size.s2}px;
  background: ${styles.background.positive};
  line-height: 20px;
  padding: 10px;
  text-align: center;
  border-radius: ${styles.spacing.borderRadius.small}px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
`;

const FormWrapper = styled.form`
  max-width: 320px;
  position: relative;
`;

const validateForm = (values: FormikValues) => {
  if (!values.email) {
    return { email: 'Required' };
  }

  return {};
};

interface MailingListSignupProps {
  onSubscribe?: () => void;
  placeholder?: string;
  ctaText?: string;
}

export const MailingListSignup = ({ onSubscribe, ctaText, ...props }: MailingListSignupProps) => {
  const formRef = useRef(null);
  const [hasSubmitted, onSubmitForm] = useMailingListForm(onSubscribe);

  useEffect(() => {
    if (hasSubmitted && formRef.current) {
      const submitButtonEl = formRef.current.querySelector('[type="submit"]');
      if (submitButtonEl) {
        submitButtonEl.blur();
      }
    }
  }, [formRef, hasSubmitted]);

  return (
    <Formik initialValues={{ email: '' }} validate={validateForm} onSubmit={onSubmitForm}>
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <FormWrapper ref={formRef} onSubmit={handleSubmit}>
          <MailingListFormUI
            value={values.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isSubmitting={isSubmitting}
            {...props}
          />
          {hasSubmitted && (
            <MailingListConfirm role="alert">
              <b>
                <span role="img" aria-label="thumbs up">
                  👍
                </span>{' '}
                Thanks, you&rsquo;re all signed up!
              </b>
            </MailingListConfirm>
          )}
        </FormWrapper>
      )}
    </Formik>
  );
};
