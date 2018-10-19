// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';

import { Form, FormField, Button, Container, Row, Col } from '@ui';
import { THEME_PREFIX } from 'src/constants';
import {
  alphanumeric,
  email,
  password,
  required,
  match,
} from 'src/utilities/validators';

export type Props = {
  handleRegistration: Function,
  handleSubmit: Function,
  isRegistrationInProgress: boolean,
  MSGCreateAnAccount: string,
  MSGEmail: string,
  MSGPassword: string,
  MSGRepeatPassword: string,
  MSGRegion: string,
  MSGCity: string,
  MSGNicknameOptional: string,
  MSGContinue: string,
  intl: Object,
};

const baseClass = `${THEME_PREFIX}-register`;

class Register extends Component<Props> {
  constructor(props) {
    super(props);
    const { intl } = props;

    const [
      requiredIntl,
      alphanumericIntl,
      passwordIntl,
      emailIntl,
      matchIntl,
    ] = [required, alphanumeric, password, email, match].map(func =>
      func({ intl }),
    );

    this.passwordField = React.createRef();

    this.validators = {
      required: requiredIntl,
      alphanumeric: alphanumericIntl,
      password: passwordIntl,
      email: emailIntl,
      match: value => matchIntl(value, this.passwordField.current.value),
    };
  }

  render() {
    return (
      <Container className={baseClass}>
        <Row>
          <Col>
            <h1>{this.props.MSGCreateAnAccount}</h1>

            <Form
              onSubmit={this.props.handleSubmit(this.props.handleRegistration)}
            >
              {/* TODO@martins add validatiors */}
              <Field
                placeholder={this.props.MSGEmail}
                type="email"
                component={FormField}
                name="email"
                width="full"
                validate={[this.validators.required, this.validators.email]}
              />
              <Field
                placeholder={this.props.MSGPassword}
                type="password"
                component={FormField}
                name="password"
                width="full"
                validate={[this.validators.required, this.validators.password]}
                ref={this.passwordField}
              />
              <Field
                placeholder={this.props.MSGRepeatPassword}
                type="password"
                component={FormField}
                name="matchPassword"
                width="full"
                toMatch="12345678"
                validate={[
                  this.validators.required,
                  this.validators.password,
                  this.validators.match,
                ]}
              />
              <Field
                placeholder={this.props.MSGRegion}
                type="text"
                component={FormField}
                name="regionName"
                width="full"
                validate={[this.validators.required]}
              />

              <Field
                placeholder={this.props.MSGCity}
                type="text"
                component={FormField}
                name="city"
                width="full"
                validate={[this.validators.required]}
              />
              <Field
                placeholder={this.props.MSGNicknameOptional}
                type="text"
                component={FormField}
                name="nickname"
                width="full"
                validate={[this.validators.alphanumeric]}
              />

              <Button
                size="full"
                action="submit"
                type="primary"
                disabled={this.props.isRegistrationInProgress}
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

export default Register;
