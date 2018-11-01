import { StateT as AuthState } from './auth/state';
import { StateT as ModalState } from './modal/initialState';

export type StateT = {
  auth: AuthState,
  modal: ModalState,
};
