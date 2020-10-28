const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_CURREN_PAGE = 'SET_CURREN_PAGE';
const SET_FETCH = 'SET_FETCH';

const initialState = {
  users: [],
  pageSize: 8,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.index ? { ...user, follow: true } : user,
        ),
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.index ? { ...user, follow: false } : user,
        ),
      };

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUserCount: action.count / 100,
      };
    case SET_CURREN_PAGE:
      return {
        ...state,
        currentPage: action.pageNumb,
      };
    case SET_FETCH:
      return {
        ...state,
        isFetching: action.fetch,
      };
    default:
      return state;
  }
};

export const followUserAC = (index) => ({ type: FOLLOW_USER, index });
export const unfollowUserAC = (index) => ({ type: UNFOLLOW_USER, index });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setTotalUserCountAC = (count) => ({ type: SET_TOTAL_USER_COUNT, count });
export const setCurrentPageAC = (pageNumb) => ({ type: SET_CURREN_PAGE, pageNumb });
export const setFetchingAC = (fetch) => ({ type: SET_FETCH, fetch });

export default usersReducer;
