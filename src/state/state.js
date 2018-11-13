import AuthState from './auth/state';
import ModalState from './modal/initialState';
import SidebarState from './sidebar/initialState';
import EditProfileState from './editProfile/state';

export type StateT = {
  auth: AuthState,
  modal: ModalState,
  sidebar: SidebarState,
  userProfile: EditProfileState,
};
