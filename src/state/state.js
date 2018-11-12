import { StateT as AuthState } from './auth/state';
import { StateT as ModalState } from './modal/initialState';
import { StateT as UserProfileState } from './userProfile/state';

export type StateT = {
  auth: AuthState,
  modal: ModalState,
  userProfile: UserProfileState,
};
