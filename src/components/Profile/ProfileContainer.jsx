import React from 'react'

import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfile, getStatus, updateStatus } from '../redux/profile-reducer'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.userId
    if (!id) {
      id = 9038
    }
    this.props.getProfile(id)
    this.props.getStatus(id)
  }

  render() {
    return <Profile {...this.props} profileData={this.props.profileData} />
  }
}

const mapStateToProps = (state) => ({
  profileData: state.profilePage.profile,
  userID: state.auth.userID,
  status: state.profilePage.status,
})

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)
