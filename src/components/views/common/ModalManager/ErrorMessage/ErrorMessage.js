// @flow

import * as React from 'react';

import Button from '@ui/Button';
import { THEME_PREFIX, ERROR_CODES } from 'src/constants';

export interface Props {
  content: string;
  MSGGotIt: string;
  MSGTryAgain: string;
  MSGServerError: string;
  MSGDamnDevelopers: string;
  MSGSomethingWentWrong: string;
  MSGUserExists: string;
  MSGTokenNotFound: string;
  MSGInvalidLogin: string;
  MSGTokenExpired: string;
  MSGUserDoesNotExist: string;
  MSGUserNotVerified: string;
  handleClick: Function;
}

const baseClass = `${THEME_PREFIX}-error-message`;

const ErrorMessage = (props: Props) => {
  let { content } = props;
  const {
    MSGGotIt,
    MSGTryAgain,
    MSGServerError,
    MSGDamnDevelopers,
    MSGSomethingWentWrong,
    MSGUserExists,
    MSGTokenNotFound,
    MSGInvalidLogin,
    MSGTokenExpired,
    MSGUserDoesNotExist,
    MSGUserNotVerified,
    MSGPartnerIdAlreadyExists,
    handleClick,
  } = props;

  switch (content) {
    case ERROR_CODES.USER_EXISTS:
      content = MSGUserExists;
      break;
    case ERROR_CODES.TOKEN_NOT_FOUND:
      content = MSGTokenNotFound;
      break;
    case ERROR_CODES.INVALID_CREDENTIALS:
      content = MSGInvalidLogin;
      break;
    case ERROR_CODES.TOKEN_EXPIRED:
      content = MSGTokenExpired;
      break;
    case ERROR_CODES.USER_DOES_NOT_EXIST:
      content = MSGUserDoesNotExist;
      break;
    case ERROR_CODES.BAD_CREDENTIALS:
      content = MSGInvalidLogin;
      break;
    case ERROR_CODES.USER_NOT_VERIFIED:
      content = MSGUserNotVerified;
      break;
    case ERROR_CODES.PARTNER_USER_ID_ALREADY_EXISTS:
      content = MSGPartnerIdAlreadyExists;
      break;
    default:
      content = undefined;
      break;
  }

  return (
    <div className={baseClass}>
      <header className={`${baseClass}__header`}>
        <h4 className={`${baseClass}__title`}>
          {content ? MSGTryAgain : MSGServerError}
        </h4>
      </header>
      <section className={`${baseClass}__content`}>
        <p className={`${baseClass}__message`}>
          {content || MSGSomethingWentWrong}
        </p>
      </section>
      <footer className={`${baseClass}__footer`}>
        <Button
          type="secondary"
          width="full"
          size="large"
          className={`${baseClass}__action`}
          onClick={handleClick}
        >
          {content ? MSGGotIt : MSGDamnDevelopers}
        </Button>
      </footer>
    </div>
  );
};

export default ErrorMessage;
