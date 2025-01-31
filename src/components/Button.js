import React from "react";

const Button = ({ type, className, children }) => {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
};

export default Button;