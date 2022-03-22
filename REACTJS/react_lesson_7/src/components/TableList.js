import React from "react";
import TableHeader from "./TableHeader";
import TableItems from "./TableItems";

function TableList(props) {
  return (
    <>
      {props.friends.length > 0 ? (
        <>
          <h4 className="text-center">{props.caption}</h4>
          <table className="table table-hover table-bordered text-center">
            <TableHeader />
            <tbody>
              {props.friends.map((friend, index) => {
                return (
                  <TableItems
                    remove={props.remove}
                    rowNumber={index + 1}
                    friend={friend}
                    key={friend.id}
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
