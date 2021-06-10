import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

export const withAuthRedirect = (Component) => {
  const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
  })
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />

      return <Component {...this.props} />
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedAuthRedirectComponent
}
