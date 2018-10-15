// @flow

type StateT = {
  inProgress: boolean,
  email: string,
  regionName: string,
  password: string,
  matchPassword: string,
  region: string,
  city: string,
};

const initialState: StateT = {
  inProgress: false,
  email: '',
  regionName: '',
  password: '',
  matchPassword: '',
  region: '',
  city: '',
};

export default initialState;
