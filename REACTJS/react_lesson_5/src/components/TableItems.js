import React from "react";

function TableItems(props) {
  return (
      <tr className="align-middle">
        <td>{props.rowNumber}</td>
        <td>{props.friend.name}</td>
        <td>{props.friend.age}</td>
        <td>{props.friend.hobby}</td>
        <td>
          <button className="btn btn-outline-danger rounded-circle"><i className="fa fa-trash"></i></button>
        </td>
      </tr>
  );
}

export default TableItems;
