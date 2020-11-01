import React from 'react';
import { NavLink } from 'react-router-dom';
import userAvatar from '../../../assets/img/user.png';

const User = ({ follow, name, followUser, unfollowUser, index, status, photos, usersId }) => {
  const defaultlocation = {
    location: { city: 'Minsk', country: 'Belarus' },
  };

  const onFollowUser = () => {
    followUser(index);
  };
  const onUnfollow = () => {
    unfollowUser(index);
  };
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
          <button onClick={follow ? onUnfollow : onFollowUser} className="follow__btn">
            {follow ? 'Follow' : 'Unfollow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
