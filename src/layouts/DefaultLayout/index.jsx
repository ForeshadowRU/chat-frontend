import React from "react";
import ServerSidebar from "./ServersBar";

export const DefaultLayout = props => {
  const { children } = props;
  return (
    <>
      <div></div>
      <ServerSidebar />
      {children}
    </>
  );
};
