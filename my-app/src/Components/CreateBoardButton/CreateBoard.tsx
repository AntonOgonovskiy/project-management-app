import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dict } from "../../Dictionary/Dict";
import { lang } from "../../types";

const CreateBoard = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({ type: "PROPS", payload: "board" });
    const modal = document.querySelector(".modalWrapper");
    modal?.classList.remove("unvise");
  };
  const lang = useSelector((state: lang) => state.lang.value);
  return (
    <Button
      style={{ marginRight: "10px" }}
      variant="contained"
      onClick={openModal}
    >
      {dict[lang as keyof typeof dict].button.addBoard}
    </Button>
  );
};

export default CreateBoard;
