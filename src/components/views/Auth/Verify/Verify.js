import React, { Component } from 'react';
import { Field } from 'redux-form';

import { Form, FormField, Button, Container, Row, Col } from '@ui';
import { THEME_PREFIX } from 'src/constants';
import classNames from 'classnames';

const baseClass = `${THEME_PREFIX}-verify`;

type Props = {
  handleSubmit: Function,
  handleVerify: Function,
  isVerifyInProgress: boolean,
  MSGVerifyAccount: string,
  MSG4DigitVerificationCode: string,
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
      MSG4DigitVerificationCode,
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

    const classes = classNames(baseClass, `${THEME_PREFIX}-layout--center`);

    return (
      <Container className={classes}>
        <Row>
          <Col sm={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
            <div className={classes}>
              <h1>{MSGVerifyAccount}</h1>
              <p>{MSGEnterYourCode}</p>
              <Form onSubmit={handleSubmit(handleVerify)}>
                <Field
                  type="number"
                  name="code"
                  component={FormField}
                  placeholder={MSG4DigitVerificationCode}
                  width="full"
                  validate={[
                    requiredValidator,
                    numberValidator,
                    codeLenValidator,
                  ]}
                />
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
