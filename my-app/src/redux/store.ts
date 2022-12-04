import { combineReducers, createStore } from "redux";
import { boardDataReducer } from "./reducers/boardDataReducer";
import { boardReducer } from "./reducers/boardReducer";
import { columnsRemover } from "./reducers/columnRemoveReducer";
import { columnsReducer } from "./reducers/columnsReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import { loginReducer } from "./reducers/loginReducer";
import { ModalPropsReducer } from "./reducers/modalPropsReducer";
import { visReducer } from "./reducers/modalVisReducer";
import { tokenReducer } from "./reducers/tokenReducer";

const rootReducers = combineReducers({
  login: loginReducer,
  token: tokenReducer,
  boards: boardReducer,
  loading: loaderReducer,
  boardData: boardDataReducer,
  modalProps: ModalPropsReducer,
  columnList: columnsReducer,
  columnRemove: columnsRemover,
  visibility: visReducer,
});

export const store = createStore(rootReducers);
