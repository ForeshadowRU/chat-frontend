import React from "react";
import PropTypes from "prop-types";
import "./index.sass";
function Spoiler(props) {
  const { title, children, open } = props;

  return (
    <details className="spoiler">
      <summary>{title}</summary>
      {children}
    </details>
  );
}

Spoiler.propTypes = {};

export default Spoiler;
