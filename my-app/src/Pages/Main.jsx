import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserBoards } from "../API/api";
import Board from "../Components/Board/Board";
import { GetId } from "../Utils/utils";

const Main = () => {
  const boards = useSelector((state) => state.boards.boards);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoad = useSelector((state) => state.loading.value);

  const request = async () => {
    dispatch({ type: "ONLOAD", payload: true });
    const boards = await getUserBoards(GetId());
    if (boards) {
      dispatch({ type: "BOARD", payload: boards });
    } else {
      localStorage.clear();
      dispatch({ type: "TOKEN", payload: "" });
      dispatch({ type: "LOGIN", payload: "" });
      navigate("/");
    }
  };

  useEffect(() => {
    request();
    dispatch({ type: "LOADED", payload: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoad]);

  return (
    <div className="boards">
      {isLoad ? (
        <p>LOADING....</p>
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
