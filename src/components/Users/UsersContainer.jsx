import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  followUserAC,
  unfollowUserAC,
  setUsersAC,
  setTotalUserCountAC,
  setCurrentPageAC,
  setFetchingAC,
} from '../redux/users-reduser';
import Users from './Users';
import Preloader from '../../assets/util/Preloader';
import Loader from '../../assets/util/Loader';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
    setFetch: (fetch) => {
      dispatch(setFetchingAC(fetch));
    },
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setFetch(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);

        if (response.status === 200) {
          this.props.setFetch(false);
        }
      });
  }
  onSelectedPage = (page) => {
    this.props.setCurrentPage(page);
    this.props.setFetch(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items);

        this.props.setFetch(false);
      });
  };

  render() {
    return (
      <>
        <Users
          isFetching={this.props.isFetching}
          totalUserCount={this.props.totalUserCount}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          onSelectedPage={this.onSelectedPage}
          unfollowUser={this.props.unfollowUser}
          followUser={this.props.followUser}
          users={this.props.users}
        />
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispathcToProps)(UsersContainer);
