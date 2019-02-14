import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

import {
  isSidebarOpen,
  getProfileData,
  isFetchProfileDataInProgress,
} from 'src/state/selectors';
import { hideSidebar, fetchProfileData } from 'src/state/actions';
import { State } from 'src/state/state';
import withConfigSizes from '@wrappers/withConfigSizes';

import Sidebar from './Sidebar';
import messages from './messages';

const mapStateToProps = (state: State) => ({
  isSidebarOpen: isSidebarOpen(state),
  fetchProfileInProgress: isFetchProfileDataInProgress(state),
  profile: getProfileData(state),
});

const actions = {
  hideSidebar,
  fetchProfileData,
};

export default compose(
  injectIntl,
  connect(
    mapStateToProps,
    actions,
  ),
  withConfigSizes,
  withProps(({ intl: { formatMessage } }) => ({
    MSGSignOut: formatMessage(messages.signOut),
  })),
)(Sidebar);
