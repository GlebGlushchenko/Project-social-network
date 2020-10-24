import React from 'react';
import {
  updateNewMessageTextAC,
  addMessageAC,
  removeMessageAC,
} from '../../redux/messeges-reducer';
import MessagesPage from '../MessagesPage';

const MessagesContainer = ({ store }) => {
  const state = store.getState();

  const addMessage = (text) => {
    store.dispatch(addMessageAC(text));
  };

  const updateMessageText = (text) => {
    store.dispatch(updateNewMessageTextAC(text));
  };

  const removeMessage = (index) => {
    store.dispatch(removeMessageAC(index));
  };

  return (
    <MessagesPage
      removeMessage={removeMessage}
      addMessage={addMessage}
      updateMessageText={updateMessageText}
      masseagesUsers={state.messagesPage.masseagesUsers}
      messagesText={state.messagesPage.messagesText}
      newMessageText={state.messagesPage.newMessageText}
    />
  );
};

export default MessagesContainer;
