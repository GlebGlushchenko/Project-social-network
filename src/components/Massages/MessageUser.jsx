import React from 'react';
import userAvatar from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';

const MassageUser = ({ userName }) => {
  return (
    <li className="massages__users-item">
      <NavLink className="massages__users-link" to="/massages/1">
        <span className="avatar__users">
          <img width="40px" src={userAvatar} alt="avatar" />
        </span>

        <span>{userName}</span>
      </NavLink>
    </li>
  );
};

export default MassageUser;
