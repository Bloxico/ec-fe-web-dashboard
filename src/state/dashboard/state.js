// @flow

type StateT = {
  setPasswordInProgress: boolean,
  setPasswordComplete: boolean,
  fetchDashboardDataInProgress: boolean,
  fetchExchangeRateInProgress: boolean,
  chartData: any,
  enrgEurValue: number,
  balance: number,
  totalVirtualCurrency: number,
};

const initialState: StateT = {
  setPasswordInProgress: false,
  setPasswordComplete: false,
  fetchDashboardDataInProgress: false,
  fetchExchangeRateInProgress: false,
  chartData: undefined,
  enrgEurValue: undefined,
  balance: undefined,
  totalVirtualCurrency: undefined,
};

export default initialState;
