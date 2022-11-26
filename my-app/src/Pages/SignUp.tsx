import { Button, TextField } from "@mui/material";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserBoards, signIn, signUp } from "../API/api";
import { user, Login, decode } from "../types";
import "./Pages.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state: Login) => state.login.login);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const [user, setUser] = useState({
    name: name,
    login: login,
    password: password,
  });

  const validate = () => {
    let isValid = true;

    if (name.length < 2 || !name.match(/^[a-zA-Z]+$/)) {
      isValid = false;
    }
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

  const createUser = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (validate()) {
      const data = user as user;
      const signData = { login: data.login, password: data.password };
      await signUp(data);
      const resp = await signIn(signData);
      dispatch({ type: "TOKEN", payload: resp });
      const id: decode = jwtDecode(resp);
      localStorage.setItem("id", id.id);
      localStorage.setItem("token", resp);
      localStorage.setItem("login", data.login);
      const boards = await getUserBoards(id.id);
      dispatch({ type: "BOARD", payload: boards });
      navigate("/main");
    }
  };

  useEffect(() => {
    setUser({
      name: name,
      login: login,
      password: password,
    });
    setValid(true);
  }, [login, name, password]);

  return (
    <div className="registrationBox">
      <form className="registrationWrapper" action="registration">
        <TextField
          style={{ marginBottom: "10px" }}
          required
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
          id="outlined-required"
          label={valid ? "Name" : "At least 2 symbols a-z or A-Z"}
          value={name}
        />
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
          style={
            valid
              ? { marginBottom: "10px", color: "black" }
              : { marginBottom: "10px", color: "red" }
          }
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          id="outlined-required"
          label={valid ? "Password" : "At least 8 symbols a-z, A-Z or '_'"}
        />
        <Button
          onClick={createUser}
          variant="contained"
          color={valid ? "primary" : "error"}
        >
          Create Account
        </Button>
      </form>
      <div>
        <p>
          Already have an account?{" "}
          <Link className="signLink" to="/sign_in">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
