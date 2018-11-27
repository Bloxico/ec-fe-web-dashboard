// @flow

type StateT = {
  updateProfileInProgress: boolean,
  fetchProfileDataInProgress: boolean,
  fail: boolean,
  message: string,
  data: Object,
  regions: null | [],
};

const initialState: StateT = {
  updateProfileInProgress: false,
  fetchProfileDataInProgress: false,
  fail: false,
  message: '',
};

export default initialState;
