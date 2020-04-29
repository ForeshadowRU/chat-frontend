import React from "react";
import "./index.sass";
function Spoiler(props) {
  const { title, children } = props;

  return (
    <details className="spoiler">
      <summary>{title}</summary>
      {children}
    </details>
  );
}

Spoiler.propTypes = {};

export default Spoiler;
