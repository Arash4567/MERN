import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Notification from "./Notification";
import Form from "./Form";
import ToggleBtn from "./ToggleBtn";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <App />
      <Notification />
      <hr />
      <div className="w-50 mx-auto p-3 shadow rounded">
        <Form />
      </div>
      <hr />
      <ToggleBtn />
    </div>
  </React.StrictMode>,
  document.getElementById("app")
);
