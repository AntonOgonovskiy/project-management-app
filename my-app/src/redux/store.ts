import { combineReducers, createStore } from "redux";
import { boardDataReducer } from "./reducers/boardDataReducer";
import { boardReducer } from "./reducers/boardReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import { loginReducer } from "./reducers/loginReducer";
import { tokenReducer } from "./reducers/tokenReducer";

const rootReducers = combineReducers({
  login: loginReducer,
  token: tokenReducer,
  boards: boardReducer,
  loading: loaderReducer,
  boardData: boardDataReducer,
});

export const store = createStore(rootReducers);
