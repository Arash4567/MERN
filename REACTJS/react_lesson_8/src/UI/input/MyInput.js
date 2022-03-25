import React from "react";
import "./css/MyInput.css";

function MyInput(props) {
  return <input {...props} className="form-control my-2" />;
}

export default MyInput;
