import React from "react";
import { Redirect } from "react-router-dom";
import LoginModule from "modules/Login";
import RegisterModule from "modules/Registration";
export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    component: LoginModule
  },
  { path: "/register", component: RegisterModule }
];
