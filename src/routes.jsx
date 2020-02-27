import React from "react";
import { Redirect } from "react-router-dom";
import LoginModule from "modules/Login";
import RegisterModule from "./modules/Registration";
export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/login" />
    // component: () => <Redirect to="/registration" />
  },
  {
    path: "/login",
    component: LoginModule
    // path: "/registration",
    // component: RegisterModule
  }
];


