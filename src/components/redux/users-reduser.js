import { usersAPI } from '../../api/api'

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_CURREN_PAGE = 'SET_CURREN_PAGE'
const SET_FETCH = 'SET_FETCH'
const SET_DISABLED_BTN = 'SET_DISABLED_BTN'

const initialState = {
  users: [],
  pageSize: 8,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  setDisabledBtn: [],
}
console.log(initialState.setDisabledBtn)

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.index ? { ...user, followed: true } : user,
        ),
      }
    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.index ? { ...user, followed: false } : user,
        ),
      }

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      }
    }
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUserCount: action.count,
      }
    case SET_CURREN_PAGE:
      return {
        ...state,
        currentPage: action.pageNumb,
      }
    case SET_FETCH:
      return {
        ...state,
        isFetching: action.fetch,
      }
    case SET_DISABLED_BTN:
      return {
        ...state,
        setDisabledBtn: action.fetch
          ? [...state.setDisabledBtn, action.userId]
          : state.setDisabledBtn.filter((id) => id != action.userId),
      }
    default:
      return state
  }
}

//ACTION CREATOR
export const followUser = (index) => ({ type: FOLLOW_USER, index })
export const unfollowUser = (index) => ({ type: UNFOLLOW_USER, index })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalUserCount = (count) => ({ type: SET_TOTAL_USER_COUNT, count })
export const setCurrentPage = (pageNumb) => ({ type: SET_CURREN_PAGE, pageNumb })
export const setFetching = (fetch) => ({ type: SET_FETCH, fetch })
export const setDisabledBtnAC = (fetch, userId) => ({ type: SET_DISABLED_BTN, fetch, userId })
//ACTION CREATOR

//Thunk
export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setFetching(true))

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items))
      dispatch(setTotalUserCount(data.totalCount))
      if (data.status === 200) {
        dispatch(setFetching(false))
      }
    })
  }
}

export const getUserSelectPageThunkCreator = (page, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(page))
    dispatch(setFetching(true))
    usersAPI.getUsers(page, pageSize).then((data) => {
      dispatch(setUsers(data.items))
      dispatch(setFetching(false))
    })
  }
}
export const followUserThunkCreator = (usersId, index) => {
  return (dispatch) => {
    dispatch(setDisabledBtnAC(true, usersId))
    usersAPI.getFollow(index).then((response) => {
      if (!response.data.resultCode) {
        dispatch(followUser(index))
      }
      dispatch(setDisabledBtnAC(false, usersId))
    })
  }
}

export const unFollowUserThunkCreator = (usersId, index) => {
  return (dispatch) => {
    dispatch(setDisabledBtnAC(true, usersId))
    usersAPI.getUnFollow(index).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowUser(index))
      }
      dispatch(setDisabledBtnAC(false, usersId))
    })
  }
}

//Thunk

export default usersReducer
