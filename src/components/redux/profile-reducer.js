import { usersAPI, profileAPI } from '../../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const REMOVE_POST = 'REMOVE-POST'
const ADD_LIKE = 'ADD_LIKE'
const REMOVE_LIKE = 'REMOVE_LIKE'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const UPDATE_STATUS_TEXT = 'UPDATE_STATUS_TEXT'
const GET_STATUS = 'GET_STATUS'

const initialState = {
  postText: [
    { id: 1, text: 'Hi', like: 0 },
    { id: 2, text: 'Wellcome', like: 0 },
    { id: 3, text: 'lorem ipsum', like: 0 },
    { id: 4, text: 'Lorem Ipsum has been', like: 0 },
    { id: 5, text: 'Bye', like: 0 },
    { id: 6, text: 'lorem ipsum', like: 0 },
  ],
  newPostText: '',
  profile: null,

  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        postText: [...state.postText, { id: new Date(), text: action.textPost, like: 0 }],
        newPostText: '',
      }

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText }
    case REMOVE_POST:
      return {
        postText: [
          ...state.postText.filter((_, curId) => {
            if (action.index !== curId) {
              return true
            }
            return false
          }),
        ],
      }
    case ADD_LIKE:
      return {
        ...state,
        postText: [
          ...state.postText.map((post) =>
            post.id === action.id ? { ...post, like: post.like + 1 } : post,
          ),
        ],
      }
    case REMOVE_LIKE:
      return {
        ...state,
        postText: [
          ...state.postText.map((post) =>
            post.id === action.id ? { ...post, like: post.like - 1 } : post,
          ),
        ],
      }

    case SET_USER_PROFILE:
      return { ...state, profile: action.profileData }

    case GET_STATUS:
      return { ...state, status: action.status }

    default:
      return state
  }
}
//ACTION CREATOR
export const addPostAC = (textPost) => ({ type: ADD_POST, textPost })
export const updateNewPostTextAC = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText })
export const removePostAC = (index) => ({ type: REMOVE_POST, index })
export const addLikeAC = (id) => ({ type: ADD_LIKE, id })
export const removeLikeAC = (id) => ({ type: REMOVE_LIKE, id })
export const setUserProfile = (profileData) => ({ type: SET_USER_PROFILE, profileData })
export const getStatusAC = (status) => ({ type: GET_STATUS, status })
//ACTION CREATOR

//THUNK
export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data))
    })
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(({ data }) => {
      dispatch(getStatusAC(data))
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.data.resultCode === 0) {
        dispatch(getStatusAC(status))
      }
    })
  }
}

//THUNK

export default profileReducer
