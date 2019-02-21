// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { injectIntl } from 'react-intl';
import { reduxForm } from 'redux-form';

import withConfigSizes from '@wrappers/withConfigSizes';
import {
  fetchDashboardData,
  fetchExchangeRate,
  setPassword,
} from 'src/state/actions';
import {
  getDashboardBalance,
  getVirtualBalance,
  getChartData,
  isDashboardDataInProgress,
  getEnergyEuroRate,
  isSetPasswordInProgress,
  isSetPasswordCompleted,
  getProfileData,
} from 'src/state/selectors';
import { match, password, required } from 'src/utilities/validators';

import messages from './messages';
import Dashboard from './Dashboard';

const actions = {
  fetchDashboardData,
  fetchExchangeRate,
  setPassword,
};

// eslint-disable-next-line
const mapStateToProps = state => ({
  dashboardBalance: getDashboardBalance(state),
  virtualBalance: getVirtualBalance(state),
  chartData: getChartData(state),
  fetchDashboardDataInProgress: isDashboardDataInProgress(state),
  enrgEurValue: getEnergyEuroRate(state),
  setPasswordInProgress: isSetPasswordInProgress(state),
  setPasswordCompleted: isSetPasswordCompleted(state),
  profileData: getProfileData(state),
});

export default compose(
  injectIntl,
  connect(
    mapStateToProps,
    actions,
  ),
  reduxForm({
    form: 'SetPassword',
  }),
  withHandlers({
    handleSetPassword: ({ setPassword }) => values => {
      setPassword(values);
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    MSGDashboard: formatMessage(messages.dashboard),
    MSGCO2Prevented: formatMessage(messages.CO2Prevented),
    MSGkWhSaved: formatMessage(messages.kWhSaved),
    MSGTotalAccumulated: formatMessage(messages.totalAccumulated),
    MSGEnergyShort: formatMessage(messages.energyShort),
    MSGBicycleBits: formatMessage(messages.bicycleBits),
    MSGExchangeRateFailed: formatMessage(messages.exchangeRateFailed),
    MSGPrevented: formatMessage(messages.prevented),
    MSGTime: formatMessage(messages.time),
    MSGOfCO2: formatMessage(messages.ofCO2),
    MSGContinue: formatMessage(messages.continue),
    MSGSetYourPassword: formatMessage(messages.setYourPassword),
    MSGPassword: formatMessage(messages.password),
    MSGRepeatPassword: formatMessage(messages.repeatPassword),
    MSGEuroShort: formatMessage(messages.euroShort),
  })),
  withProps(({ intl }) => ({
    requiredIntl: required({ intl }),
    passwordIntl: password({ intl }),
    matchIntl: match({ intl }),
  })),
  withConfigSizes,
)(Dashboard);
