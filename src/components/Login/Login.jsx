import React from 'react'
import { Redirect } from 'react-router'
import LoginForm from './LoginForm'
import loginMe from '../redux/auth-reducer'

const Login = ({ isAuth, loginMe, statusCode }) => {
  if (isAuth) return <Redirect to="/profile" />
  const onSubmit = (formData) => {
    loginMe(formData)

    console.log(formData)
  }

  return (
    <div>
      <LoginForm isAuth={isAuth} onSubmit={onSubmit} />
    </div>
  )
}

export default Login
