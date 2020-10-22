import React from 'react';
import cross from '../../assets/img/cross.png';

import userAvatar from '../../assets/img/user.png';

const MassagesItme = ({ massageText, userName }) => {
  return (
    <div className="massages__item">
      <span className="massages__item-avatar">
        <img width="40px" src={userAvatar} alt="" />
        <span className="massages__name">{userName}</span>
      </span>
      {massageText}
      <span className="cross__wrapper">
        <img className="crossDelete" src={cross} alt="Cross" />
      </span>
    </div>
  );
};

export default MassagesItme;
