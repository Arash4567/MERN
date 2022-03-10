import React, { useState } from "react";

function ToggleBtn() {
  const [toggleBtn, setToggleBtn] = useState(true);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setToggleBtn(!toggleBtn)}
      >
        TOGGLE
      </button>
      { toggleBtn ? <h1>ReactJS is wonderful!</h1> : null}
    </>
  );
}

export default ToggleBtn;
