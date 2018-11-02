import React, { Component } from 'react';
import { Field } from 'redux-form';
import classNames from 'classnames';

import Header from '@partials/Header';
import { Form, FormField, Button } from '@ui';
import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-verify`;

type Props = {
  handleSubmit: Function,
  handleVerify: Function,
  isVerifyInProgress: boolean,
  MSGVerifyAccount: string,
  MSGVerify: string,
  MSGEnterYourCode: string,
  MSGDidntReceiveEmail: string,
  MSGResendCode: string,
  requiredIntl: Function,
  numberIntl: Function,
  codeLenIntl: Function,
};

class Verify extends Component<Props> {
  constructor(props) {
    super(props);
    const { requiredIntl, numberIntl, codeLenIntl } = props;
    this.validators = {
      requiredValidator: requiredIntl,
      numberValidator: numberIntl,
      codeLenValidator: codeLenIntl,
    };
  }

  render() {
    const {
      MSGVerifyAccount,
      MSGEnterYourCode,
      MSGVerify,
      MSGDidntReceiveEmail,
      MSGResendCode,
      isVerifyInProgress,
      handleSubmit,
      handleVerify,
    } = this.props;

    const {
      requiredValidator,
      numberValidator,
      codeLenValidator,
    } = this.validators;

    const classes = classNames(baseClass);

    return (
      <div className={classes}>
        <Header title={MSGVerifyAccount} />

        <p>{MSGEnterYourCode}</p>
        <Form onSubmit={handleSubmit(handleVerify)}>
          <Field
            type="number"
            name="code"
            component={FormField}
            width="full"
            validate={[
              requiredValidator,
              numberValidator,
              codeLenValidator,
            ]}
          />
          <Button
            disabled={isVerifyInProgress}
            action="submit"
            type="primary"
            size="large"
            width="full"
          >
            {MSGVerify}
          </Button>
        </Form>

        <footer className={`${baseClass}__footer`}>
          {MSGDidntReceiveEmail}{' '}
          <Button type="link">{MSGResendCode}</Button>
        </footer>
      </div>
    );
  }
}

export default Verify;
