import React, { Component } from 'react';
import { Field } from 'redux-form';

import { Form, FormField, Button, Container, Row, Col } from '@ui';
import { THEME_PREFIX } from 'src/constants';
import classNames from 'classnames';

const baseClass = `${THEME_PREFIX}-verify`;

type Props = {
  handleSubmit: Function,
  isVerifyInProgress: boolean,
  resetPasswordEmail: string,
  registerEmail: string,
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
};

class Verify extends Component<Props> {
  constructor(props) {
    super(props);
    const {
      requiredIntl,
      numberIntl,
      codeLenIntl,
      passwordIntl,
      resetPasswordEmail,
      registerEmail,
    } = props;

    this.resetPasswordEmail = resetPasswordEmail;
    this.registerEmail = registerEmail;

    this.validators = {
      requiredValidator: requiredIntl,
      numberValidator: numberIntl,
      codeLenValidator: codeLenIntl,
      passwordValidator: passwordIntl,
    };
  }

  handleSubmit = (data: any) => {
    const { verify } = this.props;
    const formData = data;
    let isForReset = false;
    if (this.resetPasswordEmail) {
      formData.email = this.resetPasswordEmail;
      isForReset = true;
      verify({ isForReset, formData });
    } else {
      formData.email = this.registerEmail;
      verify({ isForReset, formData });
    }
  };

  render() {
    const {
      MSGVerifyAccount,
      MSGEnterYourCode,
      MSG4DigitVerificationCode,
      MSGVerify,
      MSGDidntReceiveEmail,
      MSGResendCode,
      MSGNewPassword,
      isVerifyInProgress,
      handleSubmit,
    } = this.props;

    const {
      requiredValidator,
      numberValidator,
      codeLenValidator,
      passwordValidator,
    } = this.validators;

    const classes = classNames(baseClass, `${THEME_PREFIX}-layout--center`);

    return (
      <Container>
        <Row>
          <Col sm={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
            <div className={classes}>
              <h1>{MSGVerifyAccount}</h1>
              <p>{MSGEnterYourCode}</p>
              <Form onSubmit={handleSubmit(this.handleSubmit)}>
                <Field
                  type="number"
                  name="tokenValue"
                  component={FormField}
                  placeholder={MSG4DigitVerificationCode}
                  width="full"
                  validate={[
                    requiredValidator,
                    numberValidator,
                    codeLenValidator,
                  ]}
                />
                {this.resetPasswordEmail && (
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
                  action="submit"
                  type="primary"
                  disabled={isVerifyInProgress}
                  size="full"
                >
                  {MSGVerify}
                </Button>
              </Form>
              <span>{MSGDidntReceiveEmail}</span>{' '}
              <span className={`${THEME_PREFIX}-link`}>{MSGResendCode}</span>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Verify;
