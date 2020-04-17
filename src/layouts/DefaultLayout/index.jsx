import React from "react";

export const DefaultLayout = props => {
  const { children } = props;
  return (
    <>
      <div className="layout-container">{children}</div>
    </>
  );
};
