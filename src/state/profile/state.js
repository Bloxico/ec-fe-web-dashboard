// @flow

type StateT = {
  updateProfileInProgress: boolean,
  fetchProfileDataInProgress: boolean,
  fail: boolean,
  data: Object,
  regions: null | [],
};

const initialState: StateT = {
  updateProfileInProgress: false,
  fetchProfileDataInProgress: false,
  fail: false,
};

export default initialState;
