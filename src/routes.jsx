import React from "react";
import { Redirect } from "react-router-dom";
import LoginModule from "src/modulesIlya/Login";
import RegisterModule from "./modulesIlya/Registration";
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
  {
    path: "/registration",
    component: RegisterModule
  }
];
