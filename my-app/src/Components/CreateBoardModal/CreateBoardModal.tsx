import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./createBoardModal.css";
import { addBoard, addColumn, getColumns, getUserBoards } from "../../API/api";
import { GetId } from "../../Utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { modalProps, lang } from "../../types";
import { toastError, toastInfo } from "../../Toasts/toasts";
import { dict } from "../../Dictionary/Dict";

const CreateBoardModal = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const id = GetId();
  const dispatch = useDispatch();
  const props = useSelector((state: modalProps) => state.modalProps.props);
  const lang = useSelector((state: lang) => state.lang.value);

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
    if (boards !== 400) {
      dispatch({ type: "BOARD", payload: boards.data });
      dispatch({ type: "PROPS", payload: "" });
      closeModal();
      toastInfo(dict[lang as keyof typeof dict].toasts.boardCreate);
    } else {
      toastError(dict[lang as keyof typeof dict].toasts.badReques);
    }
  };

  const createTask = async () => {
    const id: string = localStorage.getItem("boardData") as string;
    const orderValue = await getColumns(id).then((resp) => resp.length);
    const data = {
      title: title,
      order: orderValue + 1,
    };
    const cols = await addColumn(id, data);
    dispatch({ type: "COLUMN", payload: cols });
    dispatch({ type: "PROPS", payload: "" });
    closeModal();
    toastInfo(dict[lang as keyof typeof dict].toasts.colCreate);
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
          label={dict[lang as keyof typeof dict].label.boardTitle}
        />
        {props === "board" && (
          <TextField
            autoComplete="off"
            style={{ marginBottom: "10px" }}
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
            required
            id="outlined-required"
            label={dict[lang as keyof typeof dict].label.boardDescr}
          />
        )}
        {props === "board" && (
          <Button variant="contained" color="primary" onClick={createBoard}>
            {dict[lang as keyof typeof dict].button.createBoard}
          </Button>
        )}
        {props === "task" && (
          <Button variant="contained" color="primary" onClick={createTask}>
            {dict[lang as keyof typeof dict].button.createCol}
          </Button>
        )}
      </form>
    </div>
  );
};

export default CreateBoardModal;
