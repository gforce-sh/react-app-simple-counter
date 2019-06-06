import React from "react";
import "../styles/Display.css";

const Display = ({ count, className }) => {
  return <div className={className}>{count}</div>;
};

export default Display;
