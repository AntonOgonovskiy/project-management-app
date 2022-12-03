const defaultValue = {
  value: true,
};

export const loaderReducer = (
  state = defaultValue,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "LOADED": {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
