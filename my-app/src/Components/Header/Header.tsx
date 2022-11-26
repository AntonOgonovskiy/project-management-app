import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ControledSwitch from "./ControledSwitch";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import "./Header.css";
import CreateBoard from "../CreateBoardButton/CreateBoard";
import { useDispatch } from "react-redux";
import { getUserBoards } from "../../API/api";
import { GetId } from "../../Utils/utils";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.clear();
    dispatch({ type: "TOKEN", payload: "" });
    dispatch({ type: "LOGIN", payload: "" });
    navigate("/");
  };
  const getBoards = async () => {
    const boards = await getUserBoards(GetId());
    dispatch({ type: "BOARD", payload: boards });
  };
  return (
    <header className="headerWrapper">
      <div>
        <Link to="/" className="homeLink">
          Home
        </Link>
      </div>
      {localStorage.getItem("token") ? (
        <div className="headerButtonWrapper">
          <CreateBoard />
          <Link className="homeLink" to="/main">
            <Button
              style={{ marginRight: "10px" }}
              variant="contained"
              onClick={getBoards}
            >
              Main
            </Button>
          </Link>
          <Link className="homeLink" to="/profile">
            <Button style={{ marginRight: "10px" }} variant="contained">
              Edit profile
            </Button>
          </Link>
          <Button variant="contained" onClick={logOut}>
            Log out
          </Button>
        </div>
      ) : (
        <div className="headerButtonWrapper">
          <Link to="/sign_in" className="homeLink">
            <Button variant="contained" style={{ marginRight: "10px" }}>
              <LoginIcon style={{ marginRight: "3px" }} />
              Sign in
            </Button>
          </Link>
          <Link to="/sign_up" className="homeLink">
            <Button variant="contained">
              <HowToRegIcon style={{ marginRight: "3px" }} />
              Sign up
            </Button>
          </Link>
          <div className="switcherWrapper">
            <p style={{ color: "blue", fontSize: "20px", margin: 0 }}>EN</p>
            <ControledSwitch />
            <p style={{ color: "blue", fontSize: "20px", margin: 0 }}>RU</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
