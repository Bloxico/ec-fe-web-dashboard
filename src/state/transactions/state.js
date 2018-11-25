// @flow

type StateT = {
  fetchTransactionsInProgress: boolean,
  fail: boolean,
  transactions: Array<Object>,
  chartData: any,
  dashboardBalance: number,
  virtualBalance: number,
};

const initialState: StateT = {
  fetchTransactionsInProgress: false,
  fail: false,
  transactions: [],
  chartData: undefined,
};

export default initialState;
