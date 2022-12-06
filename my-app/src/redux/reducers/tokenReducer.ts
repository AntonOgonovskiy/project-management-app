const defaultToken = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
};

export const tokenReducer = (
  state = defaultToken,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "TOKEN": {
      return { ...state, token: action.payload };
    }
    default:
      return state;
  }
};
