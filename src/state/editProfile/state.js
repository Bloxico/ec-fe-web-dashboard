// @flow

type StateT = {
  isUpdateProfileInProgress: boolean,
  isProfileDataInProgress: boolean,
  fail: boolean,
  data: Object,
  regions: null | [],
};

const initialState: StateT = {
  isUpdateProfileInProgress: false,
  isProfileDataInProgress: false,
  fail: false,
};

export default initialState;
