const defaultValue = {
  value: "",
};

export const columnsRemover = (
  state = defaultValue,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "DELETE": {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
