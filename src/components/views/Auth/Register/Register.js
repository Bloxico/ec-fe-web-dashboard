// @flow

import React from 'react';
import { Field } from 'redux-form';

import { Form, FormField, Button, Container, Row, Col } from '@ui';
import { THEME_PREFIX } from 'src/constants';

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
};

const baseClass = `${THEME_PREFIX}-register`;

const Register = ({
  isRegistrationInProgress,
  handleRegistration,
  handleSubmit,
  MSGCreateAnAccount,
  MSGEmail,
  MSGPassword,
  MSGRepeatPassword,
  MSGRegion,
  MSGCity,
  MSGNicknameOptional,
  MSGContinue,
}: Props) => (
  <Container className={baseClass}>
    <Row>
      <Col>
        <div className={baseClass}>
          <h1>{MSGCreateAnAccount}</h1>

          <Form onSubmit={handleSubmit(handleRegistration)}>
            {/* TODO@martins add validatiors */}
            <Field
              placeholder={MSGEmail}
              type="email"
              component={FormField}
              name="email"
              width="full"
              required
            />
            <Field
              placeholder={MSGPassword}
              type="password"
              component={FormField}
              name="password"
              width="full"
              required
            />
            <Field
              placeholder={MSGRepeatPassword}
              type="password"
              component={FormField}
              name="matchPassword"
              width="full"
              required
            />
            <Field
              placeholder={MSGRegion}
              type="text"
              component={FormField}
              name="regionName"
              width="full"
              required
            />

            <Field
              placeholder={MSGCity}
              type="text"
              component={FormField}
              name="city"
              width="full"
              required
            />
            <Field
              placeholder={MSGNicknameOptional}
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
              {MSGContinue}
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Register;
