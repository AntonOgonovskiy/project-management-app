const defaultProps = {
  props: "",
};

export const ModalPropsReducer = (
  state = defaultProps,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "PROPS": {
      return { ...state, props: action.payload };
    }
    default:
      return state;
  }
};
