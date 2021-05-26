import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { loginMe } from '../redux/auth-reducer'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/AuthRedirect'

const LoginContainer = (props) => {
  return <Login {...props} />
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  statusCode: state.auth.statusCode,
})

export default connect(mapStateToProps, { loginMe })(LoginContainer)
