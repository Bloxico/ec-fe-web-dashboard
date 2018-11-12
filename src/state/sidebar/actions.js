// @flow

import { createAction } from 'redux-actions';

export const SHOW_SIDEBAR = '[SIDEBAR] Show';
export const showSidebar = createAction(SHOW_SIDEBAR);

export const HIDE_SIDEBAR = '[SIDEBAR] Hide';
export const hideSidebar = createAction(HIDE_SIDEBAR);
