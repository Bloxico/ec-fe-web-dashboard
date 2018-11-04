// @flow

import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';

import messages from './messages';
import Dashboard from './Dashboard';

const actions = {};

// eslint-disable-next-line
const mapStateToProps = (state: State) => ({});

export default compose(
  injectIntl,
  connect(
    mapStateToProps,
    actions,
  ),
  withProps(({ intl: { formatMessage } }) => ({
    MSGDashboard: formatMessage(messages.dashboard),
    MSGCO2Prevented: formatMessage(messages.CO2Prevented),
    MSGkWhSaved: formatMessage(messages.kWhSaved),
  })),
)(Dashboard);
