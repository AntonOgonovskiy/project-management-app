import jwtDecode from "jwt-decode";
import React from "react";
import { useSelector } from "react-redux";
import { getAllBoards } from "../API/api";
import { decode, Token } from "../types";

const Main = () => {
  const token = useSelector((store: Token) => store.token.token);
  const jwt: decode = jwtDecode(token);
  const id = jwt.id;

  const boards = getAllBoards(id);

  return <div className="boards"></div>;
};

export default Main;
