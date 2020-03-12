import React, { Component } from "react";
import "../styles/form.sass";
import "./login.sass";
import { Formik } from "formik";
import LoginForm from "components/Login";

class LoginModule extends Component {
  render() {
    return (
      <Formik initialValues={{ login: "", password: "" }} onSubmit={}>
        {props => <LoginForm {...props} />}
      </Formik>
    );
  }
}

export default connect(null, {})(LoginModule);
