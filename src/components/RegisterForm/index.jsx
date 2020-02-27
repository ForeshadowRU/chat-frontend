import React, { Component } from "react";

class RegisterForm extends Component {
  render() {
    const { handleChange, values, handleSubmit } = this.props;
    return (
      <form
        className="sign-up form"
        name="form-container"
        onSubmit={handleSubmit}
      >
        <h1 className="form__title">Create an account</h1>
        <h2 className="form__subtitle">Please, add your:</h2>
        <div className="form-container">
          <div className="form__block">
            <label className="form__item">Avatar</label>
            <button className="form__input_photo" tabIndex="1" />
            <label className="form__item">Firstname</label>
            <input
              className="form__input"
              name="firstname"
              onChange={handleChange}
              value={values.firstname}
              tabIndex="2"
            />
            <label className="form__item">Lastname</label>
            <input
              className="form__input"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              tabIndex="3"
            />
          </div>
          <div className="form__block">
            <label className="form__item">Username</label>
            <input
              className="form__input"
              name="username"
              onChange={handleChange}
              value={values.username}
              tabIndex="4"
            />
            <label className="form__item">E-mail</label>
            <input
              className="form__input"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              tabIndex="5"
            />
            <label className="form__item">Password</label>
            <input
              className="form__input"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              tabIndex="6"
            />
          </div>
        </div>
        <div className="form__footer">
          <input
            className="form__button"
            type="submit"
            tabIndex="7"
            value="Sign up"
          />
          <button
            className="form__button button_google"
            type="button"
            tabIndex="8"
            value="Sign up with Google"
          />
        </div>
      </form>
    );
  }
}

export default RegisterForm;
