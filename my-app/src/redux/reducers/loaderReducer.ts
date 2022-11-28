const defaultValue = {
  value: false,
};

export const loaderReducer = (
  state = defaultValue,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "ONLOAD": {
      return { ...state, value: action.payload };
    }
    case "LOADED": {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
