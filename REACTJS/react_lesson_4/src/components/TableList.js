import React from "react";
import TableItems from "./TableItems";

function TableList(props) {
  return (
    <tbody>
      {/* <TableItems id={1} season={"Summer"} month={3} /> */}
      {/* <TableItems seasons={{ id: 2, name: "Spring", month: 4 }} /> */}
      {props.posts.map((post) => {
        return <TableItems post={post} key={post.id}/>;
      })}
    </tbody>
  );
}

export default TableList;
