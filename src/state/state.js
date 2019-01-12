import AuthState from './auth/state';
import ModalState from './modal/initialState';
import SidebarState from './sidebar/initialState';
import ProfileState from './profile/state';
import TransactionsState from './transactions/state';
import WelcomeState from './welcome/state';

export type StateT = {
  auth: AuthState,
  modal: ModalState,
  sidebar: SidebarState,
  profile: ProfileState,
  transactions: TransactionsState,
  welcome: WelcomeState,
};
