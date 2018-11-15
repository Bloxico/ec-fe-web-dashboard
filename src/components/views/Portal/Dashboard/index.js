// @flow

import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import withConfigSizes from '@wrappers/withConfigSizes';
import { fetchTransactions } from 'src/state/actions';
import { getTransactionsData } from 'src/state/selectors';

import messages from './messages';
import Dashboard from './Dashboard';

const actions = {
  fetchTransactions,
};

// eslint-disable-next-line
const mapStateToProps = state => ({
  transactions: getTransactionsData(state),
});

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
  withConfigSizes,
)(Dashboard);
