import React, { Component } from "react";
import "styles/form.sass";
import "./login.sass";
import { Formik } from "formik";
import LoginForm from "components/Login";
import { login } from "redux/user/actions";
import { connect } from "react-redux";

class LoginModule extends Component {
  componentDidMount() {
    const { match } = this.props;
    console.log(match);
  }

  render() {
    return (
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={() => undefined}
      >
        {(props) => <LoginForm {...props} {...this.props} />}
      </Formik>
    );
  }
}

export default connect(null, {
  login,
})(LoginModule);
