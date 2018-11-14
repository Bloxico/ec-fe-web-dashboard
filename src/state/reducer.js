import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth/reducer';
import modal from './modal/reducer';
import profile from './profile/reducer';
import sidebar from './sidebar/reducer';
import transactions from './transactions/reducer';

export default combineReducers({
  auth,
  form,
  modal,
  profile,
  sidebar,
  transactions,
});
