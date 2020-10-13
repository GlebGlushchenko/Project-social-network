import React from 'react';
import logoFooter from '../../assets/img/logoFooter.png';

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div>
        &#x1F611; copyright@ Layout and logic
        <a href="https://github.com/GlebGlushchenko" target="blank">
          'Gleb'
        </a>
        <img width="65px" src={logoFooter} alt="" />
      </div>
    </div>
  );
};

export default Footer;
