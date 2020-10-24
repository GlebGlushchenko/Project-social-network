import React from 'react';
import MessagesItme from './MessagesItem';

const Messages = ({ messagesText, removeMessage }) => {
  return (
    <div className="messages__content__inner">
      {messagesText.length === 0 ? (
        <div className="noMessageText">No Message</div>
      ) : (
        messagesText.map((text, index) => (
          <MessagesItme
            removeMessage={removeMessage}
            index={index}
            userName={'Name'}
            key={index}
            massageText={text.text}
          />
        ))
      )}
    </div>
  );
};
export default Messages;
