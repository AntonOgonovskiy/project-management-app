import { Button } from "@mui/material";

const CreateBoard = () => {
  const openModal = () => {
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
