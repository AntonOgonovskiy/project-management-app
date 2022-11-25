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
export interface Token {
  token: {
    token: string;
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
  users: string;
  owner: string;
}
