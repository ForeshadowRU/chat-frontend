import React, { Component } from "react";
import "../styles/form.sass";
import "./registration.sass";

class RegisterModule extends Component {
  render() {
    return (
      <form className="sign-up form" name="form-container">
        <h1 className="form__title">Create an account</h1>
        <h2 className="form__subtitle">Please, add your:</h2>
        <div className="form-container">
          <div className="form__block">
            <label className="form__item">Avatar</label>
            <button className="form__input_photo" tabIndex="1" />
            <label className="form__item">Firstname</label>
            <input className="form__input" type="firstname" tabIndex="2" />
            <label className="form__item">Lastname</label>
            <input className="form__input" type="lastname" tabIndex="3" />
          </div>
          <div className="form__block">
            <label className="form__item">Username</label>
            <input className="form__input" type="username" tabIndex="4" />
            <label className="form__item">E-mail</label>
            <input className="form__input" type="email" tabIndex="5" />
            <label className="form__item">Password</label>
            <input className="form__input" type="password" tabIndex="6" />
          </div>
        </div>
        <div className="form__footer">
          <input
            className="form__button"
            type="submit"
            tabIndex="7"
            value="Sign up"
          />
          <input
            className="form__button button_google"
            type="submit"
            tabIndex="8"
            value="Sign up with Google"
          />
        </div>
      </form>
    );
  }
}

export default RegisterModule;
