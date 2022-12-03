const defaultColumns = {
  columns: [],
};

export const columnsReducer = (
  state = defaultColumns,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "COLUMN": {
      return { ...state, columns: action.payload };
    }
    default:
      return state;
  }
};
