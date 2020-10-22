const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store = {
  _state: {
    messagesPage: {
      masseagesUsers: [
        { name: 'Gleb', id: 1 },
        { name: 'Vova', id: 2 },
        { name: 'Artem', id: 3 },
        { name: 'Zakssss', id: 4 },
        { name: 'Cheed', id: 5 },
      ],
      massagesText: [
        { text: 'Hi' },
        { text: 'Wellcome' },
        { text: 'lorem ipsum' },
        { text: 'Lorem Ipsum has been' },
        { text: 'Bye' },
        { text: 'lorem ipsum' },
      ],
      newMessageText: '',
    },

    userPage: {
      users: [
        { name: 'Gleb', id: 1 },
        { name: 'Oly', id: 2 },
        { name: 'Tany', id: 3 },
        { name: 'Artem', id: 4 },
        { name: 'Vova', id: 5 },
        { name: 'Den', id: 6 },
      ],
    },

    profilePage: {
      postText: [
        { text: 'Hi' },
        { text: 'Wellcome' },
        { text: 'lorem ipsum' },
        { text: 'Lorem Ipsum has been' },
        { text: 'Bye' },
        { text: 'lorem ipsum' },
      ],
      newPostText: '',
    },
  },

  getState() {
    return this._state;
  },
  rerenderEntireTree() {},

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        this._state.profilePage.postText.push({ text: action.textPost });
        this._state.profilePage.newPostText = '';
        this.rerenderEntireTree(this._state);
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newText;
        this.rerenderEntireTree(this._state);
        break;
      case ADD_MESSAGE:
        this._state.messagesPage.massagesText.push({ text: action.textMessage });
        this._state.messagesPage.newMessageText = '';
        this.rerenderEntireTree(this._state);
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this._state.messagesPage.newMessageText = action.newText;
        this.rerenderEntireTree(this._state);
        break;
    }
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  addMessage(text) {},
  updateNewMassageText(text) {},
};
export const addPostAC = (text) => ({ type: ADD_POST, textPost: text });
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const addMessageAC = (text) => ({ type: ADD_MESSAGE, textMessage: text });
export const updateNewMessageTextAC = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

window.store = store;

export default store;
