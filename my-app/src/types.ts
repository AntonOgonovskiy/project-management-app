import { ReactNode } from "react";

export interface user {
  name?: string;
  login: string;
  password: string;
}
export interface Login {
  login: {
    login: string;
  };
}
export interface Loading {
  loading: {
    value: boolean;
  };
  visibility: {
    value: boolean;
  };
}
export interface Token {
  token: {
    token: string;
  };
}
export interface columnList {
  columnList: {
    columns: {
      boardId: string;
      order: number;
      title: string;
      _id: string;
    };
  };
}
export interface BoardData {
  users: ReactNode;
  title?: string;
  boardData: {
    data: {
      title: string;
      owner: string;
      users: Array<string>;
    };
  };
}
export interface decode {
  exp: number;
  iat: number;
  id: string;
  login: string;
}
export interface board {
  title: string;
  users: string | Array<string>;
  owner: string | undefined;
  id?: string;
}
export interface boards {
  boards: {
    boards: {
      title: string;
      users: string;
      owner: string;
      length?: number;
    };
  };
}
export interface modalProps {
  modalProps: {
    props: string;
  };
}
export interface column {
  boardId: string;
  order: number;
  title: string;
  _id: string;
}
export interface remove {
  dataRemove: {
    value: {
      type: string;
      board: string;
      column: string;
    };
  };
}
export interface lang {
  lang: {
    value: string;
  };
}
