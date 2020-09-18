import React from 'react';
import logo from '../assets/img/share.png';
import logo2 from '../assets/img/myLogo2.png';

const Nav = () => {
  return (
    <div className="nav__wrapper">
      <div className="container">
        <div className="nav__inner">
          <a href="#" className="logo">
            <img width="60px" src={logo} alt="" />
          </a>
          <ul className="nav">
            <li className="nav__item nav__item--active">Profifle.</li>
            <li className="nav__item">Messages.</li>
            <li className="nav__item">News.</li>
            <li className="nav__item">Users.</li>
          </ul>
          <img src={logo2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
