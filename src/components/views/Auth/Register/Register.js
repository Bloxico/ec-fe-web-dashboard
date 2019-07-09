// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';
import classNames from 'classnames';

import Header from '@partials/Header';
import { Form, FormField, Button, Anchor } from '@ui';
import {
  THEME_PREFIX,
  PARTNER_RING_RING_LINK,
  PARTNER_GOG_PLATFORM_LINK,
} from 'src/constants';

export type Props = {
  handleSubmit: Function,
  registerInProgress: boolean,
  MSGCreateAnAccount: string,
  MSGEmail: string,
  MSGPassword: string,
  MSGRepeatPassword: string,
  MSGRegion: string,
  MSGCity: string,
  MSGNicknameOptional: string,
  MSGContinue: string,
  MSGEmptyRegistration: string,
  MSGSelectCountry: string,
  MSGRingRing: string,
  MSGGOGPlatform: string,
  requiredIntl: Function,
  alphanumericIntl: Function,
  passwordIntl: Function,
  emailIntl: Function,
  matchIntl: Function,
  regions: [],
  fetchRegions: Function,
  register: Function,
  partnerId: string,
  pristine: boolean,
  location: any,
  registerFailed: boolean,
};

const baseClass = `${THEME_PREFIX}-register`;
const classes = classNames(baseClass);

class Register extends Component<Props> {
  constructor(props: Props) {
    super(props);
    const {
      MSGSelectCountry,
      requiredIntl,
      alphanumericIntl,
      passwordIntl,
      emailIntl,
      matchIntl,
      location,
    } = props;

    this.passwordField = React.createRef();
    this.externalId = new URLSearchParams(location.search).get('userId');
    this.defaultRegionOption = {
      text: MSGSelectCountry,
      value: '',
    };

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

  defaultRegionOption: any;
  validators: any;
  externalId: any;
  passwordField: any;

  handleRegistration = (data: any) => {
    const { register, partnerId } = this.props;
    const isExternal = Boolean(partnerId || this.externalId);
    register({
      isExternal,
      registerData: { ...data, partnerUserId: partnerId || this.externalId },
    });
  };

  render() {
    const {
      MSGCreateAnAccount,
      handleSubmit,
      MSGEmail,
      MSGRepeatPassword,
      MSGPassword,
      MSGRegion,
      MSGCity,
      MSGNicknameOptional,
      MSGGOGPlatform,
      registerInProgress,
      MSGContinue,
      MSGEmptyRegistration,
      MSGRingRing,
      regions,
      partnerId,
      pristine,
      registerFailed,
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
    if (partnerId || this.externalId)
      return (
        <div className={classes}>
          <Header title={MSGCreateAnAccount} />

          <Form
            onSubmit={handleSubmit(this.handleRegistration)}
            className={`${baseClass}__content`}
          >
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
              name="name"
              width="full"
              validate={[alphanumericValidator]}
            />

            <Button
              type="primary"
              size="large"
              width="full"
              action="submit"
              disabled={registerInProgress || (pristine && registerFailed)}
            >
              {MSGContinue}
            </Button>
          </Form>
        </div>
      );
    return (
      <div className={baseClass}>
        <Header title={MSGCreateAnAccount} />
        <div className={`${baseClass}__content`}>
          {MSGEmptyRegistration}
          <hr />
          <Anchor
            className={`${baseClass}__link`}
            target="_blank"
            href={PARTNER_GOG_PLATFORM_LINK}
          >
            {MSGGOGPlatform}
          </Anchor>
          <div className={`${baseClass}__separator`} />
          <Anchor target="_blank" href={PARTNER_RING_RING_LINK}>
            {MSGRingRing}
          </Anchor>
        </div>
      </div>
    );
  }
}

export default Register;
