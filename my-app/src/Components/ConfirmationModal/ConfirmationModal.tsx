import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./ConfirmationModal.css";
import { remove, Loading } from "../../types";
import {
  getColumns,
  getUserBoards,
  removeBoard,
  removeColumn,
} from "../../API/api";
import { GetId } from "../../Utils/utils";
import { toastInfo } from "../../Toasts/toasts";

const ConfirmationModal = () => {
  const dispatch = useDispatch();
  const removeData = useSelector((state: remove) => state.columnRemove.value);
  const isLoad = useSelector((state: Loading) => state.visibility.value);

  const yes = async () => {
    if (removeData.type === "column") {
      await removeColumn(removeData.board, removeData.column);
      const cols = await getColumns(removeData.board);
      dispatch({ type: "COLUMN", payload: cols });
      toastInfo("Column Deleted");
    } else if (removeData.type === "board") {
      await removeBoard(removeData.board);
      const boards = await getUserBoards(GetId());
      dispatch({ type: "BOARD", payload: boards.data });
      toastInfo("Board Deleted");
    }
    dispatch({ type: "VISIBLE", payload: false });
    dispatch({ type: "DELETE", payload: "" });
  };

  const no = async () => {
    dispatch({ type: "VISIBLE", payload: false });
    dispatch({ type: "DELETE", payload: "" });
  };

  return (
    <>
      {isLoad && (
        <div className="confirmationWrapper">
          <div className="confirmationBox">
            <p className="confirmationTitle">Are you shure?</p>
            <div className="confirmationButtons">
              <Button
                variant="contained"
                color="success"
                id="yes"
                onClick={yes}
              >
                Yes
              </Button>
              <Button variant="contained" color="error" onClick={no}>
                No
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModal;
