import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./ConfirmationModal.css";
import { confirm, Loading } from "../../types";
import { getColumns, removeColumn } from "../../API/api";

const ConfirmationModal = () => {
  const dispatch = useDispatch();
  const column = useSelector((state: confirm) => state.columnRemove.value);
  const isLoad = useSelector((state: Loading) => state.visibility.value);

  const yes = async () => {
    await removeColumn(column.board, column.column);
    const cols = await getColumns(column.board);
    dispatch({ type: "COLUMN", payload: cols });
    dispatch({ type: "VISIBLE", payload: false });
  };

  const no = async () => {
    dispatch({ type: "VISIBLE", payload: false });
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
