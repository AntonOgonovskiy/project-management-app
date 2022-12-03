import { board } from "../../types";
import "./Board.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { getUserBoards, removeBoard } from "../../API/api";
import { useNavigate } from "react-router-dom";
import { GetId } from "../../Utils/utils";

const Board = (data: board) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id: string = data.owner as string;

  const deleteBoard = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    dispatch({ type: "LOADED", payload: true });
    await removeBoard(id);
    const boards = await getUserBoards(GetId());
    dispatch({ type: "BOARD", payload: boards });
    dispatch({ type: "LOADED", payload: false });
  };

  return (
    <div
      className="boardWrapper"
      onClick={() => {
        dispatch({ type: "BOARD_DATA", payload: data });
        localStorage.setItem("boardData", id);
        navigate("/board");
      }}
    >
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
