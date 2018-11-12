import AuthState from './auth/state';
import ModalState from './modal/initialState';
import SidebarState from './sidebar/initialState';

export type StateT = {
  auth: AuthState,
  modal: ModalState,
  sidebar: SidebarState,
};
