// @flow

import React from 'react';
import { Field } from 'redux-form';

import { Form, FormField, Button, Container, Row, Col } from '@ui';
import { THEME_PREFIX } from 'src/constants';

export type Props = {
  handleRegistration: Function,
  handleSubmit: Function,
  isRegistrationInProgress: boolean,
};

const baseClass = `${THEME_PREFIX}-register`;

const Register = ({
  isRegistrationInProgress,
  handleRegistration,
  handleSubmit,
}: Props) => (
  <Container className={baseClass}>
    <Row>
      <Col>
        <div className={baseClass}>
          <h1>Create an account</h1>

          <Form onSubmit={handleSubmit(handleRegistration)}>
            {/* TODO@martins add validatiors */}
            <Field
              placeholder="Email"
              type="email"
              component={FormField}
              name="username"
              width="full"
              required
            />
            <Field
              placeholder="Password"
              type="password"
              component={FormField}
              name="password"
              width="full"
              required
            />
            <Field
              placeholder="Repeat Password"
              type="password"
              component={FormField}
              name="repeatPassword"
              width="full"
              required
            />
            <Field
              placeholder="Region"
              type="text"
              component={FormField}
              name="region"
              width="full"
              required
            />
            <Field
              placeholder="City"
              type="text"
              component={FormField}
              name="city"
              width="full"
              required
            />
            <Field
              placeholder="Nickname (Optional)"
              type="text"
              component={FormField}
              name="nickname"
              width="full"
            />

            <Button
              size="full"
              action="submit"
              type="primary"
              disabled={isRegistrationInProgress}
            >
              {isRegistrationInProgress
                ? 'Registration in progress'
                : 'Continue'}
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Register;
