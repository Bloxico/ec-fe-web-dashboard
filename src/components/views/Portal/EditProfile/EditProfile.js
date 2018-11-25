// @flow

import React, { Component } from 'react';
import { Field } from 'redux-form';
import classNames from 'classnames';

import Header from '@partials/Header';
import { THEME_PREFIX } from 'src/constants';
import { Form, FormField, Button, Loader } from '@ui';

export type Props = {
  handleSubmit: Function,
  handleEditProfile: Function,
  MSGEditProfile: string,
  MSGEmail: string,
  MSGName: string,
  MSGRegion: string,
  MSGCity: string,
  MSGSave: string,
  requiredIntl: string,
  emailIntl: string,
  alphanumericIntl: string,
  regions: [],
  initialValues: Object,
  pristine: boolean,
  updateProfileInProgress: boolean,
  fetchProfileInProgress: boolean,
  fetchProfileData: Function,
};

const baseClass = `${THEME_PREFIX}-edit-profile`;
const classes = classNames(baseClass);

class EditProfile extends Component<Props> {
  constructor(props) {
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

  defaultRegionOption = {
    text: 'Select',
    value: '',
  };

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
      regions,
      initialValues,
      pristine,
      updateProfileInProgress,
      fetchProfileInProgress,
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

    if (fetchProfileInProgress) {
      return <Loader />;
    }

    return (
      <div className={classes}>
        <Header title={MSGEditProfile} />
        <Form onSubmit={handleSubmit(handleEditProfile)}>
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
      </div>
    );
  }
}

export default EditProfile;
