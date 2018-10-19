import React, { Component } from 'react';
import { Field } from 'redux-form';

import { Form, FormField, Button, Container, Row, Col } from '@ui';
import { THEME_PREFIX } from 'src/constants';
import { number, required, codeLen } from 'src/utilities/validators';

const baseClass = `${THEME_PREFIX}-verify`;

type Props = {
  handleSubmit: Function,
  handleVerify: Function,
  isVerifyInProgress: boolean,
  MSGVerifyAccount: string,
  MSG4DigitVerificationCode: string,
  MSGVerify: string,
  MSGEnterYourCode: string,
  MSGDidntRecieveEmail: string,
  MSGResendCode: string,
  intl: Object,
};

class Verify extends Component<Props> {
  constructor(props) {
    super(props);
    const { intl } = props;
    this.validators = {
      required: required({ intl }),
      number: number({ intl }),
      codeLen: codeLen({ intl }),
    };
  }

  render() {
    return (
      <Container className={baseClass}>
        <Row>
          <Col>
            <h1>{this.props.MSGVerifyAccount}</h1>
            <p>{this.props.MSGEnterYourCode}</p>
            <Form onSubmit={this.props.handleSubmit(this.props.handleVerify)}>
              <Field
                type="number"
                name="code"
                component={FormField}
                placeholder={this.props.MSG4DigitVerificationCode}
                width="full"
                validate={[
                  this.validators.required,
                  this.validators.number,
                  this.validators.codeLen,
                ]}
              />
              <Button
                action="submit"
                type="primary"
                disabled={this.props.isVerifyInProgress}
                size="full"
              >
                {this.props.MSGVerify}
              </Button>
            </Form>
            <span>{this.props.MSGDidntRecieveEmail}</span>{' '}
            <span className={`${THEME_PREFIX}-link`}>
              {this.props.MSGResendCode}
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Verify;
