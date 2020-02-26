import React, {Component} from "react";
import "./login.sass";


class LoginModule extends Component {
    render() {
        return (
            <form className="login-container" name="login-container" method="POST">
                <h1 className="login__title">Welcome back!</h1>
                <h2 className="login__subtitle">We are glad to see you again</h2>
                <label className="login__item">
                    E-mail
                </label>
                <input className="login__input" type="email" tabIndex="1"/>
                <label className="login__item">
                    Password
                </label>
                <input className="login__input" type="password" tabIndex="2"/>
                <input className="login__button" type="submit" tabIndex="3" value="Log in"/>
            </form>
        );
    }
}

export default LoginModule;

