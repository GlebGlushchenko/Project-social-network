import React from 'react';

import ProfileContent from './ProfilePost/ProfileContent';
import ProfilePostContainer from './ProfilePost/Container/ProfilePostContainer';

const Profile = ({ profileData }) => {
  return (
    <section className="profile__wrapper">
      <div className="container">
        <div className="profile__content__wrapper">
          <ProfileContent profileData={profileData} />
          <ProfilePostContainer />
        </div>
      </div>
    </section>
  );
};

export default Profile;
