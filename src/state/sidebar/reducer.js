// @flow

import * as actions from './actions';
import initialState from './initialState';

export default (state: * = initialState(), action: any) => {
  const { type } = action;

  switch (type) {
    case actions.SHOW_SIDEBAR: {
      return {
        ...state,
        isOpen: true,
      };
    }
    case actions.HIDE_SIDEBAR:
      return { ...initialState() };
    default:
      return state;
  }
};
