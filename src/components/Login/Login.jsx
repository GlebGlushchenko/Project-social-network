import React from 'react';

const Login = () => {
  return (
    <div className="login__form-wrapper">
      <h2 className="login__form-title">Login</h2>
      <input className="login__form-login" type="text" placeholder="Login" />
      <input className="login__form-passwd" type="text" placeholder="Password" />
      <label>
        <input className="login__form-check" type="checkbox" />
        Rermember me
      </label>

      <button className="login__form-btn">Login</button>
    </div>
  );
};

export default Login;
