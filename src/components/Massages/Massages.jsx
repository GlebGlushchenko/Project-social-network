import React from 'react';
import { NavLink } from 'react-router-dom';

import MassageUser from './MessageUser';
import MassagesItme from './MassagesItem';
import { addMessageAC, updateNewMessageTextAC } from '../redux/state';

const Messages = ({ masseagesUsers, massagesText, newMessageText, dispatch }) => {
  const newMessageTextRef = React.useRef();

  const onAddMessage = () => {
    if (newMessageTextRef.current.value) {
      dispatch(addMessageAC(newMessageTextRef.current.value));
    } else alert('ENTER TEXT');
  };

  const onChangeNewMessagetext = () => {
    dispatch(updateNewMessageTextAC(newMessageTextRef.current.value.trim()));
  };

  return (
    <section className="massages__section">
      <h3>.Massages</h3>
      <div className="container">
        <div className="massages">
          <div className="massages__users">
            <ul className="massages__users-list">
              {masseagesUsers.map((user) => (
                <NavLink
                  className="massages__users-NavLink"
                  key={user.id}
                  to={`/massages/${user.id}`}>
                  <MassageUser userName={user.name} />
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="massages__content">
            <div className="massages__content__inner">
              {massagesText.map((text, index) => (
                <MassagesItme index={index} userName={'Name'} key={index} massageText={text.text} />
              ))}
            </div>

            <div className="massages__controle">
              <input
                onChange={onChangeNewMessagetext}
                value={newMessageText}
                ref={newMessageTextRef}
                className="massages__input"
                placeholder="enter massage text..."
                type="text"
              />
              <button onClick={onAddMessage} className="massages__btn">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
