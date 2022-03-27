import React from "react";
import TableHeader from "./TableHeader";
import TableItems from "./TableItems";

function TableList(props) {
  return (
    <>
      {props.posts.length > 0 && !props.error ? (
        <>
          <h4 className="text-center">{props.caption}</h4>
          <table className="table table-hover table-bordered text-center">
            <TableHeader />
              <tbody>
                {props.posts.map((post, index) => {
                  return (
                      <TableItems
                        remove={props.remove}
                        post={post}
                        key={post.id}
                      />
                  );
                })}
              </tbody>
          </table>
        </>
      ) : (
        <h1 className="text-danger text-center">Not Found!</h1>
      )}
    </>
  );
}

export default TableList;
