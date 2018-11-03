// @flow

import * as React from 'react';

import Button from '@ui/Button';
import { THEME_PREFIX } from 'src/constants';

export interface Props {
  content: string;
  MSGGotIt: string;
  MSGTryAgain: string;
  MSGServerError: string;
  MSGDamnDevelopers: string;
  MSGSomethingWentWrong: string;
  handleClick: Function;
}

const baseClass = `${THEME_PREFIX}-error-message`;

const ErrorMessage = (props: Props) => {
  const {
    content,
    MSGGotIt,
    MSGTryAgain,
    MSGServerError,
    MSGDamnDevelopers,
    MSGSomethingWentWrong,
    handleClick
  } = props;

  return (
    <div className={baseClass}>
      <header className={`${baseClass}__header`}>
        <h3 className={`${baseClass}__title`}>
          {content ? MSGTryAgain : MSGServerError}
        </h3>
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
          onClick={handleClick}
        >
          {content ? MSGGotIt : MSGDamnDevelopers}
        </Button>
      </footer>
    </div>
  );
};

export default ErrorMessage;
