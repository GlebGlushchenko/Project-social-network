import React from 'react';

import ProfileContent from './ProfilePost/ProfileContent';
import ProfilePostContainer from './ProfilePost/Container/ProfilePostContainer';

const Profile = () => {
  return (
    <section className="profile__wrapper">
      <div className="container">
        <div className="profile__content__wrapper">
          <ProfileContent />
          <ProfilePostContainer />
        </div>
      </div>
    </section>
  );
};

export default Profile;
