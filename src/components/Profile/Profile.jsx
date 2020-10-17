import React from 'react';
import userAvatar from '../../assets/img/user.png';

import ProfilePost from '../ProfilePost/ProfilePost';

const Profile = () => {
  return (
    <section className="profile__wrapper">
      <div className="container">
        <div className="profile__content__wrapper">
          <div className="profile__content">
            <h3 className="profile__title">.Profile</h3>
            <div className="profile__avatar">
              <img width="150px" src={userAvatar} alt="" />
            </div>
            <h2 className="profile__logo">Gleb</h2>

            <div className="profile__description">
              <ul className="profile__description-list">
                <li className="profile__description-list-item">
                  City: <b>Petrozavodsk &#127747;</b>
                </li>
                <li className="profile__description-list-item">
                  Birthday: <b>29/09/1995</b>
                </li>
                <li className="profile__description-list-item">Other: ...</li>
              </ul>
            </div>
          </div>
          <ProfilePost />
        </div>
      </div>
    </section>
  );
};

export default Profile;
