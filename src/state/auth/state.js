import login, { StateT as LoginStateT } from './login/state';

export type StateT = {
  login: LoginStateT
}

const initialState: StateT = {
  login,
};

export default initialState;