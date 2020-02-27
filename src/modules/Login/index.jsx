import React, { Component } from "react";
import "../styles/form.sass";
import "./login.sass";
import { Link } from "react-router-dom";

class LoginModule extends Component {
  render() {
    return (
      <form className="login form" name="form-container" method="POST">
        <h1 className="form__title">Welcome back!</h1>
        <h2 className="form__subtitle">We are glad to see you again</h2>
        <label className="form__item">
          E-mail
          <input className="form__input" type="email" tabIndex="1" />
        </label>
        <label className="form__item">
          Password
          <input className="form__input" type="password" tabIndex="2" />
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

export default LoginModule;
