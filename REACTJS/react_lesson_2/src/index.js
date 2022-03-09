import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Counter from "./Counter";
import Navbar from "./Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <div className="container">
      <App />
      <Counter />
    </div>
  </React.StrictMode>,
  document.getElementById("app")
);
