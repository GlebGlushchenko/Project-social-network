import { connect } from 'react-redux';

import Users from './Users';
import {
  followUserAC,
  unfollowUserAC,
  setUsersAC,
  setTotalUserCountAC,
  setCurrentPageAC,
} from '../redux/users-reduser';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispathcToProps = (dispatch) => {
  return {
    followUser: (index) => {
      dispatch(followUserAC(index));
    },
    unfollowUser: (index) => {
      dispatch(unfollowUserAC(index));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setTotalUserCount: (count) => {
      dispatch(setTotalUserCountAC(count));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
  };
};
const UsersContainer = connect(mapStateToProps, mapDispathcToProps)(Users);

export default UsersContainer;
