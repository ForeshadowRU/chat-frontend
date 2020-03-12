import React, { Component } from "react";
import { Link } from "react-router-dom";
class LoginForm extends Component {
  render() {
    const { handleChange, values, handleSubmit } = this.props;
    return (
      <form
        className="login form"
        name="form-container"
        onSubmit={handleSubmit}
      >
        <h1 className="form__title">Welcome back!</h1>
        <h2 className="form__subtitle">We are glad to see you again</h2>
        <label className="form__item">
          E-mail
          <input
            className="form__input"
            type="email"
            tabIndex="1"
            onChange={handleChange}
            name="login"
            value={values.login}
          />
        </label>
        <label className="form__item">
          Password
          <input
            className="form__input"
            type="password"
            tabIndex="2"
            onChange={handleChange}
            value={values.password}
            name="password"
          />
        </label>
        <button className="form__button" tabIndex="3">
          Log in
        </button>
        <button className="form__button button_google" tabIndex="4">
          Log in with Google
        </button>
        <p className="form__text">New to ShadowChat?</p>
        <Link to="/register" className="form__link">
          Create an account
        </Link>
      </form>
    );
  }
}

export default LoginForm;
