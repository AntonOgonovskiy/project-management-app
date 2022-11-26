import React from "react";
import { useSelector } from "react-redux";
import { boards } from "../types";

const Main = () => {
  const boards = useSelector((state: boards) => state.boards.boards);
  console.log(boards);
  return <div className="boards"></div>;
};

export default Main;
