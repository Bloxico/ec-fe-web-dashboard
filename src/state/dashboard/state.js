// @flow

type StateT = {
  setPasswordInProgress: boolean,
  setPasswordCompleted: boolean,
  fetchDashboardDataInProgress: boolean,
  fetchExchangeRateInProgress: boolean,
  chartData: any,
  enrgEurValue: number,
  balance: number,
  totalVirtualCurrency: number,
};

const initialState: StateT = {
  setPasswordInProgress: false,
  setPasswordCompleted: false,
  fetchDashboardDataInProgress: false,
  fetchExchangeRateInProgress: false,
  chartData: undefined,
  enrgEurValue: undefined,
  balance: undefined,
  totalVirtualCurrency: undefined,
};

export default initialState;
