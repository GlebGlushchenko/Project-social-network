import React from 'react';
import { NavLink } from 'react-router-dom';
import logoNav from '../../assets/img/share.png';
import userAvatar from '../../assets/img/user.png';

const Nav = (props) => {
  const [test, setTest] = React.useState(false);
  const onToogleMenu = () => {
    setTest(!test);
  };
  return (
    <div className="nav__wrapper">
      <div className="container">
        <div className="nav__inner">
          <NavLink to="/profile" className="nav__logo">
            <img width="60px" src={logoNav} alt="" />
          </NavLink>

          <div className="mobile__menu-wrapper">
            <p onClick={onToogleMenu}>.Menu</p>
            {test ? (
              <div className="mobile__menu-inner">
                <ul>
                  <NavLink onClick={onToogleMenu} to="/profile">
                    <li>.Profile</li>
                  </NavLink>
                  <NavLink onClick={onToogleMenu} to="/messages">
                    <li>.Messages</li>
                  </NavLink>
                  <NavLink onClick={onToogleMenu} to="/users">
                    <li>.Users</li>
                  </NavLink>
                  <NavLink onClick={onToogleMenu} to="/news">
                    <li>.News</li>
                  </NavLink>
                </ul>
              </div>
            ) : null}
          </div>

          <ul className="nav">
            <li className="nav__item">
              <NavLink to="/profile">.Profile</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/messages">.Messages</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/users">.Users</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/news">.News</NavLink>
            </li>
          </ul>

          <NavLink className="nav__login" to="login">
            {props.isAuth ? (
              <div className="nav__login-avatar">
                <img src={userAvatar} alt="Avatar" />
              </div>
            ) : null}

            <div className="nav__login-name">{props.isAuth ? props.login : 'Login'}</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
