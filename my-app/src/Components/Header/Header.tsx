import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ControledSwitch from "./ControledSwitch";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import "./Header.css";
import CreateBoard from "../CreateBoardButton/CreateBoard";
import { useDispatch, useSelector } from "react-redux";
import { getUserBoards } from "../../API/api";
import { GetId } from "../../Utils/utils";
import { useEffect, useRef, useState } from "react";
import { lang } from "../../types";
import { dict } from "../../Dictionary/Dict";

const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = useSelector((state: lang) => state.lang.value);

  const handleScroll = (elTopOffset: number, elHeight: number) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  const logOut = () => {
    localStorage.clear();
    dispatch({ type: "TOKEN", payload: "" });
    dispatch({ type: "LOGIN", payload: "" });
    navigate("/");
  };

  const getBoards = async () => {
    const boards = await getUserBoards(GetId());
    dispatch({ type: "BOARD", payload: boards.data });
  };

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      const headerPosition = header.getBoundingClientRect();
      const handleScrollEvent = () => {
        handleScroll(headerPosition.top, headerPosition.height);
      };
      window.addEventListener("scroll", handleScrollEvent);
      return () => {
        window.removeEventListener("scroll", handleScrollEvent);
      };
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={
        sticky.isSticky ? "headerWrapper headerSticky" : "headerWrapper "
      }
    >
      <Link className="homeLink" to="/">
        <Button
          style={{
            maxWidth: "150px",
            maxHeight: "30px",
            minWidth: "10px",
            minHeight: "30px",
            padding: "5px",
          }}
          variant="contained"
        >
          <p className="headerButtonName">
            {dict[lang as keyof typeof dict].button.home}
          </p>
        </Button>
      </Link>
      {localStorage.getItem("token") ? (
        <div className="headerButtonWrapper">
          <CreateBoard />
          <Link className="homeLink" to="/main">
            <Button
              style={{
                marginRight: "10px",
                maxWidth: "150px",
                maxHeight: "30px",
                minWidth: "10px",
                minHeight: "30px",
                padding: "5px",
              }}
              variant="contained"
              onClick={getBoards}
            >
              <p className="headerButtonName">
                {dict[lang as keyof typeof dict].button.main}
              </p>
            </Button>
          </Link>
          <Link className="homeLink" to="/profile">
            <Button
              style={{
                marginRight: "10px",
                maxWidth: "150px",
                maxHeight: "30px",
                minWidth: "10px",
                minHeight: "30px",
                padding: "5px",
              }}
              variant="contained"
            >
              <p className="headerButtonName">
                {dict[lang as keyof typeof dict].button.editProfile}
              </p>
            </Button>
          </Link>
          <Button
            style={{
              maxWidth: "150px",
              maxHeight: "30px",
              minWidth: "10px",
              minHeight: "30px",
              padding: "5px",
            }}
            variant="contained"
            onClick={logOut}
          >
            <p className="headerButtonName">
              {dict[lang as keyof typeof dict].button.logOut}
            </p>
          </Button>
          <div className="switcherWrapper">
            <p className="headerButtonName">EN</p>
            <ControledSwitch />
            <p className="headerButtonName">RU</p>
          </div>
        </div>
      ) : (
        <div className="headerButtonWrapper">
          <Link to="/sign_in" className="homeLink">
            <Button
              style={{
                marginRight: "10px",
                maxWidth: "150px",
                maxHeight: "30px",
                minWidth: "10px",
                minHeight: "30px",
                padding: "5px",
              }}
              variant="contained"
            >
              <LoginIcon style={{ marginRight: "3px" }} />
              <p className="headerButtonName">
                {dict[lang as keyof typeof dict].button.signIn}
              </p>
            </Button>
          </Link>
          <Link to="/sign_up" className="homeLink">
            <Button
              style={{
                maxWidth: "150px",
                maxHeight: "30px",
                minWidth: "10px",
                minHeight: "30px",
                padding: "5px",
              }}
              variant="contained"
            >
              <HowToRegIcon style={{ marginRight: "3px" }} />
              <p className="headerButtonName">
                {dict[lang as keyof typeof dict].button.signUp}
              </p>
            </Button>
          </Link>
          <div className="switcherWrapper">
            <p className="headerButtonName">EN</p>
            <ControledSwitch />
            <p className="headerButtonName">RU</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
