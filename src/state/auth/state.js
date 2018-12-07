import login from './login/state';
import register from './register/state';
import resetPassword from './resetPassword/state';
import verify from './verify/state';

const initialState = {
  login,
  register,
  resetPassword,
  verify,
};

export default initialState;
