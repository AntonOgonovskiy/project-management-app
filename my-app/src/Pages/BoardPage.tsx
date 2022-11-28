import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getBoard } from "../API/api";
import { BoardData } from "../types";

const BoardPage = () => {
  const data = useSelector((state: BoardData) => state.boardData.data);
  const id: string = data.owner
    ? (data.owner as string)
    : (localStorage.getItem("boardData") as string);

  const getData = async (id: string) => {
    await getBoard(id);
  };

  useEffect(() => {
    console.log(getData(id));
  });
  return <div></div>;
};

export default BoardPage;
