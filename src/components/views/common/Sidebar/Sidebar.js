// @flow

import React, { Component } from 'react';

import { Loader, Sidebar, Avatar } from '@ui';
import Navigation from '@partials/Navigation';
import iconSignout from '@images/icon-signout.svg';

import { THEME_PREFIX } from 'src/constants';
import { redirectToLogin } from 'src/services/http/utils';

interface Props {
  isSidebarOpen: boolean;
  hideSidebar: Function;
  fetchProfileData: Function;
  // TODO Add profile type
  profile: any;
  fetchProfileInProgress: boolean;
  children: any;
}

const baseClass = `${THEME_PREFIX}-sidebar`;

class SidebarWrapper extends Component<Props> {
  componentDidMount() {
    const { fetchProfileData } = this.props;
    fetchProfileData();
  }
  render() {
    const {
      isSidebarOpen,
      hideSidebar,
      profile,
      fetchProfileInProgress,
    } = this.props;
    return (
      <Sidebar show={isSidebarOpen} onHide={hideSidebar}>
        {fetchProfileInProgress && <Loader />}
        {!fetchProfileInProgress && profile && (
          <header className={`${baseClass}__header`}>
            <div className={`${baseClass}__profile`}>
              <Avatar className={`${baseClass}__profile__avatar`} />
              <div className={`${baseClass}__profile__group`}>
                <h5 className={`${baseClass}__profile__email`}>
                  {profile.email}
                </h5>
                <address className={`${baseClass}__profile__location`}>
                  {profile.city}, {profile.region}
                </address>
              </div>
            </div>
          </header>
        )}

        <section className={`${baseClass}__content`}>
          <Navigation handleHide={hideSidebar} />
        </section>
        <footer className={`${baseClass}__footer`}>
          <Navigation
            items={[
              {
                icon: iconSignout,
                text: 'Sign out',
                onClick: () => redirectToLogin(),
              },
            ]}
          />
        </footer>
      </Sidebar>
    );
  }
}
export default SidebarWrapper;
