import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

const Login = () => {
  const validationsSchema = yup.object().shape({
    password: yup.string().typeError('Должна быть строка').required('Обязательна для заполнения'),
    login: yup.string().email('Введите Login').required('Обязательна для заполнения'),
  })

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validateOnBlur
      onSubmit={(data) => {
        console.log(data)
      }}
      validationSchema={validationsSchema}>
      {(props) => {
        return (
          <form onSubmit={props.handleSubmit} className="login__form-wrapper">
            <h2 className="login__form-title">.Login</h2>
            <input
              name={'login'}
              onChange={props.handleChange}
              value={props.values.login}
              className="login__form-login"
              type="email"
              placeholder="Login"
            />
            {props.touched.login && props.errors.login && (
              <p className="form__error">{props.errors.login}</p>
            )}
            <input
              name={'password'}
              onChange={props.handleChange}
              value={props.values.password}
              className="login__form-passwd"
              type="password"
              placeholder="Password"
            />
            {props.touched.password && props.errors.password && (
              <p className="form__error">{props.errors.password}</p>
            )}

            <label>
              <input className="login__form-check" type="checkbox" />
              Rermember me
            </label>

            <button
              disabled={!props.isValid && !props.dirty}
              type="submit"
              className="login__form-btn">
              Login
            </button>
          </form>
        )
      }}
    </Formik>
  )
}

export default Login
