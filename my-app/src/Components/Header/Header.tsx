import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ControledSwitch from "./ControledSwitch";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import "./Header.css";
import { useDispatch } from "react-redux";
import CreateBoard from "../CreateBoardButton/CreateBoard";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signOut = () => {
    localStorage.clear();
    dispatch({ type: "TOKEN", payload: "" });
    dispatch({ type: "LOGIN", payload: "" });
    navigate("/");
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
            <Button style={{ marginRight: "10px" }} variant="contained">
              Main
            </Button>
          </Link>
          <Link className="homeLink" to="/profile">
            <Button style={{ marginRight: "10px" }} variant="contained">
              Edit profile
            </Button>
          </Link>
          <Button variant="contained" onClick={signOut}>
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
