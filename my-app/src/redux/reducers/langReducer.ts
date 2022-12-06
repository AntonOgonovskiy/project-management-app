const defaultValue = {
  value: localStorage.getItem("lang") ? localStorage.getItem("lang") : "EN",
};

export const langReducer = (
  state = defaultValue,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "LANG": {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
