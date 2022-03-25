import React from "react";
import "./css/MyButton.css";

function MyButton({ children, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}

export default MyButton;
