const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const REMOVE_MESSAGE = 'REMOVE-MESSAGE';

const initialState = {
  masseagesUsers: [
    { name: 'Gleb', id: 1 },
    { name: 'Vova', id: 2 },
    { name: 'Artem', id: 3 },
    { name: 'Zakssss', id: 4 },
    { name: 'Cheed', id: 5 },
  ],
  messagesText: [
    { id: 1, text: 'Hi' },
    { id: 2, text: 'Wellcome' },
    { id: 3, text: 'lorem ipsum' },
    { id: 4, text: 'Lorem Ipsum has been' },
    { id: 5, text: 'Bye' },
    { id: 6, text: 'lorem ipsum' },
  ],
  newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messagesText: [...state.messagesText, { text: action.textMessage }],
        newMessageText: '',
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newText };

    case REMOVE_MESSAGE:
      return {
        ...state,
        messagesText: [
          ...state.messagesText.filter((_, id) => {
            if (action.index !== id) {
              return true;
            }
            return false;
          }),
        ],
      };
    default:
      return state;
  }
};

export const addMessageAC = (text) => ({ type: ADD_MESSAGE, textMessage: text });
export const updateNewMessageTextAC = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });
export const removeMessageAC = (index) => ({ type: REMOVE_MESSAGE, index });
export default messagesReducer;
