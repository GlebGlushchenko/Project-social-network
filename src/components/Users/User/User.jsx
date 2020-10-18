import React from 'react';
import userAvatar from '../../../assets/img/user.png';

const User = () => {
  return (
    <div className="users__item">
      <div className="user">
        <div className="user__img">
          <img src={userAvatar} alt="Avatar" />
        </div>
        <span>Name</span>
      </div>
    </div>
  );
};

export default User;
