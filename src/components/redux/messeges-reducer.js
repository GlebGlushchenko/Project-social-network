const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messagesText: [...state.messagesText, { text: action.textMessage }],
        newMessageText: '',
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newText };
    default:
      return state;
  }
};

export const addMessageAC = (text) => ({ type: ADD_MESSAGE, textMessage: text });
export const updateNewMessageTextAC = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });
export default messagesReducer;
