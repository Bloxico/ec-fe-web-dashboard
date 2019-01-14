import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';
import { hideModal } from 'src/state/modal/actions';

import messages from './messages';
import ErrorMessage from './ErrorMessage';

const actions = {
  hideModal,
};

// eslint-disable-next-line
const mapStateToProps = (state: State) => ({});

export default compose(
  injectIntl,
  connect(
    mapStateToProps,
    actions,
  ),
  withProps(({ intl: { formatMessage } }) => ({
    MSGGotIt: formatMessage(messages.gotIt),
    MSGTryAgain: formatMessage(messages.tryAgain),
    MSGServerError: formatMessage(messages.serverError),
    MSGDamnDevelopers: formatMessage(messages.damnDevelopers),
    MSGSomethingWentWrong: formatMessage(messages.somethingWentWrong),
    MSGUserExists: formatMessage(messages.userExists),
    MSGTokenNotFound: formatMessage(messages.tokenNotFound),
    MSGInvalidLogin: formatMessage(messages.invalidLogin),
    MSGTokenExpired: formatMessage(messages.tokenExpired),
    MSGUserDoesNotExist: formatMessage(messages.userDoesNotExist),
    MSGUserNotVerified: formatMessage(messages.userNotVerified),
    MSGVerifyNow: formatMessage(messages.userNotVerifiedLink),
    MSGPartnerIdAlreadyExists: formatMessage(messages.partnerIdAlreadyExists),
    MSGPartnerIdNotValid: formatMessage(messages.partnerIdNotValid),
  })),
  withHandlers({
    handleClick: ({ hideModal }) => () => {
      hideModal();
    },
  }),
)(ErrorMessage);
