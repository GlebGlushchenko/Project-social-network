import messagesReducer from './messeges-reducer';
import profileReducer from './profile-reducer';

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
      messagesText: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'Wellcome' },
        { id: 3, text: 'lorem ipsum' },
        { id: 4, text: 'Lorem Ipsum has been' },
        { id: 5, text: 'Bye' },
        { id: 6, text: 'lorem ipsum' },
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
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this.rerenderEntireTree(this.getState());
  },
};

window.store = store;

export default store;
