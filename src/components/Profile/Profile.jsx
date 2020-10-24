import React from 'react';

import ProfileContent from './ProfilePost/ProfileContent';
import ProfilePostContainer from './ProfilePost/Container/ProfilePostContainer';

const Profile = ({ store }) => {
  return (
    <section className="profile__wrapper">
      <div className="container">
        <div className="profile__content__wrapper">
          <ProfileContent />
          <ProfilePostContainer store={store} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
