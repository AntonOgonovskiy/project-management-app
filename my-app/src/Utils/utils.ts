import jwtDecode from "jwt-decode";
import { decode } from "../types";

export const GetId = () => {
  const token: string = localStorage.getItem("token") as string;
  try {
    const jwt: decode = jwtDecode(token);
    const id = jwt.id;
    return id;
  } catch (error) {
    localStorage.clear();
  }
};
