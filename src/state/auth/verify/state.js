// @flow

type StateT = {
  inProgress: boolean,
  code: string,
  fail: boolean,
};

const initialState: StateT = {
  inProgress: false,
  code: '',
  fail: false,
};

export default initialState;
