import axios from "axios";
import { board, user } from "../types";

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

export const getUser = async (id: string) => {
  const response = await axiosClient
    .get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((e) => e.message);
  return response;
};

export const updUser = async (id: string, data: user) => {
  await axiosClient
    .put(`/users/${id}`, JSON.stringify(data), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((e) => e.message);
};
export const deleteUser = async (id: string) => {
  await axiosClient.delete(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getUserBoards = async (id: string | undefined) => {
  const response = await axiosClient
    .get(`/boardsSet/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((e) => e.message);
  return response.data;
};

export const addBoard = async (data: board | undefined) => {
  const response = await axiosClient
    .post(`/boards`, JSON.stringify(data), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((e) => e.message);
  return response;
};

export const removeBoard = async (id: string | undefined) => {
  const response = await axiosClient
    .delete(`/boards/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((e) => e.message);
  return response;
};

export const getBoard = async (id: string | undefined) => {
  const response = await axiosClient
    .get(`/boards/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((e) => e.message);
  return response.data;
};

export const addColumn = async (id: string, data: { title: string }) => {
  const response = await axiosClient
    .post(`/boards/${id}/columns`, JSON.stringify(data), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((e) => e.message);
  return response;
};

export const getColumns = async (id: string) => {
  const response = await axiosClient
    .get(`/boards/${id}/columns`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .catch((e) => e.message);
  return response.data;
};
