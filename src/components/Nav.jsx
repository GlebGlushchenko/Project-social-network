import React from 'react';
import logoNav from '../assets/img/share.png';

import userAvatar from '../assets/img/user.png';

const Nav = () => {
  return (
    <div className="nav__wrapper">
      <div className="container">
        <div className="nav__inner">
          <a href="#" className="nav__logo">
            <img width="60px" src={logoNav} alt="" />
          </a>
          <ul className="nav">
            <li className="nav__item nav__item--active">Profifle.</li>
            <li className="nav__item">Messages.</li>
            <li className="nav__item">News.</li>
            <li className="nav__item">Users.</li>
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
