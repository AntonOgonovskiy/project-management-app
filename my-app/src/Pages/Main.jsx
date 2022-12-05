import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserBoards } from "../API/api";
import Board from "../Components/Board/Board";
import { GetId } from "../Utils/utils";
import CircularProgress from "@mui/material/CircularProgress";
import { toastError } from "../Toasts/toasts";

const Main = () => {
  const boards = useSelector((state) => state.boards.boards);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoad = useSelector((state) => state.loading.value);

  const request = async () => {
    dispatch({ type: "LOADED", payload: true });
    const boards = await getUserBoards(GetId());
    if (boards.data) {
      dispatch({ type: "BOARD", payload: boards.data });
      dispatch({ type: "LOADED", payload: false });
    } else {
      toastError("Invalid Token");
      localStorage.clear();
      dispatch({ type: "TOKEN", payload: "" });
      dispatch({ type: "LOGIN", payload: "" });
      navigate("/");
    }
  };

  useEffect(() => {
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="boards">
      {isLoad === true ? (
        <CircularProgress style={{ margin: "0 auto", marginTop: "50px" }} />
      ) : (
        boards.map((board) => (
          <Board
            key={board._id}
            title={board.title}
            users={board.users}
            owner={board._id}
          />
        ))
      )}
    </div>
  );
};

export default Main;
