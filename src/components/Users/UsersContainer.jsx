import { connect } from 'react-redux';

import Users from './Users';
import { followUserAC, unfollowUserAC, setUsersAC } from '../redux/users-reduser';

const mapStateToProps = (state) => {
  return { users: state.usersPage.users };
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
  };
};
const UsersContainer = connect(mapStateToProps, mapDispathcToProps)(Users);

export default UsersContainer;
