// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';
import classNames from 'classnames';

import Header from '@partials/Header';
import { Form, FormField, Button } from '@ui';
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
  requiredIntl: Function,
  alphanumericIntl: Function,
  passwordIntl: Function,
  emailIntl: Function,
  matchIntl: Function,
  regions: [],
  fetchRegions: Function,
};

const baseClass = `${THEME_PREFIX}-register`;
const classes = classNames(baseClass);

class Register extends Component<Props> {
  constructor(props) {
    super(props);
    const {
      requiredIntl,
      alphanumericIntl,
      passwordIntl,
      emailIntl,
      matchIntl,
    } = props;

    this.passwordField = React.createRef();

    this.validators = {
      requiredValidator: requiredIntl,
      alphanumericValidator: alphanumericIntl,
      passwordValidator: passwordIntl,
      emailValidator: emailIntl,
      matchValidator: value =>
        matchIntl(value, this.passwordField.current.value),
    };
  }

  componentDidMount() {
    const { fetchRegions } = this.props;

    fetchRegions();
  }

  defaultRegionOption = {
    text: 'Select',
    value: '',
  };

  render() {
    const {
      MSGCreateAnAccount,
      handleSubmit,
      handleRegistration,
      MSGEmail,
      MSGRepeatPassword,
      MSGPassword,
      MSGRegion,
      MSGCity,
      MSGNicknameOptional,
      isRegistrationInProgress,
      MSGContinue,
      regions,
    } = this.props;

    const {
      requiredValidator,
      emailValidator,
      alphanumericValidator,
      passwordValidator,
      matchValidator,
    } = this.validators;

    let regionOptions = [this.defaultRegionOption];

    if (regions) {
      regionOptions = [
        ...regionOptions,
        ...regions.map(({ regionName }) => ({
          value: regionName,
          text: regionName,
        })),
      ];
    }

    return (
      <div className={classes}>
        <Header title={MSGCreateAnAccount} />

        <Form onSubmit={handleSubmit(handleRegistration)}>
          <Field
            placeholder={MSGEmail}
            type="email"
            component={FormField}
            name="email"
            width="full"
            validate={[requiredValidator, emailValidator]}
          />
          <Field
            placeholder={MSGPassword}
            type="password"
            component={FormField}
            name="password"
            width="full"
            validate={[requiredValidator, passwordValidator]}
            ref={this.passwordField}
          />
          <Field
            placeholder={MSGRepeatPassword}
            type="password"
            component={FormField}
            name="matchPassword"
            width="full"
            validate={[requiredValidator, passwordValidator, matchValidator]}
          />
          <Field
            placeholder={MSGRegion}
            type="select"
            component={FormField}
            name="regionName"
            width="full"
            options={regionOptions}
            selected="Select"
            validate={[requiredValidator]}
          />
          <Field
            placeholder={MSGCity}
            type="text"
            component={FormField}
            name="city"
            width="full"
            validate={[requiredValidator]}
          />
          <Field
            placeholder={MSGNicknameOptional}
            type="text"
            component={FormField}
            name="nickname"
            width="full"
            validate={[alphanumericValidator]}
          />

          <Button
            type="primary"
            size="large"
            width="full"
            action="submit"
            disabled={isRegistrationInProgress}
          >
            {MSGContinue}
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
