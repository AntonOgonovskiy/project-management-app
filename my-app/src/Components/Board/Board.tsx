import React from "react";
import { board } from "../../types";
import "./Board.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { getUserBoards, removeBoard } from "../../API/api";
import { GetId } from "../../Utils/utils";

const Board = (data: board) => {
  const dispatch = useDispatch();

  const deleteBoard = async () => {
    await removeBoard(data.owner);
    const boards = await getUserBoards(GetId());
    dispatch({ type: "BOARD", payload: boards });
  };

  return (
    <div className="boardWrapper">
      <div className="boardHeader">
        <p className="boardTitle">{data.title}</p>
        <p>{data.users}</p>
      </div>
      <div className="deleteBoardIcon" onClick={deleteBoard}>
        <DeleteForeverIcon />
      </div>
    </div>
  );
};

export default Board;
