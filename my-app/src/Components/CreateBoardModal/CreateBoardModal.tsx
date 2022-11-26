import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./createBoardModal.css";
import { addBoard, getAllBoards } from "../../API/api";
import { GetId } from "../../Utils/utils";
import { useDispatch } from "react-redux";

const CreateBoardModal = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const id = GetId();
  const dispatch = useDispatch();

  const closeModal = () => {
    const modal = document.querySelector(".modalWrapper");
    modal?.classList.add("unvise");
    setDescr("");
    setTitle("");
  };

  const createBoard = async () => {
    const data = {
      title: title,
      users: descr,
      owner: id,
    };
    await addBoard(data);
    const boards = await getAllBoards(GetId());
    dispatch({ type: "BOARD", payload: boards });
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
          label="Board Title"
        />
        <TextField
          autoComplete="off"
          style={{ marginBottom: "10px" }}
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
          required
          id="outlined-required"
          label="Board Description"
        />
        <Button variant="contained" color="primary" onClick={createBoard}>
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateBoardModal;
