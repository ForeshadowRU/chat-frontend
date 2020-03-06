import React, {Component} from "react";
import {Link} from "react-router-dom";

class RegisterForm extends Component {
    render() {
        const {handleChange, values, handleSubmit} = this.props;
        return (
            <form
                className="sign-up form"
                name="form-container"
                onSubmit={handleSubmit}
            >
                <h1 className="form__title">Create an account</h1>
                <div className="form-container">
                    <div className="form__block">
                        <label className="form__item">Add Avatar
                            <button className="form__input_photo" tabIndex="1"/></label>
                        <label className="form__item">E-mail
                            <input
                                className="form__input"
                                name="email"
                                type="email"
                                onChange={handleChange}
                                value={values.email}
                                tabIndex="2"
                            /></label>
                        <p className="form__warn">something is wrong</p>
                        <label className="form__item">Password
                            <input
                                className="form__input"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                                tabIndex="3"
                            /></label>
                        <p className="form__warn">something is wrong</p>
                    </div>
                    <div className="form__block">
                        <label className="form__item">Username
                            <input
                                className="form__input"
                                name="username"
                                onChange={handleChange}
                                value={values.username}
                                tabIndex="4"
                            /></label>
                        <p className="form__warn">something is wrong</p>
                        <label className="form__item">Firstname
                            <input
                                className="form__input"
                                name="firstname"
                                onChange={handleChange}
                                value={values.firstname}
                                tabIndex="5"
                            /></label>
                        <p className="form__warn">something is wrong</p>
                        <label className="form__item">Lastname
                            <input
                                className="form__input"
                                name="lastname"
                                value={values.lastname}
                                onChange={handleChange}
                                tabIndex="6"
                            /></label>
                        <p className="form__warn">something is wrong</p>
                    </div>
                </div>
                <div className="form__footer">
                    <button
                        className="form__button"
                        tabIndex="7"
                        value="Sign up"
                    />
                    <button
                        className="form__button button_google"
                        tabIndex="8"
                        value="Sign up with Google"
                    />
                    <Link to="/login" className="form__link">Log in</Link>
                </div>
            </form>
        );
    }
}

export default RegisterForm;
