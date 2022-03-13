import React from "react";
import TableItems from "./TableItems";

function TableList(props) {
  return (
    <tbody>
      {props.friends.map((friend, index) => {
        return <TableItems rowNumber={index + 1} friend={friend} key={friend.id} />;
      })}
    </tbody>
  );
}

export default TableList;
