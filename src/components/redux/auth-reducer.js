import { authorizationAPI, profileAPI } from '../../api/api'
import { setUserProfile } from './profile-reducer'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_STATUS_CODE = 'SET_STATUS_CODE'
const SET_AUTH_ME = 'SET_AUTH_ME'
const SET_LOG_OUT = 'SET_LOG_OUT'

const initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  statusCode: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,

        isAuth: !state.isAuth,
      }
    case SET_STATUS_CODE:
      return {
        ...state,
        statusCode: action.statusCode,
      }

    case SET_AUTH_ME:
      return {
        isAuth: true,
      }
    case SET_LOG_OUT:
      return {
        isAuth: false,
      }

    default:
      return state
  }
}
//ACTION CREATOR
export const setAuthUserData = (userID, email, login) => ({
  type: SET_USER_DATA,
  data: { userID, email, login },
})

const setStatusCode = (statusCode) => ({ type: SET_STATUS_CODE, statusCode })
const setAuth = () => ({ type: SET_AUTH_ME })
const setLogOut = () => ({ type: SET_LOG_OUT })
//ACTION CREATOR

//THUNK
export const getAuthMe = () => {
  return (dispatch) => {
    profileAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        dispatch(
          setAuthUserData(
            data.data.id,
            data.data.email,
            data.data.login,
            profileAPI.getProfileUser(data.data.id).then((data) => {
              dispatch(setUserProfile(data))
            }),
          ),
        )
      }
    })
  }
}

export const loginMe = (data) => {
  return (dispatch) => {
    authorizationAPI.login(data).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuth())
      }
      dispatch(setStatusCode(response.data.resultCode))
    })
  }
}

export const logOut = () => {
  return (dispatch) => {
    authorizationAPI.logOut().then(() => {
      dispatch(setLogOut())
    })
  }
}
//THUNK

export default authReducer
