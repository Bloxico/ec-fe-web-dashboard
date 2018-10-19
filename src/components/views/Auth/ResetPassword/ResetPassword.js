import React, { Component } from 'react';
import { Field } from 'redux-form';

import { Form, FormField, Button, Container, Row, Col } from '@ui';
import { THEME_PREFIX } from 'src/constants';
import { email, required } from 'src/utilities/validators';

const baseClass = `${THEME_PREFIX}-resetPassword`;

type Props = {
  handleSubmit: Function,
  handleResetPassword: Function,
  isResetPasswordInProgress: boolean,
  MSGResetPassword: string,
  MSGEmail: string,
  MSGContinue: string,
  MSGYourENRGEmail: string,
  intl: Object,
};

class ResetPassword extends Component<Props> {
  constructor(props) {
    super(props);
    const { intl } = props;
    this.validators = {
      required: required({ intl }),
      email: email({ intl }),
    };
  }

  render() {
    return (
      <Container className={baseClass}>
        <Row>
          <Col>
            <h1>{this.props.MSGResetPassword}</h1>
            <p>{this.props.MSGYourENRGEmail}</p>
            <Form
              onSubmit={this.props.handleSubmit(this.props.handleResetPassword)}
            >
              <Field
                type="email"
                name="email"
                component={FormField}
                placeholder={this.props.MSGEmail}
                width="full"
                validate={[this.validators.required, this.validators.email]}
              />
              <Button
                action="submit"
                type="primary"
                disabled={this.props.isResetPasswordInProgress}
                size="full"
              >
                {this.props.MSGContinue}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ResetPassword;
