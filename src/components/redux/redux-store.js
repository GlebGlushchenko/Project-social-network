import { combineReducers, createStore } from 'redux';
import messagesReducer from './messeges-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reduser';

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;
export default store;
