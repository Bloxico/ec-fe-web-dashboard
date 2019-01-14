// @flow
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { fetchPartner } from 'src/state/actions';

import Welcome from './Welcome';
import messages from './messages';

const mapStateToProps = state => ({
  ...state,
});

const actions = {
  fetchPartner,
};

export default compose(
  injectIntl,
  connect(
    mapStateToProps,
    actions,
  ),
  withProps(({ intl: { formatMessage } }) => ({
    MSGDashboard: formatMessage(messages.dashboard),
    MSGCreateAnAccount: formatMessage(messages.createAnAccount),
    MSGSignIn: formatMessage(messages.signIn),
    MSGByContinuingYouAgreeToOur: formatMessage(
      messages.byContinuingYouAgreeToOur,
    ),
    MSGTermsOfUse: formatMessage(messages.termsOfUse),
    MSGAnd: formatMessage(messages.and),
    MSGPrivacyPolicy: formatMessage(messages.privacyPolicy),
  })),
)(Welcome);
