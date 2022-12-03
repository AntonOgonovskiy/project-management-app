import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

const CreateBoard = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({ type: "PROPS", payload: "board" });
    const modal = document.querySelector(".modalWrapper");
    modal?.classList.remove("unvise");
  };
  return (
    <Button
      style={{ marginRight: "10px" }}
      variant="contained"
      onClick={openModal}
    >
      + Create board
    </Button>
  );
};

export default CreateBoard;
