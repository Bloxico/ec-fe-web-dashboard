// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';
import classNames from 'classnames';

import Header from '@partials/Header';
import { Anchor, Form, FormField, Button } from '@ui';
import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-verify`;
const classes = classNames(baseClass);

type Props = {
  handleSubmit: Function,
  verifyInProgress: boolean,
  MSGVerifyAccount: string,
  MSG4DigitVerificationCode: string,
  MSGVerify: string,
  MSGEnterYourCode: string,
  MSGDidntReceiveEmail: string,
  MSGResendCode: string,
  MSGNewPassword: string,
  requiredIntl: Function,
  numberIntl: Function,
  codeLenIntl: Function,
  passwordIntl: Function,
  verify: Function,
  match: Object,
};

class Verify extends Component<Props> {
  constructor(props) {
    super(props);
    const { requiredIntl, numberIntl, codeLenIntl, passwordIntl } = props;
    this.validators = {
      requiredValidator: requiredIntl,
      numberValidator: numberIntl,
      codeLenValidator: codeLenIntl,
      passwordValidator: passwordIntl,
    };
  }

  handleSubmit = (data: any) => {
    const {
      verify,
      match: {
        params: { email, reset },
      },
    } = this.props;

    const isForReset = Boolean(reset);

    verify({ isForReset, data: { ...data, email } });
  };

  render() {
    const {
      MSGVerifyAccount,
      MSGEnterYourCode,
      MSGVerify,
      MSG4DigitVerificationCode,
      MSGDidntReceiveEmail,
      MSGResendCode,
      MSGNewPassword,
      verifyInProgress,
      handleSubmit,
      match: {
        params: { reset },
      },
    } = this.props;

    const {
      requiredValidator,
      numberValidator,
      codeLenValidator,
      passwordValidator,
    } = this.validators;

    return (
      <div className={classes}>
        <Header title={MSGVerifyAccount} />

        <p>{MSGEnterYourCode}</p>

        <Form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field
            type="number"
            maxLength={4}
            name="tokenValue"
            component={FormField}
            width="full"
            placeholder={MSG4DigitVerificationCode}
            validate={[requiredValidator, numberValidator, codeLenValidator]}
            className={`${baseClass}__token`}
          />
          {reset && (
            <Field
              type="password"
              name="newPassword"
              component={FormField}
              placeholder={MSGNewPassword}
              width="full"
              validate={[requiredValidator, passwordValidator]}
            />
          )}
          <Button
            disabled={verifyInProgress}
            action="submit"
            type="primary"
            width="full"
            size="large"
          >
            {MSGVerify}
          </Button>
        </Form>

        <footer className={`${baseClass}__footer`}>
          {MSGDidntReceiveEmail} <Anchor href="#">{MSGResendCode}</Anchor>
        </footer>
      </div>
    );
  }
}

export default Verify;
