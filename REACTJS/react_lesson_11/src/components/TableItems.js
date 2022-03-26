import React from "react";

function TableItems(props) {
  return (
    <tr className="align-middle">
      <td>{props.rowNumber}</td>
      <td>{props.post.title}</td>
      <td>{props.post.body}</td>
      <td>
        <button
          className="btn btn-outline-danger rounded-circle"
          onClick={() => props.remove(props.post)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default TableItems;
