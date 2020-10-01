import React from 'react';

import userAvatar from '../../assets/img/user.png';

const MassagesItme = ({ massageText }) => {
  return (
    <div className="massages__item">
      {massageText}
      <span className="massages__item-avatar">
        <img width="40px" src={userAvatar} alt="" />
      </span>
    </div>
  );
};

export default MassagesItme;
