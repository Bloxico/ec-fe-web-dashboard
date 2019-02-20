// @flow

type StateT = {
  fetchTransactionsInProgress: boolean,
  fail: boolean,
  transactions: Array<Object>,
};

const initialState: StateT = {
  fetchTransactionsInProgress: false,
  fail: false,
  transactions: [],
};

export default initialState;
