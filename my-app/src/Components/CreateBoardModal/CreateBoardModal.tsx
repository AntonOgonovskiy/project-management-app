import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./createBoardModal.css";
import {
  addBoard,
  addColumn,
  addTask,
  getColumns,
  getUserBoards,
} from "../../API/api";
import { GetId } from "../../Utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { modalProps, lang, remove } from "../../types";
import { toastError, toastInfo } from "../../Toasts/toasts";
import { dict } from "../../Dictionary/Dict";

const CreateBoardModal = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const id = GetId();
  const dispatch = useDispatch();
  const props = useSelector((state: modalProps) => state.modalProps.props);
  const lang = useSelector((state: lang) => state.lang.value);
  const idData = useSelector((state: remove) => state.dataRemove.value);

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

  const createCol = async () => {
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

  const createTask = async () => {
    const userId = GetId() as string;
    const data = {
      title: title,
      order: 0,
      description: descr,
      userId: userId,
      users: [],
    };
    await addTask(idData.board, idData.column, data);
    dispatch({ type: "PROPS", payload: "" });
    dispatch({ type: "DELETE", payload: "" });
    closeModal();
    dispatch({ type: "LOADED", payload: false });
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
        {(props === "board" || props === "task") && (
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
        {props === "col" && (
          <Button variant="contained" color="primary" onClick={createCol}>
            {dict[lang as keyof typeof dict].button.createCol}
          </Button>
        )}
        {props === "task" && (
          <Button variant="contained" color="primary" onClick={createTask}>
            {dict[lang as keyof typeof dict].button.createTask}
          </Button>
        )}
      </form>
    </div>
  );
};

export default CreateBoardModal;
