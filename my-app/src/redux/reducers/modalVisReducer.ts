const defaultValue = {
  value: false,
};

export const visReducer = (
  state = defaultValue,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case "VISIBLE": {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
