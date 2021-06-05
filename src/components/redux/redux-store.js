import { applyMiddleware, combineReducers, createStore } from 'redux'
import messagesReducer from './messeges-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reduser'
import authReducer from './auth-reducer'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store
export default store
