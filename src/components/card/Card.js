import React from "react";

const Card = ({ className, children }) => {
  return <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>;
};

export default Card;