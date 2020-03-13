import React from "react";
import ServerSidebar from "./ServersBar";

export const DefaultLayout = props => {
  const { children } = props;
  return (
    <>
      <ServerSidebar />
      <div className="layout-container">{children}</div>
    </>
  );
};
