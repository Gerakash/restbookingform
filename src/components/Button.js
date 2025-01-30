import React from "react";

const Button = ({ type, className, children }) => {
  return (
    <button type={type} className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;