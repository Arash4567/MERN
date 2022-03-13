import React from "react";

function TableItems(props) {
  return (
    //   <tr>
    //     <td>{props.id}</td>
    //     <td>{props.season}</td>
    //     <td>{props.month}</td>
    //     <td>
    //       <button className="btn btn-outline-danger">Delete</button>
    //     </td>
    //   </tr>
    //   <tr>
    //     <td>{props.seasons.id}</td>
    //     <td>{props.seasons.name}</td>
    //     <td>{props.seasons.month}</td>
    //     <td>
    //       <button className="btn btn-outline-danger">Delete</button>
    //     </td>
    //   </tr>
      <tr>
        <td>{props.post.id}</td>
        <td>{props.post.name}</td>
        <td>{props.post.month}</td>
        <td>
          <button className="btn btn-outline-danger">Delete</button>
        </td>
      </tr>
  );
}

export default TableItems;
