import React from 'react';
import userAvatar from '../../assets/img/user.png';

const MassageUser = ({ userName }) => {
  return (
    <li className="massages__users-item">
      <span className="avatar__users">
        <img width="40px" src={userAvatar} alt="avatar" />
      </span>
      <span>{userName}</span>
    </li>
  );
};

export default MassageUser;
