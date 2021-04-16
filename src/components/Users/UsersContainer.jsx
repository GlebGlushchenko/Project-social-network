import React from 'react'
import { connect } from 'react-redux'

import {
  getUsersThunkCreator,
  getUserSelectPageThunkCreator,
  followUserThunkCreator,
  unFollowUserThunkCreator,
} from '../redux/users-reduser'
import Users from './Users'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    setDisabledBtn: state.usersPage.setDisabledBtn,
  }
}

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }
  onSelectedPage = ({ selected }) => {
    let page = selected + 1
    // this.props.getUsersThunkCreator(page, this.props.pageSize)
    this.props.getUserSelectPageThunkCreator(page, this.props.pageSize)
  }

  render() {
    return (
      <>
        <Users {...this} />
      </>
    )
  }
}

export default connect(mapStateToProps, {
  getUsersThunkCreator,
  getUserSelectPageThunkCreator,
  followUserThunkCreator,
  unFollowUserThunkCreator,
})(UsersContainer)
