import React, { Component } from "react";
import "../styles/form.sass";
import "./registration.sass";
import { connect } from "react-redux";

import { Formik } from "formik";
import RegisterForm from "components/Register";
import { register } from "redux/user/actions";

class RegisterModule extends Component {
  submit = (values, options) => {
    const { register } = this.props;
    register(values);
  };

  render() {
    return (
      <Formik
        onSubmit={this.submit}
        initialValues={{
          firstname: "",
          lastname: "",
          username: "",
          password: "",
          email: ""
        }}
      >
        {props => <RegisterForm {...props} />}
      </Formik>
    );
  }
}

export default connect(state => ({}), {
  register: register
})(RegisterModule);
