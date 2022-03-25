import React from "react";
import TableHeader from "./TableHeader";
import TableItems from "./TableItems";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function TableList(props) {
  return (
    <>
      {props.friends.length > 0 ? (
        <>
          <h4 className="text-center">{props.caption}</h4>
          <table className="table table-hover table-bordered text-center">
            <TableHeader />
            {/* <TransitionGroup> */}
              <tbody>
                {props.friends.map((friend, index) => {
                  return (
                    // <CSSTransition timeout={1000}>
                      <TableItems
                        remove={props.remove}
                        rowNumber={index + 1}
                        friend={friend}
                        key={friend.id}
                      />
                    // </CSSTransition>
                  );
                })}
              </tbody>
            {/* </TransitionGroup> */}
          </table>
        </>
      ) : (
        <h1 className="text-danger text-center">Not Found!</h1>
      )}
    </>
  );
}

export default TableList;
