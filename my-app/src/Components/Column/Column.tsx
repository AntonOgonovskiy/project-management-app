import React from "react";
import { column } from "../../types";
import "./Column.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";

const Column = (props: column) => {
  const dispatch = useDispatch();

  const deleteColumn = async () => {
    dispatch({ type: "VISIBLE", payload: true });
    const body = { board: props.boardId, column: props._id };
    dispatch({ type: "DELETE", payload: body });

    // await removeColumn(props.boardId, props._id);
    // const cols = await getColumns(props.boardId);
    // dispatch({ type: "COLUMN", payload: cols });
    // dispatch({ type: "LOADED", payload: false });
  };

  return (
    <div className="columnWrapper">
      <div className="columnHeader">
        <p>{props.title}</p>
        <DeleteIcon style={{ cursor: "pointer" }} onClick={deleteColumn} />
      </div>
      <Button variant="outlined" startIcon={<AddIcon />}>
        Add task
      </Button>
    </div>
  );
};

export default Column;
