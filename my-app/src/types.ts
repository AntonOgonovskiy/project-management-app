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
