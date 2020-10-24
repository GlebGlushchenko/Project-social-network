import React from 'react';
import cross from '../../assets/img/cross.png';

import userAvatar from '../../assets/img/user.png';
import { removeMessage } from '../redux/messeges-reducer';

const messagesItme = ({ massageText, userName, index, dispatch }) => {
  const onRemoveMessage = () => {
    dispatch(removeMessage(index));
  };

  return (
    <div className="messages__item">
      <span className="messages__item-avatar">
        <img width="40px" src={userAvatar} alt="" />
        <span className="messages__name">{userName}</span>
      </span>
      {massageText}
      <span onClick={onRemoveMessage} className="cross__wrapper">
        <img className="crossDelete" src={cross} alt="Cross" />
      </span>
    </div>
  );
};

export default messagesItme;
