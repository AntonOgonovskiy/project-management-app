import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../API/api";
import { user } from "../types";
import "./Pages.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    name: name,
    login: login,
    password: password,
  });
  const [valid, setValid] = useState(true);

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
      await signUp(data);
      setName("");
      setLogin("");
      setPassword("");
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
          label="Name"
          value={name}
        />
        <TextField
          autoComplete="off"
          style={{ marginBottom: "10px" }}
          required
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          id="outlined-required"
          label="Login"
        />
        <TextField
          autoComplete="off"
          style={{ marginBottom: "10px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          id="outlined-required"
          label="Password"
        />
        <Button
          onClick={createUser}
          variant="contained"
          color={valid ? "primary" : "error"}
        >
          Register
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
