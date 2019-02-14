// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { injectIntl } from 'react-intl';
import { reduxForm } from 'redux-form';

import {
  fetchProfileData,
  updateProfile,
  clearProfileState,
} from 'src/state/actions';
import {
  getProfileData,
  getUserProfileRegions,
  getProfileUpdateMessage,
  isUpdateProfileInProgress,
  isFetchProfileDataInProgress,
  hasUpdateProfileFailed,
} from 'src/state/selectors';
import { alphanumeric, email, required } from 'src/utilities/validators';

import messages from './messages';
import EditProfile from './EditProfile';

const actions = {
  updateProfile,
  fetchProfileData,
  clearProfileState,
};

const mapStateToProps = state => ({
  initialValues: getProfileData(state),
  regions: getUserProfileRegions(state),
  updateProfileInProgress: isUpdateProfileInProgress(state),
  updateProfileMessage: getProfileUpdateMessage(state),
  hasUpdateFailed: hasUpdateProfileFailed(state),
  fetchProfileInProgress: isFetchProfileDataInProgress(state),
});

export default compose(
  injectIntl,
  connect(
    mapStateToProps,
    actions,
  ),
  reduxForm({
    form: 'EditProfile',
  }),
  withHandlers({
    handleEditProfile: ({ updateProfile }) => values => {
      updateProfile(values);
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    MSGEditProfile: formatMessage(messages.editProfile),
    MSGEmail: formatMessage(messages.email),
    MSGName: formatMessage(messages.name),
    MSGRegion: formatMessage(messages.region),
    MSGCity: formatMessage(messages.city),
    MSGSave: formatMessage(messages.save),
    MSGAddress: formatMessage(messages.address),
    MSGLinkToAddress: formatMessage(messages.linkToAddress),
    MSGSelectCountry: formatMessage(messages.selectCountry),
  })),
  withProps(({ intl }) => ({
    requiredIntl: required({ intl }),
    alphanumericIntl: alphanumeric({ intl }),
    emailIntl: email({ intl }),
  })),
)(EditProfile);
