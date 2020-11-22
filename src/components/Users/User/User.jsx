import React from 'react';
import { NavLink } from 'react-router-dom';
import userAvatar from '../../../assets/img/user.png';
import axios from 'axios';

const User = ({ follow, name, followUser, unfollowUser, index, status, photos, usersId }) => {
  const onFollowUser = () => {
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0//follow/${index}`,
        {},
        {
          withCredentials: true,
          headers: { 'API-KEY': '45414e19-d78d-4b5b-aaf5-666ee2401d0a' },
        },
      )
      .then((response) => {
        if (!response.data.resultCode) {
          followUser(index);
        }
      });
  };
  const onUnfollow = () => {
    axios
      .delete(`https://social-network.samuraijs.com/api/1.0//follow/${index}`, {
        withCredentials: true,
        headers: { 'API-KEY': '45414e19-d78d-4b5b-aaf5-666ee2401d0a' },
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          unfollowUser(index);
        }
      });
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
            {follow ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
