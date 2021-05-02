import React from 'react'

import ProfileContent from './ProfilePost/ProfileContent'
import ProfilePostContainer from './ProfilePost/Container/ProfilePostContainer'

const Profile = (props) => {
  return (
    <section className="profile__wrapper">
      <div className="container">
        <div className="profile__content__wrapper">
          <ProfileContent
            userID={props.userID}
            profileData={props.profileData}
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <ProfilePostContainer />
        </div>
      </div>
    </section>
  )
}

export default Profile
