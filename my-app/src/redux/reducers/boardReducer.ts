const defaultBoard = {
  boards: [],
};

export const boardReducer = (
  state = defaultBoard,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "BOARD": {
      return { ...state, boards: action.payload };
    }
    default:
      return state;
  }
};
