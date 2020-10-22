import React from 'react';

import ProfilePost from './ProfilePost/ProfilePost';

import ProfileContent from './ProfilePost/ProfileContent';

const Profile = ({ postText, newPostText, dispatch }) => {
  return (
    <section className="profile__wrapper">
      <div className="container">
        <div className="profile__content__wrapper">
          <ProfileContent />
          <ProfilePost newPostText={newPostText} dispatch={dispatch} postText={postText} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
