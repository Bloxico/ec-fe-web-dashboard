import React, { Component } from 'react';
import { Field } from 'redux-form';
import classNames from "classnames";

import { Form, FormField, Button, Container, Row, Col } from '@ui';
import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-resetPassword`;

type Props = {
  handleSubmit: Function,
  handleResetPassword: Function,
  isResetPasswordInProgress: boolean,
  MSGResetPassword: string,
  MSGEmail: string,
  MSGContinue: string,
  MSGYourENRGEmail: string,
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
    } = this.props;

    const { requiredValidator, emailValidator } = this.validators;

      const classes = classNames(baseClass,`${THEME_PREFIX}-layout--center`);

    return (
      <Container className={classes}>
        <Row>
          <Col>
            <h1>{MSGResetPassword}</h1>
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
                size="full"
              >
                {MSGContinue}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ResetPassword;
