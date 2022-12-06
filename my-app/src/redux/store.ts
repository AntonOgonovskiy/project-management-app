import { combineReducers, createStore } from "redux";
import { boardDataReducer } from "./reducers/boardDataReducer";
import { boardReducer } from "./reducers/boardReducer";
import { dataRemover } from "./reducers/dataRemoveReducer";
import { columnsReducer } from "./reducers/columnsReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import { loginReducer } from "./reducers/loginReducer";
import { ModalPropsReducer } from "./reducers/modalPropsReducer";
import { visReducer } from "./reducers/modalVisReducer";
import { tokenReducer } from "./reducers/tokenReducer";
import { langReducer } from "./reducers/langReducer";

const rootReducers = combineReducers({
  login: loginReducer,
  token: tokenReducer,
  boards: boardReducer,
  loading: loaderReducer,
  boardData: boardDataReducer,
  modalProps: ModalPropsReducer,
  columnList: columnsReducer,
  dataRemove: dataRemover,
  visibility: visReducer,
  lang: langReducer,
});

export const store = createStore(rootReducers);
