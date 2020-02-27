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
        <label className="form__item">E-mail</label>
        <input className="form__input" type="email" tabIndex="1" />
        <label className="form__item">Password</label>
        <input className="form__input" type="password" tabIndex="2" />
        <input
          className="form__button"
          type="submit"
          tabIndex="3"
          value="Log in"
        />
        <input
          className="form__button button_google"
          type="submit"
          tabIndex="4"
          value="Log in with Google"
        />
        <p className="form__text">New to ShadowChat?</p>
        <Link to="/register" className="form__link">
          Create an account
        </Link>
      </form>
    );
  }
}

export default LoginModule;
