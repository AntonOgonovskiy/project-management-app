import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserBoards, signIn } from "../API/api";
import { dict } from "../Dictionary/Dict";
import { toastError, toastSuccess } from "../Toasts/toasts";
import { user, lang } from "../types";
import { GetId } from "../Utils/utils";

const SignIn = () => {
  const lang = useSelector((state: lang) => state.lang.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const [user, setUser] = useState({
    login: login,
    password: password,
  });
  if (localStorage.getItem("token")) {
    navigate("/main");
  }

  const validate = () => {
    let isValid = true;

    if (login.length < 2 || !login.match(/^[a-zA-Z0-9_.]+$/)) {
      isValid = false;
    }
    if (password.length < 8 || !login.match(/^[a-zA-Z0-9_]+$/)) {
      isValid = false;
    }
    if (isValid) {
      setValid(true);
      return true;
    } else {
      setValid(false);
      return false;
    }
  };

  const logIn = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (validate()) {
      const data = user as user;
      const resp = await signIn(data);
      if (resp !== 401) {
        toastSuccess(dict[lang as keyof typeof dict].toasts.hello);
        dispatch({ type: "TOKEN", payload: resp.data.token });
        dispatch({ type: "LOGIN", payload: login });
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("login", data.login);
        const boards = await getUserBoards(GetId());
        dispatch({ type: "BOARD", payload: boards.data });
        navigate("/main");
      } else if (resp === 401) {
        toastError(dict[lang as keyof typeof dict].toasts.noUser);
      } else if (resp === 400) {
        toastError(dict[lang as keyof typeof dict].toasts.badReques);
      }
    }
  };

  useEffect(() => {
    setUser({
      login: login,
      password: password,
    });
    setValid(true);
  }, [login, password]);

  return (
    <div className="registrationBox">
      <form className="registrationWrapper" action="registration">
        <TextField
          autoComplete="off"
          style={{ marginBottom: "10px" }}
          required
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          id="outlined-required"
          label={
            valid
              ? dict[lang as keyof typeof dict].label.valLogin
              : dict[lang as keyof typeof dict].label.invalLogin
          }
        />
        <TextField
          autoComplete="off"
          style={{ marginBottom: "10px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          id="outlined-required"
          label={
            valid
              ? dict[lang as keyof typeof dict].label.valPass
              : dict[lang as keyof typeof dict].label.invalPass
          }
        />
        <Button
          variant="contained"
          color={valid ? "primary" : "error"}
          onClick={logIn}
        >
          {dict[lang as keyof typeof dict].button.logIn}
        </Button>
      </form>
      <div>
        <p>
          {dict[lang as keyof typeof dict].signInConfirm}{" "}
          <Link className="signLink" to="/sign_up">
            {dict[lang as keyof typeof dict].button.signUp}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
