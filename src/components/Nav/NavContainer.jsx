import React from 'react'
import { connect } from 'react-redux'
import { getAuthMe } from '../redux/auth-reducer'

import Nav from './Nav'

class NavContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthMe()
  }
  render() {
    return <Nav {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, { getAuthMe })(NavContainer)
