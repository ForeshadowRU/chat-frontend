import React from "react";
import NavBar from "./NavBar";
import "./index.sass";
export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
};
