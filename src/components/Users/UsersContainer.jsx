import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  followUser,
  unfollowUser,
  setUsers,
  setTotalUserCount,
  setCurrentPage,
  setFetching,
} from '../redux/users-reduser';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        { withCredentials: true, headers: { 'API-KEY': '45414e19-d78d-4b5b-aaf5-666ee2401d0a' } },
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);

        if (response.status === 200) {
          this.props.setFetching(false);
        }
      });
  }
  onSelectedPage = ({ selected }) => {
    let page = selected + 1;
    this.props.setCurrentPage(page);
    this.props.setFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
        { withCredentials: true, headers: { 'API-KEY': '45414e19-d78d-4b5b-aaf5-666ee2401d0a' } },
      )
      .then((response) => {
        this.props.setUsers(response.data.items);

        this.props.setFetching(false);
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

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setTotalUserCount,
  setCurrentPage,
  setFetching,
})(UsersContainer);
