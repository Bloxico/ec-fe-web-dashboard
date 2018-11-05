import React, { Component } from 'react';
import { Field } from 'redux-form';
import classNames from 'classnames';

import Header from '@partials/Header';
import { Form, FormField, Button } from '@ui';
import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-reset-password`;
const classes = classNames(baseClass);

type Props = {
  handleSubmit: Function,
  handleResetPassword: Function,
  isResetPasswordInProgress: boolean,
  MSGResetPassword: string,
  MSGEmail: string,
  MSGContinue: string,
  MSGYourENRGEmail: string,
  requiredIntl: Function,
  emailIntl: Function,
  history: any,
};

class ResetPassword extends Component<Props> {
  constructor(props) {
    super(props);
    const { requiredIntl, emailIntl } = props;
    this.validators = {
      requiredValidator: requiredIntl,
      emailValidator: emailIntl,
    };
  }

  render() {
    const {
      MSGResetPassword,
      MSGYourENRGEmail,
      handleSubmit,
      handleResetPassword,
      MSGEmail,
      isResetPasswordInProgress,
      MSGContinue,
      history,
    } = this.props;

    const { requiredValidator, emailValidator } = this.validators;

    return (
      <div className={classes}>
        <Header handleBack={history.goBack} title={MSGResetPassword} />

        <p>{MSGYourENRGEmail}</p>
        <Form onSubmit={handleSubmit(handleResetPassword)}>
          <Field
            type="email"
            name="email"
            component={FormField}
            placeholder={MSGEmail}
            width="full"
            validate={[requiredValidator, emailValidator]}
          />
          <Button
            action="submit"
            type="primary"
            disabled={isResetPasswordInProgress}
            width="full"
            size="large"
          >
            {MSGContinue}
          </Button>
        </Form>
      </div>
    );
  }
}

export default ResetPassword;
