import { useSelector } from "react-redux";
import { getUserBoards } from "../API/api";
import { boards } from "../types";
import { GetId } from "../Utils/utils";

const Main = () => {
  const boardState = useSelector((state: boards) => state.boards.boards);
  const boards = boardState.length ? boardState : getUserBoards(GetId());
  console.log(boards);

  return <div className="boards"></div>;
};

export default Main;
