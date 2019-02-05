// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';

import Header from '@partials/Header';
import { THEME_PREFIX } from 'src/constants';
import { Button, Form, FormField, Loader, Notification, Anchor } from '@ui';

export type Props = {
  MSGEditProfile: string,
  MSGEmail: string,
  MSGName: string,
  MSGRegion: string,
  MSGCity: string,
  MSGSave: string,
  MSGAddress: string,
  MSGLinkToAddress: string,
  requiredIntl: string,
  emailIntl: string,
  alphanumericIntl: string,
  regions: [],
  initialValues: Object,
  pristine: boolean,
  updateProfileMessage: string,
  updateProfileInProgress: boolean,
  hasUpdateFailed: boolean,
  fetchProfileInProgress: boolean,
  fetchProfileData: Function,
  clearProfileState: Function,
  handleSubmit: Function,
  handleEditProfile: Function,
};

const baseClass = `${THEME_PREFIX}-edit-profile`;

class EditProfile extends Component<Props> {
  constructor(props: Props) {
    super(props);

    const { requiredIntl, emailIntl, alphanumericIntl } = props;

    this.validators = {
      requiredValidator: requiredIntl,
      emailValidator: emailIntl,
      alphanumericValidator: alphanumericIntl,
    };
  }

  componentDidMount() {
    const { fetchProfileData } = this.props;
    fetchProfileData();
  }

  componentWillUnmount() {
    const { clearProfileState } = this.props;
    clearProfileState();
  }

  defaultRegionOption = {
    text: 'Select',
    value: '',
  };

  validators: Object;

  render() {
    const {
      handleSubmit,
      handleEditProfile,
      MSGEditProfile,
      MSGEmail,
      MSGName,
      MSGCity,
      MSGRegion,
      MSGSave,
      MSGAddress,
      MSGLinkToAddress,
      regions,
      initialValues,
      pristine,
      updateProfileInProgress,
      hasUpdateFailed,
      fetchProfileInProgress,
      updateProfileMessage,
    } = this.props;

    const {
      requiredValidator,
      emailValidator,
      alphanumericValidator,
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

    let regionSelected = 'Select';
    if (initialValues) {
      regionSelected = initialValues.region;
    }

    return (
      <div className={baseClass}>
        <Header action="menu" title={MSGEditProfile} />
        {fetchProfileInProgress && <Loader />}
        {!fetchProfileInProgress && (
          <Form onSubmit={handleSubmit(handleEditProfile)}>
            {!updateProfileInProgress && updateProfileMessage && (
              <Notification
                size="full"
                timeout={5000}
                type={hasUpdateFailed ? 'error' : 'success'}
              >
                {updateProfileMessage}
              </Notification>
            )}

            <Field
              placeholder={MSGEmail}
              type="email"
              component={FormField}
              name="email"
              width="full"
              disabled
              validate={[requiredValidator, emailValidator]}
            />
            <Field
              placeholder={MSGAddress}
              type="text"
              component={FormField}
              name="addressHash"
              width="full"
            />
            {initialValues && initialValues.addressHash && (
              <Anchor
                className={`${baseClass}__address-link`}
                href={`https://chainz.cryptoid.info/enrg/address.dws?${
                  initialValues.addressHash
                }`}
                target="_blank"
              >
                {MSGLinkToAddress}
              </Anchor>
            )}
            <div className={`${baseClass}__clear`} />
            <Field
              placeholder={MSGName}
              type="text"
              component={FormField}
              name="name"
              width="full"
              validate={[alphanumericValidator]}
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
              placeholder={MSGRegion}
              type="select"
              component={FormField}
              name="region"
              width="full"
              options={regionOptions}
              selected={regionSelected}
              validate={[requiredValidator]}
            />

            <Button
              type="primary"
              size="large"
              width="full"
              action="submit"
              busy={updateProfileInProgress}
              disabled={pristine}
            >
              {MSGSave}
            </Button>
          </Form>
        )}
      </div>
    );
  }
}

export default EditProfile;
