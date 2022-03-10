import React, { useState } from "react";

function TextArea() {
  const [value, changeValue] = useState("");
  return (
    <>
      <textarea
        className="form-control"
        placeholder="Enter your comment..."
        onChange={(e) => {
          changeValue(e.target.value);
        }}
      ></textarea>
      <p className="lead mt-3">
        Textarea value: <strong>{value}</strong>
      </p>
    </>
  );
}

export default TextArea;
