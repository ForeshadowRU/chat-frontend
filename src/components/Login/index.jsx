import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class LoginForm extends Component {
  success = (response) => {
    const { login } = this.props;
    login(response.tokenId);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        className="login form"
        name="form-container"
        onSubmit={handleSubmit}
      >
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_ID}
          render={(renderProps) => (
            <button
              className="form__button button_google"
              tabIndex="4"
              type="button"
              {...renderProps}
            >
              Log in with Google
            </button>
          )}
          onSuccess={this.success}
          onFailure={() => undefined}
        />

        {/* <p className="form__text">New to ShadowChat?</p>
        <Link to="/register" className="form__link">
          Create an account
        </Link> */}
      </form>
    );
  }
}

export default LoginForm;
