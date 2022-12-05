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
      style={{
        marginRight: "10px",
        maxWidth: "250px",
        maxHeight: "30px",
        minWidth: "10px",
        minHeight: "30px",
      }}
      variant="contained"
      onClick={openModal}
    >
      <p className="headerButtonName">
        {dict[lang as keyof typeof dict].button.addBoard}
      </p>
    </Button>
  );
};

export default CreateBoard;
