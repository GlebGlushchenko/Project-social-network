import React from 'react'
import { NavLink } from 'react-router-dom'

import userAvatar from '../../../assets/img/user.png'

const User = ({
  follow,
  name,
  index,
  status,
  photos,
  usersId,
  setDisabledBtn,
  followUserThunkCreator,
  unFollowUserThunkCreator,
}) => {
  const onFollowUser = () => {
    followUserThunkCreator(usersId, index)
  }

  const onUnfollow = () => {
    unFollowUserThunkCreator(usersId, index)
  }

  return (
    <div className="users__item">
      <div className="user">
        <NavLink to={`/profile/${+usersId}`}>
          <div className="user__img">
            <img src={photos.large !== null ? photos.large : userAvatar} alt="Avatar" />
          </div>
        </NavLink>
        <div className="user__description">
          <p className="user__name">{name}</p>
          <p className="user__status">{status}</p>
        </div>

        <div>
          <button
            disabled={setDisabledBtn.some((id) => id === usersId)}
            onClick={follow ? onUnfollow : onFollowUser}
            className="follow__btn">
            {follow ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default User
