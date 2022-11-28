const defaultData = {
  data: "",
};

export const boardDataReducer = (
  state = defaultData,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "BOARD_DATA": {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};
