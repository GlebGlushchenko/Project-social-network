import userAvatar from '../../assets/img/user.png';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [],
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
        users: [...state.users, ...action.users],
      };
    }
    default:
      return state;
  }
};

export const followUserAC = (index) => ({ type: FOLLOW_USER, index });
export const unfollowUserAC = (index) => ({ type: UNFOLLOW_USER, index });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
