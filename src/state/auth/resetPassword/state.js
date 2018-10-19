// @flow

type StateT = {
  inProgress: boolean,
  email: string,
  fail: boolean,
};

const initialState: StateT = {
  inProgress: false,
  email: '',
  fail: false,
};

export default initialState;
