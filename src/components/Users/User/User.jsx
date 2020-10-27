import React from 'react';

const User = ({ follow, name, followUser, unfollowUser, index, location, status, userAvatar }) => {
  const onFollowUser = () => {
    followUser(index);
  };
  const onUnfollow = () => {
    unfollowUser(index);
  };
  return (
    <div className="users__item">
      <div className="user">
        <div className="user__img">
          <img src={userAvatar} alt="Avatar" />
        </div>
        <div className="user__description">
          <p className="user__name">{name}</p>
          <p>{status}</p>
          <p>{location.country}</p>
          <p>{location.city}</p>
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
