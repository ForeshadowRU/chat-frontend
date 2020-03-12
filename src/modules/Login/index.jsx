import React, { Component } from "react";
import "../styles/form.sass";
import "./login.sass";
import { Formik } from "formik";
import LoginForm from "components/Login";
import { login } from "redux/user/actions";
import { connect } from "react-redux";

class LoginModule extends Component {
  render() {
    return (
      <Formik
        initialValues={{ login: "", password: "" }}
        onSubmit={(values, actions) => {
          const { login } = this.props;
          login(values);
        }}
      >
        {props => <LoginForm {...props} />}
      </Formik>
    );
  }
}

export default connect(null, {
  login
})(LoginModule);
