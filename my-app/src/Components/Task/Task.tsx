import { IconButton } from "@mui/material";
import React from "react";
import { task } from "../../types";
import "./Task.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";

const Task = (props: task) => {
  const dispatch = useDispatch();

  const deleteTask = async () => {
    dispatch({ type: "VISIBLE", payload: true });
    const body = {
      type: "task",
      board: props.boardId,
      column: props.columnId,
      task: props._id,
    };
    dispatch({ type: "DELETE", payload: body });
    dispatch({ type: "LOADED", payload: true });
  };

  return (
    <div className="taskWrapper">
      <p>{props.title}</p>
      <IconButton aria-label="delete" size="small" onClick={deleteTask}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default Task;
