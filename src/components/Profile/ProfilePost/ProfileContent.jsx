import React from 'react'
import userAvatar from '../../../assets/img/user.png'

import Preloader from '../../../assets/util/Preloader'

const ProfileContent = ({ profileData, userID }) => {
  return (
    <div className="profile__content-wrapper">
      {!profileData ? (
        <Preloader />
      ) : (
        <div className="profile__content">
          <h3 className="profile__title">.Profile</h3>
          <div className="profile__avatar">
            {!profileData.photos.large ? (
              <img className="profile__avatar-img" width="160px" src={userAvatar} alt="avatar" />
            ) : (
              <img width="200px" src={profileData.photos.large} alt="avatar" />
            )}
          </div>
          <h2 className="profile__name">{profileData.fullName}</h2>

          <div className="profile__description">
            <ul className="profile__description-list">
              <li className="profile__description-list-item">
                Status:
                <b>
                  {profileData.aboutMe}
                  <span role="img" aria-label="star">
                    &#11088;
                  </span>
                </b>
              </li>
              <li className="profile__description-list-item">
                County:
                <b>
                  Russian
                  <span role="img" aria-label="planet">
                    &#127757;
                  </span>
                </b>
              </li>
              <li className="profile__description-list-item">
                City:
                <b>
                  Petrozavodsk
                  <span role="img" aria-label="city">
                    &#127747;
                  </span>
                </b>
              </li>
              <li className="profile__description-list-item">
                Birthday:
                <b>
                  29/09/1995
                  <span role="img" aria-label="happy birthday">
                    &#127881;
                  </span>
                </b>
              </li>
              <li className="profile__description-list-item">Other: ...</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default React.memo(ProfileContent)
