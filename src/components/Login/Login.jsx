import React from 'react'
import { Redirect } from 'react-router'
import LoginForm from './LoginForm'

const Login = ({ isAuth, loginMe }) => {
  if (isAuth) return <Redirect to="/profile" />

  const onSubmit = (formData) => {
    loginMe(formData)
  }

  return (
    <div>
      <LoginForm isAuth={isAuth} onSubmit={onSubmit} />
    </div>
  )
}

export default Login
