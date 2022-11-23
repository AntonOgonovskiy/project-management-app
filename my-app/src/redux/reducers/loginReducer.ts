const defaultLogin = {
  login: localStorage.getItem("login") ? localStorage.getItem("login") : "",
};

export const loginReducer = (
  state = defaultLogin,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, login: action.payload };
    }
    default:
      return state;
  }
};
