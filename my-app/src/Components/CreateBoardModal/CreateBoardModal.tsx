import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./createBoardModal.css";
import { addBoard } from "../../API/api";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { decode, Token } from "../../types";

const CreateBoardModal = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");

  const token = useSelector((store: Token) => store.token.token);
  const jwt: decode = jwtDecode(token);
  const id = jwt.id;

  const closeModal = () => {
    const modal = document.querySelector(".modalWrapper");
    modal?.classList.add("unvise");
  };
  const createBoard = () => {
    const data = {
      title: title,
      users: descr,
      owner: id,
    };
    addBoard(data);
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
