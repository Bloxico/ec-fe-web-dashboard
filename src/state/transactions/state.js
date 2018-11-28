// @flow

type StateT = {
  fetchTransactionsInProgress: boolean,
  fail: boolean,
  transactions: Array<Object>,
  chartData: any,
  dashboardBalance: number,
  virtualBalance: number,
  enrgEurValue: number,
};

const initialState: StateT = {
  fetchTransactionsInProgress: false,
  fail: false,
  transactions: [],
  chartData: undefined,
  enrgEurValue: undefined,
};

export default initialState;
