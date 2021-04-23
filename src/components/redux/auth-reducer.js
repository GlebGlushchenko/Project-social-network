import { usersAPI } from '../../api/api'
import { setUserProfile } from './profile-reducer'

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,

        isAuth: !state.isAuth,
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
//ACTION CREATOR

//THUNK
export const getAuthMe = () => {
  return (dispatch) => {
    usersAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        dispatch(
          setAuthUserData(
            data.data.id,
            data.data.email,
            data.data.login,
            usersAPI.getProfileUser(data.data.id).then((data) => {
              dispatch(setUserProfile(data))
            }),
          ),
        )
      } else alert('ERROR')
    })
  }
}
//THUNK

export default authReducer
