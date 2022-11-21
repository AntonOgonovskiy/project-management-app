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
    .then((resp) => resp.data);
  console.log(response);
  return response;
};
export const signIn = async (data: user) => {
  const response = await axiosClient
    .post("/auth/signin", JSON.stringify(data))
    .then((resp) => resp.data);
  console.log(response);
  return response;
};
