import * as React from 'react';

import Sidebar from '@ui/Sidebar';
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
      <header className={`${baseClass}__header`}>Avatar Email Location</header>
      <section className={`${baseClass}__content`}>Body</section>
      <footer className={`${baseClass}__footer`}>Sign out</footer>
    </Sidebar>
  );
};
