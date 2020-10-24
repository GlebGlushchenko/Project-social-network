import React from 'react';

import MassageUser from './MessageUser';

import Messages from './Messages';
import MessagesUsers from './MessagesUsers';

const MessagesPage = ({
  masseagesUsers,
  messagesText,
  newMessageText,
  addMessage,
  removeMessage,
  updateMessageText,
}) => {
  const newMessageTextRef = React.useRef();

  const onAddMessage = () => {
    if (newMessageTextRef.current.value) {
      addMessage(newMessageTextRef.current.value);
    } else alert('ENTER TEXT');
  };

  const onChangeNewMessagetext = () => {
    updateMessageText(newMessageTextRef.current.value.trim());
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
            <MessagesUsers masseagesUsers={masseagesUsers} />
          </div>
          <div className="messages__content">
            <Messages messagesText={messagesText} removeMessage={removeMessage} />

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

export default MessagesPage;
