import React from 'react'

import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfile } from '../redux/profile-reducer'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getProfile(userId)
  }

  render() {
    return <Profile {...this.props} profileData={this.props.profileData} />
  }
}

const mapStateToProps = (state) => ({
  profileData: state.profilePage.profile,
  userID: state.auth.userID,
})

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)
