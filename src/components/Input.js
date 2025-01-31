import React from "react";

const Input = ({ type, id, name, value, onChange, required }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="input"
    />
  );
};

export default Input;