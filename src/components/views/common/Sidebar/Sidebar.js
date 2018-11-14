// @flow

import React, { Component } from 'react';

import Avatar from '@ui/Avatar';
import Sidebar from '@ui/Sidebar';
import Navigation from '@partials/Navigation';
import iconSignout from '@images/icon-signout.svg';

import { LOGIN_PAGE, THEME_PREFIX } from 'src/constants';

interface Props {
  isSidebarOpen: boolean;
  hideSidebar: Function;
  children: any;
}

const baseClass = `${THEME_PREFIX}-sidebar`;

class SidebarWrapper extends Component<Props> {
  componentDidMount() {
    const { fetchProfileData } = this.props;
    fetchProfileData();
  }
  render() {
    const { isSidebarOpen, hideSidebar, profileData } = this.props;
    let profileEmail;
    let profileCity;
    let profileRegion;
    if (profileData) {
      profileEmail = profileData.email;
      profileCity = profileData.city;
      profileRegion = profileData.region;
    }
    return (
      <Sidebar show={isSidebarOpen} onHide={hideSidebar}>
        <header className={`${baseClass}__header`}>
          <div className={`${baseClass}__profile`}>
            <Avatar className={`${baseClass}__profile__avatar`} />
            <div className={`${baseClass}__profile__group`}>
              <h5 className={`${baseClass}__profile__email`}>{profileEmail}</h5>
              <address className={`${baseClass}__profile__location`}>
                {profileCity}, {profileRegion}
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
                route: { LOGIN_PAGE },
                // eslint-disable-next-line
                onClick: (e: any) => console.log(e),
              },
            ]}
          />
        </footer>
      </Sidebar>
    );
  }
}
export default SidebarWrapper;
