import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ControledSwitch from "./ControledSwitch";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div>
        <Link to="/" className="homeLink">
          Home
        </Link>
      </div>
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
    </div>
  );
};

export default Header;
