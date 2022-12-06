import React, { useEffect, useState } from "react";
import { column, Loading, task } from "../../types";
import "./Column.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { getTasks, updColumn } from "../../API/api";
import { dict } from "../../Dictionary/Dict";
import { lang } from "../../types";
import Task from "../Task/Task";

const Column = (props: column) => {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState(props);
  const [isChange, setChange] = useState(false);
  const [newTitle, setTitle] = useState(data.title);
  const lang = useSelector((state: lang) => state.lang.value);
  const isLoad = useSelector((state: Loading) => state.loading.value);
  const dispatch = useDispatch();

  const getListOfTasks = async () => {
    const task = await getTasks(data.boardId, data._id);
    setTasks(task);
  };

  const deleteColumn = async () => {
    dispatch({ type: "VISIBLE", payload: true });
    const body = { type: "column", board: data.boardId, column: data._id };
    dispatch({ type: "DELETE", payload: body });
  };

  const updateTitle = async () => {
    const body = { title: newTitle, order: data.order };
    const resp = await updColumn(data.boardId, data._id, body);
    setData(resp);
    setChange(false);
  };

  const openModal = () => {
    dispatch({ type: "LOADED", payload: true });
    dispatch({ type: "PROPS", payload: "task" });
    const modal = document.querySelector(".modalWrapper");
    modal?.classList.remove("unvise");
    const body = { type: "task", board: data.boardId, column: data._id };
    dispatch({ type: "DELETE", payload: body });
  };

  useEffect(() => {
    getListOfTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoad]);

  return (
    <div className="columnWrapper">
      <div className="columnTop">
        {isChange ? (
          <div className="columnNewTitle">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={newTitle}
              placeholder={dict[lang as keyof typeof dict].label.newTitle}
            />
            {newTitle.length >= 1 && <CheckIcon onClick={updateTitle} />}
            <CloseIcon onClick={() => setChange(false)} />
          </div>
        ) : (
          <div className="columnHeader">
            <p className="columnTitle" onClick={() => setChange(true)}>
              {data.title}
            </p>
            <DeleteIcon className="columnTitle" onClick={deleteColumn} />
          </div>
        )}
        <div className="taskList">
          {tasks.map((item: task) => (
            <Task
              _id={item._id}
              key={item._id}
              title={item.title}
              order={item.order}
              description={item.description}
              userId={item.userId}
              users={item.users}
              boardId={item.boardId}
              columnId={item.columnId}
            />
          ))}
        </div>
      </div>
      <Button
        style={{
          maxWidth: "150px",
          maxHeight: "30px",
          minWidth: "10px",
          minHeight: "30px",
          padding: "5px",
        }}
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={openModal}
      >
        <p className="columnBtn">
          {dict[lang as keyof typeof dict].button.addTask}
        </p>
      </Button>
      <div className="listItems">{tasks.length}</div>
    </div>
  );
};

export default Column;
