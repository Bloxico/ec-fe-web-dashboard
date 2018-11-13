// @flow

import * as React from 'react';

import Avatar from '@ui/Avatar';
import Sidebar from '@ui/Sidebar';
import Navigation from '@partials/Navigation';
import iconSignout from '@images/icon-signout.svg';

import { THEME_PREFIX } from 'src/constants';

interface Props {
  isSidebarOpen: boolean;
  hideSidebar: Function;
  children: any;
}

const baseClass = `${THEME_PREFIX}-sidebar`;

export default (props: Props) => {
  const { isSidebarOpen, hideSidebar } = props;

  return (
    <Sidebar show={isSidebarOpen} onHide={hideSidebar}>
      <header className={`${baseClass}__header`}>
        <div className={`${baseClass}__profile`}>
          <Avatar className={`${baseClass}__profile__avatar`} />
          <div className={`${baseClass}__profile__group`}>
            <h5 className={`${baseClass}__profile__email`}>
              joe.rogen@experience.com
            </h5>
            <address className={`${baseClass}__profile__location`}>
              Amersfoort, NL
            </address>
          </div>
        </div>
      </header>

      <section className={`${baseClass}__content`}>
        <Navigation />
      </section>

      <footer className={`${baseClass}__footer`}>
        <Navigation
          items={[
            {
              icon: iconSignout,
              text: 'Sign out',
              onClick: (e: any) => console.log(e),
            },
          ]}
        />
      </footer>
    </Sidebar>
  );
};
