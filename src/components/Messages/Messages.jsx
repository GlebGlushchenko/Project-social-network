import React from 'react';
import { NavLink } from 'react-router-dom';

import MassageUser from './MessageUser';
import MessagesItme from './MessagesItem';
import { addMessageAC, updateNewMessageTextAC } from '../redux/messeges-reducer';

const Messages = ({ masseagesUsers, messagesText, newMessageText, dispatch }) => {
  const newMessageTextRef = React.useRef();

  const onAddMessage = () => {
    if (newMessageTextRef.current.value) {
      dispatch(addMessageAC(newMessageTextRef.current.value));
    } else alert('ENTER TEXT');
  };

  const onChangeNewMessagetext = () => {
    dispatch(updateNewMessageTextAC(newMessageTextRef.current.value.trim()));
  };

  const handlerKeyUp = (event) => {
    if (event.keyCode === 13) {
      onAddMessage();
    }
  };

  return (
    <section className="messages__section">
      <h3>.messages</h3>
      <div className="container">
        <div className="messages">
          <div className="messages__users">
            <ul className="messages__users-list">
              {masseagesUsers.map((user) => (
                <NavLink
                  className="messages__users-NavLink"
                  key={user.id}
                  to={`/messages/${user.id}`}>
                  <MassageUser userName={user.name} />
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="messages__content">
            <div className="messages__content__inner">
              {messagesText.map((text, index) => (
                <MessagesItme index={index} userName={'Name'} key={index} massageText={text.text} />
              ))}
            </div>

            <div className="messages__controle">
              <input
                onKeyUp={handlerKeyUp}
                onChange={onChangeNewMessagetext}
                value={newMessageText}
                ref={newMessageTextRef}
                className="messages__input"
                placeholder="enter massage text..."
                type="text"
              />
              <button onClick={onAddMessage} className="messages__btn">
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
