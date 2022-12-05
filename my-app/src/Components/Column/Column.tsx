import React, { useState } from "react";
import { column } from "../../types";
import "./Column.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { updColumn } from "../../API/api";

const Column = (props: column) => {
  const [data, setData] = useState(props);
  const [isChange, setChange] = useState(false);
  const [newTitle, setTitle] = useState(data.title);

  const dispatch = useDispatch();

  const deleteColumn = async () => {
    dispatch({ type: "VISIBLE", payload: true });
    const body = { type: "column", board: data.boardId, column: data._id };
    dispatch({ type: "DELETE", payload: body });
  };
  const updateTitle = async () => {
    const body = { title: newTitle, order: data.order };
    const resp = await updColumn(data.boardId, data._id, body);
    setData(resp);
    setChange(false);
  };

  return (
    <div className="columnWrapper">
      {isChange ? (
        <div className="columnNewTitle">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={newTitle}
            placeholder={"enter new title"}
          />
          {newTitle.length >= 1 && <CheckIcon onClick={updateTitle} />}
          <CloseIcon onClick={() => setChange(false)} />
        </div>
      ) : (
        <div className="columnHeader">
          <p style={{ cursor: "pointer" }} onClick={() => setChange(true)}>
            {data.title}
          </p>
          <DeleteIcon style={{ cursor: "pointer" }} onClick={deleteColumn} />
        </div>
      )}
      <Button variant="outlined" startIcon={<AddIcon />}>
        Add task
      </Button>
    </div>
  );
};

export default Column;
