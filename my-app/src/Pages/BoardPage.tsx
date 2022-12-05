import { useDispatch, useSelector } from "react-redux";
import { getBoard, getColumns } from "../API/api";
import { BoardData, column, columnList, Loading } from "../types";
import ReplyIcon from "@mui/icons-material/Reply";
import { Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Column from "../Components/Column/Column";
import { toastError } from "../Toasts/toasts";

const BoardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoad = useSelector((state: Loading) => state.loading.value);
  const data = useSelector((state: BoardData) => state.boardData.data);
  const columnsList = useSelector(
    (state: columnList) => state.columnList.columns
  );
  const [boardData, setData] = useState({} as BoardData);
  const [columns, setColumns] = useState([]);
  const id: string = localStorage.getItem("boardData") as string;

  const getData = async (id: string) => {
    dispatch({ type: "LOADED", payload: true });
    const resp = await getBoard(id);
    if (resp.status === 200) {
      const columns = await getColumns(id);
      setColumns(columns);
      setData(resp.data);
      dispatch({ type: "LOADED", payload: false });
    } else if (resp === 404) {
      toastError("Board Not Found");
      localStorage.clear();
      dispatch({ type: "TOKEN", payload: "" });
      dispatch({ type: "LOGIN", payload: "" });
      navigate("/");
    }
  };

  useEffect(() => {
    getData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnsList]);

  const openModal = () => {
    dispatch({ type: "PROPS", payload: "task" });
    const modal = document.querySelector(".modalWrapper");
    modal?.classList.remove("unvise");
  };

  return (
    <div className="boardPageWrapper">
      <div className="boardHeader">
        <div className="headerButtons">
          <Button
            variant="contained"
            startIcon={<ReplyIcon />}
            onClick={() => {
              navigate("/main");
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: "10px" }}
            onClick={openModal}
          >
            <AddTaskIcon />
          </Button>
        </div>
        {isLoad === true ? (
          <CircularProgress style={{ margin: "0 auto", marginTop: "50px" }} />
        ) : (
          <div style={{ margin: "10px 0" }}>
            <span className="boardTitle">
              {data.title ? data.title : boardData.title}
            </span>
            <p className="boardDescription">
              {data.users ? data.users : boardData.users}
            </p>
          </div>
        )}
      </div>
      <div className="boardColumns">
        {isLoad === true
          ? ""
          : columns.map((item: column) => (
              <Column
                key={item._id}
                title={item.title}
                boardId={item.boardId}
                order={item.order}
                _id={item._id}
              />
            ))}
      </div>
    </div>
  );
};

export default BoardPage;
