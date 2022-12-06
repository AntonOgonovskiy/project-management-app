import { board } from "../../types";
import "./Board.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Board = (data: board) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id: string = data.owner as string;

  const deleteBoard = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    dispatch({ type: "VISIBLE", payload: true });
    const body = { type: "board", board: id };
    dispatch({ type: "DELETE", payload: body });
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
