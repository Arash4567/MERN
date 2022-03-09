import React, { useState } from "react";

function Counter() {
  const [sanagich, editor] = useState(0);
  function birgaoshir() {
    editor(sanagich + 10);
  }
  const birgakamaytir = () => {
    editor(sanagich - 1);
  };
  return (
    <>
      <div className="card">
        <div className="card-header">Counter</div>
        <div className="card-body">
          <h5 className="card-title">Sanagich: {sanagich}</h5>
          <button className="btn btn-success" onClick={() => birgaoshir()}>
            PLUS
          </button>
          <button
            className="btn btn-danger ms-1"
            onClick={() => birgakamaytir()}
          >
            MINUS
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
