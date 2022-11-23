import { combineReducers, createStore } from "redux";
import { loginReducer } from "./reducers/loginReducer";
import { tokenReducer } from "./reducers/tokenReducer";

const rootReducers = combineReducers({
  login: loginReducer,
  token: tokenReducer,
});

export const store = createStore(rootReducers);
