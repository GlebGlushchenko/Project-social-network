import React from 'react';
import logo2 from '../../assets/img/myLogo2.png';

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div>
        <span role="img" aria-label="smile-sad">
          &#x1F611;
        </span>
        copyright@ Layout and logic
        <a href="https://github.com/GlebGlushchenko" target="blank">
          'Gleb'
        </a>
        <img width="50px" src={logo2} alt="" />
      </div>
    </div>
  );
};

export default Footer;
