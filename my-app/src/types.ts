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
}
export interface Token {
  token: {
    token: string;
  };
}
export interface BoardData {
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
