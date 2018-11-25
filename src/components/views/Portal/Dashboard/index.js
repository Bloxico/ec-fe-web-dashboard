// @flow

import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import withConfigSizes from '@wrappers/withConfigSizes';
import { fetchTransactions } from 'src/state/actions';
import {
  getTransactionsData,
  getDashboardBalance,
  getVirtualBalance,
  getChartData,
  isFetchTransactionInProgress,
} from 'src/state/selectors';

import messages from './messages';
import Dashboard from './Dashboard';

const actions = {
  fetchTransactions,
};

// eslint-disable-next-line
const mapStateToProps = state => ({
  transactions: getTransactionsData(state),
  dashboardBalance: getDashboardBalance(state),
  virtualBalance: getVirtualBalance(state),
  chartData: getChartData(state),
  fetchTransactionsInProgress: isFetchTransactionInProgress(state),
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
    MSGTotalAccumulated: formatMessage(messages.totalAccumulated),
    MSGEnergyShort: formatMessage(messages.energyShort),
    MSGBicycleBits: formatMessage(messages.bicycleBits),
  })),
  withConfigSizes,
)(Dashboard);
