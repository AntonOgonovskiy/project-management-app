import axios from "axios";
import { user } from "../types";

const axiosClient = axios.create({
  baseURL: "https://back-production-8e4f.up.railway.app",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const signUp = async (data: user) => {
  const response = await axiosClient
    .post("/auth/signup", JSON.stringify(data))
    .then((resp) => resp.data)
    .catch((e) => e.message);
  return response;
};

export const signIn = async (data: user) => {
  const response = await axiosClient
    .post("/auth/signin", JSON.stringify(data))
    .catch((e) => e.message)
    .then((resp) => resp.data?.token);
  return response;
};

export const getAllBoards = async () => {
  const response = await axiosClient
    .get("/boards", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((e) => e.message);
  console.log(response);
};
