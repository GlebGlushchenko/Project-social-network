import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = ({ isAuth, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="login__form-wrapper">
      {isAuth && <h1>ВЫ УСПЕШНО АВТОРИЗОВАЛИСЬ</h1>}
      <h2 className="login__form-title">.Login</h2>
      <Field
        name="login"
        component="input"
        className="login__form-login"
        type="email"
        placeholder="Login"
      />
      <Field
        name="password"
        component="input"
        className="login__form-passwd"
        type="password"
        placeholder="Password"
      />
      <label>
        <Field
          component="input"
          name={'rememberMe'}
          className="login__form-check"
          type="checkbox"
        />
        Remember me
      </label>
      <button type="submit" className="login__form-btn">
        .LOGIN
      </button>

      {/* <input
            name={'password'}
            className="login__form-passwd"
            type="password"
            placeholder="Password"
          />

          <label>
            <input name={'rememberMe'} className="login__form-check" type="checkbox" />
            Remember me
          </label> */}

      {/* <button type="submit" className="login__form-btn">
            .LOGIN
          </button> */}
    </form>
  )
}

// LoginForm = reduxForm({
//   form: 'loginPage',
// })(LoginForm)
export default reduxForm({ form: 'loginForm' })(LoginForm)
