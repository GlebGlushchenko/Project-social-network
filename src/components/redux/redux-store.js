import { applyMiddleware, combineReducers, createStore } from 'redux'
import messagesReducer from './messeges-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reduser'
import authReducer from './auth-reducer'
import newsReducer from './news-reducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  news: newsReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store
export default store
