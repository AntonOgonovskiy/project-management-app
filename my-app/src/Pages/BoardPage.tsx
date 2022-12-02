import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../API/api";
import { BoardData } from "../types";
import ReplyIcon from "@mui/icons-material/Reply";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [boardData, setData] = useState({});
  const data = useSelector((state: BoardData) => state.boardData.data);
  const id: string = data.owner
    ? (data.owner as string)
    : (localStorage.getItem("boardData") as string);

  const getData = async (id: string) => {
    dispatch({ type: "ONLOAD", payload: true });
    const resp = await getBoard(id);
    setData(resp);
    dispatch({ type: "LOADED", payload: false });
  };
  useEffect(() => {
    getData(id);
  }, []);
  console.log(boardData);

  return (
    <div className="boardPageWrapper">
      <div className="boardHeader">
        <div className="headerTitle">
          <Button
            variant="contained"
            startIcon={<ReplyIcon />}
            onClick={() => {
              navigate("/main");
            }}
          >
            Back
          </Button>
          <span className="boardTitle">{data.title}</span>
        </div>
        <p className="boardDescription">{data.users[0]}</p>
      </div>
      <div className="boardColumns"></div>
    </div>
  );
};

export default BoardPage;
