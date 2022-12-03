import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./createBoardModal.css";
import { addBoard, addColumn, getColumns, getUserBoards } from "../../API/api";
import { GetId } from "../../Utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { modalProps } from "../../types";

const CreateBoardModal = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const id = GetId();
  const dispatch = useDispatch();
  const props = useSelector((state: modalProps) => state.modalProps.props);

  const closeModal = () => {
    const modal = document.querySelector(".modalWrapper");
    modal?.classList.add("unvise");
    setDescr("");
    setTitle("");
    dispatch({ type: "PROPS", payload: "" });
  };

  const createBoard = async () => {
    const data = {
      title: title,
      users: descr,
      owner: id,
    };
    await addBoard(data);
    const boards = await getUserBoards(GetId());
    dispatch({ type: "BOARD", payload: boards });
    dispatch({ type: "PROPS", payload: "" });
    closeModal();
  };

  const createTask = async () => {
    const id: string = localStorage.getItem("boardData") as string;
    const data = {
      title: title,
      order: 0,
    };
    await addColumn(id, data);
    const columns = await getColumns(id);
    console.log(columns);
    dispatch({ type: "PROPS", payload: "" });
    closeModal();
  };

  return (
    <div className="modalWrapper unvise">
      <form className="createBoardWrapper " action="registration">
        <CloseIcon onClick={closeModal} className="closeModal" />
        <TextField
          autoComplete="off"
          style={{ marginBottom: "10px" }}
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          id="outlined-required"
          label="Title"
        />
        {props === "board" && (
          <TextField
            autoComplete="off"
            style={{ marginBottom: "10px" }}
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
            required
            id="outlined-required"
            label="Description"
          />
        )}
        {props === "board" && (
          <Button variant="contained" color="primary" onClick={createBoard}>
            Create Board
          </Button>
        )}
        {props === "task" && (
          <Button variant="contained" color="primary" onClick={createTask}>
            Create Task
          </Button>
        )}
      </form>
    </div>
  );
};

export default CreateBoardModal;
