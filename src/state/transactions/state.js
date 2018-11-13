// @flow

type StateT = {
  isFetchTransactionsInProgress: boolean,
  fail: boolean,
  data: Object,
};

const initialState: StateT = {
  isFetchTransactionsInProgress: false,
  isProfileDataInProgress: false,
  fail: false,
};

export default initialState;
