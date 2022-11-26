import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decode } from "../types";

export const GetId = () => {
  const token: string = localStorage.getItem("token") as string;
  try {
    const jwt: decode = jwtDecode(token);
    const id = jwt.id;
    return id;
  } catch (error) {
    console.error();
    SignOut();
  }
};

export const SignOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  localStorage.clear();
  dispatch({ type: "TOKEN", payload: "" });
  dispatch({ type: "LOGIN", payload: "" });
  navigate("/");
};
