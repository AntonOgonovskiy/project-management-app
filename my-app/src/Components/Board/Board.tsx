import { board } from "../../types";
import "./Board.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { removeBoard } from "../../API/api";

const Board = (data: board) => {
  const dispatch = useDispatch();

  const deleteBoard = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    dispatch({ type: "ONLOAD", payload: true });
    await removeBoard(data.owner);
  };

  return (
    <div className="boardWrapper" onClick={() => console.log(data.owner)}>
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
