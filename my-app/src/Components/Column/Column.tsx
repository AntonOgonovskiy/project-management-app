import React from "react";
import { column } from "../../types";
import "./Column.css";

const Column = (props: column) => {
  return (
    <div className="columnWrapper">
      <p>{props.title}</p>
    </div>
  );
};

export default Column;
