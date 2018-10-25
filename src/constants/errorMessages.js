// @flow

import { defineMessages } from 'react-intl';

const messages = defineMessages({
  somethingWentWrong: {
    id: 'somethingWentWrong',
    defaultMessage:
      'Something went terribly wrong on server side and we can do absolutely nothing about it at this time. Sorry!',
  },
  gotIt: {
    id: 'gotIt',
    defaultMessage: 'Got it!',
  },
  damnDevelopers: {
    id: 'damnDevelopers',
    defaultMessage: 'Damn you, developers!',
  },
  serverError: {
    id: 'serverError',
    defaultMessage: 'This is a server error',
  },
  tryAgain: {
    id: 'tryAgain',
    defaultMessage: 'Try again',
  },
});

export { messages };
