/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { getPageArray } from "../../utils/pages";

export default function MyPagination({ totalPage, page, changePage }) {
  const pageArray = getPageArray(totalPage);
  return (
    <>
      <div className="d-flex justify-content-center">
        <ul className="pagination">
          {pageArray.map((i) => (
            <li className="page-item" key={i}>
              <a
                className={
                  page === i ? "page-link bg-primary text-white" : "page-link"
                }
                onClick={() => changePage(i)}
              >
                {i}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
