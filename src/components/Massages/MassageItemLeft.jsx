import React from 'react';
import userAvatar from '../../assets/img/user.png';

const MassageItemLeft = ({ massageText }) => {
  return (
    <div className="massages__item massages__item--left">
      <span className="massages__item-avatar">
        <img width="40px" src={userAvatar} alt="" />
      </span>
      {massageText}
    </div>
  );
};

export default MassageItemLeft;
