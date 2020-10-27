import React from 'react';
import userAvatar from '../../../assets/img/user.png';

const ProfileContent = () => {
  return (
    <div className="profile__content">
      <h3 className="profile__title">.Profile</h3>
      <div className="profile__avatar">
        <img width="150px" src={userAvatar} alt="" />
      </div>
      <h2 className="profile__logo">Gleb</h2>

      <div className="profile__description">
        <ul className="profile__description-list">
          <li className="profile__description-list-item">
            Status: <b>Status &#11088; </b>
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
  );
};

export default ProfileContent;
