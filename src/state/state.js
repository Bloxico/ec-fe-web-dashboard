import { StateT as AuthState } from './auth/state';

export type StateT = {
  auth: AuthState,
};
