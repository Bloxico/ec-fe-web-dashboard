// @flow
import { createSelector } from 'reselect';

// TODO move this to upper folder
const getAuth = ({ auth }) => auth;

const getRegister = createSelector(
  getAuth,
  ({ register }) => register,
);

export const isRegisterInProgress = createSelector(
  getRegister,
  ({ inProgress }) => inProgress,
);

export const getRegions = createSelector(
  getRegister,
  ({ regions }) => regions,
);

export const getFailedData = createSelector(
  getRegister,
  ({ data }) => data,
);

export const isFail = createSelector(
  getRegister,
  ({ fail }) => fail,
);
