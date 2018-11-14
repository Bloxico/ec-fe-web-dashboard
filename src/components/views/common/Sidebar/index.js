import { compose } from 'recompose';
import { connect } from 'react-redux';

import { isSidebarOpen, getProfileData } from 'src/state/selectors';
import { hideSidebar, fetchProfileData } from 'src/state/actions';
import { State } from 'src/state/state';
import withConfigSizes from '@wrappers/withConfigSizes';

import Sidebar from './Sidebar';

const mapStateToProps = (state: State) => ({
  isSidebarOpen: isSidebarOpen(state),
  profileData: getProfileData(state),
});

const actions = {
  hideSidebar,
  fetchProfileData,
};

export default compose(
  connect(
    mapStateToProps,
    actions,
  ),
  withConfigSizes,
)(Sidebar);
