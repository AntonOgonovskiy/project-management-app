import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updUser } from "../API/api";
import { toastError, toastSuccess } from "../Toasts/toasts";
import { user } from "../types";
import { GetId } from "../Utils/utils";
import { lang } from "../types";
import { dict } from "../Dictionary/Dict";

const Profile = () => {
  const lang = useSelector((state: lang) => state.lang.value);
  const id: string = GetId() as string;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const [user, setUser] = useState({
    name: name,
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

  const updateUser = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (validate()) {
      const data = user as user;
      const resp = await updUser(id, data);
      if (resp.status === 200) {
        toastSuccess(dict[lang as keyof typeof dict].toasts.succsses);
        dispatch({ type: "LOGIN", payload: login });
        navigate("/main");
      } else if (resp === 409) {
        toastError(dict[lang as keyof typeof dict].toasts.loginExist);
      } else if (resp === 400) {
        toastError(dict[lang as keyof typeof dict].toasts.badReques);
      }
    }
  };

  const deleteAccount = async () => {
    const body = { type: "profile", board: id };
    dispatch({ type: "DELETE", payload: body });
    dispatch({ type: "VISIBLE", payload: true });
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
          label={
            valid
              ? dict[lang as keyof typeof dict].label.valName
              : dict[lang as keyof typeof dict].label.invalName
          }
          value={name}
        />
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
          onClick={updateUser}
        >
          {dict[lang as keyof typeof dict].button.updProfile}
        </Button>
      </form>
      <Button
        variant="contained"
        color="error"
        style={{ marginTop: "30px" }}
        onClick={deleteAccount}
      >
        {dict[lang as keyof typeof dict].button.delProfile}
      </Button>
    </div>
  );
};

export default Profile;
