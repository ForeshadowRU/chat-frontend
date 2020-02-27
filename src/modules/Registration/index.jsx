import React, {Component} from "react";
import "../styles/form.sass";
import "./registration.sass";

class RegisterModule extends Component {

    render() {
        return (
            <form className="sign-up form" name="form-container" method="POST">
                <h1 className="form__title">Create an account</h1>
                <div className="form-container">
                    <div className="form__block">
                        <label className="form__item">
                            Add Avatar
                            <button className="form__input_photo" tabIndex="1"/></label>
                        <label className="form__item">
                            E-mail
                            <input className="form__input" type="email" tabIndex="2" required/></label>
                        <p className="form__warn">something is wrong</p>
                        <label className="form__item">
                            Password
                            <input className="form__input" type="password" tabIndex="3" required/></label>
                        <p className="form__warn">something is wrong</p>
                    </div>
                    <div className="form__block">
                        <label className="form__item">
                            Username
                            <input className="form__input" type="text" tabIndex="4" required/></label>
                        <p className="form__warn">something is wrong</p>
                        <label className="form__item">
                            Firstname
                            <input className="form__input" type="text" tabIndex="5" required/></label>
                        <p className="form__warn">something is wrong</p>
                        <label className="form__item">
                            Lastname
                            <input className="form__input" type="text" tabIndex="6" required/></label>
                        <p className="form__warn">something is wrong</p>
                    </div>
                </div>
                <div className="form__footer">
                    <button className="form__button" tabIndex="7">Sign up</button>
                    <button className="form__button button_google" tabIndex="8">Sign up with Google</button>
                    <a href="../login" className="form__link">Log in</a>
                </div>

            </form>
        );
    }
}

export default RegisterModule;

