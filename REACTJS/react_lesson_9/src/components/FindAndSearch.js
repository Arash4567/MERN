import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

export default function FindAndSearch({ filter, setFilter }) {
  return (
    <>
      <div className="d-flex justify-content-end">
        <MyInput
          type="search"
          placeholder="Search by name..."
          value={filter.search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        />
        <MySelect
          value={filter.sort}
          onChange={(selected) => setFilter({ ...filter, sort: selected })}
          defaultValue={"Sorted By..."}
          options={[
            { value: "name", name: "By Name A-Z" },
            { value: "hobby", name: "By hobby" },
            { value: "age", name: "By Age" },
          ]}
        />
      </div>
    </>
  );
}
