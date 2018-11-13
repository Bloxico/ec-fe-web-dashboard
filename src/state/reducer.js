import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// import { StateT as CombinedStateT } from './state';
import auth from './auth/reducer';
import modal from './modal/reducer';
import editProfile from './editProfile/reducer';
import sidebar from './sidebar/reducer';
import transactions from './transactions/reducer';

export default combineReducers({
  auth,
  form,
  modal,
  editProfile,
  sidebar,
  transactions,
});
