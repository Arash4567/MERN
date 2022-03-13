import React from "react";

function TableHeader() {
  return (
    <thead className="bg-primary text-white">
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Hobby</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
