// import React, { Component } from "react";
// import "../styles/form.sass";
// import "./login.sass";
// import { connect } from "react-redux";
//
// import { Formik } from "formik";
// import LoginForm from "components/LoginForm";
// import { login } from "redux/user/actions";
//
// class LoginModule extends Component {
//     submit = (values, options) => {
//         const { login } = this.props;
//         login(values);
//     };
//
//     render() {
//         return (
//             <Formik
//                 onSubmit={this.submit}
//                 initialValues={{
//                     password: "",
//                     email: ""
//                 }}
//             >
//                 {props => <LoginForm {...props} />}
//             </Formik>
//         );
//     }
// }
//
// export default connect(state => ({}), {
//     login: login
// })(LoginModule);
