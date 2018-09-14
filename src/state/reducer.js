import { combineReducers } from 'redux';

// import { StateT as CombinedStateT } from './state';
import auth from './auth/reducer';

export default combineReducers({
  auth
});