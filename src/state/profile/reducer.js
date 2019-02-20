// @flow

import { handleActions } from 'redux-actions';

import * as actions from './actions';
import initialState from './state';

export default handleActions(
  new Map([
    [
      actions.FETCH_PROFILE_DATA,
      state => ({
        ...state,
        fetchProfileDataInProgress: true,
      }),
    ],
    [
      actions.FETCH_PROFILE_DATA_SUCCESS,
      (state, { payload }) => ({
        ...state,
        data: {
          ...payload.userProfile,
          ...payload.hasPassword,
          addressHash:
            (payload.walletAddresses.length > 0 &&
              payload.walletAddresses[0].addressHash) ||
            '',
        },
        regions: payload.regions,
        fetchProfileDataInProgress: false,
      }),
    ],
    [
      actions.UPDATE_PROFILE,
      state => ({
        ...state,
        fail: false,
        updateProfileInProgress: true,
        message: '',
      }),
    ],
    [
      actions.UPDATE_PROFILE_SUCCESS,
      (state, { payload }) => ({
        ...state,
        data: payload,
        updateProfileInProgress: false,
        fail: false,
        message: 'Profile updated successfuly',
      }),
    ],
    [
      actions.UPDATE_PROFILE_FAIL,
      state => ({
        ...state,
        fail: true,
        updateProfileInProgress: false,
        message: '',
      }),
    ],
    [
      actions.CLEAR_PROFILE_STATE,
      state => ({
        ...state,
        ...initialState,
      }),
    ],
  ]),
  { ...initialState },
);
