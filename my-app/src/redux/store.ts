import { combineReducers, createStore } from "redux";
import { boardReducer } from "./reducers/boardReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import { loginReducer } from "./reducers/loginReducer";
import { tokenReducer } from "./reducers/tokenReducer";

const rootReducers = combineReducers({
  login: loginReducer,
  token: tokenReducer,
  boards: boardReducer,
  loading: loaderReducer,
});

export const store = createStore(rootReducers);
