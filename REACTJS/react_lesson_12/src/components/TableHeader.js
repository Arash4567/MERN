import React from "react";

function TableHeader() {
  return (
    <thead className="bg-primary text-white">
      <tr>
        <th>No</th>
        <th>Title</th>
        <th>Body</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
