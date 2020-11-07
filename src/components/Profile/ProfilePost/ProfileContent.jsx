import React from 'react';
import userAvatar from '../../../assets/img/user.png';

import Preloader from '../../../assets/util/Preloader';

const ProfileContent = ({ profileData }) => {
  return (
    <div className="profile__content-wrapper">
      {!profileData ? (
        <Preloader />
      ) : (
        <div className="profile__content">
          <h3 className="profile__title">.Profile</h3>
          <div className="profile__avatar">
            {!profileData.photos.large ? (
              <img className="profile__avatar-img" width="160px" src={userAvatar} alt="" />
            ) : (
              <img width="200px" src={profileData.photos.large} />
            )}
          </div>
          <h2 className="profile__name">{profileData.fullName}</h2>

          <div className="profile__description">
            <ul className="profile__description-list">
              <li className="profile__description-list-item">
                Status: <b>{profileData.aboutMe} &#11088; </b>
              </li>
              <li className="profile__description-list-item">
                County: <b>Russian &#127757;</b>
              </li>
              <li className="profile__description-list-item">
                City: <b>Petrozavodsk &#127747;</b>
              </li>
              <li className="profile__description-list-item">
                Birthday: <b>29/09/1995 &#127881;</b>
              </li>
              <li className="profile__description-list-item">Other: ...</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ProfileContent);
