import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../API/api";
import { Login, user } from "../types";

const SignIn = () => {
  const login = useSelector((state: Login) => state.login.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const [user, setUser] = useState({
    login: login,
    password: password,
  });

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
      if (resp) {
        dispatch({ type: "TOKEN", payload: resp });
        localStorage.setItem("token", resp);
        localStorage.setItem("login", data.login);
        navigate("/");
      } else {
        document.querySelector(".warning")?.classList.remove("unvise");
      }
    }
  };

  useEffect(() => {
    setUser({
      login: login,
      password: password,
    });
    setValid(true);
    document.querySelector(".warning")?.classList.add("unvise");
  }, [login, password]);

  return (
    <div className="registrationBox">
      <div className="warning unvise">No such User or incorrect password</div>
      <form className="registrationWrapper" action="registration">
        <TextField
          autoComplete="off"
          style={{ marginBottom: "10px" }}
          required
          onChange={(e) => dispatch({ type: "LOGIN", payload: e.target.value })}
          value={login}
          id="outlined-required"
          label={valid ? "Login" : "At least 2 symbols a-z, A-Z, '.' or '_'"}
        />
        <TextField
          autoComplete="off"
          style={{ marginBottom: "10px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          id="outlined-required"
          label={valid ? "Password" : "At least 8 symbols a-z, A-Z or '_'"}
        />
        <Button
          variant="contained"
          color={valid ? "primary" : "error"}
          onClick={logIn}
        >
          Log In
        </Button>
      </form>
      <div>
        <p>
          Don't have an account?{" "}
          <Link className="signLink" to="/sign_up">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
