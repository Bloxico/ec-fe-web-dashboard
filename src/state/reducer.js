import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// import { StateT as CombinedStateT } from './state';
import auth from './auth/reducer';

export default combineReducers({
  auth,
  form,
});
