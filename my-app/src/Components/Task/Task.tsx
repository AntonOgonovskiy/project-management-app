import React from "react";
import { task } from "../../types";
import "./Task.css";

const Task = (props: task) => {
  return (
    <div className="taskWrapper">
      <p>{props.title}</p>
    </div>
  );
};

export default Task;
