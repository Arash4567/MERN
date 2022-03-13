import React from "react";

function MySelect({ options, defaultValue, onChange, value }) {
  return (
    <select
      className="form-select w-25 my-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{defaultValue}</option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
}

export default MySelect;
