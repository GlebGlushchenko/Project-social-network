import React from 'react';
import cross from '../../assets/img/cross.png';

import userAvatar from '../../assets/img/user.png';

const MassagesItme = ({ massageText, userName, index, removeMassage }) => {
  const onRemoveMassage = () => {
    removeMassage(index);
  };
  return (
    <div className="massages__item">
      <span className="massages__item-avatar">
        <img width="40px" src={userAvatar} alt="" />
        <span className="massages__name">{userName}</span>
      </span>
      {massageText}
      <span onClick={onRemoveMassage} className="cross__wrapper">
        <img className="crossDelete" src={cross} alt="Cross" />
      </span>
    </div>
  );
};

export default MassagesItme;
