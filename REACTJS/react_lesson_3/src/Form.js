import React, { useState } from "react";
import PasswordValidator from "./PasswordValidator";
import SelectOption from "./SelectOption";
import TextArea from "./TextArea";

function Form() {
  const [value, changeValue] = useState("");
  return (
    <>
      <h4>Form content</h4>
      <form>
        <label htmlFor="name">Enter name: </label>
        <input
          onChange={(e) => changeValue(e.target.value)}
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter..."
        />
      <p className="lead mt-3">Input value: <strong>{value}</strong></p>
       <SelectOption />
       <TextArea />
       <PasswordValidator />
      </form>
    </>
  );
}

export default Form;
