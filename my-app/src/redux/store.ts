import { combineReducers, createStore } from "redux";
import { boardReducer } from "./reducers/boardReducer";
import { loginReducer } from "./reducers/loginReducer";
import { tokenReducer } from "./reducers/tokenReducer";

const rootReducers = combineReducers({
  login: loginReducer,
  token: tokenReducer,
  boards: boardReducer,
});

export const store = createStore(rootReducers);
