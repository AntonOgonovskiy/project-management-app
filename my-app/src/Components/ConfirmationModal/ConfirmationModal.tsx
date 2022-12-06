import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./ConfirmationModal.css";
import { remove, Loading, lang } from "../../types";
import {
  deleteUser,
  getColumns,
  getUserBoards,
  removeBoard,
  removeColumn,
  removeTasks,
} from "../../API/api";
import { GetId } from "../../Utils/utils";
import { toastInfo, toastSuccess } from "../../Toasts/toasts";
import { useNavigate } from "react-router-dom";
import { dict } from "../../Dictionary/Dict";

const ConfirmationModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const removeData = useSelector((state: remove) => state.dataRemove.value);
  const isLoad = useSelector((state: Loading) => state.visibility.value);
  const lang = useSelector((state: lang) => state.lang.value);

  const yes = async () => {
    if (removeData.type === "column") {
      await removeColumn(removeData.board, removeData.column);
      const cols = await getColumns(removeData.board);
      dispatch({ type: "COLUMN", payload: cols });
      toastInfo(dict[lang as keyof typeof dict].toasts.columnDel);
    } else if (removeData.type === "board") {
      await removeBoard(removeData.board);
      const boards = await getUserBoards(GetId());
      dispatch({ type: "BOARD", payload: boards.data });
      toastInfo(dict[lang as keyof typeof dict].toasts.boardDel);
    } else if (removeData.type === "profile") {
      deleteUser(removeData.board);
      dispatch({ type: "TOKEN", payload: "" });
      dispatch({ type: "LOGIN", payload: "" });
      localStorage.clear();
      toastSuccess(dict[lang as keyof typeof dict].toasts.userDel);
      navigate("/");
    } else if (removeData.type === "task") {
      await removeTasks(
        removeData.board,
        removeData.column,
        removeData.task as string
      );
      dispatch({ type: "LOADED", payload: false });
    }
    dispatch({ type: "VISIBLE", payload: false });
    dispatch({ type: "DELETE", payload: "" });
  };

  const no = async () => {
    dispatch({ type: "VISIBLE", payload: false });
    dispatch({ type: "DELETE", payload: "" });
    dispatch({ type: "LOADED", payload: false });
  };

  return (
    <>
      {isLoad && (
        <div className="confirmationWrapper">
          <div className="confirmationBox">
            <p className="confirmationTitle">
              {dict[lang as keyof typeof dict].modalConfirm}
            </p>
            <div className="confirmationButtons">
              <Button
                variant="contained"
                color="success"
                id="yes"
                onClick={yes}
              >
                {dict[lang as keyof typeof dict].button.yes}
              </Button>
              <Button variant="contained" color="error" onClick={no}>
                {dict[lang as keyof typeof dict].button.no}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModal;
