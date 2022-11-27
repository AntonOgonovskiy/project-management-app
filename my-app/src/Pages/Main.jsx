import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserBoards } from "../API/api";
import Board from "../Components/Board/Board";
import { GetId } from "../Utils/utils";

const Main = () => {
  const boards = useSelector((state) => state.boards.boards);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoad, setLoad] = useState(false);

  const request = async () => {
    setLoad(true);
    const boards = await getUserBoards(GetId());
    if (boards) {
      console.log("try");
      dispatch({ type: "BOARD", payload: boards });
      setLoad(false);
    } else {
      console.log("catch");
      localStorage.clear();
      dispatch({ type: "TOKEN", payload: "" });
      dispatch({ type: "LOGIN", payload: "" });
      navigate("/");
    }
  };

  useEffect(() => {
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boards.length]);

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
