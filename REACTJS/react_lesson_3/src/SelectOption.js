import React, { useState } from "react";

function SelectOption() {
  const [selectValue, setValue] = useState("");
  return (
    <>
      <select
        id="tech"
        className="form-select mt-3"
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" defaultValue={''}>
          Select...
        </option>
        <option value="java">Java</option>
        <option value="scala">Scala</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
        <option value="reactjs">ReactJS</option>
        <option value="vuejs">VueJS</option>
      </select>
      <p className="lead mt-3">
        Select value: <strong>{selectValue}</strong>
      </p>
    </>
  );
}

export default SelectOption;
