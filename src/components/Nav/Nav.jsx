import React from 'react';
import { NavLink } from 'react-router-dom';
import logoNav from '../../assets/img/share.png';
import userAvatar from '../../assets/img/user.png';



const Nav = () => {
  return (
    <div className="nav__wrapper">
      <div className="container">
        <div className="nav__inner">
          <NavLink to="profile" className="nav__logo">
            <img width="60px" src={logoNav} alt="" />
          </NavLink>
          <ul className="nav">
            <li className="nav__item">
              <NavLink to="/profile">Profile.</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/massages">Messages.</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/users">Users.</NavLink>
            </li>
            <li className="nav__item">
              <a href="">News.</a>
            </li>
          </ul>

          <div className="nav__login">
            <div className="nav__login-avatar">
              <img width="40px" src={userAvatar} alt="Avatar" />
            </div>
            <div className="nav__login-name">Gleb</div>
          </div>
          {/* <img src={logoNav2} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
