// @flow
import { createSelector } from 'reselect';

const getAuth = ({ auth }) => auth;

const getRegister = createSelector(getAuth, ({ register }) => register);

export const isRegisterInProgress = createSelector(
  getRegister,
  ({ inProgress }) => inProgress,
);

export const getRegions = createSelector(getRegister, ({ regions }) => regions);

// TODO@use reselect
export const getRegisterEmail = ({
  auth: {
    register: { email },
  },
}) => ({ registerEmail: email });
