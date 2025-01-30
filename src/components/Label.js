import React from "react";

const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block font-medium">
      {children}
    </label>
  );
};

export default Label;